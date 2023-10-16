console.log('map is working...')

const simpleDatas = ['A', 'B', 'C', 'D', 'E', 'F']
console.log('before data ', simpleDatas)

const finalData = simpleDatas.map(data => {
    console.log('data ', data)
    data = data + '-hashing'
    return data
})

console.log('after data ', finalData)