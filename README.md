# LangChain Study Assistant

## Overview

LangChain Study Assistant is a simple AI-powered learning application built with TypeScript, LangChain, and OpenRouter.

The application accepts a topic and a question from the user, sends the request through a LangChain Prompt Template, and generates an educational response using a Large Language Model (LLM).

This project demonstrates the fundamentals of building AI applications with LangChain, including:

* Model Integration
* Prompt Templates
* Chains
* User Input Handling
* LangSmith Tracing
* TypeScript Development

---

## Problem Statement

Building AI applications directly with LLM APIs can become difficult as applications grow.

Developers often need:

* Prompt Management
* Memory Handling
* Context Management
* Tool Usage
* Debugging and Monitoring

LangChain simplifies AI application development by providing reusable building blocks and workflows.

---

## Tech Stack

### Language

* TypeScript

### AI Framework

* LangChain

### LLM Provider

* OpenRouter

### Model

* DeepSeek R1 Free / OpenRouter Free

### Observability

* LangSmith

---

## Project Structure

```plaintext
langchain-study-assistant/
│
├── index.ts
├── package.json
├── tsconfig.json
├── README.md
├── .gitignore
└── .env
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/langchain-study-assistant.git
cd langchain-study-assistant
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
OPENROUTER_API_KEY=your_openrouter_api_key

LANGSMITH_API_KEY=your_langsmith_api_key

LANGSMITH_TRACING=true

LANGSMITH_PROJECT=langchain-study-assistant
```

---

## Run Project

```bash
npm run dev
```

---

## Workflow

```plaintext
User Input
      ↓
Prompt Template
      ↓
LangChain Chain
      ↓
OpenRouter Model
      ↓
AI Response
```

---

## Features

* Accepts user topic and question
* Uses LangChain Prompt Templates
* Sends prompts to OpenRouter models
* Generates structured educational responses
* Supports LangSmith tracing
* Built entirely using TypeScript

---

## Example

### Input

```text
Topic: Python

Question: What are Python data types?
```

### Output

```text
Explanation:
Python data types define the kind of value a variable can hold.

Example:
int, float, string, list

Summary:
Data types determine how data is stored and manipulated.
```

---

## LangSmith Usage

LangSmith helps developers:

* Inspect Prompt Execution
* Monitor Model Calls
* Debug Failures
* Analyze Latency
* Trace Application Workflow

Each LangChain execution can be viewed and analyzed through the LangSmith dashboard.

---

## Learning Outcomes

After completing this project, students will understand:

* What LangChain is
* Why developers use LangChain
* How Prompt Templates work
* How Chains process requests
* How LLMs are integrated using OpenRouter
* How LangSmith traces help debug AI applications

---
