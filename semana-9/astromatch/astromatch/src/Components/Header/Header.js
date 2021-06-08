import React from 'react';
import './Header.scss'
import DraftsRoundedIcon from '@material-ui/icons/DraftsRounded';

function Header(props) {
    return (
        <div className="header-container">
            <div className="button-container">
                <DraftsRoundedIcon onClick={props.changeDisplay} color="secondary" fontSize="medium" />
            </div>

        </div>
    )
}
export default Header;