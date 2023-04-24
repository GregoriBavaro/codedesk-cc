const Form = (props) => {
  return (
    <form>
      <input
        type="search"
        value={props.search}
        placeholder="Search"
        onChange={props.setSearch}
      />
    </form>
  );
};

export default Form;
