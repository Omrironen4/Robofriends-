import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '65vh'}}>
            {props.children}
        </div>
    )
};

export default Scroll;