import React from 'react';

export default ({ addBlog }) => <form onSubmit={addBlog}>
    <h2>Add new Blog</h2>
    <label>
        <span>Title:</span>
        <input name="title" />
    </label>
    <label>
        <span>Author:</span>
        <input name="author" />
    </label>
    <label>
        <span>Likes:</span>
        <input type="number" min="0" step="1" defaultValue="0" name="likes" />
    </label>
    <label>
        <span>URL:</span>
        <input name="url" />
    </label>
    <button>Add Blog</button>
</form>;