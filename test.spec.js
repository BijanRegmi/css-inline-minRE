const { inline } = require("@css-inline/css-inline");

describe("css-inline", () => {
    jest.setTimeout(30000);

    afterAll(async () => {
        await new Promise((resolve) => setTimeout(() => resolve(), 10000)); // avoid jest open handle error
    });

    it("nop", () => {
        const document = `<html><head></head><body></body></html>`;
        const expected = `<html><head></head><body></body></html>`;

        expect(inline(document)).toEqual(expected);
    });
});
