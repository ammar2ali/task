import Image from "next/image";

export const Card = () => {
  const image = {
    url: "https://images.hipdf.com/images2022/icons/compress-pdf.svg",
    width: 10,
    height: 19,
  };
  return (
    <a href="https://www.hipdf.com/compress-pdf" class="item-cj5 p-got">
      <Image
        alt=""
        src={image?.url}
        width={image.width}
        height={image.height}
        className="card-img"
      />

      <h2 className="card-head">PDF to Word</h2>
      <div className="card-desc">
        The easiest way to reduce PDF size online.
      </div>
    </a>
  );
};
