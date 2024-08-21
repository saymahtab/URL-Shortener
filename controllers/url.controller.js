const shortid = require("shortid");
const { URL } = require("../models/url.model");

const handleURL = async (req, res) => {

    const body = req.body;
    if(!body.url) {
        return res.status(400).json({error: 'url is required'})
    }

    const shortID = shortid();
    const redirectURL = body.url;

    await URL.create({
        shortId: shortID,
        redirectURL: redirectURL,
        visitHistory: [],
        createdBy: req.user._id,
    })
    res.render('home', {
        id: shortID,
    })
}

const handleGetShortURL = async (req, res) => {
    const shortID = req.params.shortID;
    
    try {
        const url = await URL.findOneAndUpdate(
            { shortId: shortID },
            {
                $push: {
                    visitHistory: {
                        timeStamp: Date.now()
                    },
                },
            },
        );

        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }
        res.redirect(url.redirectURL);

    } catch (error) {
        console.error("Error finding URL:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const handleViewClicks = async (req, res) => {
    const body = req.body;
    if(!body.url) {
        return res.status(400).json({error: 'url is required'})
    }
    const parts = body.url.split('/');
    const shortID = parts[parts.length - 1];
    const url = await URL.findOne({shortId: shortID})

    res.render('stats', {
        url: url,
    })

}


module.exports = {
    handleURL,
    handleGetShortURL,
    handleViewClicks,
}