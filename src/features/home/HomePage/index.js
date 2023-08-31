import { Announcment } from "../../../common/Announcment";
import { ImagesSlider } from "../../../common/ImagesSlider";
import { ProductsSlider } from "../../../common/ProductsSlider";
import { ThematicSection } from "../../../common/ThematicSection";
import { homeImagesSliderData } from "../../../getData";
import { Main } from "./styled";

import {
    fetchGetPopularProducts,
    selectArePopularProductsLoading,
    selectPopularProducts,
    selectPopularProductsIndex,
    selectPopularProductsLeftArrowVisibility,
    selectPopularProductsRightArrowVisibility,
    setPopularProductsNextIndex,
    setPopularProductsPrevIndex,
    setPopularProductsWindowWidth
} from "../popularProductsSliderSlice";
import { Slider } from "../../../common/Slider";

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
                selectData={selectPopularProducts}
                selectAreProductsLoading={selectArePopularProductsLoading}
                selectIndex={selectPopularProductsIndex}
                selectLeftArrowVisibility={selectPopularProductsLeftArrowVisibility}
                selectRightArrowVisibility={selectPopularProductsRightArrowVisibility}
                setPrevIndex={setPopularProductsPrevIndex}
                setNextIndex={setPopularProductsNextIndex}
                fetchData={fetchGetPopularProducts}
                selectWindowWidth={setPopularProductsWindowWidth}
            />

        </Main>
    );
};