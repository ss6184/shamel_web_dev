import { prisma } from "@/lib/prisma";

export const getPortfolioData = async (email: string) => {
    if (!email) {
        throw new Error("Email is required to fetch portfolio");
    }
    try{
        const user = await prisma.users.findUnique({
            where: { email },
             include: {
                educations: true,
                skills: true,
                experiences: true,
                projects: true,
                contacts: true,
            }
        });
        return user;
        
    } catch (error) {
        console.error("Error fetching portfolio data:", error);
        throw new Error("Failed to fetch portfolio data");
    }

};