import React from "react";
// import { Card, Icon, Image } from 'semantic-ui-react'
// const PlayerCard = ({ key, name, country, searches }) => {

    function PlayerCard({ name, country, searches, id }) {
    return (
       
    <div>
      <h4>{id}</h4>
      <p>{name}</p>
      <p>{country}</p>
      <p>{searches}</p>
    </div>
    )
}
export default PlayerCard;
 // <div className="playercard" data-testid={key}>
        //     <Card>
        //         <Card.Header><h3>Name: {name}</h3></Card.Header>
        //         <Card.Meta>
        //             <h3>Country: {country}</h3>
        //         </Card.Meta>
        //         <Card.Description>
        //             <h3>
        //                 <Icon name="user" />
        //                 Searches: {searches}</h3>
        //         </Card.Description>
        //     </Card>
        // </div>