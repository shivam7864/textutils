import React,{useState} from 'react'


export default function Transform(props) {
    const [text, setText] = useState('');

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearText=()=>{
        let newText=' ';
        setText(newText);
        props.showAlert("Text has been cleared","success");
    }
    const handleOnCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied Successfully","success");
    }
   
    const handleOnCapitalize=()=>{
        let words=text.split(" ");
        let uwords='';
        words.forEach(element => {
            uwords=uwords+element.charAt(0).toUpperCase()+element.slice(1);
            props.showAlert("First letter has been capitalized","success");
        });
        setText(uwords);
    }

    const onReverseClickHandler=()=>{
        let count=text.length;
        let reverse="";
       for (let i = count-1; i >=0; i--) {
           reverse=reverse+text[i];
           props.showAlert("Converted to reversed mode","success");
       }
       setText(reverse);
        };
    return (
        <>

        <h1 className="container my-4 mx-4" style={{color:props.mode==='dark'?'white':'black'}}>Enter the text to analayze</h1>
           <div className="form-floating container my-5">
               <div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
  </div>
  <button  disabled={text.length===0} class="btn btn-primary mx-2 my-2" onClick={handleUpClick}>UpperCase</button>
<button  disabled={text.length===0} class="btn btn-primary mx-2 my-2" onClick={handleLowClick}> LowerCase</button>
<button  disabled={text.length===0} class="btn btn-primary mx-2 my-2" onClick={handleOnCapitalize}>Capitalize first letter</button>
<button  disabled={text.length===0} class="btn btn-primary mx-2 my-2" onClick={handleOnCopy}>Copy Text</button>
<button  disabled={text.length===0} class="btn btn-primary mx-2" onClick={onReverseClickHandler}>Reverse</button>
<button  disabled={text.length===0} class="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>

</div> 
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
    <p>{0.08* text.split(" ").length} taken to read the text</p>
    <h1>Preview</h1>
    <p>{text.length>0?text:"Enter something in the textbox to preview here..."}</p>
</div>




     </> 
    );
}
