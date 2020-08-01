import React from 'react';
import Blog from './Blog';

export default ({ user, blogs, likeBlog, deleteBlog }) => <>
    <h2>Blogs</h2>
    <ul className="blogs-list">
        {blogs.slice().sort((a, b) => b.likes - a.likes).map(blog =>
            <Blog key={blog.id} blog={blog} likeBlog={likeBlog} deleteBlog={deleteBlog} user={user} />
        )}
    </ul>
</>;