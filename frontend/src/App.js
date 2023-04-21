import React, { useEffect, useState } from 'react';

const backendUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : process.env.BACKEND_URL;

const App = () => {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    const backendConnection = () => {
      fetch(`${backendUrl}/`)
        .then(response => response.json())
        .then(data => setBackendMessage(data));
    }

    backendConnection();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1> {backendMessage} </h1>
    </div>
  );
}

export default App;
