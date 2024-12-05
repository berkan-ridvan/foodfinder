import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";
import logo from "../../assets/logo-white.png";
import Detail from "../detailPage/detailPage"; // Ensure this is a valid import
import { useLocation } from "react-router-dom";

function Main() {
    const url = "http://localhost:8787";
    const [selectedEstablishment, setSelectedEstablishment] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("American"); // Default category
    const [establishments, setEstablishments] = useState([]);
    const [filteredEstablishments, setFilteredEstablishments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();
    const accNumber = location.state?.accNumber;

    const categories = ["All", "Breakfast", "Coffee", "Burgers", "Pizza", "Mexican", "Seafood", "American", "Bar"];

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
                                aria-label="Search"
                                style={{ maxWidth: "500px" }}
                            />
                        </form>
                        <button className="btn color btn-outline-primary m-1 ms-auto" type="button">
                            Login
                        </button>
                        <button className="btn color btn-outline-primary m-1 ms-auto" type="button">
                            Sign Up
                        </button>
                    </div>
                </nav>
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
                                            <p className="card-text">{establishment.description}</p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Restaurant: {establishment.restaurant}
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
