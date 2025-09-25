import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            course: {
                create: {
                    duration: 200,
                    name: "Curso de javaScript",
                    description: "Curso completo de javaScript do básico ao avançado",
                },
            },
            module: {
                create: {
                    description: "introdução ao javaScript",
                    name: "Módulo aula 1",
                },
            },
        },
    });
    console.log(result);
}
main();