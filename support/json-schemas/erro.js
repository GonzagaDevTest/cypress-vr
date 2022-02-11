import Joi from "joi";

export const naoAutorizadoResponse = Joi.object({
    error: Joi.string().required()
})