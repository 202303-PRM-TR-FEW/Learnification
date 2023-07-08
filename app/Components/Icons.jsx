import React from "react";

// Category Icons Start

const SalesIcon = ({ width = 28, height = 28, ...props }) => (
  <svg
    style={{
      width: width,
      height: height,
      overflow: "visible",
      opacity: 1,
      zIndex: 1,
    }}
    viewBox="0 0 512 512"
    className="category-icon"
    {...props}
  >
    <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
  </svg>
);

const HRIcon = ({ width = 28, height = 28, ...props }) => (
  <svg
    style={{
      width: width,
      height: height,
      overflow: "visible",
      opacity: 1,
      zIndex: 1,
    }}
    viewBox="0 0 640 512"
    className="category-icon"
    {...props}
  >
    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
  </svg>
);

const DrawingIcon = ({ width = 28, height = 28, ...props }) => (
  <svg
    style={{
      width: width,
      height: height,
      overflow: "visible",
      opacity: 1,
      zIndex: 1,
    }}
    viewBox="0 0 24 24"
    className="category-icon"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z" />
  </svg>
);

const BigDataIcon = ({ width = 28, height = 28, ...props }) => (
  <svg
    style={{
      width: width,
      height: height,
      overflow: "visible",
      opacity: 1,
      zIndex: 1,
    }}
    className="category-icon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z" />
  </svg>
);
const DesignIcon = ({ width = 28, height = 28, ...props }) => (
  <svg
    style={{
      width: width,
      height: height,
      overflow: "visible",
      opacity: 1,
      zIndex: 1,
    }}
    className="category-icon"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m16.24 11.51 1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm7.88 7.89-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9zm3.65-11.92a.996.996 0 0 0 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
  </svg>
);
const MarketingIcon = ({ width = 28, height = 28, ...props }) => (
  <svg
    style={{
      width: width,
      height: height,
      overflow: "visible",
      opacity: 1,
      zIndex: 1,
    }}
    className="category-icon"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
  </svg>
);
const AstronomyIcon = ({ width = 28, height = 28, ...props }) => (
  <svg
    style={{
      width: width,
      height: height,
      overflow: "visible",
      opacity: 1,
      zIndex: 1,
    }}
    viewBox="0 0 24 24"
    className="category-icon"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
  </svg>
);
// Category Icons End

const StarIcon = ({ width = 24, height = 24, empty = false, ...props }) => {
  const fill = empty ? "rgb(177, 177, 177)" : "rgb(46, 141, 255)";
  return (
    <svg
      style={{
        width: width,
        height: height,
        overflow: "visible",
        opacity: 1,
        zIndex: 1,
        fill: fill,
      }}
      viewBox="0 0 576 512"
      {...props}
    >
      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
    </svg>
  );
};
const SaveIcon = ({ width = 14, height = 14, ...props }) => (
  <svg
    style={{
      width: width,
      height: height,
      overflow: "visible",
      opacity: "unset",
      zIndex: 1,
      fill: "rgb(245, 245, 245)",
      cursor: "pointer",
    }}
    viewBox="0 0 384 512"
    {...props}
  >
    <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
  </svg>
);
const ClockIcon = ({ width = 16, height = 16, ...props }) => (
  <svg
    style={{
      width: width,
      height: height,
      overflow: "visible",
      opacity: 1,
      zIndex: 1,
      fill: "rgb(177, 177, 177)",
    }}
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z" />
  </svg>
);

const BrandIcon = ({ width = 28, height = 28, ...props }) => (
  <svg
    style={{
      width: width,
      height: height,
      overflow: "visible",
      opacity: "unset",
      zIndex: 1,
      fill: "rgb(251, 251, 251)",
    }}
    viewBox="0 0 576 512"
    {...props}
  >
    <path d="M575.81 217.98C572.64 157.41 518.28 112 457.63 112h-9.37c-52.82 0-104.25-16.25-147.74-46.24-41.99-28.96-96.04-41.62-153.21-28.7C129.3 41.12-.08 78.24 0 224c.04 70.95 38.68 132.8 95.99 166.01V464c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-54.26c15.36 3.96 31.4 6.26 48 6.26 5.44 0 10.68-.73 16-1.18V464c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-59.43c14.24-5.06 27.88-11.39 40.34-19.51C342.07 355.25 393.86 336 448.46 336c25.48 0 16.01-.31 23.05-.78l74.41 136.44c2.86 5.23 8.3 8.34 14.05 8.34 1.31 0 2.64-.16 3.95-.5 7.09-1.8 12.05-8.19 12.05-15.5 0 0 .14-240.24-.16-246.02zM463.97 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm80 153.25l-39.86-73.08c15.12-5.83 28.73-14.6 39.86-25.98v99.06z" />
  </svg>
);

const Icons = {
  SalesIcon,
  HRIcon,
  DrawingIcon,
  BigDataIcon,
  DesignIcon,
  MarketingIcon,
  AstronomyIcon,
  StarIcon,
  SaveIcon,
  ClockIcon,
  BrandIcon,
};

export default Icons;
