import { Context } from "../src/app/api/route";

export const resolvers = {
    Query: {
        properties: async (_parent, args: any, context: Context) => {
             const {
                category,
                minPrice,
                maxPrice,
                bedroom,
                minArea,
                maxArea
            } = args;
            const filters: any = {};
            if (category) filters.category = category;
            if (minPrice) filters.price = { ...filters.price, gte: minPrice };
            if (maxPrice) filters.price = { ...filters.price, lte: maxPrice };
            if (bedroom) filters.bedroom = { ...filters.bedroom, gte: bedroom };
            if (minArea) filters.area = { ...filters.area, gte: minArea };
            if (maxArea) filters.area = { ...filters.area, lte: maxArea };


            return await context.prisma.property.findMany({
                where: filters
            })
        }
    }
}