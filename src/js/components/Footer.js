import React from 'react';
import FilterLink from '../containers/FilterLink';

import * as types from '../actionCreators/filter';

import '../../css/components/Footer.css';

const Footer = () => (
  <p className='todo__footer'>
    <FilterLink filter={types.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={types.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={types.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;