import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.authors.create({
        data: {
            name: "Iron de Oliveira",
            books: {
                createMany: {
                    data: [
                        { name: "O futuro do passado" },
                        { name: "O presente no amanhã" },
                    ],
                },
            },
        },
    });
    console.log(result);
}
main();