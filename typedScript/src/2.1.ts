{
  //
  //   type assertion

  let anyting: any;

  anyting = "Rakib";

  anyting = 222;

  anyting as number;

  const kgToGm = (value: string | number): string | number | undefined => {
    {
      if (typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        return `the convered value is :  ${convertedValue}`;
      }

      if (typeof value === "number") {
        return value * 1000;
      }
    }
  };

  const result1 = kgToGm(1000) as number;

  const result2 = kgToGm("200") as number;
  console.log(result2);

  type CustomeError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomeError).message);
  }

  //
}
