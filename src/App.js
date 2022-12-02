import React ,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
// import { ColorPicker, useColor } from "react-color-palette";

function App()
{
    const[mode,setMode]=useState('light');
    //default dark mode set as false: whether dark mode is enabled true or false

    //alert function
    const[alert,setAlert]=useState(null);
    const showAlert=(message,type)=>
    {
        setAlert(
            {
                msg:message,  //alert is object 
                type: type
            }
        )
        setTimeout(()=>
        {
            setAlert(null);
        },3500
        );
    }

    //togglecolor
    // const toggleColor=(value)=>
    // {
    //     console.log(value);
    //     setColor(value);
    //     document.body.style.backgroundColor=color;
    // }

    // const handleCoClick=()=>
    // {
    //     let words=0;
    //     let pattern=/\S*[a-z]\S*/gi;
    //     let ncount=text.replaceAll('',)
    // }

    
   const toggleMode=()=>
   {
    if(mode==='light')
    {
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode has been enabled","success");
    }
    else
    {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
    }
   }

    return(
        <>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}></Alert>
        <div className='container my-3'>
            <Textform showAlert={showAlert}
            heading="Enter text below to analyze" mode={mode}/>
        {/* <About/> */}
        </div>
        </>
    );
}

export default App;

