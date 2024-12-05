import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";
import logo from "../../assets/logo-white.png";
import Detail from "../detailPage/detailPage"; // Ensure this is a valid import
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Main() {
    const url = "http://localhost:8787";
    const [selectedEstablishment, setSelectedEstablishment] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All"); // Default category
    const [establishments, setEstablishments] = useState([]);
    const [filteredEstablishments, setFilteredEstablishments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();
    const accNumber = location.state?.accNumber;

    const categories = ["All", "Mexican", "American", "Bar", "Tea", "Vietnamese", "Chinese", "Bakery", "Southern", "Deli", "Soul Food", "Food Truck"];

    // Fetch establishments on component load
    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await fetch(`${url}/api/getEstablishments`);
                const data = await response.json();
                if (data.result) {
                    setEstablishments(data.establishments);
                    setFilteredEstablishments(data.establishments);
                }
            } catch (error) {
                console.error("Error fetching establishments:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMeals();
    }, []);

    // Update filtered establishments when category changes
    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredEstablishments(establishments);
        } else {
            setFilteredEstablishments(establishments.filter((establishment) => establishment.category === selectedCategory));
        }
    }, [establishments, selectedCategory]);

    // Handlers
    const handleCategoryClick = useCallback((category) => {
        setSelectedCategory(category);
    }, []);

    const handleCardClick = useCallback((establishment) => {
        setSelectedEstablishment(establishment);
    }, []);

    const handleCloseDetails = useCallback(() => {
        setSelectedEstablishment(null);
    }, []);

    // Show loading spinner
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* Header */}
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid header-navbar">
                    <a className="navbar-brand" href="#">
                        <img
                        className="img-fluid"
                        style={{ maxWidth: "250px" }}
                        src={logo}
                        alt="Logo"
                        />
                    </a>
                    <form className="d-flex justify-content-center flex-grow-1">
                        <input
                        type="search"
                        className="form-control rounded-pill"
                        placeholder="Search..."
                        style={{ maxWidth: "500px", border: "1px solid grey" }}
                        />
                    </form>
                    <button
                        className="btn color btn-outline-primary m-1 ms-auto"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#profileModal"
                    >
                        Profile
                    </button>
                    </div>
                </nav>

                {/* Modal */}
                <div
                    className="modal fade"
                    id="profileModal"
                    tabIndex="-1"
                    aria-labelledby="profileModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="profileModalLabel">
                            Profile Information
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        </div>
                        <div className="modal-body">
                        <p><strong>Name:</strong> John Doe</p>
                        <p><strong>Email:</strong> johndoe@example.com</p>
                        <p><strong>Role:</strong> User</p>
                        </div>
                        <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </header>

            <hr className="hr" />

            {/* Main Content */}
            <div className="container-fluid down-box">
                <div className="row g-3">
                    {/* Sidebar */}
                    <div className="col-12 col-md-3 col-lg-2 bg-white p-3 left-sidebar">
                        <ul className="list-unstyled">
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className="mb-3"
                                    onClick={() => handleCategoryClick(category)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <a className="text-dark link-hover">
                                        <i className={`fas fa-${category.toLowerCase()} me-2`}></i>
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Content Section */}
                    <div className="col-12 col-md-9 col-lg-10 bg-white p-3 content-box">
                        <h5 className="fw-bold">CONTENT</h5>
                        <div className="row g-3">
                            {filteredEstablishments.map((establishment) => (
                                <div
                                    key={establishment.id}
                                    className="col-12 col-md-6 col-lg-3"
                                    onClick={() => handleCardClick(establishment)}
                                >
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{establishment.title}</h5>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    - {establishment.category}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Distance: {establishment.distance}
                                                </small>
                                            </p>
                                            <p className="card-text text-end fw-bold">{establishment.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Details Popup */}
                {selectedEstablishment && (
                    <div className="content mt-4">
                        <div className="content-overlay" onClick={handleCloseDetails}></div>
                        <div className="content-popup">
                            <Detail accNumber={accNumber} establishment={selectedEstablishment} onClose={handleCloseDetails} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Main;
