import React from 'react';

export default ({ logIn }) => <form onSubmit={logIn}>
    <h2>Login</h2>
    <label>
        <span>Username:</span>
        <input name="username" />
    </label>
    <label>
        <span>Password:</span>
        <input name="password" type="password" />
    </label>
    <button>Log In</button>
</form>;