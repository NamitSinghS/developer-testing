import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { parseArgs } from 'node:util';


const prisma = new PrismaClient();
const MAX_RECORDS = 100000;
const DEFAULT_RECORDS = '10000';
const options = {
    records: { type: 'string', short: "c" },
} as const;

const { values: { records = DEFAULT_RECORDS },
} = parseArgs({options})

const recordCountValue = parseInt(records);

async function main() {

    await prisma.property.deleteMany({});

    enum Category {
        RENT='RENT',
        SALE='SALE'
    }

    for(let i=0; i<recordCountValue; i++){
     
       await prisma.property.create({
          data: {
             name: faker.lorem.words({min: 2, max: 3}),
             description: faker.lorem.lines({min: 2, max: 3}),
             price: faker.number.int({ min: 1000, max: 100000 }),
             bedroom: faker.number.int({ min: 1, max: 5 }),
             area: faker.number.int({ min: 50, max: 300 }),
             category: faker.helpers.enumValue(Category),
          },
        });

   }

  }
  
  main()
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
    })
    .finally(async () => {
      await prisma.$disconnect()
    })