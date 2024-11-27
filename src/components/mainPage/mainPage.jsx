import React, { useState } from "react";
import "./index.scss";
import logo from "../../assets/logo-white.png";
import Detail from "../detailPage/detailPage";
import DetailAdmin from "../detailAdminPage/detailAdminPage";

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
            distance: "1.5 km",
            price: "$15.00",
            category: "Breakfast",
            address: "1615 sycanore ave Huntsville, TX 77340",
            type: "Has Michelin Star ⭐⭐⭐",
            menu: [
                { item: "Margherita Pizza", price: "$12.00" },
                { item: "Pepperoni Pizza", price: "$14.00" },
                { item: "Veggie Supreme", price: "$13.50" },
                { item: "BBQ Chicken Pizza", price: "$15.00" }
            ],
            hours: {
                monday: "10:00 AM - 10:00 PM",
                tuesday: "10:00 AM - 10:00 PM",
                wednesday: "10:00 AM - 10:00 PM",
                thursday: "10:00 AM - 10:00 PM",
                friday: "10:00 AM - 11:00 PM",
                saturday: "10:00 AM - 11:00 PM",
                sunday: "11:00 AM - 9:00 PM"
            }
        },
        {
            id: 2,
            title: "Coffee Restaurant Name 2",
            description: "Another tasty meal for your enjoyment.",
            distance: "2.0 km",
            price: "$12.00",
            category: "Coffee",
            address: "1615 sycanore ave Huntsville, TX 77340",
            type: "Franchise Company",
            menu: [
                { item: "Margherita Pizza", price: "$12.00" },
                { item: "Pepperoni Pizza", price: "$14.00" },
                { item: "Veggie Supreme", price: "$13.50" },
                { item: "BBQ Chicken Pizza", price: "$15.00" }
            ],
            hours: {
                monday: "10:00 AM - 10:00 PM",
                tuesday: "10:00 AM - 10:00 PM",
                wednesday: "10:00 AM - 10:00 PM",
                thursday: "10:00 AM - 10:00 PM",
                friday: "10:00 AM - 11:00 PM",
                saturday: "10:00 AM - 11:00 PM",
                sunday: "11:00 AM - 9:00 PM"
            }
        },
        {
            id: 3,
            title: "Burgers Restaurant Name 3",
            description: "A classic meal with traditional flavors.",
            distance: "3.0 km",
            price: "$10.00",
            category: "Burgers",
            address: "1615 sycanore ave Huntsville, TX 77340",
            type: "Has Michelin Star ⭐⭐⭐",
            menu: [
                { item: "Margherita Pizza", price: "$12.00" },
                { item: "Pepperoni Pizza", price: "$14.00" },
                { item: "Veggie Supreme", price: "$13.50" },
                { item: "BBQ Chicken Pizza", price: "$15.00" }
            ],
            hours: {
                monday: "10:00 AM - 10:00 PM",
                tuesday: "10:00 AM - 10:00 PM",
                wednesday: "10:00 AM - 10:00 PM",
                thursday: "10:00 AM - 10:00 PM",
                friday: "10:00 AM - 11:00 PM",
                saturday: "10:00 AM - 11:00 PM",
                sunday: "11:00 AM - 9:00 PM"
            }
        },
        {
            id: 4,
            title: "Pizza Restaurant Name 4",
            description: "An exotic meal with unique ingredients.",
            distance: "4.0 km",
            price: "$20.00",
            category: "Pizza",
            address: "1615 sycanore ave Huntsville, TX 77340",
            type: "Franchise Company",
            menu: [
                { item: "Margherita Pizza", price: "$12.00" },
                { item: "Pepperoni Pizza", price: "$14.00" },
                { item: "Veggie Supreme", price: "$13.50" },
                { item: "BBQ Chicken Pizza", price: "$15.00" }
            ],
            hours: {
                monday: "10:00 AM - 10:00 PM",
                tuesday: "10:00 AM - 10:00 PM",
                wednesday: "10:00 AM - 10:00 PM",
                thursday: "10:00 AM - 10:00 PM",
                friday: "10:00 AM - 11:00 PM",
                saturday: "10:00 AM - 11:00 PM",
                sunday: "11:00 AM - 9:00 PM"
            }
        },
        {
            id: 5,
            title: "Mexican Restuarant Name 5",
            description: "An exotic meal with unique ingredients.",
            distance: "4.0 km",
            price: "$31.00",
            category: "Mexican",
            address: "1615 sycanore ave Huntsville, TX 77340",
            type: "Has Michelin Star ⭐⭐⭐",
            menu: [
                { item: "Margherita Pizza", price: "$12.00" },
                { item: "Pepperoni Pizza", price: "$14.00" },
                { item: "Veggie Supreme", price: "$13.50" },
                { item: "BBQ Chicken Pizza", price: "$15.00" }
            ],
            hours: {
                monday: "10:00 AM - 10:00 PM",
                tuesday: "10:00 AM - 10:00 PM",
                wednesday: "10:00 AM - 10:00 PM",
                thursday: "10:00 AM - 10:00 PM",
                friday: "10:00 AM - 11:00 PM",
                saturday: "10:00 AM - 11:00 PM",
                sunday: "11:00 AM - 9:00 PM"
            }
        },
        {
            id: 6,
            title: "Seafood Restuarant Name 6",
            description: "An exotic meal with unique ingredients.",
            distance: "4.0 km",
            price: "$40.00",
            category: "Seafood",
            address: "1615 sycanore ave Huntsville, TX 77340",
            type: "Franchise Company",
            menu: [
                { item: "Margherita Pizza", price: "$12.00" },
                { item: "Pepperoni Pizza", price: "$14.00" },
                { item: "Veggie Supreme", price: "$13.50" },
                { item: "BBQ Chicken Pizza", price: "$15.00" }
            ],
            hours: {
                monday: "10:00 AM - 10:00 PM",
                tuesday: "10:00 AM - 10:00 PM",
                wednesday: "10:00 AM - 10:00 PM",
                thursday: "10:00 AM - 10:00 PM",
                friday: "10:00 AM - 11:00 PM",
                saturday: "10:00 AM - 11:00 PM",
                sunday: "11:00 AM - 9:00 PM"
            }
        },
        {
            id: 7,
            title: "Pizza Restuarant Name 7",
            description: "An exotic meal with unique ingredients.",
            distance: "4.0 km",
            price: "$19.00",
            category: "Pizza",
            address: "1615 sycanore ave Huntsville, TX 77340",
            type: "Franchise Company",
            menu: [
                { item: "Margherita Pizza", price: "$12.00" },
                { item: "Pepperoni Pizza", price: "$14.00" },
                { item: "Veggie Supreme", price: "$13.50" },
                { item: "BBQ Chicken Pizza", price: "$15.00" }
            ],
            hours: {
                monday: "10:00 AM - 10:00 PM",
                tuesday: "10:00 AM - 10:00 PM",
                wednesday: "10:00 AM - 10:00 PM",
                thursday: "10:00 AM - 10:00 PM",
                friday: "10:00 AM - 11:00 PM",
                saturday: "10:00 AM - 11:00 PM",
                sunday: "11:00 AM - 9:00 PM"
            }
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
                                placeholder=""
                                style={{ maxWidth: "500px", border: "0px" }}
                            />
                        </form>
                        <button
                            className="btn color btn-outline-primary m-1 ms-auto"
                            type="button"
                        >
                            Profile
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
                                                    Restaurant: {meal.type}
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
                                {/* <DetailAdmin meal={selectedMeal} onClose={handleCloseDetails} /> */}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Main;
