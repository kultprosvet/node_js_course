import {
    createConnection,
    createQueryBuilder,
    getConnection,
    MoreThan,
} from 'typeorm'
import * as faker from 'faker'

async function runQuery() {
    await createConnection()
    let query = 'insert into points(location,name) VALUES '
    let values = []
    for (let i = 0; i < 100000; i++) {
        let longitude = faker.random.number({
            min: -180,
            max: 180,
            precision: 0.00001,
        })
        let latitude = faker.random.number({
            min: -90,
            max: 90,
            precision: 0.00001,
        })
        values.push(
            `(ST_GeomFromText("Point(${latitude} ${longitude})",4326),"${faker.random.words(
                3,
            )}")`,
        )
        if (i % 500 === 0) {
            await getConnection().query(
                query + values.join(',\n') + ';',
            )
            values = []
        }
    }
}
runQuery()
    .then(() => {
        console.log('done')
        process.exit()
    })
    .catch(err => {
        console.error(err.message)
        process.exit()
    })
