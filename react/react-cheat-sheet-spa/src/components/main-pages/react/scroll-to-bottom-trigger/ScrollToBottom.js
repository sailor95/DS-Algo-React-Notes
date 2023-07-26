import React, { useEffect, useState } from 'react';

const ScrollToBottom = ({
  outerData
}) => {
  const [isScrollHitBottom, setScrollHitBottom] = useState(true);

  const divRef = React.createRef();

  const handleScroll = e => {
    if (divRef.current) {
      const {
        scrollTop,
        clientHeight,
        scrollHeight,
      } = divRef.current;

      if (scrollTop + clientHeight >= scrollHeight) {
        if (!isScrollHitBottom) {
          setScrollHitBottom(true);
        }
      } else if (isScrollHitBottom) {
        setScrollHitBottom(false);
      }
    }
  };

  useEffect(() => {
    if (isScrollHitBottom && divRef && divRef.current) {
      divRef.current.scrollTop =
        divRef.current.scrollHeight;
    }
  }, [outerData]);

  return (
    <div
      ref={divRef}
      onScroll={handleScroll}>
      {outerData.map(data => (
        <div>{data}</div>
      ))}
    </div>
  );
};

export default ScrollToBottom;
