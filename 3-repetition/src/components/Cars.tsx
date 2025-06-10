// <Cars></Cars>

export const Cars = () => {
  // Interpolation {} - Inuti {} skrivs javascript
  const x = 10;
  const car = { brand: "Volvo", model: "V90", color: "Black" };
  const loading = true;

  const handleClick = () => {};

  // Villkordstyrd rendering
  //   if (car.brand === "Volvo") {
  //     return (
  //       <>
  //         <section>Something else {car.model}</section>
  //       </>
  //     );
  //   }

  // Listor
  // Görs med hjälp av map -> html för varje värde i listan
  const cars = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <>
      {loading && <>Loading...</>}

      {car.brand === "Volvo" ? (
        <section>Something else {car.model}</section>
      ) : (
        <div
          className={x === 10 ? "alright" : "not-so-much"}
          onClick={handleClick}
        >
          Cars - {car.brand} - {car.model} - {car.color}
        </div>
      )}

      <section>
        {cars.map((c) => (
          <div key={c.id}>{}</div>
        ))}
      </section>
    </>
  );
};
