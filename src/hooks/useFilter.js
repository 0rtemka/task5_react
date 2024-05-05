import { useState } from "react"

export const useFilter = () => {

    const [filter, setFilter] = useState([])

    const addOrRemoveFilter = (value) => {
         const index = filter.indexOf(value)
         if (index == -1) setFilter([...filter, value])
         else setFilter(filter.filter(genre => genre != value))
    }

    return [filter, addOrRemoveFilter]
}