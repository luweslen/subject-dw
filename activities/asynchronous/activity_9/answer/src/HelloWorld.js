import MyName from './MyName';
var createReactClass = require('create-react-class');

var HelloWorld = createReactClass({
  render: function () {
    return (
      <div>
        <MyName />
        <p>Hello World, <span className='label label-primary'>{this.props.name}</span></p>
      </div>
    );
  }
});

export default HelloWorld;