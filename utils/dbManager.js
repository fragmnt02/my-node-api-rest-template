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

exports.createOne = (collectionName, element) => {
    db[collectionName].push(element);
};

exports.updateById = (collectionName, id, data) => {
    const index = db[collectionName].findIndex(doc => doc.id == id);
    if (index !== -1) {
        const doc = {
            ...db.customers[index],
            ...data
        };
        db.customers[index] = doc;
        return db.customers[index];
    } else {
        throw new Error(`NOT_FOUND: ${collectionName}/${id} does not exist.`);
    }
};

exports.deleteById = (collectionName, id) => {
    const index = db[collectionName].findIndex(doc => doc.id == id);
    if (index !== -1) {
        db.customers.splice(index,1);
    } else {
        throw new Error(`NOT_FOUND: ${collectionName}/${id} does not exist.`);
    }
};