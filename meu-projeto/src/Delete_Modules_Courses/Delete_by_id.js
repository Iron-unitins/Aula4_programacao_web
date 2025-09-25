import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const result = await prisma.coursesModules.delete({
        where: {
            id: "1e916349-9e94-47e1-9f00-90a99e8a8cca",
        },
    });
    console.log(result);
}
main();