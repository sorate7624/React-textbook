class Counter extends React.Component {
  render() {
    return React.createElement(
      "span",
      null,
      " Click ",
      this.props.value,
      " times."
    );
  }
}