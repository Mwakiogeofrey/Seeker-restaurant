import React from "react";
import { MenuBtn } from "../components/MenuBtn";
import './Home.css'
import { Link  } from "react-router-dom";
import AboutImg from "../utils/img/aboutImg.jpg"
import { ImageGallery } from "../components/ImagesGallery";
import { ContactInfo } from "../components/ContactInfo";
import ContactImg from "../utils/img/ContactImg.jpg";

function Home(){
    return(
        <div className="home-page">
            <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
                <div className=" container">
                    <div className="row">
                        <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                            <h2 className="mb-0 text-black fw-bold">
                                Welcome To
                            </h2>
                            <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
                                 Seeker Restaurant
                            </h1>
                            <MenuBtn/>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container my-5 d-flex flex-row">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={AboutImg} className="img-fluid w-50" alt="about img" />

                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                    <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique pariatur magnam assumenda dicta veniam ad at dolor eligendi culpa reiciendis quia fuga labore libero, amet dolorem officia quae quasi?</p>
                    <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, officia nihil debitis ipsam dicta voluptatibus voluptas explicabo magnam facilis est laborum nam earum sit ipsum, autem maxime quas illo possimus.</p>
                    <Link to="/About">
                        <button type="button" className="btn btn-outline-success btn-lg">More About Us </button>
                    </Link>

                </div>

            </div>

            <div className=" menu-section py-5 text-light shadow">
                <div className="cotainer d-flex flex-column align-items-center">
                    <h2 className="fs-1 mb-5 text-uppercase fw-bold">
                        Our Favorites
                    </h2>
                    <div className="row mb-5 w-100">
                        <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                            <h3 className="fs-2 mb-5">Food</h3>
                            <ul className="px-0">
                                <li className="d-flex justify-content-between">
                                    <p className="fs-3 mx-2">English Breakfast</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$12</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="fs-3 mx-2">Spicy Beef</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$15</p>
                                </li> 
                                <li className="d-flex justify-content-between">
                                    <p className="fs-3 mx-2">Saghetti Bolognese</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$11</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                            <h3 className="fs-2 mb-5">Drinks</h3>
                            <ul className="px-0">
                                <li className="d-flex justify-content-between">
                                    <p className="fs-3 mx-2">Coffee</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$2</p>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <p className="fs-3 mx-2">Juice</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$1</p>
                                </li> 
                                <li className="d-flex justify-content-between">
                                    <p className="fs-3 mx-2">Spirits</p>
                                    <p className="fs-3 mx-2 text-success fw-bold">$5</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    < MenuBtn/>
                </div>

            </div>

            < ImageGallery/>
          <div className=" bg-dark text-light py-5 shadow">
            <div className="container">
                <div className="row">
                    <div className="col-lg 6 d-flex flex-column align-items-center justify-contact-center mb-5 mb-lg-0">
                        < ContactInfo/>
                    </div>
                    <div className=" col-lg-6 d-flex justify-content-center">
                        <img src={ContactImg} className="img-fluid" alt="" />
                    </div>
                </div>

            </div>

          </div>
        </div>
    )
}

export default Home;