import { expect, Page } from '@playwright/test';

export async function openQATestLabHome(page: Page) {
  await page.goto('/');
}

export async function openQATestLabAbout(page: Page) {
  await openQATestLabHome(page);
  await page.getByRole('link', { name: 'About QATestLab' }).click();
}

export async function expectQATestLabHome(page: Page) {
  await expect(page).toHaveURL('https://blog.qatestlab.com/');
}

export async function expectQATestLabAbout(page: Page) {
  await expect(page).toHaveURL('https://blog.qatestlab.com/about/');
}
