function Intro() {
  return (
    <section 
    className="flex flex-col lg:flex-row p-6 items-center justify-around">
      <div className="text-intro flex flex-col text-white">
        <h1 className="text-3xl">Hi,</h1>
        <h1 className="text-5xl">I'm João and I'm a</h1>
        <h1
        className="text-7xl text-white flex-1 text-wrap ">Full Stack Web Developer</h1>
        <p>I like creating</p>
      </div>
      <div 
      className="relative pointer-events-none">
        <img 
        src="src/assets/photo-bg-pattern.png"
        alt=""
        className="object-contain relative h-[40rem] w-[40rem]"
        />
        <img 
        src="src/assets/foto_sem_texto (cópia).jpg" 
        alt=""
        className="absolute object-cover rounded-md size-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 shadow-indigo-950 shadow-2xl"/>
      </div>
    </section>
  )
}

export default Intro;

// 