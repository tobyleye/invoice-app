import { FastifyInstance } from "fastify";
import { getManager } from "typeorm";
import { Todo } from "../entity/Todo";

export default (server: FastifyInstance) => {
  server.get("/todos", async (request, reply) => {
    let todoRepo = getManager().getRepository(Todo);
    const todos = await todoRepo.find();
    return { data: todos };
  });

  server.post<{ Body: { todo: string } }>("/todos", async (request, reply) => {
    const todo = new Todo();
    todo.todo = request.body.todo;
    const savedTodo = await getManager().save(todo);
    return { data: savedTodo };
  });

  return server;

};