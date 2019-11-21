const cards = [
    {
        id: 1,
        title: 'ConnectBook',
        description: 'An immitation of the original facebook',
        image: 'facebook/a.png',
        link: 'https://nameless-mountain-22371.herokuapp.com/users/sign_in',
        build: ['Rails','Javascript','HTML/CSS','AJAX','PostgreSQL']
    },
    {
        id: 2,
        title: 'Weather App',
        description: 'A app that shows you the weather at the time',
        image: 'weather/a.png',
        link: 'https://userman95.github.io/Weather-App/dist/',
        build: ['Webpack','Javascript','HTML/CSS']
    },
    {
        id: 3,
        title: 'Quality Paths',
        description: 'An app that helps people with movement disabilties',
        image: 'quality/a.png',
        link: 'https://userman95.github.io/PathRating/',
        build: ['Javascript','HTML/CSS','Google Maps API','Firebase']
    },
    {
        id: 4,
        title: 'The Todo List',
        description: 'A todo list app',
        image: 'todo/a.png',
        link: 'https://userman95.github.io/The-Todo-List/dist',
        build: ['Webpack','ES6','HTML/CSS']
    },
    {
        id: 5,
        title: 'Roomie',
        description: 'Front end project inspired from Dribble design',
        image: 'dribble/dribble.png',
        link: 'https://userman95.github.io/dribble-portfolio/',
        build: ['Bootstrap','HTML/CSS']
    },
    {
        id: 6,
        title: 'Bookstore',
        description: 'A bookstore app',
        image: 'bookstore/a.png',
        link: 'https://bookstorefinal.herokuapp.com/',
        build: ['React','Redux','HTML/CSS']
    },
]

const tabs = [
    {
        name: 'My Work'
    },
    {
        name: 'About me'
    },
    {
        name: 'My Articles'
    },
    {
        name: 'My Studies'
    },
    {
        name: 'Experience'
    }
]

const projects = [
    {
        header: 'ConnectBook',
        title: 'Reduce the distance between you and your friends, search them talk to them show them what you do!',
        screenOne: 'facebook/screenOne.png',
        firstDescription: 'ConnectBook is an app that let the user to search and make friends. They can make posts that contain text and photos, edit their profile by adding profile and wallpaper pictures.',
        screenTwo: 'facebook/screenTwo.png',
        secondDescription: {
            ulTitle: 'Optimization can include: ',
            liOptions: ['Front-end beauty','Server-side or Client-side chat service', 'Widgets', 'Profile additions', 'Video and music performing'] 
        },
        onlinePreview: 'https://nameless-mountain-22371.herokuapp.com/users/sign_in',
        githubRepository: 'https://github.com/userman95/ConnectBook'
    },
    {
        header: 'Weather App',
        title: 'Search for the weather and climate characteristics in any city in the world!',
        screenOne: 'weather/a.png',
        firstDescription: 'This weather app communicates with openWeather API and get data such as: Climate description,Temperature,Humidity,Wind speed for any city in the world.Go to the search bar enter the desired city and just press enter.You can switch temperature in Celcius,Kelvin and Fahrenheit from the circle next to the search bar.',
        screenTwo: 'weather/b.png',
        secondDescription: {
            ulTitle: 'Optimization can include: ',
            liOptions: ['Front-end beauty','Server-side or Client-side chat service', 'Widgets', 'Authentication'] 
        },
        onlinePreview: 'https://userman95.github.io/Weather-App/dist/',
        githubRepository: 'https://github.com/userman95/Weather-App'
    },
    {
        header: 'Quality Paths',
        title: 'Create the best possible paths to take as a multiple role user, expand the network, rate the world!',
        screenOne: 'quality/a.png',
        firstDescription: 'The user creates a path in the circle in his map and rates any path he creates. He can see the distance (in meters) of all paths he has created till now and also delete any path he wants. Then, he submits the total data into the database and his results come into a leaderboard that shows the overall rating in meters. In the leaderboard there can be seen the user with the most rated paths together with the metered results.All these results can come in handy for all users who are not familiar with a specific place-region. A future development can have the database to gather collections of ratings and guide the best path for the user to use through these. At the end of the day, users build their own network of paths to help all other users and scale the app by themselves!',
        screenTwo: 'quality/c.png',
        secondDescription: {
            ulTitle: 'Optimization can include: ',
            liOptions: ['Front-end beauty at the side-bar','Server-side or Client-side chat service','Notification system', 'Authentication','Representation of all paths created'] 
        },
        onlinePreview: 'https://userman95.github.io/PathRating/',
        githubRepository: 'https://github.com/userman95/PathRating'
    },
    {
        header: 'The Todo List',
        title: 'This app is about a todo-list that allows users to set priorities for different tasks. In our everyday lives we often want to categorize and prioritize out daily responsibilities. That being said, the user can create a project (container of responsibilities) that contains its own todos',
        screenOne: 'todo/a.png',
        firstDescription: 'Each todo has the following fields: Priority,Title,Description,Due Date,Completed.A todo can be added, removed and edited',
        screenTwo: 'todo/b.png',
        secondDescription: {
            ulTitle: 'Optimization can include: ',
            liOptions: ['Front-end beauty','Server-side', 'Authentication'] 
        },
        onlinePreview: 'https://userman95.github.io/The-Todo-List/dist/',
        githubRepository: 'https://github.com/userman95/The-Todo-List'
    },
    {
        header: 'Roomie',
        title: 'This is a realization of a Dribble Website Design. The site supports all devices',
        screenOne: 'dribble/dribble.png',
        firstDescription: 'This represents skill both of bootstrap grid system and CSS3 flexbox ',
        screenTwo: 'dribble/Screenshot.png',
        secondDescription: {
            ulTitle: 'Optimization can include: ',
            liOptions: ['Server-side data manipulation', 'Authentication','Product rating','Payment methods'] 
        },
        onlinePreview: 'https://userman95.github.io/dribble-portfolio/',
        githubRepository: 'https://github.com/userman95/dribble-portfolio'
    },
    {
        header: 'Digital Courses',
        title: 'Digital Courses CMS is an app that allows users to add their courses there and study them. Like a digital library, it helps users manage their courses, categorize them, and see what they last read(chapter) in a particular course.',
        screenOne: 'bookstore/a.png',
        firstDescription: 'Each course contain information such as : Title,Category,Percentage of completition,Chapter that the user is reading now',
        screenTwo: 'bookstore/b.png',
        secondDescription: {
            ulTitle: 'Optimization can include: ',
            liOptions: ['Server-side data manipulation with Rails', 'Authentication','Course rating'] 
        },
        onlinePreview: 'https://bookstorefinal.herokuapp.com/',
        githubRepository: 'https://github.com/userman95/bookstore'
    }
]
export default {cards,tabs,projects}