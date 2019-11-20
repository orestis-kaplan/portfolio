const cards = [
    {
        id: 1,
        title: 'ConnectBook',
        description: 'An immitation of the original facebook',
        image: 'facebook/a.png',
        link: 'https://nameless-mountain-22371.herokuapp.com/users/sign_in'
    },
    {
        id: 2,
        title: 'Weather App',
        description: 'A app that shows you the weather at the time',
        image: 'weather/a.png',
        link: 'https://userman95.github.io/Weather-App/dist/'
    },
    {
        id: 3,
        title: 'Quality Paths',
        description: 'An app that helps people with movement disabilties',
        image: 'quality/a.png',
        link: 'https://userman95.github.io/PathRating/'
    },
    {
        id: 4,
        title: 'The Todo List',
        description: 'A todo list app',
        image: 'todo/a.png',
        link: 'https://userman95.github.io/The-Todo-List/dist'
    },
    {
        id: 5,
        title: 'Roomie',
        description: 'Front end project inspired from Dribble design',
        image: 'dribble/dribble.png',
        link: 'https://userman95.github.io/dribble-portfolio/'
    },
    {
        id: 6,
        title: 'Bookstore',
        description: 'A bookstore app',
        image: 'bookstore/a.png',
        link: 'https://bookstorefinal.herokuapp.com/'
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
        screenOne: '',
        firstDescription: 'ConnectBook is an app that let the user to search and make friends. They can make posts that contain text and photos, edit their profile by adding profile and wallpaper pictures.',
        screenTwo: '',
        secondDescription: {
            ulTitle: 'Optimization can include: ',
            liOptions: ['Front-end beauty','Server-side or Client-side chat service', 'Widgets', 'Profile additions', 'Video and music performing'] 
        },
        onlinePreview: 'https://nameless-mountain-22371.herokuapp.com/users/sign_in',
        githubRepository: 'https://github.com/userman95/ConnectBook'
    }
]
export default {cards,tabs,projects}