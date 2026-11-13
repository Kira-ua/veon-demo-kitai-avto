// Facts for the homepage. Source: veon/client.json (B-F002, B-F004…B-F010, company.contacts) and
// the client's catalogue as captured on 2026-11-13 (audit/screens/home-desktop-*.png, audit/facts.json).
// Nothing here is invented: no ratings, no counts beyond B-F005, no messengers.

export interface Phone { display: string; href: string; }

export const phones: Phone[] = [
  { display: "096 747-40-50", href: "tel:+380967474050" },
  { display: "066 353-21-22", href: "tel:+380663532122" },
  { display: "067 535-99-41", href: "tel:+380675359941" },
  { display: "066 351-65-30", href: "tel:+380663516530" },
];
export const mainPhone = phones[0];
export const secondPhone = phones[1];

export const email = "aleksrusak1973@gmail.com";
export const address = { city: "м. Кременчук", street: "вул. Велика Набережна, 41а", short: "Велика Набережна, 41а" };
export const hours = { full: "Пн–Пт 10:00–18:00", weekend: "Сб–Нд вихідні", compact: "Пн–Пт 10–18" };
export const mapUrl = "https://www.google.com/maps?q=49.062220,33.436797";
export const geo = { lat: 49.06222, lng: 33.436797 };

export const SOON = "Розділ у розробці";

export interface Brand { name: string; models?: string[]; }
// Lead brands: order is a studio assumption (concept.md §5); models are those confirmed by the client's catalogue.
export const leadBrands: Brand[] = [
  { name: "Chery", models: ["Amulet A11", "A13", "Beat S18", "Cross Eastar B14", "E5"] },
  { name: "Geely", models: ["CK", "CK2", "MK", "MK2", "GC5", "FC"] },
  { name: "Great Wall", models: ["Hover H2"] },
  { name: "BYD" },
];
export const moreBrands: Brand[] = [
  { name: "JAC" }, { name: "Lifan", models: ["620"] }, { name: "FAW" }, { name: "Foton" },
  { name: "Chana Benni" }, { name: "Changhe Ideal II" }, { name: "MAXUS EV30" }, { name: "Weltmeister" },
  { name: "Lanos" },
];
export const productGroups = [
  "Оливний фільтр", "Паливний фільтр", "Повітряний фільтр", "Фільтр салону",
  "Автомобільна олива", "Автохімія", "Присадки для авто", "Автокосметика", "Збірна група",
];

export interface Product {
  /** part name before the fitment, as in the catalogue (Ukrainian) */
  part: string;
  /** part code from the catalogue name, if any */
  code?: string;
  /** the rest of the part name after the code */
  partTail?: string;
  /** cars it fits — set in weight 600 */
  fit: string;
  price: number;
  img: string;
  alt: string;
}

// Six real positions from the client's homepage carousels (Новинки, Хіти продажу, Рекомендуємо), prices unchanged.
export const products: Product[] = [
  { part: "Подушка двигуна задня", fit: "Geely GC5", price: 2000, img: "podushka-dvyguna-geely-gc5", alt: "Задня подушка двигуна Geely GC5 на столі поруч із візиткою магазину" },
  { part: "Ланцюг роздавальної коробки", fit: "Great Wall Hover (H2, 2.4), Great Wall Haval (H3, 2.0)", price: 4150, img: "lantsiug-great-wall-hover", alt: "Ланцюг роздавальної коробки Great Wall Hover на світлому фоні" },
  { part: "Сайлент-блок задньої балки", code: "1064001643", partTail: "(оригінал)", fit: "Geely FC", price: 422, img: "sailent-blok-geely-fc", alt: "Сайлент-блок задньої балки Geely FC поруч із лінійкою" },
  { part: "Абсорбер паливних парів", fit: "Lifan 620", price: 670, img: "absorber-lifan-620", alt: "Абсорбер паливних парів Lifan 620 з візиткою магазину" },
  { part: "Вал 1-й, 2-й передач (оригінал)", fit: "Geely CK, CK2, Geely MK, MK2", price: 170, img: "val-peredach-geely-ck", alt: "Вал 1-й і 2-й передач Geely CK з візиткою магазину" },
  { part: "Емблема AMULET (напис) (оригінал)", fit: "Chery Amulet A11", price: 240, img: "emblema-chery-amulet", alt: "Хромована емблема з написом Amulet для Chery Amulet A11" },
];

export const carriers = ["Нова Пошта", "Автолюкс", "Наш Час", "Гюнсел", "Нічний експрес"];
export const payments = ["Готівкою в магазині", "Переказ на картку ПриватБанку", "Безготівковий розрахунок", "Visa і MasterCard через LiqPay"];

export const nav = [
  { href: "#catalog", label: "Каталог" },
  { href: "#request", label: "Як замовити" },
  { href: "#delivery", label: "Доставка і оплата" },
  { href: "#repair", label: "Ремонт" },
  { href: "#contacts", label: "Контакти" },
];

export const futurePages = ["Каталог", "Пошук", "Доставка та оплата", "СТО", "Про нас", "Договір оферти", "Політика конфіденційності"];

export const formatPrice = (n: number): string => `${n} грн`;
