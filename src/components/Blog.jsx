import React from 'react';
import Togglable from './Togglable';

export default ({ user, blog, likeBlog, deleteBlog }) => <li className="blog" data-id={blog.id}>
    <a href={blog.url}>"{blog.title}" by {blog.author || 'Anonymous'}</a>
    <Togglable labelOpen="Show details" labelClose="Hide details">
        <div className="blog__details">
            <div className="blog__likes">
                <span>Liked by {blog.likes}</span>
                <button onClick={likeBlog}>Like</button>
            </div>
            {blog.user && <div className="blog__user-details">
                Submitted by {blog.user.username}
                {blog.user.username === user.username && <button onClick={deleteBlog}>Delete blog</button>}
            </div>}
        </div>
    </Togglable>
</li>;