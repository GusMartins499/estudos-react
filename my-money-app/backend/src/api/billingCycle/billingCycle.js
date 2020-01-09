const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, min: 0, require: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, min: 0, require: true },
    status: {
        type: String, require: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
})

const billingCycle = new mongoose.Schema({
    name: { type: String, require: true },
    month: { type: Number, require: true, min: 1, max: 12 },
    year: { type: Number, min: 1970, max: 2100, require: true },
    credits: [creditSchema],
    debtSchema: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)