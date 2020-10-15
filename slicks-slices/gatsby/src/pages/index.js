import React from 'react';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing() {
  return (
    <div>
      <p>CurrentlySlicing</p>
    </div>
  );
}
function HotSlices() {
  return (
    <div>
      <p>HotSlices</p>
    </div>
  );
}

export default function HomePage() {
  const [slicemasters, hotSlices] = useLatestData();
  return (
    <div className="center">
      <h1>Best pizza in huntington Beach!</h1>
      <p>Open 11am to 9pm Every single Day!</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}
