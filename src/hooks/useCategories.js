import { categoryService } from "@/services/category";
import { useQuery } from "./useQuery"

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: ({ signal }) => categoryService.getCategory(signal),
    })

}

export const useCategory = (id) => {
    const categories = useCategories();

    return categories?.data?.find(e => e.id === id)
}