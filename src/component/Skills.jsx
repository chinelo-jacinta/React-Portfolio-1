import { skills } from '../data';

const Skills = () => {
  console.log(skills);
  return (
    <section id='skills-section'>
      <p className='section'>tech stack</p>
      <hr className='section' />
      <div className='skills-center'>
        <div className='skills section'>
          {skills.map((item) => {
            const { id, name, icon, aboutSkill } = item;
            return (
              <div key={id} className='skills-con '>
                <h2 className='skills-icon'>{icon}</h2>
                <h4>{name}</h4>
                <p>{aboutSkill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
