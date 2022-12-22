// declare module 'nanobench' : string
// import { bench } from 'nanobench'
import { getUsers, getUsersPg, insertRow, insertRowPg } from '../src/datalayer/postgres/pgUtils';
import { dataGenerator } from '../src/utils/fakeData';
import { Prisma } from '@prisma/client'
const bench = require('nanobench')

const mockData = dataGenerator(1_000_000);

bench('pg-promise', async (b: any) =>{
    b.start();
    await insertRowPg(mockData);
    //const result= await getUsersPg();
    console.log('🚀 ~ file: index.benchmarking.ts:24 ~ bench ~ result',  mockData.length)
    b.end();
})

bench('prisma', async (b: any) =>{
    b.start();

    await insertRow(mockData);
    //const result = await getUsers();
    console.log('🚀 ~ file: index.benchmarking.ts:16 ~ bench ~ result',  mockData.length)

    b.end();
})

