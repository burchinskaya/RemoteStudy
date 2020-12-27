module.exports = () => {
  return {
    posts: [
      {
        id: 1,
        title: "json-server",
        author: "typicode",
      },
    ],
    comments: [
      {
        id: 1,
        body: "some comment",
        postId: 1,
      },
    ],
    courses: require("./userCourses.json"),
    profile: {
      name: "typicode",
    },
  }
}
