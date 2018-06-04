import { sayHello } from "../src/lib/greetings";
const greeting = "Hello";
let timeNow;
const realDate = Date;

describe("sayHello when time is morning", () => {
  beforeAll(() => {
    timeNow = new Date();
    timeNow.getHours = jest.fn(() => 8);
    const _GLOBAL = global;
    _GLOBAL.Date = class {
      static now() {
        return timeNow;
      }

      constructor() {
        return timeNow;
      }

      valueOf() {
        return timeNow;
      }
    };
  });

  afterAll(() => {
    global.Date = realDate;
  });

  test("sayHello should prepend Good morning! to the message when hour is in morning", () => {
    expect(sayHello(greeting)).toBe(`Good morning! ${greeting}`);
  });
});

describe("sayHello when time is afternoon", () => {
  beforeAll(() => {
    timeNow = new Date();
    timeNow.getHours = jest.fn(() => 12);
    const _GLOBAL = global;
    _GLOBAL.Date = class {
      static now() {
        return timeNow;
      }

      constructor() {
        return timeNow;
      }

      valueOf() {
        return timeNow;
      }
    };
  });

  afterAll(() => {
    global.Date = realDate;
  });
  test("sayHello should prepend Good afternoon! to the message when hour is >= 12", () => {
    expect(sayHello(greeting)).toBe(`Good afternoon! ${greeting}`);
  });

  test("sayHello should prepend Good afternoon! to the message when hour is <= 17", () => {
    expect(sayHello(greeting)).toBe(`Good afternoon! ${greeting}`);
  });
});

describe("sayHello when time is evening", () => {
  beforeAll(() => {
    timeNow = new Date();
    timeNow.getHours = jest.fn(() => 18);
    const _GLOBAL = global;
    _GLOBAL.Date = class {
      static now() {
        return timeNow;
      }

      constructor() {
        return timeNow;
      }

      valueOf() {
        return timeNow;
      }
    };
  });

  afterAll(() => {
    global.Date = realDate;
  });
  test("sayHello should prepend Good evening! to the message when hour is in evening", () => {
    expect(sayHello(greeting)).toBe(`Good evening! ${greeting}`);
  });
});
