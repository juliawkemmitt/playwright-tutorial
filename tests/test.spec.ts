import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.google.co.nz/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Google/);
  });

  test('has title playwright when searched', async ({ page }) => {
    await page.goto('https://www.google.co.nz/');
    
     // finds search bar that has the name q and searchs
    await page.fill('textarea[name=q]', 'playwright');
    await page.press('textarea[name=q]', 'Enter');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/playwright/);
  });

  test('has title image', async ({ page }) => {
    await page.goto('https://www.google.co.nz/');
    
      // Click the get started link.
    await page.getByRole('link', { name: 'Image' }).click();

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Image/);
  });



 