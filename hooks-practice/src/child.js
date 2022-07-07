import React,{forwardRef, useRef , useImperativeHandle} from "react";
const User = React.forwardRef((props , ref) => {
    const InputRef = useRef();

    const activate = () =>{
        InputRef.current.focus();
    }

    useImperativeHandle(ref,() =>{
        return {focus : activate}
       })
    
   return (
    <div>        
      <input type="text" ref ={InputRef}></input>
    </div>
  );
});
export default forwardRef(User);
