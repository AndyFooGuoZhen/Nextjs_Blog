
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

