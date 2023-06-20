import React from "react";


const Scroll = (content) => {
    return(
        <div style={{overflowY: 'scroll', height:'75vh'}}>
            {content.children}
        </div>
    )
}

export default Scroll;