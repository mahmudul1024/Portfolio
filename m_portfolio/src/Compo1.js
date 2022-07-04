import React from 'react'

const Compo1 = () => {
  return (
    <>
    <section className='top-banner flex_container'>
    <div className='bdy half-width ' >
      <h1>Welcome To </h1>
      <h1> <span className='orange_color'>Mahmudul Hasan </span>  World </h1>
           <h3>Build Climber and Train Stopper</h3>
        <p>
Hey, I'm Md Shijan Ali as a Professional Web & WordPress Developer. I have 5+ years of experience in this field. I have completed more than 200+ Projects for my different countries clients. 
        </p>

        <a  target={"_blank"} className={"link-button"} href='https://www.linkedin.com/in/mahmudul-hasan-33a34421a/'>Hire Me</a>
    </div>
   
    <div className='half-width '>
        <img src='images/my_pic.jpg'></img>
    </div>


    </section>


<section className='dream-big flex_container'>

<div className='half-width '>
    <img src='images/my-bg.jpg'></img>
</div>
  <div className='half-width ' >

    <h1>Dream Big</h1>
    <h2>Become a web Developer</h2>
    <p>I already learned the basic HTML and CSS. I can build any simple website. I can even teach my grandma how to make simple website. My goal is to build 3 websites and learn advanced topics.</p>


    <a className='link-button' target={'_blank'} href='' >Download Resume</a>
 </div>
</section>


<section className='experience_area'>
<h1>Experience</h1>
<div className='flex_container'>
<div className='half-width'>
<h1>Full Stack Web Developer</h1>
<h3>2021-Present | Pro Level Developer</h3>
<p>I am the master of HTML, CSS and Javascript. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS. I even know the deployment, server and security. I will give you 100% web solution.</p>
</div>

<div className='half-width'>
    <h1>Baby Web Developer</h1>
    <h3>2020-2021 | Programming Hero Learner</h3>
    <p>They didn't offer me a job. But I made myself as a remove web developer. I made their website and showed it to them. They liked it. And uploaded the content. It was fun working at Programming Hero.</p>
</div>
</div>

</section>
    </>
  )
}


export default Compo1
