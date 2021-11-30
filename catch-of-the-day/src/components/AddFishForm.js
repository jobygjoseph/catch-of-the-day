import { Component, createRef } from "react";
import PropTypes from "prop-types";

class AddFish extends Component {
  nameRef = createRef();
  priceRef = createRef();
  statusRef = createRef();
  descRef = createRef();
  imageRef = createRef();

  static propTypes = {
    addFish: PropTypes.func,
  };

  createSeafood = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createSeafood}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          type="file"
          ref={this.imageRef}
          name="image"
          placeholder="Image"
        />
        <button type="submit">+ Add Seafood</button>
      </form>
    );
  }
}

export default AddFish;
