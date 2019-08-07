const Book = require('../../database/models/Book')
const db = require('../../database/connection')

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        //open mongodb connection
        db.createConnection()

        const books = await Book.find()
        return {
            statusCode : 200,
            body: JSON.stringify(books)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ statusCode: 500, message: error.message })
        }
    }

}