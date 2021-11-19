import { expect } from "chai";
import { describe, it } from "mocha";
import { fitRect } from "../src";

describe("fitRect", () => {
  it("should calculate contain", () => {
    expect(fitRect([16, 9], [0, 0, 160, 160], "contain")).to.deep.equal([
      0, 35, 160, 90,
    ]);
  });

  it("should calculate cover", () => {
    expect(fitRect([16, 9], [0, 0, 320, 160], "cover")).to.deep.equal([
      0, -10, 320, 180,
    ]);
  });
});
