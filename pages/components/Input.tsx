import { useState } from "react";

const classes = {
  inputContainer: {
    display: "flex",
    alignItems: "stretch",
    borderRadius: "8px",
    backgroundColor: "#F4F4F4",
    margin:"10px",
    border: "2px solid",
    borderColor: "transparent",
    transition:"border-color .1s ease-in-out"
  },
  inputFocusedContainer: {
    borderColor:"#5196FF"
  },
  emptyInput: {
    backgroundColor: "#F4F4F4",
  },
  input: {
    borderRadius: "8px",
    flexGrow: 1,
    padding: "10px",
    border: "none",
    outline:"none",
    transition:"background-color .1s ease-in-out"
  },
  button: {
    borderRadius: "100%",
    backgroundColor: "#5196FF",
    outline: "none",
    border: "none",
    margin:"4px",
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    width:"32px",
    height:"32px",
    transition:"background-color .1s ease-in-out"
  },
  buttonIcon: {
    display:"block",
    width:"18px",
    height:"18px",
    backgroundColor:"#fff",
    mask: "url(assets/icon-send.svg)",
    maskSize: "contain",
    WebkitMask: "url(assets/icon-send.svg) no-repeat center / contain",
    transition:"background-color .1s ease-in-out"
  },
  buttonDisabled: {
    backgroundColor: "#D0CDCD"
  },
  buttonIconDisabled: {
    backgroundColor: "#ABABAB"
  }
}

const Input = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const {draftMessage, handleDraftMessageChange, handleSendMessage} = props;
    const inputIsEmpty = !draftMessage;
    console.log(inputIsEmpty)

    return <> 
        <div style={isFocused ? {...classes.inputContainer, ...classes.inputFocusedContainer} : classes.inputContainer}>
            <input
                style={inputIsEmpty ? {...classes.emptyInput, ...classes.input} : classes.input}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSendMessage()
                }}
                type="text"
                value={draftMessage}
                onChange={handleDraftMessageChange}
                placeholder="Write a response..."
            />
            <button
                style={inputIsEmpty ? {...classes.button, ...classes.buttonDisabled} : classes.button}
                onClick={handleSendMessage}
            >
                <div
                    style={inputIsEmpty ? {...classes.buttonIcon, ...classes.buttonIconDisabled} : classes.buttonIcon}>
                </div>
            </button>
        </div>
    </>
}

export default Input;