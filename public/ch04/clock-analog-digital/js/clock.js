class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString('en')
    };
  }
  launchClock() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString('en')
      });
    }, 1000);
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(AnalogDisplay, { time: this.state.currentTime }),
      React.createElement(DigitalDisplay, { time: this.state.currentTime })
    );
  }
}