import Filter from "./Filter";
import './Job.css';

const Job = ({job, onSelectFilter}) => {
    const filters = [job.role, job.level, job.languages, job.tools].flat();

    return (
        <section className={`job-item ${job.featured && 'job-featured'}`}>
            <div className="text-container">
                <div className="img-container"><img src={job.logo} alt="Logo"/></div>
                <div>
                    <p className="role">{job.company}</p>
                    {job.new && <span className="flag flag-new">New!</span>}
                    {job.featured && <span className="flag flag-featured">Featured</span>}
                    <div>
                        <h1 className="position">{job.position}</h1>
                        <ul className="details-list">
                            <li className="details-item">{job.postedAt}</li>
                            <li className="details-item">{job.contract}</li>
                            <li className="details-item">{job.location}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="filters-container">
                <ul className="filter-list">
                    {filters.map(filter => <Filter filter={filter} key={filter} onSelectFilter={onSelectFilter}/>)}
                </ul>
            </div>
        </section>
    );
};

export default Job;