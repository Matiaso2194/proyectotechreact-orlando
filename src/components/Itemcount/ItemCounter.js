import React from "react";

export default function ItemCount({
  count,
  handleAddItem,
  handleDecrementItem,
  buttonAddActive,
  buttonDecreaseActive,
  maxStock,
  redBorder,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "80px",
      }}
    >
      <div>
        <div
          className={redBorder ? "itemCounter2" : "ItemCounter"}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Si existe maxStock quiero que el div tenga estas propiedades
          flex-direction: column; width: 300px; padding: 3%; */}
          <div style={{ display: "flex" }}>
            <button
              type="button"
              onClick={handleDecrementItem}
              disabled={!buttonDecreaseActive}
              className="btn btn-secondary"
            >
              -
            </button>
            <div className="valueItem">
              <p className="counterP">{count}</p>
            </div>
            <button
              type="button"
              onClick={handleAddItem}
              disabled={buttonAddActive}
              className="btn btn-secondary"
            >
              +
            </button>
          </div>
          <div className="maxStock">
            <p>{maxStock}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
