import { insertTask } from "../../data/tasks/insertTask"
import { generateId } from "../../services/idGenerator"

export const createTaskBusiness = async ({
  title,
  description,
  deadline,
  authorId
}: any) => {
  if (
    !title ||
    !description ||
    !deadline ||
    !authorId
  ) {
      throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
  }

  const id: string = generateId()

  await insertTask({
      id,
      title,
      description,
      deadline,
      authorId,
  })
}
