import axios from "axios";

export default {
  // Groups
  // Gets all existing groups
  getGroups: function() {
    return axios.get("/api/groups");
  },
  // Gets the group with the given id
  getGroup: function(id) {
    return axios.get("/api/groups/" + id);
  },
  // Deletes the book with the given id
  deleteGroup: function(id) {
    return axios.delete("/api/groups/" + id);
  },
  // Saves a book to the database
  saveGroup: function(groupData) {
    return axios.post("/api/groups", groupData);
  },

  // Tasks
  // Gets all existing tasks
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets tasks for specified date
  getTasksByQuery: function(query) {
    console.log("-------- HAHA ----- get task by query ----- query")
    console.log(query)
    return axios.get("/api/tasks", { params: query });
    // the one below does NOT work -______-
    // return axios.get("/api/tasks", { params: { q: query } });
  },
  // Gets tasks group by date
  getTasksGroupByDate: function() {
    return axios.get("/api/tasks/groups");
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
   // Gets all existing groups
   getUser: function() {
    return axios.get("/api/user");
  },
  // Gets the group with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
