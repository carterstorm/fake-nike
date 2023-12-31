import { Announcement } from "../../common/Announcement";
import { ImagesSlider } from "../../common/ImagesSlider";
import { ThematicSection } from "../../common/ThematicSection";
import { Slider } from "../../common/Slider";
import { ProductsSlider } from "../../common/ProductsSlider";
import { MoreProducts } from "../../common/MoreProducts";
import { MerchMenu } from "../../common/MerchMenu";
import { Footer } from "../Footer";
import { homeImagesSliderData } from "../../common/commonValues";

export const HomePage = () => {
    return (
        <main>
            <Announcement />
            <ThematicSection
                heading="Razem na starcie"
                subtitle="Niezawodne produkty na mocny powrót do szkoły."
                firstButtonText="Kup produkty dla dzieci"
                secondButtonText="Przeglądaj wszystko"
            />
            <ImagesSlider
                images={homeImagesSliderData}
            />
            <Slider
                fetchLink={"./categoriesData.json"}
                numberOfItems={7}
            />
            <ProductsSlider
                heading="Popularne w tym tygodniu"
                fetchLink={"./popularProducts.json"}
            />
            <MoreProducts
                heading={"Odkryj więcej produktów"}
                fetchLink={"./moreProductsData.json"}
            />
            <ProductsSlider
                heading="Odkryj naszą wyprzedaż i oferty"
                fetchLink={"./saleAndOfferProducts.json"}
            />
            <Slider
                heading="Przeglądaj wg dyscypliny sportu"
                fetchLink={"./searchBySportName.json"}
                numberOfItems={8}
            />
            <MoreProducts
                heading={"Odkryj nasze aplikacje"}
                fetchLink={"./ourApplications.json"}
                ourApplications
            />
            <Slider
                heading="Członkowstwo Nike"
                fetchLink={"./membershipData.json"}
                numberOfItems={6}
            />
            <MerchMenu
                fetchLink={"./merchMenuData.json"}
            />
            <Footer />
        </main>
    );
};