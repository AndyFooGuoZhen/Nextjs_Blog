
import { Configuration, OpenAIApi } from "openai";

require('dotenv').config();

//
//https://create-react-app.dev/docs/adding-custom-environment-variables/

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const title = "title"
const content = "content"
const prompt = `This is my blog title ${title} and content: ${content}`

const caller = async ()=>{
    // const completion = await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [{role: "user", content: prompt}],
    //   });
      
    //   console.log(completion.data.choices[0].message);
      return "hello";
}

export default caller;






// const prompt: "Given a blog post with title: {Title} and {content}, generate 5 tags for me based on the title and content in yaml form Title: <tag1>, <tag2>, tag3>"

// export default async function handler(req, res) {
//     const { prompt } = req.body;
  
//     const payload = {
//       model: "gpt-3.5-turbo",
//       prompt,
//       temperature: 0.7,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//       max_tokens: 200,
//       n: 1,
//     };
  
//     const response = await fetch("https://api.openai.com/v1/completions", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
//       },
//       method: "POST",
//       body: JSON.stringify(payload),
//     });
  
//     const json = await response.json();
//     res.status(200).json(json);
//   }