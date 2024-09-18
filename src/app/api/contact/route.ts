import { NextResponse } from 'next/server';
import { addResponse } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const response = await addResponse(name, email, message);
    return NextResponse.json(response);
  } catch (error) {
    console.error('Erreur dans l\'API /api/contact :', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
