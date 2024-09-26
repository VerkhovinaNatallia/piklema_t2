import https from 'https';

const url = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available';

interface Pet {
    id: number;
    name: string;
    status: string;
}

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const pets: Pet[] = JSON.parse(data);
        console.log(pets);
    });
}).on('error', (err) => {
    console.error('Error: ', err.message);
});
