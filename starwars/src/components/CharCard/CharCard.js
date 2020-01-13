import React from 'react';
import '../../App.scss';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';

function CharCard(props) {
    return (
        <Card className="card">
            <CardBody className="body">
                <CardTitle className="name">{props.character.name}</CardTitle>
                <CardSubtitle className="birth">Birth Year: {props.character.birth_year}</CardSubtitle>
                <CardText className="gender">Gender: {props.character.gender}</CardText>
                <CardText className="eye-color">Eye Color: {props.character.eye_color}</CardText>
                <CardText className="skin-color">Skin Color: {props.character.skin_color}</CardText>
            </CardBody>
        </Card>
    )
}

export default CharCard;
