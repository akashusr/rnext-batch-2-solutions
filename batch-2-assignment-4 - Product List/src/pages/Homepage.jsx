// dependencies
import HomeBanner from "../components/homeBanner/HomeBanner";
import RecentProductSection from "../components/recentProducts/RecentProductSection";
import CartProvider from "../providers/CartProvider";
import ProductsProvider from "../providers/ProductsProvider";

const Homepage = () => {
  return (
    <>
      <HomeBanner />
      <ProductsProvider>
        <CartProvider>
          <RecentProductSection />
        </CartProvider>
      </ProductsProvider>
    </>
  );
};

export default Homepage;
