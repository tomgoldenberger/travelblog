const uuid = require('uuid').v1;
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
        let blogID = uuid();
        let blog = { id:blogID, title: title, destination: destination, description: description, date: date, content: content };
        await collection.insertOne(blog);
        return blog;
    }

    async getBlog(blogId) {
        const client = await this.getClient();
        let collection = this.getCollection(client);
        let result =  await collection.findOne({id: blogId});
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
    getCollectionUsers(client) {
        const db = client.db('travelblog');
        let collection = db.collection('users');
        return collection;
    }


    async createUser(username, password) {
        const client = await this.getClient();
        let collection = this.getCollectionUsers(client);
        let user = { username:username, password: password};
        await collection.insertOne(user);
        return user;
    }


    async getUser(name) {
        const client = await this.getClient();
        let collection = this.getCollectionUsers(client);
        let result =  await collection.findOne({username: name});
        return result
    }
}
module.exports = BlogRepo; 