const Book = require('../../database/models/Book')
const db = require('../../database/connection')
const { successResponse, errorResponse } = require('../../util/responses')

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const body = JSON.parse(event.body)

    try {
        //open mongodb connection
        db.createConnection()

        const book = await Book.create(body)
        return successResponse(book)
        
    } catch (error) {
        return errorResponse(error)
    }

}