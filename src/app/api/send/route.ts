import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest){
    const {name, subject, email } = await req.json()

    console.log(name, subject, email)

    try{
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'viniciuscostadealmeida98@gmail.com',
            subject: subject,
            react: EmailTemplate({name, subject, email})
        })

        if(error){
            return Response.json({ error }, { status: 500 })
        }

        return NextResponse.json({ data })
    }catch(error){
        return Response.json({ error }, { status:500 })
    }
}