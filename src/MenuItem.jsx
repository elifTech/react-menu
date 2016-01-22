import React from 'react';
import classNames from 'classnames';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.props.onClick(this.props.id);
  }

  render() {
    var menuItemClass = classNames({
      'focused': this.props.focused
    })
    return (
      <li className={menuItemClass} onClick={this.clicked}>
        <a href={this.props.children.route}>{this.props.children.label}</a>
      </li>
    );
  }
}

export default MenuItem;
