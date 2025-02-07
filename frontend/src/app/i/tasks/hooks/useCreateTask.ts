import { taskSevice } from "@/services/task.sevice"
import { TypeTaskFormState } from "@/types/task.types"
import {  useMutation, useQueryClient,  } from "@tanstack/react-query"

export function useCreateTask() {

    const queryClient = useQueryClient()


    const {mutate:createTask } = useMutation({
        mutationKey: ['create task'],
        mutationFn: ( data: TypeTaskFormState) => 
            taskSevice.createTask(data),
        onSuccess(){
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })


 
  return {createTask}
}
