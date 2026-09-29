# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual-spec.js >> Visual Regression: https://dealerportal.kalyanicrm.com/marketplace/ee0d5a0a-5339-4313-adb0-9f230e5eda94?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=sequential
- Location: visual-spec.js:6:5

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  237 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 299 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 134 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 181 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 237 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - generic [ref=f2e2]:
    - banner [ref=f2e4]:
      - generic [ref=f2e6]:
        - generic [ref=f2e7]:
          - button "Open menu" [ref=f2e8] [cursor=pointer]
          - link [ref=f2e9] [cursor=pointer]:
            - /url: /dashboard
            - img "Kalyani Motors" [ref=f2e10]
        - button [ref=f2e12] [cursor=pointer]:
          - img "Bhargav Sawant" [ref=f2e14]
      - generic [ref=f2e20]:
        - link "Live 4" [ref=f2e21] [cursor=pointer]:
          - /url: /marketplace
          - generic [ref=f2e22]: Live
          - generic [ref=f2e23]: "4"
        - link "Wins 1" [ref=f2e25] [cursor=pointer]:
          - /url: /awards
          - generic [ref=f2e26]: Wins
          - generic [ref=f2e27]: "1"
        - link "Deals 3" [ref=f2e29] [cursor=pointer]:
          - /url: /deals
          - generic [ref=f2e30]: Deals
          - generic [ref=f2e31]: "3"
        - link "RC 1" [ref=f2e33] [cursor=pointer]:
          - /url: /rc-follow-ups
          - generic [ref=f2e34]: RC
          - generic [ref=f2e35]: "1"
    - main [ref=f2e36]:
      - generic [ref=f2e37]:
        - generic [ref=f2e39]:
          - generic [ref=f2e40]:
            - generic [ref=f2e41]:
              - generic [ref=f2e42]:
                - link "Back to September End of Season Sale" [ref=f2e43] [cursor=pointer]:
                  - /url: /marketplace/events/50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6?lane=sequential&stay=1
                - paragraph [ref=f2e46]: September End Of Season Sale
              - generic [ref=f2e47]:
                - generic [ref=f2e48]:
                  - button "Like" [ref=f2e49] [cursor=pointer]
                  - button "Dislike" [ref=f2e52] [cursor=pointer]
                - heading "2007 Maruti Suzuki Zen" [level=1] [ref=f2e55]
            - generic [ref=f2e56]:
              - generic [ref=f2e57]:
                - generic [ref=f2e58]:
                  - generic [ref=f2e59]: Open Floor
                  - generic [ref=f2e62]: Live
                  - generic [ref=f2e66]: Other cars
                - generic [ref=f2e67]: 3 open · 4:30:37
              - generic [ref=f2e68]:
                - button "Scroll right" [ref=f2e69] [cursor=pointer]
                - generic [ref=f2e72]:
                  - generic [ref=f2e74]:
                    - generic [ref=f2e75]: Live
                    - generic [ref=f2e80]:
                      - paragraph [ref=f2e81]: 2007 Maruti Suzuki Zen
                      - paragraph [ref=f2e82]: No bids
                  - link [ref=f2e83] [cursor=pointer]:
                    - /url: /marketplace/e6bc0fbf-f481-4d35-9689-dcf54152fb04?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                    - generic [ref=f2e84]:
                      - generic [ref=f2e85]: Live
                      - generic [ref=f2e90]:
                        - paragraph [ref=f2e91]: 2024 Maruti Suzuki Alto K10
                        - paragraph [ref=f2e92]: No bids
                  - link [ref=f2e93] [cursor=pointer]:
                    - /url: /marketplace/668a1788-03bb-45fc-bffa-520aaf190fea?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                    - generic [ref=f2e94]:
                      - generic [ref=f2e95]: Live
                      - generic [ref=f2e100]:
                        - paragraph [ref=f2e101]: 2018 Honda Amaze
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
                - paragraph [ref=f2e119]: 04:30:37
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
                      - paragraph [ref=f2e173]: "2007"
                    - generic [ref=f2e174]:
                      - paragraph [ref=f2e180]: Variant
                      - paragraph [ref=f2e181]: LXI
                    - generic [ref=f2e182]:
                      - paragraph [ref=f2e187]: Fuel
                      - paragraph [ref=f2e188]: Petrol
                    - generic [ref=f2e189]:
                      - paragraph [ref=f2e194]: KM driven
                      - paragraph [ref=f2e195]: 1,17,696
                    - generic [ref=f2e196]:
                      - paragraph [ref=f2e203]: Owner
                      - paragraph [ref=f2e204]: 3rd
                    - generic [ref=f2e205]:
                      - paragraph [ref=f2e210]: RTO
                      - paragraph [ref=f2e211]: KA51
                    - generic [ref=f2e212]:
                      - paragraph [ref=f2e217]: Transmission
                      - paragraph [ref=f2e218]: Manual
              - generic [ref=f2e220]:
                - paragraph [ref=f2e221]: "Quality Score: 498/741 (67.2%)"
                - generic [ref=f2e222]:
                  - generic [ref=f2e223]:
                    - generic [ref=f2e224]:
                      - generic [ref=f2e225]:
                        - heading "Body" [level=4] [ref=f2e226]
                        - paragraph [ref=f2e227]: 22 items
                      - generic [ref=f2e228]: 7.9 / 10
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
                      - button "LHS Fender LHS Fender REPAINTED" [ref=f2e278] [cursor=pointer]:
                        - img "LHS Fender" [ref=f2e280]
                        - generic [ref=f2e286]:
                          - paragraph [ref=f2e287]: LHS Fender
                          - generic "REPAINTED" [ref=f2e289]
                      - button "RHS Fender RHS Fender REPAINTED" [ref=f2e290] [cursor=pointer]:
                        - img "RHS Fender" [ref=f2e292]
                        - generic [ref=f2e298]:
                          - paragraph [ref=f2e299]: RHS Fender
                          - generic "REPAINTED" [ref=f2e301]
                      - button "Windshield Windshield ALL OK" [ref=f2e302] [cursor=pointer]:
                        - img "Windshield" [ref=f2e304]
                        - generic [ref=f2e310]:
                          - paragraph [ref=f2e311]: Windshield
                          - generic "ALL OK" [ref=f2e313]
                      - button "Bonnet/Hood Bonnet/Hood REPAINTED" [ref=f2e314] [cursor=pointer]:
                        - img "Bonnet/Hood" [ref=f2e316]
                        - generic [ref=f2e322]:
                          - paragraph [ref=f2e323]: Bonnet/Hood
                          - generic "REPAINTED" [ref=f2e325]
                      - button "Rear Bumper Rear Bumper ALL OK" [ref=f2e326] [cursor=pointer]:
                        - img "Rear Bumper" [ref=f2e328]
                        - generic [ref=f2e334]:
                          - paragraph [ref=f2e335]: Rear Bumper
                          - generic "ALL OK" [ref=f2e337]
                      - button "Front Bumper Front Bumper DAMAGED" [ref=f2e338] [cursor=pointer]:
                        - img "Front Bumper" [ref=f2e340]
                        - generic [ref=f2e346]:
                          - paragraph [ref=f2e347]: Front Bumper
                          - generic "DAMAGED" [ref=f2e349]
                      - button "LHS Rear Door LHS Rear Door REPAINTED" [ref=f2e350] [cursor=pointer]:
                        - img "LHS Rear Door" [ref=f2e352]
                        - generic [ref=f2e358]:
                          - paragraph [ref=f2e359]: LHS Rear Door
                          - generic "REPAINTED" [ref=f2e361]
                      - button "RHS Rear Door RHS Rear Door REPAINTED" [ref=f2e362] [cursor=pointer]:
                        - img "RHS Rear Door" [ref=f2e364]
                        - generic [ref=f2e370]:
                          - paragraph [ref=f2e371]: RHS Rear Door
                          - generic "REPAINTED" [ref=f2e373]
                      - button "LHS Front Door LHS Front Door REPAINTED" [ref=f2e374] [cursor=pointer]:
                        - img "LHS Front Door" [ref=f2e376]
                        - generic [ref=f2e382]:
                          - paragraph [ref=f2e383]: LHS Front Door
                          - generic "REPAINTED" [ref=f2e385]
                      - button "RHS Front Door RHS Front Door REPAINTED" [ref=f2e386] [cursor=pointer]:
                        - img "RHS Front Door" [ref=f2e388]
                        - generic [ref=f2e394]:
                          - paragraph [ref=f2e395]: RHS Front Door
                          - generic "REPAINTED" [ref=f2e397]
                      - button "REAR DICKEY DOOR REAR DICKEY DOOR ALL OK" [ref=f2e398] [cursor=pointer]:
                        - img "REAR DICKEY DOOR" [ref=f2e400]
                        - generic [ref=f2e406]:
                          - paragraph [ref=f2e407]: REAR DICKEY DOOR
                          - generic "ALL OK" [ref=f2e409]
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
                      - button "LHS Running Border LHS Running Border DENTS AND SCRATCHES" [ref=f2e434] [cursor=pointer]:
                        - img "LHS Running Border" [ref=f2e436]
                        - generic [ref=f2e442]:
                          - paragraph [ref=f2e443]: LHS Running Border
                          - generic "DENTS AND SCRATCHES" [ref=f2e445]
                      - button "RHS Running Border RHS Running Border DENTS AND SCRATCHES" [ref=f2e446] [cursor=pointer]:
                        - img "RHS Running Border" [ref=f2e448]
                        - generic [ref=f2e454]:
                          - paragraph [ref=f2e455]: RHS Running Border
                          - generic "DENTS AND SCRATCHES" [ref=f2e457]
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
                        - heading "Frame" [level=4] [ref=f2e497]
                        - paragraph [ref=f2e498]: 4 items
                      - generic [ref=f2e499]: 5.0 / 10
                    - generic [ref=f2e500]:
                      - button "Apron Apron opt_1787369315196_65ej8x016" [ref=f2e501] [cursor=pointer]:
                        - img "Apron" [ref=f2e503]
                        - generic [ref=f2e509]:
                          - paragraph [ref=f2e510]: Apron
                          - generic "opt_1787369315196_65ej8x016" [ref=f2e512]
                      - button "Doors Doors opt_1787369236847_fj1tq6syb" [ref=f2e513] [cursor=pointer]:
                        - img "Doors" [ref=f2e515]
                        - generic [ref=f2e521]:
                          - paragraph [ref=f2e522]: Doors
                          - generic "opt_1787369236847_fj1tq6syb" [ref=f2e524]
                      - button "Quarter panel Quarter panel opt_1787369281657_hjxmorlho" [ref=f2e525] [cursor=pointer]:
                        - img "Quarter panel" [ref=f2e527]
                        - generic [ref=f2e533]:
                          - paragraph [ref=f2e534]: Quarter panel
                          - generic "opt_1787369281657_hjxmorlho" [ref=f2e536]
                      - button "Running board Running board opt_1787369268080_4mbih7ch9" [ref=f2e537] [cursor=pointer]:
                        - img "Running board" [ref=f2e539]
                        - generic [ref=f2e545]:
                          - paragraph [ref=f2e546]: Running board
                          - generic "opt_1787369268080_4mbih7ch9" [ref=f2e548]
                  - generic [ref=f2e549]:
                    - generic [ref=f2e550]:
                      - generic [ref=f2e551]:
                        - heading "Engine" [level=4] [ref=f2e552]
                        - paragraph [ref=f2e553]: 2 items
                      - generic [ref=f2e554]: 10.0 / 10
                    - generic [ref=f2e555]:
                      - button "Engine Engine ALL OK" [ref=f2e556] [cursor=pointer]:
                        - img "Engine" [ref=f2e558]
                        - generic [ref=f2e564]:
                          - paragraph [ref=f2e565]: Engine
                          - generic "ALL OK" [ref=f2e567]
                      - button "Battery Battery ALL OK" [ref=f2e568] [cursor=pointer]:
                        - img "Battery" [ref=f2e570]
                        - generic [ref=f2e576]:
                          - paragraph [ref=f2e577]: Battery
                          - generic "ALL OK" [ref=f2e579]
                  - generic [ref=f2e580]:
                    - generic [ref=f2e581]:
                      - generic [ref=f2e582]:
                        - heading "Tyres" [level=4] [ref=f2e583]
                        - paragraph [ref=f2e584]: 5 items
                      - generic [ref=f2e585]: 8.6 / 10
                    - generic [ref=f2e586]:
                      - button "Spare Tyre Spare Tyre WORN OUT ONE SIDE" [ref=f2e587] [cursor=pointer]:
                        - img "Spare Tyre" [ref=f2e589]
                        - generic [ref=f2e595]:
                          - paragraph [ref=f2e596]: Spare Tyre
                          - generic "WORN OUT ONE SIDE" [ref=f2e598]
                      - button "LHS Rear Tyre LHS Rear Tyre GOOD" [ref=f2e599] [cursor=pointer]:
                        - img "LHS Rear Tyre" [ref=f2e601]
                        - generic [ref=f2e607]:
                          - paragraph [ref=f2e608]: LHS Rear Tyre
                          - generic "GOOD" [ref=f2e610]
                      - button "RHS Rear Tyre RHS Rear Tyre GOOD" [ref=f2e611] [cursor=pointer]:
                        - img "RHS Rear Tyre" [ref=f2e613]
                        - generic [ref=f2e619]:
                          - paragraph [ref=f2e620]: RHS Rear Tyre
                          - generic "GOOD" [ref=f2e622]
                      - button "LHS Front Tyre LHS Front Tyre GOOD" [ref=f2e623] [cursor=pointer]:
                        - img "LHS Front Tyre" [ref=f2e625]
                        - generic [ref=f2e631]:
                          - paragraph [ref=f2e632]: LHS Front Tyre
                          - generic "GOOD" [ref=f2e634]
                      - button "RHS Front Tyre RHS Front Tyre GOOD" [ref=f2e635] [cursor=pointer]:
                        - img "RHS Front Tyre" [ref=f2e637]
                        - generic [ref=f2e643]:
                          - paragraph [ref=f2e644]: RHS Front Tyre
                          - generic "GOOD" [ref=f2e646]
                  - generic [ref=f2e647]:
                    - generic [ref=f2e648]:
                      - generic [ref=f2e649]:
                        - heading "Interior" [level=4] [ref=f2e650]
                        - paragraph [ref=f2e651]: 2 items
                      - generic [ref=f2e652]: 7.5 / 10
                    - generic [ref=f2e653]:
                      - button "Music System Music System ALL OK" [ref=f2e654] [cursor=pointer]:
                        - img "Music System" [ref=f2e656]
                        - generic [ref=f2e662]:
                          - paragraph [ref=f2e663]: Music System
                          - generic "ALL OK" [ref=f2e665]
                      - button "Power Windows Power Windows TWO POWER WINDOWS AND MANUAL" [ref=f2e666] [cursor=pointer]:
                        - img "Power Windows" [ref=f2e668]
                        - generic [ref=f2e674]:
                          - paragraph [ref=f2e675]: Power Windows
                          - generic "TWO POWER WINDOWS AND MANUAL" [ref=f2e677]
                  - generic [ref=f2e678]:
                    - generic [ref=f2e679]:
                      - generic [ref=f2e680]:
                        - heading "AC & Heater" [level=4] [ref=f2e681]
                        - paragraph [ref=f2e682]: 1 item
                      - generic [ref=f2e683]: 5.0 / 10
                    - button "AC Cooling AC Cooling AVERAGE COOLING" [ref=f2e685] [cursor=pointer]:
                      - img "AC Cooling" [ref=f2e687]
                      - generic [ref=f2e693]:
                        - paragraph [ref=f2e694]: AC Cooling
                        - generic "AVERAGE COOLING" [ref=f2e696]
                  - generic [ref=f2e697]:
                    - generic [ref=f2e698]:
                      - generic [ref=f2e699]:
                        - heading "General" [level=4] [ref=f2e700]
                        - paragraph [ref=f2e701]: 1 item
                      - generic [ref=f2e702]: 5.0 / 10
                    - button "Service History Service History opt_1787369463704_sopk8k4be" [ref=f2e704] [cursor=pointer]:
                      - img "Service History" [ref=f2e706]
                      - generic [ref=f2e712]:
                        - paragraph [ref=f2e713]: Service History
                        - generic "opt_1787369463704_sopk8k4be" [ref=f2e715]
            - generic [ref=f2e716]:
              - generic [ref=f2e717]:
                - generic [ref=f2e719]:
                  - generic [ref=f2e724]:
                    - paragraph [ref=f2e725]: Place a Bid
                    - paragraph [ref=f2e726]: Min ₹ 40,000 · Step ₹ 500
                  - generic [ref=f2e727]: LIVE
                - generic [ref=f2e728]:
                  - generic [ref=f2e729]:
                    - generic [ref=f2e730]:
                      - generic [ref=f2e731]: Your Bid Amount
                      - generic [ref=f2e732]: STEP ₹ 500
                    - generic [ref=f2e733]:
                      - generic [ref=f2e734]: ₹
                      - textbox "40,000" [ref=f2e735]
                    - paragraph [ref=f2e736]: "Min next bid: ₹ 40,000"
                  - generic [ref=f2e737]:
                    - paragraph [ref=f2e738]: Quick Add
                    - generic [ref=f2e740]:
                      - button "Decrease bid" [ref=f2e741] [cursor=pointer]
                      - generic [ref=f2e743]:
                        - button "+500" [ref=f2e744] [cursor=pointer]
                        - button "+1,000" [ref=f2e745] [cursor=pointer]
                        - button "+1,500" [ref=f2e746] [cursor=pointer]
                      - button "Increase bid" [ref=f2e747] [cursor=pointer]
                  - button "Place Bid" [disabled] [ref=f2e750]
              - generic [ref=f2e760]:
                - heading "How to Bid" [level=3] [ref=f2e765]
                - list [ref=f2e766]:
                  - listitem [ref=f2e767]:
                    - generic [ref=f2e768]: "1"
                    - text: "Enter at least ₹ 40,000 (step: ₹ 500)."
                  - listitem [ref=f2e769]:
                    - generic [ref=f2e770]: "2"
                    - text: Use Quick Add chips to increase, then tap Place Bid.
                  - listitem [ref=f2e771]:
                    - generic [ref=f2e772]: "3"
                    - text: Bids cannot be edited or cancelled once placed.
                  - listitem [ref=f2e773]:
                    - generic [ref=f2e774]: "4"
                    - text: "Open Floor: multiple lots open — switch rooms to bid on more."
              - generic [ref=f2e775]:
                - heading "Auction Time" [level=3] [ref=f2e781]
                - generic [ref=f2e783]:
                  - paragraph [ref=f2e784]: Bidding Window
                  - generic [ref=f2e785]: 29 Sept 2026, 3:45 pm→29 Sept 2026, 9:45 pm
        - generic [ref=f2e787]:
          - generic [ref=f2e790]:
            - generic [ref=f2e791]:
              - img "Kalyani Motors" [ref=f2e793]
              - paragraph [ref=f2e794]: True Value · Dealers Platform
              - paragraph [ref=f2e795]: Live auctions, award actions, deals, and RC follow-up — built for verified dealers and partners.
            - generic [ref=f2e796]:
              - generic [ref=f2e797]:
                - paragraph [ref=f2e798]: Navigate
                - list [ref=f2e799]:
                  - listitem [ref=f2e800]:
                    - link "Dashboard" [ref=f2e801] [cursor=pointer]:
                      - /url: /dashboard
                  - listitem [ref=f2e802]:
                    - link "Marketplace" [ref=f2e803] [cursor=pointer]:
                      - /url: /marketplace
                  - listitem [ref=f2e804]:
                    - link "Awards" [ref=f2e805] [cursor=pointer]:
                      - /url: /awards
                  - listitem [ref=f2e806]:
                    - link "Deals" [ref=f2e807] [cursor=pointer]:
                      - /url: /deals
                  - listitem [ref=f2e808]:
                    - link "Referrals" [ref=f2e809] [cursor=pointer]:
                      - /url: /referrals
                  - listitem [ref=f2e810]:
                    - link "RC Follow-up" [ref=f2e811] [cursor=pointer]:
                      - /url: /rc-follow-ups
                  - listitem [ref=f2e812]:
                    - link "Account Balance" [ref=f2e813] [cursor=pointer]:
                      - /url: /account-balance
                  - listitem [ref=f2e814]:
                    - link "Profile" [ref=f2e815] [cursor=pointer]:
                      - /url: /profile
              - generic [ref=f2e816]:
                - paragraph [ref=f2e817]: Support
                - generic [ref=f2e818]:
                  - paragraph [ref=f2e819]: UMS Auto Auction CRM
                  - link [ref=f2e820] [cursor=pointer]:
                    - /url: mailto:kmcrm@kalyanimotors.com
                  - link [ref=f2e825] [cursor=pointer]:
                    - /url: tel:+919590990011
          - generic [ref=f2e830]:
            - paragraph [ref=f2e831]: © 2026 UMS Auto Auction CRM. All rights reserved.
            - navigation [ref=f2e832]:
              - link "Terms" [ref=f2e833] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/terms-and-condition
              - link "Privacy" [ref=f2e834] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/privacy-policy
              - link "About" [ref=f2e835] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/about
              - generic [ref=f2e836]: Bangalore
  - region "Notifications alt+T"
  - alert [ref=f2e837]
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