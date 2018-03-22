module.exports = (part) => {

    function truePx(elem) {
        let num = +elem.slice(0, elem.indexOf('p'));
        return `${num / 16}rem`;
    }

    return part.replace(/[0-9]+px/g, truePx);
};