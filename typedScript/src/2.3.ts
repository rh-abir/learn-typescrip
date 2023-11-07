{
  // generic type

  type GenericArray<T> = Array<T>;

  // const rollNumbers : number [] = [2, 3, 4];
  const rollNumbers: GenericArray<number> = [2, 3, 4];

  //   const mentors: string[] = ["Mr. x", "Mr. y", "Mr. z"];
  const mentors: GenericArray<string> = ["Mr. x", "Mr. y", "Mr. z"];

  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "rakib",
      age: 30,
    },
    {
      name: "sakib",
      age: 23,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const Mans: GenericTuple<string, string> = ["Mr. X", "Mr.y"];

  const UserWitID: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "persian", email: "a@gmail.com" },
  ];

  //
}
