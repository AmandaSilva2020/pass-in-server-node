import { prisma } from "../src/lib/prisma";

async function seed(){
    await prisma.event.create({
        data: {
            id: "65976b56-3d64-43ca-aa40-a0aaed6f6f33",
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Um evento para devs apaixonados(as) por código!",
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!');
    prisma.$disconnect();
})