import { projects } from '../data';

const Projects = () => {
  return (
    <section className=' section' id='projects'>
      <p className=' project-title'>projects</p>
      <hr />
      <div className='projects-section'>
        {projects.map((item) => {
          const { id, image, title, about, icon1, icon2 } = item;
          return (
            <div className='project' key={id}>
              <a href=''>
                <img src={image} alt={title} />
              </a>
              <div className='project-content'>
                <h3>{title}</h3>
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
