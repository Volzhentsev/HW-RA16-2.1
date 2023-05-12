import React from 'react';
import IconSwitch from './IconSwitch'
import ShopItem from './ShopItem'
import ShopCard from './ShopCard'
import ListView from './ListView'
import CardsView from './CardsView'
import { products } from './data'

export default class Store extends React.Component {
    constructor(props) {
      super(props) 
      this.state = {
        icon: "view_list"
      }
    } 
    onHandleToggle = () => {
        this.state.icon === "view_list" ? this.setState({icon: "view_module"}) : this.setState({icon: "view_list"})
    }
      
      render() {
        return (
          <div>
            <IconSwitch icon={this.state.icon} onSwitch={this.onHandleToggle} />
            {this.state.icon === "view_module" ? <CardsView cards={<ShopCard products={products} />} /> : 
              <ListView items={<ShopItem products={products} />} />
            }
          </div>
        )
    }
};

