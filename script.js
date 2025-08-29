// Global Variables
let currentLanguage = "uz";
let products = [];
let cart = [];
let orders = [];
let filteredProducts = [];
let currentFilter = "all";

// Admin credentials
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "beautyshop2024",
};

// Sample Products Data
const sampleProducts = [
  {
    id: 1,
    name: {
      uz: " Thelavicos Bio Repair seriyasi - Yoshartiruvchi parvarish vositasi",
      ru: "Линия Thelavicos Bio Repair — Антивозрастной уход",
    },
    category: "skin",
    price: 874950,
    originalPrice: 921000,
    image: "product-1.jpg",
    description: {
      uz: `Yanada elastik va yorqin teri uchun ikki karra yoshartiruvchi parvarish vositasi!
🌱 Bio Repair ajinlarga qarshi tonik, emulsiya, essensiya va kremni o‘z ichiga oladi - terini mustahkamlaydi, silliqlashtiradi va taranglaydi.
🔬 Charchagan teriga quvvat beradigan uchta fermentlangan tarkibiy qism (alp edelveyssi, Barbados gilosisi, anor va soya fermentlari) mavjud.
🍊 Tabiiy ekstraktlar (butasimon sofora, limon, chinnigul, semizo‘t, kungaboqar yog‘i, greypfrut) ta’sirchan terini tinchlantiradi va namlikni saqlaydi.
✔️ Asosiy tarkibiy qismlar: terini oqartirish va ajinlarni tekislash uchun niatsinamid va adenozin.
 Fakt: Seriya oksidlanish stressiga qarshi kurashadi, shu bilan birga ajinlar va quruqlikka qarshi ta’sir ko‘rsatadi.`,
      ru: `Двойной антивозрастной уход для более упругой и сияющей кожи!
🌱 Включает тоник против морщин Bio Repair, эмульсию, эссенцию и крем — укрепляет, разглаживает и укрепляет кожу.
🔬 Содержит три ферментированных ингредиента (леонтоподиум альпийский, барбадосская вишня, гранат и ферменты сои), которые заряжают уставшую кожу энергией.
🍊 Натуральные экстракты (софора кустарниковая, цитрон, цветки гвоздики, портулак, масло подсолнечника, грейпфрут) успокаивают чувствительную кожу и удерживают влагу.
✔️ Ключевые ингредиенты: ниацинамид и аденозин для осветления и разглаживания морщин.
 Факт: Линия борется с оксидантным стрессом, одновременно борясь с морщинами и сухостью. `,
    },
    instructions: {
      uz: "Tozalagandan so‘ng eng yaxshi natijaga erishish uchun tonik, emulsiya, essensiya va kremni ketma-ket suring.",
      ru: "После очищения нанесите тонер, эмульсию, эссенцию и крем для достижения наилучших результатов.",
    },
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: {
      uz: "Thelavicos Tea Tree Cica 80 Toner",
      ru: "Элемент маленькое средство для умывания",
    },
    category: "skin",
    price: 139000,
    originalPrice: 160000,
    image: "product-2.jpg",
    description: {
      uz: `Yog'li va muammoli terilar uchun ideal yechim!
    Thelavicos Tea Tree Cica 80 Toner — 80% choy daraxti suvi va CICA-kompleksi bilan terini tinchlantiradi va muammolarni bartaraf etadi.
🔹 Qizarish va yallig'lanishlarni tezda kamaytiradi.
🔹 Terini yumshoq tozalaydi va ortiqcha yog'ni nazorat qiladi.
🔹 Terining himoya to'sig'ini mustahkamlaydi.`,
      ru: `Идеальное решение для жирной и проблемной кожи!
   Thelavicos Tea Tree Cica 80 Toner — успокаивающий и балансирующий тонер с 80% воды чайного дерева и CICA-комплексом.
🔹 Быстро снимает воспаления и покраснения.
🔹 Мягко отшелушивает и контролирует выработку себума.
🔹 Усиливает защитный барьер кожи.`,
    },
    instructions: {
      uz: "Yengil, yopishqoq bo'lmagan formula kunlik foydalanish uchun juda qulay.",
      ru: "Лёгкая, нелипкая формула идеально подходит для ежедневного ухода. ",
    },
    inStock: true,
    featured: false,
  },
  {
    id: 3,
    name: {
      uz: "THELAVICOS Tea Tree Cica Trouble pH",
      ru: "THELAVICOS Tea Tree Cica Trouble pH",
    },
    category: "nail",
    price: 84550,
    originalPrice: 89000,
    image: "product-3.jpg",
    description: {
      uz: `Muvozanatli tozalovchi - husnbuzarga moyil sezgir teri uchun yumshoq va samarali tozalovchi vosita! 🌿
🔹 Choy daraxti barglaridan olingan 10% suv va 1% centella asiatica ekstrakti: terini tinchlantiradi va toshmalarni yumshatadi
🔹 BHA + PHA: yumshoq po‘st tashlash va teri yog‘i ishlab chiqarilishini nazorat qiladi
🔹 Kuchsiz kislotali pH 5,5 - terining tabiiy himoya qatlamini saqlab qoladi
🔹 Klinik sinovdan o‘tgan: husnbuzarlarni kamaytiradi, ta’sirlanish darajasi 0,00
🔹 Yumshoq gel ko‘pigi: yuz va tana uchun mos keladi`,
      ru: `Balanced Cleanser – мягкое и эффективное очищающее средство для чувствительной кожи, склонной к акне! 🌿
🔹 10% воды из листьев чайного дерева и 1% экстракта цика: успокаивает раздражение и смягчает высыпания
🔹 BHA + PHA: мягкое отшелушивание и контроль выработки кожного сала
🔹 Слабокислотный pH 5,5 – поддерживает естественный защитный барьер кожи
🔹 Клинически протестировано: уменьшает акне, индекс раздражения 0,00
🔹 Мягкая гелевая пена: подходит для лица и тела`,
    },
    instructions: {
      uz: `Nam teriga surting, ko‘pirtiring, ohista uqalang va yuvib tashlang. Ertalab va kechqurun foydalaning.`,
      ru: `Нанесите на влажную кожу, вспеньте, помассируйте и смойте. Используйте утром и вечером.`,
    },
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: {
      uz: "THELAVICOS Hyaluronic Acid 3,000 Wrinkle",
      ru: "THELAVICOS Hyaluronic Acid 3,000 Wrinkle",
    },
    category: "skin",
    price: 235000,
    originalPrice: null,
    image: "product-4.jpg",
    description: {
      uz: `Ampoule Pad – bu innovatsion, yirik (80mm) padlar teringizni chuqur namlantirib, elastik va silliq qiladi! 🧬
🔹 8 xil hialuron kislotasi: chuqur namlik va ajinlarga qarshi kuchli himoya
🔹 Qalin, konsentrlangan essence: padlar niqob sifatida ishlatiladi
🔹 pH 5.5 – sezgir teri uchun xavfsiz
🔹 Klinik testlar: 24 soat davomida namlik saqlanadi, ko‘z va bo‘yin ajinlari 2 haftada 21% va 8% ga kamayadi
🔹 10 zararli ingredientlarsiz`,
      ru: `Ampoule Pad – это гигантские (80мм) многофункциональные пэды для интенсивного увлажнения, упругости и разглаживания морщин! 💦
🔹 8 видов гиалуроновой кислоты для многослойного увлажнения и уменьшения морщин
🔹 Густая ампульная эссенция – можно использовать как маску
🔹 Слабокислый pH 5.5, безопасно для чувствительной кожи
🔹 Клинически доказано: увлажнение 24ч, уменьшение морщин глаз на 21% и шеи на 8% за 2 недели
🔹 Без 10 вредных компонентов`,
    },
    instructions: {
      uz: `– Yuzingizni yumshoq tomoni bilan artib chiqing yoki padni niqob sifatida 5-10 daqiqa tuting
– Qolgan essensani massaj qilib yengil surting
`,
      ru: `– Протрите лицо тисненой стороной, либо наложите как маску на 5-10 минут
– Остатки эссенции вмассируйте
`,
    },
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    name: {
      uz: " Yuqori quyosh himoyasiga ega vegan formulasi SPF 50+ / PA++++.",
      ru: "Веганская формула с высокой защитой от солнца SPF 50+ / PA++++.",
    },
    category: "skin",
    price: 170050,
    originalPrice: 179000,
    image: "product-5.jpg",
    description: {
      uz: `Ko‘chada ham, xonada ham kundalik foydalanish uchun mos. Quyoshdan himoyalovchi krem vazifasini bajaradi, teri rangini tekislaydi va ajinlarga qarshi kurashadi.
Rangi va ta’siri: Rangi pushti-sarg‘ish (pink-beige), teriga yorqinlik, yangilik va tabiiy bir xil tus beradi.
Yakuniy ko‘rinishi: O‘rtacha qoplamagacha yengil, g‘ovaklar va nuqsonlarni tekislaydi, plyonka hosil qiluvchi qatlam texnologiyasi tufayli terini yanada silliq ko‘rsatadi.
Asosiy tarkibiy qismlar
Mineral UB-filtrlar: Zinc oxide (quyoshdan fizik himoya).
Niatsinamid (Niacinamide) - terini oqartiradi va rangini tekislaydi.
Adenozin (Adenosine) - ajinlarga qarshi faol komponent.
Skvalan, Osiyo sentellasi, o‘simlik ekstraktlari - namlantiruvchi va tinchlantiruvchi ta’sirga ega.`,
      ru: `Подходит для ежедневного использования как на улице, так и в помещении. Выполняет функции солнцезащитного крема, выравнивает тон кожи и борется с морщинами.
Цвет и эффект: Оттенок розово-бежевый (pink-beige), придаёт коже сияние, свежесть и натуральный ровный тон.
Финиш: Лёгкое до среднего покрытия, сглаживает поры и несовершенства, делает кожу визуально более гладкой благодаря технологии плёнкообразующего слоя.
Основные ингредиенты
Минеральные УФ-фильтры: Zinc oxide (физическая защита от солнца).
Ниацинамид (Niacinamide) – осветляет кожу и выравнивает тон.
Аденозин (Adenosine) – активный компонент против морщин.
Сквалан, Центелла азиатская, растительные экстракты – увлажнение и успокаивающий эффект.`,
    },
    instructions: {
      uz: "",
      ru: "",
    },
    inStock: true,
    featured: true,
  },
  {
    id: 6,
    name: {
      uz: `CICA CALMING AQUA TONER – TINCHLIK VA NAMLIK BIRDA!`,
      ru: `CICA CALMING AQUA TONER – УСПОКАИВАЮЩИЙ ГИДРОТОНЕР`,
    },
    category: "skin",
    price: 30000,
    originalPrice: null,
    image: "product-61.jpg",
    description: {
      uz: `Teringizni tinchlantirish va namlantirish uchun mukammal halqa! 🌿
🧪 Fermentlangan Cica kompleks, ko‘p qatlamli Gialuron kislotasi va Aloe Vera – bu toner 217% tez namlikni yetkazib beradi!
💧 Suvdek yengil tekstura bilan teringizga tez singadi va yopishqoq qoldiq qoldirmaydi.
📊 Klinik testlar:
✔️ 24 soat namlikni ushlab turish: +169%
✔️ Suv yo‘qotilishini kamaytirish: -152%
✔️ Darhol teri tuzilishini yaxshilash: +111.8%
Teringiz sezgirmi? Muammo emas – bu toner sinovdan o‘tgan!`,
      ru: `Спасение для чувствительной кожи! 🌿
🧪 Ферментированный комплекс Cica, мульти-гиалуроновая кислота и экстракт алоэ – мгновенно увлажняют кожу (+217%) и улучшают её текстуру.
💧 Легкая водянистая текстура моментально впитывается без липкости.
📊 Клинически доказано:
✔️ Увлажнение до 24 ч: +169%
✔️ Снижение потери влаги: -152%
✔️ Улучшение гладкости кожи: +111.8%
Подходит для самой чувствительной кожи!`,
    },
    instructions: {
      uz: "Asosiy qatlam surtgandan keyin 2 qatlam bo'yoq qo'llang.",
      ru: "После нанесения базового слоя нанесите 2 слоя лака.",
    },
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    name: {
      uz: "TONEfitSUN Vegan Hydrating Sun Cream",
      ru: "TONEfitSUN Vegan Hydrating Sun Cream",
    },
    category: "skin",
    price: 103000,
    originalPrice: 129000,
    image: "product-7.jpg",
    description: {
      uz: `🌞 Namlantiruvchi vegan quyoshdan himoya kremi - 2 tasi 1 da
💧 SPF50+ PA++++ yengil loson teksturasi bilan kuchli quyosh himoyasini ta’minlaydi.
🌲240 soat davomida sous-vide usulida olingan qarag‘ay barglari ekstrakti tinchlantiradi va chuqur namlantiradi.
🌿 EWG Green reytingi bo‘yicha 100% vegan, xavfsiz tarkibiy qismlar.
🧪 Klinik testlardan o‘tgan, ko‘z uchun ham xavfsiz.
🧴 Kundalik foydalanish uchun juda mos: yengil, yangi va yog‘siz!`,
      ru: `🌞 Увлажняющий веганский солнцезащитный крем – 2 в 1!
💧 SPF50+ PA++++ обеспечивает мощную защиту от солнца с легкой лосьонной текстурой.
🌲 Экстракт сосновой хвои, полученный методом 240-часового sous-vide, успокаивает и глубоко увлажняет.
🌿 100% веган, безопасные ингредиенты по рейтингу EWG Green.
🧪 Не раздражает глаза, подтверждено клиническими испытаниями.
🧴 Идеален для ежедневного применения: лёгкий, свежий и нежирный!`,
    },
    instructions: {
      uz: "",
      ru: "",
    },
    inStock: true,
    featured: true,
  },
  {
    id: 8,
    name: {
      uz: "Thelavicos Tea Tree Cica 80 Ampoule",
      ru: "Thelavicos Tea Tree Cica 80 Ampoule",
    },
    category: "skin",
    price: 160550,
    originalPrice: 169000,
    image: "product-8.jpg",
    description: {
      uz: `Teshiklar va muammoli teriga qarshi kuchli ampula!
🌿 80% choy daraxti suvi + 10% CICA
✔️ Teshiklarni siqadi (chuqurlik, o‘lcham va hajm bo‘yicha klinik testdan o‘tgan)
✔️ Sebumni nazorat qiladi, yallig‘lanishni tezda tinchlantiradi
✔️ Anti-Sebum kompleksi + Derma-Clera™ bilan barrier mustahkamlanadi
🧪 Past pH, yopishqoq emas, tez so‘riladi`,
      ru: `Ампула для чистой и спокойной кожи!
🌿 80% воды чайного дерева + CICA
✔️ Сужает поры (глубина, объём, размер – клинически подтверждено)
✔️ Успокаивает воспаления, регулирует себум
✔️ Anti-Sebum + Derma-Clera™ укрепляют защитный барьер
🧪 Низкий pH, быстрая впитываемость, не липнет`,
    },
    instructions: {
      uz: "",
      ru: "",
    },
    inStock: true,
    featured: false,
  },
  {
    id: 9,
    name: {
      uz: "THELAVICOS CICA K BARRIER CREAM - terini 2 barobar tezroq tiklaydigan krem!",
      ru: "THELAVICOS CICA K BARRIER CREAM — крем, восстанавливающий кожу в 2 раза быстрее!",
    },
    category: "skin",
    price: 139000,
    originalPrice: null,
    image: "product-9.jpg",
    description: {
      uz: `THELAVICOS CICA K BARRIER CREAM - terini 2 barobar tezroq tiklaydigan krem! 💥
💧To‘siqni mustahkamlaydi, ta’sirlanishni tinchlantiradi va namlikni saqlaydi.
👶 Hatto chaqaloqlar uchun ham mos keladi - past pH va zararli tarkibiy qismlarsiz!
🛡 Tarkibida: Chedju mushmula ekstrakti, 5 turdagi CICA va K vitamini mavjud.
📊 Klinik tasdiqlangan: shikastlangan terini 2 barobar tez tiklaydi.`,
      ru: `крем, восстанавливающий кожу в 2 раза быстрее! 💥
💧Укрепляет барьер, успокаивает раздражения и сохраняет влагу.
👶 Подходит даже для младенцев — низкий pH и без 10 вредных ингредиентов!
🛡 В составе: экстракт мушмулы с Чеджу, 5 видов CICA и витамин K.
📊 Клинически подтверждено: восстанавливает повреждённую кожу в 2 раза быстрее.`,
    },
    instructions: {
      uz: "",
      ru: "",
    },
    inStock: true,
    featured: false,
  },
  {
    id: 10,
    name: {
      uz: `Thelavicos Nutrition Skin Care - Qarishga qarshi aqlli parvarish! Bitta to‘plam - ko‘plab yechimlar`,
      ru: `Thelavicos Nutrition Skin Care — Умный антивозрастной уход!`,
    },
    category: "skin",
    price: 618450,
    originalPrice: 651000,
    image: "product-10.jpg",
    description: {
      uz: `✨ Tarkibi va ta’siri:
• Niatsinamid + adenozin - oqartirish va ajinlarni kamaytirish uchun
• Qaldirg‘och uyasi ekstrakti - teri regeneratsiyasi va qarishga qarshi ta’sirga ega
• Qizil jenshen - stressni kamaytiradi va kollagen sintezini rag‘batlantiradi
• Peptid kompleksi - yosh va tarang teri uchun
📦 To‘plamda 2ta mahsulot: serum + krem`,
      ru: `Один набор — множество решений 🌟
✨ Состав и эффект:
• Ниацинамид + аденозин – для отбеливания и уменьшения морщин
• Экстракт ласточкиного гнезда – регенерация кожи и антивозрастной эффект
• Красный женьшень – снимает стресс и стимулирует синтез коллагена
• Пептидный комплекс – для молодой и упругой кожи
📦 В набор входят: сыворотка и крем`,
    },
    instructions: {
      uz: "",
      ru: "",
    },
    inStock: true,
    featured: true,
  },
];

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  // Load data from localStorage or use sample data
  loadProducts();
  loadCart();
  loadOrders();

  // Initialize UI
  updateLanguageDisplay();
  setupEventListeners();
  renderProducts();
  renderPopularProducts();
  updateCartUI();

  // Setup filter functionality
  setupProductFilters();

  console.log("Beauty Shop initialized successfully!");
}

