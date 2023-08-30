import { Announcment } from "../../../common/Announcment";
import { ImagesSlider } from "./ImagesSlider";
import { ProductsSlider } from "./ProductsSlider";
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
            <ProductsSlider />
        </Main>
    );
};