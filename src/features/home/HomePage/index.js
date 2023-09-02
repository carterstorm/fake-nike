import { Announcment } from "../../../common/Announcment";
import { ImagesSlider } from "../../../common/ImagesSlider";
import { ThematicSection } from "../../../common/ThematicSection";
import { homeImagesSliderData } from "../../../getData";
import { Main } from "./styled";
import { Slider } from "../../../common/Slider";
import { ProductsSlider } from "../../../common/ProductsSlider";

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
                fetchLink={"./popularProducts.json"}
            />
        </Main>
    );
};