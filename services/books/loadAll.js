const Book = require('../../database/models/Book')
const db = require('../../database/connection')
const { successResponse, errorResponse } = require('../../util/responses')

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        //open mongodb connection
        db.createConnection()

        const books = await Book.find()
        return successResponse(books)
        
    } catch (error) {
        return errorResponse(error)
    }

}