import Job from "./Job";
import './JobList.css'

const JobList = () => {
    return (
        <div className='job-list-container'>
            <Job/>
            <Job/>
            <Job/>
        </div>
    );
};

export default JobList;