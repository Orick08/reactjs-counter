import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onNewItem } = this.props;

    return (
      <div>
        <button onClick={onNewItem} className='btn btn-primary btn-sm m-2'>
          New item
        </button>
        <button onClick={onReset} className='btn btn-secondary btn-sm m-2'>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} />
        ))}
      </div>
    );
  }
}

export default Counters;
