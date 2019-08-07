const Book = require('../../database/models/Book')
const db = require('../../database/connection')

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const { id } = event.pathParameters

    try {
        //open mongodb connection
        db.createConnection()

        const book = await Book.findByIdAndDelete(id)
        return {
            statusCode : 200,
            body: JSON.stringify(book)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ statusCode: 500, message: error.message })
        }
    }

}