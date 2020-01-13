import React from 'react'
import MainPage from '../MainPage/MainPage';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CharCard(props) {
    return (
        <Card>
            <CardBody>
                <CardTitle>{props.character.name}</CardTitle>
                <CardSubtitle>Birth Year: {props.character.birth_year}</CardSubtitle>
                <CardText className="gender">Gender: {props.character.gender}</CardText>
                <CardText className="eye-color">Eye Color: {props.character.eye_color}</CardText>
                <CardText className="skin-color">Skin Color: {props.character.skin_color}</CardText>
            </CardBody>
        </Card>
    )
}

export default CharCard;

{/* <div className="card-container">
            <h1 className="card-title">{props.character.name}</h1>
            <p>Skin Color: {props.character.skin_color}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Eye Color: {props.character.eye_color}</p>
            <p>Birth Year{props.character.birth_year}</p>
        </div> */}