import { load, close } from '../pageObjects';

beforeEach(async () => {
  await load();
});

afterEach(async () => {
  await close();
});
