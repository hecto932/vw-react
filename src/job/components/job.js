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
                <a href="#" class="badge badge-success">{props.info.job_uuid}</a> - <a href="#" class="badge badge-primary">{props.info.job_title}</a>
              </div>
              <div className="card-body">
                <h2 className="title">SKills</h2>
                <ul>
                {
                  props.info.skills.map(item => {
                    return <li key={item.job_uuid}>{item.skill_name}</li>
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
