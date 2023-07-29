type WindowColorState = {
    topLeftCornerColor: string;
    topRightCornerColor: string;
    bottomLeftCornerColor: string;
    bottomRightCornerColor: string;
};

export type WindowColorAction =
    | { type: 'SET_TOP_LEFT_CORNER_COLOR'; color: string }
    | { type: 'SET_TOP_RIGHT_CORNER_COLOR'; color: string }
    | { type: 'SET_BOTTOM_LEFT_CORNER_COLOR'; color: string }
    | { type: 'SET_BOTTOM_RIGHT_CORNER_COLOR'; color: string };

const windowColorReducer = (
    state: WindowColorState,
    action: WindowColorAction
) => {
    switch (action.type) {
        case 'SET_TOP_LEFT_CORNER_COLOR':
            return { ...state, topLeftCornerColor: action.color };
        case 'SET_TOP_RIGHT_CORNER_COLOR':
            return { ...state, topRightCornerColor: action.color };
        case 'SET_BOTTOM_LEFT_CORNER_COLOR':
            return { ...state, bottomLeftCornerColor: action.color };
        case 'SET_BOTTOM_RIGHT_CORNER_COLOR':
            return { ...state, bottomRightCornerColor: action.color };
        default:
            throw new Error();
    }
};

export default windowColorReducer;
