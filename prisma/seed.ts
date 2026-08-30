
import { prisma } from "@/lib/prisma";

async function main() {
  const user = await prisma.users.create({
    data: {
      name: "Shamel Benaldo Ocampo",
      email: "shamelbenaldo12@gmail.com",
      password: "benaldo123",
      role: "User",
      contacts: {
        create: [
          {
            name: "Alice Smith",
            email: "alice.smith@example.com",
            message: "Hello, I am interested in your services.",
            
          },
        ],
      },
      educations: {
        create: [
          {
            degree: "Bachelor of Science in Information Technology",
            institution: "Rizal Technological University",
            certificate: ["National Certificate II (NC II) in Computer Systems Servicing","National Certificate II (NC II) in Tile Setting", "National Certificate II (NC II) in Construction Painting"],
            year: 2023, 
            university: "Rizal Technological University",
            startDate: 2023,
            endDate: 2027,
          },
        ],
      },
      experiences: {
        create: [
          {
            title: "Technical Support",
            company: "DAZ Training Center",
            startDate: 2026,
            endDate: 2026,
          },
        ],
      },
      skills: {
        create: [
          {
            name: "Technical Support",
            description: "Assisted with computer and technical support for staff and trainees.",
          },
          {
            name: "Basic Computer Hardware Troubleshooting",
          },
          {
            name: "Basic Networking"
          },
          {
            name: "Teamwork"
          },
          {
            name: "Time Management"
          }
        ],
      },
      projects: {
        create: [
          {
            name: "Portfolio Website",
            description: "A personal portfolio website showcasing my skills and projects.",
          },
          {
            name: "MagkaKnow?",
            description: "A gamified digital application aimed at improving price awareness and financial literacy among young adults. Contributed to backend support and Game Design Document (GDD)."
          },
          {
            name: "TransparaTrack",
            description: "Transparency and monitoring system focused on government-funded projects. Contributed to backend support and research documentation."
          }
        ],
      },
    },
  });

  console.log("Created user:", user);

  const allUsers = await prisma.users.findMany({
    include: {
      contacts: true,
      educations: true,
      experiences: true,
      skills: true,
      projects: true,
    },
  });

  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });