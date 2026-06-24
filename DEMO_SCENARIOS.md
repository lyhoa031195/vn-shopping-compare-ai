# Demo Scenarios

These scenarios are designed for the current Purchase Advisor AI MVP: a frontend-only mock decision advisor that accepts a product/purchase name, platform, category, budget, seller/provider, and listing notes, then returns a buy/compare/wait/avoid-style recommendation with risks, checklist items, seller/provider questions, and comparison factors.

> Important: The MVP does not verify live marketplace data, seller identity, prices, warranties, reviews, subscriptions, or product condition. These scenarios are for product demos, UX validation, and manual QA of the current prototype.

## 1. Used iPhone for a student upgrade

**User goal**
- Decide whether to buy a used iPhone as an affordable daily phone upgrade.

**Input data**
- Product: Used iPhone 13 128GB
- Platform: Facebook Marketplace
- Category: Used Electronics
- Budget: 9,000,000 VND
- Seller: Minh Nguyen
- Notes: Seller says battery health is 87%, Face ID works, no iCloud lock, minor scratches, meet-up available in District 1, no official warranty.

**Expected recommendation**
- **Compare / cautious buy only after inspection.** The product has enough detail to look promising, but the category and platform require in-person verification, serial checks, battery checks, and lock checks before payment.

**Risks**
- Hidden repair history, weak battery, replaced parts, iCloud lock, or carrier lock.
- No official warranty or limited recourse after cash payment.
- Marketplace pressure tactics may rush the buyer before proper testing.

**Checklist items**
- Confirm IMEI/serial, iCloud status, Face ID, cameras, speakers, charging, and battery health.
- Compare at least 2-3 similar iPhone 13 listings with similar storage and condition.
- Meet in a safe public place and test with the buyer's SIM card.
- Save screenshots of the listing, seller chat, agreed price, and payment proof.

## 2. Refurbished laptop for remote work

**User goal**
- Decide whether a refurbished ThinkPad is reliable enough for remote office work.

**Input data**
- Product: Refurbished Lenovo ThinkPad T480
- Platform: Shopee
- Category: Used Electronics
- Budget: 5,500,000 VND
- Seller: Laptop Renew Store
- Notes: Listing claims Core i5, 16GB RAM, 512GB SSD, 6-month shop warranty, 4.8-star store rating, many sales, optional battery replacement.

**Expected recommendation**
- **Compare.** The shop warranty and seller information are positive, but the buyer should compare battery condition, warranty scope, return policy, and alternative refurbished models.

**Risks**
- Battery wear, keyboard wear, screen issues, replacement parts, or thermal problems.
- Warranty may exclude battery, ports, screen, or accidental failures.
- Specs may vary from the exact unit shipped.

**Checklist items**
- Ask for actual photos and battery cycle/health information.
- Confirm the warranty covers motherboard, SSD, RAM, display, keyboard, and charger.
- Compare against another refurbished business laptop and one newer low-cost laptop.
- Save listing, warranty terms, seller messages, and unboxing evidence.

## 3. Gaming GPU upgrade

**User goal**
- Decide whether to buy a secondhand graphics card for a gaming PC.

**Input data**
- Product: Used RTX 3060 Ti
- Platform: Facebook Marketplace
- Category: Computer Parts
- Budget: 6,800,000 VND
- Seller: PC Parts HCM
- Notes: Seller says card was used for gaming only, still has box, 1 week personal warranty, benchmark video available, no official invoice.

**Expected recommendation**
- **Wait / compare.** The lack of official invoice and short warranty make this risky unless benchmarks, temperatures, serial details, and return terms are verified.

**Risks**
- Mining wear, overheating, fan noise, artifacting, or modified BIOS.
- Compatibility issues with the buyer's PSU, case, motherboard, or monitor.
- Personal warranty may be difficult to enforce.

**Checklist items**
- Verify PSU wattage, case clearance, power connectors, and monitor needs.
- Ask for timestamped benchmark video, temperatures, fan behavior, and serial number.
- Compare price against used RTX 3060, RTX 3070, and new lower-end alternatives.
- Test the card before paying if possible.

## 4. RAM upgrade for an old desktop

