import "../../App.css";
import { BiSearchAlt } from "react-icons/bi";
import Scrollspy from "react-scrollspy";
import React, { useState} from "react";
import { Link } from "react-scroll";
function Menubar(props) {
  const { foods } = props;
  const [input, setInput] = useState("");
  // console.log("input", input);
  const handleChange = (e) => {
    setInput(e.target.value);
    props.childToParent(e.target.value);
  };
  const handleClick = (i) => {
    props.clickChildToParent(i);
  };
  let searchTerm = input.toLowerCase();  
  return (
    <div className="MENUSTYLE">
      <div className="Container-Main-scroll">
        <div className="search">
          <div className="searchbar">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="bt">
                <BiSearchAlt
                  style={{ width: "25px", height: "25px", color: "grey" }}
                />
              </button>
              <input
                type="text"
                id="mySearch"
                placeholder="Search..."
                className="input"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Scrollspy
              items={[
                "food11",
                "food12",
                "food13",
                "food14",
                "food15",
                "food16",
                "food17",
                "food18",
                "food19",
                "food110",
                "food111",
                "food112",
              ]}
              currentClassName="is-current"
              className="menubar-align"
            >
              {foods?.map((food) => {
                return (
                  <ul>
                    <li>                      
                      <Link
                        className={`"scroll" ${
                          food.names?.toLowerCase().includes(searchTerm)
                            ? ""
                            : "hidden"
                        }`}
                        to={food.id.toString()}
                        onClick={(click) => handleClick(food.id)}
                        offset={-100}
                      >
                        {food.names}
                      </Link>
                    </li>
                  </ul>
                );
              })}
            </Scrollspy>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menubar;
