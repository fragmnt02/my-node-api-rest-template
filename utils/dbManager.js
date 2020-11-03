const db = require("./db");

exports.getAll = (collectionName) => {
    return db[collectionName];
};

exports.findById = (collectionName, id) => {
    const collection = db[collectionName];
    const document = collection.find(doc => doc.id == id);
    if (document) {
        return document;
    } else {
        throw new Error(`NOT_FOUND: ${collectionName}/${id} does not exist.`);
    }
};

exports.findByElement = (collectionName, id) => {
    const document = db[collectionName][id];
    if (document) {
        return document;
    } else {
        throw new Error(`NOT_FOUND: ${collectionName}/${id} does not exist.`);
    }
};

exports.createOne = (collectionName, element) => {
    db[collectionName].push(element);
};

exports.createElement = (collectionName, id, element) => {
    db[collectionName][id] = element;
};

exports.updateById = (collectionName, id, data) => {
    const index = db[collectionName].findIndex(doc => doc.id == id);
    if (index !== -1) {
        const doc = {
            ...db[collectionName][index],
            ...data
        };
        db[collectionName][index] = doc;
        return db[collectionName][index];
    } else {
        throw new Error(`NOT_FOUND: ${collectionName}/${id} does not exist.`);
    }
};

exports.updateByElement = (collectionName, id, data) => {
    const doc = db[collectionName][id];
    if (doc) {
        const updatedDoc = {
            ...doc,
            ...data
        };
        db[collectionName][id] = updatedDoc;
        return db[collectionName][id];
    } else {
        throw new Error(`NOT_FOUND: ${collectionName}/${id} does not exist.`);
    }
};

exports.deleteById = (collectionName, id) => {
    const index = db[collectionName].findIndex(doc => doc.id == id);
    if (index !== -1) {
        db[collectionName].splice(index,1);
    } else {
        throw new Error(`NOT_FOUND: ${collectionName}/${id} does not exist.`);
    }
};

exports.deleteByElement = (collectionName, id) => {
    delete db[collectionName][id];
};