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
  - 168 pixels (ratio 0.01 of all image pixels) are different.
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
        - link [ref=f2e8] [cursor=pointer]:
          - /url: /dashboard
          - img "Kalyani Motors" [ref=f2e9]
        - navigation [ref=f2e10]:
          - link "Home" [ref=f2e11] [cursor=pointer]:
            - /url: /dashboard
          - link "Auctions" [ref=f2e12] [cursor=pointer]:
            - /url: /marketplace
          - link "Wishlist" [ref=f2e14] [cursor=pointer]:
            - /url: /wishlist
          - link "Awards" [ref=f2e15] [cursor=pointer]:
            - /url: /awards
          - link "Deals" [ref=f2e16] [cursor=pointer]:
            - /url: /deals
          - link "RC Follow-up" [ref=f2e17] [cursor=pointer]:
            - /url: /rc-follow-ups
          - link "Account" [ref=f2e18] [cursor=pointer]:
            - /url: /account-balance
        - generic [ref=f2e19]:
          - link "₹494 Available ₹2 On hold" [ref=f2e20] [cursor=pointer]:
            - /url: /account-balance
            - generic [ref=f2e21]:
              - generic [ref=f2e22]: ₹494
              - generic [ref=f2e29]: Available
            - generic [ref=f2e30]:
              - generic [ref=f2e31]: ₹2
              - generic [ref=f2e35]: On hold
          - button [ref=f2e36] [cursor=pointer]:
            - generic [ref=f2e37]:
              - paragraph [ref=f2e38]: Bhargav Sawant
              - paragraph [ref=f2e39]: Bhargav
            - img "Bhargav Sawant" [ref=f2e41]
      - generic [ref=f2e51]:
        - 'link "Active Auctions: 4" [ref=f2e52] [cursor=pointer]':
          - /url: /marketplace
          - generic [ref=f2e53]: "Active Auctions:"
          - generic [ref=f2e54]: "4"
        - 'link "Wins to confirm: 1" [ref=f2e56] [cursor=pointer]':
          - /url: /awards
          - generic [ref=f2e57]: "Wins to confirm:"
          - generic [ref=f2e58]: "1"
        - 'link "Closed deals: 3" [ref=f2e60] [cursor=pointer]':
          - /url: /deals
          - generic [ref=f2e61]: "Closed deals:"
          - generic [ref=f2e62]: "3"
        - 'link "RC Follow ups: 1" [ref=f2e64] [cursor=pointer]':
          - /url: /rc-follow-ups
          - generic [ref=f2e65]: "RC Follow ups:"
          - generic [ref=f2e66]: "1"
    - main [ref=f2e67]:
      - generic [ref=f2e68]:
        - generic [ref=f2e70]:
          - generic [ref=f2e71]:
            - generic [ref=f2e72]:
              - link "Marketplace" [ref=f2e73] [cursor=pointer]:
                - /url: /marketplace
              - generic [ref=f2e77]: Live
              - generic [ref=f2e81]: Monthly Premium
            - generic [ref=f2e82]:
              - generic [ref=f2e83]:
                - heading "September End Of Season Sale" [level=1] [ref=f2e84]
                - generic [ref=f2e85]:
                  - generic [ref=f2e86]: 29 Sept 2026 • 2:45 pm
                  - generic [ref=f2e87]: RRXR
                  - generic [ref=f2e91]: 3 listed · 3 left
              - generic [ref=f2e93]:
                - paragraph [ref=f2e94]: Ends in
                - paragraph [ref=f2e95]: 04:30:15
            - button "Open Floor 3 open · 3 listed Live Active Several cars open together — pick any and bid before the window closes." [ref=f2e97] [cursor=pointer]:
              - generic [ref=f2e98]:
                - generic [ref=f2e105]:
                  - paragraph [ref=f2e106]: Open Floor
                  - paragraph [ref=f2e107]: 3 open · 3 listed
                - generic [ref=f2e108]:
                  - generic [ref=f2e109]: Live
                  - generic [ref=f2e113]: Active
              - paragraph [ref=f2e114]: Several cars open together — pick any and bid before the window closes.
          - generic [ref=f2e115]:
            - generic [ref=f2e116]:
              - heading "Open Floor cars" [level=2] [ref=f2e117]
              - paragraph [ref=f2e118]: Several cars open. Pick any and bid.
            - generic [ref=f2e120]:
              - 'link "Live #1 KA51 Add to wishlist Time left 04:30:15 6.7 2007 Maruti Suzuki Zen2007 1,17,696 km 3rd owner Petrol Manual 1 0 Min bid ₹40,000 Join live room" [ref=f2e122] [cursor=pointer]':
                - /url: /marketplace/ee0d5a0a-5339-4313-adb0-9f230e5eda94?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                - generic [ref=f2e123]:
                  - generic [ref=f2e125]:
                    - generic [ref=f2e126]: Live
                    - generic [ref=f2e127]: "#1"
                  - generic [ref=f2e128]:
                    - generic [ref=f2e129]: KA51
                    - button "Add to wishlist" [ref=f2e130]
                  - generic [ref=f2e134]:
                    - paragraph [ref=f2e135]: Time left
                    - paragraph [ref=f2e136]: 04:30:15
                  - generic [ref=f2e137]: "6.7"
                - generic [ref=f2e141]:
                  - generic [ref=f2e142]:
                    - heading "2007 Maruti Suzuki Zen2007" [level=3] [ref=f2e143]
                    - generic [ref=f2e144]:
                      - generic [ref=f2e145]: 1,17,696 km
                      - generic [ref=f2e149]: 3rd owner
                      - generic [ref=f2e153]: Petrol
                      - generic [ref=f2e159]: Manual
                  - generic [ref=f2e165]:
                    - generic [ref=f2e166]:
                      - generic [ref=f2e167]:
                        - generic [ref=f2e168]: "1"
                        - generic [ref=f2e175]: "0"
                      - generic [ref=f2e183]:
                        - paragraph [ref=f2e184]: Min bid
                        - paragraph [ref=f2e185]: ₹40,000
                    - generic [ref=f2e186]: Join live room
              - 'link "Live #2 KA09 Add to wishlist Time left 04:30:15 9.1 2024 Maruti Suzuki Alto K102024 17,912 km 1st owner Petrol Manual 1 0 Min bid ₹4,00,000 Join live room" [ref=f2e192] [cursor=pointer]':
                - /url: /marketplace/e6bc0fbf-f481-4d35-9689-dcf54152fb04?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                - generic [ref=f2e193]:
                  - generic [ref=f2e195]:
                    - generic [ref=f2e196]: Live
                    - generic [ref=f2e197]: "#2"
                  - generic [ref=f2e198]:
                    - generic [ref=f2e199]: KA09
                    - button "Add to wishlist" [ref=f2e200]
                  - generic [ref=f2e204]:
                    - paragraph [ref=f2e205]: Time left
                    - paragraph [ref=f2e206]: 04:30:15
                  - generic [ref=f2e207]: "9.1"
                - generic [ref=f2e211]:
                  - generic [ref=f2e212]:
                    - heading "2024 Maruti Suzuki Alto K102024" [level=3] [ref=f2e213]
                    - generic [ref=f2e214]:
                      - generic [ref=f2e215]: 17,912 km
                      - generic [ref=f2e219]: 1st owner
                      - generic [ref=f2e223]: Petrol
                      - generic [ref=f2e229]: Manual
                  - generic [ref=f2e235]:
                    - generic [ref=f2e236]:
                      - generic [ref=f2e237]:
                        - generic [ref=f2e238]: "1"
                        - generic [ref=f2e245]: "0"
                      - generic [ref=f2e253]:
                        - paragraph [ref=f2e254]: Min bid
                        - paragraph [ref=f2e255]: ₹4,00,000
                    - generic [ref=f2e256]: Join live room
              - 'link "Live #3 KA05 Add to wishlist Time left 04:30:15 9.1 2018 Honda Amaze2018 77,155 km 3rd owner Petrol Manual 1 0 Min bid ₹3,00,000 Join live room" [ref=f2e262] [cursor=pointer]':
                - /url: /marketplace/668a1788-03bb-45fc-bffa-520aaf190fea?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                - generic [ref=f2e263]:
                  - generic [ref=f2e265]:
                    - generic [ref=f2e266]: Live
                    - generic [ref=f2e267]: "#3"
                  - generic [ref=f2e268]:
                    - generic [ref=f2e269]: KA05
                    - button "Add to wishlist" [ref=f2e270]
                  - generic [ref=f2e274]:
                    - paragraph [ref=f2e275]: Time left
                    - paragraph [ref=f2e276]: 04:30:15
                  - generic [ref=f2e277]: "9.1"
                - generic [ref=f2e281]:
                  - generic [ref=f2e282]:
                    - heading "2018 Honda Amaze2018" [level=3] [ref=f2e283]
                    - generic [ref=f2e284]:
                      - generic [ref=f2e285]: 77,155 km
                      - generic [ref=f2e289]: 3rd owner
                      - generic [ref=f2e293]: Petrol
                      - generic [ref=f2e299]: Manual
                  - generic [ref=f2e305]:
                    - generic [ref=f2e306]:
                      - generic [ref=f2e307]:
                        - generic [ref=f2e308]: "1"
                        - generic [ref=f2e315]: "0"
                      - generic [ref=f2e323]:
                        - paragraph [ref=f2e324]: Min bid
                        - paragraph [ref=f2e325]: ₹3,00,000
                    - generic [ref=f2e326]: Join live room
        - generic [ref=f2e332]:
          - generic [ref=f2e335]:
            - generic [ref=f2e336]:
              - img "Kalyani Motors" [ref=f2e338]
              - paragraph [ref=f2e339]: True Value · Dealers Platform
              - paragraph [ref=f2e340]: Live auctions, award actions, deals, and RC follow-up — built for verified dealers and partners.
            - generic [ref=f2e341]:
              - generic [ref=f2e342]:
                - paragraph [ref=f2e343]: Navigate
                - list [ref=f2e344]:
                  - listitem [ref=f2e345]:
                    - link "Dashboard" [ref=f2e346] [cursor=pointer]:
                      - /url: /dashboard
                  - listitem [ref=f2e347]:
                    - link "Marketplace" [ref=f2e348] [cursor=pointer]:
                      - /url: /marketplace
                  - listitem [ref=f2e349]:
                    - link "Awards" [ref=f2e350] [cursor=pointer]:
                      - /url: /awards
                  - listitem [ref=f2e351]:
                    - link "Deals" [ref=f2e352] [cursor=pointer]:
                      - /url: /deals
                  - listitem [ref=f2e353]:
                    - link "Referrals" [ref=f2e354] [cursor=pointer]:
                      - /url: /referrals
                  - listitem [ref=f2e355]:
                    - link "RC Follow-up" [ref=f2e356] [cursor=pointer]:
                      - /url: /rc-follow-ups
                  - listitem [ref=f2e357]:
                    - link "Account Balance" [ref=f2e358] [cursor=pointer]:
                      - /url: /account-balance
                  - listitem [ref=f2e359]:
                    - link "Profile" [ref=f2e360] [cursor=pointer]:
                      - /url: /profile
              - generic [ref=f2e361]:
                - paragraph [ref=f2e362]: Support
                - generic [ref=f2e363]:
                  - paragraph [ref=f2e364]: UMS Auto Auction CRM
                  - link [ref=f2e365] [cursor=pointer]:
                    - /url: mailto:kmcrm@kalyanimotors.com
                  - link [ref=f2e370] [cursor=pointer]:
                    - /url: tel:+919590990011
          - generic [ref=f2e375]:
            - paragraph [ref=f2e376]: © 2026 UMS Auto Auction CRM. All rights reserved.
            - navigation [ref=f2e377]:
              - link "Terms" [ref=f2e378] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/terms-and-condition
              - link "Privacy" [ref=f2e379] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/privacy-policy
              - link "About" [ref=f2e380] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/about
              - generic [ref=f2e381]: Bangalore
  - region "Notifications alt+T"
  - alert [ref=f2e382]
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