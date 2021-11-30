import { Component } from "react";
import PropTypes from "prop-types";

class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      desc: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
      status: PropTypes.string,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
  };

  handleChange = (e) => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const { desc, image, name, price, status } = this.props.fish;

    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={price}
        />
        <select name="status" onChange={this.handleChange} value={status}>
          <option onChange={this.handleChange} value="available">
            Fresh!
          </option>
          <option onChange={this.handleChange} value="unavailable">
            Sold Out!
          </option>
        </select>
        <textarea name="desc">{desc}</textarea>
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
