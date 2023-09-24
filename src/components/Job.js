import Filter from "./Filter";
import logo from './../assets/faceit.svg';
import './Job.css';

const Job = () => {
    return (
        <section className="job-item job-featured">
            <div className="text-container">
                <div className="img-container"><img src={logo} alt=""/></div>
                <div>
                    <p className="role">Photosnap</p>
                    <span className="flag flag-new">New!</span>
                    <span className="flag flag-featured">Featured</span>
                    <div>
                        <h1 className="position">Senior Frontend Developer</h1>
                        <ul className="details-list">
                            <li className="details-item">1d ago</li>
                            <li className="details-item">Full Time</li>
                            <li className="details-item">USA only</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="filters-container">
                <ul className="filter-list">
                    <Filter roundedCorners={true} hoverable={true}/>
                    <Filter roundedCorners={true} hoverable={true}/>
                    <Filter roundedCorners={true} hoverable={true}/>
                </ul>
            </div>
        </section>
    );
};

export default Job;