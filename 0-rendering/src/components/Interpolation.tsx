export const Interpolation = () => {
  const name = "Sebastian";
  const x: number = 20;
  const product = { name: "Golfboll", imageUrl: "....", price: 100 };

  return (
    <>
      <h3>{name}</h3>
      <div className={x === 10 ? "ten" : "other"}>Styled div</div>
      <img src={product.imageUrl} alt={product.name} />
    </>
  );
};
