import React from 'react';
import Blog from './Blog';

export default ({ blogs, likeBlog }) => <>
    <h2>Blogs</h2>
    <ul className="blogs-list">
        {blogs.slice().sort((a, b) => b.likes - a.likes).map(blog =>
            <Blog key={blog.id} blog={blog} likeBlog={likeBlog} />
        )}
    </ul>
</>;