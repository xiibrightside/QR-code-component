import "./App.css";
import qrcode from "./images/qrcode.png";

function App() {
  return (
    <div className="wrapper">
      <div className="qrcomp">
        <img className="qr" src={qrcode} alt="qr"></img>
      </div>
      <h3>Improve your front-end skills by building projects</h3>
      <p>
        Scan the OR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
