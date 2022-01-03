module.exports = function (babel) {
    return {
        visitor: {
            Identifier(path) {
                console.log(path.type, path.node.name)
            }
        }
    }
}