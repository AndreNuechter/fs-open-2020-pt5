import React from 'react';
import Togglable from './Togglable';

export default ({ blog, likeBlog }) => <li className="blog">
    <a href={blog.url}>"{blog.title}" by {blog.author || 'Anonymous'}</a>
    <Togglable labelOpen="Show details" labelClose="Hide details">
        <div data-id={blog.id} className="blog__details">
            <span>Liked by {blog.likes}</span>
            <button onClick={likeBlog}>Like</button>
        </div>
        {blog.user && <p>Submitted by {blog.user.username}</p>}
    </Togglable>
</li>;