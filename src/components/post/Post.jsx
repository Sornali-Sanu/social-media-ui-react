import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Users } from "../../dummyData";
import { useState } from "react";
export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [islike, setisLike] = useState(false);

  const likeHandler = () => {
    setLike(islike ? like - 1 : like + 1);
    setisLike(!islike);
  };
  return (
    <div className="post">
      <div className="postWraper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].userName}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon
              htmlColor="blue"
              className="LikeIcon"
              onClick={likeHandler}
            />
            <FavoriteIcon
              htmlColor="red"
              className="heartIcon"
              onClick={likeHandler}
            />

            <span className="postLikeCount">{like} likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
