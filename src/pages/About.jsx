import React from "react";

import './About.css'

function About(){
    return(
        <div className="about-page">
            <header className="mt-5">
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <h1 className=" text-light">
                        About 

                    </h1>

                </div>

            </header>

            <div className=" container my-5">
              <p>Welcome to Your Restaurant Name! We're passionate about serving delicious food and creating memorable dining experiences for our customers.</p>
        
             <h2 className=" text-success" >Our Story</h2>
             <p>Share the story behind your restaurant, including how it was founded, your culinary inspiration, and any unique features or specialties.</p>
        
              <h2 className=" text-success">Our Mission</h2>
               <p>Describe your restaurant's mission and values. What sets you apart from other restaurants? How do you aim to delight your customers?</p>
        
               <h2 className=" text-success">Meet Our Team</h2>
                <p>Introduce key members of your team, such as the chef, manager, and other staff members. Highlight their expertise and passion for food.</p>
        
               <h2 className=" text-success">Join Our Team</h2>
             <p>If you're hiring, include information about job opportunities at your restaurant and how to apply.</p>
    
            </div>

        </div>
    )
}

export default About;