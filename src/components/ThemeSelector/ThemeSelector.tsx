import { useDispatch, useSelector } from "react-redux";
import { SET_IS_DARK_MODE } from "@/store/slices/themeSlice";

const ThemeSelector = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme);
    const isDarkMode = theme.isDarkMode;


    const changeTheme = () => {
        if(isDarkMode) {
            dispatch(SET_IS_DARK_MODE(false as any));
        }
        else {
            dispatch(SET_IS_DARK_MODE(true as any));
        }
    }

    if(isDarkMode) {
        return <a className="cursor-pointer" icon="sun" onClick={() => changeTheme()} />
    }
    else {
        return <a className="cursor-pointer" icon="moon" onClick={() => changeTheme()} />
    }
}

export default ThemeSelector;