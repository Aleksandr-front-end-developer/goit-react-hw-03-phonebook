export const Filter = ({ onFilter }) => {
  return (
    <label>
      Finds contacts by name
      <input
        onChange={e => onFilter(e)}
        className="form__input"
        type="text"
        name="search"
      />
    </label>
  );
};
