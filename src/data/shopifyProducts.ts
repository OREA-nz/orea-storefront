/**
 * Static product data derived from the Shopify product export.
 * Source of truth for variant IDs, prices, and product type classification.
 *
 * productType:
 *   'metal+carat' — variants are keyed as "Metal / Carat" (e.g. "18k White Gold / 1.5 CT")
 *   'metal-only'  — variants are keyed as metal name only (e.g. "18k Yellow Gold")
 *
 * Ring Size and Diamond Shape are NOT Shopify variant options.
 * They are passed as cart line item attributes at checkout time.
 *
 * NOTE: pave-half-eternity-band
 *   The codebase uses the handle 'pave-half-eternity-band' throughout.
 *   Shopify exports this product under the handle 'pav-half-eternity-band' (missing the 'e').
 *   If you need to query Shopify directly by handle for this product, use 'pav-half-eternity-band'.
 */

export interface ShopifyProductVariant {
  name: string;       // e.g. '18k White Gold' or '18k White Gold / 1.5 CT'
  variantId: string;
  price: number;
}

export interface ShopifyProductEntry {
  title: string;
  productId: string;
  productType: 'metal+carat' | 'metal-only';
  variants: ShopifyProductVariant[];
}

export const SHOPIFY_PRODUCTS: Record<string, ShopifyProductEntry> = {
  'alternating-diamond-band': {
    title: 'Alternating Diamond Band',
    productId: '10275338551577',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '52002916598041', price: 2500 },
      { name: '14k Yellow Gold', variantId: '52002912469273', price: 2500 },
      { name: '18k White Gold', variantId: '52002904211737', price: 2900 },
      { name: '18k Yellow Gold', variantId: '52002908340505', price: 2900 },
      { name: 'Platinum', variantId: '52002900082969', price: 2900 },
    ],
  },

  'asscher-solitaire-ring': {
    title: 'Asscher Solitaire Ring',
    productId: '10227429048601',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 1.0 CT', variantId: '52003927556377', price: 3190 },
      { name: '14k White Gold / 1.5 CT', variantId: '52003927589145', price: 3990 },
      { name: '14k White Gold / 2.0 CT', variantId: '52003927621913', price: 4790 },
      { name: '14k White Gold / 2.5 CT', variantId: '52003927654681', price: 5590 },
      { name: '14k White Gold / 3.0 CT', variantId: '52003927687449', price: 6390 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '52003927392537', price: 3190 },
      { name: '14k Yellow Gold / 1.5 CT', variantId: '52003927425305', price: 3990 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '52003927458073', price: 4790 },
      { name: '14k Yellow Gold / 2.5 CT', variantId: '52003927490841', price: 5590 },
      { name: '14k Yellow Gold / 3.0 CT', variantId: '52003927523609', price: 6390 },
      { name: '18k White Gold / 1.0 CT', variantId: '51811133489433', price: 3990 },
      { name: '18k White Gold / 1.5 CT', variantId: '51811217277209', price: 4990 },
      { name: '18k White Gold / 2.0 CT', variantId: '51811217309977', price: 5990 },
      { name: '18k White Gold / 2.5 CT', variantId: '51811217342745', price: 6990 },
      { name: '18k White Gold / 3.0 CT', variantId: '51811217375513', price: 7990 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51811133522201', price: 3990 },
      { name: '18k Yellow Gold / 1.5 CT', variantId: '51811217408281', price: 4990 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '51811217441049', price: 5990 },
      { name: '18k Yellow Gold / 2.5 CT', variantId: '51811217473817', price: 6990 },
      { name: '18k Yellow Gold / 3.0 CT', variantId: '51811217506585', price: 7990 },
      { name: 'Platinum / 1.0 CT', variantId: '51811133456665', price: 3990 },
      { name: 'Platinum / 1.5 CT', variantId: '51811217146137', price: 4990 },
      { name: 'Platinum / 2.0 CT', variantId: '51811217178905', price: 5990 },
      { name: 'Platinum / 2.5 CT', variantId: '51811217211673', price: 6990 },
      { name: 'Platinum / 3.0 CT', variantId: '51811217244441', price: 7990 },
    ],
  },

  'cascade-diamond-earrings': {
    title: 'Cascade Diamond Earrings',
    productId: '10239918670105',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51858244600089', price: 3450 },
      { name: '14k Yellow Gold', variantId: '51858244632857', price: 3450 },
      { name: '18k White Gold', variantId: '51858244534553', price: 4250 },
      { name: '18k Yellow Gold', variantId: '51858244567321', price: 4250 },
    ],
  },

  'clover-diamond-studs': {
    title: 'Clover Diamond Studs',
    productId: '10239917654297',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51858241224985', price: 1150 },
      { name: '14k Yellow Gold', variantId: '51858241257753', price: 1150 },
      { name: '18k White Gold', variantId: '51858241159449', price: 1450 },
      { name: '18k Yellow Gold', variantId: '51858241192217', price: 1450 },
    ],
  },

  'cross-diamond-pendant': {
    title: 'Cross Diamond Pendant',
    productId: '10227522109721',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51811435675929', price: 1550 },
      { name: '14k Yellow Gold', variantId: '51811435708697', price: 1550 },
      { name: '18k White Gold', variantId: '51811435610393', price: 1950 },
      { name: '18k Yellow Gold', variantId: '51811435643161', price: 1950 },
    ],
  },

  'curved-bar-diamond-necklace': {
    title: 'Curved Bar Diamond Necklace',
    productId: '10226603295001',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51808191938841', price: 1400 },
      { name: '14k Yellow Gold', variantId: '51808191906073', price: 1400 },
      { name: '18k White Gold', variantId: '51808191873305', price: 1750 },
      { name: '18k Yellow Gold', variantId: '51808191840537', price: 1750 },
    ],
  },

  'cushion-solitaire-ring': {
    title: 'Cushion Solitaire Ring',
    productId: '10275337535769',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 1.0 CT', variantId: '52002868887833', price: 3190 },
      { name: '14k White Gold / 1.5 CT', variantId: '52002869575961', price: 3990 },
      { name: '14k White Gold / 2.0 CT', variantId: '52002870264089', price: 4790 },
      { name: '14k White Gold / 2.5 CT', variantId: '52002870952217', price: 5590 },
      { name: '14k White Gold / 3.0 CT', variantId: '52002871640345', price: 6390 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '52002864759065', price: 3190 },
      { name: '14k Yellow Gold / 1.5 CT', variantId: '52002865447193', price: 3990 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '52002866135321', price: 4790 },
      { name: '14k Yellow Gold / 2.5 CT', variantId: '52002866823449', price: 5590 },
      { name: '14k Yellow Gold / 3.0 CT', variantId: '52002867511577', price: 6390 },
      { name: '18k White Gold / 1.0 CT', variantId: '52002856501529', price: 3990 },
      { name: '18k White Gold / 1.5 CT', variantId: '52002857189657', price: 4990 },
      { name: '18k White Gold / 2.0 CT', variantId: '52002857877785', price: 5990 },
      { name: '18k White Gold / 2.5 CT', variantId: '52002858565913', price: 6990 },
      { name: '18k White Gold / 3.0 CT', variantId: '52002859254041', price: 7990 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '52002860630297', price: 3990 },
      { name: '18k Yellow Gold / 1.5 CT', variantId: '52002861318425', price: 4990 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '52002862006553', price: 5990 },
      { name: '18k Yellow Gold / 2.5 CT', variantId: '52002862694681', price: 6990 },
      { name: '18k Yellow Gold / 3.0 CT', variantId: '52002863382809', price: 7990 },
      { name: 'Platinum / 1.0 CT', variantId: '52002852372761', price: 3990 },
      { name: 'Platinum / 1.5 CT', variantId: '52002853060889', price: 4990 },
      { name: 'Platinum / 2.0 CT', variantId: '52002853749017', price: 5990 },
      { name: 'Platinum / 2.5 CT', variantId: '52002854437145', price: 6990 },
      { name: 'Platinum / 3.0 CT', variantId: '52002855125273', price: 7990 },
    ],
  },

  'emerald-solitaire-ring': {
    title: 'Emerald Solitaire Ring',
    productId: '10227771736345',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 1.0 CT', variantId: '51904827031833', price: 3190 },
      { name: '14k White Gold / 1.5 CT', variantId: '51904827719961', price: 3990 },
      { name: '14k White Gold / 2.0 CT', variantId: '51904828473625', price: 4790 },
      { name: '14k White Gold / 2.5 CT', variantId: '51904829161753', price: 5590 },
      { name: '14k White Gold / 3.0 CT', variantId: '51904829849881', price: 6390 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '51904822903065', price: 3190 },
      { name: '14k Yellow Gold / 1.5 CT', variantId: '51904823591193', price: 3990 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '51904824279321', price: 4790 },
      { name: '14k Yellow Gold / 2.5 CT', variantId: '51904824967449', price: 5590 },
      { name: '14k Yellow Gold / 3.0 CT', variantId: '51904825655577', price: 6390 },
      { name: '18k White Gold / 1.0 CT', variantId: '51813213962521', price: 3990 },
      { name: '18k White Gold / 1.5 CT', variantId: '51813214060825', price: 4990 },
      { name: '18k White Gold / 2.0 CT', variantId: '51813214159129', price: 5990 },
      { name: '18k White Gold / 2.5 CT', variantId: '51813214257433', price: 6990 },
      { name: '18k White Gold / 3.0 CT', variantId: '51813214355737', price: 7990 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51813213995289', price: 3990 },
      { name: '18k Yellow Gold / 1.5 CT', variantId: '51813214093593', price: 4990 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '51813214191897', price: 5990 },
      { name: '18k Yellow Gold / 2.5 CT', variantId: '51813214290201', price: 6990 },
      { name: '18k Yellow Gold / 3.0 CT', variantId: '51813214388505', price: 7990 },
      { name: 'Platinum / 1.0 CT', variantId: '51813213929753', price: 3990 },
      { name: 'Platinum / 1.5 CT', variantId: '51813214028057', price: 4990 },
      { name: 'Platinum / 2.0 CT', variantId: '51813214126361', price: 5990 },
      { name: 'Platinum / 2.5 CT', variantId: '51813214224665', price: 6990 },
      { name: 'Platinum / 3.0 CT', variantId: '51813214322969', price: 7990 },
    ],
  },

  'five-stone-bezel-diamond-bracelet': {
    title: 'Five Stone Bezel Diamond Bracelet',
    productId: '10227725009177',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51813120049433', price: 4750 },
      { name: '14k Yellow Gold', variantId: '51813120082201', price: 4750 },
      { name: '18k White Gold', variantId: '51813119983897', price: 5950 },
      { name: '18k Yellow Gold', variantId: '51813120016665', price: 5950 },
    ],
  },

  'floating-bezel-diamond-bracelet': {
    title: 'Floating Bezel Diamond Bracelet',
    productId: '10227718291737',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51813104812313', price: 2350 },
      { name: '14k Yellow Gold', variantId: '51813104845081', price: 2350 },
      { name: '18k White Gold', variantId: '51813104746777', price: 2950 },
      { name: '18k Yellow Gold', variantId: '51813104779545', price: 2950 },
    ],
  },

  'floating-diamond-necklace': {
    title: 'Floating Diamond Necklace',
    productId: '10227286507801',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51810824945945', price: 3150 },
      { name: '14k Yellow Gold', variantId: '51810824978713', price: 3150 },
      { name: '18k White Gold', variantId: '51810824880409', price: 3950 },
      { name: '18k Yellow Gold', variantId: '51810824913177', price: 3950 },
    ],
  },

  'heart-diamond-necklace': {
    title: 'Heart Diamond Necklace',
    productId: '10227324453145',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51810888220953', price: 1450 },
      { name: '14k Yellow Gold', variantId: '51810888253721', price: 1450 },
      { name: '18k White Gold', variantId: '51810888155417', price: 1850 },
      { name: '18k Yellow Gold', variantId: '51810888188185', price: 1850 },
    ],
  },

  'heart-diamond-studs': {
    title: 'Heart Diamond Studs',
    productId: '10227665830169',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51812951032089', price: 1050 },
      { name: '14k Yellow Gold', variantId: '51812951064857', price: 1050 },
      { name: '18k White Gold', variantId: '51812950966553', price: 1350 },
      { name: '18k Yellow Gold', variantId: '51812950999321', price: 1350 },
    ],
  },

  'hera-trilogy-three-stone-ring': {
    title: 'Hera Trilogy Three Stone Ring',
    productId: '10227421020441',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51811118514457', price: 5200 },
      { name: '14k Yellow Gold', variantId: '51811118547225', price: 5200 },
      { name: '18k White Gold', variantId: '51811118448921', price: 6500 },
      { name: '18k Yellow Gold', variantId: '51811118481689', price: 6500 },
      { name: 'Platinum', variantId: '51811118416153', price: 6500 },
    ],
  },

  'marquise-solitaire-ring': {
    title: 'Marquise Solitaire Ring',
    productId: '10227745063193',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 1.0 CT', variantId: '52003881812249', price: 3190 },
      { name: '14k White Gold / 1.5 CT', variantId: '52003881845017', price: 3990 },
      { name: '14k White Gold / 2.0 CT', variantId: '52003881877785', price: 4790 },
      { name: '14k White Gold / 2.5 CT', variantId: '52003881910553', price: 5590 },
      { name: '14k White Gold / 3.0 CT', variantId: '52003881943321', price: 6390 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '52003881648409', price: 3190 },
      { name: '14k Yellow Gold / 1.5 CT', variantId: '52003881681177', price: 3990 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '52003881713945', price: 4790 },
      { name: '14k Yellow Gold / 2.5 CT', variantId: '52003881746713', price: 5590 },
      { name: '14k Yellow Gold / 3.0 CT', variantId: '52003881779481', price: 6390 },
      { name: '18k White Gold / 1.0 CT', variantId: '51813151277337', price: 3990 },
      { name: '18k White Gold / 1.5 CT', variantId: '51813151375641', price: 4990 },
      { name: '18k White Gold / 2.0 CT', variantId: '51813151473945', price: 5990 },
      { name: '18k White Gold / 2.5 CT', variantId: '51813151572249', price: 6990 },
      { name: '18k White Gold / 3.0 CT', variantId: '51813151670553', price: 7990 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51813151310105', price: 3990 },
      { name: '18k Yellow Gold / 1.5 CT', variantId: '51813151408409', price: 4990 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '51813151506713', price: 5990 },
      { name: '18k Yellow Gold / 2.5 CT', variantId: '51813151605017', price: 6990 },
      { name: '18k Yellow Gold / 3.0 CT', variantId: '51813151703321', price: 7990 },
      { name: 'Platinum / 1.0 CT', variantId: '51813151244569', price: 3990 },
      { name: 'Platinum / 1.5 CT', variantId: '51813151342873', price: 4990 },
      { name: 'Platinum / 2.0 CT', variantId: '51813151441177', price: 5990 },
      { name: 'Platinum / 2.5 CT', variantId: '51813151539481', price: 6990 },
      { name: 'Platinum / 3.0 CT', variantId: '51813151637785', price: 7990 },
    ],
  },

  'nova-trilogy-three-stone-ring': {
    title: 'Nova Trilogy Three Stone Ring',
    productId: '10275338977561',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '52002938093849', price: 6500 },
      { name: '14k Yellow Gold', variantId: '52002933965081', price: 6500 },
      { name: '18k White Gold', variantId: '52002925707545', price: 8100 },
      { name: '18k Yellow Gold', variantId: '52002929836313', price: 8100 },
      { name: 'Platinum', variantId: '52002921578777', price: 8100 },
    ],
  },

  'orbit-bezel-diamond-necklace': {
    title: 'Orbit Bezel Diamond Necklace',
    productId: '10273557971225',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 0.25 CT', variantId: '52006641238297', price: 1250 },
      { name: '14k White Gold / 0.5 CT', variantId: '51992824316185', price: 1850 },
      { name: '14k White Gold / 1.0 CT', variantId: '51992824480025', price: 2450 },
      { name: '14k Yellow Gold / 0.25 CT', variantId: '52006641205529', price: 1250 },
      { name: '14k Yellow Gold / 0.5 CT', variantId: '51992824348953', price: 1850 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '51992824512793', price: 2450 },
      { name: '18k White Gold / 0.25 CT', variantId: '52006641172761', price: 1550 },
      { name: '18k White Gold / 0.5 CT', variantId: '51992824250649', price: 2300 },
      { name: '18k White Gold / 1.0 CT', variantId: '51992824414489', price: 3050 },
      { name: '18k Yellow Gold / 0.25 CT', variantId: '52006641139993', price: 1550 },
      { name: '18k Yellow Gold / 0.5 CT', variantId: '51992824283417', price: 2300 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51992824447257', price: 3050 },
    ],
  },

  'orbit-bezel-diamond-studs': {
    title: 'Orbit Bezel Diamond Studs',
    productId: '10227678675225',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 0.5 CT', variantId: '52006640845081', price: 1450 },
      { name: '14k White Gold / 1.0 CT', variantId: '51812994613529', price: 2050 },
      { name: '14k White Gold / 2.0 CT', variantId: '51812994777369', price: 2650 },
      { name: '14k Yellow Gold / 0.5 CT', variantId: '52006640812313', price: 1450 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '51812994646297', price: 2050 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '51812994810137', price: 2650 },
      { name: '18k White Gold / 0.5 CT', variantId: '52006640779545', price: 1850 },
      { name: '18k White Gold / 1.0 CT', variantId: '51812994547993', price: 2650 },
      { name: '18k White Gold / 2.0 CT', variantId: '51812994711833', price: 3450 },
      { name: '18k Yellow Gold / 0.5 CT', variantId: '52006640746777', price: 1850 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51812994580761', price: 2650 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '51812994744601', price: 3450 },
    ],
  },

  'oval-half-eternity-band': {
    title: 'Oval Half Eternity Band',
    productId: '10275337830681',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '52002889892121', price: 3600 },
      { name: '14k Yellow Gold', variantId: '52002885763353', price: 3600 },
      { name: '18k White Gold', variantId: '52002877505817', price: 4500 },
      { name: '18k Yellow Gold', variantId: '52002881634585', price: 4500 },
      { name: 'Platinum', variantId: '52002873377049', price: 4500 },
    ],
  },

  'oval-solitaire-ring': {
    title: 'Oval Solitaire Ring',
    productId: '10227753713945',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 1.0 CT', variantId: '52003854090521', price: 3190 },
      { name: '14k White Gold / 1.5 CT', variantId: '52003854123289', price: 3990 },
      { name: '14k White Gold / 2.0 CT', variantId: '52003854156057', price: 4790 },
      { name: '14k White Gold / 2.5 CT', variantId: '52003854188825', price: 5590 },
      { name: '14k White Gold / 3.0 CT', variantId: '52003854221593', price: 6390 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '52003853926681', price: 3190 },
      { name: '14k Yellow Gold / 1.5 CT', variantId: '52003853959449', price: 3990 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '52003853992217', price: 4790 },
      { name: '14k Yellow Gold / 2.5 CT', variantId: '52003854024985', price: 5590 },
      { name: '14k Yellow Gold / 3.0 CT', variantId: '52003854057753', price: 6390 },
      { name: '18k White Gold / 1.0 CT', variantId: '51813165990169', price: 3990 },
      { name: '18k White Gold / 1.5 CT', variantId: '51813166088473', price: 4990 },
      { name: '18k White Gold / 2.0 CT', variantId: '51813166186777', price: 5990 },
      { name: '18k White Gold / 2.5 CT', variantId: '51813166285081', price: 6990 },
      { name: '18k White Gold / 3.0 CT', variantId: '51813166383385', price: 7990 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51813166022937', price: 3990 },
      { name: '18k Yellow Gold / 1.5 CT', variantId: '51813166121241', price: 4990 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '51813166219545', price: 5990 },
      { name: '18k Yellow Gold / 2.5 CT', variantId: '51813166317849', price: 6990 },
      { name: '18k Yellow Gold / 3.0 CT', variantId: '51813166416153', price: 7990 },
      { name: 'Platinum / 1.0 CT', variantId: '51813165957401', price: 3990 },
      { name: 'Platinum / 1.5 CT', variantId: '51813166055705', price: 4990 },
      { name: 'Platinum / 2.0 CT', variantId: '51813166154009', price: 5990 },
      { name: 'Platinum / 2.5 CT', variantId: '51813166252313', price: 6990 },
      { name: 'Platinum / 3.0 CT', variantId: '51813166350617', price: 7990 },
    ],
  },

  // NOTE: Codebase key is 'pave-half-eternity-band'.
  // Shopify exports this product under the handle 'pav-half-eternity-band' (no trailing 'e').
  // Use this key throughout the codebase. When querying Shopify by handle, use 'pav-half-eternity-band'.
  'pave-half-eternity-band': {
    title: 'Pavé Half Eternity Band',
    productId: '10227381469465',
    productType: 'metal-only',
    variants: [
      { name: '14k White Gold', variantId: '51811038822681', price: 2600 },
      { name: '14k Yellow Gold', variantId: '51811038855449', price: 2600 },
      { name: '18k White Gold', variantId: '51811038757145', price: 3300 },
      { name: '18k Yellow Gold', variantId: '51811038789913', price: 3300 },
      { name: 'Platinum', variantId: '51811038724377', price: 3300 },
    ],
  },

  'pear-solitaire-ring': {
    title: 'Pear Solitaire Ring',
    productId: '10227764494617',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 1.0 CT', variantId: '52003823091993', price: 3190 },
      { name: '14k White Gold / 1.5 CT', variantId: '52003823124761', price: 3990 },
      { name: '14k White Gold / 2.0 CT', variantId: '52003823157529', price: 4790 },
      { name: '14k White Gold / 2.5 CT', variantId: '52003823190297', price: 5590 },
      { name: '14k White Gold / 3.0 CT', variantId: '52003823223065', price: 6390 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '52003822928153', price: 3190 },
      { name: '14k Yellow Gold / 1.5 CT', variantId: '52003822960921', price: 3990 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '52003822993689', price: 4790 },
      { name: '14k Yellow Gold / 2.5 CT', variantId: '52003823026457', price: 5590 },
      { name: '14k Yellow Gold / 3.0 CT', variantId: '52003823059225', price: 6390 },
      { name: '18k White Gold / 1.0 CT', variantId: '51813197152537', price: 3990 },
      { name: '18k White Gold / 1.5 CT', variantId: '51813197250841', price: 4990 },
      { name: '18k White Gold / 2.0 CT', variantId: '51813197349145', price: 5990 },
      { name: '18k White Gold / 2.5 CT', variantId: '51813197447449', price: 6990 },
      { name: '18k White Gold / 3.0 CT', variantId: '51813197545753', price: 7990 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51813197185305', price: 3990 },
      { name: '18k Yellow Gold / 1.5 CT', variantId: '51813197283609', price: 4990 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '51813197381913', price: 5990 },
      { name: '18k Yellow Gold / 2.5 CT', variantId: '51813197480217', price: 6990 },
      { name: '18k Yellow Gold / 3.0 CT', variantId: '51813197578521', price: 7990 },
      { name: 'Platinum / 1.0 CT', variantId: '51813197119769', price: 3990 },
      { name: 'Platinum / 1.5 CT', variantId: '51813197218073', price: 4990 },
      { name: 'Platinum / 2.0 CT', variantId: '51813197316377', price: 5990 },
      { name: 'Platinum / 2.5 CT', variantId: '51813197414681', price: 6990 },
      { name: 'Platinum / 3.0 CT', variantId: '51813197512985', price: 7990 },
    ],
  },

  'princess-solitaire-ring': {
    title: 'Princess Solitaire Ring',
    productId: '10227766853913',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 1.0 CT', variantId: '52003788783897', price: 3190 },
      { name: '14k White Gold / 1.5 CT', variantId: '52003788816665', price: 3990 },
      { name: '14k White Gold / 2.0 CT', variantId: '52003788849433', price: 4790 },
      { name: '14k White Gold / 2.5 CT', variantId: '52003788882201', price: 5590 },
      { name: '14k White Gold / 3.0 CT', variantId: '52003788914969', price: 6390 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '52003788587289', price: 3190 },
      { name: '14k Yellow Gold / 1.5 CT', variantId: '52003788620057', price: 3990 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '52003788652825', price: 4790 },
      { name: '14k Yellow Gold / 2.5 CT', variantId: '52003788685593', price: 5590 },
      { name: '14k Yellow Gold / 3.0 CT', variantId: '52003788718361', price: 6390 },
      { name: '18k White Gold / 1.0 CT', variantId: '51813201183001', price: 3990 },
      { name: '18k White Gold / 1.5 CT', variantId: '51813201281305', price: 4990 },
      { name: '18k White Gold / 2.0 CT', variantId: '51813201379609', price: 5990 },
      { name: '18k White Gold / 2.5 CT', variantId: '51813201477913', price: 6990 },
      { name: '18k White Gold / 3.0 CT', variantId: '51813201576217', price: 7990 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51813201215769', price: 3990 },
      { name: '18k Yellow Gold / 1.5 CT', variantId: '51813201314073', price: 4990 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '51813201412377', price: 5990 },
      { name: '18k Yellow Gold / 2.5 CT', variantId: '51813201510681', price: 6990 },
      { name: '18k Yellow Gold / 3.0 CT', variantId: '51813201608985', price: 7990 },
      { name: 'Platinum / 1.0 CT', variantId: '51813201150233', price: 3990 },
      { name: 'Platinum / 1.5 CT', variantId: '51813201248537', price: 4990 },
      { name: 'Platinum / 2.0 CT', variantId: '51813201346841', price: 5990 },
      { name: 'Platinum / 2.5 CT', variantId: '51813201445145', price: 6990 },
      { name: 'Platinum / 3.0 CT', variantId: '51813201543449', price: 7990 },
    ],
  },

  'radiant-solitaire-ring': {
    title: 'Radiant Solitaire Ring',
    productId: '10275337306393',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 1.0 CT', variantId: '52002846736665', price: 3190 },
      { name: '14k White Gold / 1.5 CT', variantId: '52002847424793', price: 3990 },
      { name: '14k White Gold / 2.0 CT', variantId: '52002848112921', price: 4790 },
      { name: '14k White Gold / 2.5 CT', variantId: '52002848801049', price: 5590 },
      { name: '14k White Gold / 3.0 CT', variantId: '52002849489177', price: 6390 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '52002842607897', price: 3190 },
      { name: '14k Yellow Gold / 1.5 CT', variantId: '52002843296025', price: 3990 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '52002843984153', price: 4790 },
      { name: '14k Yellow Gold / 2.5 CT', variantId: '52002844672281', price: 5590 },
      { name: '14k Yellow Gold / 3.0 CT', variantId: '52002845360409', price: 6390 },
      { name: '18k White Gold / 1.0 CT', variantId: '52002834350361', price: 3990 },
      { name: '18k White Gold / 1.5 CT', variantId: '52002835038489', price: 4990 },
      { name: '18k White Gold / 2.0 CT', variantId: '52002835726617', price: 5990 },
      { name: '18k White Gold / 2.5 CT', variantId: '52002836414745', price: 6990 },
      { name: '18k White Gold / 3.0 CT', variantId: '52002837102873', price: 7990 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '52002838479129', price: 3990 },
      { name: '18k Yellow Gold / 1.5 CT', variantId: '52002839167257', price: 4990 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '52002839855385', price: 5990 },
      { name: '18k Yellow Gold / 2.5 CT', variantId: '52002840543513', price: 6990 },
      { name: '18k Yellow Gold / 3.0 CT', variantId: '52002841231641', price: 7990 },
      { name: 'Platinum / 1.0 CT', variantId: '52002830221593', price: 3990 },
      { name: 'Platinum / 1.5 CT', variantId: '52002830909721', price: 4990 },
      { name: 'Platinum / 2.0 CT', variantId: '52002831597849', price: 5990 },
      { name: 'Platinum / 2.5 CT', variantId: '52002832285977', price: 6990 },
      { name: 'Platinum / 3.0 CT', variantId: '52002832974105', price: 7990 },
    ],
  },

  'round-solitaire-ring': {
    title: 'Round Solitaire Ring',
    productId: '10227768394009',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 1.0 CT', variantId: '52003725246745', price: 3190 },
      { name: '14k White Gold / 1.5 CT', variantId: '52003725279513', price: 3990 },
      { name: '14k White Gold / 2.0 CT', variantId: '52003725312281', price: 4790 },
      { name: '14k White Gold / 2.5 CT', variantId: '52003725345049', price: 5590 },
      { name: '14k White Gold / 3.0 CT', variantId: '52003725377817', price: 6390 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '52003725082905', price: 3190 },
      { name: '14k Yellow Gold / 1.5 CT', variantId: '52003725115673', price: 3990 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '52003725148441', price: 4790 },
      { name: '14k Yellow Gold / 2.5 CT', variantId: '52003725181209', price: 5590 },
      { name: '14k Yellow Gold / 3.0 CT', variantId: '52003725213977', price: 6390 },
      { name: '18k White Gold / 1.0 CT', variantId: '51813204099353', price: 3990 },
      { name: '18k White Gold / 1.5 CT', variantId: '51813204197657', price: 4990 },
      { name: '18k White Gold / 2.0 CT', variantId: '51813204295961', price: 5990 },
      { name: '18k White Gold / 2.5 CT', variantId: '51813204394265', price: 6990 },
      { name: '18k White Gold / 3.0 CT', variantId: '51813204492569', price: 7990 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51813204132121', price: 3990 },
      { name: '18k Yellow Gold / 1.5 CT', variantId: '51813204230425', price: 4990 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '51813204328729', price: 5990 },
      { name: '18k Yellow Gold / 2.5 CT', variantId: '51813204427033', price: 6990 },
      { name: '18k Yellow Gold / 3.0 CT', variantId: '51813204525337', price: 7990 },
      { name: 'Platinum / 1.0 CT', variantId: '51813204066585', price: 3990 },
      { name: 'Platinum / 1.5 CT', variantId: '51813204164889', price: 4990 },
      { name: 'Platinum / 2.0 CT', variantId: '51813204263193', price: 5990 },
      { name: 'Platinum / 2.5 CT', variantId: '51813204361497', price: 6990 },
      { name: 'Platinum / 3.0 CT', variantId: '51813204459801', price: 7990 },
    ],
  },

  'signature-marquise-ring': {
    title: 'Signature Marquise Ring',
    productId: '10227406962969',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 1.0 CT', variantId: '51811096756505', price: 3600 },
      { name: '14k White Gold / 1.5 CT', variantId: '52013847380249', price: 4400 },
      { name: '14k White Gold / 2.0 CT', variantId: '52013848068377', price: 5200 },
      { name: '14k White Gold / 2.5 CT', variantId: '52013848756505', price: 6000 },
      { name: '14k White Gold / 3.0 CT', variantId: '52013849444633', price: 6800 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '51811096789273', price: 3600 },
      { name: '14k Yellow Gold / 1.5 CT', variantId: '52013844627737', price: 4400 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '52013845315865', price: 5200 },
      { name: '14k Yellow Gold / 2.5 CT', variantId: '52013846003993', price: 6000 },
      { name: '14k Yellow Gold / 3.0 CT', variantId: '52013846692121', price: 6800 },
      { name: '18k White Gold / 1.0 CT', variantId: '51811096690969', price: 4500 },
      { name: '18k White Gold / 1.5 CT', variantId: '52013841875225', price: 5500 },
      { name: '18k White Gold / 2.0 CT', variantId: '52013842563353', price: 6500 },
      { name: '18k White Gold / 2.5 CT', variantId: '52013843251481', price: 7500 },
      { name: '18k White Gold / 3.0 CT', variantId: '52013843939609', price: 8500 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51811096723737', price: 4500 },
      { name: '18k Yellow Gold / 1.5 CT', variantId: '52013839089945', price: 5500 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '52013839778073', price: 6500 },
      { name: '18k Yellow Gold / 2.5 CT', variantId: '52013840466201', price: 7500 },
      { name: '18k Yellow Gold / 3.0 CT', variantId: '52013841154329', price: 8500 },
      { name: 'Platinum / 1.0 CT', variantId: '51811096658201', price: 4500 },
      { name: 'Platinum / 1.5 CT', variantId: '52013836337433', price: 5500 },
      { name: 'Platinum / 2.0 CT', variantId: '52013837025561', price: 6500 },
      { name: 'Platinum / 2.5 CT', variantId: '52013837713689', price: 7500 },
      { name: 'Platinum / 3.0 CT', variantId: '52013838401817', price: 8500 },
    ],
  },

  'solitaire-bracelet': {
    title: 'Solitaire Bracelet',
    productId: '10275885515033',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 0.25 CT', variantId: '52006639370521', price: 690 },
      { name: '14k White Gold / 0.5 CT', variantId: '52006639698201', price: 1190 },
      { name: '14k White Gold / 1.0 CT', variantId: '52006640025881', price: 1690 },
      { name: '14k Yellow Gold / 0.25 CT', variantId: '52006638387481', price: 690 },
      { name: '14k Yellow Gold / 0.5 CT', variantId: '52006638715161', price: 1190 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '52006639042841', price: 1690 },
      { name: '18k White Gold / 0.25 CT', variantId: '52006637404441', price: 890 },
      { name: '18k White Gold / 0.5 CT', variantId: '52006637732121', price: 1490 },
      { name: '18k White Gold / 1.0 CT', variantId: '52006638059801', price: 2090 },
      { name: '18k Yellow Gold / 0.25 CT', variantId: '52006636421401', price: 890 },
      { name: '18k Yellow Gold / 0.5 CT', variantId: '52006636749081', price: 1490 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '52006637076761', price: 2090 },
    ],
  },

  'solitaire-necklace': {
    title: 'Solitaire Necklace',
    productId: '10227211174169',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 0.25 CT', variantId: '52006634225945', price: 1090 },
      { name: '14k White Gold / 0.5 CT', variantId: '51810620604697', price: 1590 },
      { name: '14k White Gold / 1.0 CT', variantId: '51810620768537', price: 2090 },
      { name: '14k Yellow Gold / 0.25 CT', variantId: '52006633898265', price: 1090 },
      { name: '14k Yellow Gold / 0.5 CT', variantId: '51810620637465', price: 1590 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '51810620801305', price: 2090 },
      { name: '18k White Gold / 0.25 CT', variantId: '52006633570585', price: 1290 },
      { name: '18k White Gold / 0.5 CT', variantId: '51810620539161', price: 1990 },
      { name: '18k White Gold / 1.0 CT', variantId: '51810620703001', price: 2690 },
      { name: '18k Yellow Gold / 0.25 CT', variantId: '52006633242905', price: 1290 },
      { name: '18k Yellow Gold / 0.5 CT', variantId: '51810620571929', price: 1990 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51810620735769', price: 2690 },
    ],
  },

  'solitaire-pendant': {
    title: 'Solitaire Pendant',
    productId: '10227470106905',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 0.25 CT', variantId: '52006630752537', price: 590 },
      { name: '14k White Gold / 0.5 CT', variantId: '51811294413081', price: 990 },
      { name: '14k White Gold / 1.0 CT', variantId: '51811294576921', price: 1390 },
      { name: '14k Yellow Gold / 0.25 CT', variantId: '52006630424857', price: 590 },
      { name: '14k Yellow Gold / 0.5 CT', variantId: '51811294445849', price: 990 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '51811294609689', price: 1390 },
      { name: '18k White Gold / 0.25 CT', variantId: '52006630097177', price: 790 },
      { name: '18k White Gold / 0.5 CT', variantId: '51811294347545', price: 1290 },
      { name: '18k White Gold / 1.0 CT', variantId: '51811294511385', price: 1790 },
      { name: '18k Yellow Gold / 0.25 CT', variantId: '52006629769497', price: 790 },
      { name: '18k Yellow Gold / 0.5 CT', variantId: '51811294380313', price: 1290 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '51811294544153', price: 1790 },
    ],
  },

  'solitaire-studs': {
    title: 'Solitaire Studs',
    productId: '10275884302617',
    productType: 'metal+carat',
    variants: [
      { name: '14k White Gold / 0.5 CT', variantId: '52006632522009', price: 1390 },
      { name: '14k White Gold / 1.0 CT', variantId: '52006624624921', price: 1990 },
      { name: '14k White Gold / 2.0 CT', variantId: '52006624952601', price: 2590 },
      { name: '14k Yellow Gold / 0.5 CT', variantId: '52006632194329', price: 1390 },
      { name: '14k Yellow Gold / 1.0 CT', variantId: '52006623969561', price: 1990 },
      { name: '14k Yellow Gold / 2.0 CT', variantId: '52006624297241', price: 2590 },
      { name: '18k White Gold / 0.5 CT', variantId: '52006631866649', price: 1690 },
      { name: '18k White Gold / 1.0 CT', variantId: '52006623314201', price: 2490 },
      { name: '18k White Gold / 2.0 CT', variantId: '52006623641881', price: 3290 },
      { name: '18k Yellow Gold / 0.5 CT', variantId: '52006631538969', price: 1690 },
      { name: '18k Yellow Gold / 1.0 CT', variantId: '52006622658841', price: 2490 },
      { name: '18k Yellow Gold / 2.0 CT', variantId: '52006622986521', price: 3290 },
    ],
  },

  'the-rose-trilogy-ring': {
    title: 'The Rosé Trilogy Ring',
    productId: '10276523868441',
    productType: 'metal-only',
    variants: [
      { name: 'Default Title', variantId: '52010393698585', price: 15000 },
    ],
  },
};

