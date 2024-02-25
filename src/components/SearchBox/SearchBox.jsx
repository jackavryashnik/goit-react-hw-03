import css from './SearchBox.module.css';

const SearchBox = ({ filter, onSearch }) => {
  return (
    <div className={css.searchWrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        value={filter}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
