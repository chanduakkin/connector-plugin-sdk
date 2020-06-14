(function dsbuilder(attr) {
    if (attr[connectionHelper.attributeSSLMode] == 'require'){
    var urlBuilder = "jdbc:teiid:" + attr[connectionHelper.attributeDatabase] + "@mms://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort];
} else {
    var urlBuilder = "jdbc:teiid:" + attr[connectionHelper.attributeDatabase] + "@mm://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort];
}
    return [urlBuilder];
})
