# ChatGPT TransformerX

使用ChatGPT的 Node Express 网站模板。作为示例页面引擎为EJS，可以自己切换成VUE或者Node.JS。
可以用于类似项目的起始模板

![Code Size](https://img.shields.io/github/languages/code-size/raistlintao/ChatGPT-TransformerX)
![Repo Size](https://img.shields.io/github/repo-size/RaistlinTAO/ChatGPT-TransformerX)

[English](README.md) | 中文文档

## 使用ChatGPT作为文章的生成

在生成页面的对话框中输入你需要的关键字，中英文都可以。

```text
Write an essay about Game theory, around 300 words
```

在结果页面会显示由ChatGPT生成的结果

Game theory is a branch of mathematics that studies strategic decision making. It is used to analyze interactions
between two or more decision makers, or “players”, who must make choices that affect each other. Game theory is used in
a variety of fields, including economics, political science, psychology, and biology. Game theory is based on the idea
that players will act in their own self-interest. This means that players will make decisions that maximize their own
benefit, even if it means sacrificing the benefit of other players. For example, in a game of chess, each player will
try to capture the other player’s pieces in order to win the game. Game theory can be used to analyze a variety of
different situations. For example, it can be used to analyze the behavior of firms in a competitive market. It can also
be used to analyze the behavior of countries in international relations. In addition, game theory can be used to analyze
the behavior of individuals in social situations. Game theory can also be used to analyze the behavior of players in
games such as poker or blackjack. In these games, players must make decisions based on incomplete information. Game
theory can help players make better decisions by analyzing the strategies of other players and predicting their
behavior. Game theory can also be used to analyze the behavior of players in more complex games, such as those found in
video games. In these games, players must make decisions based on a variety of factors, such as the environment, the
other players, and the rules of the game. By analyzing the behavior of players in these games, game theory can help
players make better decisions and increase their chances of winning. Overall, game theory is a powerful tool for
analyzing strategic decision making. It can be used to analyze a variety of different situations, from competitive
markets to video games. By understanding the behavior of players, game theory can help players make better decisions and
increase their chances of success.

## 配置

- 0 环境配置
```cmd
npm install
```
- 1 复制 .env.example 到 .env

```text
# 服务器设置
SERVER_BACKEND_PORT=2001 # Server HTTP Port
SERVER_HTTPS=false
SERVER_KEY=''
SERVER_CERT=''


# 测试配置
PRINT_DEBUG=true
PRINT_STACK_DETAIL=true

# CHAT GPT API，
OPENAI_API_KEY=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 # Your API KEY
```

- 2 在.env中更换OPENAI_API_KEY=后面的内容为你的API密钥

- 3 运行Node

```text
Node APP.JS

```