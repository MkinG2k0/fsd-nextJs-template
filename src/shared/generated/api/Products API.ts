import { api } from 'core'

export const addTagTypes = ['Products API'] as const
const injectedRtkApi = api
	.enhanceEndpoints({
		addTagTypes,
	})
	.injectEndpoints({
		endpoints: (build) => ({
			productsControllerCreate: build.mutation<
				ProductsControllerCreate_res,
				ProductsControllerCreate_arg
			>({
				query: (queryArg) => ({
					url: '/products/create',
					method: 'POST',
					body: queryArg.createProductDto,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerFindAll: build.query<
				ProductsControllerFindAll_res,
				ProductsControllerFindAll_arg
			>({
				query: (queryArg) => ({
					url: '/products',
					params: {
						take: queryArg.take,
						skip: queryArg.skip,
						sort: queryArg.sort,
					},
				}),
				providesTags: ['Products API'],
			}),
			productsControllerBarcode: build.query<
				ProductsControllerBarcode_res,
				ProductsControllerBarcode_arg
			>({
				query: () => ({ url: '/products/barcode' }),
				providesTags: ['Products API'],
			}),
			productsControllerFindOne: build.query<
				ProductsControllerFindOne_res,
				ProductsControllerFindOne_arg
			>({
				query: (queryArg) => ({ url: `/products/find/${queryArg.id}` }),
				providesTags: ['Products API'],
			}),
			productsControllerGetPrice: build.mutation<
				ProductsControllerGetPrice_res,
				ProductsControllerGetPrice_arg
			>({
				query: (queryArg) => ({
					url: `/products/total/${queryArg.id}`,
					method: 'POST',
					body: queryArg.getPriceDto,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerUpdate: build.mutation<
				ProductsControllerUpdate_res,
				ProductsControllerUpdate_arg
			>({
				query: (queryArg) => ({
					url: `/products/${queryArg.id}`,
					method: 'PUT',
					body: queryArg.updateProductDto,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerRemove: build.mutation<
				ProductsControllerRemove_res,
				ProductsControllerRemove_arg
			>({
				query: (queryArg) => ({
					url: `/products/${queryArg.id}`,
					method: 'DELETE',
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerSearchByBarcode: build.query<
				ProductsControllerSearchByBarcode_res,
				ProductsControllerSearchByBarcode_arg
			>({
				query: (queryArg) => ({
					url: '/products/search',
					params: {
						name: queryArg.name,
						barcode: queryArg.barcode,
						take: queryArg.take,
						skip: queryArg.skip,
						sort: queryArg.sort,
					},
				}),
				providesTags: ['Products API'],
			}),
			productsControllerGetUnitType: build.query<
				ProductsControllerGetUnitType_res,
				ProductsControllerGetUnitType_arg
			>({
				query: () => ({ url: '/products/unit-types' }),
				providesTags: ['Products API'],
			}),
			productsControllerCreateCustomField: build.mutation<
				ProductsControllerCreateCustomField_res,
				ProductsControllerCreateCustomField_arg
			>({
				query: (queryArg) => ({
					url: `/products/field/${queryArg.id}`,
					method: 'POST',
					body: queryArg.createCustomFieldDto,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerComment: build.mutation<
				ProductsControllerComment_res,
				ProductsControllerComment_arg
			>({
				query: (queryArg) => ({
					url: `/products/comment/${queryArg.id}`,
					method: 'PATCH',
					body: queryArg.addCommentDto,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerExcel: build.mutation<
				ProductsControllerExcel_res,
				ProductsControllerExcel_arg
			>({
				query: (queryArg) => ({
					url: '/products/excel',
					method: 'POST',
					body: queryArg.body,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerImport: build.mutation<
				ProductsControllerImport_res,
				ProductsControllerImport_arg
			>({
				query: (queryArg) => ({
					url: '/products/import',
					method: 'POST',
					body: queryArg.body,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerManualImport: build.mutation<
				ProductsControllerManualImport_res,
				ProductsControllerManualImport_arg
			>({
				query: (queryArg) => ({
					url: '/products/importman',
					method: 'POST',
					body: queryArg.body,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerBulkUpdate: build.mutation<
				ProductsControllerBulkUpdate_res,
				ProductsControllerBulkUpdate_arg
			>({
				query: (queryArg) => ({
					url: '/products/bulkupdate',
					method: 'PUT',
					body: queryArg.bulkUpdateDto,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerUpdateQuantity: build.mutation<
				ProductsControllerUpdateQuantity_res,
				ProductsControllerUpdateQuantity_arg
			>({
				query: (queryArg) => ({
					url: `/products/quantity/${queryArg.id}`,
					method: 'PATCH',
					body: queryArg.addQuantityDto,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerCopyProduct: build.mutation<
				ProductsControllerCopyProduct_res,
				ProductsControllerCopyProduct_arg
			>({
				query: (queryArg) => ({
					url: `/products/copy/${queryArg.id}`,
					method: 'POST',
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerAddDiscount: build.mutation<
				ProductsControllerAddDiscount_res,
				ProductsControllerAddDiscount_arg
			>({
				query: (queryArg) => ({
					url: `/products/discount/${queryArg.id}`,
					method: 'PATCH',
					body: queryArg.discountDto,
				}),
				invalidatesTags: ['Products API'],
			}),
			productsControllerCountRetailPrice: build.mutation<
				ProductsControllerCountRetailPrice_res,
				ProductsControllerCountRetailPrice_arg
			>({
				query: (queryArg) => ({
					url: `/products/retailprice/${queryArg.id}`,
					method: 'PATCH',
					body: queryArg.countRetailPriceDto,
				}),
				invalidatesTags: ['Products API'],
			}),
		}),
		overrideExisting: false,
	})
export { injectedRtkApi as genApi }
export type ProductsControllerCreate_res = /** status 201  */ IResponseProduct
export type ProductsControllerCreate_arg = {
	createProductDto: CreateProductDto
}
export type ProductsControllerFindAll_res =
	/** status 200  */ IResponseProductArray
export type ProductsControllerFindAll_arg = {
	take?: number
	skip?: number
	sort?: string
}
export type ProductsControllerBarcode_res = /** status 200  */ string
export type ProductsControllerBarcode_arg = void
export type ProductsControllerFindOne_res = /** status 200  */ IResponseProduct
export type ProductsControllerFindOne_arg = {
	id: string
}
export type ProductsControllerGetPrice_res = /** status 201  */ IResponseProduct
export type ProductsControllerGetPrice_arg = {
	id: string
	getPriceDto: GetPriceDto
}
export type ProductsControllerUpdate_res = /** status 200  */ IResponseProduct
export type ProductsControllerUpdate_arg = {
	id: string
	updateProductDto: UpdateProductDto
}
export type ProductsControllerRemove_res = /** status 200  */ IResponseProduct
export type ProductsControllerRemove_arg = {
	id: string
}
export type ProductsControllerSearchByBarcode_res =
	/** status 200  */ IResponseProductArray
export type ProductsControllerSearchByBarcode_arg = {
	name?: string
	barcode?: string
	take?: number
	skip?: number
	sort?: string
}
export type ProductsControllerGetUnitType_res =
	/** status 200  */ IResponseUnitTypes[]
export type ProductsControllerGetUnitType_arg = void
export type ProductsControllerCreateCustomField_res =
	/** status 201  */ IResponseProduct
export type ProductsControllerCreateCustomField_arg = {
	id: string
	createCustomFieldDto: CreateCustomFieldDto
}
export type ProductsControllerComment_res = /** status 200  */ IResponseProduct
export type ProductsControllerComment_arg = {
	id: string
	addCommentDto: AddCommentDto
}
export type ProductsControllerExcel_res = /** status 201  */ undefined
export type ProductsControllerExcel_arg = {
	body: {
		file?: Blob
	}
}
export type ProductsControllerImport_res = /** status 201  */ undefined
export type ProductsControllerImport_arg = {
	body: {
		file?: Blob
	}
}
export type ProductsControllerManualImport_res = /** status 201  */ undefined
export type ProductsControllerManualImport_arg = {
	body: {
		file?: Blob
	}
}
export type ProductsControllerBulkUpdate_res =
	/** status 200  */ IResponseProduct
export type ProductsControllerBulkUpdate_arg = {
	bulkUpdateDto: BulkUpdateDto
}
export type ProductsControllerUpdateQuantity_res =
	/** status 201  */ IResponseProduct
export type ProductsControllerUpdateQuantity_arg = {
	id: string
	addQuantityDto: AddQuantityDto
}
export type ProductsControllerCopyProduct_res =
	/** status 201  */ IResponseProduct
export type ProductsControllerCopyProduct_arg = {
	id: string
}
export type ProductsControllerAddDiscount_res =
	/** status 200  */ IResponseProduct
export type ProductsControllerAddDiscount_arg = {
	id: string
	discountDto: DiscountDto
}
export type ProductsControllerCountRetailPrice_res =
	/** status 200  */ IResponseProduct
export type ProductsControllerCountRetailPrice_arg = {
	id: string
	countRetailPriceDto: CountRetailPriceDto
}
export type BaseProduct = {
	name: string
	slug: string
	description: string
	type_id: number
	shop_id: number
	sale_price: number
	min_price: number
	max_price: number
	sku: string
	quantity: number
	in_stock: boolean
	is_taxable: boolean
	shipping_class_id: number
	status: string
	product_type: string
	unit: string
	height: string
	width: string
	length: string
	image: string
	video: string
	gallery: string
	deleted_at: string
	created_at: string
	updated_at: string
	author_id: number
	manufacturer_id: number
	is_digital: boolean
	is_external: boolean
	comment: string
	external_product_url: number
	external_product_button_text: number
	ms_externalCode: number
	barcode: string
	price: number
	category_product: object
}
export type IResponseProduct = {
	data: BaseProduct
	metadata?: object
	status: number
	message?: string
}
export type IResponseUnauthorized = {
	statusCode: number
	message: string
}
export type CreateProductDto = {
	price: number
	name: string
	category_id: number
}
export type IResponseProductArray = {
	data: BaseProduct[]
	metadata?: object
	status: number
	message?: string
}
export type GetPriceDto = {
	quantity: number
}
export type UpdateProductDto = {
	name?: string
	slug?: string
	unit?: string
	barcode?: string
	price?: number
	quantity?: number
}
export type UnitTypes = {
	id: string
	name: string
}
export type IResponseUnitTypes = {
	data: UnitTypes
	metadata?: object
	status: number
	message?: string
}
export type CreateCustomFieldDto = {
	name: string
	slug?: string
}
export type AddCommentDto = {
	comment: string
}
export type ProductWithIddto = {
	name?: string
	slug?: string
	unit?: string
	barcode?: string
	price?: number
	quantity?: number
	id: string
}
export type BulkUpdateDto = {
	products: ProductWithIddto[]
}
export type AddQuantityDto = {
	quantity: number
}
export type DiscountDto = {
	discount: number
}
export type CountRetailPriceDto = {
	purchase_price: number
}
export const {
	useProductsControllerCreateMutation,
	useProductsControllerFindAllQuery,
	useProductsControllerBarcodeQuery,
	useProductsControllerFindOneQuery,
	useProductsControllerGetPriceMutation,
	useProductsControllerUpdateMutation,
	useProductsControllerRemoveMutation,
	useProductsControllerSearchByBarcodeQuery,
	useProductsControllerGetUnitTypeQuery,
	useProductsControllerCreateCustomFieldMutation,
	useProductsControllerCommentMutation,
	useProductsControllerExcelMutation,
	useProductsControllerImportMutation,
	useProductsControllerManualImportMutation,
	useProductsControllerBulkUpdateMutation,
	useProductsControllerUpdateQuantityMutation,
	useProductsControllerCopyProductMutation,
	useProductsControllerAddDiscountMutation,
	useProductsControllerCountRetailPriceMutation,
} = injectedRtkApi
