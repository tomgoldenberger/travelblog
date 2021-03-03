// const uuid = require('uuid').v1;
const mongo = require('mongodb').MongoClient
const url = "mongodb+srv://Goldi:Tominem10@cluster0.pbuhd.mongodb.net/GoldiDB?retryWrites=true&w=majority";

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

        
        let blog = { title: title, destination: destination, description: description, date: date, content: content };

        await collection.insertOne(blog);

        return blog;
    }

    async getBlog(blogUuid) {
        const client = await this.getClient();
        let collection = this.getCollection(client);
        return await collection.findOne({id: blogUuid});
    }   

    async deleteBlog(blogUuid) {
        const client = await this.getClient();
        let collection = this.getCollection(client);
        let notebook = await collection.findOne({id: notebookUuid});

        let filteredNotes = notebook.notes.filter(n => n.id !== noteUid);
        await collection.updateOne({id: blogUuid}, { $set: {notes: filteredNotes}}, notebook);
        return true;
    }

    getCollection(client) {
        const db = client.db('Travelblog');
        let collection = db.collection('Blogentrys');
        return collection;
    }

    async getClient() {
        return await mongo.connect(url).catch((err) => console.log(err));
    }
}


module.exports = BlogRepo; 