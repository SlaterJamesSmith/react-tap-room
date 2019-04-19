import React from 'react';
import Produce from './Produce';

const availableProduce = [
  {
    month: 'July',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Apricots',
      'Blackberries',
      'Blueberries',
      'Cherries',
      'Melons',
      'Nectarines',
      'Peaches',
      'Raspberries',
      'Strawberries',
      'Tomatoes',
      'Beets',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'August',
    selection: [
      'Apples',
      'Apricots',
      'Blackberries',
      'Blueberries',
      'Cherries',
      'Melons',
      'Nectarines',
      'Peaches',
      'Pears',
      'Plums',
      'Raspberries',
      'Rhubarb',
      'Strawberries',
      'Tomatoes',
      'Beets',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'September',
    selection: [
      'Apples',
      'Blueberries',
      'Grapes',
      'Melons',
      'Peaches',
      'Pears',
      'Plums',
      'Raspberries',
      'Tomatoes',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'October',
    selection: [
      'Apples',
      'Grapes',
      'Hazelnuts',
      'Melons',
      'Peaches',
      'Pears',
      'Tomatoes',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Pumpkins',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'November',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Broccoli',
      'Carrots',
      'Cauliflower',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'December',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Broccoli',
      'Carrots',
      'Cauliflower',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Turnips'
    ]
  },
  {
    month: 'January',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Turnips'
    ]
  },
  {
    month: 'February',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {
    month: 'March',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {
    month: 'April',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Asparagus',
      'Garlic',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {
    month: 'May',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Asparagus',
      'Cauliflower',
      'Garlic',
      'Lettuce',
      'Potatoes',
      'Radishes'
    ]
  },
  {
    month: 'June',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Blackberries',
      'Cherries',
      'Raspberries',
      'Strawberries',
      'Asparagus',
      'Broccoli',
      'Cauliflower',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Potatoes',
      'Radishes',
      'Squash'
    ]
  }
];

function AvailableProduce(){
  return (
    <div>
      <style jsx>{`
         div {
           font-family: arial;
           display: grid;
           grid-gap: 1em;
           grid-template-columns: 1fr 1fr 1fr;
           max-width: 1400px;
         }
         h2 {
           display: flex;
           grid-column: 1 / 4;
           background-color: forestgreen;
           color: lightgreen;
           padding: 15px;
           justify-content: center;
           border: 3px solid lightgreen;
           height: 74px;
           align-items: center;
           margin-bottom: -42px;
         }
         ul {
           padding: 8px;
         }
         li {
           display: block;
         }
         @media only screen and (max-width: 1440px)  {
           div {
             grid-template-columns: auto auto;
           }
           h2 {
             grid-column: 1 / 3;
             margin-bottom: 4px;
           }
         @media only screen and (max-width: 1000px)  {
           div {
             grid-template-columns: auto;
             width: 500px;
             margin-left: auto;
             margin-right: auto;
           }
           h2 {
             grid-column: 1 / 2;
             margin-bottom: 4px;
           }
       `}</style>
      <h2>Seasonal Produce</h2>
      {availableProduce.map((post, index) =>
        <Produce
          month={post.month}
          selections={post.selection}
          key={index} />
      )}
    </div>
  );
}

export default AvailableProduce;
