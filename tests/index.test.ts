import { myFunc } from "../src";

expect.extend({
  toMatchExpectedTwoItemsArray(
    received: any,
    firstItem: any,
    secondItem: any
  ): jest.CustomMatcherResult {
    if (!Array.isArray(received)) {
      return {
        pass: false,
        message: () => `Expected array, received ${received}`,
      };
    }

    const receivedArray: Array<number> = received as Array<number>;

    const pass =
      receivedArray.length === 2 &&
      receivedArray[0] === firstItem &&
      receivedArray[1] === secondItem;

    return {
      pass,
      message: () =>
        // prettier-ignore
        `Expected: ${this.utils.printExpected([firstItem, secondItem])}\nReceived: ${this.utils.printReceived(received)}\n\n${this.utils.diff([firstItem, secondItem], received)}`,
    };
  },
});

describe("index tests", () => {
  it("should return an array of 2 items", () => {
    expect(myFunc()).toHaveLength(2);

    expect(myFunc()).toMatchExpectedTwoItemsArray(1, 2);
  });
});
