import React from 'react';
import MenuItem from './MenuItem.jsx';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {focused: 0};
    this.clicked = this.clicked.bind(this);
  }

  clicked (index){
		this.setState({focused: index});
	}

  render() {
    var self = this;

    return (
      <div>
				<ul>{ this.props.items.map(function(menuItem, index){
					return <MenuItem key={index} id={index} focused={self.state.focused === index} onClick={self.clicked}>{menuItem}</MenuItem>;
				})}
				</ul>
			</div>
    );
  }
}

export default Menu;
