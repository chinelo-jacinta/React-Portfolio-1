import { projects } from '../data';

const Projects = () => {
  return (
    <section className=' section' id='projects'>
      <p className=' project-title'>web creations</p>
      <hr />
      <div className='projects-section'>
        {projects.map((item) => {
          const { id, image, title, about, icon1, icon2 } = item;
          return (
            <div className='project' key={id}>
              <img src={image} alt={title} />
              <div className='project-content'>
                <h3>{title}</h3>
                <p>{about}</p>
                <a href=''>{icon1}</a>
                <a href=''> {icon2}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
