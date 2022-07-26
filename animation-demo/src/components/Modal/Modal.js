import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const animatingTiming = {
  enter: 400,
  exit: 1000,
};
const modal = (props) => {
  // const cssClasses = [
  //   "Modal",
  //   props.show === "entering"
  //     ? "ModalOpen"
  //     : props.show === "exiting"
  //     ? "ModalClosed"
  //     : null,
  // ];

  //============================= USING TRANSITION =============================
  // return (
  // <Transition mountOnEnter unmountOnExit in={props.show} timeout={animatingTiming}>
  //   {(state) => {
  //     const cssClasses = [
  //       "Modal",
  //       state === "entering"
  //         ? "ModalOpen"
  //         : state === "exiting"
  //         ? "ModalClosed"
  //         : null,
  //     ];
  //     return (
  //       <div className={cssClasses.join(" ")}>
  //         <h1>A Modal</h1>
  //         <button className="Button" onClick={props.closed}>
  //           Dismiss
  //         </button>
  //       </div>
  //     );
  //   }}
  // </Transition>
  //);

  //============================= USING  CSS TRANSITION =============================

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animatingTiming}
      // classNames = 'fade-slide'
      classNames ={{
        enter : '' , 
        enterActive : 'ModalOpen',
        exit : '',
        exitActive : 'ModalClosed', 
        appear : '' , 
        appearActive : '' , 
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