// Language Management
function toggleLanguage() {
  currentLanguage = currentLanguage === "uz" ? "ru" : "uz";
  document.getElementById("lang-indicator").textContent =
    currentLanguage === "uz" ? "RU" : "UZ";
  updateLanguageDisplay();
  renderProducts();
  renderPopularProducts();
  updateCartUI();
}

function updateLanguageDisplay() {
  const elements = document.querySelectorAll("[data-uz][data-ru]");
  elements.forEach((element) => {
    const text = element.getAttribute(`data-${currentLanguage}`);
    if (text) {
      element.textContent = text;
    }
  });

  // Update placeholders
  const placeholderElements = document.querySelectorAll(
    "[data-uz-placeholder][data-ru-placeholder]"
  );
  placeholderElements.forEach((element) => {
    const placeholder = element.getAttribute(
      `data-${currentLanguage}-placeholder`
    );
    if (placeholder) {
      element.placeholder = placeholder;
    }
  });
}

// Data Management
function loadProducts() {
  const stored = localStorage.getItem("beautyshop_products");
  products = stored ? JSON.parse(stored) : sampleProducts;
  filteredProducts = [...products];
}

function saveProducts() {
  localStorage.setItem("beautyshop_products", JSON.stringify(products));
}

function loadCart() {
  const stored = localStorage.getItem("beautyshop_cart");
  cart = stored ? JSON.parse(stored) : [];
}

