import "./login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };
  const gotoRegister = () => {
    navigate("/reg");
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton" onClick={goToProfile}>
              Log In
            </button>
            <span className="loginForget">Forget Password?</span>
            <button className="loginRegister" onClick={gotoRegister}>
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
