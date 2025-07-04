import Container from "../componentes/container";
import TaskSummary from "../core-components/task-summary";
import TaskList from "../core-components/tasks-list";

export default function PageHome() {
  return <Container as="article" className="space-y-3">
    <header className="flex items-center justify-between">
      <TaskSummary/>
    </header>
  
    <TaskList/>
  </Container>
}