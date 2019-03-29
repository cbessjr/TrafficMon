import React from 'react';
import './style.css'

function ContainerDiv(props) {

    return (
        <div className="container backgroundColor containerdiv">
            {props.children}
         </div>

    )
}

export default ContainerDiv;