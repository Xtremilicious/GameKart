import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return(<ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id='modal' className="col-10 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-3">
                                       <h5>item Added to Cart</h5>
                                        <img src={img} className='img-modal' alt={title} />
                                        <h4>{title}</h4>
                                        <h5 className='text'>price: ${price}</h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                               Shop More
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer cart onClick={()=>closeModal()}>
                                               Go to Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>);
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items :center;
    justify-content: center;
    #modal{
        background: var(--mainWhite);
        border-radius: 0.5rem;
        border: 0.05rem solid var(--mainRed);
    }
    .img-modal{
        height: 50vh;
    }

`;