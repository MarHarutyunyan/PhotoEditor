export const checkForEmptyLayer = (layers) => {
    if (layers[layers.length - 1]) {
        if (layers[layers.length - 1].type) {
            return true;
        }
        return false;
    }
    return true;
};
export const addLayer = (groupOfLayers, layer) => {
    groupOfLayers.push(layer);
};

export const setLayerType = (layers, type) => {
    layers[layers.length - 1].type = type;
}

// export const ShowTxtFeatures = () => {
//     document.getElementById("TEXT").add(document.getElementById("TXT_FEATURES"))
// }