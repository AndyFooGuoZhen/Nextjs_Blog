
import { Configuration, OpenAIApi } from "openai";
import { tagsArray } from "./tagsSelection";

require('dotenv').config();

//React app environment variables
//https://create-react-app.dev/docs/adding-custom-environment-variables/

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const tagGenerator = async (titleProp: string, contentProp: string)=>{
  const title = titleProp;
  const content = contentProp;
  const tagsChoices = tagsArray;

  const prompt = `This is my blog title ${title} and content: ${content}. 
  Select 3 tags based on the title and content of the blog from this list of tags: ${tagsChoices} 
  and display them in this format: tag1,tag2,tag3`;

 const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
      });

    return completion.data.choices[0].message?.content;

}

export default tagGenerator;







