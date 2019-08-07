const Book = require('../../database/models/Book')
const db = require('../../database/connection')

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    
    const body = JSON.parse(event.body)

    try {
        //open mongodb connection
        db.createConnection()

        const book = await Book.create(body)
        return {
            statusCode : 201,
            body: JSON.stringify(book)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ statusCode: 500, message: error.message })
        }
    }

}