// const uuid = require('uuid').v1;
const mongo = require('mongodb').MongoClient
const url = "Connection String";

class BlogRepo {

    async getBlogs() {
        const client = await this.getClient();
        let collection = this.getCollection(client);
        let result = await collection.find({});
        let resultAsArray = await result.toArray();
        return resultAsArray;
    }

    async createBlogentry(title, destination, description, date, content) {
        const client = await this.getClient();
        let collection = this.getCollection(client);

        
        let notebook = { title: title, destination: destination, description: description, date: date, content: content };

        await collection.insertOne(notebook);

        return notebook;
    }

    async getNotebook(notebookUuid) {
        const client = await this.getClient();
        let collection = this.getCollection(client);
        return await collection.findOne({id: notebookUuid});
    }
    
    async addNote(notebookUuid, n) {
        const client = await this.getClient();
        let collection = this.getCollection(client);

        let notebook = await collection.findOne({id: notebookUuid});

         if (!client) {
            return null;
        }

        // let noteUid = uuid();

        let note = {
            id: noteUid,
            message: n
        }
        notebook.notes.push(note);
        await collection.updateOne({id: notebookUuid}, { $set: {notes: notebook.notes}}, notebook);

        return noteUid;
    }

    async getClient() {
        return await mongo.connect(url).catch((err) => console.log(err));
    }

    async getNotes(notebookUuid) {
        const client = await this.getClient();
        let collection = this.getCollection(client);

        let notebook = await collection.findOne({id: notebookUuid});
        return notebook.notes;
    }

    async deleteNote(notebookUuid, noteUid) {
        const client = await this.getClient();
        let collection = this.getCollection(client);
        let notebook = await collection.findOne({id: notebookUuid});

        let filteredNotes = notebook.notes.filter(n => n.id !== noteUid);
        await collection.updateOne({id: notebookUuid}, { $set: {notes: filteredNotes}}, notebook);
        return true;
    }

    getCollection(client) {
        const db = client.db('notes-example-app');
        let collection = db.collection('notebooks');
        return collection;
    }
}


module.exports = BlogRepo; 