import React from "react";
const withTheme = WrappedComponent => props => {
  const style = { background: props.theme.background, color: props.theme.color };
  return (
    <div style={style}>
      <WrappedComponent {...props} />
    </div>
  );
};
const Button = ({ children }) => <button>{children}</button>;
const Input = ({ type, value, onChange }) => <input type={type} value={value} onChange={onChange} />;
const ThemedButton = withTheme(Button);
const ThemedInput = withTheme(Input);
const HOC2 = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [theme, setTheme] = React.useState({ background: "lightgray", color: "black" });
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <ThemedButton theme={theme}>Click me</ThemedButton>
      <ThemedInput type="text" value={inputValue} onChange={handleInputChange} theme={theme} />
    </div>
  );
};


export default HOC2;
