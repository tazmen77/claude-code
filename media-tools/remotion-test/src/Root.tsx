import React from 'react';
import {Composition, AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

const Hello: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{backgroundColor: '#111', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{color: 'white', fontSize: 80, opacity}}>Remotion works</h1>
    </AbsoluteFill>
  );
};

export const Root: React.FC = () => (
  <Composition id="Hello" component={Hello} durationInFrames={60} fps={30} width={640} height={360} />
);
