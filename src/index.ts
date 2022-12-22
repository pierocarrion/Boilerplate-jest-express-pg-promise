import express from 'express';
import { dataGenerator } from './utils/fakeData';
import {insertRow, getUsers, insertRowPg, getUsersPg}  from './datalayer/postgres/pgUtils'
import { Prisma } from '@prisma/client'
import './../benchmarking/index.benchmarking'
const app = express() 

const mockData = dataGenerator(10000);

app.get('/prisma', async (req, res) => {
    await insertRow(mockData)
    const result = await getUsers();

    return res.json({ result });
})

app.get('/pgpromise', async (req, res) => {
    await insertRowPg(mockData);
    const result= await getUsersPg();

    return res.json({ result });
})

app.listen(3000, 'localhost', () => {
    console.log('Listening')
})