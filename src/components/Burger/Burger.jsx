import React, { Component } from "react";
import { connect } from "react-redux";
import BurgerSelect from "./BurgerSelect";

class Burger extends Component {
  //Method render ingredient in burger
  renderInnerBurger = () => {
    const { burgerInner } = this.props;
    //Object.entries: convert Object to array with key and value
    let conntentHTML = Object.entries(burgerInner).map(([ingre, value]) => {
      let burgerMid = []; //actual returning content return at every item looped
      for (let i = 0; i < value; i++) {
        burgerMid.push(<div key={i} className={ingre}></div>);
      }
      return burgerMid;
    });
    // Final content
    return conntentHTML;
  };
  render() {
    this.renderInnerBurger();
    return (
      <div className="row container mt-5">
        <div className="col-8">
          <div className="burgerRender">
            <div className="breadTop"></div>
            <div className="burgerInner">{this.renderInnerBurger()}</div>
            <div className="breadBottom"></div>
          </div>
        </div>
        <div className="col-4">
          <BurgerSelect />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burgerInner: state.burgerReducer.burger,
});

export default connect(mapStateToProps)(Burger);
