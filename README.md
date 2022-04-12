This repo provides a boilerplate if you are wanting to use Playwright to test your React application.

# Writing & Running Tests
 
```js
// e2e/specs/index.js

import { load, close, getTitle } from '../pageObjects';

describe("React App", () => {
    beforeEach(async () => {
        await load();
    });

    afterEach(async () => {
        await close();
    });

    it("should be titled 'React App'", async () => {
        expect(await getTitle()).toBe('React App');
    });
});
```

