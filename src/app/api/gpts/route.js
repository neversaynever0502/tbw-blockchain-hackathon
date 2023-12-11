import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// const model_version = 'gpt-4'
const model_version = 'gpt-3.5-turbo'



export const POST = async (req) => {
    try{
        const {message} = await req.json()
        // let sendContent = `我在寫一本電子書，幫我想條列式大綱，吸引人一點的，輸出格式為JSON，規則如以下{ "title": "", "sections": [ { "title": "", "subsections": [ "", "" ] }}，主題是 ${message}，不要問我問題直接寫` 
        const completion = await openai.chat.completions.create({
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content:  message}
          ],
          model: model_version,
        });
        let str = completion.choices[0].message.content
        console.log(str)
        return NextResponse.json({data: str})
    }catch(err){    
        return NextResponse.error({message: err.message})
    }
}