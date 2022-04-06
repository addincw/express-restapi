const express = require('express')
const router = express.Router()

const Member = require('../../models/member')

router.get('/', async (request, response) => {
    try {
        const results = await Member.find()
        response.json(results)
    } catch (error) {
        response
            .status(500)
            .json({ message: error })
    }

    // promise way
    // Member.find()
    //     .then(result => response.json(result))
    //     .catch(err => console.log(err))
})

router.get('/:id', async (request, response) => {
    try {
        const result = await Member.findById(request.params.id)
        response.json(result)
    } catch (error) {
        response
            .status(500)
            .json({ message: error })
    }
})

router.post('/', async (request, response) => {
    const member = new Member(request.body)

    try {
        const result = await member.save()
        response.json(result)
    } catch (error) {
        response
            .status(500)
            .json({ message: error })
    }
})

router.put('/:id', async (request, response) => {
    try {
        const result = await Member.updateOne({ _id: request.params.id }, {
            $set: request.body
        })
        response.json(result)
    } catch (error) {
        response
            .status(500)
            .json({ message: error })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const result = await Member.remove({ _id: request.params.id})
        response.json(result)
    } catch (error) {
        response
            .status(500)
            .json({ message: error })
    }
})

module.exports = router