import React, {useState} from 'react'
import { PropTypes } from 'react';
import Navbar from './Navbar';
export default function Textform(props) {
  const handleUpClick=()=>
  {
    console.log('upclicked was clicked'+text);  //text variable accessed
    let newtext=text.toUpperCase();
    // setText("you have clicked on handleupclick"); //upclicked when clicked displays this
    setText(newtext);
    props.showAlert("converted to uppercase","success");
  }
  const handleLowClick=()=>
  {
    console.log('lowclicked was clicked'+text);  //text variable accessed
    let newtext=text.toLowerCase();
    // setText("you have clicked on handleupclick"); //upclicked when clicked displays this
    setText(newtext);
    props.showAlert("converted to lowercase","success");
  }
  const handleOnChange=(event)=>
  {
    console.log("onchange was clicked");
    setText(event.target.value);
  }
  const [text, setText]=useState('');  //blank string
  //wrong way for text updation
  // text="hello";
  //correct way for text updation
  // setText('new text');
  
  //speak function and stop
  const speak=()=>
  {
    let msg= new SpeechSynthesisUtterance(text);
    
    window.speechSynthesis.speak(msg);
    const toggle=document.getElementById('toogle');
    if(toggle.textContent==='Speak')
    {
        toggle.innerHTML="Stop";
    }
    else
    {
      toggle.innerHTML="Speak";
      if(toggle.innerHTML==="Speak")
      {
        window.speechSynthesis.cancel();
      }
    }

  }
  const handleCopy=()=>
  {
    console.log("I am copy");
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }
  //to clear text
  const handleClearClick=()=>
    {
        let newtext='';
        setText(newtext);
        props.showAlert("Text cleared","success");
    }

  //find and replace function
  const[fWord,findWord]=useState("");
  const[rWord,replaceWord]=useState("");
  const handlefindChange=(event)=>
  {
    findWord(event.target.value);
  };
  const handleReplaceChange=(event)=>
  {
    console.log(replaceWord(event.target.value));
  };
  const handleReplaceClick=()=>
  {
    let newtext=text.replaceAll(fWord,rWord);
    setText(newtext);
  };

  //reversetext button
  const handlereversed=(event)=>
  {
    let splitword=text.split("");
    let reverseword=splitword.reverse();
    let joinedwords=reverseword.join("");
    let newtext=joinedwords;

    setText(newtext);
  }

  const handleExtraSpaces=()=>
  {
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("extra space cleard","success");
  }

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'? 'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">

<textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white' , color: props.mode==='dark'?'white':'#042743'}}>
  {/*find and replace words*/}
  
</textarea >
{/* <textarea value={fWord}
    onChange={handlefindChange}></textarea>
    <textarea value={rWord}
    onChange={handleReplaceChange}></textarea> */}

  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
  <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to lowercase</button>
  <button className='btn btn-warning mx-2 my-2' onClick={speak} id="toggle">Speak</button>
  <button className='btn btn-warning mx-2 my-2' onClick={handlereversed} id="toggle">reverseword</button>
  <button className='btn btn-warning mx-2 my-2' onClick={handleReplaceClick} id="toggle">Find </button>
  <button className='btn btn-warning mx-2 my-2' onClick={handleReplaceClick} id="toggle">Find </button>
  <button className='btn btn-warning mx-2 my-2' onClick={handleCopy} id="toggle">Copy text </button>
  <button className='btn btn-warning mx-2 my-2' onClick={handleExtraSpaces} id="toggle">Remove extra spaces </button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      {/*calculating number of words and characters*/}
      <p>{text.split(" ").length} words {text.length} characters</p> 
      {/*calculating time for reading words*/}
      <p>{0.008 * text.split(" ").length} Read minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"enter something in textbox above to preview it here "}</p>
      {/* //count word as 1 */}
      <p>{text.split(' ').filter(function(n) { return n != '' }).length} word</p>
    </div>

    

    </>
  )
}
