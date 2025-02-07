import { taskSevice } from "@/services/task.sevice"
import { ITaskResponse } from "@/types/task.types"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export function useTasks() {

    const {data } = useQuery({
        queryKey: ['tasks'],
        queryFn: ()=> taskSevice.getTask()
    })

    const [items, setItems] = useState<ITaskResponse[] | undefined>(data?.data)


    useEffect(() => {
        setItems(data?.data)
    },[data?.data])



  return {items, setItems}
}
