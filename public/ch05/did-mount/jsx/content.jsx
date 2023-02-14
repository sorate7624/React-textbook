class Content extends React.Component {
  constructor(props) {
    super(props)
    console.log('I log, therfore I am')
  }
  componenetWillMount() {
    console.log(ReactDOM.findDOMNode(this))
  }
  componentDidMount() {
    console.dir(ReactDOM.findDOMNode(this))
  }
  render() {
    console.log('Render')
    return (
      <div/>
    )
  }
}