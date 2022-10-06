import { CreateProductDto } from "./dto/create-product.dto";
export declare class ProductService {
    private products;
    getAll(): any[];
    getById(id: number): any;
    create(productDto: CreateProductDto): void;
}
