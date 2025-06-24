import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/home");
  };
  return (
    <div className="login">
      <div className="loginWraper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialApp</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialApp
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />

            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton" onClick={goToLogin}>
              Sign Up
            </button>

            <button className="loginRegister" onClick={goToHome}>
              Log Into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
