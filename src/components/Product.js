import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className="card">
                    <ProductConsumer>
                    {(value)=>(
                        <div className="img-container" onClick={() => { value.handleDetail(id); }}>
                        <Link to='/details'>
                            <img src={img} alt={title} className='card-img-top' />
                        </Link>
                        <button className='cart-btn' disabled={inCart ? true : false} onClick={() => {
                            value.addToCart(id);
                            value.openModal(id);
                        }}>
                            {inCart ? (<p className='text-capitalize mb-0' disabled>
                                {' '}
                                in cart
                        </p>) : (
                                    
                                    <p className='text-capitalize mb-0' disabled>
                                    {' '}
                                    Add <i className='fa fa-cart-plus' />
                            </p>
                            )}
                        </button>

                    </div>
                    )}
                    
                    
                    </ProductConsumer>

                    <div className="card-footer d-flex justify-content-between">
                            <p className='align-self-center mb-0'>
                                {title}
                            </p>

                               <span className="align-self-center">
                               ${price}</span> 

                    </div>
                </div>

            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition:all 1s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
        transition:all 1s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.03);
        transition:all 1s linear;
    }
    .cart-btn {
        position: absolute;
        bottom: 0px;
        right: 0;

        padding: 0.2rem 0.4rem;
        background: var(--mainRed);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0rem 0rem 0rem;
        transform: translate(100%, 100%);
    }
    .img-container:hover .cart-btn{
        transition:all 0.5s linear;
        transform: translate(0, 0);
    }
    .cart-btn:hover{
        color: var(--mainWhite);
        cursor: pointer;
        
    }
`;
