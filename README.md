# Microservice Architecture

A demo ecommerces app running on mono repo microservices architectures which consist of customer, product and shopping service communicating through express http proxy

## Prerequisites

    Make sure you have the following installed on your machine
    - nodejs

## How It's Made:

**Tech used:**<p>![NODE BADGE](https://img.shields.io/static/v1?label=|&message=NODE.JS&color=2b625f&style=plastic&logo=node.js) ![EXPRESS BADGE](https://img.shields.io/static/v1?label=|&message=EXPRESS&color=bbb111&style=plastic&logo=express)</p>

## Optimizations

One of the first thing I would optimize is the UX of how someone report with the details with what has occured in real-time. I would also work on the navigation website for easy usage. Lastly I would make it so that a reporter can upload audio file.

## Lessons Learned:

Utilized callback functions in the server to try and build a modular and scalable backend. Through this I learned , how to effectively simplify backend routes into independent functions

## Installation:

1. Clone repo
1. Set up environment variables for each service
   ```
   cp .env.example .env
   ```
1. run `npm intall` for each service

## Usage:

1. run `npm run dev` to start each services locally
1. Navigate to gateway service `localhost:8000` will be redirected to product service
1. Navigate to customer service `localhost:8000/customer`
1. Navigate to shopping service `localhost:8000/shopping`
