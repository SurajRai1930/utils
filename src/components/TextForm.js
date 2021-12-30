import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");

    }

    const handleLClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");

    }

    const handleCClick = () => {

        setText("");
        props.showAlert("Text Cleared", "success");

    }

    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();

        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");




    }

    const handleExtraSpace = () => {
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))

       props.showAlert("Removed Extra Spaces", "success"    );




    }
    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    return (
        <>



            <div className="container"  style={{color: props.mode==='dark'?'white': 'black'}}>
                <h1 > {props.heading} </h1>

                <div className="mb-3">
                    <label hrmlfor="myBox" className="form-label" />
                    <textarea className="form-control" value={text}  style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white': 'black'}} onChange={handleOnChange} id="myBox" rows="8" />
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>

            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white': 'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>

                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter the text to preview"}</p>
            </div>
        </>
    )
}
