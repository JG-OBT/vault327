<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menus — The Vault 327, Crowthorne</title>
  <meta name="description" content="Explore The Vault 327's full menu range: À La Carte, Sunday Roast, Weekend Brunch, Afternoon Tea, Desserts, Children's and Drinks menus.">
  <link rel="icon" type="image/svg+xml" href="public/favicon.svg">
  <link rel="stylesheet" href="public/style.css">
  <style>
    /* ── Menus Page Specific ───────────────────────────────── */
    .menu-hero {
      background: var(--void);
      min-height: 55vh;
      display: flex;
      align-items: flex-end;
      padding: 8rem 3rem 5rem;
      position: relative;
      overflow: hidden;
    }
    .menu-hero::after {
      content: 'MENUS';
      position: absolute;
      right: -2rem; top: 50%;
      transform: translateY(-50%);
      font-family: var(--font-display);
      font-size: 18vw;
      font-weight: 300;
      color: var(--gold);
      opacity: 0.03;
      letter-spacing: -0.05em;
      line-height: 1;
      pointer-events: none;
    }
    .menu-hero-content { position: relative; z-index: 1; }
    .menu-hero h1 { font-size: clamp(3rem, 7vw, 5.5rem); }

    /* Filter tabs */
    .menu-tabs {
      background: var(--charcoal);
      border-bottom: 1px solid var(--border);
      padding: 0 3rem;
      display: flex;
      gap: 0;
      overflow-x: auto;
      scrollbar-width: none;
      position: sticky;
      top: 72px;
      z-index: 50;
    }
    .menu-tabs::-webkit-scrollbar { display: none; }
    .menu-tab {
      font-family: var(--font-sans);
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--cream);
      opacity: 0.5;
      padding: 1.2rem 1.8rem;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: opacity 0.3s, color 0.3s, border-color 0.3s;
      white-space: nowrap;
      cursor: none;
    }
    .menu-tab:hover { opacity: 0.8; }
    .menu-tab.active { opacity: 1; color: var(--gold); border-bottom-color: var(--gold); }

    /* Menu sections */
    .menu-section {
      padding: 6rem 3rem;
      scroll-margin-top: 130px;
    }
    .menu-section:nth-child(odd) { background: var(--obsidian); }
    .menu-section:nth-child(even) { background: var(--charcoal); }

    .menu-section-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      margin-bottom: 4rem;
    }
    .menu-section-img {
      aspect-ratio: 16/10;
      overflow: hidden;
      position: relative;
    }
    .menu-section-img img {
      width: 100%; height: 100%;
      object-fit: cover;
      filter: sepia(0.15);
      transition: transform 0.8s var(--ease-out);
    }
    .menu-section-img:hover img { transform: scale(1.05); }
    .menu-section-img.img-placeholder {
      background: var(--void);
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .menu-section-img.img-placeholder::after {
      content: attr(data-label);
      font-family: var(--font-display);
      font-size: 1.2rem;
      color: var(--gold);
      opacity: 0.3;
      letter-spacing: 0.1em;
    }
    .menu-section-text h2 { margin-bottom: 0.5rem; }
    .menu-section-text p.body-text { margin-top: 1rem; }
    .menu-section-text .tag {
      display: inline-block;
      font-family: var(--font-sans);
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--obsidian);
      background: var(--gold);
      padding: 0.3rem 0.8rem;
      margin-bottom: 1rem;
    }

    /* Menu items grid */
    .menu-items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1px;
      border: 1px solid var(--border);
    }
    .menu-item {
      padding: 1.8rem;
      background: var(--void);
      border: 1px solid transparent;
      transition: background 0.3s, border-color 0.3s;
      position: relative;
    }
    .menu-item:hover { background: rgba(201,168,76,0.04); border-color: var(--border); }
    .menu-item-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; }
    .menu-item-name {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-style: italic;
      color: var(--cream);
    }
    .menu-item-price {
      font-family: var(--font-sans);
      font-size: 0.85rem;
      color: var(--gold);
      white-space: nowrap;
      margin-left: 1rem;
    }
    .menu-item-desc {
      font-size: 0.82rem;
      color: var(--cream);
      opacity: 0.5;
      line-height: 1.6;
    }
    .menu-item-tags { display: flex; gap: 0.4rem; margin-top: 0.6rem; flex-wrap: wrap; }
    .diet-tag {
      font-family: var(--font-sans);
      font-size: 0.58rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 0.2rem 0.5rem;
      border: 1px solid var(--border);
      color: var(--cream);
      opacity: 0.5;
    }
    .diet-tag.vg { border-color: rgba(100,200,100,0.3); color: #8dc86a; opacity: 1; }
    .diet-tag.v  { border-color: rgba(100,180,100,0.3); color: #7db85a; opacity: 1; }
    .diet-tag.gf { border-color: rgba(200,180,100,0.3); color: var(--gold); opacity: 0.7; }

    /* Category label */
    .menu-category {
      font-family: var(--font-sans);
      font-size: 0.65rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--gold);
      padding: 1.2rem 1.8rem 0.8rem;
      background: var(--charcoal);
      border: 1px solid var(--border);
      grid-column: 1 / -1;
    }

    /* ── Set menu block ──────────────────────────────────── */
    .set-menu-box {
      border: 1px solid var(--border-strong);
      padding: 2.5rem;
      max-width: 700px;
      position: relative;
    }
    .set-menu-box::before {
      content: '';
      position: absolute;
      top: -1px; left: 2rem;
      width: 60px; height: 2px;
      background: var(--gold);
    }
    .set-price {
      font-family: var(--font-display);
      font-size: 3rem;
      color: var(--gold);
      font-style: italic;
      display: block;
      margin-bottom: 0.5rem;
    }
    .set-menu-box ul { list-style: none; margin-top: 1.5rem; }
    .set-menu-box ul li {
      padding: 0.6rem 0;
      border-bottom: 1px solid var(--border);
      font-size: 0.9rem;
      color: var(--cream);
      opacity: 0.7;
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }
    .set-menu-box ul li:last-child { border-bottom: none; }
    .set-menu-box ul li::before { content: '—'; color: var(--gold); opacity: 0.5; }

    /* PDF link */
    .pdf-link {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-family: var(--font-sans);
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--gold);
      border: 1px solid var(--border-strong);
      padding: 0.8rem 1.5rem;
      text-decoration: none;
      transition: background 0.3s, border-color 0.3s;
      margin-top: 1.5rem;
    }
    .pdf-link:hover { background: rgba(201,168,76,0.08); border-color: var(--gold); }
    .pdf-link::before { content: '↓'; font-size: 1.1rem; }

    /* Mobile */
    @media (max-width: 900px) {
      .menu-hero { padding: 7rem 1.5rem 3rem; }
      .menu-tabs { padding: 0 1rem; }
      .menu-section { padding: 4rem 1.5rem; scroll-margin-top: 110px; }
      .menu-section-header { grid-template-columns: 1fr; gap: 2rem; }
    }
  </style>
