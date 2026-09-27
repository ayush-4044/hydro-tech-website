import { test, expect } from '@playwright/test'

test.describe('HYDRO TECH Refresh Flow', () => {
  test('product and category should clear after refresh', async ({
    page,
  }) => {
    // 1. Open homepage
    await page.goto('/')

    // 2. Go to product section
    await page.locator('#catalog').scrollIntoViewIfNeeded()

    // 3. Open first product
    await page
      .getByRole('link', { name: /View Details/i })
      .first()
      .click()

    // 4. Click Request a Quote
    await page
      .getByRole('link', { name: /Request a Quote/i })
      .first()
      .click()

    // 5. Check product is selected
    const selectedProduct = page.locator('#selected-product')

    await expect(selectedProduct).toBeVisible()
    await expect(selectedProduct).not.toHaveValue('')

    // 6. Check category is selected
    const category = page.locator('#interest')

    await expect(category).toBeVisible()
    await expect(category).not.toHaveValue('')

    // 7. Save current values for verification
    const productBeforeRefresh =
      await selectedProduct.inputValue()

    const categoryBeforeRefresh =
      await category.inputValue()

    console.log(
      'Product before refresh:',
      productBeforeRefresh
    )

    console.log(
      'Category before refresh:',
      categoryBeforeRefresh
    )

    // 8. Refresh page
    await page.reload()

    // 9. Product should be removed after refresh
    await expect(selectedProduct).not.toBeVisible()

    // 10. Category should return to default empty value
    await expect(category).toHaveValue('')

    console.log('Product removed after refresh')
    console.log('Category cleared after refresh')
  })
})