
  /*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
    


import express from "express";

import { customercontroller } from "../controllers/customercontroller.js";
import { categorycontroller } from "../controllers/categorycontroller.js";
import { ordercontroller } from "../controllers/ordercontroller.js";
import { paymentcontroller } from "../controllers/paymentcontroller.js";
import { productcontroller } from "../controllers/productcontroller.js";

const router = express.Router();


router.get("/customers", customercontroller.index);
router.post("/customers", customercontroller.insert);
router.get("/customers/:id", customercontroller.selectById);

router.get("/categories", categorycontroller.index);
router.post("/categories", categorycontroller.insert);
router.get("/categories/:id", categorycontroller.selectById);

router.get("/orders", ordercontroller.index);
router.post("/orders", ordercontroller.insert);
router.get("/orders/:id", ordercontroller.selectById);

router.get("/payments", paymentcontroller.index);
router.post("/payments", paymentcontroller.insert);
router.get("/payments/:id", paymentcontroller.selectById);

router.get("/products", productcontroller.index);
router.post("/products", productcontroller.insert);
router.get("/products/:id", productcontroller.selectById);

export default router;
