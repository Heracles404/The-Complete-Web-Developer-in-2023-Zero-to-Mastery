import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {

    return(
        <div>
            {
                // Loops through the content of Robots.JS
                robots.map((user, i) => (
                <Card key={i}
                      id={robots[i].id}
                      name={robots[i].name}
                      email={robots[i].email}
                />
            ))}
        </div>
    );
}

export default CardList;



