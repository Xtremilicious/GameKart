import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, info2, info3, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-6 mx-auto col-md-6 my-3 pb-0 pt-0 pl-5 pr-5">
                                    <img src={img} className='img-fluid' alt={title} />
                                </div>
                                <div className="col-6 mx-auto col-md-6 my-3">
                                    <h2>
                                        {title}
                                    </h2>
                                    <h5 className='text-title text-red mt-2 mb-2'>
                                        By: <span>
                                            {company}
                                        </span>
                                    </h5>
                                    <h4 className='text-blue'>
                                        <strong>
                                            price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <h5 className="font-weight-bold text-title mt-3 mb-0">
                                        Description:
                                    </h5>
                                    <p className="lead">
                                        <p>{info}</p>
                                        <p>{info2}</p>
                                        <p>{info3}</p>
                                    </p>
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart?'in Cart':'Add to Cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        )
    }
}
