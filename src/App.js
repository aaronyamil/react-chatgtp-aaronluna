const App = () => {
  return (
    <div className="App">
      <section className="side-bar">
        <button> + New Chat</button>
        <ul className="history">
          <li>Aaron</li>
        </ul>
        <nav>
          <p>Made by Aaron Luna</p>
        </nav>
      </section>
      <section className="main">
        <h1>LunaGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div>»</div>
          </div>
          <p className="info">
            This is LunaGPT. Our goal is to practice ReactJS and use some API,
            in this case the openAPI.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
