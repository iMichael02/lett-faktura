export const validateForm = (schema, data, t) => {
    const { error } = schema.validate(data, {
        abortEarly: false,
    });

    if (!error) return {};

    const errors = {};

    error.details.forEach((detail) => {
        const field = detail.path[0];
        const key = detail.type.split(".")[1];

        errors[field] = t(`validation:${field}.${key}`);
    });

    return errors;
};
