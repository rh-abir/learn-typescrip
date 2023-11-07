{
  // constrints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level course";

    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 33,
    name: "Mr. z",
    email: "z@gmial.com",

    saka: "sakalaka",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "rakib",
    email: "s@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 333,
    name: "sakib",
    email: "s@gmail.com",
    haseWathc: "Apple Wathc",
  });

  //
}
