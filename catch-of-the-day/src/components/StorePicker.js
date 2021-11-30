import { Component, createRef } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  storeName = createRef();

  goToStore = (e) => {
    e.preventDefault();
    const store = this.storeName.current.value;
    this.props.history.push(`/store/${store}`);
  }

  render() {
    return (
    <>
    <form className="store-selector" onSubmit={this.goToStore}>
      <h1>Please enter a store name</h1>
      <input type="text" ref={this.storeName} required placeholder="Store Name" defaultValue={getFunName()} />
      <button type="submit">Visit Store → </button>
    </form>
    </>
    )
  }
}

export default StorePicker;