**User goal**
- Decide whether a cheap RAM kit is compatible with an existing desktop.

**Input data**
- Product: 16GB DDR4 RAM kit
- Platform: Lazada
- Category: Computer Parts
- Budget: 900,000 VND
- Seller: Tech Memory Official
- Notes: Listing says 2x8GB DDR4 3200MHz, lifetime warranty, compatible with Intel and AMD, but user has an older H110 motherboard.

**Expected recommendation**
- **Compare / verify compatibility first.** The product may be good value, but motherboard and CPU memory limits must be checked before buying.

**Risks**
- H110 boards may not run at advertised speed and may have capacity or compatibility limitations.
- Warranty may not cover buyer compatibility mistakes.
- Mixed RAM configurations can cause instability.

**Checklist items**
- Check motherboard memory support list, maximum capacity, and supported speeds.
- Confirm whether the kit is returnable if incompatible.
- Compare with DDR4 2133/2400MHz kits if the board cannot use 3200MHz.
- Save compatibility screenshots and seller confirmation.

## 5. Budget Android phone from an official store

**User goal**
- Decide whether to buy a new budget Android phone for a parent.

**Input data**
- Product: Samsung Galaxy A15
- Platform: Tiki
- Category: Phone Upgrade
- Budget: 4,500,000 VND
- Seller: Tiki Trading
- Notes: Official-looking listing, new device, 12-month warranty, suitable for calls, Zalo, YouTube, banking apps, and casual photos.

**Expected recommendation**
- **Buy / compare one alternative.** The official seller and warranty reduce risk, but the user should compare final price, warranty, storage, and one competing model.

**Risks**
- Insufficient storage or RAM for long-term use.
- Warranty terms may depend on seller status and invoice.
- Voucher/shipping changes can alter final value.

**Checklist items**
- Confirm storage/RAM variant and warranty provider.
- Compare final checkout price against one Shopee Mall/Lazada Mall listing.
- Check return window, invoice availability, and delivery inspection rules.
- Save product page and order confirmation.

## 6. Phone upgrade from a livestream deal

**User goal**
- Decide whether to buy a discounted phone during a TikTok Shop livestream.

**Input data**
- Product: Redmi Note 13 Pro
- Platform: TikTok Shop
- Category: Phone Upgrade
- Budget: 6,000,000 VND
- Seller: Flash Deal Mobile
- Notes: Livestream host claims limited vouchers, free case, 12-month warranty, and only 10 units left; reviews are mixed.

**Expected recommendation**
- **Wait / compare.** The buyer should not rush because urgency, mixed reviews, and voucher-driven pricing may hide weak terms.

**Risks**
- Pressure to buy quickly without checking warranty and seller legitimacy.
- Final price may change after vouchers or shipping.
- Bundle claims may be unclear or missing from the official listing.

**Checklist items**
- Check whether the seller is official or authorized.
- Confirm warranty, return window, invoice, storage variant, and included gifts in writing.
- Compare the final checkout price with Shopee, Lazada, and Tiki.
- Screenshot livestream claims and product listing before payment.

## 7. Monthly design software subscription

**User goal**
- Decide whether to subscribe to a design tool for a short client project.

**Input data**
- Product: Canva Pro monthly plan
- Platform: Other
- Category: Software Subscription
- Budget: 300,000 VND/month
- Seller: Canva website
- Notes: Needed for one month to create social media posts and brand templates for a client; user may not need it after delivery.

**Expected recommendation**
- **Buy for one month / set cancellation reminder.** The recurring cost is acceptable if usage is immediate and cancellation is easy.

**Risks**
- Subscription may continue after the project ends.
- Team/client access and asset ownership may be misunderstood.
- Some templates or assets may have licensing limits.

**Checklist items**
- Confirm monthly price, renewal date, cancellation steps, and invoice needs.
- Verify commercial usage rights for templates/assets.
- Export client deliverables before canceling.
- Add a calendar reminder before renewal.

## 8. Annual productivity app subscription

**User goal**
- Decide whether to pay annually for a productivity app after a trial.

