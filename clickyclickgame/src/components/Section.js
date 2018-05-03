import React, { Component } from "react";
import "../styles/Section.css";

class Section extends Component {
    render () {
        return ( <div className="row">
        <div id="pictures" className="col-md-3"><img src="/assets/images/dreamers.jpg" alt="Dreamers"></img></div>
        <div id="pictures" className="col-md-3"><img src="/assets/images/joywave.jpg" alt="Joywave"></img></div>
        <div id="pictures"  className="col-md-3"><img src="/assets/images/kaiserChiefs.jpeg" alt="Kaiser Chiefs"></img></div>
        <div id="pictures"  className="col-md-3"><img src="/assets/images/metric.jpg" alt="Metric"></img></div>
    </div>
    <div className="row">
        <div id="pictures"  className="col-md-3"><img src="/assets/images/modestMouse.jpg" alt="Modest Mouse"></img></div>
        <div id="pictures"  className="col-md-3"><img src="/assets/images/NBT.jpg" alt="Nothing But Thieves"></img></div>
        <div id="pictures"  className="col-md-3"><img src="/assets/images/nightRiots.jpg" alt="Night Riots"></img></div>
        <div id="pictures"  className="col-md-3"><img src="/assets/images/pmore.png" alt="Paramore"></img></div>
    </div>
    <div className="row">
        <div id="pictures"  className="col-md-3"><img src="/assets/images/radioHead.jpg" alt="Radio Head"></img></div>
        <div id="pictures"  className="col-md-3"><img src="/assets/images/theKillers.jpg" alt="The Killers"></img></div>
        <div id="pictures"  className="col-md-3"><img src="/assets/images/theWrecks.jpg" alt="The Wrecks"></img></div>
        <div id="pictures"  className="col-md-3"><img src="/assets/images/wombats.jpg" alt="The Wombats"></img></div>
    </div>
    )
}}


// const Section = () => (
//     <section className = "container">
//         <div className="row">
//             <div id="pictures" className="col-md-3"><img src="/assets/images/dreamers.jpg" alt="Dreamers"></img></div>
//             <div id="pictures" className="col-md-3"><img src="/assets/images/joywave.jpg" alt="Joywave"></img></div>
//             <div id="pictures"  className="col-md-3"><img src="/assets/images/kaiserChiefs.jpeg" alt="Kaiser Chiefs"></img></div>
//             <div id="pictures"  className="col-md-3"><img src="/assets/images/metric.jpg" alt="Metric"></img></div>
//         </div>
//         <div className="row">
//             <div id="pictures"  className="col-md-3"><img src="/assets/images/modestMouse.jpg" alt="Modest Mouse"></img></div>
//             <div id="pictures"  className="col-md-3"><img src="/assets/images/NBT.jpg" alt="Nothing But Thieves"></img></div>
//             <div id="pictures"  className="col-md-3"><img src="/assets/images/nightRiots.jpg" alt="Night Riots"></img></div>
//             <div id="pictures"  className="col-md-3"><img src="/assets/images/pmore.png" alt="Paramore"></img></div>
//         </div>
//         <div className="row">
//             <div id="pictures"  className="col-md-3"><img src="/assets/images/radioHead.jpg" alt="Radio Head"></img></div>
//             <div id="pictures"  className="col-md-3"><img src="/assets/images/theKillers.jpg" alt="The Killers"></img></div>
//             <div id="pictures"  className="col-md-3"><img src="/assets/images/theWrecks.jpg" alt="The Wrecks"></img></div>
//             <div id="pictures"  className="col-md-3"><img src="/assets/images/wombats.jpg" alt="The Wombats"></img></div>
//         </div>
//     </section>
// );


// //Shuffle the cards here

export default Section;