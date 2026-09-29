# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual-spec.js >> Visual Regression: https://dealerportal.kalyanicrm.com/marketplace/events/50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6?lane=parallel
- Location: visual-spec.js:6:5

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  165 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 165 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 165 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - generic [ref=f2e2]:
    - banner [ref=f2e4]:
      - generic [ref=f2e6]:
        - generic [ref=f2e7]:
          - button "Open menu" [ref=f2e8] [cursor=pointer]
          - link [ref=f2e9]:
            - /url: /dashboard
            - img "Kalyani Motors" [ref=f2e10]
        - button [ref=f2e12] [cursor=pointer]:
          - img "Bhargav Sawant" [ref=f2e14]
      - generic [ref=f2e20]:
        - link "Live 4" [ref=f2e21]:
          - /url: /marketplace
          - generic [ref=f2e22]: Live
          - generic [ref=f2e23]: "4"
        - link "Wins 1" [ref=f2e25]:
          - /url: /awards
          - generic [ref=f2e26]: Wins
          - generic [ref=f2e27]: "1"
        - link "Deals 3" [ref=f2e29]:
          - /url: /deals
          - generic [ref=f2e30]: Deals
          - generic [ref=f2e31]: "3"
        - link "RC 1" [ref=f2e33]:
          - /url: /rc-follow-ups
          - generic [ref=f2e34]: RC
          - generic [ref=f2e35]: "1"
    - main [ref=f2e36]:
      - generic [ref=f2e37]:
        - generic [ref=f2e39]:
          - generic [ref=f2e40]:
            - generic [ref=f2e41]:
              - link "Marketplace" [ref=f2e42]:
                - /url: /marketplace
              - generic [ref=f2e45]: Live
              - generic [ref=f2e49]: Monthly Premium
            - generic [ref=f2e50]:
              - generic [ref=f2e51]:
                - heading "September End Of Season Sale" [level=1] [ref=f2e52]
                - generic [ref=f2e53]:
                  - generic [ref=f2e54]: 29 Sept 2026 • 2:45 pm
                  - generic [ref=f2e55]: RRXR
                  - generic [ref=f2e59]: 3 listed · 3 left
              - generic [ref=f2e61]:
                - paragraph [ref=f2e62]: Ends in
                - paragraph [ref=f2e63]: 04:28:45
            - button "Open Floor 3 open · 3 listed Live Active Several cars open together — pick any and bid before the window closes." [ref=f2e65] [cursor=pointer]:
              - generic [ref=f2e66]:
                - generic [ref=f2e71]:
                  - paragraph [ref=f2e72]: Open Floor
                  - paragraph [ref=f2e73]: 3 open · 3 listed
                - generic [ref=f2e74]:
                  - generic [ref=f2e75]: Live
                  - generic [ref=f2e79]: Active
              - paragraph [ref=f2e80]: Several cars open together — pick any and bid before the window closes.
          - generic [ref=f2e81]:
            - generic [ref=f2e82]:
              - heading "Open Floor cars" [level=2] [ref=f2e83]
              - paragraph [ref=f2e84]: Several cars open. Pick any and bid.
            - generic [ref=f2e86]:
              - 'link "Live #1 KA51 Add to wishlist Time left 04:28:45 6.7 2007 Maruti Suzuki Zen2007 1,17,696 km 3rd owner Petrol Manual 1 0 Min bid ₹40,000 Join live room" [ref=f2e88]':
                - /url: /marketplace/ee0d5a0a-5339-4313-adb0-9f230e5eda94?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                - generic [ref=f2e89]:
                  - generic [ref=f2e91]:
                    - generic [ref=f2e92]: Live
                    - generic [ref=f2e93]: "#1"
                  - generic [ref=f2e94]:
                    - generic [ref=f2e95]: KA51
                    - button "Add to wishlist" [ref=f2e96] [cursor=pointer]
                  - generic [ref=f2e100]:
                    - paragraph [ref=f2e101]: Time left
                    - paragraph [ref=f2e102]: 04:28:45
                  - generic [ref=f2e103]: "6.7"
                - generic [ref=f2e107]:
                  - generic [ref=f2e108]:
                    - heading "2007 Maruti Suzuki Zen2007" [level=3] [ref=f2e109]
                    - generic [ref=f2e110]:
                      - generic [ref=f2e111]: 1,17,696 km
                      - generic [ref=f2e115]: 3rd owner
                      - generic [ref=f2e119]: Petrol
                      - generic [ref=f2e123]: Manual
                  - generic [ref=f2e128]:
                    - generic [ref=f2e129]:
                      - generic [ref=f2e130]:
                        - generic [ref=f2e131]: "1"
                        - generic [ref=f2e138]: "0"
                      - generic [ref=f2e146]:
                        - paragraph [ref=f2e147]: Min bid
                        - paragraph [ref=f2e148]: ₹40,000
                    - generic [ref=f2e149]: Join live room
              - 'link "Live #2 KA09 Add to wishlist Time left 04:28:45 9.1 2024 Maruti Suzuki Alto K102024 17,912 km 1st owner Petrol Manual 1 0 Min bid ₹4,00,000 Join live room" [ref=f2e155]':
                - /url: /marketplace/e6bc0fbf-f481-4d35-9689-dcf54152fb04?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                - generic [ref=f2e156]:
                  - generic [ref=f2e158]:
                    - generic [ref=f2e159]: Live
                    - generic [ref=f2e160]: "#2"
                  - generic [ref=f2e161]:
                    - generic [ref=f2e162]: KA09
                    - button "Add to wishlist" [ref=f2e163] [cursor=pointer]
                  - generic [ref=f2e167]:
                    - paragraph [ref=f2e168]: Time left
                    - paragraph [ref=f2e169]: 04:28:45
                  - generic [ref=f2e170]: "9.1"
                - generic [ref=f2e174]:
                  - generic [ref=f2e175]:
                    - heading "2024 Maruti Suzuki Alto K102024" [level=3] [ref=f2e176]
                    - generic [ref=f2e177]:
                      - generic [ref=f2e178]: 17,912 km
                      - generic [ref=f2e182]: 1st owner
                      - generic [ref=f2e186]: Petrol
                      - generic [ref=f2e190]: Manual
                  - generic [ref=f2e195]:
                    - generic [ref=f2e196]:
                      - generic [ref=f2e197]:
                        - generic [ref=f2e198]: "1"
                        - generic [ref=f2e205]: "0"
                      - generic [ref=f2e213]:
                        - paragraph [ref=f2e214]: Min bid
                        - paragraph [ref=f2e215]: ₹4,00,000
                    - generic [ref=f2e216]: Join live room
              - 'link "Live #3 KA05 Add to wishlist Time left 04:28:45 9.1 2018 Honda Amaze2018 77,155 km 3rd owner Petrol Manual 1 0 Min bid ₹3,00,000 Join live room" [ref=f2e222]':
                - /url: /marketplace/668a1788-03bb-45fc-bffa-520aaf190fea?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                - generic [ref=f2e223]:
                  - generic [ref=f2e225]:
                    - generic [ref=f2e226]: Live
                    - generic [ref=f2e227]: "#3"
                  - generic [ref=f2e228]:
                    - generic [ref=f2e229]: KA05
                    - button "Add to wishlist" [ref=f2e230] [cursor=pointer]
                  - generic [ref=f2e234]:
                    - paragraph [ref=f2e235]: Time left
                    - paragraph [ref=f2e236]: 04:28:45
                  - generic [ref=f2e237]: "9.1"
                - generic [ref=f2e241]:
                  - generic [ref=f2e242]:
                    - heading "2018 Honda Amaze2018" [level=3] [ref=f2e243]
                    - generic [ref=f2e244]:
                      - generic [ref=f2e245]: 77,155 km
                      - generic [ref=f2e249]: 3rd owner
                      - generic [ref=f2e253]: Petrol
                      - generic [ref=f2e257]: Manual
                  - generic [ref=f2e262]:
                    - generic [ref=f2e263]:
                      - generic [ref=f2e264]:
                        - generic [ref=f2e265]: "1"
                        - generic [ref=f2e272]: "0"
                      - generic [ref=f2e280]:
                        - paragraph [ref=f2e281]: Min bid
                        - paragraph [ref=f2e282]: ₹3,00,000
                    - generic [ref=f2e283]: Join live room
        - generic [ref=f2e289]:
          - generic [ref=f2e292]:
            - generic [ref=f2e293]:
              - img "Kalyani Motors" [ref=f2e295]
              - paragraph [ref=f2e296]: True Value · Dealers Platform
              - paragraph [ref=f2e297]: Live auctions, award actions, deals, and RC follow-up — built for verified dealers and partners.
            - generic [ref=f2e298]:
              - generic [ref=f2e299]:
                - paragraph [ref=f2e300]: Navigate
                - list [ref=f2e301]:
                  - listitem [ref=f2e302]:
                    - link "Dashboard" [ref=f2e303]:
                      - /url: /dashboard
                  - listitem [ref=f2e304]:
                    - link "Marketplace" [ref=f2e305]:
                      - /url: /marketplace
                  - listitem [ref=f2e306]:
                    - link "Awards" [ref=f2e307]:
                      - /url: /awards
                  - listitem [ref=f2e308]:
                    - link "Deals" [ref=f2e309]:
                      - /url: /deals
                  - listitem [ref=f2e310]:
                    - link "Referrals" [ref=f2e311]:
                      - /url: /referrals
                  - listitem [ref=f2e312]:
                    - link "RC Follow-up" [ref=f2e313]:
                      - /url: /rc-follow-ups
                  - listitem [ref=f2e314]:
                    - link "Account Balance" [ref=f2e315]:
                      - /url: /account-balance
                  - listitem [ref=f2e316]:
                    - link "Profile" [ref=f2e317]:
                      - /url: /profile
              - generic [ref=f2e318]:
                - paragraph [ref=f2e319]: Support
                - generic [ref=f2e320]:
                  - paragraph [ref=f2e321]: UMS Auto Auction CRM
                  - link [ref=f2e322]:
                    - /url: mailto:kmcrm@kalyanimotors.com
                  - link [ref=f2e327]:
                    - /url: tel:+919590990011
          - generic [ref=f2e332]:
            - paragraph [ref=f2e333]: © 2026 UMS Auto Auction CRM. All rights reserved.
            - navigation [ref=f2e334]:
              - link "Terms" [ref=f2e335]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/terms-and-condition
              - link "Privacy" [ref=f2e336]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/privacy-policy
              - link "About" [ref=f2e337]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/about
              - generic [ref=f2e338]: Bangalore
  - region "Notifications alt+T"
  - alert [ref=f2e339]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pages } from './pages.js';
  3  | 
  4  | // Run this test loop for every page in your array
  5  | pages.forEach((url) => {
  6  |     test(`Visual Regression: ${url}`, async ({ page }) => {
  7  |         // 1. Log in via the UI before taking screenshots
  8  |         await page.goto("https://dealerportal.kalyanicrm.com/login");
  9  |         await page.fill('[id="login_id"]', process.env.PORTAL_LOGIN_ID || "bhargavtest");
  10 |         await page.fill('[id="password"]', process.env.PORTAL_PASSWORD || "bhargav@123");
  11 |         await Promise.all([
  12 |             page.waitForNavigation({ waitUntil: "networkidle" }).catch(() => { }),
  13 |             page.click('button[type="submit"], button:has-text("Sign in")')
  14 |         ]);
  15 | 
  16 |         // 2. Navigate to the target page
  17 |         await page.goto(url, { waitUntil: "networkidle" });
  18 | 
  19 |         // Hide dynamic elements that frequently change (like timestamps or live counts) to prevent false failures
  20 |         // Update this CSS selector to target elements on your portal that update constantly
  21 |         await page.addStyleTag({ content: '.timestamp, .live-count { visibility: hidden !important; }' });
  22 | 
  23 |         // Wait for images and animations to settle
  24 |         await page.waitForTimeout(2000);
  25 | 
  26 |         // 3. Capture screenshot and compare it to the baseline
  27 |         // Playwright will automatically scroll and capture the entire length of the page
> 28 |         await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixels: 100 });
     |                            ^ Error: expect(page).toHaveScreenshot(expected) failed
  29 |     });
  30 | });
```