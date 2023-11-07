{
  //   function with generics

  //     const createArray = (param: string): string[] => {
  //       return [param];
  //     };
  //     const createArrayWithGeneric = <T>(param: T): T[] => {
  //       return [param];
  //     };

  //     const res1 = createArray("Bangladesh");

  //     const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  //     type User = { id: number; name: string };

  //     const resGenericObj = createArrayWithGeneric<User>({
  //       id: 22,
  //       name: "rakib",
  //     });
  //   const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  //     return [param1, param2];
  //   };

  //   const res1 = createArrayWithTuple<string, number>("Bangladesh", 222);

  //   const resGeneric = createArrayWithTuple<string, string>("rakib", "sakib");

  //   type User = { id: number; name: string };

  //   const resGenericObj = createArrayWithTuple<string, { name: string }>("hala", {
  //     name: "koldu",
  //   });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level course";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "rakib",
    email: "s@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "sakib",
    email: "s@gmail.com",
    haseWathc: "Apple Wathc",
  });
}
