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

![image](https://user-images.githubusercontent.com/84349667/123823995-456e2200-d8c3-11eb-8e18-f78a1c7f5fbb.png)




## API and Data Sample

Recipes Table
```JSON

    "records": [
        {
            "id": "recrHhXxygGAMwoFo",
            "fields": {
                "Cuisine": "American",
                "Recipe_Image": "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
                "Recipe_Name": "Banana Pancakes",
                "Recipe_Detail": "In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla. Heat a large non-stick frying pa...",
                "Recipe_Ingredients": "Banana, Eggs,Baking Powder,Vanilla Extract,Oil,Pecan Nuts,Raspberries"
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
                "Workout": "Cycling",
                "Time": "30min"
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
                "Name": "The Newcomer",
                "Author": "Mary Kay Andrews",
                "Description": "After she discovers her sister Tanya dead on the floor of her fashionable New York City townhouse, Letty Carnahan is certain she knows who did it: Tan..."
            },
            "createdTime": "2021-06-29T14:29:43.000Z"
        },
    ],
    "offset": "recxpsDFRWVGuzJJW"
}
```

Items table

```JSON
{
    "records": [
        {
            "id": "reckPkMBVEJ8tm2ex",
            "fields": {
                "Item": "Milk",
                "Store": "Whole Foods"
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
                "Post": "“How often do you blog?” I was recently asked at a writing conference.\n\n“I blog every day,” I’d say, with the stiff upper lip required of such stateme...",
                "Date": "2021-06-29"
            },
            "createdTime": "2021-06-29T14:12:02.000Z"
        },
    ],
    "offset": "recrg1fLCcFAWdyS5"
}

```
Rest table

```JSON 
{
    "records": [
        {
            "id": "recxtZDNLTb0WlRgL",
            "fields": {
                "Image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.macksearplugs.com%2Fear-plugs-amazon-lifestyle-images%2Fear-plugs-for-sleeping-sleep-like-a-baby..."
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

#### PostMVP
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
| Airtable setup | H| 1hrs| 
| Axios set up | H | 3hrs|  
| Components setup | H | 3hrs|
| Rendering Data | M| 3hrs| 
| Work on Links | M | 2hrs|
| Work with CSS | M | 3hrs|
| Debugging | H | 3hrs| 
| Render results | H | 3hrs| 
| Post MVP features | M | 3hrs|
| General Research | M | 3hrs| 
| Total | H | 33hrs| 

### SWOT Analysis
#### Strength:
I feel quite confident with the React framework and building components

#### Weakness:
I feel like the spin wheel functionaltity will take time for me especially with CSS involved

#### Oppurtunities:
Making this app whill help me get better with my CSS and also linking to different pages will help me with better REACT understanding

#### Threats:
Feels like CSS with Spin wheel and the functionality will consume more time for me than expected. Also using more tables want to make sure I'm using it right data and ont miss any links
