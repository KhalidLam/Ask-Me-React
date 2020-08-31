import React, { Fragment } from "react";
// import { connect } from 'react-redux';
// import { getUsers } from '../../redux/users/users.actions';
// import PropTypes from 'prop-types';

import SideBar from "../../components/SideBar/SideBar";
import RightSideBar from "../../components/right-sideBar/right-sideBar";
import UserPanel from "./UserPanel";

import "./UsersPage.styles.scss";

// ({ getUsers, user: { users, loading } })
const UsersPage = ({ getUsers, users, loading }) => {
  //   useEffect(() => {
  //     getUsers();
  //   }, [getUsers]);

  users = [
    {
      id: 1,
      username: "Gordon Linoff",
      created_at: "2020-08-26T12:37:35.000Z",
      posts_count: 717,
      tags_count: "sql, sql-server, mysql",
    },
    {
      id: 2,
      username: "BEN_YO",
      created_at: "2020-08-26T12:37:35.000Z",
      posts_count: 516,
      tags_count: "r, dplyr, dataframe",
    },
    {
      id: 3,
      username: "Ronak Shah",
      created_at: "2020-08-26T12:37:35.000Z",
      posts_count: 251,
      tags_count: "pandas, python, dataframe",
    },
  ];

  return loading || users === null ? (
    <Fragment>Loading...</Fragment>
  ) : (
    <Fragment>
      <div className='page'>
        <SideBar />
        <div id='content'>
          <div id='mainbar' className='users-page fc-black-800'>
            <h1 className='headline'>Users</h1>
            <div className='headline-count'>
              <span>1,025 users</span>
            </div>
            <div className='user-browser'>
              <div className='grid-layout'>
                {users.map((user) => (
                  <UserPanel key={user.id} user={user} />
                ))}
              </div>
            </div>
          </div>
          <RightSideBar />
        </div>
      </div>
    </Fragment>
  );
};

// UsersPage.propTypes = {
//   getUsers: PropTypes.func.isRequired,
//   user: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   user: state.user,
// });

// export default connect(mapStateToProps, { getUsers })(UsersPage);
export default UsersPage;
