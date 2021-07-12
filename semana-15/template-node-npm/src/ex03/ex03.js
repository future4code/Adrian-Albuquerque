const task = process.argv[2]

taskList = [
    "corrigir bugs",
    "conferir stack overflow"
]
console.log("Tarefas antigas:", taskList)
const taskAtt = taskList.push(task)
console.log("Atualizado:", taskList)