**Input data**
- Product: Notion Plus annual plan
- Platform: Other
- Category: Software Subscription
- Budget: 2,500,000 VND/year
- Seller: Notion
- Notes: User uses Notion for personal planning and a small freelance workspace, but client collaboration is occasional.

**Expected recommendation**
- **Compare / consider monthly first.** Annual billing may be premature if usage is inconsistent or collaboration needs are unclear.

**Risks**
- Paying for a year when free or monthly plan is enough.
- Workspace/member billing confusion can increase cost.
- Export/migration friction if the user later changes tools.

**Checklist items**
- Compare free, monthly, and annual plans based on actual usage.
- Check member billing, guest access, upload limits, and export options.
- Identify one alternative such as Google Docs, Trello, or ClickUp.
- Review after 30 days of real usage before annual commitment.

## 9. Online coding bootcamp course

**User goal**
- Decide whether to buy a discounted coding course to switch careers.

**Input data**
- Product: Full-stack web development course
- Platform: Other
- Category: Online Course
- Budget: 3,000,000 VND
- Seller: Code Career Academy
- Notes: Landing page promises job-ready skills in 12 weeks, mentor support, portfolio projects, recorded lessons, and a limited-time 60% discount.

**Expected recommendation**
- **Wait / verify outcomes.** The course may be useful, but job promises and discount urgency require proof of curriculum quality, mentor access, refund terms, and student outcomes.

**Risks**
- Overstated job outcomes or vague mentor support.
- Outdated content or shallow projects.
- Refund policy may be restrictive after purchase.

**Checklist items**
- Ask for syllabus, instructor credentials, project examples, and mentor schedule.
- Verify refund terms and access duration.
- Compare with free resources and one reputable paid alternative.
- Contact past students if possible.

## 10. English learning app subscription

**User goal**
- Decide whether to subscribe to an English learning app for exam preparation.

**Input data**
- Product: IELTS practice app premium plan
- Platform: TikTok Shop
- Category: Online Course
- Budget: 1,200,000 VND
- Seller: IELTS Fast Prep
- Notes: Seller advertises AI speaking score, essay feedback, mock tests, and lifetime access; reviews mention delayed account activation.

**Expected recommendation**
- **Compare / avoid if activation terms are unclear.** Lifetime access and AI scoring claims need verification before payment.

**Risks**
- Account activation delays or unofficial resold access.
- AI scoring may not match real examiner feedback.
- Lifetime access may be limited by hidden terms.

**Checklist items**
- Confirm whether access is official, transferable, and activated under the buyer's email.
- Ask for refund policy if activation fails.
- Compare with official app pricing and reputable test prep providers.
- Save screenshots of lifetime-access and AI-scoring claims.

## 11. Baby stroller from a marketplace seller

**User goal**
- Decide whether to buy a discounted stroller for a newborn.

**Input data**
- Product: Foldable baby stroller
- Platform: Shopee
- Category: Other Purchase
- Budget: 1,800,000 VND
- Seller: Baby Home VN
- Notes: Listing shows many photos, compact fold, 5-point harness, free rain cover, and 7-day return; user is concerned about safety and durability.

**Expected recommendation**
- **Compare.** Safety-related purchases need careful review of build quality, return terms, and credible reviews before buying.

**Risks**
- Weak frame, unreliable brakes, poor harness quality, or misleading product photos.
- Return shipping may be difficult for bulky items.
- Reviews may not reflect long-term durability.

**Checklist items**
- Verify weight limit, brake design, harness, wheel quality, and folded dimensions.
- Read low-star reviews and photo reviews.
- Compare with one known retail-store model.
- Confirm return process, shipping cost, and warranty terms.

## 12. Kitchen appliance during a monthly sale

**User goal**
- Decide whether to buy an air fryer during a big marketplace sale.

**Input data**
- Product: Philips 4.1L air fryer
- Platform: Lazada
- Category: Other Purchase
- Budget: 2,400,000 VND
- Seller: Philips Official Store
- Notes: Official store, sale voucher, 2-year warranty, free shipping, but final checkout price changes depending on voucher availability.

**Expected recommendation**
- **Buy if final price and official warranty are confirmed.** Official seller and warranty lower risk, but checkout price should be captured before payment.

