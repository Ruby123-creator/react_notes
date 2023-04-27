/**
 * While there is no direct way to pass data from the child to the parent component, there are workarounds. The most common one is to pass a handler function from the parent to the child component that accepts an argument which is the data from the child component.
 */




const Children = ({ chooseMessage }) => {
    let msg = 'Goodbye';
    return (
      <div>
        <button onClick={() => chooseMessage(msg)}>Change    Message</button>
      </div>
    );
  };


  export default Children;