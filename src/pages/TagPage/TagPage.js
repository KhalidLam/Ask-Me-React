import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getTagPosts } from '../../redux/posts/posts.actions';

import SideBar from "../../components/SideBar/SideBar";
import PostItem from "../../components/PostItem/PostItem";
import RightSideBar from "../../components/right-sideBar/right-sideBar";

// const TagPage = ({ getTagPosts, post: { posts, loading }, match }) => {
const TagPage = ({ getTagPosts, posts, loading, match }) => {
  //   useEffect(() => {
  //     getTagPosts(match.params.tagname);
  //     // eslint-disable-next-line
  //   }, [getTagPosts]);

  posts = [
    {
      answer_count: 0,
      body:
        "Ut saepe voluptas et. Sit suscipit consequuntur sequi repudiandae quo porro. Quos doloribus ipsum quas omnis quo error quod. Repellat eum repellendus non labore nemo.\n\nDolorum voluptas dolor facere fuga dolore. Distinctio eos consequatur eos id eos. Enim sit sed autem aperiam ea atque non.\n\nEsse fuga enim eligendi. Ratione atque voluptate ad nulla est ut ex. Molestias et impedit cupiditate. Corrupti fuga quasi sit ut.\n\nEsse consectetur rerum dolores omnis molestiae. Ut voluptas necessitatibus fa...",
      comment_count: 0,
      created_at: "2020-08-26T12:37:35.000Z",
      id: 1,
      tag_id: 1,
      tagname: "css html",
      title:
        "Natus placeat eum est sed nemo vel voluptatibus quibusdam dolores enim animi et quos",
      user_id: 1,
      username: "testuser",
    },
  ];

  return loading || posts === null ? (
    <Fragment>Loading...</Fragment>
  ) : (
    <Fragment>
      <div className='page'>
        <SideBar />

        <div id='content'>
          <div id='mainbar' className='questions-page fc-black-800'>
            <div className='questions-grid'>
              <h3 className='questions-headline'>
                Questions tagged [{match.params.tagname}]
              </h3>
              <div className='questions-btn'>
                <Link to='/add/question'>
                  <button className='s-btn s-btn__primary'>Ask Question</button>
                </Link>
              </div>
            </div>
            <div className='questions-tabs'>
              <span>19,204,360 questions</span>
            </div>
            <div className='questions'>
              {posts.length === 0 ? (
                <h4 style={{ margin: "30px 30px" }}>
                  There are no questions from this tag
                </h4>
              ) : (
                posts.map((post) => <PostItem key={post.id} post={post} />)
              )}
            </div>
          </div>
          <RightSideBar />
        </div>
      </div>
    </Fragment>
  );
};

// TagPage.propTypes = {
//   getTagPosts: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   post: state.post,
// });

// export default connect(mapStateToProps, { getTagPosts })(TagPage);
export default TagPage;
