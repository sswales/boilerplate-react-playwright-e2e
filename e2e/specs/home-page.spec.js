import { getIntroText, getLinkText } from '../pageObjects/app';

describe('App', () => {
  test('should show the page logo', async () => {
    expect(await getIntroText()).toBe('Use this boilerplate package to e2e test your React app.');
    expect(await getLinkText()).toBe('E2E Boilerplate for React');
  });
  test('should show the page introduction', async () => {
    expect(await getIntroText()).toBe('Use this boilerplate package to e2e test your React app.');
    expect(await getLinkText()).toBe('E2E Boilerplate for React');
  });
});
