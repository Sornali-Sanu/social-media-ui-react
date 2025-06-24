import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "./../../components/rightbar/Rightbar";
import Feed from "./../../components/feed/Feed";
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/post/post6.jpeg"
                alt=""
                className="profileCoverImage"
              />
              <img
                src="/assets/profile/profile3.jpeg"
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Sornali Akter</h4>
              <span className="profileInfoDescription">
                Everlasting Beauty is the beauty of heart
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
