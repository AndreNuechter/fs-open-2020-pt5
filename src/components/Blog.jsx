import React from 'react';

export default ({ blog }) => <li>
    "{blog.title}" by {blog.author || 'Anonymous'}
</li>;