let cartItems = {}
const addToCart = (id) => {
  if(cartItems[id]){
    cartItems[id] += 1
  } else {
    cartItems[id] = 1
  }
}

ReactDOM.render((
  <Router history={createHashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/products/:id" component={Product} addToCart={addToCart} products={PRODUCTS} />
      <Route path="/cart" component={Cart} cartItems={cartItems} products={PRODUCTS}/>
    </Route>
    <Route path="checkout" component={Checkout} cartItems={cartItems} products={PRODUCTS}/>
  </Router>
), document.getElementById('content'))