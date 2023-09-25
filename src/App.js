import Header from "./components/Header";
import JobList from "./components/JobList";
import FiltersBar from "./components/FiltersBar";
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [jobs, setJobs] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('data/data.json');
            const data = await res.json();

            if (selectedFilters.length > 0) {
                const filteredData = data.filter(job => {
                    const filters = [job.role, job.level, job.languages, job.tools].flat();
                    return selectedFilters.every(filter => filters.indexOf(filter) >= 0);
                });
                setJobs(filteredData);
            } else {
                setJobs(data);
            }
        };
        getData();

    }, [selectedFilters]);

    const selectFilterHandler = (filter) => {
        if (selectedFilters.indexOf(filter) === -1) setSelectedFilters(cur => [...cur, filter]);
    };

    const removeFilterHandler = (filter) => {
        setSelectedFilters(cur => cur.filter(f => f !== filter));
    }

    const clearFiltersHandler = () => {
        setSelectedFilters([]);
    }

    return (
        <>
            <Header/>
            {selectedFilters.length > 0 && <FiltersBar filters={selectedFilters} onRemoveFilter={removeFilterHandler} onClearFilters={clearFiltersHandler}/>}
            <JobList jobsData={jobs} onSelectFilter={selectFilterHandler}/>
        </>
    );
}

export default App;
