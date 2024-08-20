import "./Intro.css";

function Intro() {
  return (
    <section 
    className="flex flex-col xl:flex-row items-center justify-center gap-1 p-2 lg:p-6 lg:gap-10 intro bg-pal-purple-600">
      <div className="text-intro flex flex-col gap-2 p-2 greeting-container">
        <h1 className="text-3xl lg:text-5xl">João Lima</h1>
        <h1
        className="uppercase">Full Stack Web Developer</h1>
        <h1 className="text-3xl lg:text-4xl after:content-['.'] after:text-pal-orange-100">based in Brazil</h1>
        <p className="mini-about after:content-['.'] after:text-pal-orange-100">Passionate for learning modern technologies and creating clean applications with</p>
      </div>
    </section>
  )
}

export default Intro;