**Risks**
- Voucher conditions may make the deal less attractive.
- Warranty may require invoice and official-store purchase proof.
- Similar models may differ in capacity, accessories, or wattage.

**Checklist items**
- Confirm final checkout price, warranty duration, model number, and included accessories.
- Compare against the same model on Shopee and Tiki.
- Save invoice, warranty information, and order confirmation.
- Check return window for damaged or wrong item delivery.

## 13. Motorbike helmet purchase

**User goal**
- Decide whether to buy a low-priced full-face helmet online.

**Input data**
- Product: Full-face motorbike helmet
- Platform: Shopee
- Category: Other Purchase
- Budget: 1,200,000 VND
- Seller: Rider Gear Store
- Notes: Listing claims DOT/ECE certification, anti-fog visor, removable liner, and many positive reviews, but certification photos are blurry.

**Expected recommendation**
- **Wait / verify safety claims.** Safety gear should not be bought on vague certification claims alone.

**Risks**
- Fake or unverifiable safety certification.
- Poor fit, weak shell, bad visor optics, or low-impact protection.
- Returns may be difficult after trying on or removing tags.

**Checklist items**
- Ask for clear certification label photos and exact model number.
- Check sizing chart and return policy for fit issues.
- Compare with an authorized retailer or known helmet brand.
- Save certification claims and seller responses.

## 14. Camera lens for a hobby photographer

**User goal**
- Decide whether to buy a used camera lens for travel photography.

**Input data**
- Product: Used Sony 35mm f/1.8 lens
- Platform: Facebook Marketplace
- Category: Used Electronics
- Budget: 7,000,000 VND
- Seller: Huy Camera Gear
- Notes: Seller says lens is clean, no fungus, no scratches, autofocus works, includes box and hood, meet-up test possible.

**Expected recommendation**
- **Compare / buy only after physical test.** Meet-up testing and included accessories are positive, but lens condition must be inspected carefully.

**Risks**
- Fungus, haze, dust, scratches, decentering, autofocus issues, or dropped lens damage.
- No shop warranty or return path after private purchase.
- Compatibility assumptions with the buyer's camera body.

**Checklist items**
- Test autofocus, aperture, sharpness, stabilization if applicable, and physical switches.
- Inspect front/rear elements under light for fungus, haze, and scratches.
- Compare price against used camera shops with warranty.
- Save chat, serial number, and sample test photos.

## 15. Smartwatch for fitness tracking

**User goal**
- Decide whether to buy a discounted smartwatch for workouts and notifications.

**Input data**
- Product: Apple Watch Series 8 used
- Platform: Facebook Marketplace
- Category: Used Electronics
- Budget: 5,000,000 VND
- Seller: Linh Accessories
- Notes: Seller says GPS model, 90% battery health, no activation lock, small screen scratch, charger included, no box.

**Expected recommendation**
- **Wait / compare.** Activation lock and battery health must be verified in person, and missing box reduces confidence.

**Risks**
- Activation lock, poor battery, water damage, replaced screen, or inaccurate health sensors.
- Limited warranty or no official proof of origin.
- Compatibility issue if the buyer uses Android or an unsupported iPhone.

**Checklist items**
- Pair with the buyer's phone before payment.
- Check battery health, serial number, activation lock, charging, buttons, and sensors.
- Compare against refurbished units with warranty.
- Save seller claims and payment proof.

## 16. SaaS invoice tool for a freelancer

**User goal**
- Decide whether to subscribe to an invoicing tool for freelance clients.

**Input data**
- Product: Invoice management SaaS monthly plan
- Platform: Other
- Category: Software Subscription
- Budget: 250,000 VND/month
- Seller: InvoiceFlow
- Notes: User needs branded invoices, payment tracking, PDF export, recurring invoices, and simple tax records for 8-10 clients.

**Expected recommendation**
- **Compare.** The subscription can be justified if it saves admin time, but the user should compare free spreadsheet templates, accounting tools, and cancellation/export options.

**Risks**
- Monthly cost may be unnecessary for low invoice volume.
- Data export or cancellation may be inconvenient.
- Tax formats may not match local accounting needs.

