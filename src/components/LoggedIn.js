import React from 'react';
import BlogsList from './BlogsList';

const LoggedIn = ({ username, logOut, blogs }) => (
    <div>
        Logged in as {username}
        <button onClick={logOut}>Log Out</button>
        <BlogsList blogs={blogs} />
    </div>
);

export default LoggedIn;