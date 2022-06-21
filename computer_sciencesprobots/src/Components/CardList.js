import React from "react";
import Card from "./Card";
import ErrorBoundary from "./ErrorBoundary";


const CardList = ({robots}) =>
{
    const cardComponent = robots.map((robot,i) => 
        {
            return(
                <Card key={i} id={robots[i].id} firstName = {robots[i].firstName} lastName = {robots[i].lastName} profession={robots[i].profession} gender={robots[i].gender}/>
            );
        })
    return(
        <div className ='tc'>
            {cardComponent}
        </div>
    );

}

export default CardList;