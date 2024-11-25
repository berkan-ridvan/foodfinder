import React, { useState } from "react";
import "./index.scss";
import logo from "../../assets/logo-white.png";
import Detail from "../detailPage/detailPage";

function Main() {
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All"); // all categories

    const handleCardClick = (meal) => {
        setSelectedMeal(meal); // select restuarant
    };

    const handleCloseDetails = () => {
        setSelectedMeal(null); // close popup
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // update selected category
    };

    const meals = [
        {
            id: 1,
            title: "Breakfast Restaurant Name 1",
            description: "A delicious meal with great taste.",
            restaurant: "Restaurant 1",
            distance: "1.5 km",
            price: "$15.00",
            details: "This is a more detailed description of Meal 1.",
            category: "Breakfast",
        },
        {
            id: 2,
            title: "Coffee Restaurant Name 2",
            description: "Another tasty meal for your enjoyment.",
            restaurant: "Restaurant 2",
            distance: "2.0 km",
            price: "$12.00",
            details: "This is a more detailed description of Meal 2.",
            category: "Coffee",
        },
        {
            id: 3,
            title: "Burgers Restaurant Name 3",
            description: "A classic meal with traditional flavors.",
            restaurant: "Restaurant 3",
            distance: "3.0 km",
            price: "$10.00",
            details: "This is a more detailed description of Meal 3.",
            category: "Burgers",
        },
        {
            id: 4,
            title: "Pizza Restaurant Name 4",
            description: "An exotic meal with unique ingredients.",
            restaurant: "Restaurant 4",
            distance: "4.0 km",
            price: "$20.00",
            details: "This is a more detailed description of Meal 4.",
            category: "Pizza",
        },
        {
            id: 5,
            title: "Mexican Restuarant Name 5",
            description: "An exotic meal with unique ingredients.",
            restaurant: "Restaurant 4",
            distance: "4.0 km",
            price: "$20.00",
            details: "This is a more detailed description of Meal 4.",
            category: "Mexican",
        },
        {
            id: 6,
            title: "Seafood Restuarant Name 6",
            description: "An exotic meal with unique ingredients.",
            restaurant: "Restaurant 4",
            distance: "4.0 km",
            price: "$20.00",
            details: "This is a more detailed description of Meal 4.",
            category: "Seafood",
        },
        {
            id: 7,
            title: "Pizza Restuarant Name 7",
            description: "An exotic meal with unique ingredients.",
            restaurant: "Restaurant 4",
            distance: "4.0 km",
            price: "$20.00",
            details: "This is a more detailed description of Meal 4.",
            category: "Pizza",
        },
    ];

    // filter
    const filteredMeals =
        selectedCategory === "All"
            ? meals
            : meals.filter((meal) => meal.category === selectedCategory);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg ">
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
                        <button
                            className="btn color btn-outline-primary m-1 ms-auto"
                            type="button"
                        >
                            Login
                        </button>
                        <button
                            className="btn color btn-outline-primary m-1 ms-auto"
                            type="button"
                        >
                            Sign Up
                        </button>
                    </div>
                </nav>
            </header>

            <hr className="hr" />

            <div className="container-fluid down-box">
                <div className="row g-3 ">
                    <div className="col-12 col-md-3 col-lg-2 bg-white p-3 left-sidebar">
                        <ul className="list-unstyled">
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("All")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-list me-2"></i>All
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Breakfast")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-coffee me-2"></i>Breakfast
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Coffee")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-mug-hot me-2"></i>Coffee
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Burgers")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-hamburger me-2"></i>Burgers
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Pizza")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-pizza-slice me-2"></i>Pizza
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Mexican")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-pepper-hot me-2"></i>Mexican
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Seafood")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-fish me-2"></i>Seafood
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-8 col-lg-10 bg-white p-3 content-box">
                        <h5 className="fw-bold">
                          {selectedCategory === "All" ? "All Restaurants" : `${selectedCategory} Restaurants`}
                        </h5>
                        <br />
                        <div className="row g-3 ">
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

                <div className="content mt-4">
                    {selectedMeal && (
                        <>
                            <div className="content-overlay" onClick={handleCloseDetails}></div>
                            <div className="content-popup">
                                <Detail meal={selectedMeal} onClose={handleCloseDetails} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Main;
