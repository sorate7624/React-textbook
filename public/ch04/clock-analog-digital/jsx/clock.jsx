class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: (new Date()).toLocaleString('en')
    }
  }
  launchClock() {
    setInterval(() => {
      this.setState({
        currentTime: (new Date()).toLocaleString('en')
      })
    }, 1000);
  }
  render() {
    return <div>
      <AnalogDisplay time={this.state.currentTime}/>
      <DigitalDisplay time={this.state.currentTime}/>
    </div>
  }
}