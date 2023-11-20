import React from "react";
import "./Contact.css"
import image from "./contact1.png"

function Contact() {
  return <div>
    <section className="contact" id="contact">
        <div className="container">
            <div className="heading">
                <span className="uppercase">contact</span>
                <h2>contact with me</h2>
            </div>
            <div className="content">
                <div className="left">
                    <div className="img"><img src={image} alt="" /></div>
                    <div className="info">
                        <h2>nevine acotanza</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt vero facilis neq
                            ue excepturi, eaque nesciunt tenetur obcaecati explicabo. Reiciendis, tenetur. 
                          </p>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt vero facilis neq
                            ue excepturi, eaque nesciunt tenetur obcaecati explicabo. Reiciendis, tenetur. 
                          </p>
                          <div className="icons">
                            <h2>find with me</h2>
                            <div className="icn">
                            <i class='bx bxl-facebook btn_shadow'></i><i class='bx bxl-twitter btn_shadow'></i><i class='bx bxl-instagram btn_shadow'></i>
                            </div>
                          </div>

                    </div>
                </div>
                <div className="right">
                    <form action="">
                        <div className="small">
                            <div className="input">
                                <h2 className="uppercase">your name</h2>
                                <input type="text" />
                            </div>
                            <div className="input">
                                <h2 className="uppercase">phone number</h2>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="big">
                            <h2 className="uppercase">email</h2>
                            <input type="email" />
                        </div>
                        <div className="big">
                            <h2 className="uppercase">subject</h2>
                            <input type="text" />
                        </div>
                        <div className="textarea">
                            <h2 className="uppercase">your message</h2>
                            <textarea name="" id="" cols="30" rows="7"></textarea>
                        </div>
                        <button className="submit uppercase" type="button"><span>send message </span><i class='bx bx-right-arrow-alt' ></i></button>
                    </form>
                </div>
            </div>
            <h2 className="endHeading">{`created by ==>`} <span>mohamed ayman</span></h2>
        </div>
    </section>
  </div>;
}

export default Contact;
