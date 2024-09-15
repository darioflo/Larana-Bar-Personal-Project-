import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import AsideMenu from "./components/Aside-Menu/AsideMenu";
import useCheckboxStore from "./globalStates/useCheckboxStore";
import Information from "./components/Information/Information";
import Pagination from "./components/Pagination/Pagination";
import useDrinksResults from "./globalStates/useSearchResults";
import { useEffect } from "react";
import FlipSection from "./components/Flip-Section/FlipSection";
import LocationInfo from "./components/Location-Info/LocationInfo";
import LocationMap from "./components/Location-Map/LocationMap";
import { useShowMap } from "./globalStates/useShowMap";

function App() {
  const { inputChecked } = useCheckboxStore();
  const { drinkResults } = useDrinksResults();
  const { showMap } = useShowMap();

  useEffect(() => {
    console.log("drinkResults in ParentComponent:", drinkResults);
  }, [drinkResults]);

  return (
    <div className="app">
      <section className="section-1">
        <Navbar />
        <Wallpaper />
      </section>
      <section className="section-2">
        <AsideMenu />
        {inputChecked === null && drinkResults.length < 1 ? (
          <Information />
        ) : (
          <Pagination drinkSearched={drinkResults} />
        )}
      </section>
      <section className="section-3">
        <FlipSection />
        {showMap ? <LocationMap /> : <LocationInfo />}
      </section>
    </div>
  );
}

export default App;
