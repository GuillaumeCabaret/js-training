
process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your age ? ')
process.stdin.on('data', ((number) => {
    if (!isNaN(number) && number < 99) {
        console.log('Vous êtes nées en ' + (2018 - number))
        process.exit()
    } else {
        console.log('Entrez un nombre svp (entre 1 et 99)')
    }
}))