import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm py-3 navbar-dark shadow-sm">
                <Link to='/'>
                    <img src={logo} alt='store' className='navbar-brand nav-logo'/>
                </Link>
                
                <ul className="navbar-nav align-items-center">
                <li className='nav-item ml-5s mr-3 ml-3 testy'>
                        <div className="search-bar d-flex align-items-center">
                            <span className='px-sm-3'>
                            <i class="fa fa-search nav-font"></i>
                            </span>
                            <input type="text" placeholder='Start typing and search for games' class="input-form"></input>
                            <button type='button' className="submit-btn ml-auto">Search</button>
                        </div>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                        <i className="fa fa-cart-plus"></i>
                        </span>
                    My Cart</ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainWhite);
    .nav-link{
        color: var(--mainDark) !important;
        font-size: 1.3rem;
        text-transform: uppercase;
    }
    .nav-logo{
        height: 3.3rem;
    }
    .search-bar{
        background: #E6E6E6;
        border: 1px solid #BDBDBD;
        width: 62vw;
        height: 2.8rem;
        
    

    }
    .nav-font{
        font-size: 1.4rem;
    }
    .input-form{
        width: 49vw;
        background: transparent;
        border: none;
    }
    .submit-btn{
        height: 2.8rem;
        width: 7vw;
        border: none;
        background: var(--mainRed);
        color: var(--mainWhite);
    }
    @media only screen and (max-width: 1200px) {
        .testy {
            display: none !important; 
  }
}
`;
export default Navbar;