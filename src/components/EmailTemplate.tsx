import { string } from "zod"

interface EmailTemplateProps{
    name: string
    subject: string
    email: string
}

export function EmailTemplate({ name, subject, email } : EmailTemplateProps){
    return(
        <div>
            <h1>{name}</h1>
            <span>{email}</span>
        </div>
    )
}