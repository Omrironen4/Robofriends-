import React from "react";
import Card from "../components/Card";

const CardList = ({ robots }) => {
    // this if statement will result to true, because if statements always result to true... so this is one way of testing our error boundry!
   // if (true) {
  //      throw new Error('NOOOO') 
  //  }
    return (
        <div>
            {
                robots.map(robot => {
                    return (
                        <Card
                            key={robot.id}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList

