class Button extends React.Component {
  render() {
    return <button className="btn">{this.props.buttonLabel}</button>
  }
}
Buttom.defaultProps = {
  buttonLabel: 'Submit'
}