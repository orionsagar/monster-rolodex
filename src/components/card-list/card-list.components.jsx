import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.components";

export const CardList = props => {
    return <div  className="card-list">{props.monsters.map(monster => (
        //<p key={monster.id.toString()}>{monster.name}</p>
        <Card key={monster.id.toString()} monster={monster}/>
      ))}</div>  
}

