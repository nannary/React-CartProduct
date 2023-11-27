import React from "react";
import initialCatalog from "./initialCatalog";

export class CatalogItem extends React.Component {
  state = { show: false, showP: false };

  handleClickShow = () => {
    this.setState({ show: !this.state.show });
  };

  handleClickShowProperty = () => {
    this.setState({ showP: !this.state.showP });
  };

  render() {
    const { product, addToCart } = this.props;

    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.image} className="card-img" alt={product.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h4 className="card-text my-2 text-info">฿{product.price}</h4>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={this.handleClickShow}
              >
                {this.state.show ? "ซ่อน" : "แสดง"}รายละเอียด
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={this.handleClickShowProperty}
              >
                {this.state.showP ? "ซ่อน" : "แสดง"}คุณสมบัติ
              </button>
              {this.state.show && (
                <p className="card-text mt-1">{product.description}</p>
              )}
              {this.state.showP && (
                <p className="card-text">
                  <br />
                  <b>ปริมาณ</b> &nbsp;&nbsp;&nbsp;&nbsp;{product.volume} ml.
                </p>
              )}
              <br />
              <button
                type="button"
                className="btn btn-info mt-2"
                onClick={() => addToCart(product)}
              >
                <span className="material-symbols-outlined">
                  shopping_basket
                </span>
                เพิ่มลงตะกร้า
              </button>
            </div>
          </div>
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
        {initialCatalog.map((product) => (
          <CatalogItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    );
  }
}
