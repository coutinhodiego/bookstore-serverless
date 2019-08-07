
module.exports.successResponse = (obj) => {
    return {
        statusCode : 201,
        body: JSON.stringify(obj)
    }
}

module.exports.errorResponse = (error) => {
    return {
        statusCode: 500,
        body: JSON.stringify({ statusCode: 500, message: error.message })
    }
}