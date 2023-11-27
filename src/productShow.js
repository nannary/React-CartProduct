import React from 'react';
import { productList } from './product';

export class CatalogItem extends React.Component {
    state = { index: 0, show: false, showP: false };

    render() {
        const { product, addToCart } = this.props;

        return (
            <div className="card mt-3">
                <img src={product.url} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">
                        {product.name} 
                    </h5>
                    <p className="card-text" style={{ margin: 0 }}>
                        {product.description}
                    </p>
                    <h4 className="card-text my-2">
                        ฿{product.price}
                    </h4>
                    <button
                        type="button"
                        className="btn btn-outline-danger mt-3"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        );
    }
}

export class Catalog extends React.Component {
    render() {
        const { addToCart } = this.props;

        return (
            <div className="container">
                <div className="row">
                    {productList.map(product => (
                        <div key={product.id} className="col-4">
                            <CatalogItem product={product} addToCart={addToCart} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}