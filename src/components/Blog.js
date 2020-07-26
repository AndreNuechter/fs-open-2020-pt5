import React from 'react';

const Blog = ({ blog }) => (
    <li>
        "{blog.title}" by {blog.author || 'Anonymous'}
    </li>
);

export default Blog;