import React, { useState } from "react";

const Apple = () => {
  const [click, setClick] = useState(false);
  const [isClass, setClass] = useState(false);
  const [isBasket, setBasket] = useState(false);
  //const random = Math.floor(Math.random() * 3) + 1;
  const toggleClass = () => {
    setClick(!click);

    if (click === false) {
      setTimeout(() => {
        setClass((prevState) => !prevState);
      }, 3000);
      setTimeout(() => {
        setBasket((prevState) => !prevState);
      }, 4000);
    }
  };

  return (
    <>
      <div className="tree-area">
        <figure className={click ? "shake" : "tree-area__tree"}>
          <img src="tree.svg" alt="tree" width="38%" />
        </figure>
        <figure
          className={`
          ${isClass ? "disabled " : "tree-area__apple"}
          ${isBasket ? "basket" : ""}
          `}
        >
          <img src="apple.svg" alt="apple" width="25%" />
        </figure>
        <figure
          className={`
            ${isClass ? "disabled disabled-one " : "tree-area__apple-one"}
            ${isBasket ? "basket basket-one" : ""}
            `}
        >
          <img src="apple.svg" alt="apple" width="25%" />
        </figure>
        <figure
          className={`
    ${isClass ? "disabled disabled-two " : "tree-area__apple-two"}
    ${isBasket ? "basket basket-two" : ""}
    `}
        >
          <img src="apple.svg" alt="apple" width="25%" />
        </figure>
        <figure
          className={`
              ${isClass ? "disabled disabled-three " : "tree-area__apple-three"}
              ${isBasket ? "basket basket-three" : ""}
              `}
        >
          <img src="apple.svg" alt="apple" width="25%" />
        </figure>
        <figure
          className={`
               ${isClass ? "disabled disabled-four " : "tree-area__apple-four"}
               ${isBasket ? "basket basket-four" : ""}
               `}
        >
          <img src="apple.svg" alt="apple" width="25%" />
        </figure>

        <div className="button">
          <button className="tree-area__btn" onClick={toggleClass}>
            Shake the!
          </button>

          <figure className="tree-area__basket">
            <img src="basket.svg" alt="apple" width="50%" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Apple;
