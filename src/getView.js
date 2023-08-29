export const getView = (data, index) => {
    const dataLength = data.length;

    const elementsToDisplay = [
        data[(index + dataLength - 3) % dataLength],
        data[(index + dataLength - 2) % dataLength],
        data[(index + dataLength - 1) % dataLength],
        data[index],
        data[(index + 1) % dataLength],
        data[(index + 2) % dataLength],
        data[(index + 3) % dataLength],
    ];

    return elementsToDisplay.map(element => ({ ...element }));
};