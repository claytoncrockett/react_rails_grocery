import React from 'react';

class GroceryForm extends React.Component {
  state = { name: '', purchased: false, price: "", category:'' }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]:value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name, this.state.price, this.state.category);
    this.setState({ name: '', price:'', category:''})
  }

  render() {
    const {name, price, category} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={name}
          placeholder="Add an item"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="Price"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <input
          name="category"
          value={category}
          placeholder="Add a category"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default GroceryForm;