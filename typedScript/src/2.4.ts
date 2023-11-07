{
  // interface - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type AppleWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<AppleWatch> = {
    name: "Rakib",
    computer: {
      brand: "Hp",
      model: "X-23UR",
      releaseYear: 2019,
    },

    smartWatch: {
      brand: "Apple",
      model: "sw-8",
      display: "amulate",
    },
  };

  interface SamsumgWatch {
    brand: string;
    model: string;
    hearTreack: boolean;
    sleepTreak: boolean;
  }

  interface Bike {
    cc: number;
    modle: string;
  }

  const richDeveloper: Developer<SamsumgWatch, Bike> = {
    name: "Rich Dev",
    computer: {
      brand: "apple",
      model: "X-23UR",
      releaseYear: 2019,
    },

    smartWatch: {
      brand: "samsumg",
      model: "sm-8",
      hearTreack: true,
      sleepTreak: true,
    },

    bike: {
      modle: "Yamaha",
      cc: 100,
    },
  };

  //
}
