import "reflect-metadata";
import fastify from "fastify";
import { createConnection, getManager } from "typeorm";
import * as utils from "./utils";
import { Invoice } from "./entity/Invoice";
import { Todo } from "./entity/Todo";
import { Readable } from "stream";
import todoController from "./controllers/todos"

const server = fastify({ logger: true });

server.get("/ping", async (request, reply) => {
  return { message: "helloworld" };
});

server.get<{
  Querystring: { n: number };
}>("/prime", async (request, reply) => {
  let n = request.query.n || 5;
  let primes = utils.generatePrimeNumbers(n);
  return { prime_numbers: primes };
});

server.get<{ Querystring: { n: number } }>("/even", async (request, reply) => {
  let n = request.query.n || 10;
  let evenNumbers = utils.generateEvenNumbers(n);
  return { data: evenNumbers };
});

server.get("/invoices", async (request, reply) => {
  const invoiceRepo = getManager().getRepository(Invoice);
  const invoices = await invoiceRepo.find();
  return { message: "invoices retrieved", data: invoices };
});

todoController(server)

server.get("/stream", function (req, reply) {
  const stream = Readable.from(
    Array(1000)
      .fill(null)
      .map(() => "hello world")
  );
  reply.send(stream);
});

const start = async () => {
  try {
    await createConnection();
    await server.listen(3000);
  } catch (err) {
    server.log.error(err);
  }
};

start();
