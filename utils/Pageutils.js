const { test } = require('@playwright/test');  // Import test globally
const { expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

class PageUtils {
  constructor(page) {
    this.page = page;
  }

  async sendKeys(locator, text) {
    await test.info(`Filling text: "${text}"`);
    await locator.fill(text);
  }


  async fill(locator, text) {
    await test.info(`Filling text: "${text}"`);
    await locator.fill(text);
  }

  async click(locator, message = 'Clicking on element') {
    await test.info(`Clicking on: ${message}`);
    await locator.click();
  }

  async expectVisible(locator, message = 'Element should be visible') {
    await expect(locator, message).toBeVisible();
  }

  async hoverOnElement(locator, message = 'Hovering on element') {
    await test.step(message, async () => {
      await locator.hover();
      await expect(locator).toBeVisible(); 
    });
  }

  async getText(locator) {
    return await locator.textContent();
  }

  async waitForSelector(selector) {
    await this.page.waitForSelector(selector);
  }

  async pressKey(locator, key) {
    await locator.waitForSelector({ state: 'visible' });
    await locator.press(key);
  }

  async isElementClickable(locator) {
    const isVisible = await locator.isVisible();
    const isEnabled = await locator.isEnabled();

    if (!isVisible || !isEnabled) {
      console.log(' Element is not clickable: Either not visible or not enabled');
      return false;
    }

    try {
      await locator.click({ trial: true });
      return true;
    } catch (e) {
      console.error('Element is not clickable (trial click failed):', e.message);
      return false;
    }

  }

  async assertElementIsClickable(locator, message = 'Element should be clickable') {
    const clickable = await this.isElementClickable(locator);
    expect(clickable, message).toBe(true);
  }

  async takeScreenshot(name = 'screenshot') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `${name}-${timestamp}.png`;
    const screenshotPath = path.join('screenshots', fileName);

    fs.mkdirSync('screenshots', { recursive: true });

    await this.page.screenshot({ path: screenshotPath, fullPage: true });

    if (typeof test !== 'undefined' && test.info) {
      await test.info().attach(`Screenshot: ${name}`, {
        body: await this.page.screenshot(),
        contentType: 'image/png',
      });
    }

    console.log(`✅ Screenshot saved: ${screenshotPath}`);
  }

  async selectDropdownOption(dropdownLocator, option, type = 'value') {
    switch (type) {
      case 'label':
        await dropdownLocator.selectOption({ label: option });
        break;
      case 'value':
        await dropdownLocator.selectOption(option);
        break;
      case 'index':
        await dropdownLocator.selectOption({ index: option });
        break;
      default:
        throw new Error('Invalid option type. Use "label", "value", or "index".');
    }
  }

}

module.exports = PageUtils;
