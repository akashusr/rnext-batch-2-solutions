import DeliciousSection from "./components/deliciousSection/deliciousSection";
import HandPickedRecipes from "./components/handPickedRecipes/handPickedRecipes";
import HeroSection from "./components/heroSection/heroSection";
import LatestRecipes from "./components/latestRecipes/latestRecipes";
import PopulerCategories from "./components/populerCategories/populerCategories";
import SubscriptionForm from "./components/subscriptionForm/subscriptionForm";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <DeliciousSection />
            <PopulerCategories />
            <SubscriptionForm />
            <HandPickedRecipes />
            <LatestRecipes />
        </>
    );
};

export default HomePage;

