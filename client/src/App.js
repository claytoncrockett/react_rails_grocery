import React, { Component } from 'react';
import GroceryForm from './components/GroceryForm';
import GroceryList from './components/GroceryList';

class App extends Component {
  state = { items: [
    {id: 1, name: 'Milk', purchased: false, category: 'Food', price: 3}
  ] }

  componentDidMount() {
    fetch('/api/items')
    .then( res => res.json() )
    .then( items => this.setState({ items }) )
  }

  addItem = (name, price, category) => {
    const item = {name, price, category}

    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    }).then( res => res.json() )
      .then( item => {
        const { items } = this.state;
        this.setState({ items: [...items, item] });
  })
}

updateItem = (id) => {
  fetch(`/api/items/${id}`, { method: 'PUT' })
    .then( res => res.json() )
    .then( item => {
      const items = this.state.items.map( t => {
        if (t.id === id)
          return item
        return t;
    });

    this.setState({ items });
  })
}

deleteItem = (id) => {
  fetch(`/api/items/${id}`, { method: 'DELETE' })
    .then( () => {
      const { items } = this.state;
      this.setState({ items: items.filter( t => t.id !== id ) })
    })
 }

  render() {
    return (
      <div className="container">
        <GroceryForm addItem={this.addItem} />
        <GroceryList
          items={this.state.items}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;