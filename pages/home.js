import Image from "next/image";
import React, { useEffect, useState, ReactDOM } from "react";
import effects from "../components/effects";

export default function Comp({ name }) {
  const [childs, setChilds] = useState([]);
  const [val, setVal] = useState("");
  useEffect(() => {
    // Make the DIV element draggable:
    dragElement(document.getElementById("mydiv"));
    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown =
          dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }, []);

  const [demo, setDemo] = useState([]);
  const [showChild, setShowChild] = useState(false);

  const addInput = (e) => {
    var randomNum = Math.floor(Math.random() * 10);

    // demo.push(randomNum);
    console.log("e", e);
    console.log("demo", demo);
    setDemo(randomNum);
    setShowChild(true);
  };
  const handleCancelInput = () => {
    setShowChild(false);
  };
  const handleCancel = () => {};
  // return (
  //   <>
  //     <div className=" absolute" id="mydiv">
  //       <div
  //         className="mydivheader flex justify-space w-[300px]"
  //         draggable="true"
  //         draggable-auto="true"
  //         id="mydivheader"
  //       >
  //         <p className="text-[grey] text-[25px] ">categories</p>
  //         <button
  //           onClick={addInput}
  //           className="ml-2 text-[20px] bg-[grey] px-4 py-2 rounded-full"
  //         >
  //           add
  //         </button>
  //         <button
  //           className="bg-yellow-400 rounded-full py-2 px-4"
  //           onClick={handleCancelInput}
  //         >
  //           cancel
  //         </button>

  //       </div>
  //       {showChild ? (
  //           <div className="text-[black]  px-10 py-5 mydivheader">
  //             {/* {demo} */}
  //             <input
  //               type="text"
  //               className="py-2 px-2 focus:outline-none"
  //               placeholder="enter category"
  //             ></input>
  //             <button
  //               onClick={addInput}
  //               className="ml-2 text-[20px] bg-[green] px-4 py-2 rounded-full"
  //             >
  //               add
  //             </button>
  //             <button
  //               className="rounded-full text-[20px] bg-[lightblue] px-4 py-2"
  //               onClick={handleCancel}
  //             >
  //               cancel
  //             </button>
  //           </div>
  //         ) : null}
  //     </div>
  //   </>
  // );

  return (
    <>
      <div></div>
      <div className="flex " id="mydiv">
        <p>{name}</p>
        <input
          placeholder="enter value"
          value={val}
          style={{ width: "4rem", marginLeft: "1rem" }}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button
          onClick={(event) => {
            console.log("button add is clicked");
            setChilds([...childs, val]);
            setVal("");
          }}
        >
          Add
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {childs.map((child, i) => {
          return <Comp key={i} name={child} />;
        })}
      </div>
    </>
  );
}

function App() {
  return <Comp name="Categories" />;
}
