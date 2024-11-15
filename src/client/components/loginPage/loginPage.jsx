import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-white.png';
import './index.scss';

const url = 'http://localhost:8787'

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(''); // Input from the user in the specified TextFields
    const [password, setPassword] = useState(''); // Input from the user in the specified TextFields
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        fetch(`${url}/posts/loginUser`, {
            method: "POST",
            headers: {
                "ContentType": "application/json"
            },
            body: JSON.stringify({user: username, pass: password})
        }).then(response => response.json()).then(data => {
            if (data.result) {
                setUser(data.loginId)
                navigate('/main')
            } else {
                setError("Wrong password or username")
            }
        }).catch(err => setError("Failed to login user!"));
    };

    // Fetch menu items to display on landing page
    console.log("Sending request")
    fetch(`${url}/main`).then(response => response.json()).then(data => {
        if (data.result) {
            console.log("Got data back!")
        }
    }).catch(err => {
        console.error(err)
    })

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card login-signup p-4 shadow text-center">
                <img className="img-fluid mb-4" style={{ maxWidth: '250px' }} src={logo} alt="Logo" />
                <form onSubmit={loginUser}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                    {error && <p className="text-danger text-center">{error}</p>}
                </form>
                <p className="text-center">
                    Don't have an account? <a href="/signup" className="text-primary">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
