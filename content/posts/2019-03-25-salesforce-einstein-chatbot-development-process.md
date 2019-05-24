+++
title = "Salesforce Einstein ChatBot Development Process"
date = 2019-03-25T15:00:00-08:00
tags = ["Salesforce"]
+++
On March 5, 2019, I participated in a [Salesforce.org](https://salesforce.org) ChatBot Hackathon at [California State University East Bay](https://www.csueastbay.edu/). There were participants from all over the Cal State University system, as well as the [University of San Diego](https://www.sandiego.edu/), which I and a colleague represented. The main objective of the event was to create intents and utterances that could be shared within the Higher-Ed community. The secondary objective was to create a chatbot using [Salesforce Einstein](https://www.salesforce.com/products/einstein/overview/).  It was great to see the chatbots that all the groups had created. I was really impressed!

Many of the attendees were new to the Salesforce platform and chatbots. Where does one start? In this post I want to talk about the process for creating a chatbot. I won’t go into detail about creating chatbots on Einstein because there are [TrailHeads](https://trailhead.salesforce.com/en/content/learn/modules/service_bots_basics/learn-about-einstein-bots) that cover implementation in good detail.  Even if you do not use Salesforce Einstein ChatBots, you may find this post useful. I think the general workflow of creating a chatbot is similar on other platforms, including Amazon Alexa and Google Voice.
 
**What is a ChatBot?**

A ChatBot is artificially intelligent program that can have a conversation with a person. Most chatbots uses messenger-type apps to communicate with people. A person can type a question and the chatbot replies with an answer.

## Bot Name
Give your bot a name to make the user experience more personal.

## Personality
Define a few personality traits for your bot. Is your bot friendly? Funny? A surfer dude?

Think about how your organization wants to be represented.

The personality traits can help you define the bot’s messages and responses.

## Areas
Brainstorm some areas of frequently asked questions. In the case of higher-ed, some areas include, Admissions, Financial Aid and Student Life. Pick one area to focus on. Later, you can add more areas.

## Use Cases
For one of the areas, brainstorm use cases. Think about different processes in your organization, frequently asked questions, and if a bot could help. For Admissions, for example, a couple of use cases include the qualifications for admission and what standardized tests are required. 

## Map out the Use Cases
It really helps to visualize the use cases.  Use a whiteboard or diagramming software. I like to use diagram.io to map it out. Here is an example:

[![ChatBot Flow Diagram]({{ site.url }}/assets/ChatBot-FlowDiagram-Sample.png)]({% link /assets/ChatBot-FlowDiagram-Sample.png %})

## Determine where intents can be used
An intent is an action. For example, “Lookup Qualifications for Admission”. You can phrase the intent in the form of a question. For example, “What are the qualifications for admission?”. I like to think of intents as shortcuts to parts of the chatbot flow.

I’ve updated the diagram to include where the intents would be used:
[![ChatBot Flow Diagram with Intents]({{ site.url }}/assets/ChatBot-FlowDiagram-Intents-Sample.png)]({% link /assets/ChatBot-FlowDiagram-Intents-Sample.png %})

## Define utterances for the intents
Utterances are all the ways a person could say or request an intent. A few examples include:
- What are the admissions qualifications?
- How do I qualify for admission?
- admissions qualifications

Defining the utterances is probably the most time consuming task of creating a chat bot. It is well worth the effort, as the more utterances, the better the [natural language processing (NLP)](https://en.wikipedia.org/wiki/Natural_language_processing). Document the utterances in a spreadsheet.

## Conclusion
Now that you have mapped out your uses cases, determined where intents can be used and defined the utterances, you are now ready to implement your chatbot. For details on how to implement your chatbot with Salesforce Einstein, be sure to check out the [TrailHeads](https://trailhead.salesforce.com/en/content/learn/modules/service_bots_basics/learn-about-einstein-bots). 

If you will be attending the [2019 Salesforce Higher Ed Summit](https://www.salesforce.org/events/highered-summit-2019/), in San Diego, be sure to check out a session on chatbots that I will be co-presenting. Look for a session titled, “Unlike Jon Snow, Chat Bot knows a Lot!”

Thank you.


