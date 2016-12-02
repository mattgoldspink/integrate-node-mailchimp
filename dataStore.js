var simpleInMemoryDataStore = {
    mailchimpConf: {}
};

module.exports = {
    saveMailchimpForUser: function(email, mailchimpConf) {
        simpleInMemoryDataStore.mailchimpConf[email] = mailchimpConf;
    },
    getMailchimpForUser: function(email) {
        return simpleInMemoryDataStore.mailchimpConf[email];
    }
};