import React from "react";
import "./Hero.css";
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter,useTypewriter, Cursor } from 'react-simple-typewriter'

function Hero() {
  return <>
 <section className="hero" id="hero">
    <div className="container">
        <div className="left top">
            <h3 className="uppercase">welcome to my work </h3>
            <h1 className="">hi, i'm <span>jone lee</span></h1>
            <h2 className="title_typeWriter"> a <span className="">
            <Typewriter
            words={['Professional Coder.','Developer']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h2>
        <p>Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Repellendus ut qui, 
                     quaerat ex exercitationem repudiandae
                     nemo iusto cum itaque et!   
                    nemo iusto cum itaque et!
        </p>
        <div className="hero_btn">
            <div className="left_btn btnRow">
                <h2 className="heading_btn uppercase">find with me</h2>
                 <div className="allBtn">
                <button className="btn_shadow"><i class='bx bxl-facebook'></i></button>
                <button className="btn_shadow"><i class='bx bxl-twitter'></i></button>
                <button className="btn_shadow"><i class='bx bxl-linkedin'></i></button>
                </div>
            </div>
            <div className="right_btn btnRow">
                <h2 className="heading_btn uppercase">best skill on</h2>
            <div className="allBtn">
                <button className="btn_shadow"><img src={skill1} alt="" /></button>
                <button className="btn_shadow"><img src={skill2} alt="" /></button>
                <button className="btn_shadow btn_3"><img src={skill3} alt="" /></button>
           </div>
            </div>
        </div>
        </div>
        <div className="right">
            <div className="right_img">
              <span><img src={hero} alt="" /></span>
            </div>
        </div>
    </div>
    </section> 
  </>;
}

export default Hero;
