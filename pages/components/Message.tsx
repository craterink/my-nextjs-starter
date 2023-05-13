const classes = {
  wrapper: {
    display: "flex",
    justifyContent: "flex-start",
  },
  teacher: {
    justifyContent: "flex-end",
  },
  bodyWrapper: {
    marginBottom: "10px",
    padding: "5px 10px",
    borderRadius: "5px",
    maxWidth: "80%",
    alignSelf: "flex-start",
    backgroundColor: "#f2f2f2",
    overflowWrap: "break-word" as "break-word",
  },
  bodyWrapperBlue: {
    backgroundColor: "#5196FF",
    color: "#fff",
  },
};

const Message = (props) => {
  const { children, showBlue } = props;

  return (
    <>
      <div
        style={
          showBlue
            ? { ...classes.wrapper, ...classes.teacher }
            : classes.wrapper
        }
      >
        <div
          style={
            showBlue
              ? { ...classes.bodyWrapper, ...classes.bodyWrapperBlue }
              : classes.bodyWrapper
          }
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Message;