/* ── Helpers ─────────────────────────────────────────────────── */

/**
 * Returns the Shopify variantId for the given handle + metal (+ optional carat).
 * Matches against variant names formatted as "Metal" or "Metal / Carat".
 * Returns null if the product or variant is not found.
 */
export function getVariantId(handle: string, metal: string, carat?: string): string | null {
  const product = SHOPIFY_PRODUCTS[handle];
  if (!product) return null;
  const targetName = carat ? `${metal} / ${carat}` : metal;
  const variant = product.variants.find((v) => v.name === targetName);
  return variant?.variantId ?? null;
}

/**
 * Returns the price for the given handle + metal (+ optional carat).
 * Returns null if the product or variant is not found.
 */
export function getVariantPrice(handle: string, metal: string, carat?: string): number | null {
  const product = SHOPIFY_PRODUCTS[handle];
  if (!product) return null;
  const targetName = carat ? `${metal} / ${carat}` : metal;
  const variant = product.variants.find((v) => v.name === targetName);
  return variant?.price ?? null;
}

/**
 * Products that cannot be purchased directly.
 * These show an "Enquire" button in place of "Add to Cart".
 */
export const ENQUIRY_ONLY_HANDLES: string[] = ['the-rose-trilogy-ring'];

/** Returns true if the handle is enquiry-only. */
export function isEnquiryOnly(handle: string): boolean {
  return ENQUIRY_ONLY_HANDLES.includes(handle);
}

/** Returns all purchasable product handles from SHOPIFY_PRODUCTS. */
export function getProductHandles(): string[] {
  return Object.keys(SHOPIFY_PRODUCTS);
}
