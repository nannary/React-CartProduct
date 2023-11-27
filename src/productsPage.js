import React, { useState } from "react";
import { productList } from "./product";

export class ProductsPage extends React.Component {
  state = {
    quantities: Array(productList.length).fill(1), // Initialize quantities with 1 for each product
  };

  handleIncrement = (index) => {
    const updatedQuantities = [...this.state.quantities];
    updatedQuantities[index] += 1;
    this.setState({ quantities: updatedQuantities });
  };

  handleDecrement = (index) => {
    const updatedQuantities = [...this.state.quantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      this.setState({ quantities: updatedQuantities });
    }
  };

  getTotalQuantity = () => {
    return this.state.quantities.reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  render() {
    return (
      <>
        <div className="container mt-3">
          <div className="row">
            {productList.map((product, index) => (
              <div key={index} className="col-6 mb-3">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      <img
                        src={product.url}
                        className="img-fluid rounded-start"
                        alt={product.alt}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="col-md-10 d-flex flex-column">
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <small className="card-text text-secondary">
                          {product.description}
                        </small>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <p className="text-info mb-0">฿ {product.price}</p>
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-light"
                              onClick={() => this.handleDecrement(index)}
                            >
                              -
                            </button>
                            <div className="mx-2">
                              {this.state.quantities[index]}
                            </div>
                            <button
                              className="btn btn-light"
                              onClick={() => this.handleIncrement(index)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="position-fixed bottom-0 end-0 m-3">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "50%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                padding: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span class="material-symbols-outlined">
                shopping_basket
              </span>
              <span className="ms-2">{this.getTotalQuantity()}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
