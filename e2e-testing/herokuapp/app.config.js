const BASE = 'http://the-internet.herokuapp.com'

const config = {
    URLS: {
        BASE: BASE,
        AB_TEST: `${BASE}/abtest`,
        BASIC_AUTH: `${BASE}/basic_auth`,
        BROKEN_IMAGES: `${BASE}/broken_images`
    } 
}

module.exports = config;