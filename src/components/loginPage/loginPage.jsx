import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/logo-white.png';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        if (username === '1' && password === '1') {
            navigate('/main');
        } else {
            setError('Wrong Password or Username!');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card login-signup p-4 shadow text-center">
                <img className="img-fluid mb-4" style={{ maxWidth: '250px' }} src={logo} alt="Logo" />
                <form onSubmit={handleSubmit}>
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
