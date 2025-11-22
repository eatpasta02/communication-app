export default function Home({ status, messages, text, setText, handleSend }) {
    return (
        <div className="container py-5">
        <h1 className="text-center mb-5">Krzysiu Mission Control</h1>

        <div className="row g-4 align-items-stretch">
            
            {/* PHOTO */}
            <div className="col-md-4">
                <div className="card h-100">
                    <div className="card-header fw-bold">Krzysiu</div>
                    <div className="card-body text-center">
                        <img 
                        src="/krzysiu.jpg" 
                        className="img-fluid rounded-circle shadow mb-3"
                        style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        alt="Krzysiu"
                        />
                        <p className="text-muted">Krzysiu</p>
                    </div>
                </div>
            </div>
            

            {/* STATUS */}
            <div className="col-md-8">
            <div className="card h-100">
                <div className="card-header fw-bold">Status Krzysia</div>
                <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Energia: <strong>{status.energy}</strong></li>
                    <li className="list-group-item">Tętno: <strong>{status.heartbeat}</strong></li>
                    <li className="list-group-item">Temperatura: <strong>{status.temperature}</strong></li>
                    <li className="list-group-item">Nastrój: <strong>{status.mood}</strong></li>
                </ul>
                </div>
            </div>
            </div>
        </div>

        <div className="row g-4 mt-4 align-items-stretch">
            {/* MESSAGE INPUT */}
            <div className="col-md-6">
            <div className="card h-100">
                <div className="card-header fw-bold">Wyślij wiadomość</div>
                <div className="card-body">
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Napisz wiadomość..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="btn btn-primary w-100" onClick={handleSend}>
                    Wyślij
                </button>
                </div>
            </div>
            </div>

            {/* HISTORY */}
            <div className="col-md-6" >
            <div className="card h-100">
                <div className="card-header fw-bold">Historia komunikacji</div>
                <div className="card-body" style={{ maxHeight: "300px", overflowY: "auto" }}>
                {messages.length === 0 && (
                    <p className="text-muted">Brak wiadomości...</p>
                )}

                {messages.map((msg, i) => (
                    <div key={i} className="mb-2">
                    <strong>{msg.author}:</strong> {msg.text}
                    </div>
                ))}
                </div>
            </div>
            </div>

        </div>
        </div>
    );
}