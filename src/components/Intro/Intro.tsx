function Intro() {
  return (
    <section 
    className="flex flex-col lg:flex-row items-center justify-center gap-2 p-4 lg:p-6 intro">
      <div className="text-intro flex flex-col gap-2 p-2 greeting-container">
        <h1 className="text-3xl lg:text-5xl">João Lima</h1>
        <h1
        className="text-4xl lg:text-6xl flex-1 text-wrap uppercase">Full Stack Web Developer</h1>
        <h1 className="text-3xl lg:text-4xl">based in Brazil.</h1>
        <p className="text-lg">I love creating </p>
      </div>
      <div
      className="greeting-image">
        <img 
        src="src/assets/photo-bg-pattern.png"
        alt=""
        className="object-contain relative h-[40rem] w-[40rem] circle-pattern"
        />
        {/* <div className="">
          <img 
          src="src/assets/foto_sem_texto (cópia).jpg" 
          alt=""
          className="object-cover rounded-md size-80 h-56 w-56 lg:h-96 lg:w-96 shadow-indigo-950 shadow-2xl"/>
        </div> */}
      </div>
    </section>
  )
}

export default Intro;