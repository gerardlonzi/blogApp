import { NextResponse } from 'next/server';
import prisma from '../../../utils/connect'


export const GET = async () =>{
    try {
        const categories  = await prisma.Categorie.findMany();
        return new NextResponse(JSON.stringify(categories,{status:200}));
    }
    catch(err){
        return new NextResponse(JSON.stringify({message:"something wrong"},{status:500}))
    }
}