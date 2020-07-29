import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import blogService from './services/blogs';
import userService from './services/users';
import LoggedIn from './components/LoggedIn';
import LoginForm from './components/LoginForm';
import Toast from './components/Toast';

const storageKey = 'user';
let timeoutId;

export default () => {
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem(storageKey) || null));
    const [blogs, setBlogs] = useState([]);
    const [msg, setMsg] = useState('');
    const [cls, setCls] = useState('');
    const blogCreationFormRef = useRef();
    const setToast = (text, type) => {
        setMsg(text);
        setCls(type);

        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => setMsg(''), 5000);
    };
    const logIn = (event) => {
        const credentials = Object.fromEntries(new FormData(event.target).entries());

        userService
            .logIn(credentials)
            .then((userData) => {
                setUser(userData);
                window.localStorage.setItem(storageKey, JSON.stringify(userData));
                setToast(`Welcome ${userData.username}`, 'success');
            })
            .catch((error) => {
                if (error.response) {
                    setToast(error.response.data.error, 'error');
                }
            });

        event.preventDefault();
    };
    const logOut = () => {
        window.localStorage.removeItem(storageKey);
        setUser(null);
        setToast(`Logged out`, 'success');
    };
    const addBlog = (event) => {
        const newBlog = Object.fromEntries(new FormData(event.target).entries());
        blogCreationFormRef.current.toggleVisibility();
        blogService
            .addOne(newBlog, user.token)
            .then(response => {
                setBlogs([...blogs, response]);
                setToast(`Added ${newBlog.title} by ${newBlog.author}`, 'success');
            })
            .catch((error) => {
                if (error.response) {
                    setToast(error.response.data.error, 'error');
                }
            });
        event.preventDefault();
    };

    useEffect(() => {
        if (user) {
            blogService
                .getAll()
                .then(response => {
                    setBlogs(response);
                });
        }
    }, [user]);

    return <>
        <Toast msg={msg} cls={cls} />
        {(!user && <LoginForm logIn={logIn} />) || <LoggedIn
            getRef={() => blogCreationFormRef}
            user={user}
            blogs={blogs}
            logOut={logOut}
            addBlog={addBlog} />}
    </>;
};