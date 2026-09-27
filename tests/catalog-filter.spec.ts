import { test, expect } from '@playwright/test'

test.describe('HYDRO TECH Catalog Search and Filter', () => {
  test('user should be able to search for a product', async ({ page }) => {
    // Open homepage
    await page.goto('/')

    // Go to catalog section
    await page.locator('#catalog').scrollIntoViewIfNeeded()

    // Find search input
    const searchInput = page.getByPlaceholder(/search/i).first()

    await expect(searchInput).toBeVisible()

    // Search product
    await searchInput.fill('Quick Release Coupling')

    // Verify search result
    await expect(
      page.getByText(/Quick Release Coupling/i).first()
    ).toBeVisible()
  })

  test('user should be able to filter products by category', async ({
    page,
  }) => {
    // Open homepage
    await page.goto('/')

    // Go to catalog section
    await page.locator('#catalog').scrollIntoViewIfNeeded()

    // Find category dropdown
    const categorySelect = page.locator('select').filter({
      has: page.locator('option[value="Standard QRC"]'),
    }).first()

    // Verify dropdown is visible
    await expect(categorySelect).toBeVisible()

    // Select Standard QRC
    await categorySelect.selectOption('Standard QRC')

    // Verify selected category
    await expect(categorySelect).toHaveValue('Standard QRC')

    // Verify products are available after filtering
    const productCards = page.getByRole('link', {
      name: /View Details/i,
    })

    await expect(productCards.first()).toBeVisible()

    // Verify product count text is visible
    await expect(
      page.getByText(/products found/i)
    ).toBeVisible()
  })
})