import React from "react";
function Profile(props){
    return(
        <div>
            <p>nom :{props.persn}</p>
            <p>profession :{props.pro}</p>
            <p>bio :{props.bi}</p>
        
        </div>
    );
}
export default Profile ;