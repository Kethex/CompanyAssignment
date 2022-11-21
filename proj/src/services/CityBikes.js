export async function getBikes() {

    const response = await fetch('http://api.citybik.es/v2/networks/santander-cycles');
    let res = response.json()
    return res
}

