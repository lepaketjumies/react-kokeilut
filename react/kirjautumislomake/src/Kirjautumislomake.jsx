import "./kirjautumislomake.css";

export default function KirjautumisLomake() {
  return (
    <>
      <p>Tervetuloa verkkosivuilleni!</p>
      <div className="form">
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
      </div>
      <button>Kirjaudu</button>
      <button>Luo</button>
    </>
  );
}
