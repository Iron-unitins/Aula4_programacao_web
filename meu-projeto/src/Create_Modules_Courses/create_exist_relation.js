import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const result = await prisma.modules.create({
        data: {
            description: "Aula 01 introdução ao html",
            name: "Modulo aula 1",
            courses: {
                // Criar um novo relacionamento
                create: {
                    // Abrir o relacionamento
                    course: {
                        // Conectar ao relacionamento existente
                        connect: {
                            id:
                                "7a2e7a0d-7d04-4edf-a63c-b10f0265f546", // ID do curso existente
                        },
                    },
                },
            },
        },
    });
    console.log(result);
}
main();
