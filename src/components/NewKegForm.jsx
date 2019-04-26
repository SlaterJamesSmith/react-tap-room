import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props){
  let _beer = null;
  let _brand = null;
  let _percent = null;
  let _cost = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({beer: _beer.value, brand: _brand.value, percent: _percent.value, cost: _cost.value, id: v4()});
    _beer.value = '';
    _brand.value = '';
    _percent.value = '';
    _cost.value = '';
  }

  return (
    <div>
    <style jsx>{`
      li {
        display: block;
      }
     `}</style>
      <form onSubmit={handleNewKegFormSubmission}>
        <li><input
          type='text'
          id='beer'
          placeholder='Pair Names'
          ref={(input) => {_beer = input;}}/></li>
        <li><input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/></li>
        <li><input
          type='text'
          id='percent'
          placeholder='Percentage'
          ref={(input) => {_percent = input;}}/></li>
        <li><input
          type='text'
          id='cost'
          placeholder='Cost'
          ref={(input) => {_cost = input;}}/></li>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
