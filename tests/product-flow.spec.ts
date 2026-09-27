import { test, expect } from '@playwright/test'

test.describe('HYDRO TECH Product Flow', () => {
  test('user should be able to open product and request a quote', async ({
    page,
  }) => {
    // 1. Open homepage
    await page.goto('/')

    // 2. Go to Products section
    await page.locator('#products').scrollIntoViewIfNeeded()

    // 3. Check product section is visible
    await expect(
      page.getByText('Engineered families for every machine')
    ).toBeVisible()

    // 4. Click first View Details button
    const viewDetailsButton = page
      .getByRole('link', { name: /View Details/i })
      .first()

    await expect(viewDetailsButton).toBeVisible()

    await viewDetailsButton.click()

    // 5. Verify product detail page
    await expect(page).toHaveURL(/\/products\//)

    // 6. Verify Request a Quote button
    const requestQuoteButton = page
      .getByRole('link', { name: /Request a Quote/i })
      .first()

    await expect(requestQuoteButton).toBeVisible()

    // 7. Click Request a Quote
    await requestQuoteButton.click()

    // 8. Verify contact section
    await expect(page).toHaveURL(/#contact/)

    // 9. Verify selected product
    const selectedProduct = page.locator('#selected-product')

    await expect(selectedProduct).toBeVisible()
    await expect(selectedProduct).not.toHaveValue('')

    // 10. Verify category is automatically selected
    const category = page.locator('#interest')

    await expect(category).toBeVisible()
    await expect(category).not.toHaveValue('')

    console.log(
      'Selected Product:',
      await selectedProduct.inputValue()
    )

    console.log(
      'Selected Category:',
      await category.inputValue()
    )
  })
})