function saveCart() {
  localStorage.setItem("beautyshop_cart", JSON.stringify(cart));
}

function loadOrders() {
  const stored = localStorage.getItem("beautyshop_orders");
  orders = stored ? JSON.parse(stored) : [];
}

function saveOrders() {
  localStorage.setItem("beautyshop_orders", JSON.stringify(orders));
}

// Event Listeners Setup
function setupEventListeners() {
  // Search functionality
  document
    .getElementById("search-input")
    .addEventListener("input", debounce(performSearch, 300));

  // Form submissions
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckout);
  }

  const adminLoginForm = document.getElementById("admin-login-form");
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", handleAdminLogin);
  }

  // Modal close events
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
      closeModal(e.target.id);
    }
  });

  // Keyboard events
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Product Management
function renderProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;

  container.innerHTML = "";

  filteredProducts.forEach((product, index) => {
    const productElement = createProductElement(product, index);
    container.appendChild(productElement);
  });
}

function createProductElement(product, index) {
  const wrapper = document.createElement("div");
  wrapper.className = `new-product-box-wrapper ${product.category}`;
  wrapper.style.animationDelay = `${index * 0.1}s`;

  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  wrapper.innerHTML = `
        <div class="new-product-box" onclick="showProductDetails(${
          product.id
        })">
            <div class="new-product-img">
                <img src="images/${product.image}" alt="${
    product.name[currentLanguage]
  }" 
                     onerror="this.src='https://via.placeholder.com/250x250?text=No+Image'">
                <span>${getTranslatedCategory(product.category)}</span>
                ${
                  hasDiscount
                    ? `<div class="discount-badge">-${discountPercent}%</div>`
                    : ""
                }
            </div>
            <div class="new-product-text">
                <a href="#" class="new-product-title" onclick="event.stopPropagation(); showProductDetails(${
                  product.id
                })">
                    ${product.name[currentLanguage]}
                </a>
                <div class="product-price">
                    <span class="price-current">${formatPrice(
                      product.price
                    )}</span>
                    ${
                      hasDiscount
                        ? `<span class="price-original">${formatPrice(
                            product.originalPrice
                          )}</span>`
                        : ""
                    }
                </div>
                <button class="new-p-cart-btn" onclick="event.stopPropagation(); addToCart(${
                  product.id
                })" 
                        ${!product.inStock ? "disabled" : ""}>
                    ${
                      !product.inStock
                        ? currentLanguage === "uz"
                          ? "Sotuvda yo'q"
                          : "Нет в наличии"
                        : currentLanguage === "uz"
                        ? "Savatga qo'shish"
                        : "Добавить в корзину"
                    }
                </button>
            </div>
        </div>
    `;

  return wrapper;
}

