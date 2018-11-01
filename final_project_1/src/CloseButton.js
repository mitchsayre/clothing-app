import React from 'react'


const CloseButton = ({removeThing, thingBeingRemoved}) => {
    return(
    <div className="CloseButton">
        <i className="fas fa-times-circle" onClick={ ()=> removeThing(thingBeingRemoved)}/>
    </div>
    )
}


export default CloseButton