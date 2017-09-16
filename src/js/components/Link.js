import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const LINK_ACTIVE = 'todo__link--active';

const Link = ({ className, children, onClick }) => {
  const replacedOnClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <a className={classNames(
      'todo__link',
      className
    )}
       href=''
       onClick={replacedOnClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;