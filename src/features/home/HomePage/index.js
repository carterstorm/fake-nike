import { Announcment } from "../../../common/Announcment";
import { ImagesSlider } from "./ImagesSlider";
import { ProductsSlider } from "../../../common/ProductsSlider";
import { Slider } from "../../../common/Slider";
import { ThematicSection } from "./ThematicSection";
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
    setPopularProductsPrevIndex
} from "../popularProductsSliderSlice";

export const HomePage = () => {
    return (
        <Main>
            <Announcment />
            <ThematicSection />
            <ImagesSlider />
            <Slider
                selectData={selectCategoriesData}
                selectIndex={selectIndex}
                setPrevIndex={setPrevIndex}
                setNextIndex={setNextIndex}
                fetchData={fetchGetCategoriesData}
            />
            <ProductsSlider
                heading={"Popularne w tym tygodniu"}
                selectData={selectPopularProducts}
                selectAreProductsLoading={selectArePopularProductsLoading}
                selectIndex={selectPopularProductsIndex}
                selectLeftArrowVisibility={selectPopularProductsLeftArrowVisibility}
                selectRightArrowVisibility={selectPopularProductsRightArrowVisibility}
                setPrevIndex={setPopularProductsPrevIndex}
                setNextIndex={setPopularProductsNextIndex}
                fetchData={fetchGetPopularProducts}
            />
        </Main>
    );
};