import { load, close } from '../pageObjects';

// Before Each Test
beforeEach(async () => {
  await load();
});

// After Each Test
afterEach(async () => {
  await close();
});

// One-Time Setup
beforeAll(() => {
  // Start Env
});

// One-Time Teardown
afterAll(() => {
  // Stop Env
});