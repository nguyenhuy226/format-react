import { CATEGORY_API } from '@/config/api';
import { http } from '@/utils';


export const categoryService = {
    getCategory(signal) {
        return http.get(CATEGORY_API, { signal })
    }
}