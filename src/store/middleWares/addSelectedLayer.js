import { getLayers, getUi, getSelectedLayerIndex } from "../selectors";
import { selectedLayerAction } from "../../store/actions/actions";

const actionsToNotReact = ["SET_SELECTED"];

const addSelectedLayer =
    ({ dispatch, getState }) =>
        (next) =>
            (action) => {
                if (action.type !== actionsToNotReact) {
                    action.__selectedLyers = getSelectedLayerIndex(getState());
                }
                return next(action);
            };

export default addSelectedLayer;
