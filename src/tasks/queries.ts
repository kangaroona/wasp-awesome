import { type Task } from "wasp/entities";
import { HttpError } from "wasp/server";
import { type GetTasks, type GetAllTasks } from "wasp/server/operations";

//Using TypeScript's new 'satisfies' keyword, it will infer the types of the arguments and return value
export const getTasks = ((_args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Task.findMany({
    where: { user: { id: context.user.id } },
    orderBy: { id: "asc" },
  });
}) satisfies GetTasks<void, Task[]>;

export const getAllTasks: GetAllTasks<void, Task[]> = (_args, context) => {
  return context.entities.Task.findMany({
    orderBy: { id: "asc" },
  });
};
