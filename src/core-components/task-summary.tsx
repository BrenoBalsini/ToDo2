import Badge from "../componentes/badge"
import Text from "../componentes/text"
import useTasks from "../hooks/use-tasks"


export default function TaskSummary () {
  const {tasksCount, conludedTasksCount} = useTasks()

  return (
    <>
      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">Tarefas criadas</Text>
        <Badge variant="secondary">{tasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">Concluídas</Text>
        <Badge variant="primary">{conludedTasksCount} de {tasksCount}</Badge>
      </div>
    </>
  )
}