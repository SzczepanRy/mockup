import "../styles/JobOffers.scss"
import { jobs } from '../public/jobs.json'
export default function JobOffers() {

  return (

    <div className="jobOffers">
      <h2>Our company is looking for motivated employees who want to grow with us in order to sustain a high level of service and support our growth.  If you want to integrate a globally recognized enterprise, please see our job offers:</h2>
      <div className="jobs">
        {
          jobs.map((job: App.JobI, i: number) => {
            return (
              <div key={i} className="job">
                <h3><a href={job.link}>{job.title}</a></h3>
                <span>{job.date}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
