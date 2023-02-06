# ChatGPT TransformerX
A nodejs Express website for text completion using ChatGPT, the project contains the HTML template of Metronic DEMO 3,  suitable as the basic template for any text completion project startup

## Use ChatGPT for Text Completion


In generator page, simply type your keywords and get the result, for example
```text
Write an essay about Game theory, around 300 words
```
Then the result page will show the result from ChatGPT:

Game theory is a branch of mathematics that studies strategic decision making. It is used to analyze interactions between two or more decision makers, or “players”, who must make choices that affect each other. Game theory is used in a variety of fields, including economics, political science, psychology, and biology. Game theory is based on the idea that players will act in their own self-interest. This means that players will make decisions that maximize their own benefit, even if it means sacrificing the benefit of other players. For example, in a game of chess, each player will try to capture the other player’s pieces in order to win the game. Game theory can be used to analyze a variety of different situations. For example, it can be used to analyze the behavior of firms in a competitive market. It can also be used to analyze the behavior of countries in international relations. In addition, game theory can be used to analyze the behavior of individuals in social situations. Game theory can also be used to analyze the behavior of players in games such as poker or blackjack. In these games, players must make decisions based on incomplete information. Game theory can help players make better decisions by analyzing the strategies of other players and predicting their behavior. Game theory can also be used to analyze the behavior of players in more complex games, such as those found in video games. In these games, players must make decisions based on a variety of factors, such as the environment, the other players, and the rules of the game. By analyzing the behavior of players in these games, game theory can help players make better decisions and increase their chances of winning. Overall, game theory is a powerful tool for analyzing strategic decision making. It can be used to analyze a variety of different situations, from competitive markets to video games. By understanding the behavior of players, game theory can help players make better decisions and increase their chances of success.


## Configuration
- 1 Copy .env.example to .env
```text
# SERVER CONFIGURATION
SERVER_BACKEND_PORT=2001 # Server HTTP Port
SERVER_HTTPS=false
SERVER_KEY=''
SERVER_CERT=''


# CONSOLE OPTION
PRINT_DEBUG=true
PRINT_STACK_DETAIL=true

# CHAT GPT API
OPENAI_API_KEY=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 # Your API KEY
```

- 2 Change the OPENAI_API_KEY with your own APIKEY in .env File

- 3 Run Server
```text
Node APP.JS

or use PM2 to execute node app
```