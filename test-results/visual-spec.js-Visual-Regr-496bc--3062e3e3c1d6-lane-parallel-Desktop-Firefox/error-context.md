# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual-spec.js >> Visual Regression: https://dealerportal.kalyanicrm.com/marketplace/668a1788-03bb-45fc-bffa-520aaf190fea?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
- Location: visual-spec.js:6:5

# Error details

```
Error: A snapshot doesn't exist at C:\swnt\udms-testing\functional-testing\visual-spec.js-snapshots\Visual-Regression-https-dealerportal-kalyan-76655-fe7-ae1b-4a75-8bd4-3062e3e3c1d6-lane-parallel-1-Desktop-Firefox-win32.png, writing actual.
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
              - generic [ref=f2e73]:
                - link "Back to September End of Season Sale" [ref=f2e74] [cursor=pointer]:
                  - /url: /marketplace/events/50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6?lane=parallel&stay=1
                - paragraph [ref=f2e78]: September End Of Season Sale
              - generic [ref=f2e79]:
                - generic [ref=f2e80]:
                  - button "Like" [ref=f2e81] [cursor=pointer]
                  - button "Dislike" [ref=f2e84] [cursor=pointer]
                - heading "2018 Honda Amaze" [level=1] [ref=f2e88]
            - generic [ref=f2e89]:
              - generic [ref=f2e90]:
                - generic [ref=f2e91]:
                  - generic [ref=f2e92]: Open Floor
                  - generic [ref=f2e97]: Live
                  - generic [ref=f2e101]: Other cars
                - generic [ref=f2e102]: 3 open · 4:29:45
              - generic [ref=f2e104]:
                - generic [ref=f2e106]:
                  - generic [ref=f2e107]: Live
                  - generic [ref=f2e112]:
                    - paragraph [ref=f2e113]: 2018 Honda Amaze
                    - paragraph [ref=f2e114]: No bids
                - link [ref=f2e115] [cursor=pointer]:
                  - /url: /marketplace/ee0d5a0a-5339-4313-adb0-9f230e5eda94?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                  - generic [ref=f2e116]:
                    - generic [ref=f2e117]: Live
                    - generic [ref=f2e122]:
                      - paragraph [ref=f2e123]: 2007 Maruti Suzuki Zen
                      - paragraph [ref=f2e124]: No bids
                - link [ref=f2e125] [cursor=pointer]:
                  - /url: /marketplace/e6bc0fbf-f481-4d35-9689-dcf54152fb04?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                  - generic [ref=f2e126]:
                    - generic [ref=f2e127]: Live
                    - generic [ref=f2e132]:
                      - paragraph [ref=f2e133]: 2024 Maruti Suzuki Alto K10
                      - paragraph [ref=f2e134]: No bids
          - generic [ref=f2e136]:
            - generic [ref=f2e137]:
              - generic [ref=f2e138]:
                - generic [ref=f2e139]: Live
                - generic [ref=f2e142]: Live
              - paragraph [ref=f2e144]: 0 bids·1 in room·1 watching
            - generic [ref=f2e145]:
              - generic [ref=f2e146]:
                - generic [ref=f2e147]: Time remaining
                - paragraph [ref=f2e151]: 04:29:45
              - generic [ref=f2e152]:
                - generic [ref=f2e153]: Highest bid
                - generic [ref=f2e157]: —
                - generic [ref=f2e158]: No leader yet
          - generic [ref=f2e160]:
            - generic [ref=f2e163]:
              - generic [ref=f2e164]:
                - generic [ref=f2e165]:
                  - generic [ref=f2e166] [cursor=pointer]:
                    - img "Vehicle photo" [ref=f2e168]
                    - button "Previous" [ref=f2e169]
                    - button "Next" [ref=f2e172]
                    - button "Zoom" [ref=f2e175]
                    - generic [ref=f2e182]:
                      - button [ref=f2e183]
                      - button [ref=f2e184]
                      - button [ref=f2e185]
                      - button [ref=f2e186]
                      - button [ref=f2e187]
                      - button [ref=f2e188]
                      - button [ref=f2e189]
                      - button [ref=f2e190]
                      - generic [ref=f2e191]: 1/8
                  - generic [ref=f2e192]:
                    - button [ref=f2e193] [cursor=pointer]
                    - button [ref=f2e194] [cursor=pointer]
                    - button [ref=f2e195] [cursor=pointer]
                    - button [ref=f2e196] [cursor=pointer]
                    - button [ref=f2e197] [cursor=pointer]
                    - button [ref=f2e198] [cursor=pointer]
                - generic [ref=f2e199]:
                  - paragraph [ref=f2e200]: Specs
                  - generic [ref=f2e201]:
                    - generic [ref=f2e202]:
                      - paragraph [ref=f2e209]: Year
                      - paragraph [ref=f2e210]: "2018"
                    - generic [ref=f2e211]:
                      - paragraph [ref=f2e218]: Variant
                      - paragraph [ref=f2e219]: 1.2 SX I-VTEC
                    - generic [ref=f2e220]:
                      - paragraph [ref=f2e227]: Fuel
                      - paragraph [ref=f2e228]: Petrol
                    - generic [ref=f2e229]:
                      - paragraph [ref=f2e234]: KM driven
                      - paragraph [ref=f2e235]: 77,155
                    - generic [ref=f2e236]:
                      - paragraph [ref=f2e243]: Owner
                      - paragraph [ref=f2e244]: 3rd
                    - generic [ref=f2e245]:
                      - paragraph [ref=f2e250]: RTO
                      - paragraph [ref=f2e251]: KA05
                    - generic [ref=f2e252]:
                      - paragraph [ref=f2e259]: Transmission
                      - paragraph [ref=f2e260]: Manual
              - generic [ref=f2e262]:
                - paragraph [ref=f2e263]: "Quality Score: 463/510 (90.8%)"
                - generic [ref=f2e264]:
                  - generic [ref=f2e265]:
                    - generic [ref=f2e266]:
                      - generic [ref=f2e267]:
                        - heading "Body" [level=4] [ref=f2e268]
                        - paragraph [ref=f2e269]: 22 items
                      - generic [ref=f2e270]: 9.3 / 10
                    - generic [ref=f2e271]:
                      - button "Roof Roof ALL OK" [ref=f2e272] [cursor=pointer]:
                        - img "Roof" [ref=f2e274]
                        - generic [ref=f2e282]:
                          - paragraph [ref=f2e283]: Roof
                          - generic "ALL OK" [ref=f2e285]
                      - button "Apron Apron ALL OK" [ref=f2e286] [cursor=pointer]:
                        - img "Apron" [ref=f2e288]
                        - generic [ref=f2e296]:
                          - paragraph [ref=f2e297]: Apron
                          - generic "ALL OK" [ref=f2e299]
                      - button "Chassis Chassis ALL OK" [ref=f2e300] [cursor=pointer]:
                        - img "Chassis" [ref=f2e302]
                        - generic [ref=f2e310]:
                          - paragraph [ref=f2e311]: Chassis
                          - generic "ALL OK" [ref=f2e313]
                      - button "Boot Floor Boot Floor ALL OK" [ref=f2e314] [cursor=pointer]:
                        - img "Boot Floor" [ref=f2e316]
                        - generic [ref=f2e324]:
                          - paragraph [ref=f2e325]: Boot Floor
                          - generic "ALL OK" [ref=f2e327]
                      - button "LHS Fender LHS Fender ALL OK" [ref=f2e328] [cursor=pointer]:
                        - img "LHS Fender" [ref=f2e330]
                        - generic [ref=f2e338]:
                          - paragraph [ref=f2e339]: LHS Fender
                          - generic "ALL OK" [ref=f2e341]
                      - button "RHS Fender RHS Fender ALL OK" [ref=f2e342] [cursor=pointer]:
                        - img "RHS Fender" [ref=f2e344]
                        - generic [ref=f2e352]:
                          - paragraph [ref=f2e353]: RHS Fender
                          - generic "ALL OK" [ref=f2e355]
                      - button "Windshield Windshield ALL OK" [ref=f2e356] [cursor=pointer]:
                        - img "Windshield" [ref=f2e358]
                        - generic [ref=f2e366]:
                          - paragraph [ref=f2e367]: Windshield
                          - generic "ALL OK" [ref=f2e369]
                      - button "Bonnet/Hood Bonnet/Hood ALL OK" [ref=f2e370] [cursor=pointer]:
                        - img "Bonnet/Hood" [ref=f2e372]
                        - generic [ref=f2e380]:
                          - paragraph [ref=f2e381]: Bonnet/Hood
                          - generic "ALL OK" [ref=f2e383]
                      - button "Rear Bumper Rear Bumper ALL OK" [ref=f2e384] [cursor=pointer]:
                        - img "Rear Bumper" [ref=f2e386]
                        - generic [ref=f2e394]:
                          - paragraph [ref=f2e395]: Rear Bumper
                          - generic "ALL OK" [ref=f2e397]
                      - button "Front Bumper Front Bumper ALL OK" [ref=f2e398] [cursor=pointer]:
                        - img "Front Bumper" [ref=f2e400]
                        - generic [ref=f2e408]:
                          - paragraph [ref=f2e409]: Front Bumper
                          - generic "ALL OK" [ref=f2e411]
                      - button "LHS Rear Door LHS Rear Door ALL OK" [ref=f2e412] [cursor=pointer]:
                        - img "LHS Rear Door" [ref=f2e414]
                        - generic [ref=f2e422]:
                          - paragraph [ref=f2e423]: LHS Rear Door
                          - generic "ALL OK" [ref=f2e425]
                      - button "RHS Rear Door RHS Rear Door REPAINTED" [ref=f2e426] [cursor=pointer]:
                        - img "RHS Rear Door" [ref=f2e428]
                        - generic [ref=f2e436]:
                          - paragraph [ref=f2e437]: RHS Rear Door
                          - generic "REPAINTED" [ref=f2e439]
                      - button "LHS Front Door LHS Front Door ALL OK" [ref=f2e440] [cursor=pointer]:
                        - img "LHS Front Door" [ref=f2e442]
                        - generic [ref=f2e450]:
                          - paragraph [ref=f2e451]: LHS Front Door
                          - generic "ALL OK" [ref=f2e453]
                      - button "RHS Front Door RHS Front Door REPAINTED" [ref=f2e454] [cursor=pointer]:
                        - img "RHS Front Door" [ref=f2e456]
                        - generic [ref=f2e464]:
                          - paragraph [ref=f2e465]: RHS Front Door
                          - generic "REPAINTED" [ref=f2e467]
                      - button "REAR DICKEY DOOR REAR DICKEY DOOR REPAINTED" [ref=f2e468] [cursor=pointer]:
                        - img "REAR DICKEY DOOR" [ref=f2e470]
                        - generic [ref=f2e478]:
                          - paragraph [ref=f2e479]: REAR DICKEY DOOR
                          - generic "REPAINTED" [ref=f2e481]
                      - button "LHS Quarter Panel LHS Quarter Panel ALL OK" [ref=f2e482] [cursor=pointer]:
                        - img "LHS Quarter Panel" [ref=f2e484]
                        - generic [ref=f2e492]:
                          - paragraph [ref=f2e493]: LHS Quarter Panel
                          - generic "ALL OK" [ref=f2e495]
                      - button "RHS Quarter Panel RHS Quarter Panel REPAINTED" [ref=f2e496] [cursor=pointer]:
                        - img "RHS Quarter Panel" [ref=f2e498]
                        - generic [ref=f2e506]:
                          - paragraph [ref=f2e507]: RHS Quarter Panel
                          - generic "REPAINTED" [ref=f2e509]
                      - button "LHS Running Border LHS Running Border ALL OK" [ref=f2e510] [cursor=pointer]:
                        - img "LHS Running Border" [ref=f2e512]
                        - generic [ref=f2e520]:
                          - paragraph [ref=f2e521]: LHS Running Border
                          - generic "ALL OK" [ref=f2e523]
                      - button "RHS Running Border RHS Running Border ALL OK" [ref=f2e524] [cursor=pointer]:
                        - img "RHS Running Border" [ref=f2e526]
                        - generic [ref=f2e534]:
                          - paragraph [ref=f2e535]: RHS Running Border
                          - generic "ALL OK" [ref=f2e537]
                      - button "LHS FRAME A&B PILLAR LHS FRAME A&B PILLAR ALL OK" [ref=f2e538] [cursor=pointer]:
                        - img "LHS FRAME A&B PILLAR" [ref=f2e540]
                        - generic [ref=f2e548]:
                          - paragraph [ref=f2e549]: LHS FRAME A&B PILLAR
                          - generic "ALL OK" [ref=f2e551]
                      - button "RHS FRAME A & B PILLAR RHS FRAME A & B PILLAR ALL OK" [ref=f2e552] [cursor=pointer]:
                        - img "RHS FRAME A & B PILLAR" [ref=f2e554]
                        - generic [ref=f2e562]:
                          - paragraph [ref=f2e563]: RHS FRAME A & B PILLAR
                          - generic "ALL OK" [ref=f2e565]
                      - button "Dicky Frame / Boot Frame Dicky Frame / Boot Frame ALL OK" [ref=f2e566] [cursor=pointer]:
                        - img "Dicky Frame / Boot Frame" [ref=f2e568]
                        - generic [ref=f2e576]:
                          - paragraph [ref=f2e577]: Dicky Frame / Boot Frame
                          - generic "ALL OK" [ref=f2e579]
                  - generic [ref=f2e580]:
                    - generic [ref=f2e581]:
                      - generic [ref=f2e582]:
                        - heading "Engine" [level=4] [ref=f2e583]
                        - paragraph [ref=f2e584]: 2 items
                      - generic [ref=f2e585]: 10.0 / 10
                    - generic [ref=f2e586]:
                      - button "Engine Engine ALL OK" [ref=f2e587] [cursor=pointer]:
                        - img "Engine" [ref=f2e589]
                        - generic [ref=f2e597]:
                          - paragraph [ref=f2e598]: Engine
                          - generic "ALL OK" [ref=f2e600]
                      - button "Battery Battery ALL OK" [ref=f2e601] [cursor=pointer]:
                        - img "Battery" [ref=f2e603]
                        - generic [ref=f2e611]:
                          - paragraph [ref=f2e612]: Battery
                          - generic "ALL OK" [ref=f2e614]
                  - generic [ref=f2e615]:
                    - generic [ref=f2e616]:
                      - generic [ref=f2e617]:
                        - heading "Tyres" [level=4] [ref=f2e618]
                        - paragraph [ref=f2e619]: 4 items
                      - generic [ref=f2e620]: 7.0 / 10
                    - generic [ref=f2e621]:
                      - button "LHS Rear Tyre LHS Rear Tyre GOOD" [ref=f2e622] [cursor=pointer]:
                        - img "LHS Rear Tyre" [ref=f2e624]
                        - generic [ref=f2e632]:
                          - paragraph [ref=f2e633]: LHS Rear Tyre
                          - generic "GOOD" [ref=f2e635]
                      - button "RHS Rear Tyre RHS Rear Tyre CRACKS ON EDGES" [ref=f2e636] [cursor=pointer]:
                        - img "RHS Rear Tyre" [ref=f2e638]
                        - generic [ref=f2e646]:
                          - paragraph [ref=f2e647]: RHS Rear Tyre
                          - generic "CRACKS ON EDGES" [ref=f2e649]
                      - button "LHS Front Tyre LHS Front Tyre CRACKS ON EDGES" [ref=f2e650] [cursor=pointer]:
                        - img "LHS Front Tyre" [ref=f2e652]
                        - generic [ref=f2e660]:
                          - paragraph [ref=f2e661]: LHS Front Tyre
                          - generic "CRACKS ON EDGES" [ref=f2e663]
                      - button "RHS Front Tyre RHS Front Tyre CRACKS ON EDGES" [ref=f2e664] [cursor=pointer]:
                        - img "RHS Front Tyre" [ref=f2e666]
                        - generic [ref=f2e674]:
                          - paragraph [ref=f2e675]: RHS Front Tyre
                          - generic "CRACKS ON EDGES" [ref=f2e677]
                  - generic [ref=f2e678]:
                    - generic [ref=f2e679]:
                      - generic [ref=f2e680]:
                        - heading "Interior" [level=4] [ref=f2e681]
                        - paragraph [ref=f2e682]: 1 item
                      - generic [ref=f2e683]: 10.0 / 10
                    - button "Music System Music System ALL OK" [ref=f2e685] [cursor=pointer]:
                      - img "Music System" [ref=f2e687]
                      - generic [ref=f2e695]:
                        - paragraph [ref=f2e696]: Music System
                        - generic "ALL OK" [ref=f2e698]
                  - generic [ref=f2e699]:
                    - generic [ref=f2e700]:
                      - generic [ref=f2e701]:
                        - heading "AC & Heater" [level=4] [ref=f2e702]
                        - paragraph [ref=f2e703]: 1 item
                      - generic [ref=f2e704]: 10.0 / 10
                    - button "AC Cooling AC Cooling EXCELLENT COOLING" [ref=f2e706] [cursor=pointer]:
                      - img "AC Cooling" [ref=f2e708]
                      - generic [ref=f2e716]:
                        - paragraph [ref=f2e717]: AC Cooling
                        - generic "EXCELLENT COOLING" [ref=f2e719]
            - generic [ref=f2e720]:
              - generic [ref=f2e721]:
                - generic [ref=f2e723]:
                  - generic [ref=f2e728]:
                    - paragraph [ref=f2e729]: Place a Bid
                    - paragraph [ref=f2e730]: Min ₹ 3,00,000 · Step ₹ 500
                  - generic [ref=f2e731]: LIVE
                - generic [ref=f2e732]:
                  - generic [ref=f2e733]:
                    - generic [ref=f2e734]:
                      - generic [ref=f2e735]: Your Bid Amount
                      - generic [ref=f2e736]: STEP ₹ 500
                    - generic [ref=f2e737]:
                      - generic [ref=f2e738]: ₹
                      - textbox "3,00,000" [ref=f2e739]
                    - paragraph [ref=f2e740]: "Min next bid: ₹ 3,00,000"
                  - generic [ref=f2e741]:
                    - paragraph [ref=f2e742]: Quick Add
                    - generic [ref=f2e744]:
                      - button "Decrease bid" [ref=f2e745] [cursor=pointer]
                      - generic [ref=f2e748]:
                        - button "+500" [ref=f2e749] [cursor=pointer]
                        - button "+1,000" [ref=f2e750] [cursor=pointer]
                        - button "+1,500" [ref=f2e751] [cursor=pointer]
                      - button "Increase bid" [ref=f2e752] [cursor=pointer]
                  - button "Place Bid" [disabled] [ref=f2e757]
              - generic [ref=f2e767]:
                - heading "How to Bid" [level=3] [ref=f2e772]
                - list [ref=f2e773]:
                  - listitem [ref=f2e774]:
                    - generic [ref=f2e775]: "1"
                    - text: "Enter at least ₹ 3,00,000 (step: ₹ 500)."
                  - listitem [ref=f2e776]:
                    - generic [ref=f2e777]: "2"
                    - text: Use Quick Add chips to increase, then tap Place Bid.
                  - listitem [ref=f2e778]:
                    - generic [ref=f2e779]: "3"
                    - text: Bids cannot be edited or cancelled once placed.
                  - listitem [ref=f2e780]:
                    - generic [ref=f2e781]: "4"
                    - text: "Open Floor: multiple lots open — switch rooms to bid on more."
              - generic [ref=f2e782]:
                - heading "Auction Time" [level=3] [ref=f2e788]
                - generic [ref=f2e790]:
                  - paragraph [ref=f2e791]: Bidding Window
                  - generic [ref=f2e792]: 29 Sept 2026, 2:45 pm→29 Sept 2026, 9:45 pm
        - generic [ref=f2e794]:
          - generic [ref=f2e797]:
            - generic [ref=f2e798]:
              - img "Kalyani Motors" [ref=f2e800]
              - paragraph [ref=f2e801]: True Value · Dealers Platform
              - paragraph [ref=f2e802]: Live auctions, award actions, deals, and RC follow-up — built for verified dealers and partners.
            - generic [ref=f2e803]:
              - generic [ref=f2e804]:
                - paragraph [ref=f2e805]: Navigate
                - list [ref=f2e806]:
                  - listitem [ref=f2e807]:
                    - link "Dashboard" [ref=f2e808] [cursor=pointer]:
                      - /url: /dashboard
                  - listitem [ref=f2e809]:
                    - link "Marketplace" [ref=f2e810] [cursor=pointer]:
                      - /url: /marketplace
                  - listitem [ref=f2e811]:
                    - link "Awards" [ref=f2e812] [cursor=pointer]:
                      - /url: /awards
                  - listitem [ref=f2e813]:
                    - link "Deals" [ref=f2e814] [cursor=pointer]:
                      - /url: /deals
                  - listitem [ref=f2e815]:
                    - link "Referrals" [ref=f2e816] [cursor=pointer]:
                      - /url: /referrals
                  - listitem [ref=f2e817]:
                    - link "RC Follow-up" [ref=f2e818] [cursor=pointer]:
                      - /url: /rc-follow-ups
                  - listitem [ref=f2e819]:
                    - link "Account Balance" [ref=f2e820] [cursor=pointer]:
                      - /url: /account-balance
                  - listitem [ref=f2e821]:
                    - link "Profile" [ref=f2e822] [cursor=pointer]:
                      - /url: /profile
              - generic [ref=f2e823]:
                - paragraph [ref=f2e824]: Support
                - generic [ref=f2e825]:
                  - paragraph [ref=f2e826]: UMS Auto Auction CRM
                  - link [ref=f2e827] [cursor=pointer]:
                    - /url: mailto:kmcrm@kalyanimotors.com
                  - link [ref=f2e832] [cursor=pointer]:
                    - /url: tel:+919590990011
          - generic [ref=f2e837]:
            - paragraph [ref=f2e838]: © 2026 UMS Auto Auction CRM. All rights reserved.
            - navigation [ref=f2e839]:
              - link "Terms" [ref=f2e840] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/terms-and-condition
              - link "Privacy" [ref=f2e841] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/privacy-policy
              - link "About" [ref=f2e842] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/about
              - generic [ref=f2e843]: Bangalore
  - region "Notifications alt+T"
  - alert [ref=f2e844]
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
     |         ^ Error: A snapshot doesn't exist at C:\swnt\udms-testing\functional-testing\visual-spec.js-snapshots\Visual-Regression-https-dealerportal-kalyan-76655-fe7-ae1b-4a75-8bd4-3062e3e3c1d6-lane-parallel-1-Desktop-Firefox-win32.png, writing actual.
  29 |     });
  30 | });
```