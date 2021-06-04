import React from 'react';

function Header(props) {
    return (
        <div>
            <h1>Header</h1>
            <button onClick={props.changeDisplay}>teste</button>
        </div>
    )
}
export default Header;