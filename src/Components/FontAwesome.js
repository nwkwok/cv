import React from 'react'

function FontAwesome(props) {
    return (
        <div className="div-skill">
            <i className={props.fa}></i>
            <p className="p-skill">{props.skillname}</p>
        </div>
    )
}

export default FontAwesome;
