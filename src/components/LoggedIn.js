import React from 'react';
import BlogsList from './BlogsList';
import BlogCreationForm from './BlogCreationForm';

const LoggedIn = ({ user, logOut, blogs, addBlog }) => (
    <div>
        Logged in as {user.username}
        <button onClick={logOut}>Log Out</button>
        <BlogCreationForm token={user.token} addBlog={addBlog} />
        <BlogsList blogs={blogs} />
    </div>
);

export default LoggedIn;