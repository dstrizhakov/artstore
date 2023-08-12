export interface IResponce {
  body: IResults;
  statusCode: number;
}

export interface IResults {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: IProduct[];
}

export interface IProduct {
  id: string;
  version: number;
  versionModifiedAt: string;
  lastMessageSequenceNumber: number;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: ILastModifiedBy;
  createdBy: ICreatedBy;
  productType: ITypeId;
  masterData: IMasterData;
  key: string;
  priceMode: string;
  lastVariantId: number;
  taxCategory?: ITypeId;
}

export interface ILastModifiedBy {
  isPlatformClient: boolean;
  user?: ITypeId;
}

export interface ICreatedBy {
  isPlatformClient: boolean;
  user: ITypeId;
}

export interface IMasterData {
  current: ICurrent;
  staged: IStaged;
  published: boolean;
  hasStagedChanges: boolean;
}

export interface ICurrent {
  name: ITranslates;
  description: ITranslates;
  categories: ITypeId[];
  categoryOrderHints: ICategoryOrderHints;
  slug: ITranslates;
  metaTitle: ITranslates;
  metaDescription: ITranslates;
  masterVariant: IMasterVariant;
  variants: string[];
  searchKeywords: ISearchKeywords;
}

export interface ICategoryOrderHints {}

export interface ITranslates {
  'en-US': string;
}

export interface IMasterVariant {
  id: number;
  prices: string[];
  images: IImage[];
  attributes: IAttribute[];
  assets: string[];
  sku?: string;
  key?: string;
  availability?: IAvailability;
}

export interface IImage {
  url: string;
  dimensions: IDimensions;
  label?: string;
}

export interface IDimensions {
  w: number;
  h: number;
}

export interface IAttribute {
  name: string;
  value: string;
}

export interface IAvailability {
  isOnStock: boolean;
  availableQuantity: number;
  version: number;
  id: string;
}

export interface ISearchKeywords {
  'en-US'?: IEnUs[];
}

export interface IEnUs {
  text: string;
}

export interface IStaged {
  name: ITranslates;
  description: ITranslates;
  categories: ITypeId[];
  categoryOrderHints: ICategoryOrderHints;
  slug: ITranslates;
  metaTitle: ITranslates;
  metaDescription: ITranslates;
  masterVariant: IMasterVariant;
  variants: string[];
  searchKeywords: ISearchKeywords;
}

export interface IPrice {
  id: string;
  value: Value;
  country: string;
  validFrom: string;
  validUntil: string;
}

export interface Value {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

export interface ITypeId {
  typeId: string;
  id: string;
}
