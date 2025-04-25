# Test info

- Name: @smoke Register user
- Location: C:\Users\user\Playwright_Framework\tests\LoginTest.spec.js:3:1

# Error details

```
Error:  Signup / Login buttons displayed in Homepage

expect(locator).toBeVisible()

Locator: getByText(' Signup / Login').first()
Expected: visible
Received: <element(s) not found>
Call log:
   - Signup / Login buttons displayed in Homepage with timeout 40000ms
  - waiting for getByText(' Signup / Login').first()

    at PageUtils.expectVisible (C:\Users\user\Playwright_Framework\utils\Pageutils.js:28:36)
    at Register.registerUser (C:\Users\user\Playwright_Framework\pages\Register.js:37:25)
    at C:\Users\user\Playwright_Framework\tests\LoginTest.spec.js:5:24
```

# Page snapshot

```yaml
- status
- link "Skip navigation":
  - /url: "#main"
- combobox "Currency selector":
  - option "US Dollar" [selected]
  - option "Euro"
- list:
  - listitem:
    - link "Register":
      - /url: /register?returnUrl=%2F
  - listitem:
    - link "Log in":
      - /url: /login?returnUrl=%2F
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
- link "nopCommerce demo store":
  - /url: /
  - img "nopCommerce demo store"
- textbox "Search store"
- button "Search"
- list:
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel":
      - /url: /apparel
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- main:
  - group "1 / 2":
    - link:
      - /url: https://demo.nopcommerce.com/
  - group "2 / 2":
    - link:
      - /url: https://demo.nopcommerce.com/
  - button "Go to slide 1"
  - button "Go to slide 2"
  - heading "Welcome to our store" [level=2]
  - paragraph: Online shopping is the process consumers go through to purchase products or services over the Internet. You can edit this in the admin site.
  - paragraph:
    - text: If you have questions, see the
    - link "Documentation":
      - /url: http://docs.nopcommerce.com/
    - text: ", or post in the"
    - link "Forums":
      - /url: https://www.nopcommerce.com/boards/
    - text: at
    - link "nopCommerce.com":
      - /url: https://www.nopcommerce.com
  - heading "Electronics" [level=2]:
    - link "Electronics":
      - /url: /electronics
  - link "Picture for category Electronics":
    - /url: /electronics
    - img "Picture for category Electronics"
  - heading "Apparel" [level=2]:
    - link "Apparel":
      - /url: /apparel
  - link "Picture for category Apparel":
    - /url: /apparel
    - img "Picture for category Apparel"
  - heading "Digital downloads" [level=2]:
    - link "Digital downloads":
      - /url: /digital-downloads
  - link "Picture for category Digital downloads":
    - /url: /digital-downloads
    - img "Picture for category Digital downloads"
  - strong: Featured products
  - link "Picture of Build your own computer":
    - /url: /build-your-own-computer
    - img "Picture of Build your own computer"
  - heading "Build your own computer" [level=2]:
    - link "Build your own computer":
      - /url: /build-your-own-computer
  - text: $1,200.00
  - button "Add to cart"
  - button "Add to compare list"
  - button "Add to wishlist"
  - link "Picture of Apple MacBook Pro":
    - /url: /apple-macbook-pro
    - img "Picture of Apple MacBook Pro"
  - heading "Apple MacBook Pro" [level=2]:
    - link "Apple MacBook Pro":
      - /url: /apple-macbook-pro
  - text: $1,800.00
  - button "Add to cart"
  - button "Add to compare list"
  - button "Add to wishlist"
  - link "Picture of HTC smartphone":
    - /url: /htc-smartphone
    - img "Picture of HTC smartphone"
  - heading "HTC smartphone" [level=2]:
    - link "HTC smartphone":
      - /url: /htc-smartphone
  - text: $245.00
  - button "Add to cart"
  - button "Add to compare list"
  - button "Add to wishlist"
  - link "Picture of $25 Virtual Gift Card":
    - /url: /25-virtual-gift-card
    - img "Picture of $25 Virtual Gift Card"
  - heading "$25 Virtual Gift Card" [level=2]:
    - link "$25 Virtual Gift Card":
      - /url: /25-virtual-gift-card
  - text: $25.00
  - button "Add to cart"
  - button "Add to compare list"
  - button "Add to wishlist"
  - strong: News
  - link "New online store is open!":
    - /url: /new-online-store-is-open
  - text: "-Tuesday, February 11, 2025 The new nopCommerce store is open now! We are very excited to offer our new range of products. We will be constantly adding to our range so please register on our site."
  - link "details":
    - /url: /new-online-store-is-open
  - link "nopCommerce new release!":
    - /url: /nopcommerce-new-release
  - text: "-Tuesday, February 11, 2025 nopCommerce includes everything you need to begin your e-commerce online store. We have thought of everything and it's all included! nopCommerce is a fully customizable shopping cart"
  - link "details":
    - /url: /nopcommerce-new-release
  - link "About nopCommerce":
    - /url: /about-nopcommerce
  - text: "-Tuesday, February 11, 2025 It's stable and highly usable. From downloads to documentation, www.nopCommerce.com offers a comprehensive base of information, resources, and support to the nopCommerce community."
  - link "details":
    - /url: /about-nopcommerce
  - link "View News Archive":
    - /url: /news
  - strong: Community poll
  - strong: Do you like nopCommerce?
  - list:
    - listitem:
      - radio "Excellent"
      - text: Excellent
    - listitem:
      - radio "Good"
      - text: Good
    - listitem:
      - radio "Poor"
      - text: Poor
    - listitem:
      - radio "Very bad"
      - text: Very bad
  - button "Vote"
- strong: Information
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy notice":
      - /url: /privacy-notice
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- strong: Customer service
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- strong: My account
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /order/history
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
  - listitem:
    - link "Apply for vendor account":
      - /url: /vendor/apply
- strong: Follow us
- list:
  - listitem:
    - link "Facebook":
      - /url: https://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: https://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Instagram":
      - /url: https://www.instagram.com/nopcommerce_official
- strong: Newsletter
- textbox "Sign up for our newsletter"
- button "Subscribe"
- text: Copyright © 2025 nopCommerce demo store. All rights reserved. Powered by
- link "nopCommerce":
  - /url: https://www.nopcommerce.com/
```

