import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: 'Données manquantes' }, { status: 400 })
        }

        const resend = new Resend(process.env.RESEND_API_KEY)

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { data, error } = await resend.emails.send({
            from: `Portfolio Contact <onboarding@resend.dev>`,
            to: process.env.MAIL_RECEIVER_ADDRESS!,
            subject: `Message du portfolio de ${name}`,
            html: `
                <div>
                    <h2>Nouveau message du portfolio</h2>
                    <p><strong>Nom:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
            `
        })

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json({ success: false, error: 'Échec de l’envoi de l’e-mail' }, { status: 500 })
        }

        return NextResponse.json({ success: true, error: null }, { status: 200 })
    } catch (error) {
        console.error('Erreur lors de l’envoi de l’e-mail:', error)
        return NextResponse.json({ success: false, error: 'Erreur interne du serveur' }, { status: 500 })
    }
}
