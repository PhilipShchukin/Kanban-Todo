import { FILTERS } from "../columns.data"
import { useUpdateTask } from "./useUpdateTask"
import { DropResult} from '@hello-pangea/dnd'

export function useTaskDnd() {
    const {updateTask} = useUpdateTask()

    const onDragEnd = (result: DropResult) => {
        if(!result.destination) return

        const destinationColumId = result.destination.droppableId

        if(destinationColumId === result.source.droppableId) return

        if(destinationColumId ===  'completed'){
            updateTask({
                id:result.draggableId,
                data: {
                    isCompleted:true
                }
            })
            return
        }


        const newCreateAt = FILTERS[destinationColumId].format()

        updateTask({
            id:result.draggableId,
            data: {
                createdAt: newCreateAt,
                isCompleted:false
            }
        })
    }



  return {onDragEnd}
}
