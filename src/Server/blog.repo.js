const uuid = require('uuid').v1;
const mongo = require('mongodb').MongoClient
const url = "ConnectionString";

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
        let blogID = uuid();
        let blog = { id:blogID, title: title, destination: destination, description: description, date: date, content: content };
        await collection.insertOne(blog);
        return blog;
    }

    async getBlog(blogId) {
        const client = await this.getClient();
        let collection = this.getCollection(client);
        let result =  await collection.findOne({id: blogId});
        console.log(blogId);
        return result
    }

    async getClient() {
        return await mongo.connect(url).catch((err) => console.log(err));
    }

    async deleteBlog(blogId) {
        const client = await this.getClient();
        let collection = this.getCollection(client);
        await collection.deleteOne({id: blogId});
        return true;
    }

    getCollection(client) {
        const db = client.db('travelblog');
        let collection = db.collection('blogs');
        return collection;
    }
}
module.exports = BlogRepo; 