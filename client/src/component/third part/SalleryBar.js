import "../../App.css";
import React, { Component } from "react";
import SalleryImage from "../../images/unnamed.png";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
} from "react-icons/fa";
import { SiFortran, SiFampay } from "react-icons/si";
class Sallerybar extends Component {
  handleClicked = (index, id, param) => {
    if (param == 0) {
      this.props.increment(index, id);
    } else {
      this.props.decrement(index, id);
    }
  };
  render() {
    const { foods } = this.props;
    const sallery = foods?.map((dish) => dish.products);

    var slclick = sallery?.map((prod1) => {
      for (var i = 0; i < prod1.length; i++)  
        if (prod1[i].clicks !== 0) return "true";
    });

    var result = slclick.includes("true");
    var total = 0;

    const ListItem = foods?.map((dishItem) => {
      return (
        <div key={"dishItem" + dishItem.id}>
          {dishItem?.products?.map((productsItem) => {
            if (productsItem.clicks !== 0) {
              return (
                <div
                  className=""
                  key={"item" + dishItem.id + ":" + productsItem.id}
                >
                  <div className="Sallery-Good-out">
                    <div className="col-md-6">
                      <h6>{productsItem.name}</h6>
                    </div>
                    <div className="col-md-2" id="buttonstyle-sallery">
                      <div className="linkTag">
                        <div
                          className="ButtonTag-Total"
                          onClick={(e) =>
                            this.handleClicked(dishItem.id, productsItem.id, 1)
                          }
                          key={productsItem.id}
                        >
                          <svg
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="button-minus_svg__sc-gfqlmq button-minus_svg__fybOtW"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 11h14v2H5z"></path>
                          </svg>
                        </div>
                        <div className="Space"></div>
                        <div>
                          <div className="Value2">{productsItem.clicks}</div>
                        </div>
                        <div className="Space"></div>
                        <div
                          className="ButtonTag-Total"
                          onClick={(e) =>
                            this.handleClicked(dishItem.id, productsItem.id, 0)
                          }
                          key={dishItem.id + "+" + productsItem.id}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="button-plus_svg__sc-ckRYGt button-plus_svg__fGBgDy"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="rightsallery">
                        <h6>
                          $
                          {(
                            Number(productsItem.sallery.substring(1)) *
                            productsItem.clicks
                          ).toFixed(2)}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      );
    });

    foods?.map((proItem) => {
      proItem?.products?.map((prod1) => {
        if (prod1.clicks !== 0) {         
          total += prod1.clicks * Number(prod1.sallery.substring(1)).toFixed(2);
        }
      });
    });
    return (
      <div className="sallery-out">
        <div className="SalleryOutStyle">
          <h3 style={{ textAlign: "center" }}>Your Cart</h3>
          {result !== true ? (
            <div className="sallery">
              <img
                src={SalleryImage}
                alt="Empty"
                width="300"
                height="300"
              ></img>
              <h4>Please select at least one product to place an order</h4>
              <FaCcVisa className="iconsize" />{" "}
              <FaCcMastercard className="iconsize1" />{" "}
              <SiFortran className="iconsize2" />{" "}
              <FaCcPaypal className="iconsize3" />{" "}
              <FaApplePay className="iconsize4" />{" "}
              <SiFampay className="iconsize5" />
            </div>
          ) : (
            <div>
              {ListItem}
              <div className="Total">
                <div className="Total-start">
                  <h6>Total</h6>
                </div>
                <div>
                  <h6>${total.toFixed(2)}</h6>
                </div>
              </div>
              <p
                className="checkout"
                href="#http://localhost:3000/"
                onClick={(e) => this.handleClicked(e)}
              >
                Checkout
              </p>
              <div className="alignicon">
                <FaCcVisa className="iconsize" />
                <FaCcMastercard className="iconsize1" />
                <SiFortran className="iconsize2" />
                <FaCcPaypal className="iconsize3" />
                <FaApplePay className="iconsize4" />
                <SiFampay className="iconsize5" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Sallerybar;
