import React from "react";

function About(){
    return(
        <div className="about">
            <h1>About</h1>
            <h2>Welcome to our web application!</h2>
            <p>
                Are you an adventurer with a fine taste for card collecting? You have stumbled upon
                a great resource then! This web application was created at the end of our Phase 2 with Flatirons School. 
            </p>
            <p>
                After 3 weeks of studying React, you will find multiple React elements used in this application! Navigate between three worlds
                by clicking on their franchise' iconic cards! Add, sort, and search through your collections as you build the biggest card
                collection that mankind has ever seen (or as much as our db.json server can hold)!
            </p>
            <p>
                We are just a group of software engineers, excited to forge our paths into the world of tech. Thank you for checking out our hosted site. Find our LinkedIn's below
                if you are interested in connecting!
            </p>
            <div>
                <a href="https://www.linkedin.com/in/brooke-ross-se/">Connect with Brooke Here!</a>
            </div>   
            <div>
                <a href="https://www.linkedin.com/in/chrisdennis858/">Connect with Chris Here!</a>
            </div>
                
            
        </div>
    )
}

export default About