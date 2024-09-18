import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const responses = await prisma.response.findMany();
    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des réponses' });
  }
}
