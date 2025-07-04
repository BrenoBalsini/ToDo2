import React from "react";
import ButtonIcon from "../componentes/button-icon";
import Card from "../componentes/card";
import InputCheckBox from "../componentes/input-checkbox"
import Text from "../componentes/text";

import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react"
import XIcon from "../assets/icons/X-Regular.svg?react"
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import InputText from "../componentes/input-text";

import { type Task, TaskState } from "../models/taskTypes"
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem ({task}: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);

  const [taskTitle, setTaskTitle] = React.useState(task.title || "");
  const {updateTask, updateTaskStatus, deleteTask} = useTask()

  function handleEditTask() {
    setIsEditing(true);
  }
  
  function handleExitEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id)
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "")
  }
  
  function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    updateTask(task.id, {title: taskTitle})
    setIsEditing(false);
  }

  function handleChangeTaskStatus (e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked)
  }

  function handleClickDeleteTask () {
    deleteTask(task.id)
  }

  return (
      <Card size="md">
        {!isEditing 
          ? ( 
            <div className="flex items-center gap-4">
              <InputCheckBox value={task?.concluded?.toString()} checked={task?.concluded} onChange={handleChangeTaskStatus}/>
              <Text 
                className={cx("flex-1", {
                  'line-through': task?.concluded,
                })}
              >
                {task?.title}
              </Text>

              <div className="flex gap-1">
                <ButtonIcon icon={TrashIcon} variant="tertiary" onClick={handleClickDeleteTask}/>
                <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask}/>
              </div>
            </div>
          )
          : ( 
            <>
            <form onSubmit={handleSaveTask} className="flex items-center gap-4">
              <InputText
                value={taskTitle}
                className="flex-1"
                onChange={handleChangeTaskTitle}
                required
                autoFocus
              />
              <div className="flex gap-1">
                <ButtonIcon
                  type="button"
                  icon={XIcon}
                  variant="secondary"
                  onClick={handleExitEditTask}
                />
                <ButtonIcon icon={CheckIcon} variant="primary" type="submit" />
              </div>
            </form>
            </>

          )
        }
      </Card>
  )
}