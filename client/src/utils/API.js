import axios from "axios";

export default {
  // Tasks
  // Gets all existing tasks
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets tasks for specified date
  getTasksByDate: function(query) {
    console.log("-------- HAHA ----- get task by query ----- query")
    console.log(query)
    return axios.get("/api/tasks/date", { params: query });
    // the one below does NOT work -______-
    // return axios.get("/api/tasks", { params: { q: query } });
  },
  // Gets tasks group by date weekly
  getTasksPerWeek: function (query) {
    console.log("-------- HAHA ----- getTasksGroupByDateWeekly ------- get task by query ----- query")
    console.log(query)
    return axios.get("/api/tasks/week", { params: query });

  },
  // Gets tasks group by date
  getTasksGroupByDate: function () {
    return axios.get("/api/tasks/groups");
  },
  // Gets daily tasks percent complete
  getTasksPercentComplete: function () {
    return axios.get("/api/tasks/iscomplete");
  },
  // Gets the task with the given id
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  // Gets the task with the given id
  updateTask: function(id, taskData) {
    return axios.put("/api/tasks/" + id, taskData);
  },
  // Deletes the task with the given id
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a task to the database
  saveTask: function(taskData) {
    return axios.post("/api/tasks", taskData);
  },
   // Gets all existing users
   getUser: function() {
    return axios.get("/api/user");
  },
  // Gets user with given id
  getUserId: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes user
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves user
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
