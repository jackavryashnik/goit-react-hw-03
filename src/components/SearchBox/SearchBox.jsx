import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ filter, onChange, children }) => {
  const searchFieldId = useId();

  return (
    <div className={css.searchWrapper}>
      <label htmlFor={searchFieldId}>{children}</label>
      <input
        className={css.search}
        id={searchFieldId}
        type="text"
        value={filter}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
