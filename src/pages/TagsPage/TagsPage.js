import React from "react";
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getTags } from '../../redux/tags/tags.actions';

import SideBar from "../../components/SideBar/SideBar";
import RightSideBar from "../../components/right-sideBar/right-sideBar";
import TagPanel from "./TagPanel";

import "./TagsPage.styles.scss";

const TagsPage = ({ getTags, tags, loading }) => {
  //   useEffect(() => {
  //     getTags();
  //   }, [getTags]);

  tags = [
    {
      tagname: "css",
      posts_count: 5,
      created_at: "31/09/2020 19:57:05",
    },
    {
      tagname: "html",
      posts_count: 17,
      created_at: "15/09/2020 19:57:05",
    },
    {
      tagname: "javascript",
      posts_count: 3,
      created_at: "05/09/2020 19:57:05",
    },
  ];

  return (
    <div className='page'>
      <SideBar />
      <div id='content'>
        <div id='mainbar' className='tags-page fc-black-800'>
          <h1 className='headline'>Tags</h1>
          <p className='fs-body'>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
          <div className='headline-count'>
            <span>1,025 tags</span>
          </div>
          <div className='user-browser'>
            <div className='grid-layout'>
              {tags.map((tag) => (
                <TagPanel key={tag.tagname} tag={tag} />
              ))}
            </div>
          </div>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

// TagsPage.propTypes = {
//   getTags: PropTypes.func.isRequired,
//   tag: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   tag: state.tag,
// });

// export default connect(mapStateToProps, { getTags })(TagsPage);
export default TagsPage;
