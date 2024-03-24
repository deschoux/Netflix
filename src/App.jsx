import "./App.css";
// import du JSON
import MoviesList from "./assets/movies.json";
import Logo from "./assets/logo.png";

// import du composant Section
import Section from "./components/Section";

const App = () => {
  return (
    <div className="App">
      <img className="logo" src={Logo} />
      {/* .map() sur le tableau MoviesList (JSON) */}
      {MoviesList.map((item) => {
        return (
          // pour chaque élément du tableau MoviesList, on retourne un composant Section
          // on passe en props au composant Section : category -> item.category et images -> item.images
          <Section
            key={item.category}
            category={item.category}
            images={item.images}
          />
        );
      })}
    </div>
  );
};

export default App;
