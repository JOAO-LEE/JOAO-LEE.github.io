import './Intro.css';

function Intro() {
  return (
    <section 
    className="flex flex-col xl:flex-row items-center justify-center  gap-0.5 p-2 lg:p-6 intro">
      <div className="text-intro flex flex-col gap-2 p-2 greeting-container">
        <h1 className="text-3xl lg:text-5xl">João Lima</h1>
        <h1
        className="uppercase">Full Stack Web Developer</h1>
        <h1 className="text-3xl lg:text-4xl">based in Brazil.</h1>
        <p className="text-lg mini-about">Passionate for learning modern technologies and creating clean applications with.</p>
      </div>
      <div
      className="greeting-image">
        <img 
        src="src/assets/photo-bg-pattern.png"
        alt=""
        className="object-cover circle-pattern"
        />
        <div>
          <img 
          src="src/assets/foto_sem_texto (cópia).jpg" 
          alt=""
          className="object-cover rounded-3xl shadow-indigo-950 shadow-2xl photograph"/>
        </div>
      </div>
    </section>
  )
}

export default Intro;