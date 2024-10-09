import React from "react";
import { BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageheader";
import { Animate } from "react-simple-animate";
import './styles.scss'
import { FaJava } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import { DiDatabase, DiReact } from "react-icons/di";

const personalDetails = [
    {
        label: "Names",
        value: "Amukelani Lyborn Hlungwani",
    },
    {
        label: "Email",
        value: "Lyborn77@gmail.com",
    },
    {
        label: "Country",
        value: "South Africa",
    },
    {
        label: "Contact No",
        value: "+27 76 382 3711",
    },
];


const About=()=>{
    return (
      <section id="about" className="about">
        <PageHeaderContent
          headerText="About Me"
          icon={<BsInfoCircleFill size={40} />}
        />
        <div className="about-content">
          <div className="about-content-personalWrapper">
            <Animate
              play
              duration={1.5}
              delay={0}
              start={{
                transform: "translateX(-900px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3>Full Stack Mastermind</h3>
              <p>
                From the realm of mathematics to the realm of web development,
                I, Amukelani, emerged as a full stack web developer, ready to
                conquer the digital universe! Armed with a Mathematical &
                Computer Sciences degree and fueled by a passion for coding, I'm the digital
                wizard that will transform your website into a sleek,
                user-friendly masterpiece that stands out from the digital
                crowd. With my extensive knowledge of front-end and back-end
                development, I'm the unstoppable force you've been searching for
                to build your dream website. I'm the architect of your online
                kingdom, the master of code, and the trailblazing vision that
                will propel your digital presence into the stratosphere.
              </p>
            </Animate>
            <Animate
              play
              duration={1.5}
              delay={0}
              start={{
                transform: "translateX(500px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="personalInformationHeader">
                Personal Information
              </h3>
              <ul>
                {personalDetails.map((item, i) => (
                  <li className="personalInformationHeader-li" key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
          <div className="about-content-servicesWrapper">
            <Animate
              play
              duration={1.5}
              delay={0}
              start={{
                transform: "translateX(600px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <div className="about-content-servicesWrapper-innerContent">
                <div>{<FaDev size={60} />}</div>
                <div>{<DiDatabase size={60} />}</div>
                <div>{<DiReact size={60} />}</div>
                <div>{<FaJava size={60} />}</div>
              </div>
            </Animate>
          </div>
        </div>
      </section>
    );
};
export default About;