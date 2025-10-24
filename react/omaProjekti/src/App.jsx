import "./styles.css";

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>Lenni Kämäläinen</h1>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="">link 1</a>
            </li>
            <li>
              <a href="">link 2</a>
            </li>
            <li>
              <a href="">link 3</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2 style={{ textAlign: "center" }}>Welcome to my website</h2>
      </main>
    </div>
  );
}
