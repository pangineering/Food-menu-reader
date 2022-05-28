"use strict";

const { firestore } = require("firebase-admin");
const {app,db} = require("../db");
//const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


const Users = require("../models/users");


const addUser = async (req, res, next) => {
  try {
    const data = req.body;
    await db.collection("users").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await db.collection("users");
    const data = await users.get();
    const usersArray = [];
    if (data.empty) {
      res.status(404).send("No user record found");
    } else {
      data.forEach((doc) => {
        const user = new Users(
          doc.id,
          doc.data().address,
          doc.data().gender,
          doc.data().bithdate,
          doc.data().email,
          doc.data().name,
          doc.data().native
        );
        usersArray.push(user);
      });
      res.send(usersArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await db.collection("users").doc(id);
    const data = await user.get();
    if (!data.exists) {
      res.status(404).send("User with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await db.collection("users").doc(id);
    await user.update(data);
    res.send("User record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.collection("users").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
};