**Checklist items**
- Confirm PDF export, client limits, recurring invoice support, and data export.
- Compare with Google Sheets, accounting software, and bank/payment-platform tools.
- Check cancellation policy and invoice numbering rules.
- Test with one client before committing long term.

## 17. External SSD for video editing

**User goal**
- Decide whether a portable SSD is suitable for editing 4K videos.

**Input data**
- Product: Samsung T7 Shield 1TB
- Platform: Tiki
- Category: Computer Parts
- Budget: 2,500,000 VND
- Seller: Tiki Trading
- Notes: New external SSD, official warranty, USB-C, advertised high read/write speeds, intended for 4K editing on a MacBook.

**Expected recommendation**
- **Buy / compare final price.** Official seller and warranty are strong, but the buyer should confirm model, cable, Mac compatibility, and sustained speed needs.

**Risks**
- Advertised peak speeds may not match sustained editing workloads.
- Wrong cable or port can reduce speed.
- Warranty support depends on official invoice and serial.

**Checklist items**
- Confirm exact model, warranty, included cable, and USB standard.
- Compare price with Shopee Mall and Lazada Mall.
- Check Mac formatting and real-world sustained-speed reviews.
- Save invoice and serial details.

## 18. Secondhand monitor for home office

**User goal**
- Decide whether to buy a used external monitor for productivity.

**Input data**
- Product: Used Dell 24-inch monitor
- Platform: Facebook Marketplace
- Category: Used Electronics
- Budget: 2,000,000 VND
- Seller: Office Liquidation VN
- Notes: Seller has many ex-office units, 1080p IPS, HDMI and DisplayPort, 7-day exchange, visible scratches on stand, no original box.

**Expected recommendation**
- **Compare / inspect first.** The exchange period helps, but panel condition and port function must be verified.

**Risks**
- Dead pixels, backlight bleed, color issues, flickering, worn ports, or missing power cable.
- No manufacturer warranty.
- Transport damage due to missing original box.

**Checklist items**
- Test dead pixels, brightness, ports, stand adjustment, and power stability.
- Confirm exchange terms in writing.
- Compare with a new budget monitor warranty price.
- Photograph condition before transport.

## 19. Marketplace skincare product

**User goal**
- Decide whether to buy a discounted skincare serum from an online seller.

**Input data**
- Product: Vitamin C serum
- Platform: Shopee
- Category: Other Purchase
- Budget: 450,000 VND
- Seller: Beauty Deal VN
- Notes: Listing claims authentic imported product, large discount, many sales, but some reviews mention damaged packaging and near-expiry stock.

**Expected recommendation**
- **Wait / compare official source.** Health/skin-related products require authenticity, expiry, storage, and return verification.

**Risks**
- Counterfeit, expired, poorly stored, or damaged product.
- Skin irritation or wasted money if authenticity is uncertain.
- Return/refund may be denied after opening.

**Checklist items**
- Ask for batch number, expiry date, packaging photos, and import/authenticity proof.
- Compare with official store or authorized retailer.
- Read low-star reviews for expiry and damage patterns.
- Save all authenticity claims before checkout.

## 20. Digital drawing tablet for a beginner

**User goal**
- Decide whether to buy an entry-level drawing tablet for learning illustration.

**Input data**
- Product: Wacom One small tablet
- Platform: Lazada
- Category: Other Purchase
- Budget: 1,600,000 VND
- Seller: Wacom Authorized Store
- Notes: New tablet, official warranty, compatible with Windows/Mac, user is a beginner and wants to practice digital art for school projects.

**Expected recommendation**
- **Buy / compare one alternative.** Authorized seller and clear beginner use case make this a reasonable purchase if compatibility and warranty are confirmed.

**Risks**
- User may stop using it after initial interest.
- Driver/software compatibility issues with the user's computer.
- Cheaper alternatives may be sufficient for beginner practice.

**Checklist items**
- Confirm OS compatibility, warranty, pen nibs, and included cable.
- Compare with one Huion or XP-Pen beginner model.
- Check return policy if the device is defective or incompatible.
- Save invoice, warranty terms, and setup instructions.
