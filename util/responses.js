
module.exports.successResponse = (obj) => {
    return {
        statusCode: 201,
        body: JSON.stringify(obj, null, 2)
    }
}

module.exports.errorResponse = (error) => {
    return {
        statusCode: 500,
        body: JSON.stringify({ statusCode: 500, message: error.message }, null, 2)
    }
}