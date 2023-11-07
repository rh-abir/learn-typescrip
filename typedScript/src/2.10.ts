{
  //mapped types

  const arrayOfNumber: number[] = [1, 2, 4, 6];

  // const arrayOfString : string[] = ['1', '3', '5'];

  const arrayOfString: string[] = arrayOfNumber.map((num) => num.toString());
  console.log(arrayOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };
  // look up type
  type Height = AreaNumber["width"];

  // type AreaString = {
  //   [key in "height" | "witth"]: string;
  // };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ hieght: string; width: number }> = {
    hieght: "100",
    width: 40,
  };

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  //
}
