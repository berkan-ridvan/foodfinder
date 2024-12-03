import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";
import logo from "../../assets/logo-white.png";
import Detail from "../detailPage/detailPage"; // Ensure this is a valid import

function Main() {
    const url = "http://localhost:8787";
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("American"); // Default category
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const categories = ["All", "Breakfast", "Coffee", "Burgers", "Pizza", "Mexican", "Seafood", "American"];

    // Fetch meals on component load
    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await fetch(`${url}/api/getEstablishments`);
                const data = await response.json();
                if (data.result) {
                    setMeals(data.establishments);
                    setFilteredMeals(data.establishments);
                }
            } catch (error) {
                console.error("Error fetching meals:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMeals();
    }, []);

    // Update filtered meals when category changes
    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredMeals(meals);
        } else {
            setFilteredMeals(meals.filter((meal) => meal.category === selectedCategory));
        }
    }, [meals, selectedCategory]);

    // Handlers
    const handleCategoryClick = useCallback((category) => {
        setSelectedCategory(category);
    }, []);

    const handleCardClick = useCallback((meal) => {
        setSelectedMeal(meal);
    }, []);

    const handleCloseDetails = useCallback(() => {
        setSelectedMeal(null);
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
                            {filteredMeals.map((meal) => (
                                <div
                                    key={meal.id}
                                    className="col-12 col-md-6 col-lg-3"
                                    onClick={() => handleCardClick(meal)}
                                >
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{meal.title}</h5>
                                            <p className="card-text">{meal.description}</p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Restaurant: {meal.restaurant}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Distance: {meal.distance}
                                                </small>
                                            </p>
                                            <p className="card-text text-end fw-bold">{meal.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Details Popup */}
                {selectedMeal && (
                    <div className="content mt-4">
                        <div className="content-overlay" onClick={handleCloseDetails}></div>
                        <div className="content-popup">
                            <Detail meal={selectedMeal} onClose={handleCloseDetails} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Main;