function renderPopularProducts() {
  const container = document.getElementById("popular-container");
  if (!container) return;

  const popularProducts = products.filter((p) => p.featured).slice(0, 6);

  container.innerHTML = "";

  popularProducts.forEach((product) => {
    const productBox = document.createElement("div");
    productBox.className = "popular-box";
    productBox.onclick = () => showProductDetails(product.id);

    const hasDiscount =
      product.originalPrice && product.originalPrice > product.price;

    productBox.innerHTML = `
            <div class="popular-box-img">
                <img src="images/${product.image}" alt="${
      product.name[currentLanguage]
    }"
                     onerror="this.src='https://via.placeholder.com/120x120?text=No+Image'">
            </div>
            <div class="popular-box-text">
                <a href="#" onclick="event.stopPropagation(); showProductDetails(${
                  product.id
                })">
                    ${product.name[currentLanguage]}
                </a>
                <span class="p-category">${getTranslatedCategory(
                  product.category
                )}</span>
                <span class="p-price">
                    ${formatPrice(product.price)}
                    ${
                      hasDiscount
                        ? `<del>${formatPrice(product.originalPrice)}</del>`
                        : ""
                    }
                </span>
            </div>
        `;

    container.appendChild(productBox);
  });
}

function getTranslatedCategory(category) {
  const translations = {
    skin: { uz: "Teri", ru: "Кожа" },
    makeup: { uz: "Bo'yanish", ru: "Макияж" },
    nail: { uz: "Tirnoq", ru: "Ногти" },
  };
  return translations[category]
    ? translations[category][currentLanguage]
    : category;
}

