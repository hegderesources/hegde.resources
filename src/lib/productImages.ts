// Product image map — maps product IDs to their image imports

// Organic Fertilizers
import vermiCompost from "@/assets/products/organic-fertilizers/gemini-vermicompost.webp";
import cowDungCompost from "@/assets/products/organic-fertilizers/gemini-cow-dung-compost.webp";
import cocoPeat from "@/assets/products/organic-fertilizers/coco-peat.webp";
import neemPowder from "@/assets/products/organic-fertilizers/neem-powder.webp";
import riceHusk from "@/assets/products/organic-fertilizers/rice-husk.webp";
import steamBoneMeal from "@/assets/products/organic-fertilizers/steam-bone-meal.webp";

// Compostable Bioplastics
import dcutBags from "@/assets/products/compostable-bioplastics/dcut-bags.webp";
import wcutBags from "@/assets/products/compostable-bioplastics/wcut-bags.webp";
import garbageBags from "@/assets/products/compostable-bioplastics/garbage-bags.webp";
import garmentBags from "@/assets/products/compostable-bioplastics/garment-bags.webp";
import groceryRolls from "@/assets/products/compostable-bioplastics/grocery-rolls.webp";
import shrinkFilm from "@/assets/products/compostable-bioplastics/shrink-film.webp";

// Plant Based
import arecaPalm from "@/assets/products/plant-based/areca-palm.webp";
import bagasse from "@/assets/products/plant-based/bagasse.webp";
import bamboo from "@/assets/products/plant-based/bamboo.webp";
import kraftPaper from "@/assets/products/plant-based/kraft-paper.webp";

// 100% Cotton Towels
import bathTowels from "@/assets/products/cotton-towels/bath-towels.webp";
import handFaceSpaTowels from "@/assets/products/cotton-towels/hand-face-spa-towels.webp";
import poolTowels from "@/assets/products/cotton-towels/pool-towels.webp";
import salonTowels from "@/assets/products/cotton-towels/salon-towels.webp";
import hotelTowels from "@/assets/products/cotton-towels/hotel-towels.webp";

// Jute Bags
import juteDifferentSize from "@/assets/products/jute-bags/different-size.webp";
import juteRegular from "@/assets/products/jute-bags/regular.webp";
import juteBottle from "@/assets/products/jute-bags/bottle-bags.webp";
import juteFlap from "@/assets/products/jute-bags/flap-bag.webp";
import jutePlainCarry from "@/assets/products/jute-bags/plain-carry.webp";
import jutePlainPouch from "@/assets/products/jute-bags/plain-pouch.webp";
import jutePlainTote from "@/assets/products/jute-bags/plain-tote.webp";
import jutePouchBags from "@/assets/products/jute-bags/pouch-bags.webp";
import juteZipper from "@/assets/products/jute-bags/zipper-bag.webp";
import juteWindow from "@/assets/products/jute-bags/window-bag.webp";

// Cotton Bags
import cottonBrownDrawstring from "@/assets/products/cotton-bags/brown-drawstring.webp";
import cottonLoopHandle from "@/assets/products/cotton-bags/loop-handle.webp";
import cottonPrintedPouch from "@/assets/products/cotton-bags/printed-pouch.webp";
import cottonEcoFriendly from "@/assets/products/cotton-bags/eco-friendly.webp";
import cottonPrintedShopping from "@/assets/products/cotton-bags/printed-shopping.webp";
import cottonPrintedDrawstring from "@/assets/products/cotton-bags/printed-drawstring.webp";
import cottonSizeOptions from "@/assets/products/cotton-bags/size-options.webp";

// Canvas Bags
import canvasLoopHandlePlant from "@/assets/products/canvas-bags/loop-handle-plant-tote.webp";
import canvasPremium from "@/assets/products/canvas-bags/premium-tote.webp";
import canvasPromotional from "@/assets/products/canvas-bags/promotional-tote.webp";
import canvasMulticolor from "@/assets/products/canvas-bags/multicolor-shopping.webp";

export const productImages: Record<string, string> = {
  // Organic Fertilizers
  "vermi-compost": vermiCompost,
  "cow-dung-compost": cowDungCompost,
  "coco-peat": cocoPeat,
  "neem-powder": neemPowder,
  "rice-husk": riceHusk,
  "steam-bone-meal": steamBoneMeal,

  // Compostable Bioplastics
  "compostable-dcut-bags": dcutBags,
  "compostable-wcut-bags": wcutBags,
  "compostable-garbage-bags": garbageBags,
  "compostable-garment-bags": garmentBags,
  "compostable-grocery-rolls": groceryRolls,
  "compostable-shrink-film": shrinkFilm,

  // Plant Based
  "areca-palm-tableware": arecaPalm,
  "bagasse-tableware": bagasse,
  "bamboo-products": bamboo,
  "kraft-paper-products": kraftPaper,

  // 100% Cotton Towels
  "bath-towels": bathTowels,
  "hand-face-spa-towels": handFaceSpaTowels,
  "pool-towels": poolTowels,
  "salon-towels": salonTowels,
  "hotel-towels": hotelTowels,

  // Jute Bags
  "jute-different-size-bags": juteDifferentSize,
  "jute-regular-bag": juteRegular,
  "jute-bottle-bags": juteBottle,
  "jute-flap-bag": juteFlap,
  "jute-plain-carry-bag": jutePlainCarry,
  "jute-plain-pouch-bag": jutePlainPouch,
  "jute-plain-tote-bags": jutePlainTote,
  "jute-pouch-bags": jutePouchBags,
  "jute-zipper-bag": juteZipper,
  "jute-window-bag": juteWindow,

  // Cotton Bags
  "brown-drawstring-cotton-bag": cottonBrownDrawstring,
  "cotton-loop-handle-bag": cottonLoopHandle,
  "printed-pouch-cotton-bags": cottonPrintedPouch,
  "eco-friendly-cotton-bag": cottonEcoFriendly,
  "printed-shopping-cotton-bags": cottonPrintedShopping,
  "printed-drawstring-bag": cottonPrintedDrawstring,
  "cotton-bags-size-options": cottonSizeOptions,

  // Canvas Bags
  "loop-handle-plant-canvas-tote": canvasLoopHandlePlant,
  "premium-canvas-tote-bags": canvasPremium,
  "loop-handle-promotional-canvas-tote": canvasPromotional,
  "multi-color-canvas-shopping-bag": canvasMulticolor,
};

// Get a representative image for a category (uses a popular/first product from that category)
export const categoryImages: Record<string, string> = {
  "Organic Fertilizers": vermiCompost,
  "Compostable Bioplastics": dcutBags,
  "Plant Based": arecaPalm,
  "100% Cotton Towels": bathTowels,
  "Jute Bags": juteDifferentSize,
  "Cotton Bags": cottonPrintedPouch,
  "Canvas Bags": canvasPremium,
};
