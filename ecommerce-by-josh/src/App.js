import "./index.css";

function App() {
  return (
    <div className="container">
      <section className="text-container">
        <div>
          <h1>Ecommerce</h1>
          <h1>Web UI Kit</h1>
          <img
            src="./images/vector.png"
            alt="vector"
            width={"200px"}
            height={"200px"}
          />
          <ul>
            <li>Admin Dashboard</li>
            <li>Website Pages</li>
            <li>Design System</li>
          </ul>
        </div>
      </section>
      <section className="img-container">
        <img
          src="./images/commerce.png"
          alt="commerce"
          width={"900px"}
          height={"600px"}
        />
      </section>
    </div>
  );
}

export default App;
