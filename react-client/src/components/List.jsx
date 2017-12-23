import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    There are { props.items.length } items.
    { props.items.map((item, index) => (
      <div>
        <a href={item.bizUrl}>
        <img src={item.pictureUrl}/>
        </a>
        </div>
      ))}
  </div>
)

export default List;