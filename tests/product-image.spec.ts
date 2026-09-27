import { test, expect } from '@playwright/test'

test.describe('HYDRO TECH Product Image Viewer', () => {
  test('user should be able to open and close product image viewer', async ({
    page,
  }) => {
    // Open homepage
    await page.goto('/')

    // Go to catalog
    await page.locator('#catalog').scrollIntoViewIfNeeded()

    // Open first product
    await page
      .getByRole('link', { name: /View Details/i })
      .first()
      .click()

    // Verify product detail page
    await expect(page).toHaveURL(/\/products\//)

    // Find View Image button
    const viewImageButton = page.getByRole('button', {
      name: 'View Image',
    })

    await expect(viewImageButton).toBeVisible()

    // Open image viewer
    await viewImageButton.click()

    // Find close button
    const closeButton = page.getByRole('button', {
      name: 'Close',
    })

    // Verify close button is visible
    await expect(closeButton).toBeVisible()

    // Verify fullscreen image
    const fullscreenImage = page.locator('div.fixed img')

    await expect(fullscreenImage).toBeVisible()

    // Close image viewer
    await closeButton.click()

    // Verify fullscreen image is closed
    await expect(fullscreenImage).not.toBeVisible()
  })
})