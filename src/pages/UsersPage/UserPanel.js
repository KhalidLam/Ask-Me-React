import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

import "./UserPanel.styles.scss";

// ({ user: { id, username, created_at, posts_count, tags_count },})
const UserPanel = ({
  user: { id, name, created_at, posts_count, tags_count },
}) => {
  return (
    <div className='user-panel-info s-card bs-sm h:bs-md fc-black-500'>
      <div className='user-gravatar'>
        <Link to={`/users/${id}`}>
          <div className='logo-wrapper'>
            <img
              alt='user-logo'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEXw8PBpfN3y8vBfdNz29vFmet2GlODY2+yMmeHT1uvW2ezc3u1bcdx/jt+EkuBjd9zr7O9Ta9v8+/KbpuN1ht5vgd6/xehcBCHdAAACJUlEQVR4nO3cSW4bURBEQao5ikNT1uD7H9Xy0t50fqCaKELxDvCRQRFaEbXZSJIkSZL0U5uinvipt/Mx6JI81vOp6fxru9z1tnvWpzbTcfuy3P6QzGr5VNNZhIT9ZxES9p9FSNh/FiFh/1mEhP1nERL2n0VI2H8WIWH/WYSE/WcREvafRUjYf1at8Lpf7n543y13yWZFT0Wr5kh4uR2CPk9Bh30gfPlKnpqTVfNHItxMwSe6ez/dg880An7/FYOux2RWBMzancL1VW1fs18DERISEhISEhISEhISEhISEhISEhISEhISEhISEhL+U3Kd4fHC84OvRlyyHyHcg0MI2+yl3w++GpHOOr8udpzLPqzKqxFZ0Ver8Atf+ZuorOjfA+FAhITjERKORkg4HiHhaISE4xESjkZIOB4h4WiEhOMREo5GSDgeIeFohIT/vVZ1JqDweEGp8Cs5LXGbk4MQn9FTCbH2tknduY7KIyKut/SdRUjYfxYhYf9ZhIT9ZxES9p9FSNh/FiFh/1mEhP1nERL2n0VI2H8WIWH/WYSE/Wd1FUbnGaJDCF2Fb8s3I/6ejQh+dNNUGF1JyQ6SdBXWRUi41lt1ERKu9VZdhIRrvVUXIeFab9VFSLjWW3UREq71Vl2EhGu9VRch4Vpv1UVIuNZbdRESrvVWXYSEa71VV60wOhMwP1pYt2q63IIjDvPHg4WVq6bghsN3a5ueYpUkSZIkSW36A9+/m8h7H2QPAAAAAElFTkSuQmCC'
            />
          </div>
        </Link>
      </div>
      <div className='user-details'>
        <Link className='fc-blue-600' to={`/users/${id}`}>
          {name}
        </Link>
        <span className='post-count'>questions - {posts_count}</span>
        <span className='tag-count'>tags - {tags_count}</span>
        <span style={{ fontSize: "11px", float: "right" }}>
          {moment(created_at).fromNow(true)} ago
        </span>
      </div>
    </div>
  );
};

// UserPanel.propTypes = {
//     user: PropTypes.object.isRequired
// };

export default UserPanel;
