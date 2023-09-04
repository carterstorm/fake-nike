import { Announcment } from "../../common/Announcment";
import { ImagesSlider } from "../../common/ImagesSlider";
import { ThematicSection } from "../../common/ThematicSection";
import { homeImagesSliderData } from "../../getData";
import { Main } from "./styled";
import { Slider } from "../../common/Slider";
import { ProductsSlider } from "../../common/ProductsSlider";
import { MoreProducts } from "../../common/MoreProducts";

export const HomePage = () => {
    return (
        <Main>
            <Announcment />
            <ThematicSection
                heading="Razem na starcie"
                subtitle="Niezawodne produkty na mocny powrót do szkoły."
                firstButtonText="Kup produkty dla dzieci"
                secoundButtonText="Przeglądaj wszystko"
            />
            <ImagesSlider
                images={homeImagesSliderData}
            />
            <Slider
                fetchLink={"./categoriesData.json"}
            />
            <ProductsSlider
                heading="Popularne w tym tygodniu"
                fetchLink={"./popularProducts.json"}
            />
            <MoreProducts
                heading={"Odkryj więcej produktów"}
                fetchLink={"./moreProductsData.json"}
            />
        </Main>
    );
};