const Book = require('../../database/models/Book')
const db = require('../../database/connection')

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const { id } = event.pathParameters
    const body = JSON.parse(event.body)
    // console.log(event)

    try {
        //open mongodb connection
        db.createConnection()

        const books = await Book.findByIdAndUpdate(id, body)

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