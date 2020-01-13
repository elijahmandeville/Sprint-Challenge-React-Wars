import React from 'react';
import CharCard from '../CharCard/CharCard';


function MainPage(props) {
    return (
        <div className="container">
            {props.dataProp.map((e, i) => {
                return <CharCard key={i} character={e} />
            })}
        </div>
    );
}

export default MainPage;