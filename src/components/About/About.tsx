import "./About.css";

function About() {
  return (
    <section className="about-container bg-indigo-900 p-4">
      <div className="outer-heading">
        <div className="inner-heading">
          <h2 className="heading">
            &nbsp; <br />
            about
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  gap-5 text-sm p-6 w-2/3">
        <div className="">
          <h3 className="text-clear-orangeish text-3xl">How it all started...</h3>
          <article className="text-lg">
            I'm 26 years old and i've been studying web development since October 2021, when I had decided to transition my carrer into tech.
          </article>
        </div> 
        <div className="">
          <h3 className="text-clear-orangeish text-3xl">and what's next...</h3>
          <article className="text-lg"> 
          I am looking for an opportunity to put into practice the knowledge I acquire everyday and have acquired so far, contributing analytically to the development of new solutions.
          </article>
        </div>   
      </div>
    </section>
  )
}

export default About;