import { test, expect } from '@playwright/test'

test('HYDRO TECH homepage should load', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveURL(/localhost:3000/)

  await expect(page.locator('body')).toBeVisible()
})