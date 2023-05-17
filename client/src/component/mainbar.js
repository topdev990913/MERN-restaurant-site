import "../App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";
import MenuBar from "./First part/MenubarContainer";
import Good from "./second part/GoodContainer";
import SalleryBar from "./third part/SallerybarContainer";

function Mainbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [animation, setAnimation] = useState(0);
  const handleChange = (e) => {
    setSearchTerm(e);  
  };
  const handleClick = (data) => {
    setAnimation(data);
  }
  return (
    <div className="ContainerApp">
      <div className="row container-fluid ">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
          <MenuBar childToParent={handleChange} clickChildToParent={handleClick} />
        </div>
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-6">
          <Good parentToChild={searchTerm} clickParentToChild={animation}/>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <SalleryBar />
        </div>
      </div>
    </div>
  );
}
export default Mainbar;
