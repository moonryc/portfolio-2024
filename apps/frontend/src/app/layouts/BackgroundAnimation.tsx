import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material';

const shapePositions = {
  1: [
    { left: '0%', top: '0%', height: '50%', width: '20%' },
    { left: '20%', top: '0%', height: '50%', width: '30%' },
    { left: '50%', top: '0%', height: '100%', width: '50%' },
    { left: '0%', top: '50%', height: '50%', width: '30%' },
    { left: '30%', top: '50%', height: '50%', width: '20%' },
    { left: '70%', top: '50%', height: '50%', width: '30%' },
    { left: '85%', top: '75%', height: '25%', width: '15%' },
  ],
  2: [
    { left: '25%', top: '20%', height: '80%', width: '15%' },
    { left: '40%', top: '20%', height: '50%', width: '10%' },
    { left: '50%', top: '0%', height: '100%', width: '25%' },
    { left: '0%', top: '0%', height: '50%', width: '10%' },
    { left: '10%', top: '0%', height: '70%', width: '15%' },
    { left: '75%', top: '10%', height: '80%', width: '15%' },
    { left: '90%', top: '40%', height: '60%', width: '10%' },
  ],
  3: [
    { left: '0%', top: '16.5%', height: '32%', width: '20%' },
    { left: '20%', top: '2.7%', height: '55%', width: '34%' },
    { left: '38%', top: '0%', height: '100%', width: '62%' },
    { left: '0%', top: '47.3%', height: '55%', width: '34%' },
    { left: '34%', top: '56.4%', height: '32%', width: '20%' },
    { left: '66%', top: '45%', height: '55%', width: '34%' },
    { left: '80%', top: '68%', height: '32%', width: '20%' },
  ],
} as const;

const borderRadius = {
  1: '6rem',
  2: '0rem',
  3: '30rem',
  4: [
    '10rem 0 0 10rem',
    '20rem',
    '0 12rem',
    '0 10rem 10rem 0',
    '10rem 0 0 10rem',
    '16rem 0 0 0',
    '10rem 0 0 0',
  ],
} as const;

const wrapperStyle = {
  aspectRatio: '1.618',
  width: '90vmin',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "-webkit-filter": "blur(10px)",
  "-moz-filter": "blur(10px)",
  "-o-filter": "blur(10px)",
  "-ms-filter": "blur(10px)",
  filter: "blur(10px)",
} as const;

const BackgroundAnimation = () => {
  const theme = useTheme()
  const wrapperRef = useRef(null);
  const [configuration, setConfiguration] = useState<number>(1);
  const [roundness, setRoundness] = useState(1);

  useEffect(() => {
    const rand = (min:number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

    const uniqueRand = (min:number, max:number, prev:number) => {
      let next = prev;
      while (prev === next) next = rand(min, max);
      return next;
    };

    const combinations = [
      { configuration: 1, roundness: 1 },
      { configuration: 1, roundness: 2 },
      { configuration: 1, roundness: 4 },
      { configuration: 2, roundness: 2 },
      { configuration: 2, roundness: 3 },
      { configuration: 3, roundness: 3 }
    ];

    let prev = 0;

    const updateBackground = () => {
      const index = uniqueRand(0, combinations.length - 1, prev);
      const combination = combinations[index];
      setConfiguration(combination.configuration);
      setRoundness(combination.roundness);
      prev = index;
    };

    const intervalId = setInterval(updateBackground, 3000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);


  const shapeStyles = [
    { backgroundColor: theme.palette.primary.light, zIndex: 2, "box-shadow": `5px 5px 5px black` },
    { backgroundColor: theme.palette.primary.main, zIndex: 2, "box-shadow": `5px 5px 5px black` },
    { backgroundColor: theme.palette.secondary.main, zIndex: 1, "box-shadow": `5px 5px 5px black` },
    { backgroundColor: theme.palette.primary.main, zIndex: 2, "box-shadow": `5px 5px 5px black` },
    { backgroundColor: theme.palette.secondary.dark, zIndex: 2, "box-shadow": `5px 5px 5px black` },
    { backgroundColor: theme.palette.primary.main, zIndex: 2, "box-shadow": `5px 5px 5px black` },
    { backgroundColor: theme.palette.secondary.light, zIndex: 2,"box-shadow": `5px 5px 5px black` },
  ];

  const shapeStyle = (index: number) => {
    const baseStyle = {
      height: '30%',
      width: '30%',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      position: 'absolute',
      transition: 'left 750ms ease-in-out, top 750ms ease-in-out, height 750ms ease-in-out, width 750ms ease-in-out, border-radius 750ms ease-in-out',
    };

    //@ts-expect-error not sure why the type isnt being picked up but it works
    const positionStyle = shapePositions[configuration][index] || {};
    //@ts-expect-error not sure why the type isnt being picked up but it works
    const radiusStyle = roundness === 4 ? (borderRadius[4][index] || '') : borderRadius[roundness];

    return {
      ...baseStyle,
      ...positionStyle,
      borderRadius: radiusStyle,
      ...shapeStyles[index],
    };
  };

  return (
    <div id="wrapper" style={wrapperStyle}>

        {[...Array(7)].map((_, index) => (
          <div key={index} className="shape" style={shapeStyle(index)}></div>
        ))}
      </div>
  );
};

export default BackgroundAnimation;
