import Search from "../Search/Search";
import Summary from "../Summary/Summary";
import "./AsideMenu.css";

function AsideMenu() {
  return (
    <div className="aside">
      <h3>Filtros:</h3>
      <Search />
      <Summary />
    </div>
  );
}

export default AsideMenu;
