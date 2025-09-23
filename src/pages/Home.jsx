"use client";

import { useEffect, useState } from "react";
import BentoGrids from "../components/BentoGrids";
import CategoryFilters from "../components/CategoryFilters";
import CategoryPreview1 from "../components/CategoryPreview1";
import Footers from "../components/Footers";
import Incentives from "../components/Incentives";
import ProductFeature from "../components/ProductFeature";
import ProductLists1 from "../components/ProductLists1";
import ProductLists2 from "../components/ProductLists2";
import ProductLists3 from "../components/ProductLists3";
import PromowithImage from "../components/PromowithImage";
import SidebarNavigation from "../components/SideBarNavigation";
import StoreNaviagtion from "../components/StoreNaviagtion";
import TopNavigation from "../components/TopNavigation";
import ShoppingCarts from "../components/ShoppingCarts";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";

export default function Example() {
  const [open, setOpen] = useState(false);
  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(items, loading, error, "products");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
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
    </div>
  );
}
