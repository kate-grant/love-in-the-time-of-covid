const Advice = require('../models/advice-model.js')

createAdvice = (req, res) => {
    console.log("1");
    const body = req.body


    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a date idea',
        })
    }
    console.log("2");
    const advice = new Advice(body)

    if (!advice) {
        console.log("not advice! " + JSON.stringify(advice))
        return res.status(400).json({ success: false, error: err })
    }
    console.log("3");
    console.log(JSON.stringify(req.body));
    advice
        .save()
        .then(() => {
            console.log("5");
            return res.status(201).json({
                success: true,
                id: advice._id,
                message: 'Advice created!',
            })
        })
        .catch(error => {
            console.log("4");
            return res.status(400).json({
                error,
                message: 'Advice not created!',
            })
        })
}

updateAdvice = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Advice.findOne({ _id: req.params.id }, (err, advice) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Advice not found!',
            })
        }
        advice.idea = body.idea
        advice.location = body.location
        advice.tag = body.tag
        advice
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: advice._id,
                    message: 'Advice updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Advice not updated!',
                })
            })
    })
}

deleteAdvice = async (req, res) => {
    await Advice.findOneAndDelete({ _id: req.params.id }, (err, advice) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!advice) {
            return res
                .status(404)
                .json({ success: false, error: `Advice not found` })
        }

        return res.status(200).json({ success: true, data: advice })
    }).catch(err => console.log(err))
}

getAdviceById = async (req, res) => {
    await Advice.findOne({ _id: req.params.id }, (err, advice) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }

        if (!advice) {
            console.log(err)
            return res
                .status(404)
                .json({ success: false, error: `Advice not found` })
        }
        return res.status(200).json({ success: true, data: advice })
    }).catch(err => console.log(err))
}

getAdviceByTag = async (req, res) => {
    await Advice.findOne({ _tag: req.params.tag }, (err, advice) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }

        if (!advice) {
            console.log(err)
            return res
                .status(404)
                .json({ success: false, error: `Advice not found` })
        }
        return res.status(200).json({ success: true, data: advice })
    }).catch(err => console.log(err))
}

getAdvice = async (req, res) => {
    await Advice.find({}, (err, advices) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
            
        }
        if (!advices.length) {
            console.log(err)
            return res
                .status(404)
                .json({ success: false, error: `Advice not found` })
        }
        return res.status(200).json({ success: true, data: advices })
    }).catch(err => console.log(err))
}

module.exports = {
    createAdvice,
    updateAdvice,
    deleteAdvice,
    getAdviceById,
    getAdviceByTag,
    getAdvice,
}