import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Container = ({ children, isFlex }) => (
  <div
    className={clsx(
      'px-4 py-8 md:px-8 mx-8 sm:mx-14 md:mx-26 lg:mx-44 xl:mx-56',
      isFlex && 'flex flex-wrap justify-evenly items-center gap-x-4 gap-y-8',
      'border-solid border-2 border-primary rounded-md'
    )}
  >
    {children}
  </div>
);

Container.propTypes = {
  isFlex: PropTypes.bool,
}
