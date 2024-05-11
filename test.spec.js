const { inline } = require("@css-inline/css-inline");

describe("css-inline", () => {
    it("nop", () => {
        const document = `<html><head></head><body></body></html>`;
        const expected = `<html><head></head><body></body></html>`;

        expect(inline(document)).toEqual(expected);
    });
});
