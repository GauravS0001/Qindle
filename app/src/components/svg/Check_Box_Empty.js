import React, { useState } from 'react';
import Svg, { Circle, Rect, G, Line, Path } from 'react-native-svg';
const Check_Box_Empty = props => {

  return (
    <>
      <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
        <G id="Check_Box_Empty" fill="#fff" stroke="#d0d5db" stroke-width="2">
          <Rect width="17" height="17" rx="3" stroke="none" />
          <Rect x="1" y="1" width="15" height="15" rx="2" fill="none" />
        </G>
      </Svg>


    </>
  );
};

export default Check_Box_Empty;
