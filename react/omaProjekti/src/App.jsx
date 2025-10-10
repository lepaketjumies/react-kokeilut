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
      <main className="main">
        <div className="centered-content">
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              numquam magni neque quam animi optio, iusto aspernatur ad et esse
              explicabo. Aliquid necessitatibus perspiciatis unde, reprehenderit
              modi corporis id eos?
            </p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos aperiam
          quaerat magnam sit, temporibus officia neque excepturi enim, deleniti
          labore molestias beatae. Nemo doloremque amet obcaecati sint
          repudiandae harum incidunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          pariatur cum eum. Enim similique, quo est dignissimos illo doloremque
          necessitatibus incidunt accusamus voluptate veritatis itaque sunt ab
          architecto optio rerum!
        </p>
      </main>
    </div>
  );
}
