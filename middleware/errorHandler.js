const { customApiError } = require('../error/custom-error')
const errorHandler = (err, req, res, next) => {
    if (err instanceof customApiError) {
        return res.status(err.status).json( {msg: err.message })
    }
    console.log(err)
    return res.status(500).json( {msg: `Something went wrong` })
}

module.exports = errorHandler