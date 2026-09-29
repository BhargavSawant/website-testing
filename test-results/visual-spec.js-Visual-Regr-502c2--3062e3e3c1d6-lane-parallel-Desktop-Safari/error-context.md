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

  241 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 229 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 241 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - generic [ref=f2e2]:
    - banner [ref=f2e4]:
      - generic [ref=f2e6]:
        - link [ref=f2e8]:
          - /url: /dashboard
          - img "Kalyani Motors" [ref=f2e9]
        - navigation [ref=f2e10]:
          - link "Home" [ref=f2e11]:
            - /url: /dashboard
          - link "Auctions" [ref=f2e12]:
            - /url: /marketplace
          - link "Wishlist" [ref=f2e14]:
            - /url: /wishlist
          - link "Awards" [ref=f2e15]:
            - /url: /awards
          - link "Deals" [ref=f2e16]:
            - /url: /deals
          - link "RC Follow-up" [ref=f2e17]:
            - /url: /rc-follow-ups
          - link "Account" [ref=f2e18]:
            - /url: /account-balance
        - generic [ref=f2e19]:
          - link "₹494 Available ₹2 On hold" [ref=f2e20]:
            - /url: /account-balance
            - generic [ref=f2e21]:
              - generic [ref=f2e22]: ₹494
              - generic [ref=f2e26]: Available
            - generic [ref=f2e27]:
              - generic [ref=f2e28]: ₹2
              - generic [ref=f2e32]: On hold
          - button [ref=f2e33] [cursor=pointer]:
            - generic [ref=f2e34]:
              - paragraph [ref=f2e35]: Bhargav Sawant
              - paragraph [ref=f2e36]: Bhargav
            - img "Bhargav Sawant" [ref=f2e38]
      - generic [ref=f2e47]:
        - 'link "Active Auctions: 4" [ref=f2e48]':
          - /url: /marketplace
          - generic [ref=f2e49]: "Active Auctions:"
          - generic [ref=f2e50]: "4"
        - 'link "Wins to confirm: 1" [ref=f2e52]':
          - /url: /awards
          - generic [ref=f2e53]: "Wins to confirm:"
          - generic [ref=f2e54]: "1"
        - 'link "Closed deals: 3" [ref=f2e56]':
          - /url: /deals
          - generic [ref=f2e57]: "Closed deals:"
          - generic [ref=f2e58]: "3"
        - 'link "RC Follow ups: 1" [ref=f2e60]':
          - /url: /rc-follow-ups
          - generic [ref=f2e61]: "RC Follow ups:"
          - generic [ref=f2e62]: "1"
    - main [ref=f2e63]:
      - generic [ref=f2e64]:
        - generic [ref=f2e66]:
          - generic [ref=f2e67]:
            - generic [ref=f2e68]:
              - link "Marketplace" [ref=f2e69]:
                - /url: /marketplace
              - generic [ref=f2e72]: Live
              - generic [ref=f2e76]: Monthly Premium
            - generic [ref=f2e77]:
              - generic [ref=f2e78]:
                - heading "September End Of Season Sale" [level=1] [ref=f2e79]
                - generic [ref=f2e80]:
                  - generic [ref=f2e81]: 29 Sept 2026 • 2:45 pm
                  - generic [ref=f2e82]: RRXR
                  - generic [ref=f2e86]: 3 listed · 3 left
              - generic [ref=f2e88]:
                - paragraph [ref=f2e89]: Ends in
                - paragraph [ref=f2e90]: 04:30:12
            - button "Open Floor 3 open · 3 listed Live Active Several cars open together — pick any and bid before the window closes." [ref=f2e92] [cursor=pointer]:
              - generic [ref=f2e93]:
                - generic [ref=f2e98]:
                  - paragraph [ref=f2e99]: Open Floor
                  - paragraph [ref=f2e100]: 3 open · 3 listed
                - generic [ref=f2e101]:
                  - generic [ref=f2e102]: Live
                  - generic [ref=f2e106]: Active
              - paragraph [ref=f2e107]: Several cars open together — pick any and bid before the window closes.
          - generic [ref=f2e108]:
            - generic [ref=f2e109]:
              - heading "Open Floor cars" [level=2] [ref=f2e110]
              - paragraph [ref=f2e111]: Several cars open. Pick any and bid.
            - generic [ref=f2e113]:
              - 'link "Live #1 KA51 Add to wishlist Time left 04:30:12 6.7 2007 Maruti Suzuki Zen2007 1,17,696 km 3rd owner Petrol Manual 1 0 Min bid ₹40,000 Join live room" [ref=f2e115]':
                - /url: /marketplace/ee0d5a0a-5339-4313-adb0-9f230e5eda94?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                - generic [ref=f2e116]:
                  - generic [ref=f2e118]:
                    - generic [ref=f2e119]: Live
                    - generic [ref=f2e120]: "#1"
                  - generic [ref=f2e121]:
                    - generic [ref=f2e122]: KA51
                    - button "Add to wishlist" [ref=f2e123] [cursor=pointer]
                  - generic [ref=f2e127]:
                    - paragraph [ref=f2e128]: Time left
                    - paragraph [ref=f2e129]: 04:30:12
                  - generic [ref=f2e130]: "6.7"
                - generic [ref=f2e134]:
                  - generic [ref=f2e135]:
                    - heading "2007 Maruti Suzuki Zen2007" [level=3] [ref=f2e136]
                    - generic [ref=f2e137]:
                      - generic [ref=f2e138]: 1,17,696 km
                      - generic [ref=f2e142]: 3rd owner
                      - generic [ref=f2e146]: Petrol
                      - generic [ref=f2e150]: Manual
                  - generic [ref=f2e155]:
                    - generic [ref=f2e156]:
                      - generic [ref=f2e157]:
                        - generic [ref=f2e158]: "1"
                        - generic [ref=f2e165]: "0"
                      - generic [ref=f2e173]:
                        - paragraph [ref=f2e174]: Min bid
                        - paragraph [ref=f2e175]: ₹40,000
                    - generic [ref=f2e176]: Join live room
              - 'link "Live #2 KA09 Add to wishlist Time left 04:30:12 9.1 2024 Maruti Suzuki Alto K102024 17,912 km 1st owner Petrol Manual 1 0 Min bid ₹4,00,000 Join live room" [ref=f2e182]':
                - /url: /marketplace/e6bc0fbf-f481-4d35-9689-dcf54152fb04?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                - generic [ref=f2e183]:
                  - generic [ref=f2e185]:
                    - generic [ref=f2e186]: Live
                    - generic [ref=f2e187]: "#2"
                  - generic [ref=f2e188]:
                    - generic [ref=f2e189]: KA09
                    - button "Add to wishlist" [ref=f2e190] [cursor=pointer]
                  - generic [ref=f2e194]:
                    - paragraph [ref=f2e195]: Time left
                    - paragraph [ref=f2e196]: 04:30:12
                  - generic [ref=f2e197]: "9.1"
                - generic [ref=f2e201]:
                  - generic [ref=f2e202]:
                    - heading "2024 Maruti Suzuki Alto K102024" [level=3] [ref=f2e203]
                    - generic [ref=f2e204]:
                      - generic [ref=f2e205]: 17,912 km
                      - generic [ref=f2e209]: 1st owner
                      - generic [ref=f2e213]: Petrol
                      - generic [ref=f2e217]: Manual
                  - generic [ref=f2e222]:
                    - generic [ref=f2e223]:
                      - generic [ref=f2e224]:
                        - generic [ref=f2e225]: "1"
                        - generic [ref=f2e232]: "0"
                      - generic [ref=f2e240]:
                        - paragraph [ref=f2e241]: Min bid
                        - paragraph [ref=f2e242]: ₹4,00,000
                    - generic [ref=f2e243]: Join live room
              - 'link "Live #3 KA05 Add to wishlist Time left 04:30:12 9.1 2018 Honda Amaze2018 77,155 km 3rd owner Petrol Manual 1 0 Min bid ₹3,00,000 Join live room" [ref=f2e249]':
                - /url: /marketplace/668a1788-03bb-45fc-bffa-520aaf190fea?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                - generic [ref=f2e250]:
                  - generic [ref=f2e252]:
                    - generic [ref=f2e253]: Live
                    - generic [ref=f2e254]: "#3"
                  - generic [ref=f2e255]:
                    - generic [ref=f2e256]: KA05
                    - button "Add to wishlist" [ref=f2e257] [cursor=pointer]
                  - generic [ref=f2e261]:
                    - paragraph [ref=f2e262]: Time left
                    - paragraph [ref=f2e263]: 04:30:12
                  - generic [ref=f2e264]: "9.1"
                - generic [ref=f2e268]:
                  - generic [ref=f2e269]:
                    - heading "2018 Honda Amaze2018" [level=3] [ref=f2e270]
                    - generic [ref=f2e271]:
                      - generic [ref=f2e272]: 77,155 km
                      - generic [ref=f2e276]: 3rd owner
                      - generic [ref=f2e280]: Petrol
                      - generic [ref=f2e284]: Manual
                  - generic [ref=f2e289]:
                    - generic [ref=f2e290]:
                      - generic [ref=f2e291]:
                        - generic [ref=f2e292]: "1"
                        - generic [ref=f2e299]: "0"
                      - generic [ref=f2e307]:
                        - paragraph [ref=f2e308]: Min bid
                        - paragraph [ref=f2e309]: ₹3,00,000
                    - generic [ref=f2e310]: Join live room
        - generic [ref=f2e316]:
          - generic [ref=f2e319]:
            - generic [ref=f2e320]:
              - img "Kalyani Motors" [ref=f2e322]
              - paragraph [ref=f2e323]: True Value · Dealers Platform
              - paragraph [ref=f2e324]: Live auctions, award actions, deals, and RC follow-up — built for verified dealers and partners.
            - generic [ref=f2e325]:
              - generic [ref=f2e326]:
                - paragraph [ref=f2e327]: Navigate
                - list [ref=f2e328]:
                  - listitem [ref=f2e329]:
                    - link "Dashboard" [ref=f2e330]:
                      - /url: /dashboard
                  - listitem [ref=f2e331]:
                    - link "Marketplace" [ref=f2e332]:
                      - /url: /marketplace
                  - listitem [ref=f2e333]:
                    - link "Awards" [ref=f2e334]:
                      - /url: /awards
                  - listitem [ref=f2e335]:
                    - link "Deals" [ref=f2e336]:
                      - /url: /deals
                  - listitem [ref=f2e337]:
                    - link "Referrals" [ref=f2e338]:
                      - /url: /referrals
                  - listitem [ref=f2e339]:
                    - link "RC Follow-up" [ref=f2e340]:
                      - /url: /rc-follow-ups
                  - listitem [ref=f2e341]:
                    - link "Account Balance" [ref=f2e342]:
                      - /url: /account-balance
                  - listitem [ref=f2e343]:
                    - link "Profile" [ref=f2e344]:
                      - /url: /profile
              - generic [ref=f2e345]:
                - paragraph [ref=f2e346]: Support
                - generic [ref=f2e347]:
                  - paragraph [ref=f2e348]: UMS Auto Auction CRM
                  - link [ref=f2e349]:
                    - /url: mailto:kmcrm@kalyanimotors.com
                  - link [ref=f2e354]:
                    - /url: tel:+919590990011
          - generic [ref=f2e359]:
            - paragraph [ref=f2e360]: © 2026 UMS Auto Auction CRM. All rights reserved.
            - navigation [ref=f2e361]:
              - link "Terms" [ref=f2e362]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/terms-and-condition
              - link "Privacy" [ref=f2e363]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/privacy-policy
              - link "About" [ref=f2e364]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/about
              - generic [ref=f2e365]: Bangalore
  - region "Notifications alt+T"
  - alert [ref=f2e366]
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