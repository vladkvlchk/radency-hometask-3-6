import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly ProductService;
    constructor(ProductService: ProductService);
    getAll(): string;
    getOne(id: string): string;
    create(createProductDto: CreateProductDto): string;
    remove(id: string): string;
    update(updateProductDto: UpdateProductDto, id: string): string;
}
