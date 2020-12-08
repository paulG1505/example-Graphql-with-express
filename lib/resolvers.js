"use strict";
const courses = [
  {
    _id: "anyid",
    title: "mi titulo",
    teacher: "Paul Guaman",
    description: "Curso de React",
    topic: "Aprendiendo",
  },
  {
    _id: "anyid2",
    title: "mi titulo 2",
    teacher: "Paul Guaman",
    description: "Curso de React",
    topic: "Aprendiendo",
  },
  {
    _id: "anyid3s",
    title: "mi titulo 3",
    teacher: "Paul Guaman",
    description: "Curso de React",
    topic: "Aprendiendo",
  },
];

module.exports = {
  Query: {
    getCourses: () => {
      return courses;
    },
    getCourse: (root, args) => {
      const course = courses.filter((course) => course._id === args.id);
        return course.pop()
    },
  },
};
