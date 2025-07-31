import { useSearchParams } from "react-router-dom";
import queryString from "query-string";
export const useSearch = (defaultValue) => {
    const [search , setSearch] = useSearchParams();

    const value = {...defaultValue}
    for(let [key, val] of search.entries()) {
        try {
            value[key] = JSON.parse(val || defaultValue[key]);
        }
        catch (err) {
            console.log(err)
            value[key] = val || defaultValue[key];
        }
    }
    const setValue = (valueObj) => {
        const searchString = queryString.stringify({...value, ...valueObj});
        setSearch(searchString);
    }
    return [value, setValue] 
}