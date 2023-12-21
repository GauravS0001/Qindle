import React, { useState } from 'react';
import Svg, { Circle, Rect, G, Line, Path } from 'react-native-svg';
const Hamburger = props => {

  return (
    <>
      <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19">
        <G id="Hamburger" transform="translate(-15 -23)">
          <Rect id="Rectangle_2983" data-name="Rectangle 2983" width="24" height="3" rx="1.5" transform="translate(15 23)" fill="#fff" />
          <Rect id="Rectangle_2984" data-name="Rectangle 2984" width="24" height="3" rx="1.5" transform="translate(15 31)" fill="#fff" />
          <Rect id="Rectangle_2985" data-name="Rectangle 2985" width="24" height="3" rx="1.5" transform="translate(15 39)" fill="#fff" />
        </G>
      </Svg>

    </>
  );
};

export default Hamburger;
