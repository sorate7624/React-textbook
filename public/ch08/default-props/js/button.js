class Button extends React.Component {
  render() {
    return React.createElement(
      "button",
      { className: "btn" },
      this.props.buttonLabel
    );
  }
}
Buttom.defaultProps = {
  buttonLabel: 'Submit'
};