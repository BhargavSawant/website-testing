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

  223 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 322 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 223 pixels (ratio 0.01 of all image pixels) are different.

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
        - 'link "Active Auctions: 4" [ref=f2e48] [cursor=pointer]':
          - /url: /marketplace
          - generic [ref=f2e49]: "Active Auctions:"
          - generic [ref=f2e50]: "4"
        - 'link "Wins to confirm: 1" [ref=f2e52] [cursor=pointer]':
          - /url: /awards
          - generic [ref=f2e53]: "Wins to confirm:"
          - generic [ref=f2e54]: "1"
        - 'link "Closed deals: 3" [ref=f2e56] [cursor=pointer]':
          - /url: /deals
          - generic [ref=f2e57]: "Closed deals:"
          - generic [ref=f2e58]: "3"
        - 'link "RC Follow ups: 1" [ref=f2e60] [cursor=pointer]':
          - /url: /rc-follow-ups
          - generic [ref=f2e61]: "RC Follow ups:"
          - generic [ref=f2e62]: "1"
    - main [ref=f2e63]:
      - generic [ref=f2e64]:
        - generic [ref=f2e66]:
          - generic [ref=f2e67]:
            - generic [ref=f2e68]:
              - generic [ref=f2e69]:
                - link "Back to September End of Season Sale" [ref=f2e70] [cursor=pointer]:
                  - /url: /marketplace/events/50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6?lane=sequential&stay=1
                - paragraph [ref=f2e73]: September End Of Season Sale
              - generic [ref=f2e74]:
                - generic [ref=f2e75]:
                  - button "Like" [ref=f2e76] [cursor=pointer]
                  - button "Dislike" [ref=f2e79] [cursor=pointer]
                - heading "2007 Maruti Suzuki Zen" [level=1] [ref=f2e82]
            - generic [ref=f2e83]:
              - generic [ref=f2e84]:
                - generic [ref=f2e85]:
                  - generic [ref=f2e86]: Open Floor
                  - generic [ref=f2e89]: Live
                  - generic [ref=f2e93]: Other cars
                - generic [ref=f2e94]: 3 open · 4:30:34
              - generic [ref=f2e96]:
                - generic [ref=f2e98]:
                  - generic [ref=f2e99]: Live
                  - generic [ref=f2e104]:
                    - paragraph [ref=f2e105]: 2007 Maruti Suzuki Zen
                    - paragraph [ref=f2e106]: No bids
                - link [ref=f2e107] [cursor=pointer]:
                  - /url: /marketplace/e6bc0fbf-f481-4d35-9689-dcf54152fb04?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                  - generic [ref=f2e108]:
                    - generic [ref=f2e109]: Live
                    - generic [ref=f2e114]:
                      - paragraph [ref=f2e115]: 2024 Maruti Suzuki Alto K10
                      - paragraph [ref=f2e116]: No bids
                - link [ref=f2e117] [cursor=pointer]:
                  - /url: /marketplace/668a1788-03bb-45fc-bffa-520aaf190fea?eventId=50a24fe7-ae1b-4a75-8bd4-3062e3e3c1d6&lane=parallel
                  - generic [ref=f2e118]:
                    - generic [ref=f2e119]: Live
                    - generic [ref=f2e124]:
                      - paragraph [ref=f2e125]: 2018 Honda Amaze
                      - paragraph [ref=f2e126]: No bids
          - generic [ref=f2e128]:
            - generic [ref=f2e129]:
              - generic [ref=f2e130]:
                - generic [ref=f2e131]: Live
                - generic [ref=f2e134]: Live
              - paragraph [ref=f2e136]: 0 bids·1 in room·1 watching
            - generic [ref=f2e137]:
              - generic [ref=f2e138]:
                - generic [ref=f2e139]: Time remaining
                - paragraph [ref=f2e143]: 04:30:34
              - generic [ref=f2e144]:
                - generic [ref=f2e145]: Highest bid
                - generic [ref=f2e149]: —
                - generic [ref=f2e150]: No leader yet
          - generic [ref=f2e152]:
            - generic [ref=f2e155]:
              - generic [ref=f2e156]:
                - generic [ref=f2e157]:
                  - generic [ref=f2e158] [cursor=pointer]:
                    - img "Vehicle photo" [ref=f2e160]
                    - button "Previous" [ref=f2e161]
                    - button "Next" [ref=f2e164]
                    - button "Zoom" [ref=f2e167]
                    - generic [ref=f2e172]:
                      - button [ref=f2e173]
                      - button [ref=f2e174]
                      - button [ref=f2e175]
                      - button [ref=f2e176]
                      - button [ref=f2e177]
                      - button [ref=f2e178]
                      - button [ref=f2e179]
                      - button [ref=f2e180]
                      - generic [ref=f2e181]: 1/8
                  - generic [ref=f2e182]:
                    - button [ref=f2e183] [cursor=pointer]
                    - button [ref=f2e184] [cursor=pointer]
                    - button [ref=f2e185] [cursor=pointer]
                    - button [ref=f2e186] [cursor=pointer]
                    - button [ref=f2e187] [cursor=pointer]
                    - button [ref=f2e188] [cursor=pointer]
                - generic [ref=f2e189]:
                  - paragraph [ref=f2e190]: Specs
                  - generic [ref=f2e191]:
                    - generic [ref=f2e192]:
                      - paragraph [ref=f2e196]: Year
                      - paragraph [ref=f2e197]: "2007"
                    - generic [ref=f2e198]:
                      - paragraph [ref=f2e204]: Variant
                      - paragraph [ref=f2e205]: LXI
                    - generic [ref=f2e206]:
                      - paragraph [ref=f2e211]: Fuel
                      - paragraph [ref=f2e212]: Petrol
                    - generic [ref=f2e213]:
                      - paragraph [ref=f2e218]: KM driven
                      - paragraph [ref=f2e219]: 1,17,696
                    - generic [ref=f2e220]:
                      - paragraph [ref=f2e227]: Owner
                      - paragraph [ref=f2e228]: 3rd
                    - generic [ref=f2e229]:
                      - paragraph [ref=f2e234]: RTO
                      - paragraph [ref=f2e235]: KA51
                    - generic [ref=f2e236]:
                      - paragraph [ref=f2e241]: Transmission
                      - paragraph [ref=f2e242]: Manual
              - generic [ref=f2e244]:
                - paragraph [ref=f2e245]: "Quality Score: 498/741 (67.2%)"
                - generic [ref=f2e246]:
                  - generic [ref=f2e247]:
                    - generic [ref=f2e248]:
                      - generic [ref=f2e249]:
                        - heading "Body" [level=4] [ref=f2e250]
                        - paragraph [ref=f2e251]: 22 items
                      - generic [ref=f2e252]: 7.9 / 10
                    - generic [ref=f2e253]:
                      - button "Roof Roof ALL OK" [ref=f2e254] [cursor=pointer]:
                        - img "Roof" [ref=f2e256]
                        - generic [ref=f2e262]:
                          - paragraph [ref=f2e263]: Roof
                          - generic "ALL OK" [ref=f2e265]
                      - button "Apron Apron ALL OK" [ref=f2e266] [cursor=pointer]:
                        - img "Apron" [ref=f2e268]
                        - generic [ref=f2e274]:
                          - paragraph [ref=f2e275]: Apron
                          - generic "ALL OK" [ref=f2e277]
                      - button "Chassis Chassis ALL OK" [ref=f2e278] [cursor=pointer]:
                        - img "Chassis" [ref=f2e280]
                        - generic [ref=f2e286]:
                          - paragraph [ref=f2e287]: Chassis
                          - generic "ALL OK" [ref=f2e289]
                      - button "Boot Floor Boot Floor ALL OK" [ref=f2e290] [cursor=pointer]:
                        - img "Boot Floor" [ref=f2e292]
                        - generic [ref=f2e298]:
                          - paragraph [ref=f2e299]: Boot Floor
                          - generic "ALL OK" [ref=f2e301]
                      - button "LHS Fender LHS Fender REPAINTED" [ref=f2e302] [cursor=pointer]:
                        - img "LHS Fender" [ref=f2e304]
                        - generic [ref=f2e310]:
                          - paragraph [ref=f2e311]: LHS Fender
                          - generic "REPAINTED" [ref=f2e313]
                      - button "RHS Fender RHS Fender REPAINTED" [ref=f2e314] [cursor=pointer]:
                        - img "RHS Fender" [ref=f2e316]
                        - generic [ref=f2e322]:
                          - paragraph [ref=f2e323]: RHS Fender
                          - generic "REPAINTED" [ref=f2e325]
                      - button "Windshield Windshield ALL OK" [ref=f2e326] [cursor=pointer]:
                        - img "Windshield" [ref=f2e328]
                        - generic [ref=f2e334]:
                          - paragraph [ref=f2e335]: Windshield
                          - generic "ALL OK" [ref=f2e337]
                      - button "Bonnet/Hood Bonnet/Hood REPAINTED" [ref=f2e338] [cursor=pointer]:
                        - img "Bonnet/Hood" [ref=f2e340]
                        - generic [ref=f2e346]:
                          - paragraph [ref=f2e347]: Bonnet/Hood
                          - generic "REPAINTED" [ref=f2e349]
                      - button "Rear Bumper Rear Bumper ALL OK" [ref=f2e350] [cursor=pointer]:
                        - img "Rear Bumper" [ref=f2e352]
                        - generic [ref=f2e358]:
                          - paragraph [ref=f2e359]: Rear Bumper
                          - generic "ALL OK" [ref=f2e361]
                      - button "Front Bumper Front Bumper DAMAGED" [ref=f2e362] [cursor=pointer]:
                        - img "Front Bumper" [ref=f2e364]
                        - generic [ref=f2e370]:
                          - paragraph [ref=f2e371]: Front Bumper
                          - generic "DAMAGED" [ref=f2e373]
                      - button "LHS Rear Door LHS Rear Door REPAINTED" [ref=f2e374] [cursor=pointer]:
                        - img "LHS Rear Door" [ref=f2e376]
                        - generic [ref=f2e382]:
                          - paragraph [ref=f2e383]: LHS Rear Door
                          - generic "REPAINTED" [ref=f2e385]
                      - button "RHS Rear Door RHS Rear Door REPAINTED" [ref=f2e386] [cursor=pointer]:
                        - img "RHS Rear Door" [ref=f2e388]
                        - generic [ref=f2e394]:
                          - paragraph [ref=f2e395]: RHS Rear Door
                          - generic "REPAINTED" [ref=f2e397]
                      - button "LHS Front Door LHS Front Door REPAINTED" [ref=f2e398] [cursor=pointer]:
                        - img "LHS Front Door" [ref=f2e400]
                        - generic [ref=f2e406]:
                          - paragraph [ref=f2e407]: LHS Front Door
                          - generic "REPAINTED" [ref=f2e409]
                      - button "RHS Front Door RHS Front Door REPAINTED" [ref=f2e410] [cursor=pointer]:
                        - img "RHS Front Door" [ref=f2e412]
                        - generic [ref=f2e418]:
                          - paragraph [ref=f2e419]: RHS Front Door
                          - generic "REPAINTED" [ref=f2e421]
                      - button "REAR DICKEY DOOR REAR DICKEY DOOR ALL OK" [ref=f2e422] [cursor=pointer]:
                        - img "REAR DICKEY DOOR" [ref=f2e424]
                        - generic [ref=f2e430]:
                          - paragraph [ref=f2e431]: REAR DICKEY DOOR
                          - generic "ALL OK" [ref=f2e433]
                      - button "LHS Quarter Panel LHS Quarter Panel ALL OK" [ref=f2e434] [cursor=pointer]:
                        - img "LHS Quarter Panel" [ref=f2e436]
                        - generic [ref=f2e442]:
                          - paragraph [ref=f2e443]: LHS Quarter Panel
                          - generic "ALL OK" [ref=f2e445]
                      - button "RHS Quarter Panel RHS Quarter Panel REPAINTED" [ref=f2e446] [cursor=pointer]:
                        - img "RHS Quarter Panel" [ref=f2e448]
                        - generic [ref=f2e454]:
                          - paragraph [ref=f2e455]: RHS Quarter Panel
                          - generic "REPAINTED" [ref=f2e457]
                      - button "LHS Running Border LHS Running Border DENTS AND SCRATCHES" [ref=f2e458] [cursor=pointer]:
                        - img "LHS Running Border" [ref=f2e460]
                        - generic [ref=f2e466]:
                          - paragraph [ref=f2e467]: LHS Running Border
                          - generic "DENTS AND SCRATCHES" [ref=f2e469]
                      - button "RHS Running Border RHS Running Border DENTS AND SCRATCHES" [ref=f2e470] [cursor=pointer]:
                        - img "RHS Running Border" [ref=f2e472]
                        - generic [ref=f2e478]:
                          - paragraph [ref=f2e479]: RHS Running Border
                          - generic "DENTS AND SCRATCHES" [ref=f2e481]
                      - button "LHS FRAME A&B PILLAR LHS FRAME A&B PILLAR ALL OK" [ref=f2e482] [cursor=pointer]:
                        - img "LHS FRAME A&B PILLAR" [ref=f2e484]
                        - generic [ref=f2e490]:
                          - paragraph [ref=f2e491]: LHS FRAME A&B PILLAR
                          - generic "ALL OK" [ref=f2e493]
                      - button "RHS FRAME A & B PILLAR RHS FRAME A & B PILLAR ALL OK" [ref=f2e494] [cursor=pointer]:
                        - img "RHS FRAME A & B PILLAR" [ref=f2e496]
                        - generic [ref=f2e502]:
                          - paragraph [ref=f2e503]: RHS FRAME A & B PILLAR
                          - generic "ALL OK" [ref=f2e505]
                      - button "Dicky Frame / Boot Frame Dicky Frame / Boot Frame ALL OK" [ref=f2e506] [cursor=pointer]:
                        - img "Dicky Frame / Boot Frame" [ref=f2e508]
                        - generic [ref=f2e514]:
                          - paragraph [ref=f2e515]: Dicky Frame / Boot Frame
                          - generic "ALL OK" [ref=f2e517]
                  - generic [ref=f2e518]:
                    - generic [ref=f2e519]:
                      - generic [ref=f2e520]:
                        - heading "Frame" [level=4] [ref=f2e521]
                        - paragraph [ref=f2e522]: 4 items
                      - generic [ref=f2e523]: 5.0 / 10
                    - generic [ref=f2e524]:
                      - button "Apron Apron opt_1787369315196_65ej8x016" [ref=f2e525] [cursor=pointer]:
                        - img "Apron" [ref=f2e527]
                        - generic [ref=f2e533]:
                          - paragraph [ref=f2e534]: Apron
                          - generic "opt_1787369315196_65ej8x016" [ref=f2e536]
                      - button "Doors Doors opt_1787369236847_fj1tq6syb" [ref=f2e537] [cursor=pointer]:
                        - img "Doors" [ref=f2e539]
                        - generic [ref=f2e545]:
                          - paragraph [ref=f2e546]: Doors
                          - generic "opt_1787369236847_fj1tq6syb" [ref=f2e548]
                      - button "Quarter panel Quarter panel opt_1787369281657_hjxmorlho" [ref=f2e549] [cursor=pointer]:
                        - img "Quarter panel" [ref=f2e551]
                        - generic [ref=f2e557]:
                          - paragraph [ref=f2e558]: Quarter panel
                          - generic "opt_1787369281657_hjxmorlho" [ref=f2e560]
                      - button "Running board Running board opt_1787369268080_4mbih7ch9" [ref=f2e561] [cursor=pointer]:
                        - img "Running board" [ref=f2e563]
                        - generic [ref=f2e569]:
                          - paragraph [ref=f2e570]: Running board
                          - generic "opt_1787369268080_4mbih7ch9" [ref=f2e572]
                  - generic [ref=f2e573]:
                    - generic [ref=f2e574]:
                      - generic [ref=f2e575]:
                        - heading "Engine" [level=4] [ref=f2e576]
                        - paragraph [ref=f2e577]: 2 items
                      - generic [ref=f2e578]: 10.0 / 10
                    - generic [ref=f2e579]:
                      - button "Engine Engine ALL OK" [ref=f2e580] [cursor=pointer]:
                        - img "Engine" [ref=f2e582]
                        - generic [ref=f2e588]:
                          - paragraph [ref=f2e589]: Engine
                          - generic "ALL OK" [ref=f2e591]
                      - button "Battery Battery ALL OK" [ref=f2e592] [cursor=pointer]:
                        - img "Battery" [ref=f2e594]
                        - generic [ref=f2e600]:
                          - paragraph [ref=f2e601]: Battery
                          - generic "ALL OK" [ref=f2e603]
                  - generic [ref=f2e604]:
                    - generic [ref=f2e605]:
                      - generic [ref=f2e606]:
                        - heading "Tyres" [level=4] [ref=f2e607]
                        - paragraph [ref=f2e608]: 5 items
                      - generic [ref=f2e609]: 8.6 / 10
                    - generic [ref=f2e610]:
                      - button "Spare Tyre Spare Tyre WORN OUT ONE SIDE" [ref=f2e611] [cursor=pointer]:
                        - img "Spare Tyre" [ref=f2e613]
                        - generic [ref=f2e619]:
                          - paragraph [ref=f2e620]: Spare Tyre
                          - generic "WORN OUT ONE SIDE" [ref=f2e622]
                      - button "LHS Rear Tyre LHS Rear Tyre GOOD" [ref=f2e623] [cursor=pointer]:
                        - img "LHS Rear Tyre" [ref=f2e625]
                        - generic [ref=f2e631]:
                          - paragraph [ref=f2e632]: LHS Rear Tyre
                          - generic "GOOD" [ref=f2e634]
                      - button "RHS Rear Tyre RHS Rear Tyre GOOD" [ref=f2e635] [cursor=pointer]:
                        - img "RHS Rear Tyre" [ref=f2e637]
                        - generic [ref=f2e643]:
                          - paragraph [ref=f2e644]: RHS Rear Tyre
                          - generic "GOOD" [ref=f2e646]
                      - button "LHS Front Tyre LHS Front Tyre GOOD" [ref=f2e647] [cursor=pointer]:
                        - img "LHS Front Tyre" [ref=f2e649]
                        - generic [ref=f2e655]:
                          - paragraph [ref=f2e656]: LHS Front Tyre
                          - generic "GOOD" [ref=f2e658]
                      - button "RHS Front Tyre RHS Front Tyre GOOD" [ref=f2e659] [cursor=pointer]:
                        - img "RHS Front Tyre" [ref=f2e661]
                        - generic [ref=f2e667]:
                          - paragraph [ref=f2e668]: RHS Front Tyre
                          - generic "GOOD" [ref=f2e670]
                  - generic [ref=f2e671]:
                    - generic [ref=f2e672]:
                      - generic [ref=f2e673]:
                        - heading "Interior" [level=4] [ref=f2e674]
                        - paragraph [ref=f2e675]: 2 items
                      - generic [ref=f2e676]: 7.5 / 10
                    - generic [ref=f2e677]:
                      - button "Music System Music System ALL OK" [ref=f2e678] [cursor=pointer]:
                        - img "Music System" [ref=f2e680]
                        - generic [ref=f2e686]:
                          - paragraph [ref=f2e687]: Music System
                          - generic "ALL OK" [ref=f2e689]
                      - button "Power Windows Power Windows TWO POWER WINDOWS AND MANUAL" [ref=f2e690] [cursor=pointer]:
                        - img "Power Windows" [ref=f2e692]
                        - generic [ref=f2e698]:
                          - paragraph [ref=f2e699]: Power Windows
                          - generic "TWO POWER WINDOWS AND MANUAL" [ref=f2e701]
                  - generic [ref=f2e702]:
                    - generic [ref=f2e703]:
                      - generic [ref=f2e704]:
                        - heading "AC & Heater" [level=4] [ref=f2e705]
                        - paragraph [ref=f2e706]: 1 item
                      - generic [ref=f2e707]: 5.0 / 10
                    - button "AC Cooling AC Cooling AVERAGE COOLING" [ref=f2e709] [cursor=pointer]:
                      - img "AC Cooling" [ref=f2e711]
                      - generic [ref=f2e717]:
                        - paragraph [ref=f2e718]: AC Cooling
                        - generic "AVERAGE COOLING" [ref=f2e720]
                  - generic [ref=f2e721]:
                    - generic [ref=f2e722]:
                      - generic [ref=f2e723]:
                        - heading "General" [level=4] [ref=f2e724]
                        - paragraph [ref=f2e725]: 1 item
                      - generic [ref=f2e726]: 5.0 / 10
                    - button "Service History Service History opt_1787369463704_sopk8k4be" [ref=f2e728] [cursor=pointer]:
                      - img "Service History" [ref=f2e730]
                      - generic [ref=f2e736]:
                        - paragraph [ref=f2e737]: Service History
                        - generic "opt_1787369463704_sopk8k4be" [ref=f2e739]
            - generic [ref=f2e740]:
              - generic [ref=f2e741]:
                - generic [ref=f2e743]:
                  - generic [ref=f2e748]:
                    - paragraph [ref=f2e749]: Place a Bid
                    - paragraph [ref=f2e750]: Min ₹ 40,000 · Step ₹ 500
                  - generic [ref=f2e751]: LIVE
                - generic [ref=f2e752]:
                  - generic [ref=f2e753]:
                    - generic [ref=f2e754]:
                      - generic [ref=f2e755]: Your Bid Amount
                      - generic [ref=f2e756]: STEP ₹ 500
                    - generic [ref=f2e757]:
                      - generic [ref=f2e758]: ₹
                      - textbox "40,000" [ref=f2e759]
                    - paragraph [ref=f2e760]: "Min next bid: ₹ 40,000"
                  - generic [ref=f2e761]:
                    - paragraph [ref=f2e762]: Quick Add
                    - generic [ref=f2e764]:
                      - button "Decrease bid" [ref=f2e765] [cursor=pointer]
                      - generic [ref=f2e767]:
                        - button "+500" [ref=f2e768] [cursor=pointer]
                        - button "+1,000" [ref=f2e769] [cursor=pointer]
                        - button "+1,500" [ref=f2e770] [cursor=pointer]
                      - button "Increase bid" [ref=f2e771] [cursor=pointer]
                  - button "Place Bid" [disabled] [ref=f2e774]
              - generic [ref=f2e784]:
                - heading "How to Bid" [level=3] [ref=f2e789]
                - list [ref=f2e790]:
                  - listitem [ref=f2e791]:
                    - generic [ref=f2e792]: "1"
                    - text: "Enter at least ₹ 40,000 (step: ₹ 500)."
                  - listitem [ref=f2e793]:
                    - generic [ref=f2e794]: "2"
                    - text: Use Quick Add chips to increase, then tap Place Bid.
                  - listitem [ref=f2e795]:
                    - generic [ref=f2e796]: "3"
                    - text: Bids cannot be edited or cancelled once placed.
                  - listitem [ref=f2e797]:
                    - generic [ref=f2e798]: "4"
                    - text: "Open Floor: multiple lots open — switch rooms to bid on more."
              - generic [ref=f2e799]:
                - heading "Auction Time" [level=3] [ref=f2e805]
                - generic [ref=f2e807]:
                  - paragraph [ref=f2e808]: Bidding Window
                  - generic [ref=f2e809]: 29 Sept 2026, 3:45 pm→29 Sept 2026, 9:45 pm
        - generic [ref=f2e811]:
          - generic [ref=f2e814]:
            - generic [ref=f2e815]:
              - img "Kalyani Motors" [ref=f2e817]
              - paragraph [ref=f2e818]: True Value · Dealers Platform
              - paragraph [ref=f2e819]: Live auctions, award actions, deals, and RC follow-up — built for verified dealers and partners.
            - generic [ref=f2e820]:
              - generic [ref=f2e821]:
                - paragraph [ref=f2e822]: Navigate
                - list [ref=f2e823]:
                  - listitem [ref=f2e824]:
                    - link "Dashboard" [ref=f2e825] [cursor=pointer]:
                      - /url: /dashboard
                  - listitem [ref=f2e826]:
                    - link "Marketplace" [ref=f2e827] [cursor=pointer]:
                      - /url: /marketplace
                  - listitem [ref=f2e828]:
                    - link "Awards" [ref=f2e829] [cursor=pointer]:
                      - /url: /awards
                  - listitem [ref=f2e830]:
                    - link "Deals" [ref=f2e831] [cursor=pointer]:
                      - /url: /deals
                  - listitem [ref=f2e832]:
                    - link "Referrals" [ref=f2e833] [cursor=pointer]:
                      - /url: /referrals
                  - listitem [ref=f2e834]:
                    - link "RC Follow-up" [ref=f2e835] [cursor=pointer]:
                      - /url: /rc-follow-ups
                  - listitem [ref=f2e836]:
                    - link "Account Balance" [ref=f2e837] [cursor=pointer]:
                      - /url: /account-balance
                  - listitem [ref=f2e838]:
                    - link "Profile" [ref=f2e839] [cursor=pointer]:
                      - /url: /profile
              - generic [ref=f2e840]:
                - paragraph [ref=f2e841]: Support
                - generic [ref=f2e842]:
                  - paragraph [ref=f2e843]: UMS Auto Auction CRM
                  - link [ref=f2e844] [cursor=pointer]:
                    - /url: mailto:kmcrm@kalyanimotors.com
                  - link [ref=f2e849] [cursor=pointer]:
                    - /url: tel:+919590990011
          - generic [ref=f2e854]:
            - paragraph [ref=f2e855]: © 2026 UMS Auto Auction CRM. All rights reserved.
            - navigation [ref=f2e856]:
              - link "Terms" [ref=f2e857] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/terms-and-condition
              - link "Privacy" [ref=f2e858] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/privacy-policy
              - link "About" [ref=f2e859] [cursor=pointer]:
                - /url: https://km-dealer-privacy-policy.kalyanicrm.com/about
              - generic [ref=f2e860]: Bangalore
  - region "Notifications alt+T"
  - alert [ref=f2e861]
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