import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Item = ({ id, purchased, name, updateItem, deleteItem, price, category }) => (
  <div className="col s12">
    <div className="col s8">
      <div style={ purchased ? styles.complete : {} } className="center">
        <h3>{name} -- ${price} -- {category}</h3>
      </div>
    </div>
    <div className="col s2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={purchased}
        onClick={() => updateItem(id)}
      />
      <label htmlFor={`item-${id}`}>Purchased?</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteItem(id)}>
      X
    </div>
  </div>
)

export default Item;