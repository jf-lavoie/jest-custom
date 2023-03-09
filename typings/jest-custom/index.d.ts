export {};

type OwnMatcher = (
  this: jest.MatcherContext,

  received: any,

  ...expected: any[]
) => jest.CustomMatcherResult;

declare global {
  namespace jest {
    // eslint-disable-next-line
    interface Matchers<R, T = {}> {
      // Note that we are defining a public call signature

      // for our matcher here(how it will be used):

      // expect(output).toMatchParseOutput(expected)

      toMatchExpectedTwoItemsArray(firstItem: any, secondItem: any): R;
    }

    // interface InverseAsymmetricMatchers {
    //   toMatchExpectedTwoItemsArray(firstItem: any, secondItem: any): any;
    // }

    // interface ExpectExtendMap {
    //   // Here, we're describing the call signature of our

    //   // matcher for the "expect.extend()" call.

    //   toMatchExpectedTwoItemsArray: OwnMatcher;
    // }
  }
}
