export type sendMailForm = {
    nom: string
    email: string
    subject:string
    message:string
  }


export type LoginForm = {
    email:string,
    password:string
}

export type SignForm = {
    username:string
    email:string,
    password:string
}

export type Addcomment =  {
        text:string
}