import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Singlecard from "./Singlecard";

function randomPic() {
  let tabIds = [];
  for (let i = 20; i <= 29; i++) {
    let url = `https://picsum.photos/id/${i}/200`;
    tabIds.push(url);
  }
  return tabIds;
}

const random = randomPic()
  .concat(randomPic())
  .sort(() => Math.random() - 0.5);

let matrix = [];

for (let i = 0; i <= random.length; i += 5) {
  matrix.push(random.slice(i, i + 5));
}

let i = 0;
let checkArray = [];
let style = [];

function Cardlist() {
  const [isFlipped, setIsFlipped] = useState(true);
  const [cards, setCards] = useState([
    {
      row: 0,
      column: 0,
      isFlipped: false,
    },
    {
      row: 0,
      column: 1,
      isFlipped: false,
    },
  ]);
  const handleClick = (row, column) => {
    console.log("Row Is " + row);
    console.log("Column Is " + column);
    // if (i < 2) {
    //   i++;
    //   style.push(e.target.parentElement.style);
    //   checkArray.push(e.target.dataset.url);
      // setIsFlipped(!isFlipped);
      // if (checkArray.length === 2) {
      //   if (checkArray[0] === checkArray[1]) {
      //     style[0].display = "none";
        //   style[1].display = "none";
        //   i = 0;
        //   style = [];
        //   checkArray = [];
        // } else {
        //   console.log("Not Equal");
        //   i = 0;
        //   checkArray = [];
        //   style = [];
          // setTimeout(() => {
          //   setIsFlipped(false);
          // }, 1000);
    //     }
    //   }
    // }
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsFlipped(!isFlipped);
  //   }, 3000);
  // }, []);
  return (
    <div>
      {matrix.map((row, indexRow) => (
        <Row key={indexRow} gutter={[16, 16]}>
          {row.map((column, indexColumn) => {
            return (
              <Col key={indexColumn} span={4}>
                <Singlecard
                  row={indexRow + 1}
                  column={indexColumn + 1}
                  handleClick={handleClick}
                  // isFlipped={isFlipped}
                  url={column}
                />
              </Col>
            );
          })}
        </Row>
      ))}
    </div>
  );
}

export default Cardlist;
