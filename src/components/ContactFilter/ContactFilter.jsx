import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeNameFilter } from '../../redux/filterSlice';

import css from './ContactFilter.module.css';

export const ContactFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(changeNameFilter(value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleFilterChange}
      className={css.filtrsection}
    />
  );
};
