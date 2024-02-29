/* This function extracts a max task ID from task's array */
function getTaskId(arr) {
    let maxId = 1;
    if (tasks.length === 0) {
        return maxId;
    }
    for (const item of arr) {
        if (item.id >= maxId) {
            maxId = item.id;
        }
    }
    return maxId + 1;
}
/* This function adds a new task into task's array */
function addTask(arr, taskTitle, taskDescription) {
    const taskId = getTaskId(arr);
    arr.push({ id: taskId, title: taskTitle, description: taskDescription, completed: false });
}
/* This function moves a completed flag into true for a task from task's array using taskId */
function completedTask(arr, taskId) {
    for (const item of arr)
        if (item.id === taskId) {
            item.completed = true;
        }
}
/* This function extract information about task from a task object */
function getTaskInfo(arr) {
    console.log('id: ' + arr.id + ', title: ' + arr.title + ', description: ' + arr.description + ', completed: ' + arr.completed);
}
// Executive part
// create an Array using ITask interface
const tasks = [];
// add tasks into array
for (let i = 1; i < 10; i++) {
    addTask(tasks, i + ' title', i + ' descr');
}
// mark one task as done
completedTask(tasks, 2);
// show information about task
getTaskInfo(tasks[1]);
