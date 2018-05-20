export const

    TOGGLE_RESIDENT = 'TOGGLE_RESIDENT',

    toggleResident = (residentId) => {
        return {
            type: TOGGLE_RESIDENT,
            residentId
        };
    };