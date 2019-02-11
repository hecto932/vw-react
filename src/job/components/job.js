import React from 'react';

const Job = (props) => (
  <div className="container">
    { props.info !== null && 
      <div className="row">
        <section className="Job">
          <div className="card">
            <div className="card-header">
              {props.info.uuid} - {props.info.job_title}
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
    }
  </div>
)

export default Job;
