"use client";

import { useState } from "react";
import BentoGrids from "../components/BentoGrids";
import CategoryFilters from "../components/CategoryFilters";
import CategoryPreview1 from "../components/CategoryPreview1";
import Footers from "../components/Footers";
import Incentives from "../components/Incentives";
import ProductFeature from "../components/ProductFeature";
import ProductLists1 from "../components/ProductLists1";
import ProductLists2 from "../components/ProductLists2";
import ProductLists3 from "../components/ProductLists3";
import ShoppingCarts from "../components/ShoppingCarts";
import StoreNaviagtion from "../components/StoreNaviagtion";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      <StoreNaviagtion openCart={() => setOpen(true)} />
      <CategoryFilters />
      <ProductLists1 />
      <CategoryPreview1 />
      <ProductLists2 />
      <ProductFeature />
      <ProductLists3 />
      <BentoGrids />
      <Incentives />
      <Footers />
      <ShoppingCarts open={open} setOpen={setOpen} />
      <ScrollToTopButton />
    </div>
  );
}
