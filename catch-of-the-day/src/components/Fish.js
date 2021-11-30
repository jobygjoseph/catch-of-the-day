import { Component } from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape({
      desc: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
    }),
    addToOrder: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired,
  };

  render() {
    const { desc, image, name, price, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add to Cart" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
