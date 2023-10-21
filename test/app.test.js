"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_use_1 = __importDefault(require("../src/app.use"));
describe('Express app', () => {
    describe('Routing', () => {
        it('should return `Hello world` when GET index', async () => {
            const response = await (0, supertest_1.default)(app_use_1.default).get('/');
            expect(response.statusCode).toEqual(200);
            expect(response.body.msg).toEqual('Hello World');
        });
        it('should return `NOT FOUND` when GET a not found route', async () => {
            const response = await (0, supertest_1.default)(app_use_1.default).get('/random-page');
            expect(response.statusCode).toEqual(404);
            expect(response.body.error).toEqual('NOT FOUND');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFrQztBQUVsQyw2REFBaUM7QUFFakMsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDM0IsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDdkIsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzFELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSxtQkFBUyxFQUFDLGlCQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHNEQUFzRCxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ3BFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSxtQkFBUyxFQUFDLGlCQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFMUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXBlcnRlc3QgZnJvbSAnc3VwZXJ0ZXN0JztcblxuaW1wb3J0IGFwcCBmcm9tICcuLi9zcmMvYXBwLnVzZSc7XG5cbmRlc2NyaWJlKCdFeHByZXNzIGFwcCcsICgpID0+IHtcbiAgZGVzY3JpYmUoJ1JvdXRpbmcnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gYEhlbGxvIHdvcmxkYCB3aGVuIEdFVCBpbmRleCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3VwZXJ0ZXN0KGFwcCkuZ2V0KCcvJyk7XG5cbiAgICAgIGV4cGVjdChyZXNwb25zZS5zdGF0dXNDb2RlKS50b0VxdWFsKDIwMCk7XG4gICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5tc2cpLnRvRXF1YWwoJ0hlbGxvIFdvcmxkJyk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBgTk9UIEZPVU5EYCB3aGVuIEdFVCBhIG5vdCBmb3VuZCByb3V0ZScsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3VwZXJ0ZXN0KGFwcCkuZ2V0KCcvcmFuZG9tLXBhZ2UnKTtcblxuICAgICAgZXhwZWN0KHJlc3BvbnNlLnN0YXR1c0NvZGUpLnRvRXF1YWwoNDA0KTtcbiAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LmVycm9yKS50b0VxdWFsKCdOT1QgRk9VTkQnKTtcbiAgICB9KTtcbiAgfSk7XG59KTsiXX0=