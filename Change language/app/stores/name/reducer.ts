export const reducer = (state: any, action: any) => {
    switch (action) {
        case "🏴󠁧󠁢󠁥󠁮󠁧󠁿":
            return {
                ...state,
                name: "Welcome",
                direction: "ltr"

            };
        case "🇮🇶":


            return {
                ...state,
                name: "مرحباً",
                direction: "rtl"
            };
        case "🇮🇷":


            return {
                ...state,
                name: "خوش آمدید",
                direction: "rtl"
            };
        case "🇫🇷":


            return {
                ...state,
                name: "Accueillir"
                , direction: "ltr"
            };

        default:
            return state;
    }

    return state
}
