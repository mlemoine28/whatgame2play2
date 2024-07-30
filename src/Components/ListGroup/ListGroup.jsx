import { useState } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  useState; //Tells React that "this component has data or state that will change over time"
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      {/*Instead of <div>, you can just do <> and </> if you want. */}
      <h1>List of Places</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              {
                setSelectedIndex(index);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
