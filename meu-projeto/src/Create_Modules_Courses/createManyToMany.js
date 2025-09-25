import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            fk_id_course: "a848ae5f-e86b-4b02-a819-cc3700079fcd",
            fk_id_module: "148cd590-0b46-4aef-af8f-5b7687f47847",
        },
    });
    console.log(result);
}
main();