function setupProductFilters() {
  const filterButtons = document.querySelectorAll(".filter-list");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Get filter value
      const filter = this.getAttribute("data-filter");
      currentFilter = filter;

      // Filter products
      applyProductFilter(filter);
    });
  });
}

function applyProductFilter(filter) {
  const productWrappers = document.querySelectorAll(".new-product-box-wrapper");

  productWrappers.forEach((wrapper) => {
    if (filter === "all" || wrapper.classList.contains(filter)) {
      wrapper.style.display = "block";
      wrapper.classList.remove("hide");
      setTimeout(() => {
        wrapper.style.opacity = "1";
        wrapper.style.transform = "scale(1)";
      }, 10);
    } else {
      wrapper.style.opacity = "0";
      wrapper.style.transform = "scale(0.8)";
      setTimeout(() => {
        wrapper.style.display = "none";
      }, 300);
    }
  });
}

function performSearch() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase()
    .trim();

  if (searchTerm === "") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter((product) => {
      const nameUz = product.name.uz.toLowerCase();
      const nameRu = product.name.ru.toLowerCase();
      const category = getTranslatedCategory(product.category).toLowerCase();

      return (
        nameUz.includes(searchTerm) ||
        nameRu.includes(searchTerm) ||
        category.includes(searchTerm)
      );
    });
  }

  renderProducts();

  // Apply current filter to search results
  if (currentFilter !== "all") {
    setTimeout(() => applyProductFilter(currentFilter), 100);
  }
}

