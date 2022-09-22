import React from "react";
import { throttle } from "../../../handlers/throttle";
import UseElementSize from "../../../handlers/useElementSize";
import "./List.css";

const List = ({ rowHeight, children, bufferedItems, gap = 10 }) => {
  const [containerRef, { height: containerHeight }] = UseElementSize();
  const [scrollPosition, setScrollPosition] = React.useState(0);

  // get the children to be renderd
  const visibleChildren = React.useMemo(() => {
    const startIndex = Math.max(
      Math.floor(scrollPosition / rowHeight) - bufferedItems,
      0
    );
    const endIndex = Math.min(
      Math.ceil((scrollPosition + containerHeight) / rowHeight - 1) +
        bufferedItems,
      children.length - 1
    );

    return children.slice(startIndex, endIndex + 1).map((child, index) =>
      React.cloneElement(child, {
        style: {
          position: "absolute",
          top: (startIndex + index) * rowHeight + index * gap,
          height: rowHeight,
          left: "20px",
          right: "20px",
          zIndex: "1",
        },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, containerHeight, scrollPosition]);

  const onScroll = React.useMemo(
    () =>
      throttle(
        (e) => {
          setScrollPosition(e.target.scrollTop);
        },
        50,
        { leading: false }
      ),
    []
  );

  return (
    <ul
      onScroll={onScroll}
      style={{
        overflowY: "auto",
        position: "relative",
      }}
      ref={containerRef}
      className="container"
    >
      {visibleChildren}
    </ul>
  );
};

export default List;
