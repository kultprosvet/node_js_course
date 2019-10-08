import {
    createConnection,
    createQueryBuilder,
    getConnection,
    MoreThan,
} from 'typeorm'
import * as faker from 'faker'
import { PointEntity } from './PointEntity'
function toRad(grad: number): number {
    return (grad / 360) * 2 * Math.PI
}
function toGrad(rad: number): number {
    return (rad / (2 * Math.PI)) * 360
}
async function runQuery() {
    await createConnection()
    const R = 6371
    const dist = 400

    const latitude = 48.4622135
    const longitude = 34.8602749

    const deltaLat = toGrad(dist / R)

    const deltaLon = toGrad(
        dist / (R * Math.cos(toRad(latitude))),
    )
    //prettier-ignore
    const polygon = `POLYGON((
     ${latitude - deltaLat} ${longitude - deltaLon},
     ${latitude - deltaLat} ${longitude + deltaLon},
     ${latitude + deltaLat} ${longitude + deltaLon},
     ${latitude + deltaLat} ${longitude - deltaLon},
     ${latitude - deltaLat} ${longitude - deltaLon}
    ))`

    let res = await createQueryBuilder(PointEntity)
        .select(
            `ST_Distance(location, ST_SRID(Point(${latitude},${longitude}),4326))/1000 as distance`,
        )
        .where(
            `ST_CONTAINS(ST_GEOMFROMTEXT("${polygon}",4326),location)`,
        )
        .having(`distance < ${dist * 1000}`)
        .orderBy('distance', 'ASC')
        .getRawMany()

    console.log(res)
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
