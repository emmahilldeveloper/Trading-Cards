'use strict';

function Homepage() {
  return (
    <React.Fragment>
    <h1>Welcome!</h1>
    <img src="/static/img/balloonicorn.jpg" alt="balloonicorn"></img>
    <a href="/cards">Go to Cards page</a>
    </React.Fragment>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
