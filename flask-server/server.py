from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import random
import sqlite3


app = Flask(__name__)
CORS(app, resources={"*": {"origins": "*"}})


messages = []

current_status = {
        "energy": 80,
        "heartbeat": 72,
        "temperature": 36.6,
        "mood": "fine"
    }

alien_responses = [
    "Bzzz... over. What's that signal?",
    "Your planet is interesting, inhabitant.",
    "I'm analyzing your words... interesting.",
    "Sorry, my translator is still learning.",
    "Do you have anything to trade?",
    "I received a message. Greetings from orbit.",
    "Your civilization is weird!",
    "Please provide more data for analysis.",
]


DATABASE = "database.db"

def init_db():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author TEXT NOT NULL,
            text TEXT NOT NULL
        )
    ''')

    conn.commit()
    conn.close()

    print("Database and 'messages' table created")

init_db()

def fetch_messages_from_db():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM messages')
    rows = cursor.fetchall()
    conn.close()
    return [{"author": r[1], "text": r[2]} for r in rows]


def insert_message_to_db(author, text):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO messages (author, text) VALUES (?, ?)', (author, text))
    conn.commit()
    conn.close()


@app.get("/status")
def update_status():
    return jsonify(current_status)


@app.get("/messages")
def get_messages():
    return fetch_messages_from_db()
    # return ([
    #     {"author": "Ziemia", "text": msg}
    #     for msg in messages
    # ])



@app.post("/messages")
def post_message():
    data = request.json
    text = data.get("message") or data.get("text")

    if not text:
        return {"error": "No message"}, 400

    insert_message_to_db("Earth", text)

    alien_reply = random.choice(alien_responses)
    insert_message_to_db("Alien", alien_reply)

    return {"ok": True}



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)


    