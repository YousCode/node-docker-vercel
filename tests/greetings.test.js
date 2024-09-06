const { greet, bye } = require("../src/service/greetings");

describe("Testing Greetings", () => {
  it("Should return a welcome message with the name", () => {
    expect(greet("Tester")).toBe("Hello, Tester!");
  });

  it("Should return a goodbye message with the name", () => {
    expect(bye("Tester")).toBe("Goodbye, Tester!");
  });

  it("Should return a welcome message with the name", () => {
    expect(greet(null)).toBe("Hello, null!");
  });
});
