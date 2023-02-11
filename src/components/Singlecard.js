import React from "react";
import { Image } from "antd";

function SingleCard({ url, id, isFlipped, handleClick, row, column }) {

  return (
    <>
      <div
        style={{
          height: "80px",
          width: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          color: "#fff",
        }}
      >
        {isFlipped ? (
          <Image height="80" width="80" src={url} preview={false} />
        ) : (
          <span
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            data-url={url}
            onClick={() => handleClick(row, column)}
          >
            ?
          </span>
        )}
      </div>
    </>
  );
}

export default SingleCard;
