const posts = [
  {
    "_id": "123",
    "topic": "Space",
    "postedBy": { "username": "NASA" },
    "liked": false,
    "verified": false,
    "handle": "NASA",
    "tuit": "In 2021, our @NASAPersevere Mars rover landed",
    "logo-image": "nasa-logo.png",
    "avatar-image": "nasa-logo.png",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345,
      "dislikes": 12,
    }
  },
  {
    "_id": "234",
    "topic": "Space",
    "postedBy": { "username": "NASA" },
    "liked": false,
    "verified": false,
    "handle": "NASA",
    "tuit": "Ingenuity helicopter takes flight.",
    "logo-image": "nasa-logo.png",
    "avatar-image": "nasa-logo.png",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345,
      "dislikes": 12,
    }
  },
  {
    "_id": "345",
    "topic": "Web Development",
    "postedBy": {
      "username": "ReactJS"
    },
    "liked": true,
    "verified": false,
    "handle": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "attachments": {
      "video": "unKvMC3Y1kI"
    },
    "logo-image": "react-logo.png",
    "avatar-image": "react-logo.png",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345,
      "dislikes": 12,
    }
  },
  {
    "_id": "456",
    "topic": "Space",
    "postedBy": {
      "username": "SpaceX"
    },
    "liked": false,
    "verified": false,
    "handle": "spacex",
    "title": "",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "attachments": {
      "image": "spacex-starship.jpg"
    },
    "time": "last month",
    "logo-image": "nodejs-logo.jfif",
    "avatar-image": "nodejs-logo.jfif",
    "tuits": "120K",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345,
      "dislikes": 12,
    }
  },
  {
    "_id": "567",
    "topic": "Space",
    "postedBy": {
      "username": "Scott Manley"
    },
    "liked": true,
    "verified": true,
    "handle": "DJSnM",
    "postedOn": "2020-12-10",
    "time": "1 day",
    "title": "JavaScript is programming language that can run on browsers as well as desktops",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "logo-image": "js-logo.png",
    "avatar-image": "js-logo.png",
    "tuits": "123K",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345,
      "dislikes": 12,
    }
  },
  {
    "_id": "678",
    "topic": "Web Development",
    "postedBy": {
      "username": "jQuery"
    },
    "liked": false,
    "verified": false,
    "handle": "jQuery",
    "title": "jQuery",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "time": "last week",
    "logo-image": "jquery-logo.png",
    "avatar-image": "jquery-logo.png",
    "tuits": "122K",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345,
      "dislikes": 12,
    }
  },
  {
    "_id": "789",
    "topic": "Web Development",
    "postedBy": {
      "username": "NodeJS"
    },
    "liked": true,
    "verified": true,
    "handle": "NodeJS",
    "title": "",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "time": "last month",
    "logo-image": "nodejs-logo.jfif",
    "avatar-image": "nodejs-logo.jfif",
    "tuits": "120K",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345,
      "dislikes": 12,
    }
  }
];

export default posts;