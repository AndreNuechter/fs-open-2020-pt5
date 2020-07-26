import './App.css';
import React, { useState, useEffect } from 'react';
import blogService from './services/blogs';
import userService from './services/users';
import LoggedIn from './components/LoggedIn';
import LoginForm from './components/LoginForm';

const storageKey = 'user';

const App = () => {
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem(storageKey) || null));
    const [blogs, setBlogs] = useState([]);

    const logIn = (event) => {
        const credentials = Object.fromEntries(new FormData(event.target).entries());

        userService
            .logIn(credentials)
            .then((userData) => {
                setUser(userData);
                window.localStorage.setItem(storageKey, JSON.stringify(userData));
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                }
            }); // TODO notify user of error

        event.preventDefault();
    };
    const logOut = () => {
        window.localStorage.removeItem(storageKey);
        setUser(null);
    };

    useEffect(() => {
        if (user) {
            blogService // TODO returns all blogs and not just the user's
                .getUserBlogs(user)
                .then(response => {
                    setBlogs(response);
                });
        }
    }, [user]);

    return (<>
        {(!user && <LoginForm logIn={logIn} />) || <LoggedIn username={user.username} logOut={logOut} blogs={blogs} />}
    </>);
};

export default App;