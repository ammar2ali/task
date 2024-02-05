export const SubHeader = () => {
  const values = [
    "Stock Video",
    "Video Templates",
    "Music",
    "Sound Effects",
    "Graphic Templates",
    "Graphics",
    "Presentation Templates",
    "Photos",
    "Fonts",
    "Add-ons",
    "More",
  ];
  return (
    <>
      <div className="subheader">
        {values.map((val) => (
          <div className="subheader-item" key={val}>
            {val}
          </div>
        ))}
      </div>
    </>
  );
};
