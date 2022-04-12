import { getIntroText, getLinkText } from "../pageObjects/app";
import { load, close } from "../pageObjects/index";

describe("App", () => {
    beforeEach(async () => {
        await load();
    });

    afterEach(async () => {
        await close();
    });

    it("should show the correct landing page", async () => {
        expect(await getIntroText()).toBe('Use this boilerplate package to e2e test your React app.');
        expect(await getLinkText()).toBe('E2E Boilerplate for React');
    });

    // it("should show the correct link", async () => {
    // });
});
