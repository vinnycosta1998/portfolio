import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(){
    try{
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'viniciuscostadealmeida98@gmail.com',
            subject: "Hello World",
            react: EmailTemplate({ name: "John Doe", subject: "Work in United States", email:"Hi im John"})
        })

        if(error){
            return Response.json({ error }, { status: 500 })
        }

        return Response.json({ data })
    }catch(error){
        return Response.json({ error }, { status:500 })
    }
}