//Components
import ItemSearch from "./components/ItemSearch";
import Layout from "./ui/Layout";

//Data (Just to keep the app component clean i stored some dummy data in a json file)
import top20movies from "./data/top20movies.json";


function App() {
  return (
    <Layout>
      <ItemSearch arrayOfMovies={top20movies} />
    </Layout>
  );
}

export default App;
