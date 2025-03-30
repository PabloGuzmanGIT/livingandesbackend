"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@medusajs/framework/http");
const validators_1 = require("./admin/brands/validators");
exports.default = (0, http_1.defineMiddlewares)({
    routes: [
        {
            matcher: "/admin/brands",
            method: "POST",
            middlewares: [
                (0, http_1.validateAndTransformBody)(validators_1.PostAdminCreateBrand),
            ],
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBR21DO0FBQ2pDLDBEQUFnRTtBQUVoRSxrQkFBZSxJQUFBLHdCQUFpQixFQUFDO0lBQy9CLE1BQU0sRUFBRTtRQUNOO1lBQ0UsT0FBTyxFQUFFLGVBQWU7WUFDeEIsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUU7Z0JBQ1gsSUFBQSwrQkFBd0IsRUFBQyxpQ0FBb0IsQ0FBQzthQUMvQztTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUEifQ==