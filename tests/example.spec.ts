import { test } from '@playwright/test';
import { openQATestLabHome, openQATestLabAbout, expectQATestLabHome, expectQATestLabAbout } from './common';

test.describe('QATestLab blog', () => {
  test('open home page', async ({ page }) => {
    await openQATestLabHome(page);
    await expectQATestLabHome(page);
  });

  test('click About QATestLab', async ({ page }) => {
    await openQATestLabAbout(page);
    await expectQATestLabAbout(page);
  });
});

