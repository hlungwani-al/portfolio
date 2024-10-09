import React from "react";
import { GrProjects } from "react-icons/gr";
import PageHeaderContent from "../../components/pageheader";
import { IoMdConstruct } from "react-icons/io";
import "./styles.scss"

const Portfolio=()=>{
    return (
        <section id="Portfolio" className="Portfolio">
            <PageHeaderContent 
                headerText="My Portfolio"
                icon={<GrProjects size={40}/>}
            />
            <div className="construction-">
                {<IoMdConstruct size={500} color={"var(--green-theme-sub-text-color)"} />}
            </div> 
       </section>
    )
}
export default Portfolio;