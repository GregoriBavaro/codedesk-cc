//Hooks
import { useState } from "react";

//Components
import List from "./List";
import Form from "./Form";

//CSS
import classes from "./ItemSearch.module.css";

//   Because of the simplicity of the requirement of this coding assignment
//   I only used props to pass the data from the parent to the child component.
//   If i had a more complex scenario where I would have to drill through
//   components or lifting the state up I would have used useContext or a
//   library like Redux. I also would have used different components to separate
//   the code, to make it more readable and simple to navigate. I went with useState
//   to listen to every keypress and update the list. In a different scenario useRef
//   with a search button to collect the vale on press would also be ok.

const ItemSearch = (props) => {
  const [search, setSearch] = useState("");
  const list = props.arrayOfMovies.top20movies;

  return (
    <div className={classes.container}>
      <div>
        <h1>{`IMDB top ${list.length} movies`}</h1>
        <Form search={search} setSearch={(e) => setSearch(e.target.value)} />
        <List list={list} search={search} />
      </div>
    </div>
  );
};

export default ItemSearch;
