import  Children from './Children';

const Parent = () => {
    const [message, setMessage] = React.useState("Hello World");
    const chooseMessage = (message) => {
      setMessage(message);
    };
    return (
      <div>
        <h1>{message}</h1>
        <Children chooseMessage={chooseMessage} />
      </div>
    );
  };

  export default Parent;