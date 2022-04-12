import { getIntroText, getLinkText } from "../pageObjects/app";

describe("App", () => {
    it("should show the correct landing page", async () => {
        expect(await getIntroText()).toBe('Use this boilerplate package to e2e test your React app.');
        expect(await getLinkText()).toBe('E2E Boilerplate for React');
    });

    // it("should show the correct link", async () => {
    // });
});