</head>
<body>

  <div class="cursor"></div>
  <div class="cursor-ring"></div>

  <nav class="nav">
    <a href="index.html" class="nav-logo">The <span>Vault</span> 327</a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="restaurant.html">Our Story</a></li>
      <li><a href="menus.html">Menus</a></li>
      <li><a href="events.html">What's On</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="contact.html#book" class="nav-book">Book a Table</a>
    <button class="nav-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- Hero -->
  <div class="menu-hero">
    <div class="menu-hero-content reveal">
      <span class="eyebrow">Curated by Head Chef Mo</span>
      <h1>Our <em class="display-italic">Menus</em></h1>
      <div class="divider"></div>
      <p class="body-text" style="max-width:500px">British staples, Mediterranean warmth, bold Asian inspiration. Every dish made fresh with the finest seasonal ingredients — and always evolving.</p>
    </div>
  </div>

  <!-- Sticky tabs -->
  <nav class="menu-tabs" aria-label="Menu sections">
    <a href="#alacarte" class="menu-tab active">À La Carte</a>
    <a href="#lunch" class="menu-tab">Lunch</a>
    <a href="#sunday" class="menu-tab">Sunday Roast</a>
    <a href="#brunch" class="menu-tab">Brunch</a>
    <a href="#tea" class="menu-tab">Afternoon Tea</a>
    <a href="#desserts" class="menu-tab">Desserts</a>
    <a href="#kids" class="menu-tab">Children's</a>
    <a href="#drinks" class="menu-tab">Drinks</a>
  </nav>

  <!-- ── À La Carte ─────────────────────────────────────── -->
  <section class="menu-section" id="alacarte">
    <div class="container">
      <div class="menu-section-header reveal">
        <div class="menu-section-img" data-label="À LA CARTE">
          <img src="public/images/food-1.jpg" alt="À La Carte seafood dish" onerror="this.parentElement.classList.add('img-placeholder')">
        </div>
        <div class="menu-section-text">
          <span class="tag">Lunch · Dinner</span>
          <span class="eyebrow">Head Chef Mo's Signature</span>
          <h2>À La Carte</h2>
          <div class="divider"></div>
          <p class="body-text">Our flagship menu blends British staples with Mediterranean classics and bold Asian flavours. Every dish is crafted with premium, seasonal ingredients — and our menu evolves regularly, so there's always something new to discover.</p>
          <a href="#" class="pdf-link" onclick="alert('Please add the PDF menu from your uploads to public/images/');return false;">Download Full Menu PDF</a>
        </div>
      </div>

      <div class="menu-items stagger">
        <div class="menu-category">Starters</div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Smoked Salmon Blinis</span>
            <span class="menu-item-price">£9.95</span>
          </div>
          <p class="menu-item-desc">House-cured salmon, crème fraîche, micro herbs, lemon caviar</p>
          <div class="menu-item-tags"><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Burrata & Heritage Tomato</span>
            <span class="menu-item-price">£8.95</span>
          </div>
          <p class="menu-item-desc">Whipped basil oil, aged balsamic, sea salt, toasted pine nuts</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Chicken Liver Parfait</span>
            <span class="menu-item-price">£8.50</span>
          </div>
          <p class="menu-item-desc">Brioche, red onion marmalade, cornichons, pickled mustard seeds</p>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Tiger Prawn Tempura</span>
            <span class="menu-item-price">£11.50</span>
          </div>
          <p class="menu-item-desc">Yuzu aioli, pickled cucumber, togarashi seasoning</p>
        </div>

        <div class="menu-category">Mains</div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Mint-Kissed Lamb Rump</span>
            <span class="menu-item-price">£26.50</span>
          </div>
          <p class="menu-item-desc">Smoky beetroot purée, roasted carrots, red wine jus, mint gremolata</p>
          <div class="menu-item-tags"><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Pan-Seared Sea Bass</span>
            <span class="menu-item-price">£24.00</span>
          </div>
          <p class="menu-item-desc">Saffron risotto, samphire, lemon beurre blanc, crispy capers</p>
          <div class="menu-item-tags"><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">8oz Bavette Steak</span>
            <span class="menu-item-price">£28.00</span>
          </div>
          <p class="menu-item-desc">Triple-cooked chips, watercress salad, compound butter, choice of sauce</p>
          <div class="menu-item-tags"><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Wild Mushroom Risotto</span>
            <span class="menu-item-price">£18.50</span>
          </div>
          <p class="menu-item-desc">Porcini, truffle oil, parmesan crisp, chive oil</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Duck Breast</span>
            <span class="menu-item-price">£27.00</span>
          </div>
          <p class="menu-item-desc">Miso-glazed, dauphinoise potato, pak choi, orange & ginger jus</p>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Miso-Glazed Aubergine</span>
            <span class="menu-item-price">£17.00</span>
          </div>
          <p class="menu-item-desc">Sesame soba noodles, pickled ginger, spring onion, chilli oil</p>
          <div class="menu-item-tags"><span class="diet-tag vg">VG</span></div>
        </div>
      </div>

      <p class="body-text mt-2" style="opacity:0.45;font-size:0.8rem">Menu changes regularly. Please ask your server for today's specials and full allergen information. (V) Vegetarian · (VG) Vegan · (GF) Gluten-Free available</p>
    </div>
  </section>

  <!-- ── Lunch Set Menu ──────────────────────────────────── -->
  <section class="menu-section" id="lunch">
    <div class="container">
      <div class="menu-section-header reveal">
        <div class="menu-section-text">
          <span class="tag">Tue – Fri · Available All Day</span>
          <span class="eyebrow">Midday Dining</span>
          <h2>Lunch Set <em class="display-italic">Menu</em></h2>
          <div class="divider"></div>
          <p class="body-text">Elevate your lunch break. Our set menu delivers exceptional value and bold flavour — whether you're enjoying a quick bite or a leisurely escape from the everyday.</p>
        </div>
        <div class="menu-section-img" data-label="LUNCH">
          <img src="public/images/food-2.jpg" alt="Lunch at The Vault" onerror="this.parentElement.classList.add('img-placeholder')">
        </div>
      </div>
      <div class="set-menu-box reveal">
        <span class="set-price">£18.95</span>
        <p class="body-text" style="font-size:0.85rem">Two courses — available Tuesday to Friday</p>
        <ul>
          <li>One starter from the lunch selection</li>
          <li>One main course from the lunch selection</li>
          <li>Bread &amp; butter included</li>
          <li>Add a dessert course for £6.50</li>
        </ul>
        <a href="contact.html#book" class="btn-primary mt-2" style="display:inline-block">Book for Lunch</a>
      </div>
    </div>
  </section>

  <!-- ── Sunday Roast ────────────────────────────────────── -->
  <section class="menu-section" id="sunday">
    <div class="container">
      <div class="menu-section-header reveal">
        <div class="menu-section-img" data-label="SUNDAY ROAST">
          <img src="public/images/food-5.jpg" alt="Sunday Roast" onerror="this.parentElement.classList.add('img-placeholder')">
        </div>
        <div class="menu-section-text">
          <span class="tag">Every Sunday</span>
          <span class="eyebrow">Luxury Roasts</span>
          <h2>Sunday <em class="display-italic">Roast</em></h2>
          <div class="divider"></div>
          <p class="body-text">All the warmth of a home-cooked Sunday feast, but with a signature Vault twist. Tender cuts, rich velvety gravies, crisp golden potatoes, and seasonal sides — the perfect way to unwind.</p>
        </div>
      </div>
      <div class="menu-items stagger">
        <div class="menu-category">Roast Selections</div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Slow-Roasted Rib of Beef</span>
            <span class="menu-item-price">£19.95</span>
          </div>
          <p class="menu-item-desc">Served with all the trimmings: Yorkshire pudding, roasties, seasonal veg, bone marrow gravy</p>
          <div class="menu-item-tags"><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Roast Free-Range Chicken</span>
            <span class="menu-item-price">£17.95</span>
          </div>
          <p class="menu-item-desc">Herb butter under the skin, bread sauce, crispy skin gravy, proper trimmings</p>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Roast Leg of Lamb</span>
            <span class="menu-item-price">£18.95</span>
          </div>
          <p class="menu-item-desc">Slow-cooked with garlic and rosemary, mint sauce, red wine jus</p>
          <div class="menu-item-tags"><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Roast Cauliflower</span>
            <span class="menu-item-price">£15.50</span>
          </div>
          <p class="menu-item-desc">Harissa, tahini, roast veg, lentil gravy, all the Sunday trimmings</p>
          <div class="menu-item-tags"><span class="diet-tag vg">VG</span><span class="diet-tag gf">GF</span></div>
        </div>
      </div>
      <p class="body-text mt-2" style="opacity:0.4;font-size:0.8rem">All roasts include roast potatoes, Yorkshire pudding (where applicable), seasonal vegetables, and your choice of gravy. Booking recommended.</p>
      <a href="contact.html#book" class="btn-primary mt-2" style="display:inline-block">Book Your Sunday Table</a>
    </div>
  </section>

  <!-- ── Weekend Brunch ──────────────────────────────────── -->
  <section class="menu-section" id="brunch">
    <div class="container">
      <div class="menu-section-header reveal">
        <div class="menu-section-text">
          <span class="tag">Sat 9:30am – 3pm · Sun 9:30am – 12pm</span>
          <span class="eyebrow">Weekend Mornings</span>
          <h2>Weekend <em class="display-italic">Brunch</em></h2>
          <div class="divider"></div>
          <p class="body-text">Start your weekend properly. Our brunch dishes are crafted with quality ingredients, thoughtful flavours, and an elevated touch that turns every morning into a moment worth savouring.</p>
        </div>
        <div class="menu-section-img" data-label="BRUNCH">
          <img src="public/images/food-4.jpg" alt="Weekend Brunch" onerror="this.parentElement.classList.add('img-placeholder')">
        </div>
      </div>
      <div class="menu-items stagger">
        <div class="menu-category">Brunch Favourites</div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Full Vault Breakfast</span>
            <span class="menu-item-price">£14.95</span>
          </div>
          <p class="menu-item-desc">Two eggs, smoked bacon, sausage, black pudding, mushroom, tomato, sourdough toast</p>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Eggs Royale</span>
            <span class="menu-item-price">£13.50</span>
          </div>
          <p class="menu-item-desc">Poached eggs, smoked salmon, hollandaise, toasted English muffin, chives</p>
          <div class="menu-item-tags"><span class="diet-tag gf">GF option</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Shakshuka</span>
            <span class="menu-item-price">£11.50</span>
          </div>
          <p class="menu-item-desc">Baked eggs in spiced tomato sauce, feta, sourdough, harissa</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Brioche French Toast</span>
            <span class="menu-item-price">£10.95</span>
          </div>
          <p class="menu-item-desc">Vanilla custard soak, caramelised banana, maple syrup, crème fraîche</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Avocado & Poached Eggs</span>
            <span class="menu-item-price">£11.00</span>
          </div>
          <p class="menu-item-desc">Smashed avocado, two poached eggs, sourdough, dukkah, pickled chilli</p>
          <div class="menu-item-tags"><span class="diet-tag vg">VG</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Pancake Stack</span>
            <span class="menu-item-price">£10.50</span>
          </div>
          <p class="menu-item-desc">Fluffy buttermilk pancakes, seasonal compote, whipped butter, maple syrup</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Afternoon Tea ───────────────────────────────────── -->
  <section class="menu-section" id="tea">
    <div class="container">
      <div class="menu-section-header reveal">
        <div class="menu-section-img" data-label="AFTERNOON TEA">
          <img src="public/images/afternoon-tea.jpg" alt="Afternoon Tea" onerror="this.parentElement.classList.add('img-placeholder')">
        </div>
        <div class="menu-section-text">
          <span class="tag">Daily · 12pm – 5pm · Booking Required</span>
          <span class="eyebrow">Tea. Treats. Time Well Spent.</span>
          <h2>Afternoon <em class="display-italic">Tea</em></h2>
          <div class="divider"></div>
          <p class="body-text">A delightful mix of savoury and sweet treats, lovingly prepared by our kitchen team. From smoked salmon brioche buns to freshly baked scones — a proper British ritual, elevated by Vault touches.</p>
          <a href="contact.html#book" class="btn-primary mt-2" style="display:inline-block">Book Afternoon Tea</a>
        </div>
      </div>
      <div class="set-menu-box reveal">
        <span class="set-price">Per Person</span>
        <p class="body-text" style="font-size:0.85rem">Please ask for current pricing. Available daily 12pm – 5pm. Booking required.</p>
        <ul>
          <li>Finger sandwiches — smoked salmon brioche, egg mayonnaise, cucumber &amp; cream cheese</li>
          <li>Freshly baked plain and fruit scones with clotted cream and strawberry preserve</li>
          <li>Seasonal pastries and petit fours from our kitchen</li>
          <li>Loose-leaf tea selection or coffee</li>
          <li>Champagne upgrade available on request</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ── Desserts ────────────────────────────────────────── -->
  <section class="menu-section" id="desserts">
    <div class="container">
      <div class="menu-section-header reveal">
        <div class="menu-section-text">
          <span class="tag">Always Available</span>
          <span class="eyebrow">Finish on a High Note</span>
          <h2>Desserts</h2>
          <div class="divider"></div>
          <p class="body-text">The perfect finale to any meal — or a great excuse to pop in for coffee and cake. Crafted with love and finished with flair, our desserts are not to be missed.</p>
        </div>
        <div class="menu-section-img" data-label="DESSERTS">
          <img src="public/images/food-3.jpg" alt="Desserts" onerror="this.parentElement.classList.add('img-placeholder')">
        </div>
      </div>
      <div class="menu-items stagger">
        <div class="menu-category">Sweet Endings</div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Sticky Toffee Pudding</span>
            <span class="menu-item-price">£8.50</span>
          </div>
          <p class="menu-item-desc">Warm toffee sauce, vanilla clotted cream, candied pecan</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Spiced Apple Tart</span>
            <span class="menu-item-price">£8.00</span>
          </div>
          <p class="menu-item-desc">Frangipane, caramel sauce, cinnamon ice cream, shortcrust pastry</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Orange Blossom Affogato</span>
            <span class="menu-item-price">£7.00</span>
          </div>
          <p class="menu-item-desc">Double espresso, orange blossom gelato, almond biscotti</p>
          <div class="menu-item-tags"><span class="diet-tag vg">VG</span><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Artisan Ice Cream Trilogy</span>
            <span class="menu-item-price">£6.50</span>
          </div>
          <p class="menu-item-desc">Three rotating seasonal scoops — ask your server for today's flavours</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Dark Chocolate Fondant</span>
            <span class="menu-item-price">£9.00</span>
          </div>
          <p class="menu-item-desc">Salted caramel centre, pistachio praline, gold-dusted cream</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Cheese Board</span>
            <span class="menu-item-price">£13.50</span>
          </div>
          <p class="menu-item-desc">Rotating British &amp; Continental selection, fig chutney, oatcakes, grapes</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span><span class="diet-tag gf">GF option</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Kids Menu ───────────────────────────────────────── -->
  <section class="menu-section" id="kids">
    <div class="container">
      <div class="menu-section-header reveal">
        <div class="menu-section-img" data-label="CHILDREN'S MENU">
          <img src="public/images/food-2.jpg" alt="Children's menu" onerror="this.parentElement.classList.add('img-placeholder')">
        </div>
        <div class="menu-section-text">
          <span class="tag">All Day · For Under 12s</span>
          <span class="eyebrow">Big Flavours for Little Foodies</span>
          <h2>Children's <em class="display-italic">Menu</em></h2>
          <div class="divider"></div>
          <p class="body-text">Made fresh, just like the grown-up menu. Our children's dishes are packed with flavour and fun — because every little guest deserves a big experience.</p>
        </div>
      </div>
      <div class="menu-items stagger" style="max-width:700px">
        <div class="menu-category">Little Ones</div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Margherita Pizza</span>
            <span class="menu-item-price">£7.50</span>
          </div>
          <p class="menu-item-desc">Fresh tomato sauce, mozzarella, fresh basil</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Penne Pasta</span>
            <span class="menu-item-price">£7.00</span>
          </div>
          <p class="menu-item-desc">Tomato sauce with vegan mozzarella, or butter and parmesan</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Free-Range Chipolatas</span>
            <span class="menu-item-price">£8.00</span>
          </div>
          <p class="menu-item-desc">With rich gravy, mashed potato, seasonal peas</p>
        </div>
        <div class="menu-category">Sweet Treats</div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Mini Sticky Toffee Pudding</span>
            <span class="menu-item-price">£4.50</span>
          </div>
          <p class="menu-item-desc">Warm toffee sauce, vanilla ice cream</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Scoop of Ice Cream</span>
            <span class="menu-item-price">£3.50</span>
          </div>
          <p class="menu-item-desc">Chocolate, vanilla or strawberry</p>
          <div class="menu-item-tags"><span class="diet-tag v">VE</span><span class="diet-tag gf">GF</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Drinks ──────────────────────────────────────────── -->
  <section class="menu-section" id="drinks">
    <div class="container">
      <div class="menu-section-header reveal">
        <div class="menu-section-text">
          <span class="tag">Bar · All Day</span>
          <span class="eyebrow">A Drink for Every Moment</span>
          <h2>Cocktails <em class="display-italic">&amp; Drinks</em></h2>
          <div class="divider"></div>
          <p class="body-text">Our drinks menu celebrates expertly crafted cocktails alongside a carefully curated selection of wines, spirits, and non-alcoholic options. From timeless favourites to elegant modern pours.</p>
          <a href="#" class="pdf-link" onclick="alert('Please add the Drinks PDF from your uploads to public/images/');return false;">Download Drinks Menu PDF</a>
        </div>
        <div class="menu-section-img" data-label="DRINKS">
          <img src="public/images/cocktails.jpg" alt="Cocktails at The Vault" onerror="this.parentElement.classList.add('img-placeholder')">
        </div>
      </div>
      <div class="menu-items stagger">
        <div class="menu-category">Signature Cocktails</div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">The Vault Door</span>
            <span class="menu-item-price">£11.50</span>
          </div>
          <p class="menu-item-desc">Aged rum, espresso, velvet falernum, cold brew, salted caramel foam</p>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Gold Reserve</span>
            <span class="menu-item-price">£12.00</span>
          </div>
          <p class="menu-item-desc">Whisky, honey, ginger, lemon, smoked thyme garnish</p>
          <div class="menu-item-tags"><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Mediterranean Garden</span>
            <span class="menu-item-price">£11.00</span>
          </div>
          <p class="menu-item-desc">Gin, elderflower, cucumber, basil, tonic water, cucumber ribbon</p>
          <div class="menu-item-tags"><span class="diet-tag vg">VG</span><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Bank Holiday Spritz</span>
            <span class="menu-item-price">£10.50</span>
          </div>
          <p class="menu-item-desc">Aperol, prosecco, blood orange, soda, edible gold flakes</p>
          <div class="menu-item-tags"><span class="diet-tag vg">VG</span></div>
        </div>
        <div class="menu-category">Non-Alcoholic</div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Vault Shrub</span>
            <span class="menu-item-price">£6.50</span>
          </div>
          <p class="menu-item-desc">Seasonal fruit shrub, ginger beer, fresh mint, crushed ice</p>
          <div class="menu-item-tags"><span class="diet-tag vg">VG</span><span class="diet-tag gf">GF</span></div>
        </div>
        <div class="menu-item">
          <div class="menu-item-header">
            <span class="menu-item-name">Fancy Lemonade</span>
            <span class="menu-item-price">£5.50</span>
          </div>
          <p class="menu-item-desc">House-pressed lemon, elderflower, lavender syrup, sparkling water</p>
          <div class="menu-item-tags"><span class="diet-tag vg">VG</span><span class="diet-tag gf">GF</span></div>
        </div>
      </div>
      <p class="body-text mt-2" style="opacity:0.4;font-size:0.8rem">Don't forget: 2-for-1 cocktails every Tuesday 2pm–8pm. Order any 2 steaks on Thursday and receive a complimentary bottle of house wine.</p>
    </div>
  </section>

  <!-- Book CTA -->
  <section style="padding:6rem 3rem;background:var(--void);text-align:center">
    <div class="container reveal">
      <span class="eyebrow">Ready to Dine?</span>
      <h2>Reserve your table at <em class="display-italic">The Vault</em></h2>
      <div class="divider divider-center"></div>
      <a href="contact.html#book" class="btn-primary mt-2" style="display:inline-block">Book a Table</a>
      <a href="tel:01344674106" class="btn-outline mt-2" style="display:inline-block;margin-left:1rem">01344 674106</a>
    </div>
  </section>

  <footer>
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-brand-name">The Vault 327</div>
        <p class="footer-tagline">Where flavour, creativity, and atmosphere collide — inside Crowthorne's historic bank building.</p>
        <div class="footer-social">
          <a href="https://www.instagram.com/the_vault327/" aria-label="Instagram" target="_blank" rel="noopener">IG</a>
          <a href="https://www.facebook.com/p/The-Vault-327-61555501597616/" aria-label="Facebook" target="_blank" rel="noopener">FB</a>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Explore</div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="restaurant.html">Our Story</a></li>
          <li><a href="menus.html">Menus</a></li>
          <li><a href="events.html">What's On</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Opening Hours</div>
        <table class="hours-table">
          <tr class="closed"><td>Monday</td><td>Closed</td></tr>
          <tr><td>Tue – Thu</td><td>11:30 – 23:00</td></tr>
          <tr><td>Friday</td><td>11:30 – 00:00</td></tr>
          <tr><td>Saturday</td><td>9:30 – 00:00</td></tr>
          <tr><td>Sunday</td><td>9:30 – 22:00</td></tr>
        </table>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Find Us</div>
        <p>19 High Street<br>Crowthorne<br>Berkshire, RG45 7AD</p>
        <a href="tel:01344674106">01344 674106</a>
        <a href="mailto:info@thevault327.co.uk">info@thevault327.co.uk</a>
        <div style="margin-top:1rem">
          <a href="cookie-policy.html" style="font-size:0.8rem;color:var(--gold);opacity:0.7;display:block;margin-bottom:0.3rem">Cookie Policy</a>
          <a href="privacy-policy.html" style="font-size:0.8rem;color:var(--gold);opacity:0.7;">Privacy Policy</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 The Vault 327 Ltd. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="cookie-policy.html">Cookies</a>
        <a href="privacy-policy.html">Privacy</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </footer>

  <div class="cookie-banner" id="cookie-banner" role="dialog" aria-label="Cookie consent">
    <p>We use cookies to improve your experience. See our <a href="cookie-policy.html">Cookie Policy</a> and <a href="privacy-policy.html">Privacy Policy</a>.</p>
    <div class="cookie-actions">
      <button class="btn-accept" id="cookie-accept">Accept All</button>
      <button class="btn-decline" id="cookie-decline">Essential Only</button>
    </div>
  </div>

  <script src="public/script.js"></script>
  <script>
    // Update active tab on scroll
    const sections = document.querySelectorAll('.menu-section[id]');
    const tabs = document.querySelectorAll('.menu-tab');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          tabs.forEach(t => t.classList.remove('active'));
          const active = document.querySelector(`.menu-tab[href="#${e.target.id}"]`);
          if (active) { active.classList.add('active'); active.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'}); }
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(s => obs.observe(s));
  </script>
</body>
</html>
