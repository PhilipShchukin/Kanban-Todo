import { taskSevice } from "@/services/task.sevice"
import { TypeTaskFormState } from "@/types/task.types"
import {  useMutation, useQueryClient,  } from "@tanstack/react-query"

export function useUpdateTask(key?:string) {

    const queryClient = useQueryClient()


    const {mutate:updateTask } = useMutation({
        mutationKey: ['update task', key],
        mutationFn: ({id, data}: { id:string, data:TypeTaskFormState}) => 
            taskSevice.updateTask(id, data),
        onSuccess(){
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })


 
  return {updateTask}
}
