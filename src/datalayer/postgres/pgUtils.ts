import { prisma } from '../connections/postgresInstance'
import { Prisma } from '@prisma/client'
import db from '../connections/pgInstance'

//Prisma
export function insertRow(data: any) {
    return prisma.users.createMany({
        data: data
    })
}

export async function getUsers(): Promise<any> {
    return new Promise(async (resolve, rejeect) => {
        const result = await prisma.users.findMany();
        resolve(result)
    })
}

// Pg Promise
export async function insertRowPg(data: any) {
    try {
        const cs = new db.$config.pgp.helpers.ColumnSet(['name', 'identifier', 'address', 'descriptors'], { table: 'users2' });

        const query = db.$config.pgp.helpers.insert(data, cs);

        console.log('🚀 ~ file: pgUtils.ts:29 ~ insertRowPg ~ query', query?.length)

        await db.none(query);
    } catch (error) {
        console.log('🚀 ~ file: pgUtils.ts:38 ~ insertRowPg ~ error', error)
        throw error
    }
}

export async function getUsersPg(): Promise<any> {
    return new Promise(async (resolve, reject) => {
        const result = await db.any("select * from users2");
        resolve(result)
    })
}
