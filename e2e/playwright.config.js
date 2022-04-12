import { chromium, firefox, webkit, devices } from 'playwright';

const iPad = devices['iPad Pro 11 landscape'];

module.exports = {
  browserType: chromium,
  launchConfig: {
    headless: false,
    slowMo: 300,
  },
  contextConfig: {
    viewport: iPad.viewport,
    userAgent: iPad.userAgent,
  },
};
