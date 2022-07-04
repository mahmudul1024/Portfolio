import React from 'react'

const Compo1 = () => {
  return (
    <>
    <section className='top-banner'>
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


<section className='dream-big'>

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
    </>
  )
}


export default Compo1
