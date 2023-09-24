import Header from "./components/Header";
import JobList from "./components/JobList";
import FiltersBar from "./components/FiltersBar";
import './App.css';

function App() {
    return (
        <>
            <Header/>
            <FiltersBar/>
            <JobList/>
        </>
    );
}

export default App;
