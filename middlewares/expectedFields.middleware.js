module.exports = (registration) => {
    return (req, res, next) => {
        let error = false;

        for (let i = 0; i < registration.length; i++) {
            if (!req.body[registration[i]]) {
                error = true;
            }
        }
        error ? res.status(200).send({error: true, message: 'Not all the fields are correct'}) : next();
    };
};
