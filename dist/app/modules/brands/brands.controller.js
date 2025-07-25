"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandsController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const brands_service_1 = require("./brands.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const s3_1 = require("../../utils/s3");
const createbrands = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.file) {
        req.body.image = yield (0, s3_1.uploadToS3)({
            file: req.file,
            fileName: `images/brand/logo/${Math.floor(100000 + Math.random() * 900000)}`,
        });
    }
    const result = yield brands_service_1.brandsService.createbrands(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Brand created successfully',
        data: result,
    });
}));
const getAllbrands = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield brands_service_1.brandsService.getAllbrands(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'All brands fetched successfully',
        data: result,
    });
}));
const getbrandsById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield brands_service_1.brandsService.getbrandsById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Brand fetched successfully',
        data: result,
    });
}));
const getHomeShow = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield brands_service_1.brandsService.getHomeShow();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Brands fetched successfully',
        data: result,
    });
}));
const updatebrands = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (req.file) {
        req.body.image = yield (0, s3_1.uploadToS3)({
            file: req.file,
            fileName: `images/brand/logo/${Math.floor(100000 + Math.random() * 900000)}`,
        });
    }
    const result = yield brands_service_1.brandsService.updatebrands(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Brand updated successfully',
        data: result,
    });
}));
const deletebrands = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield brands_service_1.brandsService.deletebrands(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Brand deleted successfully',
        data: null,
    });
}));
exports.brandsController = {
    createbrands,
    getAllbrands,
    getbrandsById,
    updatebrands,
    deletebrands,
    getHomeShow,
};
