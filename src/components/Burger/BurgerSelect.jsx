import React, { Component } from "react";
import { connect } from "react-redux";

class BurgerSelect extends Component {
  handleBtnClick = (ingredient, value) => {
    this.props.handleChangeAmount(ingredient, value);
  };
  handleBtnReset = () => {
    this.props.handlerReset();
  };

  renderMenu = () => {
    const { burger } = this.props;

    let menu = Object.entries(burger.menu);

    let contentHTML = menu.map(([ingre, value], index) => {
      let total = 0;
      total += value * burger.burger[ingre];
      return (
        <tr key={index}>
          <td scope="row">
            <span className="text-capitalize fw-bold">{ingre}</span>
          </td>
          <td>
            <button
              className="btn btn-danger text-white"
              onClick={() => {
                this.handleBtnClick(ingre, -1);
              }}
              disabled={!burger.burger[ingre]}
            >
              -
            </button>
            <span className="mx-3">{burger.burger[ingre]}</span>
            <button
              className="btn bg-primary text-white"
              onClick={() => {
                this.handleBtnClick(ingre, 1);
              }}
              disabled={burger.burger[ingre] > 4 ? true : false}
            >
              +
            </button>
          </td>
          <td>{value}</td>
          <td>{value * burger.burger[ingre]}</td>
        </tr>
      );
    });
    return contentHTML;
  };
  render() {
    return (
      <div>
        <h1>Choose Ingredient</h1>
        <div className="table-responsive">
          <table className="table table-hover border">
            <thead>
              <tr>
                <th scope="col">Thức ăn</th>
                <th scope="col">Số lượng </th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {this.renderMenu()}
              <tr className="fw-bold">
                <td scope="row" />
                <td />
                <td>Total:</td>
                <td className="text-danger">{this.props.burger.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-secondary"
            onClick={() => {
              this.handleBtnReset();
            }}
            disabled={this.props.burger.total === 85 ? true : false}
          >
            <i className="fas fa-sync"></i>
          </button>
          <button className="btn btn-lg btn-primary">Checkout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeAmount: (ingredient, amount) => {
      const action = {
        type: "CHANGE_AMOUNT",
        ingredient: ingredient,
        payload: amount,
      };
      dispatch(action);
    },
    handlerReset: () => {
      const action = {
        type: "RESET",
      };
      dispatch(action);
    },

    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerSelect);
