/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/indent */
/* interface Task */
interface ITask {
    id: number,
    title: string,
    description: string,
    completed: boolean
}

/* This function extracts a max task ID from task's array */
function getTaskId (arr: ITask[]): number {
    let maxId: number = 1
    if (tasks.length === 0) {
        return maxId
    }
    for (const item of arr) {
        if (item.id >= maxId) {
            maxId = item.id
        }
    }
    return maxId + 1
}

/* This function adds a new task into task's array */
function addTask (arr: ITask[], taskTitle: string, taskDescription: string): void {
    const taskId = getTaskId(arr)
    arr.push({ id: taskId, title: taskTitle, description: taskDescription, completed: false })
}

/* This function moves a completed flag into true for a task from task's array using taskId */
function completedTask (arr: ITask[], taskId: number): void {
    for (const item of arr) {
        if (item.id === taskId) {
            item.completed = true
        }
    }
}

/* This function extract information about task from a task object */
function getTaskInfo (arr: ITask): void {
    console.log('id: ' + arr.id + ', title: ' + arr.title + ', description: ' + arr.description + ', completed: ' + arr.completed)
}

// Executive part
// create an Array using ITask interface
const tasks: ITask[] = []

// add tasks into array
for (let i: number = 1; i < 10; i++) {
    addTask(tasks, i + ' title', i + ' descr')
}

// mark one task as done
completedTask(tasks, 2)

// show information about task
getTaskInfo(tasks[1])
