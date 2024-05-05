import { useDispatch, useSelector } from "react-redux"
import { changeSort } from "../store/reducers/filterSlice"

export const useSort = () => {

    const dispatch = useDispatch()
    const sort = useSelector(state => state.filter.sort)

    const setSort = () => {
        dispatch(changeSort())
    }

   return [sort, setSort]
}