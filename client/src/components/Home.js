
export default function Home({ status,updateStatus, messages, text, setText, handleSend }) {
    return (
        <div className="container py-5">
        <h1 className="text-center mb-5">Krzysiu Mission Control</h1>

        <div className="row g-4 align-items-stretch">
            
            {/* PHOTO */}
            <div className="col-md-4">
                <div className="card h-100">
                    <div className="card-header fw-bold text-center">Krzysiu</div>
                    <div className="card-body text-center">
                        <img
                            src={`${status.mood}.jpg`}
                            className="img-fluid rounded-circle shadow mb-3"
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                            alt="Krzysiu"
                            />
                        <p className="text-muted">Mood: {status.mood}</p>
                    </div>
                </div>
            </div>
            

            {/* STATUS */}
            <div className="col-md-8">
            <div className="card h-100">
                <div className="card-header fw-bold"> Krzysiu's status</div>
                <div className="card-body">
                {/* Energia */}
                <label className="form-label">Energy: {status.energy}</label>
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={status.energy}
                    className="form-range mb-3"
                    onChange={(e) => updateStatus("energy", Number(e.target.value))}
                />

                {/* Tętno */}
                <label className="form-label">Hearbeat: {status.heartbeat}</label>
                <input 
                    type="range"
                    min="30"
                    max="200"
                    value={status.heartbeat}
                    className="form-range mb-3"
                    onChange={(e) => updateStatus("heartbeat", Number(e.target.value))}
                />

                {/* Temperatura */}
                <label className="form-label">Temperature: {status.temperature} °C</label>
                <input 
                    type="range"
                    min="30"
                    max="45"
                    value={status.temperature}
                    className="form-range"
                    onChange={(e) => updateStatus("temperature", Number(e.target.value))}
                />
                </div>
            </div>
            </div>
        </div>

        <div className="row g-4 mt-4 align-items-stretch">
            {/* MESSAGE INPUT */}
            <div className="col-md-6">
            <div className="card">
                <div className="card-header fw-bold">Send a message</div>
                <div className="card-body">
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="write a message..."
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
                <div className="card-header fw-bold">History of communication</div>
                <div className="card-body" style={{ maxHeight: "300px", overflowY: "auto" }}>
                {messages.length === 0 && (
                    <p className="text-muted">No messages...</p>
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