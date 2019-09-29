import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-detais">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title {id}    
          </span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis quas reprehenderit deserunt odit aliquam itaque distinctio quae possimus delectus, expedita nam consequatur mollitia, nesciunt quod. Maiores officiis veniam nisi.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Connor</div>
          <div>22 May 2019</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
