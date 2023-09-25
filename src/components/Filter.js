import "./Filter.css";

const Filter = ({filter, onSelectFilter}) => {
    return (
        <li>
            <button onClick={() => onSelectFilter(filter)} className="filter-item">{filter}</button>
        </li>
    );
};

export default Filter;