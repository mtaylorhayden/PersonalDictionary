Welcome to my Turkish Dictonary App.
Currenty supports hitting openAI with any message and recieving the message.
Uses MySQL database

After cloning the repo make sure to run `npm i`

To hit the openAI API follow these steps:

1. Go to https://platform.openai.com/
2. If you don't already have one, create an account.
3. Create an API key here https://platform.openai.com/account/api-keys
4. Create an .env file at the root directory
5. You should make a variable like this OPENAI_API_KEY={YOUR_API_KEY}
6. Now we need to grab your organization_id. Go here to grab it https://platform.openai.com/account/org-settings
7. Make another variable that looks like this ORGANIZATION_ID=={YOUR_ORGANIZATION_ID}

Now you're ready to hit the api. You can use Postman to hit the endpoint like this:
URL: `localhost:3001/notes/note`(this is a POST request)


body:
`{
    "question": "what does Vucudumuz mean"
}`

Or any turkish word.

If you are already using a MySQL instance then the setup is very easy. Just make sure the values in app.module.ts are correct. You will need to add another variable in the .env file.
It should look like this: LOCAL_DATABASE_PASSWORD={your_local_password}.
The only other values you might have to change in app.module.ts are port, username, and database.

If you run into any issues with the setup please let me know (:
Thanks for checking out the very early addition of my project!
Updates coming weekly
