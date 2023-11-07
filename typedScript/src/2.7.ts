{
  // generic Constraint using key of

  type Velhicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Velhicle;

  const getProperyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. Rakib",
    age: 26,
    address: "Bsl",
  };

  const car = {
    name: "Toyota 100",
    year: 200,
  };

  const result1 = getProperyValue(car, "year");

  //    user[];

  //
}
