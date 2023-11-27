import React from 'react';

export default class Cart extends React.Component {
  render() {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = this.props;
    
     // Calculate the total quantity
     const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    return (
      <div>
        <h2>ตะกร้าสินค้า</h2>
        <ul className='mt-3'>
          {cart.map(item => (
            <li key={item.id} className='mt-3'>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
              <div>
                <strong>{item.name}</strong>
                <br/>
                <p className="card-text" style={{ margin: 0 }}>
                        {item.SKU}
                    </p>
                
                <h4>฿{item.price} </h4>
                <button onClick={() => decreaseQuantity(item.id)} className='btn btn-outline-dark'>-</button>
                 <span>&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;</span> 
                <button onClick={() => increaseQuantity(item.id)} className='btn btn-outline-dark'>+</button>
                &nbsp;
                <button onClick={() => removeFromCart(item.id)} className='btn btn-outline-danger'>ลบออก</button>
              </div>
            </li>
          ))}
        </ul>
        
        <p>จำนวนสินค้าในตะกร้า: {totalQuantity}</p>
        <p>ราคารวมทั้งหมด: ฿{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      </div>
    );
  }
}