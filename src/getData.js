import homePageImage1 from "./assets/images/homepage_image_1.jpg";
import homePageImage2 from "./assets/images/homepage_image_2.jpg";
import homePageImage3 from "./assets/images/homepage_image_3.jpg";

export const homeImagesSliderData = [
    { id: 1, src: homePageImage1, alt: "Shoes - Nike Air Force 1" },
    { id: 2, src: homePageImage2, alt: "Women playing soccer" },
    { id: 3, src: homePageImage3, alt: "Running man" },
];

export const getCategoriesData = async () => {
    const response = await fetch("./categoriesData.json");

    if (!response.ok) {
        new Error(response.statusText);
    };

    return await response.json();
};

export const getPopularProducts = async () => {
    const response = await fetch("./popularProducts.json");

    if (!response.ok) {
        new Error(response.statusText);
    };

    return await response.json();
};