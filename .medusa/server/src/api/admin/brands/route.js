"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const create_brand_1 = require("../../../workflows/create-brand");
const POST = async (req, res) => {
    const { result } = await (0, create_brand_1.createBrandWorkflow)(req.scope)
        .run({
        input: req.validatedBody,
    });
    res.json({ brand: result });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2JyYW5kcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJRSxrRUFFd0M7QUFTakMsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUE0QyxFQUM1QyxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSxrQ0FBbUIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ3BELEdBQUcsQ0FBQztRQUNILEtBQUssRUFBRSxHQUFHLENBQUMsYUFBYTtLQUN6QixDQUFDLENBQUE7SUFFSixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7QUFDN0IsQ0FBQyxDQUFBO0FBVlksUUFBQSxJQUFJLFFBVWhCIn0=