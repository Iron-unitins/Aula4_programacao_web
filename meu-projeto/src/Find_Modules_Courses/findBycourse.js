import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id: "7a2e7a0d-7d04-4edf-a63c-b10f0265f546"
        },
        include: {
            modules: true,
        },
    });
    //console.log(result);
    console.log(JSON.stringify(result));
}
main();
