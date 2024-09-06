import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import AsideMenu from "./components/Aside-Menu/AsideMenu";
import Slider from "./components/Pagination/Pagination";

function App() {
  return (
    <div className="app">
      <section className="section-1">
        <Navbar />
        <Wallpaper />
      </section>
      <section className="section-2">
        <AsideMenu />
        <Slider />
      </section>
    </div>
  );
}

export default App;
