import "./FiltersBar.css";
import removeIcon from "./../assets/icon-remove.svg";

const FiltersBar = ({filters, onClearFilters, onRemoveFilter}) => {
    return (
        <div className="filter-bar">
            <ul className="filter-list">
                {filters.map(filter =>
                    <li key={filter} className="selected-filter">
                        <span>{filter}</span>
                        <button onClick={() => onRemoveFilter(filter)} className="btn-remove"><img src={removeIcon} alt="Remove"/></button>
                    </li>)}
            </ul>
            <button className="btn-clear" onClick={onClearFilters}>Clear</button>
        </div>
    );
};

export default FiltersBar;