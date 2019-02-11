import React from 'react';
import './job.scss';

const Job = (props) => (
  <div className="container">
    { props.info !== null && 
      <div className="row">
        <div className="col-md-12">
          <section className="Job">
            <div className="card">
              <div className="card-header">
              <a href="#" class="badge badge-success">{props.info.job_uuid}</a> - {props.info.job_title}
              </div>
              <div className="card-body">
                <ul>
                {
                  props.info.skills.map(item => {
                    return <li>{item.skill_name}</li>
                  })
                }
              </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    }
  </div>
)

export default Job;
