import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import AsideMenu from "./components/Aside-Menu/AsideMenu";
import Slider from "./components/Pagination/Pagination";
import useCheckboxStore from "./globalStates/useCheckboxStore";
import Information from "./components/Information/Information";
import { useEffect } from "react";

function App() {
  const { inputChecked } = useCheckboxStore();

  useEffect(() => {
    console.log(inputChecked);
  }, [inputChecked]);

  return (
    <div className="app">
      <section className="section-1">
        <Navbar />
        <Wallpaper />
      </section>
      <section className="section-2">
        <AsideMenu />
        {inputChecked === null ? <Information /> : <Slider />}
      </section>
    </div>
  );
}

export default App;
