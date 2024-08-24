export const Hamburger = ({
  marginVertical = "6px",
  height = "3px",
  width = "30px",
  backgroundColor = "black",
}) => {
  const lineStyle = {
    margin: `${marginVertical} 0`, // Use 'margin' instead of 'marginVertical' to apply top and bottom margin
    height,
    width,
  };

  const Line = () => (
    <div className={`${backgroundColor}`} style={lineStyle}></div>
  );

  return (
    <div>
      <Line />
      <Line />
      <Line />
    </div>
  );
};
