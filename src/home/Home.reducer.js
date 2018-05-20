import {TOGGLE_RESIDENT} from "./Home.actions";

const

    initState = {
        residents: [
            {
                id: 0,
                name: "Daniel",
                isHome: true
            },
            {
                id: 1,
                name: "Erdal",
                isHome: true
            },
        ]
    },

    homeReducer = (state = initState, action) => {
        switch(action.type) {
            case TOGGLE_RESIDENT:
                return {
                    residents: state.residents.map(resident => {
                        if (resident.id === action.residentId)
                            resident.isHome = !resident.isHome;
                        return resident;
                    })
                };
            default:
                return state;
        }
    };

export default homeReducer;