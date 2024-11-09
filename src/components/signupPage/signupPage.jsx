import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Kullanıcı adı ve şifrenin doğrulaması
        if (password !== passwordConfirm) {
            setError('Passwords do not match!');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters long!');
        } else if (username && password && passwordConfirm) {
            // Şifreler aynı ve en az 6 karakter uzunluğunda ise yönlendir
            navigate('/');
        } else {
            setError('Please fill in all fields.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card login-signup p-4 shadow text-center">
                <h2 className="text-center mb-4">Please Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="username"
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
                            autoComplete="new-password"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            autoComplete="new-password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">Sign up</button>
                    {error && <p className="text-danger text-center">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Signup;
