import { Announcment } from "../../../common/Announcment";
import { ImagesSlider } from "./ImagesSlider";
import { ProductsSlider } from "../../../common/ProductsSlider";
import { Slider } from "../../../common/Slider";
import { ThematicSection } from "../../../common/ThematicSection";
import { Main } from "./styled";
import {
    fetchGetCategoriesData,
    selectCategoriesData,
    selectIndex,
    setNextIndex,
    setPrevIndex
} from "../categoriesSlice";
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
            <ImagesSlider />
            <Slider
                selectData={selectCategoriesData}
                selectIndex={selectIndex}
                setPrevIndex={setPrevIndex}
                setNextIndex={setNextIndex}
                fetchData={fetchGetCategoriesData}
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