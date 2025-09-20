---
title: Introduction
---

# Introduction to CI/CD using GitHub Actions

This guide explains how to automate the building, testing, and deployment of your code using GitHub Actions.

:::tip Prerequisites  
    Before you start, make sure you have:   
    - A GitHub account and a repository (with push access).  
    - Basic knowledge of GitHub (commits, branches, pull requests).  
    - VS Code or any code editor installed.  

:::

## Understanding GitHub Actions
Imagine you’re cooking a dish. Normally, you’d check ingredients, taste test, check for softness and so on.  
But with a robot chef, you just provide the recipe. The robot handles every step and alerts you if something’s wrong  


Now let’s break it down:   
**1. What is CI/CD?**  
CI/CD means Continuous Integration and Continuous Delivery or Deployment. It is a method in software development where:  
    - Developers push changes to a shared repository
    - The system then builds, tests, and deploys the codes through a sequence of steps (called a pipeline)

:::note   
To deploy a code means to make it available for the user.  
:::

From the example, CI/CD is the process of automating your cooking. 

:::tip  
GitHub Actions is just one of the tools used for CI/CD. Other tools include Jenkins, CircleCI, and GitLab CI/CD.  
:::

**2. What is GitHub Actions?**  
GitHub Actions is a CI/CD platform built into GitHub. It allows you to automate your build, test, and deployment pipeline.   
GitHub Actions is like that robot chef, but for your code projects. Instead of manually running tests, building your app, or publishing it online, GitHub Actions can automate these tasks every time you update your code.


### ⚙️ How GitHub Actions Work
GitHub Actions works through 3 main pillars:
| Concept       | What It Means     | Example   |
| ---------     | ----------------- | --------- |
| **Trigger**   | What starts the process | "Every time someone uploads new code to main branch, start working!” |
| **Workflow**      | The list of steps that tell GitHub Actions what to do. Like the recipe you give to the robot chef. | 1. Check code for mistakes. 2. Build the app 3. Put it online |
| **Runner** | The virtual machine that runs the tasks. GitHub gives you a virtual computer in the cloud that does the job for you | Ubuntu-latest |  


So if you were building a website.  
Normally, you’d:  
Write code → Test it →  Error in the code →  Correct the error →  Test again → Upload it to the server manually.  

But with GitHub Actions:  
1. You just write the code and save it to GitHub.
2. GitHub Actions runs the tests and uploads the code for you.  
3. If there’s an error, it notifies you right away. Like the robot assistant saying, “Hey! Something’s wrong.”

## Common uses of GitHub Actions 
- **Testing Code:** Ensures your code works before sharing it with the world.  
- **Building Apps:** Turns your code into a finished product (like compiling a mobile app).
- **Deploying (Publishing):** Automatically puts your website or app online so others can use it.
- **Sending notifications:** Informs your team when something breaks or succeeds.

## Advantages of CI/CD (and GitHub Actions)
- **Saves time:** You don’t repeat boring manual steps.
- **Catches mistakes early:** Errors are found before they cause problems.
- **Works continuously:** It keeps running, even when you’re asleep.
- **Scales easily:** Suitable for small or large teams.