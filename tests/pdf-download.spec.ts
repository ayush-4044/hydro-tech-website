import { test, expect } from '@playwright/test'
import fs from 'fs'

test.describe('HYDRO TECH OEM Catalog PDF', () => {
  test('user should be able to download OEM catalog PDF', async ({
    page,
  }) => {
    // 1. Open homepage
    await page.goto('/')

    // 2. Find Download OEM Catalog button
    const downloadButton = page.getByRole('link', {
      name: /Download OEM Catalog/i,
    })

    // 3. Verify button is visible
    await expect(downloadButton).toBeVisible()

    // 4. Start download
    const downloadPromise = page.waitForEvent('download')

    await downloadButton.click()

    const download = await downloadPromise

    // 5. Verify downloaded file name
    const fileName = download.suggestedFilename()

    expect(fileName).toBe('HYDRO_TECH_OEM_Catalogue.pdf')

    // 6. Verify download path exists
    const downloadPath = await download.path()

    expect(downloadPath).not.toBeNull()

    if (downloadPath) {
      expect(fs.existsSync(downloadPath)).toBe(true)
    }

    console.log('Downloaded file:', fileName)
  })
})