export const addLayer = (groupOfLayers, layer) => {
    groupOfLayers.push(layer);
};

export const setLayerType = (layers, type) => {
    layers[layers.length - 1].type = type;
}
