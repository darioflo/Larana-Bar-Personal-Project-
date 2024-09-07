import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import AsideMenu from "./components/Aside-Menu/AsideMenu";
import useCheckboxStore from "./globalStates/useCheckboxStore";
import Information from "./components/Information/Information";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const { inputChecked } = useCheckboxStore();
  return (
    <div className="app">
      <section className="section-1">
        <Navbar />
        <Wallpaper />
      </section>
      <section className="section-2">
        <AsideMenu />
        {inputChecked === null ? <Information /> : <Pagination />}
      </section>
    </div>
  );
}

export default App;
