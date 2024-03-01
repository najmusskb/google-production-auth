import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

<Link to={'/'}></Link>            
<Link to={'login'}><button>Login</button></Link>            
        </div>
    );
};

export default Header;