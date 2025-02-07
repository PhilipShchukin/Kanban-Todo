import { taskSevice } from "@/services/task.sevice"
import {  useMutation, useQueryClient,  } from "@tanstack/react-query"

export function useDeleteTask() {

    const queryClient = useQueryClient()


    const {mutate: deleteTask, isPending: isDeletePending} = useMutation({
        mutationKey: ['delete task'],
        mutationFn: ( id: string) => 
            taskSevice.deleteTask(id),
        onSuccess(){
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })


 
  return {deleteTask, isDeletePending}
}
