# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual-spec.js >> Visual Regression: https://dealerportal.kalyanicrm.com/marketplace/668a1788-03bb-45fc-bffa-520aaf190fea?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
- Location: visual-spec.js:6:5

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  186 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 186 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 186 pixels (ratio 0.01 of all image pixels) are different.

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
              - generic [ref=f2e42]:
                - link "Back to September End of Season Sale" [ref=f2e43]:
                  - /url: /marketplace/events/50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6?lane=parallel&stay=1
                - paragraph [ref=f2e46]: September End Of Season Sale
              - generic [ref=f2e47]:
                - generic [ref=f2e48]:
                  - button "Like" [ref=f2e49] [cursor=pointer]
                  - button "Dislike" [ref=f2e52] [cursor=pointer]
                - heading "2018 Honda Amaze" [level=1] [ref=f2e55]
            - generic [ref=f2e56]:
              - generic [ref=f2e57]:
                - generic [ref=f2e58]:
                  - generic [ref=f2e59]: Open Floor
                  - generic [ref=f2e62]: Live
                  - generic [ref=f2e66]: Other cars
                - generic [ref=f2e67]: 3 open · 4:28:31
              - generic [ref=f2e68]:
                - button "Scroll right" [ref=f2e69] [cursor=pointer]
                - generic [ref=f2e72]:
                  - generic [ref=f2e74]:
                    - generic [ref=f2e75]: Live
                    - generic [ref=f2e80]:
                      - paragraph [ref=f2e81]: 2018 Honda Amaze
                      - paragraph [ref=f2e82]: No bids
                  - link [ref=f2e83]:
                    - /url: /marketplace/ee0d5a0a-5339-4313-adb0-9f230e5eda94?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                    - generic [ref=f2e84]:
                      - generic [ref=f2e85]: Live
                      - generic [ref=f2e90]:
                        - paragraph [ref=f2e91]: 2007 Maruti Suzuki Zen
                        - paragraph [ref=f2e92]: No bids
                  - link [ref=f2e93]:
                    - /url: /marketplace/e6bc0fbf-f481-4d35-9689-dcf54152fb04?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                    - generic [ref=f2e94]:
                      - generic [ref=f2e95]: Live
                      - generic [ref=f2e100]:
                        - paragraph [ref=f2e101]: 2024 Maruti Suzuki Alto K10
                        - paragraph [ref=f2e102]: No bids
          - generic [ref=f2e104]:
            - generic [ref=f2e105]:
              - generic [ref=f2e106]:
                - generic [ref=f2e107]: Live
                - generic [ref=f2e110]: Live
              - paragraph [ref=f2e112]: 0 bids·1 in room·1 watching
            - generic [ref=f2e113]:
              - generic [ref=f2e114]:
                - generic [ref=f2e115]: Time remaining
                - paragraph [ref=f2e119]: 04:28:31
              - generic [ref=f2e120]:
                - generic [ref=f2e121]: Highest bid
                - generic [ref=f2e125]: —
                - generic [ref=f2e126]: No leader yet
          - generic [ref=f2e128]:
            - generic [ref=f2e131]:
              - generic [ref=f2e132]:
                - generic [ref=f2e133]:
                  - generic [ref=f2e134] [cursor=pointer]:
                    - img "Vehicle photo" [ref=f2e136]
                    - button "Previous" [ref=f2e137]
                    - button "Next" [ref=f2e140]
                    - button "Zoom" [ref=f2e143]
                    - generic [ref=f2e148]:
                      - button [ref=f2e149]
                      - button [ref=f2e150]
                      - button [ref=f2e151]
                      - button [ref=f2e152]
                      - button [ref=f2e153]
                      - button [ref=f2e154]
                      - button [ref=f2e155]
                      - button [ref=f2e156]
                      - generic [ref=f2e157]: 1/8
                  - generic [ref=f2e158]:
                    - button [ref=f2e159] [cursor=pointer]
                    - button [ref=f2e160] [cursor=pointer]
                    - button [ref=f2e161] [cursor=pointer]
                    - button [ref=f2e162] [cursor=pointer]
                    - button [ref=f2e163] [cursor=pointer]
                    - button [ref=f2e164] [cursor=pointer]
                - generic [ref=f2e165]:
                  - paragraph [ref=f2e166]: Specs
                  - generic [ref=f2e167]:
                    - generic [ref=f2e168]:
                      - paragraph [ref=f2e172]: Year
                      - paragraph [ref=f2e173]: "2018"
                    - generic [ref=f2e174]:
                      - paragraph [ref=f2e180]: Variant
                      - paragraph [ref=f2e181]: 1.2 SX I-VTEC
                    - generic [ref=f2e182]:
                      - paragraph [ref=f2e187]: Fuel
                      - paragraph [ref=f2e188]: Petrol
                    - generic [ref=f2e189]:
                      - paragraph [ref=f2e194]: KM driven
                      - paragraph [ref=f2e195]: 77,155
                    - generic [ref=f2e196]:
                      - paragraph [ref=f2e203]: Owner
                      - paragraph [ref=f2e204]: 3rd
                    - generic [ref=f2e205]:
                      - paragraph [ref=f2e210]: RTO
                      - paragraph [ref=f2e211]: KA05
                    - generic [ref=f2e212]:
                      - paragraph [ref=f2e217]: Transmission
                      - paragraph [ref=f2e218]: Manual
              - generic [ref=f2e220]:
                - paragraph [ref=f2e221]: "Quality Score: 463/510 (90.8%)"
                - generic [ref=f2e222]:
                  - generic [ref=f2e223]:
                    - generic [ref=f2e224]:
                      - generic [ref=f2e225]:
                        - heading "Body" [level=4] [ref=f2e226]
                        - paragraph [ref=f2e227]: 22 items
                      - generic [ref=f2e228]: 9.3 / 10
                    - generic [ref=f2e229]:
                      - button "Roof Roof ALL OK" [ref=f2e230] [cursor=pointer]:
                        - img "Roof" [ref=f2e232]
                        - generic [ref=f2e238]:
                          - paragraph [ref=f2e239]: Roof
                          - generic "ALL OK" [ref=f2e241]
                      - button "Apron Apron ALL OK" [ref=f2e242] [cursor=pointer]:
                        - img "Apron" [ref=f2e244]
                        - generic [ref=f2e250]:
                          - paragraph [ref=f2e251]: Apron
                          - generic "ALL OK" [ref=f2e253]
                      - button "Chassis Chassis ALL OK" [ref=f2e254] [cursor=pointer]:
                        - img "Chassis" [ref=f2e256]
                        - generic [ref=f2e262]:
                          - paragraph [ref=f2e263]: Chassis
                          - generic "ALL OK" [ref=f2e265]
                      - button "Boot Floor Boot Floor ALL OK" [ref=f2e266] [cursor=pointer]:
                        - img "Boot Floor" [ref=f2e268]
                        - generic [ref=f2e274]:
                          - paragraph [ref=f2e275]: Boot Floor
                          - generic "ALL OK" [ref=f2e277]
                      - button "LHS Fender LHS Fender ALL OK" [ref=f2e278] [cursor=pointer]:
                        - img "LHS Fender" [ref=f2e280]
                        - generic [ref=f2e286]:
                          - paragraph [ref=f2e287]: LHS Fender
                          - generic "ALL OK" [ref=f2e289]
                      - button "RHS Fender RHS Fender ALL OK" [ref=f2e290] [cursor=pointer]:
                        - img "RHS Fender" [ref=f2e292]
                        - generic [ref=f2e298]:
                          - paragraph [ref=f2e299]: RHS Fender
                          - generic "ALL OK" [ref=f2e301]
                      - button "Windshield Windshield ALL OK" [ref=f2e302] [cursor=pointer]:
                        - img "Windshield" [ref=f2e304]
                        - generic [ref=f2e310]:
                          - paragraph [ref=f2e311]: Windshield
                          - generic "ALL OK" [ref=f2e313]
                      - button "Bonnet/Hood Bonnet/Hood ALL OK" [ref=f2e314] [cursor=pointer]:
                        - img "Bonnet/Hood" [ref=f2e316]
                        - generic [ref=f2e322]:
                          - paragraph [ref=f2e323]: Bonnet/Hood
                          - generic "ALL OK" [ref=f2e325]
                      - button "Rear Bumper Rear Bumper ALL OK" [ref=f2e326] [cursor=pointer]:
                        - img "Rear Bumper" [ref=f2e328]
                        - generic [ref=f2e334]:
                          - paragraph [ref=f2e335]: Rear Bumper
                          - generic "ALL OK" [ref=f2e337]
                      - button "Front Bumper Front Bumper ALL OK" [ref=f2e338] [cursor=pointer]:
                        - img "Front Bumper" [ref=f2e340]
                        - generic [ref=f2e346]:
                          - paragraph [ref=f2e347]: Front Bumper
                          - generic "ALL OK" [ref=f2e349]
                      - button "LHS Rear Door LHS Rear Door ALL OK" [ref=f2e350] [cursor=pointer]:
                        - img "LHS Rear Door" [ref=f2e352]
                        - generic [ref=f2e358]:
                          - paragraph [ref=f2e359]: LHS Rear Door
                          - generic "ALL OK" [ref=f2e361]
                      - button "RHS Rear Door RHS Rear Door REPAINTED" [ref=f2e362] [cursor=pointer]:
                        - img "RHS Rear Door" [ref=f2e364]
                        - generic [ref=f2e370]:
                          - paragraph [ref=f2e371]: RHS Rear Door
                          - generic "REPAINTED" [ref=f2e373]
                      - button "LHS Front Door LHS Front Door ALL OK" [ref=f2e374] [cursor=pointer]:
                        - img "LHS Front Door" [ref=f2e376]
                        - generic [ref=f2e382]:
                          - paragraph [ref=f2e383]: LHS Front Door
                          - generic "ALL OK" [ref=f2e385]
                      - button "RHS Front Door RHS Front Door REPAINTED" [ref=f2e386] [cursor=pointer]:
                        - img "RHS Front Door" [ref=f2e388]
                        - generic [ref=f2e394]:
                          - paragraph [ref=f2e395]: RHS Front Door
                          - generic "REPAINTED" [ref=f2e397]
                      - button "REAR DICKEY DOOR REAR DICKEY DOOR REPAINTED" [ref=f2e398] [cursor=pointer]:
                        - img "REAR DICKEY DOOR" [ref=f2e400]
                        - generic [ref=f2e406]:
                          - paragraph [ref=f2e407]: REAR DICKEY DOOR
                          - generic "REPAINTED" [ref=f2e409]
                      - button "LHS Quarter Panel LHS Quarter Panel ALL OK" [ref=f2e410] [cursor=pointer]:
                        - img "LHS Quarter Panel" [ref=f2e412]
                        - generic [ref=f2e418]:
                          - paragraph [ref=f2e419]: LHS Quarter Panel
                          - generic "ALL OK" [ref=f2e421]
                      - button "RHS Quarter Panel RHS Quarter Panel REPAINTED" [ref=f2e422] [cursor=pointer]:
                        - img "RHS Quarter Panel" [ref=f2e424]
                        - generic [ref=f2e430]:
                          - paragraph [ref=f2e431]: RHS Quarter Panel
                          - generic "REPAINTED" [ref=f2e433]
                      - button "LHS Running Border LHS Running Border ALL OK" [ref=f2e434] [cursor=pointer]:
                        - img "LHS Running Border" [ref=f2e436]
                        - generic [ref=f2e442]:
                          - paragraph [ref=f2e443]: LHS Running Border
                          - generic "ALL OK" [ref=f2e445]
                      - button "RHS Running Border RHS Running Border ALL OK" [ref=f2e446] [cursor=pointer]:
                        - img "RHS Running Border" [ref=f2e448]
                        - generic [ref=f2e454]:
                          - paragraph [ref=f2e455]: RHS Running Border
                          - generic "ALL OK" [ref=f2e457]
                      - button "LHS FRAME A&B PILLAR LHS FRAME A&B PILLAR ALL OK" [ref=f2e458] [cursor=pointer]:
                        - img "LHS FRAME A&B PILLAR" [ref=f2e460]
                        - generic [ref=f2e466]:
                          - paragraph [ref=f2e467]: LHS FRAME A&B PILLAR
                          - generic "ALL OK" [ref=f2e469]
                      - button "RHS FRAME A & B PILLAR RHS FRAME A & B PILLAR ALL OK" [ref=f2e470] [cursor=pointer]:
                        - img "RHS FRAME A & B PILLAR" [ref=f2e472]
                        - generic [ref=f2e478]:
                          - paragraph [ref=f2e479]: RHS FRAME A & B PILLAR
                          - generic "ALL OK" [ref=f2e481]
                      - button "Dicky Frame / Boot Frame Dicky Frame / Boot Frame ALL OK" [ref=f2e482] [cursor=pointer]:
                        - img "Dicky Frame / Boot Frame" [ref=f2e484]
                        - generic [ref=f2e490]:
                          - paragraph [ref=f2e491]: Dicky Frame / Boot Frame
                          - generic "ALL OK" [ref=f2e493]
                  - generic [ref=f2e494]:
                    - generic [ref=f2e495]:
                      - generic [ref=f2e496]:
                        - heading "Engine" [level=4] [ref=f2e497]
                        - paragraph [ref=f2e498]: 2 items
                      - generic [ref=f2e499]: 10.0 / 10
                    - generic [ref=f2e500]:
                      - button "Engine Engine ALL OK" [ref=f2e501] [cursor=pointer]:
                        - img "Engine" [ref=f2e503]
                        - generic [ref=f2e509]:
                          - paragraph [ref=f2e510]: Engine
                          - generic "ALL OK" [ref=f2e512]
                      - button "Battery Battery ALL OK" [ref=f2e513] [cursor=pointer]:
                        - img "Battery" [ref=f2e515]
                        - generic [ref=f2e521]:
                          - paragraph [ref=f2e522]: Battery
                          - generic "ALL OK" [ref=f2e524]
                  - generic [ref=f2e525]:
                    - generic [ref=f2e526]:
                      - generic [ref=f2e527]:
                        - heading "Tyres" [level=4] [ref=f2e528]
                        - paragraph [ref=f2e529]: 4 items
                      - generic [ref=f2e530]: 7.0 / 10
                    - generic [ref=f2e531]:
                      - button "LHS Rear Tyre LHS Rear Tyre GOOD" [ref=f2e532] [cursor=pointer]:
                        - img "LHS Rear Tyre" [ref=f2e534]
                        - generic [ref=f2e540]:
                          - paragraph [ref=f2e541]: LHS Rear Tyre
                          - generic "GOOD" [ref=f2e543]
                      - button "RHS Rear Tyre RHS Rear Tyre CRACKS ON EDGES" [ref=f2e544] [cursor=pointer]:
                        - img "RHS Rear Tyre" [ref=f2e546]
                        - generic [ref=f2e552]:
                          - paragraph [ref=f2e553]: RHS Rear Tyre
                          - generic "CRACKS ON EDGES" [ref=f2e555]
                      - button "LHS Front Tyre LHS Front Tyre CRACKS ON EDGES" [ref=f2e556] [cursor=pointer]:
                        - img "LHS Front Tyre" [ref=f2e558]
                        - generic [ref=f2e564]:
                          - paragraph [ref=f2e565]: LHS Front Tyre
                          - generic "CRACKS ON EDGES" [ref=f2e567]
                      - button "RHS Front Tyre RHS Front Tyre CRACKS ON EDGES" [ref=f2e568] [cursor=pointer]:
                        - img "RHS Front Tyre" [ref=f2e570]
                        - generic [ref=f2e576]:
                          - paragraph [ref=f2e577]: RHS Front Tyre
                          - generic "CRACKS ON EDGES" [ref=f2e579]
                  - generic [ref=f2e580]:
                    - generic [ref=f2e581]:
                      - generic [ref=f2e582]:
                        - heading "Interior" [level=4] [ref=f2e583]
                        - paragraph [ref=f2e584]: 1 item
                      - generic [ref=f2e585]: 10.0 / 10
                    - button "Music System Music System ALL OK" [ref=f2e587] [cursor=pointer]:
                      - img "Music System" [ref=f2e589]
                      - generic [ref=f2e595]:
                        - paragraph [ref=f2e596]: Music System
                        - generic "ALL OK" [ref=f2e598]
                  - generic [ref=f2e599]:
                    - generic [ref=f2e600]:
                      - generic [ref=f2e601]:
                        - heading "AC & Heater" [level=4] [ref=f2e602]
                        - paragraph [ref=f2e603]: 1 item
                      - generic [ref=f2e604]: 10.0 / 10
                    - button "AC Cooling AC Cooling EXCELLENT COOLING" [ref=f2e606] [cursor=pointer]:
                      - img "AC Cooling" [ref=f2e608]
                      - generic [ref=f2e614]:
                        - paragraph [ref=f2e615]: AC Cooling
                        - generic "EXCELLENT COOLING" [ref=f2e617]
            - generic [ref=f2e618]:
              - generic [ref=f2e619]:
                - generic [ref=f2e621]:
                  - generic [ref=f2e626]:
                    - paragraph [ref=f2e627]: Place a Bid
                    - paragraph [ref=f2e628]: Min ₹ 3,00,000 · Step ₹ 500
                  - generic [ref=f2e629]: LIVE
                - generic [ref=f2e630]:
                  - generic [ref=f2e631]:
                    - generic [ref=f2e632]:
                      - generic [ref=f2e633]: Your Bid Amount
                      - generic [ref=f2e634]: STEP ₹ 500
                    - generic [ref=f2e635]:
                      - generic [ref=f2e636]: ₹
                      - textbox "3,00,000" [ref=f2e637]
                    - paragraph [ref=f2e638]: "Min next bid: ₹ 3,00,000"
                  - generic [ref=f2e639]:
                    - paragraph [ref=f2e640]: Quick Add
                    - generic [ref=f2e642]:
                      - button "Decrease bid" [ref=f2e643] [cursor=pointer]
                      - generic [ref=f2e645]:
                        - button "+500" [ref=f2e646] [cursor=pointer]
                        - button "+1,000" [ref=f2e647] [cursor=pointer]
                        - button "+1,500" [ref=f2e648] [cursor=pointer]
                      - button "Increase bid" [ref=f2e649] [cursor=pointer]
                  - button "Place Bid" [disabled] [ref=f2e652]
              - generic [ref=f2e662]:
                - heading "How to Bid" [level=3] [ref=f2e667]
                - list [ref=f2e668]:
                  - listitem [ref=f2e669]:
                    - generic [ref=f2e670]: "1"
                    - text: "Enter at least ₹ 3,00,000 (step: ₹ 500)."
                  - listitem [ref=f2e671]:
                    - generic [ref=f2e672]: "2"
                    - text: Use Quick Add chips to increase, then tap Place Bid.
                  - listitem [ref=f2e673]:
                    - generic [ref=f2e674]: "3"
                    - text: Bids cannot be edited or cancelled once placed.
                  - listitem [ref=f2e675]:
                    - generic [ref=f2e676]: "4"
                    - text: "Open Floor: multiple lots open — switch rooms to bid on more."
              - generic [ref=f2e677]:
                - heading "Auction Time" [level=3] [ref=f2e683]
                - generic [ref=f2e685]:
                  - paragraph [ref=f2e686]: Bidding Window
                  - generic [ref=f2e687]: 29 Sept 2026, 2:45 pm→29 Sept 2026, 9:45 pm
        - generic [ref=f2e689]:
          - generic [ref=f2e692]:
            - generic [ref=f2e693]:
              - img "Kalyani Motors" [ref=f2e695]
              - paragraph [ref=f2e696]: True Value · Dealers Platform
              - paragraph [ref=f2e697]: Live auctions, award actions, deals, and RC follow-up — built for verified dealers and partners.
            - generic [ref=f2e698]:
              - generic [ref=f2e699]:
                - paragraph [ref=f2e700]: Navigate
                - list [ref=f2e701]:
                  - listitem [ref=f2e702]:
                    - link "Dashboard" [ref=f2e703]:
                      - /url: /dashboard
                  - listitem [ref=f2e704]:
                    - link "Marketplace" [ref=f2e705]:
                      - /url: /marketplace
                  - listitem [ref=f2e706]:
                    - link "Awards" [ref=f2e707]:
                      - /url: /awards
                  - listitem [ref=f2e708]:
                    - link "Deals" [ref=f2e709]:
                      - /url: /deals
                  - listitem [ref=f2e710]:
                    - link "Referrals" [ref=f2e711]:
                      - /url: /referrals
                  - listitem [ref=f2e712]:
                    - link "RC Follow-up" [ref=f2e713]:
                      - /url: /rc-follow-ups
                  - listitem [ref=f2e714]:
                    - link "Account Balance" [ref=f2e715]:
                      - /url: /account-balance
                  - listitem [ref=f2e716]:
                    - link "Profile" [ref=f2e717]:
                      - /url: /profile
              - generic [ref=f2e718]:
                - paragraph [ref=f2e719]: Support
                - generic [ref=f2e720]:
                  - paragraph [ref=f2e721]: UMS Auto Auction CRM
                  - link [ref=f2e722]:
                    - /url: mailto:kmcrm@kalyanimotors.com
                  - link [ref=f2e727]:
                    - /url: tel:+919590990011
          - generic [ref=f2e732]:
            - paragraph [ref=f2e733]: © 2026 UMS Auto Auction CRM. All rights reserved.
            - navigation [ref=f2e734]:
              - link "Terms" [ref=f2e735]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/terms-and-condition
              - link "Privacy" [ref=f2e736]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/privacy-policy
              - link "About" [ref=f2e737]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/about
              - generic [ref=f2e738]: Bangalore
  - region "Notifications alt+T"
  - alert [ref=f2e739]
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