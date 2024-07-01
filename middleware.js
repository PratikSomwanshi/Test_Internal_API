const internalOnly = (req, res, next) => {
    const allowedIps = ["127.0.0.1", "::1", "localhost"]; // Add any other allowed internal IPs here

    if (allowedIps.includes(req.ip)) {
        next();
    } else {
        console.log(req.ip);
        res.status(403).send("Forbidden");
    }
};

module.exports = { internalOnly };