// Product Details Modal
function showProductDetails(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const detailsContainer = document.getElementById("product-details");

  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;

  detailsContainer.innerHTML = `
        <div class="product-detail-content">
            <div>
                <img src="images/${product.image}" alt="${
    product.name[currentLanguage]
  }" 
                     class="product-detail-image"
                     onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'">
            </div>
            <div class="product-detail-info">
                <div class="product-detail-category">${getTranslatedCategory(
                  product.category
                )}</div>
                <h2>${product.name[currentLanguage]}</h2>
                <div class="product-detail-price">
                    ${formatPrice(product.price)}
                    ${
                      hasDiscount
                        ? `<del style="color: #999; margin-left: 10px;">${formatPrice(
                            product.originalPrice
                          )}</del>`
                        : ""
                    }
                </div>
                
                <div class="product-detail-description">
                    <h4>${
                      currentLanguage === "uz" ? "Tavsif" : "Описание"
                    }:</h4>
                    <p>${product.description[currentLanguage]}</p>
                </div>
                
                <div class="product-detail-instructions">
                    <h4>${
                      currentLanguage === "uz"
                        ? "Foydalanish yo'riqnomasi"
                        : "Инструкция по применению"
                    }:</h4>
                    <p>${product.instructions[currentLanguage]}</p>
                </div>
                
                <div class="quantity-selector">
                    <label>${
                      currentLanguage === "uz" ? "Miqdor:" : "Количество:"
                    }</label>
                    <input type="number" id="product-quantity" value="1" min="1" max="10">
                </div>
                
                <button class="new-p-cart-btn" onclick="addToCartFromModal(${
                  product.id
                })" 
                        ${!product.inStock ? "disabled" : ""}>
                    ${
                      !product.inStock
                        ? currentLanguage === "uz"
                          ? "Sotuvda yo'q"
                          : "Нет в наличии"
                        : currentLanguage === "uz"
                        ? "Savatga qo'shish"
                        : "Добавить в корзину"
                    }
                </button>
            </div>
        </div>
    `;

  showModal("product-modal");
}

// Cart Management
function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p.id === productId);
  if (!product || !product.inStock) return;

  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
      addedAt: Date.now(),
    });
  }

  saveCart();
  updateCartUI();
  showSuccessMessage(
    currentLanguage === "uz"
      ? "Mahsulot savatga qo'shildi!"
      : "Товар добавлен в корзину!"
  );
}

function addToCartFromModal(productId) {
  const quantity =
    parseInt(document.getElementById("product-quantity").value) || 1;
  addToCart(productId, quantity);
  closeModal("product-modal");
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId);
  saveCart();
  updateCartUI();
}

function updateCartQuantity(productId, newQuantity) {
  const item = cart.find((item) => item.productId === productId);
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = newQuantity;
      saveCart();
      updateCartUI();
    }
  }
}

function updateCartUI() {
  updateCartCount();
  updateCartItems();
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalItems;
}

function updateCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #999;">
                <i class="fa-solid fa-shopping-cart" style="font-size: 3rem; margin-bottom: 15px;"></i>
                <p>${
                  currentLanguage === "uz" ? "Savat bo'sh" : "Корзина пуста"
                }</p>
            </div>
        `;
    cartTotalElement.textContent = "0 so'm";
    return;
  }

  let total = 0;
  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return;

    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <img src="images/${product.image}" alt="${
      product.name[currentLanguage]
    }" 
                 class="cart-item-image"
                 onerror="this.src='https://via.placeholder.com/60x60?text=No+Image'">
            <div class="cart-item-info">
                <div class="cart-item-name">${
                  product.name[currentLanguage]
                }</div>
                <div class="cart-item-price">${formatPrice(product.price)}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateCartQuantity(${
                      product.id
                    }, ${item.quantity - 1})">-</button>
                    <span style="margin: 0 10px; font-weight: 600;">${
                      item.quantity
                    }</span>
                    <button class="qty-btn" onclick="updateCartQuantity(${
                      product.id
                    }, ${item.quantity + 1})">+</button>
                    <button class="qty-btn" onclick="removeFromCart(${
                      product.id
                    })" 
                            style="background: #e74c3c; margin-left: 15px;">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;

    cartItemsContainer.appendChild(cartItem);
  });

  cartTotalElement.textContent = formatPrice(total);
}

function toggleCart() {
  const cartSidebar = document.getElementById("cart-sidebar");
  cartSidebar.classList.toggle("open");
}

// Checkout Process
function showCheckoutModal() {
  if (cart.length === 0) {
    showSuccessMessage(
      currentLanguage === "uz" ? "Savatingiz bo'sh!" : "Ваша корзина пуста!"
    );
    return;
  }

  updateOrderSummary();
  showModal("checkout-modal");
  toggleCart(); // Close cart sidebar
}

function updateOrderSummary() {
  const orderSummary = document.getElementById("order-summary");
  const orderTotal = document.getElementById("order-total");

  let total = 0;
  let summaryHTML = `<h4>${
    currentLanguage === "uz" ? "Buyurtma tafsilotlari" : "Детали заказа"
  }:</h4>`;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return;

    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    summaryHTML += `
            <div class="order-item">
                <span>${product.name[currentLanguage]} × ${item.quantity}</span>
                <span>${formatPrice(itemTotal)}</span>
            </div>
        `;
  });

  orderSummary.innerHTML = summaryHTML;
  orderTotal.textContent = formatPrice(total);
}

function handleCheckout(e) {
  e.preventDefault();

  const formData = {
    customerName: document.getElementById("customer-name").value.trim(),
    customerPhone: document.getElementById("customer-phone").value.trim(),
    customerAddress: document.getElementById("customer-address").value.trim(),
    orderNotes: document.getElementById("order-notes").value.trim(),
  };

  // Validate form
  if (
    !formData.customerName ||
    !formData.customerPhone ||
    !formData.customerAddress
  ) {
    showSuccessMessage(
      currentLanguage === "uz"
        ? "Iltimos, barcha majburiy maydonlarni to'ldiring!"
        : "Пожалуйста, заполните все обязательные поля!"
    );
    return;
  }

  // Create order
  const order = {
    id: Date.now(),
    orderNumber: "BS" + Date.now().toString().slice(-6),
    customer: formData,
    items: cart.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return {
        productId: item.productId,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        total: product.price * item.quantity,
      };
    }),
    total: cart.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.productId);
      return sum + product.price * item.quantity;
    }, 0),
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // Save order
  orders.push(order);
  saveOrders();

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();

  // Close modal and show success
  closeModal("checkout-modal");
  showSuccessMessage(
    currentLanguage === "uz"
      ? `Buyurtmangiz qabul qilindi! Buyurtma raqami: ${order.orderNumber}`
      : `Ваш заказ принят! Номер заказа: ${order.orderNumber}`
  );

  // Clear form
  document.getElementById("checkout-form").reset();
}

// Admin Panel
function showAdminLogin() {
  showModal("admin-login-modal");
}

function handleAdminLogin(e) {
  e.preventDefault();

  const username = document.getElementById("admin-username").value.trim();
  const password = document.getElementById("admin-password").value.trim();

  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    closeModal("admin-login-modal");
    showAdminPanel();
    document.getElementById("admin-login-form").reset();
  } else {
    showSuccessMessage(
      currentLanguage === "uz"
        ? "Login yoki parol noto'g'ri!"
        : "Неверный логин или пароль!"
    );
  }
}

function showAdminPanel() {
  document.getElementById("admin-panel").style.display = "block";
  document.body.style.overflow = "hidden";
  updateAdminStats();
  renderAdminOrders();
}

function logoutAdmin() {
  document.getElementById("admin-panel").style.display = "none";
  document.body.style.overflow = "auto";
}

function updateAdminStats() {
  const totalOrders = orders.length;
  const newOrders = orders.filter((order) => order.status === "pending").length;
  const totalSales = orders
    .filter((order) => order.status === "completed")
    .reduce((sum, order) => sum + order.total, 0);

  document.getElementById("total-orders").textContent = totalOrders;
  document.getElementById("new-orders").textContent = newOrders;
  document.getElementById("total-sales").textContent = formatPrice(totalSales);
}

function renderAdminOrders() {
  const ordersList = document.getElementById("orders-list");
  const statusFilter = document.getElementById("order-status-filter").value;

  let filteredOrders = orders;
  if (statusFilter !== "all") {
    filteredOrders = orders.filter((order) => order.status === statusFilter);
  }

  if (filteredOrders.length === 0) {
    ordersList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #999;">
                <i class="fa-solid fa-clipboard-list" style="font-size: 3rem; margin-bottom: 15px;"></i>
                <p>${
                  currentLanguage === "uz"
                    ? "Buyurtmalar topilmadi"
                    : "Заказы не найдены"
                }</p>
            </div>
        `;
    return;
  }

  ordersList.innerHTML = "";

  // Sort orders by date (newest first)
  filteredOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  filteredOrders.forEach((order) => {
    const orderCard = document.createElement("div");
    orderCard.className = "order-card";

    orderCard.innerHTML = `
            <div class="order-header">
                <div class="order-id">
                    ${currentLanguage === "uz" ? "Buyurtma" : "Заказ"} #${
      order.orderNumber
    }
                </div>
                <div class="order-status ${order.status}">${getStatusText(
      order.status
    )}</div>
            </div>
            
            <div class="order-details">
                <div class="order-customer">
                    <h4>${
                      currentLanguage === "uz"
                        ? "Mijoz ma'lumotlari"
                        : "Данные клиента"
                    }</h4>
                    <p><strong>${
                      currentLanguage === "uz" ? "Ism:" : "Имя:"
                    }</strong> ${order.customer.customerName}</p>
                    <p><strong>${
                      currentLanguage === "uz" ? "Telefon:" : "Телефон:"
                    }</strong> ${order.customer.customerPhone}</p>
                    <p><strong>${
                      currentLanguage === "uz" ? "Manzil:" : "Адрес:"
                    }</strong> ${order.customer.customerAddress}</p>
                    ${
                      order.customer.orderNotes
                        ? `<p><strong>${
                            currentLanguage === "uz" ? "Izoh:" : "Комментарий:"
                          }</strong> ${order.customer.orderNotes}</p>`
                        : ""
                    }
                    <p><strong>${
                      currentLanguage === "uz" ? "Sana:" : "Дата:"
                    }</strong> ${formatDate(order.createdAt)}</p>
                </div>
                
                <div class="order-items-summary">
                    <h4>${
                      currentLanguage === "uz" ? "Mahsulotlar" : "Товары"
                    }</h4>
                    ${order.items
                      .map(
                        (item) => `
                        <div class="order-item">
                            <span>${item.name[currentLanguage]} × ${
                          item.quantity
                        }</span>
                            <span>${formatPrice(item.total)}</span>
                        </div>
                    `
                      )
                      .join("")}
                    <div class="order-item" style="border-top: 2px solid #ddd; margin-top: 10px; padding-top: 10px; font-weight: bold;">
                        <span>${
                          currentLanguage === "uz" ? "Jami:" : "Итого:"
                        }</span>
                        <span>${formatPrice(order.total)}</span>
                    </div>
                </div>
            </div>
            
            <div class="order-actions">
                ${
                  order.status === "pending"
                    ? `
                    <button class="status-btn processing" onclick="updateOrderStatus(${
                      order.id
                    }, 'processing')">
                        ${
                          currentLanguage === "uz"
                            ? "Jarayonga o'tkazish"
                            : "Взять в работу"
                        }
                    </button>
                `
                    : ""
                }
                
                ${
                  order.status === "processing"
                    ? `
                    <button class="status-btn completed" onclick="updateOrderStatus(${
                      order.id
                    }, 'completed')">
                        ${currentLanguage === "uz" ? "Bajarish" : "Завершить"}
                    </button>
                `
                    : ""
                }
                
                ${
                  order.status !== "cancelled" && order.status !== "completed"
                    ? `
                    <button class="status-btn cancelled" onclick="updateOrderStatus(${
                      order.id
                    }, 'cancelled')">
                        ${
                          currentLanguage === "uz" ? "Bekor qilish" : "Отменить"
                        }
                    </button>
                `
                    : ""
                }
            </div>
        `;

    ordersList.appendChild(orderCard);
  });

  // Setup filter change listener
  document.getElementById("order-status-filter").onchange = renderAdminOrders;
}

