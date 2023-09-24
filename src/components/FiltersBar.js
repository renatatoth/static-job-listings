import Filter from "./Filter";
import "./FiltersBar.css";
import removeIcon from "./../assets/icon-remove.svg"

const FiltersBar = () => {
    return (
        <div className="filter-bar">
            <ul className="filter-list">
                <Filter/><button className="btn-remove"><img src={removeIcon} alt=""/></button>
                <Filter/><button className="btn-remove"><img src={removeIcon} alt=""/></button>
            </ul>
            <button className="btn-clear">Clear</button>
        </div>
    );
};

export default FiltersBar;