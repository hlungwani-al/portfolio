import React from "react";
import { PiPersonArmsSpreadDuotone } from "react-icons/pi";
import PageHeaderContent from "../../components/pageheader";



const Bonus=()=>{
    return (
        <section id="Bonus" className="Bonus">
            <PageHeaderContent 
                headerText="Additional"
                icon={<PiPersonArmsSpreadDuotone size={40}/>}
            /> 
       </section>
    )
}
export default Bonus;