# Test source

```ts
   1 | const { test } = require('@playwright/test');  // Import test globally
   2 | const { expect } = require('@playwright/test');
   3 | const fs = require('fs');
   4 | const path = require('path');
   5 |
   6 | class PageUtils {
   7 |   constructor(page) {
   8 |     this.page = page;
   9 |   }
   10 |
   11 |   async sendKeys(locator, text) {
   12 |     await test.info(`Filling text: "${text}"`);
   13 |     await locator.fill(text);
   14 |   }
   15 |
   16 |
   17 |   async fill(locator, text) {
   18 |     await test.info(`Filling text: "${text}"`);
   19 |     await locator.fill(text);
   20 |   }
   21 |
   22 |   async click(locator, message = 'Clicking on element') {
   23 |     await test.info(`Clicking on: ${message}`);
   24 |     await locator.click();
   25 |   }
   26 |
   27 |   async expectVisible(locator, message = 'Element should be visible') {
>  28 |     await expect(locator, message).toBeVisible();
      |                                    ^ Error:  Signup / Login buttons displayed in Homepage
   29 |   }
   30 |
   31 |   async hoverOnElement(locator, message = 'Hovering on element') {
   32 |     await test.step(message, async () => {
   33 |       await locator.hover();
   34 |       await expect(locator).toBeVisible(); 
   35 |     });
   36 |   }
   37 |
   38 |   async getText(locator) {
   39 |     return await locator.textContent();
   40 |   }
   41 |
   42 |   async waitForSelector(selector) {
   43 |     await this.page.waitForSelector(selector);
   44 |   }
   45 |
   46 |   async pressKey(locator, key) {
   47 |     await locator.waitForSelector({ state: 'visible' });
   48 |     await locator.press(key);
   49 |   }
   50 |
   51 |   async isElementClickable(locator) {
   52 |     const isVisible = await locator.isVisible();
   53 |     const isEnabled = await locator.isEnabled();
   54 |
   55 |     if (!isVisible || !isEnabled) {
   56 |       console.log(' Element is not clickable: Either not visible or not enabled');
   57 |       return false;
   58 |     }
   59 |
   60 |     try {
   61 |       await locator.click({ trial: true });
   62 |       return true;
   63 |     } catch (e) {
   64 |       console.error('Element is not clickable (trial click failed):', e.message);
   65 |       return false;
   66 |     }
   67 |
   68 |   }
   69 |
   70 |   async assertElementIsClickable(locator, message = 'Element should be clickable') {
   71 |     const clickable = await this.isElementClickable(locator);
   72 |     expect(clickable, message).toBe(true);
   73 |   }
   74 |
   75 |   async takeScreenshot(name = 'screenshot') {
   76 |     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
   77 |     const fileName = `${name}-${timestamp}.png`;
   78 |     const screenshotPath = path.join('screenshots', fileName);
   79 |
   80 |     fs.mkdirSync('screenshots', { recursive: true });
   81 |
   82 |     await this.page.screenshot({ path: screenshotPath, fullPage: true });
   83 |
   84 |     if (typeof test !== 'undefined' && test.info) {
   85 |       await test.info().attach(`Screenshot: ${name}`, {
   86 |         body: await this.page.screenshot(),
   87 |         contentType: 'image/png',
   88 |       });
   89 |     }
   90 |
   91 |     console.log(`✅ Screenshot saved: ${screenshotPath}`);
   92 |   }
   93 |
   94 |   async selectDropdownOption(dropdownLocator, option, type = 'value') {
   95 |     switch (type) {
   96 |       case 'label':
   97 |         await dropdownLocator.selectOption({ label: option });
   98 |         break;
   99 |       case 'value':
  100 |         await dropdownLocator.selectOption(option);
  101 |         break;
  102 |       case 'index':
  103 |         await dropdownLocator.selectOption({ index: option });
  104 |         break;
  105 |       default:
  106 |         throw new Error('Invalid option type. Use "label", "value", or "index".');
  107 |     }
  108 |   }
  109 |
  110 | }
  111 |
  112 | module.exports = PageUtils;
  113 |
```