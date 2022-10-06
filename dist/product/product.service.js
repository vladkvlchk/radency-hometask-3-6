"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
let ProductService = class ProductService {
    constructor() {
        this.products = [];
    }
    getAll() {
        return this.products;
    }
    getById(id) {
        return this.products.find(p => p.id === id);
    }
    create(productDto) {
        this.products.push(Object.assign(Object.assign({}, productDto), { id: Date.now().toString() }));
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map