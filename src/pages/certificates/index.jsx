import React from "react";
import { PiCertificateBold } from "react-icons/pi";
import PageHeaderContent from "../../components/pageheader";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdWork } from "react-icons/md";
import { data } from "./utils";
import 'react-vertical-timeline-component/style.min.css'
import './styles.scss';

const Certificates=()=>{
    return (
      <section id="cv" className="cv">
        <PageHeaderContent
          headerText="My Certificates"
          icon={<PiCertificateBold size={40} />}
        />
        <div className="timeline">
          <div className="timeline-schoolEducation">
            <VerticalTimeline
              layout={"1-column"}
              lineColor="var(--green-theme-main-color)"
            >
              {data.schoolEducation.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline-schoolEducation-vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--green-theme-sub-text-color)",
                    border: "1.5px solid var(--green-theme-main-color)",
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--green-theme-main-color)",
                  }}
                >
                  <h3 className="vertical-timeline-element-title-wrapper-description">
                    {item.certificate}
                  </h3>
                  <div className="vertical-timeline-element-title-wrapper">
                    <ul className="degree-list">
                      {item.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className="timeline-outsideEducation">
            <h3 className="timeline-outsideEducation-header">
              {" "}
              ONLINE CERTIFICATES{" "}
            </h3>
            <VerticalTimeline
              layout={"1-column"}
              lineColor="var(--green-theme-main-color)"
            >
              {data.outsideEducation.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline-outsideEducation-vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--green-theme-sub-text-color)",
                    border: "1.5px solid var(--green-theme-main-color)",
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--green-theme-main-color)",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.nameOfSchool}</h3>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                    {item.certificate}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    );
}
export default Certificates;