import React from 'react';
import BlogsList from './BlogsList';
import BlogCreationForm from './BlogCreationForm';
import Togglable from './Togglable';

export default ({ user, logOut, blogs, addBlog, likeBlog, deleteBlog, getRef }) => <div>
    Logged in as {user.username}
    <button onClick={logOut}>Log Out</button>
    <Togglable labelOpen="Create Blog" ref={getRef()}>
        <BlogCreationForm token={user.token} addBlog={addBlog} />
    </Togglable>
    <BlogsList blogs={blogs} likeBlog={likeBlog} deleteBlog={deleteBlog} user={user} />
</div>;