import "../../App.css";
import React, { Component } from "react";
import { Element } from "react-scroll";
class Good extends Component { 
  handleClicked = (index, id, param) => {    
    if (param == 0) {
      this.props.increment(index, id);
    } else {
      this.props.decrement(index, id);
    }
  };
  render() {  
    let clickTerm = this.props.clickParentToChild;  
    const { foods } = this.props;
    const ListItem = foods?.map((dishItem) => {    
      return (
        <div className="ElementStyle" key={"dishItem" + dishItem.id}>
          <Element
            name={dishItem.id.toString()}
            id={"food1" + dishItem.id}
            className="DishItemStyle"          
          >
            <h3 style={{ textAlign: "center" }}>{dishItem.names}</h3>
          </Element>
          <div className={dishItem.id == clickTerm ? "GoodStyle" : ""}>
            {dishItem?.products?.map((productsItem) => {           
              return (
                <div
                  className="Good-out"
                  key={"item" + dishItem.id + ":" + productsItem.id}               
                >
                  <div className="GoodComponent">
                    <h5>{productsItem.name}</h5>
                    <h6>{productsItem.title}</h6>
                    <h5>{productsItem.sallery}</h5>
                  </div>
                  <div className="col-md-4" id="buttonstyle">
                    <div className="linkTag">
                      <div
                        className="ButtonTag"
                        onClick={(e) =>
                          this.handleClicked(dishItem.id, productsItem.id, -1)
                        }
                        key={productsItem.id}
                      >
                        <svg
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="button-minus_svg__sc-gfqlmq button-minus_svg__fybOtW"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 11h14v2H5z"></path>
                        </svg>
                      </div>
                      <div className="Space"></div>
                      <div>
                        {productsItem.clicks == 0 ? (
                          <div
                            className="Value"
                            onClick={(e) =>
                              this.handleClicked(
                                dishItem.id,
                                productsItem.id,
                                0
                              )
                            }                         
                          >
                            Add
                          </div>
                        ) : (
                          <div className="Value1">{productsItem.clicks}</div>
                        )}
                      </div>
                      <div className="Space"></div>
                      <div
                        className="ButtonTag"
                        onClick={(e) =>
                          this.handleClicked(dishItem.id, productsItem.id, 0)
                        }                     
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
                </div>
              );
            })}
          </div>
        </div>
      );
    });

    return <div className="Container-Main-Menu">{ListItem}</div>;
  }
}

export default Good;
