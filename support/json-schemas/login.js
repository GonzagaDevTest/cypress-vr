import Joi from "joi";

export const loginResponse = Joi.object({
    access_token: Joi.string().required(),
    token_type: Joi.string().required(),
    expires_in: Joi.number().required(),
    user: {
        id: Joi.number().required(),
        login: Joi.string().required(),
        nome: Joi.string().required(),
        email: Joi.string().required(),
        ativo: Joi.string().required(),
        precisa_trocar_senha: Joi.string().required(),
        password_old: Joi.string().allow(null).required(),
        conta_ativa: Joi.boolean().required(),
        desativacao_conta: Joi.boolean().required()
    }
})