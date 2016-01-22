import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {focused: 0};
  }

  clicked (index){
		this.setState({focused: index});
	}

  render() {
    var self = this;
    console.log(MenuItem);

    return (
      <div>
				<ul>{ this.props.items.map(function(m, index){
					var style = '';

					if(self.state.focused === index){
						style = 'focused';
					}

					return <MenuItem>{m}</MenuItem>;
				})}
				</ul>
			</div>
    );
  }
}

export default Menu;
