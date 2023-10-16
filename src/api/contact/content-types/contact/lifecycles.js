module.exports = {
    async beforeCreate(event) {
        // console.log('beforeSave ', event)
        // event.params.data.mobile = 'xyzaaaaaaa'
        event.params.data.mobile = btoa(event.params.data.mobile)
    },
    async afterFindOne(event) {
        // console.log('afterFineOne', event.result.mobile);
        event.result.mobile = atob(event.result.mobile)
    },
    async afterFindMany(event) {
        console.log('afterFindMany', event.result[5]);
    }
}