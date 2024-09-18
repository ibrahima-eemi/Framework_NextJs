import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Exemple : Ajouter une nouvelle réponse
export async function addResponse(name: string, email: string, message: string) {
  const response = await prisma.response.create({
    data: { name, email, message },
  });
  return response;
}

// Exemple : Récupérer toutes les réponses
export async function getAllResponses() {
  const responses = await prisma.response.findMany();
  return responses;
}

export default prisma;
