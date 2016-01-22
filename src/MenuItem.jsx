import React from 'react';
import classNames from 'classnames';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {focused: props.focused};
  }

  render() {
    var menuItemClass = classNames({
      'focused': this.state.focused
    })
    return (
      <li className={menuItemClass}>{this.props.children}</li>
    );
  }
}

export default MenuItem;
