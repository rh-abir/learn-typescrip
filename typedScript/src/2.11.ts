{
  //utility types

  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //Omit
  type contactInfo = Omit<Person, "name" | "age">;

  // Reqluired
  type PersonRequired = Required<Person>;

  //   Partial

  type PersonPartial = Partial<Person>;

  // Redonly

  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr. Xy",
    age: 20,
    contactNo: "202",
  };

  //   person1.name = "mdlks";

  //   Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  EmptyObj.isUser = "";

  const obj1: MyObj = {
    a: "aaa",
    b: "bbb",
    c: "ccc",
    d: "ddd",
  };

  //
}