function updateOrderStatus(orderId, newStatus) {
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = newStatus;
    order.updatedAt = new Date().toISOString();
    saveOrders();
    updateAdminStats();
    renderAdminOrders();
    showSuccessMessage(
      currentLanguage === "uz"
        ? "Buyurtma holati yangilandi!"
        : "Статус заказа обновлен!"
    );
  }
}

function getStatusText(status) {
  const statusTexts = {
    pending: { uz: "Kutilmoqda", ru: "Ожидается" },
    processing: { uz: "Jarayonda", ru: "В процессе" },
    completed: { uz: "Bajarildi", ru: "Выполнен" },
    cancelled: { uz: "Bekor qilindi", ru: "Отменен" },
  };
  return statusTexts[status] ? statusTexts[status][currentLanguage] : status;
}

// Utility Functions
function formatPrice(price) {
  return new Intl.NumberFormat("uz-UZ").format(price) + " so'm";
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleDateString(
    currentLanguage === "uz" ? "uz-UZ" : "ru-RU",
    options
  );
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Modal Management
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
}

function closeAllModals() {
  const modals = document.querySelectorAll(".modal.show");
  modals.forEach((modal) => {
    modal.classList.remove("show");
  });
  document.body.style.overflow = "auto";

  // Close cart sidebar if open
  const cartSidebar = document.getElementById("cart-sidebar");
  if (cartSidebar.classList.contains("open")) {
    toggleCart();
  }
}

// Success Message
function showSuccessMessage(message) {
  const successMessage = document.getElementById("success-message");
  const successText = document.getElementById("success-text");

  successText.textContent = message;
  successMessage.classList.add("show");

  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 4000);
}

// Loading Overlay
function showLoading() {
  document.getElementById("loading-overlay").classList.add("show");
}

function hideLoading() {
  document.getElementById("loading-overlay").classList.remove("show");
}

// Initialize discount badge CSS if not present
const style = document.createElement("style");
style.textContent = `
    .discount-badge {
        position: absolute;
        top: 15px;
        right: 15px;
        background: linear-gradient(135deg, #e74c3c, #c0392b);
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: bold;
        z-index: 2;
    }
`;
document.head.appendChild(style);
