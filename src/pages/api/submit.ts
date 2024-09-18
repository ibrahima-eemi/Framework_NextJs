import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const response = await prisma.response.create({
        data: {
          name,
          email,
          message,
        },
      });

      res.status(200).json({ success: true, response });
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de l\'insertion des données' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
