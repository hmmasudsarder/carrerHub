const jobCard = ({ job }) => {
    const {logo, job_title, remote_or_onsite, location, job_type, salary} = job;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">VIEW DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default jobCard;
