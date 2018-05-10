const React = require('react');

class Conditional extends React.Component {
  render() {
    const { idyll, hasError, updateProps, children, ...props } = this.props;
    if (props.if) {
      return <div>{children}</div>
    }
    return null;
  }
}

module.exports = Conditional;
