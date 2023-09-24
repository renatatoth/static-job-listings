import "./Filter.css";

const Filter = ({hoverable, roundedCorners}) => {
    return (
        <li>
            <button className={`filter-item ${hoverable && 'hover'} ${roundedCorners && 'rounded-corners-all'}`}>Frontend</button>
        </li>
    );
};

export default Filter;