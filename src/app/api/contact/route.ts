import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_SERVICE_ID = 'service_38cvpja';
const DEFAULT_TEMPLATE_ID = 'template_dggi28l';
const DEFAULT_PUBLIC_KEY = 'esVS1sLgsDl4DuanG';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { templateParams } = body;

    // Use default verified credentials, ensuring no bad/stale templateId from client localStorage breaks sending
    let serviceId = (body.serviceId || '').trim();
    let templateId = (body.templateId || '').trim();
    let publicKey = (body.publicKey || '').trim();

    if (!serviceId) serviceId = DEFAULT_SERVICE_ID;
    if (!templateId || templateId !== DEFAULT_TEMPLATE_ID) templateId = DEFAULT_TEMPLATE_ID;
    if (!publicKey) publicKey = DEFAULT_PUBLIC_KEY;

    const origin =
      req.headers.get('origin') ||
      req.headers.get('referer') ||
      process.env.APP_URL ||
      'https://ais-dev-ua7opotqfndgrzjxncow7e-531609118733.us-east1.run.app';

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Origin: origin,
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json(
        { error: errText || 'Falha ao enviar e-mail pelo EmailJS' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, message: 'Email enviado com sucesso!' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Erro interno do servidor';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

