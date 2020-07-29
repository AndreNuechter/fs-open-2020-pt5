import React from 'react';
import Blog from './Blog';

export default ({ blogs }) => <>
    <h2>Blogs</h2>
    <ul>
        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
        )}
    </ul>
</>;