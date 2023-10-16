module.exports = {
    async beforeCreate(event) {
        // console.log('beforeSave ', event)
        // event.params.data.mobile = 'xyzaaaaaaa'
        event.params.data.mobile = btoa(event.params.data.mobile)
    },
    async afterFindOne(event) {
        console.log('afterFineOne ', event?.result?.mobile)
        // console.log('afterFineOne', event?.result?.mobile);
        event.result.mobile = atob(event?.result?.mobile)
    },
    async afterFindMany(event) {
        console.log('afterFindMany', event.result.length);
        // using .length for count amount
        // using .map for loop data

        // method 1
        // await event.result.map(item => {
        //     console.log('item ', item)
        //     item.mobile = atob(item.mobile)
        //     return item
        // })

        // method 2
        // await event.result.forEach(item => {
        //     console.log('item ', item)
        //     item.mobile = atob(item.mobile)
        //     return item
        // })

        // method 3
        let i;
        for(i = 0; i < event.result.length; i++) {
            event.result[i].mobile = atob(event.result[i].mobile)
        }
    
    }
}