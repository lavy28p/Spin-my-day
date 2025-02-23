# Project Overview

## Project Name
Spin My Day

## Project Description
This is a personal productivity app. We choose what we do everyday by spinning a wheel, just for fun.
When you land on an option, you go to that particular detail page. 
'Try a new recipe' will show recipes based on the user cuisine selection.
'Do a Workout' will lists workouts with a check box and also any workouts to add 
'Lets Shop' will list items user needs to buy at which store and also let user add her choice of item to shop
'Read a Book' list book suggestions with book name, author and description also let user add their choice of book in the list
'Try a Blog' lets user add a post with a date and lists that on the page
'Sleep like a Baby' when you land on this page displays random baby sleeping image

## Wireframe 
Copied the link below for Desktop and mobile wireframe with public access.

https://whimsical.com/hope-it-s-rest-day-7yS2fQLgdJ1pgNMYaxYKhf

Main Page

![image](https://user-images.githubusercontent.com/84349667/123823995-456e2200-d8c3-11eb-8e18-f78a1c7f5fbb.png)

Recipes Page

![image](https://user-images.githubusercontent.com/84349667/123824284-85350980-d8c3-11eb-8d63-d1222ead729a.png)

Recipe Detail Page

![image](https://user-images.githubusercontent.com/84349667/123824444-aa297c80-d8c3-11eb-8cf6-f2a42e7410dc.png)

Workouts Page

![image](https://user-images.githubusercontent.com/84349667/123824788-f4aaf900-d8c3-11eb-9813-e56793ff4af2.png)

Books Page

![image](https://user-images.githubusercontent.com/84349667/123847690-7dce2a00-d8dc-11eb-988c-b43be4beeafc.png)

Add a Book Page

![image](https://user-images.githubusercontent.com/84349667/123847728-8a528280-d8dc-11eb-9500-f3653fa9ca08.png)

Blogs Page

![image](https://user-images.githubusercontent.com/84349667/123825583-a4806680-d8c4-11eb-85e5-09a78fb0c08b.png)

Shopping List Page

![image](https://user-images.githubusercontent.com/84349667/123825855-db567c80-d8c4-11eb-88a8-ec483afba2ba.png)

Rest Page 

![image](https://user-images.githubusercontent.com/84349667/123826036-05a83a00-d8c5-11eb-99ed-1c18472390da.png)

## Component Heirarchy

![image](https://user-images.githubusercontent.com/84349667/123827501-4b193700-d8c6-11eb-8e4a-9e6e8655f5c1.png)


## API and Data Sample

Recipes Table
```JSON

    "records": [
        {
            "id": "recrHhXxygGAMwoFo",
            "fields": {
                "cuisine": "American",
                "image": "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
                "name": "Banana Pancakes",
                "detail": "In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla. Heat a large non-stick frying pa...",
                "ingredients": "Banana, Eggs,Baking Powder,Vanilla Extract,Oil,Pecan Nuts,Raspberries"
            },
            "createdTime": "2021-06-29T14:10:53.000Z"
        },

  
```

Workouts table

```JSON

{
    "records": [
        {
            "id": "recUCDoGVZPKdfoBn",
            "fields": {
                "workout": "Cycling",
                "time": "30min"
            },
            "createdTime": "2021-06-29T14:11:46.000Z"
        },
    ],
    "offset": "recyRznNsvWm1QHMv"
}

```

Books table 
```JSON
{
    "records": [
        {
            "id": "reclVYSV7xuECkdqj",
            "fields": {
                "author": "Roberto Bolaño",
                "title": "2666",
                "description": "Completed in 2003 shortly before his death, 2666 is not only Roberto Bolaño's masterpiece but also one of the finest and most important novels of the ...",
                "image": "https://www.powells.com/book/2666-9780312429218/1-0"
            },
            "createdTime": "2021-06-29T14:29:43.000Z"
        }
    ],
    "offset": "reclVYSV7xuECkdqj"
}
```

Items table

```JSON
{
    "records": [
        {
            "id": "reckPkMBVEJ8tm2ex",
            "fields": {
                "item": "Milk",
                "store": "Whole Foods"
            },
            "createdTime": "2021-06-29T14:12:15.000Z"
        },
    ],
    "offset": "recEn5ZglRuEIPvzf"
}
```

Posts table

```JSON
{
    "records": [
        {
            "id": "recehhuDiRfj8GlTw",
            "fields": {
                "post": "“How often do you blog?” I was recently asked at a writing conference.\n\n“I blog every day,” I’d say, with the stiff upper lip required of such stateme...",
                "topic": "How often do I blog"
            },
            "createdTime": "2021-06-29T14:12:02.000Z"
        }
    ],
    "offset": "recehhuDiRfj8GlTw"
}

```
Rest table

```JSON 
{
    "records": [
        {
            "id": "recxtZDNLTb0WlRgL",
            "fields": {
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.macksearplugs.com%2Fear-plugs-amazon-lifestyle-images%2Fear-plugs-for-sleeping-sleep-like-a-baby..."
            },
            "createdTime": "2021-06-29T14:56:34.000Z"
        },
    ],
    "offset": "recAriUthoruZt2ro"
}
```
  
### MVP/PostMVP
#### MVP
- Complete Spin wheel functionality
- Complete CSS for Spin wheel
- Complete proper links to all pages
- Axios call to AIRTABLE
- Render data on all pages
- Allow user to add data on required pages 
- complete recipe and book component

#### PostMVP
- complete remaining components
- Add styling for all pages

## Project Schedule
|  Day  | Deliverable | Status |
|-------|-------------| -------|
|June 28| Prompt / Wireframes/ Timeframes | Completed
|June 29| Project Approval | Pending
|June 30| Work with APP.js (Spin wheel functionality) | Not Started
|June 30| Airtable setup | Not Started
|July 1 | Work on components/axios/links | Not Started
|July 2 | MVP  | Not Started          
|July 2 | Project Deployment |  Not Started
|July 7 | Presentations/Project Submission | Not Started


## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --------- | :------: | :------------: | :-----------: | :---------: |
| Initial layout setup | H | 2hrs| 
| spin wheel functionality | H| 4hrs| 
| Airtable setup | H| 3hrs| 
| Axios set up | H | 3hrs|  
| Components setup | H | 3hrs|
| Rendering Data | M| 3hrs| 
| Work on Links | M | 2hrs|
| Work with CSS | M | 3hrs|
| Debugging | H | 3hrs| 
| Render results | H | 3hrs| 
| Post MVP features | M | 3hrs|
| General Research | M | 3hrs|
| Add additional CSS look and feel to all components | M | 3hrs| 
| Total | H | 38hrs| 

### SWOT Analysis
#### Strength:
I feel quite confident with the React framework and building components

#### Weakness:
I feel like the spin wheel functionaltity will take time for me especially with CSS involved

#### Oppurtunities:
Making this app whill help me get better with my CSS and also linking to different pages will help me with better REACT understanding

#### Threats:
Feels like CSS with Spin wheel and the functionality will consume more time for me than expected. Also using more tables , I need to make sure I'm using it right data and not miss any links
