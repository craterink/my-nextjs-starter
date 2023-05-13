import Message from "./Message";

const classes = {
    icon: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        display: "block",
        margin:"10px 20px",
        position: "relative" as 'position',
        background: "#FFF",
        boxShadow: "-16px 0 #FFF, 16px 0 #FFF",
        boxSizing: "border-box" as 'border-box',
        animation: "shadowPulse 2s linear infinite",
    }
}

const TypingIndicator = () => {
    return <Message>
        <div style={classes.icon}></div>
    </Message>
}

export default TypingIndicator;