import { Router } from "express";
import {
  addProductToCart,
  changeProductQuantity,
  clearCart,
  deleteProductFromCart,
  finalizarCompra,
  getCarts,
  getOneCart,
  postCart,
} from "../../Controllers/API/cart.controller.js";
// import { passportCall, authorization } from "../../utils/authorizations.js";

import { passportCall, authorization } from "../../utils/authorizations.js";
const router = Router();

router.get("/", getCarts);

router.get(
  "/:cid",
  passportCall("jwt"),
  authorization(["user", "premium"]),
  getOneCart
);

router.post("/", postCart);


router.delete(
  "/:cid",
  passportCall("jwt"),
  authorization(["user", "premium"]),
  clearCart
);


router.post(
  "/:cid/product/:pid",
  passportCall("jwt"),
  authorization(["user", "premium"]),
  addProductToCart
);

router.put(
  "/:cid/product/:pid",
  passportCall("jwt"),
  authorization(["user", "premium"]),
  changeProductQuantity
);

router.delete(
  "/:cid/product/:pid",
  passportCall("jwt"),
  authorization(["user", "premium"]),
  deleteProductFromCart
);

router.post(
  "/:cid/purchase",
  passportCall("jwt"),
  authorization(["user", "premium"]),
  finalizarCompra
);

export default router;