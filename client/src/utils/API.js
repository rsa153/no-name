import axios from "axios";

export default {
  // Tasks
  // Gets all existing tasks
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets tasks for specified date
  getTasksByDate: function(query) {
    console.log("-------- getTasksByDate --------")
    return axios.get("/api/tasks/date", { params: query });
  },
  // Gets tasks group by date weekly
  getTasksPerWeek: function (query) {
    console.log("-------- getTasksPerWeek --------")
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
    return axios.get("/api/users");
  },
  // Gets user with given id
  getUserId: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes user
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves user
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getcurrentuser: function() {
    return axios.get("/api/users/getcurrentuser");
  },
  getPet: function() {
    return axios.get("/api/pets");
  },
  // failTasks: function(currentPet) {
  //   return axios.post("/api/pets/failTasks", currentPet);
  // }
  // passTasks: function(currentPet) {
  //   return axios.post("/api/pets/failTasks", currentPet);
  // }
};
