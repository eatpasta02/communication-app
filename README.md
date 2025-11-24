
--Co robi?

-Wyświetla status Krzysia: poziom energii, tętno, temperaturę i nastrój.
-Umożliwia wysyłanie wiadomości do Krzysia przez pole tekstowe.
-Wyświetla historię komunikacji przechowywaną bazie danych.
-Symuluje odpowiedzi Krzysia – po każdej wiadomości użytkownika odpisuje losową odpowiedź.

--Technologie

-Frontend: React.js
-Backend: Python, Flask
-Baza danych: SQLite
-Konteneryzacja: Docker, Docker Compose
-Inne: CORS



--Uruchomienie

wymagane:
-Docker i Docker Compose


->Sklonuj repozytorium:

```bash
git clone https://github.com/eatpasta02/communicatio-app.git
cd communication-app
docker compose up --build
```

->Alternatywnie (lokalnie bez Dockera)

Backend:

cd flask-server
python app.py


Frontend:

cd client
npm install
npm start
