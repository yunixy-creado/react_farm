import { VFC} from 'react'
import { LogoutIcon } from '@heroicons/react/outline'
import { useProcessAuth } from '../hooks/useProcessAuth'
import { useQueryTasks } from '../hooks/useQueryTask'
import { useQueryUser } from '../hooks/useQueryUser' 

export const Todo: VFC = () => {
  const { logout } = useProcessAuth()
  const { data: dataUser } = useQueryUser()
  const { data: dataTasks, isLoading: isLoadingTasks} = useQueryTasks()
  return(
    <div className="flex justify-center items-center flex-col min-h-screen text-grat-600 font-mono">
      <LogoutIcon 
        onClick={logout}
        className="h-7 w-7 mb-5 text-blue-500 cursor-pointer"
      />
    </div>
  )
}


