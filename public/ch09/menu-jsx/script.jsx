class Menu extends React.Component {
  render() {
    let menus = ['Home', 'About', 'Services', 'Portfolio']
    return (
      <div>
        {menus.map((v, i)=> {
          return <div key={i}>
            <Link label={v}/>
          </div>
        })}
      </div>
    )
  }
}

class Link extends React.Component {
  render() {
    const url='/' + this.props.label.toLowerCase().trim().replace(' ', '-')
    
    return <div>
      <a href={url}>
        {this.props.label}
      </a>
    </div>
  }
}

ReactDOM.render(<Menu />, document.getElementById('content'))