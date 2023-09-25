import Job from "./Job";
import './JobList.css';

const JobList = ({jobsData, onSelectFilter}) => {
    return (
        <div className="job-list-container">
            {jobsData.map(job => <Job key={job.id} job={job} onSelectFilter={onSelectFilter}/>)}
        </div>
    );
};

export default JobList;