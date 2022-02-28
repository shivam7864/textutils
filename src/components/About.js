import React ,{useState}from "react";

export default function About(props) {
  //  const[myStyle,setMyStyle]=useState({
        
  //       color:'white',
  //       backgroundColor:'black'
       
  //       })
  let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'#042743':'white',
    border:'2px solid ',
    borderColor:props.mode==='dark'?'white':'#042743'
  }
        // const [btntext,setBtnText]=useState("Enable Dark mode");

        // const toggleStyle=()=>{
        //     if (myStyle.color==='black') {
        //         setMyStyle({
        //             color:'white',
        //             backgroundColor:'black',
        //             border: '1px solid white'
        //         })
        //         setBtnText("Enable light mode");
        //     }
        //     else{
        //         setMyStyle({
        //             color:'black',
        //             backgroundColor:'white',
        //             border: '1px solid black'
        //         })
        //         setBtnText("Enable dark mode");
        //     }
            
        // }
  return (
    <>
      <div className="container my-4" style= {{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>About Us</h1>
        <div class="accordion" id="accordionExample" >
          <div class="accordion-item"  style={myStyle}>
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
               <strong style={ {color:'black'}}> Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                , though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
              <strong> Free To Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                accordion-body though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item" style={myStyle} >
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
               <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                .accordion-body, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
        <button onClick={toggleStyle} type="button" className="btn btn-primary mx-2 my-2" > {btntext}</button>
        </div> */}
      </div>
    </>
  );
}
