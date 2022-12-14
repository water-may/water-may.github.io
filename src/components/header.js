import React from "react";

const Ham = () => (
    <div id="ham">
        <hr className="hamline"/>
        <hr className="hamline"/>
        <hr className="hamline"/>
    </div>
)

function Nav({navitems}) {
    return (
        <div id="top">
            <Ham />
            <div id="nav">
                <div id="cross">x</div>
                
                {navitems}
            </div>  
        </div>  
    )
}

export default Nav;