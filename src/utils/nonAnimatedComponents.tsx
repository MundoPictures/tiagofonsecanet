import React from "react";

// This file provides non-animated replacements for framer-motion components
// All animation props like initial, animate, whileInView, etc. will be ignored

// Helper type for any props that might be passed
type AnyProps = {
  [key: string]: any;
  children?: React.ReactNode;
};

// Create a non-animated div replacement for motion.div
export const StaticDiv: React.FC<AnyProps> = ({
  children,
  initial,
  animate,
  whileInView,
  transition,
  variants,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

// Create a non-animated span replacement for motion.span
export const StaticSpan: React.FC<AnyProps> = ({
  children,
  initial,
  animate,
  whileInView,
  transition,
  variants,
  ...props
}) => {
  return <span {...props}>{children}</span>;
};

// Create a non-animated button replacement for motion.button
export const StaticButton: React.FC<AnyProps> = ({
  children,
  initial,
  animate,
  whileInView,
  transition,
  variants,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

// Create a non-animated li replacement for motion.li
export const StaticLi: React.FC<AnyProps> = ({
  children,
  initial,
  animate,
  whileInView,
  transition,
  variants,
  ...props
}) => {
  return <li {...props}>{children}</li>;
};

// Create a non-animated replacement for any other element
export const createStaticElement = (
  elementType: keyof React.JSX.IntrinsicElements
): React.FC<AnyProps> => {
  return ({
    children,
    initial,
    animate,
    whileInView,
    transition,
    variants,
    ...props
  }) => {
    return React.createElement(elementType, props, children);
  };
};

// Mock object to replace the framer-motion import
export const motion = {
  div: StaticDiv,
  span: StaticSpan,
  button: StaticButton,
  li: StaticLi,
  // Add more as needed
  p: createStaticElement("p"),
  section: createStaticElement("section"),
  article: createStaticElement("article"),
  img: createStaticElement("img"),
  a: createStaticElement("a"),
  h1: createStaticElement("h1"),
  h2: createStaticElement("h2"),
  h3: createStaticElement("h3"),
  h4: createStaticElement("h4"),
  h5: createStaticElement("h5"),
  h6: createStaticElement("h6"),
  ul: createStaticElement("ul"),
  ol: createStaticElement("ol"),
  svg: createStaticElement("svg"),
  path: createStaticElement("path"),
  circle: createStaticElement("circle"),
  rect: createStaticElement("rect"),
  polygon: createStaticElement("polygon"),
  g: createStaticElement("g"),
  use: createStaticElement("use"),
  defs: createStaticElement("defs"),
  header: createStaticElement("header"),
  footer: createStaticElement("footer"),
  main: createStaticElement("main"),
  nav: createStaticElement("nav"),
  form: createStaticElement("form"),
  input: createStaticElement("input"),
  label: createStaticElement("label"),
};
