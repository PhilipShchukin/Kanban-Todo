import { pomodoroService } from "@/services/pomodoro.service"
import { IPomodoroRoundResponse } from "@/types/pomodoro.types"
import { useQuery } from "@tanstack/react-query"
import { Dispatch, SetStateAction, useEffect } from "react"
import type { ITimerState } from "../timer.types"
import { useLoadSettings } from "./useLoadSettings"


// interface IUseTodaySession {
//     setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>
//     setSecondsLeft: Dispatch<SetStateAction<number>>
//     workInterval: number
// }

export  function useTodaySession({setActiveRound,setSecondsLeft}:ITimerState) {

    const {workInterval} = useLoadSettings()

    const { data: sessionResponce, isLoading, refetch , isSuccess } = useQuery({
        queryKey: ['get today session'],
        queryFn: () => pomodoroService.getTodaySession()
    })

    const rounds = sessionResponce?.data.rounds

    useEffect(() => {

        if (isSuccess && rounds){
            const activeRound = rounds.find(round => !round.isCompleted)

            setActiveRound(activeRound)

            if(activeRound && activeRound?.totalSeconds !== 0 ){
                setSecondsLeft(activeRound.totalSeconds)
            }
        }

    },[isSuccess,  rounds])
  return { sessionResponce, isLoading, refetch , isSuccess, workInterval }
}
