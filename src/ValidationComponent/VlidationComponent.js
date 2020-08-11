import React from 'react';

const validationComponent = (props) => {
    let vali = 'Text Long Enough';
    if(props.inputLen<=5){
        vali = 'Text Too Short';
    }
    return (
        <div>
            <p>{vali}</p>
        </div>
    )
}

export default validationComponent;