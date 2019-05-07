import axios from "axios";

export default {
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
