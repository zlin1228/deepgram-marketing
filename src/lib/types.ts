export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BooleanType: any;
  CustomData: any;
  Date: any;
  DateTime: any;
  FloatType: any;
  IntType: any;
  ItemId: any;
  JsonField: any;
  MetaTagAttributes: any;
  UploadId: any;
}

export interface IBooleanFilter {
  eq?: InputMaybe<Scalars['BooleanType']>;
}

export interface ICodeBlockModelCodeField {
  __typename?: 'CodeBlockModelCodeField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface ICodeBlockRecord extends IRecordInterface {
  __typename?: 'CodeBlockRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  code?: Maybe<ICodeBlockModelCodeField>;
  id: Scalars['ItemId'];
}

export interface ICodeBlockRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ICollectionMetadata {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
}

export enum IColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow',
}

export interface IColorField {
  __typename?: 'ColorField';
  alpha: Scalars['IntType'];
  blue: Scalars['IntType'];
  cssRgb: Scalars['String'];
  green: Scalars['IntType'];
  hex: Scalars['String'];
  red: Scalars['IntType'];
}

export interface IComparisonTableCompanyRecord extends IRecordInterface {
  __typename?: 'ComparisonTableCompanyRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  company?: Maybe<IEntityCompanyRecord>;
  companyData?: Maybe<Scalars['String']>;
  companyIcon?: Maybe<IFileField>;
  id: Scalars['ItemId'];
}

export interface IComparisonTableCompanyRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComparisonTableCompanyRecordCompanyDataArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IComparisonTableSectionRecord extends IRecordInterface {
  __typename?: 'ComparisonTableSectionRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  sectionTable?: Maybe<Scalars['JsonField']>;
  sectionTitle?: Maybe<Scalars['String']>;
}

export interface IComparisonTableSectionRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentAccordionModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentAccordionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentAccordionModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  accordion?: InputMaybe<ILinksFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
}

export enum IComponentAccordionModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentAccordionRecord extends IRecordInterface {
  __typename?: 'ComponentAccordionRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  accordion: Array<IMenuAccordionItemRecord>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
}

export interface IComponentAccordionRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentAnnouncementBarModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentAnnouncementBarModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentAnnouncementBarModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  callToAction?: InputMaybe<ILinkFilter>;
  heading?: InputMaybe<IStructuredTextFilter>;
  icon?: InputMaybe<IFileFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
}

export interface IComponentAnnouncementBarModelHeadingField {
  __typename?: 'ComponentAnnouncementBarModelHeadingField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export enum IComponentAnnouncementBarModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentAnnouncementBarRecord extends IRecordInterface {
  __typename?: 'ComponentAnnouncementBarRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  callToAction?: Maybe<IComponentCallToActionRecord>;
  heading?: Maybe<IComponentAnnouncementBarModelHeadingField>;
  icon?: Maybe<IFileField>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
}

export interface IComponentAnnouncementBarRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export type IComponentBentoBoxModelCardsField =
  | IComponentBentoSplitContentRecord
  | IComponentBentoStackedImageRecord
  | IComponentBentoTrustBarRecord;

export interface IComponentBentoBoxModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentBentoBoxModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentBentoBoxModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  cards?: InputMaybe<ILinksFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
}

export enum IComponentBentoBoxModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentBentoBoxRecord extends IRecordInterface {
  __typename?: 'ComponentBentoBoxRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  cards: Array<IComponentBentoBoxModelCardsField>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
}

export interface IComponentBentoBoxRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentBentoSplitContentModelContentField {
  __typename?: 'ComponentBentoSplitContentModelContentField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IComponentBentoSplitContentModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentBentoSplitContentModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentBentoSplitContentModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  button?: InputMaybe<ILinkFilter>;
  content?: InputMaybe<IStructuredTextFilter>;
  eyebrow?: InputMaybe<IStringFilter>;
  eyebrowIcon?: InputMaybe<IFileFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  reference?: InputMaybe<ILinkFilter>;
}

export enum IComponentBentoSplitContentModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentBentoSplitContentRecord extends IRecordInterface {
  __typename?: 'ComponentBentoSplitContentRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  button?: Maybe<IComponentCallToActionRecord>;
  content?: Maybe<IComponentBentoSplitContentModelContentField>;
  eyebrow?: Maybe<Scalars['String']>;
  eyebrowIcon?: Maybe<IFileField>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  reference?: Maybe<IComponentImageRecord>;
}

export interface IComponentBentoSplitContentRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentBentoStackedImageModelContentField {
  __typename?: 'ComponentBentoStackedImageModelContentField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IComponentBentoStackedImageModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentBentoStackedImageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentBentoStackedImageModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  button?: InputMaybe<ILinkFilter>;
  content?: InputMaybe<IStructuredTextFilter>;
  eyebrow?: InputMaybe<IStringFilter>;
  eyebrowIcon?: InputMaybe<IFileFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  reference?: InputMaybe<ILinkFilter>;
  topAsset?: InputMaybe<IBooleanFilter>;
}

export enum IComponentBentoStackedImageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  TopAssetAsc = 'topAsset_ASC',
  TopAssetDesc = 'topAsset_DESC',
}

export interface IComponentBentoStackedImageRecord extends IRecordInterface {
  __typename?: 'ComponentBentoStackedImageRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  button?: Maybe<IComponentCallToActionRecord>;
  content?: Maybe<IComponentBentoStackedImageModelContentField>;
  eyebrow?: Maybe<Scalars['String']>;
  eyebrowIcon?: Maybe<IFileField>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  reference?: Maybe<IComponentImageRecord>;
  topAsset?: Maybe<Scalars['BooleanType']>;
}

export interface IComponentBentoStackedImageRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentBentoTrustBarModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentBentoTrustBarModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentBentoTrustBarModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  bottomLogos?: InputMaybe<ILinksFilter>;
  button?: InputMaybe<ILinkFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  topLogos?: InputMaybe<ILinksFilter>;
}

export enum IComponentBentoTrustBarModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentBentoTrustBarRecord extends IRecordInterface {
  __typename?: 'ComponentBentoTrustBarRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  bottomLogos: Array<IEntityCompanyRecord>;
  button?: Maybe<IComponentCallToActionRecord>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  topLogos: Array<IEntityCompanyRecord>;
}

export interface IComponentBentoTrustBarRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentCallToActionModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentCallToActionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentCallToActionModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  buttonType?: InputMaybe<IStringFilter>;
  color?: InputMaybe<IStringFilter>;
  endIcon?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  label?: InputMaybe<IStringFilter>;
  link?: InputMaybe<IStringFilter>;
  openInNewWindow?: InputMaybe<IBooleanFilter>;
  popup?: InputMaybe<ILinkFilter>;
  startIcon?: InputMaybe<IStringFilter>;
}

export enum IComponentCallToActionModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ButtonTypeAsc = 'buttonType_ASC',
  ButtonTypeDesc = 'buttonType_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  EndIconAsc = 'endIcon_ASC',
  EndIconDesc = 'endIcon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  OpenInNewWindowAsc = 'openInNewWindow_ASC',
  OpenInNewWindowDesc = 'openInNewWindow_DESC',
  StartIconAsc = 'startIcon_ASC',
  StartIconDesc = 'startIcon_DESC',
}

export type IComponentCallToActionModelPopupField = IComponentFormRecord | IComponentVideoRecord;

export interface IComponentCallToActionRecord extends IRecordInterface {
  __typename?: 'ComponentCallToActionRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  buttonType?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  endIcon?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  openInNewWindow?: Maybe<Scalars['BooleanType']>;
  popup?: Maybe<IComponentCallToActionModelPopupField>;
  startIcon?: Maybe<Scalars['String']>;
}

export interface IComponentCallToActionRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentCardDeckAddonModelBodyField {
  __typename?: 'ComponentCardDeckAddonModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IComponentCardDeckAddonModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentCardDeckAddonModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentCardDeckAddonModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  icon?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
}

export enum IComponentCardDeckAddonModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentCardDeckAddonRecord extends IRecordInterface {
  __typename?: 'ComponentCardDeckAddonRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<IComponentCardDeckAddonModelBodyField>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
}

export interface IComponentCardDeckAddonRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export type IComponentCardDeckModelCardField =
  | IComponentCardDeckRecord
  | IComponentCardRecord
  | ITemplateBlogRecord
  | ITemplateCaseStudyRecord
  | ITemplatePodcastRecord;

export interface IComponentCardDeckModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentCardDeckModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentCardDeckModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  addOns?: InputMaybe<ILinksFilter>;
  card?: InputMaybe<ILinksFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  optionalHeading?: InputMaybe<ILinkFilter>;
  variant?: InputMaybe<IStringFilter>;
}

export enum IComponentCardDeckModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface IComponentCardDeckRecord extends IRecordInterface {
  __typename?: 'ComponentCardDeckRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  addOns: Array<IComponentCardDeckAddonRecord>;
  card: Array<IComponentCardDeckModelCardField>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  optionalHeading?: Maybe<IComponentHeadingRecord>;
  variant?: Maybe<Scalars['String']>;
}

export interface IComponentCardDeckRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentCardModelBodyField {
  __typename?: 'ComponentCardModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<IMenuItemRecord>;
  value: Scalars['JsonField'];
}

export interface IComponentCardModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentCardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentCardModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  badge?: InputMaybe<IStringFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  callToAction?: InputMaybe<ILinkFilter>;
  cardIcon?: InputMaybe<IStringFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  image?: InputMaybe<ILinkFilter>;
  internalName?: InputMaybe<IStringFilter>;
  noHoverEffect?: InputMaybe<IBooleanFilter>;
  variant?: InputMaybe<IStringFilter>;
}

export enum IComponentCardModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BadgeAsc = 'badge_ASC',
  BadgeDesc = 'badge_DESC',
  CardIconAsc = 'cardIcon_ASC',
  CardIconDesc = 'cardIcon_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NoHoverEffectAsc = 'noHoverEffect_ASC',
  NoHoverEffectDesc = 'noHoverEffect_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface IComponentCardRecord extends IRecordInterface {
  __typename?: 'ComponentCardRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  badge?: Maybe<Scalars['String']>;
  body?: Maybe<IComponentCardModelBodyField>;
  callToAction?: Maybe<IComponentCallToActionRecord>;
  cardIcon?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<IComponentImageRecord>;
  internalName?: Maybe<Scalars['String']>;
  noHoverEffect?: Maybe<Scalars['BooleanType']>;
  variant?: Maybe<Scalars['String']>;
}

export interface IComponentCardRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentCodeTableModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentCodeTableModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentCodeTableModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  heading?: InputMaybe<ILinkFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
}

export enum IComponentCodeTableModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentCodeTableRecord extends IRecordInterface {
  __typename?: 'ComponentCodeTableRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  codeSnippet: Array<ICodeBlockRecord>;
  heading?: Maybe<IComponentHeadingRecord>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
}

export interface IComponentCodeTableRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentComparisonTableModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentComparisonTableModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentComparisonTableModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  tableTitle?: InputMaybe<IStringFilter>;
}

export enum IComponentComparisonTableModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  TableTitleAsc = 'tableTitle_ASC',
  TableTitleDesc = 'tableTitle_DESC',
}

export interface IComponentComparisonTableRecord extends IRecordInterface {
  __typename?: 'ComponentComparisonTableRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  tableComparisons: Array<IComparisonTableCompanyRecord>;
  tableSections: Array<IComparisonTableSectionRecord>;
  tableTitle?: Maybe<Scalars['String']>;
}

export interface IComponentComparisonTableRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentConversionPanelModelBodyField {
  __typename?: 'ComponentConversionPanelModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IComponentConversionPanelModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentConversionPanelModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentConversionPanelModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  callToActions?: InputMaybe<ILinksFilter>;
  desktopHeadingSize?: InputMaybe<IStringFilter>;
  form?: InputMaybe<ILinkFilter>;
  hasSocial?: InputMaybe<IBooleanFilter>;
  heading?: InputMaybe<IStringFilter>;
  headingType?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  isContained?: InputMaybe<IBooleanFilter>;
  isGrayBorder?: InputMaybe<IBooleanFilter>;
  mobileHeadingSize?: InputMaybe<IStringFilter>;
  tabletHeadingSize?: InputMaybe<IStringFilter>;
}

export enum IComponentConversionPanelModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DesktopHeadingSizeAsc = 'desktopHeadingSize_ASC',
  DesktopHeadingSizeDesc = 'desktopHeadingSize_DESC',
  HasSocialAsc = 'hasSocial_ASC',
  HasSocialDesc = 'hasSocial_DESC',
  HeadingTypeAsc = 'headingType_ASC',
  HeadingTypeDesc = 'headingType_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsContainedAsc = 'isContained_ASC',
  IsContainedDesc = 'isContained_DESC',
  IsGrayBorderAsc = 'isGrayBorder_ASC',
  IsGrayBorderDesc = 'isGrayBorder_DESC',
  MobileHeadingSizeAsc = 'mobileHeadingSize_ASC',
  MobileHeadingSizeDesc = 'mobileHeadingSize_DESC',
  TabletHeadingSizeAsc = 'tabletHeadingSize_ASC',
  TabletHeadingSizeDesc = 'tabletHeadingSize_DESC',
}

export interface IComponentConversionPanelRecord extends IRecordInterface {
  __typename?: 'ComponentConversionPanelRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<IComponentConversionPanelModelBodyField>;
  callToActions: Array<IComponentCallToActionRecord>;
  desktopHeadingSize?: Maybe<Scalars['String']>;
  form?: Maybe<IComponentFormRecord>;
  hasSocial?: Maybe<Scalars['BooleanType']>;
  heading?: Maybe<Scalars['String']>;
  headingType?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  isContained?: Maybe<Scalars['BooleanType']>;
  isGrayBorder?: Maybe<Scalars['BooleanType']>;
  mobileHeadingSize?: Maybe<Scalars['String']>;
  tabletHeadingSize?: Maybe<Scalars['String']>;
}

export interface IComponentConversionPanelRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentFeatureListModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentFeatureListModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentFeatureListModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  audio?: InputMaybe<IFileFilter>;
  features?: InputMaybe<ILinksFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  layout?: InputMaybe<IStringFilter>;
  optionalHeading?: InputMaybe<ILinkFilter>;
}

export enum IComponentFeatureListModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
}

export interface IComponentFeatureListRecord extends IRecordInterface {
  __typename?: 'ComponentFeatureListRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  audio?: Maybe<IFileField>;
  features: Array<IMenuFeatureItemRecord>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  optionalHeading?: Maybe<IComponentHeadingRecord>;
}

export interface IComponentFeatureListRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentFooterModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentFooterModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentFooterModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  bottomFooter?: InputMaybe<ILinksFilter>;
  disclaimerText?: InputMaybe<IStringFilter>;
  form?: InputMaybe<ILinkFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  menuItem?: InputMaybe<ILinksFilter>;
  subhead?: InputMaybe<ITextFilter>;
}

export enum IComponentFooterModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DisclaimerTextAsc = 'disclaimerText_ASC',
  DisclaimerTextDesc = 'disclaimerText_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentFooterRecord extends IRecordInterface {
  __typename?: 'ComponentFooterRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  bottomFooter: Array<IMenuItemRecord>;
  disclaimerText?: Maybe<Scalars['String']>;
  form?: Maybe<IComponentFormRecord>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  menuItem: Array<IMenuItemRecord>;
  subhead?: Maybe<Scalars['String']>;
}

export interface IComponentFooterRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentFooterRecordSubheadArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentFormModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentFormModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentFormModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  formId?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  inverted?: InputMaybe<IBooleanFilter>;
  variant?: InputMaybe<IStringFilter>;
}

export enum IComponentFormModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  FormIdAsc = 'formId_ASC',
  FormIdDesc = 'formId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  InvertedAsc = 'inverted_ASC',
  InvertedDesc = 'inverted_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface IComponentFormRecord extends IRecordInterface {
  __typename?: 'ComponentFormRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  formId?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  inverted?: Maybe<Scalars['BooleanType']>;
  variant?: Maybe<Scalars['String']>;
}

export interface IComponentFormRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentHeaderModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentHeaderModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentHeaderModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  callToActions?: InputMaybe<ILinksFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  logo?: InputMaybe<IFileFilter>;
  menu?: InputMaybe<ILinksFilter>;
  showGlobalSearch?: InputMaybe<IBooleanFilter>;
}

export enum IComponentHeaderModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowGlobalSearchAsc = 'showGlobalSearch_ASC',
  ShowGlobalSearchDesc = 'showGlobalSearch_DESC',
}

export interface IComponentHeaderRecord extends IRecordInterface {
  __typename?: 'ComponentHeaderRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  callToActions: Array<IComponentCallToActionRecord>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  logo?: Maybe<IFileField>;
  menu: Array<IMenuItemRecord>;
  showGlobalSearch?: Maybe<Scalars['BooleanType']>;
}

export interface IComponentHeaderRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentHeadingModelBodyField {
  __typename?: 'ComponentHeadingModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<IMenuItemRecord>;
  value: Scalars['JsonField'];
}

export interface IComponentHeadingModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentHeadingModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentHeadingModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  animate?: InputMaybe<IBooleanFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  bodyColor?: InputMaybe<IStringFilter>;
  callToActions?: InputMaybe<ILinksFilter>;
  desktopHeadingSize?: InputMaybe<IStringFilter>;
  eyebrow?: InputMaybe<IStringFilter>;
  gradientBackgroundColor?: InputMaybe<IStringFilter>;
  heading?: InputMaybe<IStringFilter>;
  headingColor?: InputMaybe<IStringFilter>;
  headingType?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  mobileHeadingSize?: InputMaybe<IStringFilter>;
  tabletHeadingSize?: InputMaybe<IStringFilter>;
}

export enum IComponentHeadingModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AnimateAsc = 'animate_ASC',
  AnimateDesc = 'animate_DESC',
  BodyColorAsc = 'bodyColor_ASC',
  BodyColorDesc = 'bodyColor_DESC',
  DesktopHeadingSizeAsc = 'desktopHeadingSize_ASC',
  DesktopHeadingSizeDesc = 'desktopHeadingSize_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  GradientBackgroundColorAsc = 'gradientBackgroundColor_ASC',
  GradientBackgroundColorDesc = 'gradientBackgroundColor_DESC',
  HeadingColorAsc = 'headingColor_ASC',
  HeadingColorDesc = 'headingColor_DESC',
  HeadingTypeAsc = 'headingType_ASC',
  HeadingTypeDesc = 'headingType_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MobileHeadingSizeAsc = 'mobileHeadingSize_ASC',
  MobileHeadingSizeDesc = 'mobileHeadingSize_DESC',
  TabletHeadingSizeAsc = 'tabletHeadingSize_ASC',
  TabletHeadingSizeDesc = 'tabletHeadingSize_DESC',
}

export interface IComponentHeadingRecord extends IRecordInterface {
  __typename?: 'ComponentHeadingRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  animate?: Maybe<Scalars['BooleanType']>;
  body?: Maybe<IComponentHeadingModelBodyField>;
  bodyColor?: Maybe<Scalars['String']>;
  callToActions: Array<IComponentCallToActionRecord>;
  desktopHeadingSize?: Maybe<Scalars['String']>;
  eyebrow?: Maybe<Scalars['String']>;
  gradientBackgroundColor?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  headingColor?: Maybe<Scalars['String']>;
  headingType?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  mobileHeadingSize?: Maybe<Scalars['String']>;
  tabletHeadingSize?: Maybe<Scalars['String']>;
}

export interface IComponentHeadingRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentHeroModelBodyField {
  __typename?: 'ComponentHeroModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<IComponentFormRecord>;
  value: Scalars['JsonField'];
}

export interface IComponentHeroModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentHeroModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentHeroModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  animate?: InputMaybe<IBooleanFilter>;
  announcementBar?: InputMaybe<ILinkFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  bodyColor?: InputMaybe<IStringFilter>;
  callToActions?: InputMaybe<ILinksFilter>;
  desktopHeadingSize?: InputMaybe<IStringFilter>;
  form?: InputMaybe<ILinkFilter>;
  gradientBackgroundColor?: InputMaybe<IStringFilter>;
  heading?: InputMaybe<IStringFilter>;
  headingColor?: InputMaybe<IStringFilter>;
  headingIcons?: InputMaybe<ILinksFilter>;
  headingType?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  isWideMedia?: InputMaybe<IBooleanFilter>;
  layout?: InputMaybe<IStringFilter>;
  mobileHeadingSize?: InputMaybe<IStringFilter>;
  references?: InputMaybe<ILinksFilter>;
  tabletHeadingSize?: InputMaybe<IStringFilter>;
  userReview?: InputMaybe<IStringFilter>;
}

export type IComponentHeroModelFormField =
  | IComponentFormRecord
  | IComponentImageRecord
  | IComponentTestimonialCardRecord
  | IComponentVideoRecord;

export enum IComponentHeroModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AnimateAsc = 'animate_ASC',
  AnimateDesc = 'animate_DESC',
  BodyColorAsc = 'bodyColor_ASC',
  BodyColorDesc = 'bodyColor_DESC',
  DesktopHeadingSizeAsc = 'desktopHeadingSize_ASC',
  DesktopHeadingSizeDesc = 'desktopHeadingSize_DESC',
  GradientBackgroundColorAsc = 'gradientBackgroundColor_ASC',
  GradientBackgroundColorDesc = 'gradientBackgroundColor_DESC',
  HeadingColorAsc = 'headingColor_ASC',
  HeadingColorDesc = 'headingColor_DESC',
  HeadingTypeAsc = 'headingType_ASC',
  HeadingTypeDesc = 'headingType_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsWideMediaAsc = 'isWideMedia_ASC',
  IsWideMediaDesc = 'isWideMedia_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  MobileHeadingSizeAsc = 'mobileHeadingSize_ASC',
  MobileHeadingSizeDesc = 'mobileHeadingSize_DESC',
  TabletHeadingSizeAsc = 'tabletHeadingSize_ASC',
  TabletHeadingSizeDesc = 'tabletHeadingSize_DESC',
  UserReviewAsc = 'userReview_ASC',
  UserReviewDesc = 'userReview_DESC',
}

export type IComponentHeroModelReferencesField = ITemplateBlogRecord | ITemplateCaseStudyRecord;

export interface IComponentHeroRecord extends IRecordInterface {
  __typename?: 'ComponentHeroRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  animate?: Maybe<Scalars['BooleanType']>;
  announcementBar?: Maybe<IComponentAnnouncementBarRecord>;
  body?: Maybe<IComponentHeroModelBodyField>;
  bodyColor?: Maybe<Scalars['String']>;
  callToActions: Array<IComponentCallToActionRecord>;
  desktopHeadingSize?: Maybe<Scalars['String']>;
  form?: Maybe<IComponentHeroModelFormField>;
  gradientBackgroundColor?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  headingColor?: Maybe<Scalars['String']>;
  headingIcons: Array<IComponentImageRecord>;
  headingType?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  isWideMedia?: Maybe<Scalars['BooleanType']>;
  layout?: Maybe<Scalars['String']>;
  mobileHeadingSize?: Maybe<Scalars['String']>;
  references: Array<IComponentHeroModelReferencesField>;
  tabletHeadingSize?: Maybe<Scalars['String']>;
  userReview?: Maybe<Scalars['String']>;
}

export interface IComponentHeroRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentImageModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentImageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentImageModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  caption?: InputMaybe<ITextFilter>;
  id?: InputMaybe<IItemIdFilter>;
  imageDesktop?: InputMaybe<IFileFilter>;
  imageMobile?: InputMaybe<IFileFilter>;
  internalName?: InputMaybe<IStringFilter>;
}

export enum IComponentImageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentImageRecord extends IRecordInterface {
  __typename?: 'ComponentImageRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  caption?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  imageDesktop?: Maybe<IFileField>;
  imageMobile?: Maybe<IFileField>;
  internalName?: Maybe<Scalars['String']>;
}

export interface IComponentImageRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentImageRecordCaptionArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentMapModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentMapModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentMapModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  isDarkMap?: InputMaybe<IBooleanFilter>;
  location?: InputMaybe<ILatLonFilter>;
}

export enum IComponentMapModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsDarkMapAsc = 'isDarkMap_ASC',
  IsDarkMapDesc = 'isDarkMap_DESC',
}

export interface IComponentMapRecord extends IRecordInterface {
  __typename?: 'ComponentMapRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  isDarkMap?: Maybe<Scalars['BooleanType']>;
  location?: Maybe<ILatLonField>;
}

export interface IComponentMapRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentPricingCardDeckModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentPricingCardDeckModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentPricingCardDeckModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  cards?: InputMaybe<ILinksFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
}

export enum IComponentPricingCardDeckModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentPricingCardDeckRecord extends IRecordInterface {
  __typename?: 'ComponentPricingCardDeckRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  cards: Array<IComponentPricingCardRecord>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
}

export interface IComponentPricingCardDeckRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentPricingCardModelAddOnsField {
  __typename?: 'ComponentPricingCardModelAddOnsField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IComponentPricingCardModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentPricingCardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentPricingCardModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  addOns?: InputMaybe<IStructuredTextFilter>;
  bestFor?: InputMaybe<IStringFilter>;
  body?: InputMaybe<ITextFilter>;
  callToAction?: InputMaybe<ILinkFilter>;
  cardColor?: InputMaybe<IStringFilter>;
  features?: InputMaybe<ILinksFilter>;
  heading?: InputMaybe<ITextFilter>;
  headingBadge?: InputMaybe<IStringFilter>;
  headingKicker?: InputMaybe<IStringFilter>;
  icon?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  isActive?: InputMaybe<IBooleanFilter>;
  models?: InputMaybe<ILinksFilter>;
  price?: InputMaybe<IStringFilter>;
  subhead?: InputMaybe<ITextFilter>;
  support?: InputMaybe<ILinksFilter>;
}

export enum IComponentPricingCardModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BestForAsc = 'bestFor_ASC',
  BestForDesc = 'bestFor_DESC',
  CardColorAsc = 'cardColor_ASC',
  CardColorDesc = 'cardColor_DESC',
  HeadingBadgeAsc = 'headingBadge_ASC',
  HeadingBadgeDesc = 'headingBadge_DESC',
  HeadingKickerAsc = 'headingKicker_ASC',
  HeadingKickerDesc = 'headingKicker_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
}

export interface IComponentPricingCardRecord extends IRecordInterface {
  __typename?: 'ComponentPricingCardRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  addOns?: Maybe<IComponentPricingCardModelAddOnsField>;
  bestFor?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  callToAction?: Maybe<IComponentCallToActionRecord>;
  cardColor?: Maybe<Scalars['String']>;
  features: Array<IMenuPricingItemRecord>;
  heading?: Maybe<Scalars['String']>;
  headingBadge?: Maybe<Scalars['String']>;
  headingKicker?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['BooleanType']>;
  models: Array<IMenuPricingItemRecord>;
  price?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  support: Array<IMenuPricingItemRecord>;
}

export interface IComponentPricingCardRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentPricingCardRecordBodyArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentPricingCardRecordHeadingArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentPricingCardRecordSubheadArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentPricingTableModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentPricingTableModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentPricingTableModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  subheading?: InputMaybe<ITextFilter>;
  tables?: InputMaybe<ILinksFilter>;
  title?: InputMaybe<IStringFilter>;
}

export enum IComponentPricingTableModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface IComponentPricingTableRecord extends IRecordInterface {
  __typename?: 'ComponentPricingTableRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  subheading?: Maybe<Scalars['String']>;
  tables: Array<ITableRecord>;
  title?: Maybe<Scalars['String']>;
}

export interface IComponentPricingTableRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentPricingTableRecordSubheadingArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentQuoteModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentQuoteModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentQuoteModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  callToAction?: InputMaybe<ILinkFilter>;
  company?: InputMaybe<ILinkFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  person?: InputMaybe<ILinkFilter>;
  quote?: InputMaybe<ITextFilter>;
  theme?: InputMaybe<IStringFilter>;
}

export enum IComponentQuoteModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
}

export interface IComponentQuoteRecord extends IRecordInterface {
  __typename?: 'ComponentQuoteRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  callToAction?: Maybe<IComponentCallToActionRecord>;
  company?: Maybe<IEntityCompanyRecord>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  person?: Maybe<IEntityPersonRecord>;
  quote?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
}

export interface IComponentQuoteRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentQuoteRecordQuoteArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentQuoteSliderModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentQuoteSliderModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentQuoteSliderModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  callToAction?: InputMaybe<ILinkFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  optionalHeading?: InputMaybe<ILinkFilter>;
  quotes?: InputMaybe<ILinksFilter>;
  singleRow?: InputMaybe<IBooleanFilter>;
}

export enum IComponentQuoteSliderModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SingleRowAsc = 'singleRow_ASC',
  SingleRowDesc = 'singleRow_DESC',
}

export interface IComponentQuoteSliderRecord extends IRecordInterface {
  __typename?: 'ComponentQuoteSliderRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  callToAction?: Maybe<IComponentCallToActionRecord>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  optionalHeading?: Maybe<IComponentHeadingRecord>;
  quotes: Array<IComponentQuoteRecord>;
  singleRow?: Maybe<Scalars['BooleanType']>;
}

export interface IComponentQuoteSliderRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentSingleInstanceModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentSingleInstanceModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentSingleInstanceModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  callToActions?: InputMaybe<ILinksFilter>;
  component?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  imageList?: InputMaybe<ILinksFilter>;
  internalName?: InputMaybe<IStringFilter>;
  json?: InputMaybe<IJsonFilter>;
  layout?: InputMaybe<IStringFilter>;
  leadershipList?: InputMaybe<ILinksFilter>;
  optionalHeading?: InputMaybe<ILinkFilter>;
}

export enum IComponentSingleInstanceModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ComponentAsc = 'component_ASC',
  ComponentDesc = 'component_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
}

export interface IComponentSingleInstanceRecord extends IRecordInterface {
  __typename?: 'ComponentSingleInstanceRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  callToActions: Array<IComponentCallToActionRecord>;
  component?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  imageList: Array<IComponentImageRecord>;
  internalName?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JsonField']>;
  layout?: Maybe<Scalars['String']>;
  leadershipList: Array<IEntityPersonRecord>;
  optionalHeading?: Maybe<IComponentHeadingRecord>;
}

export interface IComponentSingleInstanceRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentSlideboxItemModelAudioNameField {
  __typename?: 'ComponentSlideboxItemModelAudioNameField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IComponentSlideboxItemModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentSlideboxItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentSlideboxItemModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  audio?: InputMaybe<IFileFilter>;
  audioName?: InputMaybe<IStructuredTextFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  liveStreamingUrl?: InputMaybe<IStringFilter>;
  payload?: InputMaybe<IStructuredTextFilter>;
  requestUrl?: InputMaybe<IStructuredTextFilter>;
  response?: InputMaybe<IStructuredTextFilter>;
  transcript?: InputMaybe<IStructuredTextFilter>;
}

export enum IComponentSlideboxItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LiveStreamingUrlAsc = 'liveStreamingUrl_ASC',
  LiveStreamingUrlDesc = 'liveStreamingUrl_DESC',
}

export interface IComponentSlideboxItemModelPayloadField {
  __typename?: 'ComponentSlideboxItemModelPayloadField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IComponentSlideboxItemModelRequestUrlField {
  __typename?: 'ComponentSlideboxItemModelRequestUrlField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IComponentSlideboxItemModelResponseField {
  __typename?: 'ComponentSlideboxItemModelResponseField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IComponentSlideboxItemModelTranscriptField {
  __typename?: 'ComponentSlideboxItemModelTranscriptField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IComponentSlideboxItemRecord extends IRecordInterface {
  __typename?: 'ComponentSlideboxItemRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  audio?: Maybe<IFileField>;
  audioName?: Maybe<IComponentSlideboxItemModelAudioNameField>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  liveStreamingUrl?: Maybe<Scalars['String']>;
  payload?: Maybe<IComponentSlideboxItemModelPayloadField>;
  requestUrl?: Maybe<IComponentSlideboxItemModelRequestUrlField>;
  response?: Maybe<IComponentSlideboxItemModelResponseField>;
  transcript?: Maybe<IComponentSlideboxItemModelTranscriptField>;
}

export interface IComponentSlideboxItemRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentSlideboxModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentSlideboxModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentSlideboxModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  items?: InputMaybe<ILinksFilter>;
  optionalHeading?: InputMaybe<ILinkFilter>;
}

export type IComponentSlideboxModelItemsField = IComponentFeatureListRecord | IComponentSlideboxItemRecord;

export enum IComponentSlideboxModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentSlideboxRecord extends IRecordInterface {
  __typename?: 'ComponentSlideboxRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  items: Array<IComponentSlideboxModelItemsField>;
  optionalHeading?: Maybe<IComponentHeadingRecord>;
}

export interface IComponentSlideboxRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentSwitchbackModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentSwitchbackModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentSwitchbackModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  heading?: InputMaybe<ILinkFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  reference?: InputMaybe<ILinkFilter>;
  reverse?: InputMaybe<IBooleanFilter>;
}

export enum IComponentSwitchbackModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ReverseAsc = 'reverse_ASC',
  ReverseDesc = 'reverse_DESC',
}

export type IComponentSwitchbackModelReferenceField =
  | IComponentImageRecord
  | IComponentMapRecord
  | IComponentSlideboxRecord
  | IComponentVideoRecord;

export interface IComponentSwitchbackRecord extends IRecordInterface {
  __typename?: 'ComponentSwitchbackRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  heading?: Maybe<IComponentHeadingRecord>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  reference?: Maybe<IComponentSwitchbackModelReferenceField>;
  reverse?: Maybe<Scalars['BooleanType']>;
}

export interface IComponentSwitchbackRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentTestimonialCardModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentTestimonialCardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentTestimonialCardModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  quote?: InputMaybe<ILinkFilter>;
}

export enum IComponentTestimonialCardModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentTestimonialCardRecord extends IRecordInterface {
  __typename?: 'ComponentTestimonialCardRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  quote?: Maybe<IComponentQuoteRecord>;
  statistics: Array<IStatisticRecord>;
}

export interface IComponentTestimonialCardRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentTestimonialConversionPanelModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentTestimonialConversionPanelModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentTestimonialConversionPanelModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  conversionForm?: InputMaybe<ILinkFilter>;
  conversionHeading?: InputMaybe<ILinkFilter>;
  conversionQuote?: InputMaybe<ILinkFilter>;
  conversionTrustBar?: InputMaybe<ILinkFilter>;
  formBody?: InputMaybe<IStringFilter>;
  formHeading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
}

export enum IComponentTestimonialConversionPanelModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  FormBodyAsc = 'formBody_ASC',
  FormBodyDesc = 'formBody_DESC',
  FormHeadingAsc = 'formHeading_ASC',
  FormHeadingDesc = 'formHeading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IComponentTestimonialConversionPanelRecord extends IRecordInterface {
  __typename?: 'ComponentTestimonialConversionPanelRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  conversionForm?: Maybe<IComponentFormRecord>;
  conversionHeading?: Maybe<IComponentHeadingRecord>;
  conversionQuote?: Maybe<IComponentQuoteRecord>;
  conversionTrustBar?: Maybe<IComponentTrustBarRecord>;
  formBody?: Maybe<Scalars['String']>;
  formHeading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
}

export interface IComponentTestimonialConversionPanelRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentTrustBarModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentTrustBarModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentTrustBarModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  callToAction?: InputMaybe<ILinkFilter>;
  company?: InputMaybe<ILinksFilter>;
  desktopHeadingSize?: InputMaybe<IStringFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  isMarquee?: InputMaybe<IBooleanFilter>;
  logoHeight?: InputMaybe<IIntegerFilter>;
  mobileHeadingSize?: InputMaybe<IStringFilter>;
  multiTrustbar?: InputMaybe<ILinksFilter>;
  tabletHeadingSize?: InputMaybe<IStringFilter>;
}

export enum IComponentTrustBarModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DesktopHeadingSizeAsc = 'desktopHeadingSize_ASC',
  DesktopHeadingSizeDesc = 'desktopHeadingSize_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsMarqueeAsc = 'isMarquee_ASC',
  IsMarqueeDesc = 'isMarquee_DESC',
  LogoHeightAsc = 'logoHeight_ASC',
  LogoHeightDesc = 'logoHeight_DESC',
  MobileHeadingSizeAsc = 'mobileHeadingSize_ASC',
  MobileHeadingSizeDesc = 'mobileHeadingSize_DESC',
  TabletHeadingSizeAsc = 'tabletHeadingSize_ASC',
  TabletHeadingSizeDesc = 'tabletHeadingSize_DESC',
}

export interface IComponentTrustBarRecord extends IRecordInterface {
  __typename?: 'ComponentTrustBarRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  callToAction?: Maybe<IComponentCallToActionRecord>;
  company: Array<IEntityCompanyRecord>;
  desktopHeadingSize?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  isMarquee?: Maybe<Scalars['BooleanType']>;
  logoHeight?: Maybe<Scalars['IntType']>;
  mobileHeadingSize?: Maybe<Scalars['String']>;
  multiTrustbar: Array<IComponentTrustBarRecord>;
  tabletHeadingSize?: Maybe<Scalars['String']>;
}

export interface IComponentTrustBarRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IComponentVideoModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentVideoModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentVideoModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  autoPlay?: InputMaybe<IBooleanFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  showOnResourceHub?: InputMaybe<IBooleanFilter>;
  thumbnail?: InputMaybe<IFileFilter>;
  title?: InputMaybe<IStringFilter>;
  videoFile?: InputMaybe<IFileFilter>;
  videoUrl?: InputMaybe<IStringFilter>;
}

export enum IComponentVideoModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AutoPlayAsc = 'autoPlay_ASC',
  AutoPlayDesc = 'autoPlay_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowOnResourceHubAsc = 'showOnResourceHub_ASC',
  ShowOnResourceHubDesc = 'showOnResourceHub_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VideoUrlAsc = 'videoUrl_ASC',
  VideoUrlDesc = 'videoUrl_DESC',
}

export interface IComponentVideoRecord extends IRecordInterface {
  __typename?: 'ComponentVideoRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  autoPlay?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  showOnResourceHub?: Maybe<Scalars['BooleanType']>;
  thumbnail?: Maybe<IFileField>;
  title?: Maybe<Scalars['String']>;
  videoFile?: Maybe<IFileField>;
  videoUrl?: Maybe<Scalars['String']>;
}

export interface IComponentVideoRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ICreatedAtFilter {
  eq?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
}

export interface ICustomPageSeoRecord extends IRecordInterface {
  __typename?: 'CustomPageSeoRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  metaData?: Maybe<Scalars['JsonField']>;
}

export interface ICustomPageSeoRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IDateFilter {
  eq?: InputMaybe<Scalars['Date']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
}

export interface IDateTimeFilter {
  eq?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
}

export interface IEntityCategoryModelDescriptionField {
  __typename?: 'EntityCategoryModelDescriptionField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IEntityCategoryModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IEntityCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IEntityCategoryModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  categoryName?: InputMaybe<IStringFilter>;
  description?: InputMaybe<IStructuredTextFilter>;
  id?: InputMaybe<IItemIdFilter>;
  image?: InputMaybe<IFileFilter>;
  title?: InputMaybe<IStringFilter>;
}

export enum IEntityCategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CategoryNameAsc = 'categoryName_ASC',
  CategoryNameDesc = 'categoryName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface IEntityCategoryRecord extends IRecordInterface {
  __typename?: 'EntityCategoryRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  categoryName?: Maybe<Scalars['String']>;
  description?: Maybe<IEntityCategoryModelDescriptionField>;
  id: Scalars['ItemId'];
  image?: Maybe<IFileField>;
  title?: Maybe<Scalars['String']>;
}

export interface IEntityCategoryRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IEntityCompanyModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IEntityCompanyModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IEntityCompanyModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  benefits?: InputMaybe<ILinksFilter>;
  bio?: InputMaybe<ITextFilter>;
  businessNeeds?: InputMaybe<ITextFilter>;
  company?: InputMaybe<IStringFilter>;
  companyDarkLogo?: InputMaybe<ILinkFilter>;
  companyLogo?: InputMaybe<ILinkFilter>;
  dribbble?: InputMaybe<IStringFilter>;
  facebook?: InputMaybe<IStringFilter>;
  github?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  industry?: InputMaybe<ILinksFilter>;
  linkedin?: InputMaybe<IStringFilter>;
  siteUrl?: InputMaybe<IStringFilter>;
  solution?: InputMaybe<ILinksFilter>;
  twitch?: InputMaybe<IStringFilter>;
  twitter?: InputMaybe<IStringFilter>;
  youtube?: InputMaybe<IStringFilter>;
}

export enum IEntityCompanyModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  DribbbleAsc = 'dribbble_ASC',
  DribbbleDesc = 'dribbble_DESC',
  FacebookAsc = 'facebook_ASC',
  FacebookDesc = 'facebook_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkedinAsc = 'linkedin_ASC',
  LinkedinDesc = 'linkedin_DESC',
  SiteUrlAsc = 'siteUrl_ASC',
  SiteUrlDesc = 'siteUrl_DESC',
  TwitchAsc = 'twitch_ASC',
  TwitchDesc = 'twitch_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  YoutubeAsc = 'youtube_ASC',
  YoutubeDesc = 'youtube_DESC',
}

export interface IEntityCompanyRecord extends IRecordInterface {
  __typename?: 'EntityCompanyRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  benefits: Array<IMenuPricingItemRecord>;
  bio?: Maybe<Scalars['String']>;
  businessNeeds?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  companyDarkLogo?: Maybe<IComponentImageRecord>;
  companyLogo?: Maybe<IComponentImageRecord>;
  dribbble?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  industry: Array<IMenuIndustryItemRecord>;
  linkedin?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  solution: Array<IMenuItemRecord>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
}

export interface IEntityCompanyRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IEntityCompanyRecordBioArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IEntityCompanyRecordBusinessNeedsArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IEntityPersonModelBioField {
  __typename?: 'EntityPersonModelBioField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IEntityPersonModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IEntityPersonModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IEntityPersonModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  bio?: InputMaybe<IStructuredTextFilter>;
  company?: InputMaybe<ILinkFilter>;
  externalLink?: InputMaybe<IStringFilter>;
  github?: InputMaybe<IStringFilter>;
  headshot?: InputMaybe<IFileFilter>;
  id?: InputMaybe<IItemIdFilter>;
  linkedin?: InputMaybe<IStringFilter>;
  name?: InputMaybe<IStringFilter>;
  personCategory?: InputMaybe<IStringFilter>;
  role?: InputMaybe<IStringFilter>;
  slug?: InputMaybe<ISlugFilter>;
  twitch?: InputMaybe<IStringFilter>;
  twitter?: InputMaybe<IStringFilter>;
}

export enum IEntityPersonModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkedinAsc = 'linkedin_ASC',
  LinkedinDesc = 'linkedin_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PersonCategoryAsc = 'personCategory_ASC',
  PersonCategoryDesc = 'personCategory_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  TwitchAsc = 'twitch_ASC',
  TwitchDesc = 'twitch_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
}

export interface IEntityPersonRecord extends IRecordInterface {
  __typename?: 'EntityPersonRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  bio?: Maybe<IEntityPersonModelBioField>;
  company?: Maybe<IEntityCompanyRecord>;
  externalLink?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  headshot?: Maybe<IFileField>;
  id: Scalars['ItemId'];
  linkedin?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  personCategory?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
}

export interface IEntityPersonRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IEntityTagModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IEntityTagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IEntityTagModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  category?: InputMaybe<IStringFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
}

export enum IEntityTagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IEntityTagRecord extends IRecordInterface {
  __typename?: 'EntityTagRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  category?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
}

export interface IEntityTagRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export enum IFaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication',
}

export interface IFileField extends IFileFieldInterface {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<IColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<IFocalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<IResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  thumbhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<IUploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
}

export interface IFileFieldAltArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IFileFieldBlurUpThumbArgs {
  imgixParams?: InputMaybe<IImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
}

export interface IFileFieldCustomDataArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IFileFieldFocalPointArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IFileFieldResponsiveImageArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  imgixParams?: InputMaybe<IImgixParams>;
  locale?: InputMaybe<ISiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
}

export interface IFileFieldTitleArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IFileFieldUrlArgs {
  imgixParams?: InputMaybe<IImgixParams>;
}

export interface IFileFieldInterface {
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<IColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<IFocalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<IResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  thumbhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<IUploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
}

export interface IFileFieldInterfaceAltArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IFileFieldInterfaceBlurUpThumbArgs {
  imgixParams?: InputMaybe<IImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
}

export interface IFileFieldInterfaceCustomDataArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IFileFieldInterfaceFocalPointArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IFileFieldInterfaceResponsiveImageArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  imgixParams?: InputMaybe<IImgixParams>;
  locale?: InputMaybe<ISiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
}

export interface IFileFieldInterfaceTitleArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IFileFieldInterfaceUrlArgs {
  imgixParams?: InputMaybe<IImgixParams>;
}

export interface IFileFilter {
  eq?: InputMaybe<Scalars['UploadId']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  neq?: InputMaybe<Scalars['UploadId']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
}

export interface IGlobalSeoField {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<ISeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
}

export interface IHtmlTableRecord extends IRecordInterface {
  __typename?: 'HtmlTableRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  table?: Maybe<Scalars['String']>;
}

export interface IHtmlTableRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IHtmlTableRecordTableArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IImgixParams {
  ar?: InputMaybe<Scalars['String']>;
  auto?: InputMaybe<Array<IImgixParamsAuto>>;
  bg?: InputMaybe<Scalars['String']>;
  bgRemove?: InputMaybe<Scalars['BooleanType']>;
  blend?: InputMaybe<Scalars['String']>;
  blendAlign?: InputMaybe<Array<IImgixParamsBlendAlign>>;
  blendAlpha?: InputMaybe<Scalars['IntType']>;
  blendColor?: InputMaybe<Scalars['String']>;
  blendCrop?: InputMaybe<Array<IImgixParamsBlendCrop>>;
  blendFit?: InputMaybe<IImgixParamsBlendFit>;
  blendH?: InputMaybe<Scalars['FloatType']>;
  blendMode?: InputMaybe<IImgixParamsBlendMode>;
  blendPad?: InputMaybe<Scalars['IntType']>;
  blendSize?: InputMaybe<IImgixParamsBlendSize>;
  blendW?: InputMaybe<Scalars['FloatType']>;
  blendX?: InputMaybe<Scalars['IntType']>;
  blendY?: InputMaybe<Scalars['IntType']>;
  blur?: InputMaybe<Scalars['IntType']>;
  border?: InputMaybe<Scalars['String']>;
  borderBottom?: InputMaybe<Scalars['IntType']>;
  borderLeft?: InputMaybe<Scalars['IntType']>;
  borderRadius?: InputMaybe<Scalars['String']>;
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  borderRight?: InputMaybe<Scalars['IntType']>;
  borderTop?: InputMaybe<Scalars['IntType']>;
  bri?: InputMaybe<Scalars['IntType']>;
  ch?: InputMaybe<Array<IImgixParamsCh>>;
  chromasub?: InputMaybe<Scalars['IntType']>;
  colorquant?: InputMaybe<Scalars['IntType']>;
  colors?: InputMaybe<Scalars['IntType']>;
  con?: InputMaybe<Scalars['IntType']>;
  cornerRadius?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Array<IImgixParamsCrop>>;
  cs?: InputMaybe<IImgixParamsCs>;
  dl?: InputMaybe<Scalars['String']>;
  dpi?: InputMaybe<Scalars['IntType']>;
  dpr?: InputMaybe<Scalars['FloatType']>;
  duotone?: InputMaybe<Scalars['String']>;
  duotoneAlpha?: InputMaybe<Scalars['IntType']>;
  exp?: InputMaybe<Scalars['IntType']>;
  expires?: InputMaybe<Scalars['IntType']>;
  faceindex?: InputMaybe<Scalars['IntType']>;
  facepad?: InputMaybe<Scalars['FloatType']>;
  faces?: InputMaybe<Scalars['IntType']>;
  fill?: InputMaybe<IImgixParamsFill>;
  fillColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<IImgixParamsFit>;
  flip?: InputMaybe<IImgixParamsFlip>;
  fm?: InputMaybe<IImgixParamsFm>;
  fpDebug?: InputMaybe<Scalars['BooleanType']>;
  fpX?: InputMaybe<Scalars['FloatType']>;
  fpY?: InputMaybe<Scalars['FloatType']>;
  fpZ?: InputMaybe<Scalars['FloatType']>;
  fps?: InputMaybe<Scalars['IntType']>;
  frame?: InputMaybe<Scalars['String']>;
  gam?: InputMaybe<Scalars['IntType']>;
  gifQ?: InputMaybe<Scalars['IntType']>;
  gridColors?: InputMaybe<Scalars['String']>;
  gridSize?: InputMaybe<Scalars['IntType']>;
  h?: InputMaybe<Scalars['FloatType']>;
  high?: InputMaybe<Scalars['IntType']>;
  htn?: InputMaybe<Scalars['IntType']>;
  hue?: InputMaybe<Scalars['IntType']>;
  interval?: InputMaybe<Scalars['IntType']>;
  invert?: InputMaybe<Scalars['BooleanType']>;
  iptc?: InputMaybe<IImgixParamsIptc>;
  loop?: InputMaybe<Scalars['IntType']>;
  lossless?: InputMaybe<Scalars['BooleanType']>;
  mark?: InputMaybe<Scalars['String']>;
  markAlign?: InputMaybe<Array<IImgixParamsMarkAlign>>;
  markAlpha?: InputMaybe<Scalars['IntType']>;
  markBase?: InputMaybe<Scalars['String']>;
  markFit?: InputMaybe<IImgixParamsMarkFit>;
  markH?: InputMaybe<Scalars['FloatType']>;
  markPad?: InputMaybe<Scalars['IntType']>;
  markRot?: InputMaybe<Scalars['FloatType']>;
  markScale?: InputMaybe<Scalars['IntType']>;
  markTile?: InputMaybe<IImgixParamsMarkTile>;
  markW?: InputMaybe<Scalars['FloatType']>;
  markX?: InputMaybe<Scalars['IntType']>;
  markY?: InputMaybe<Scalars['IntType']>;
  mask?: InputMaybe<Scalars['String']>;
  maskBg?: InputMaybe<Scalars['String']>;
  maxH?: InputMaybe<Scalars['IntType']>;
  maxW?: InputMaybe<Scalars['IntType']>;
  minH?: InputMaybe<Scalars['IntType']>;
  minW?: InputMaybe<Scalars['IntType']>;
  monochrome?: InputMaybe<Scalars['String']>;
  nr?: InputMaybe<Scalars['IntType']>;
  nrs?: InputMaybe<Scalars['IntType']>;
  orient?: InputMaybe<Scalars['IntType']>;
  pad?: InputMaybe<Scalars['IntType']>;
  padBottom?: InputMaybe<Scalars['IntType']>;
  padLeft?: InputMaybe<Scalars['IntType']>;
  padRight?: InputMaybe<Scalars['IntType']>;
  padTop?: InputMaybe<Scalars['IntType']>;
  page?: InputMaybe<Scalars['IntType']>;
  palette?: InputMaybe<IImgixParamsPalette>;
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']>;
  prefix?: InputMaybe<Scalars['String']>;
  px?: InputMaybe<Scalars['IntType']>;
  q?: InputMaybe<Scalars['IntType']>;
  rect?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['BooleanType']>;
  rot?: InputMaybe<Scalars['FloatType']>;
  sat?: InputMaybe<Scalars['IntType']>;
  sepia?: InputMaybe<Scalars['IntType']>;
  shad?: InputMaybe<Scalars['FloatType']>;
  sharp?: InputMaybe<Scalars['FloatType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  transparency?: InputMaybe<IImgixParamsTransparency>;
  trim?: InputMaybe<IImgixParamsTrim>;
  trimColor?: InputMaybe<Scalars['String']>;
  trimMd?: InputMaybe<Scalars['FloatType']>;
  trimPad?: InputMaybe<Scalars['IntType']>;
  trimSd?: InputMaybe<Scalars['FloatType']>;
  trimTol?: InputMaybe<Scalars['FloatType']>;
  txt?: InputMaybe<Scalars['String']>;
  txtAlign?: InputMaybe<Array<IImgixParamsTxtAlign>>;
  txtClip?: InputMaybe<Array<IImgixParamsTxtClip>>;
  txtColor?: InputMaybe<Scalars['String']>;
  txtFit?: InputMaybe<IImgixParamsTxtFit>;
  txtFont?: InputMaybe<Scalars['String']>;
  txtLead?: InputMaybe<Scalars['IntType']>;
  txtLig?: InputMaybe<Scalars['IntType']>;
  txtLine?: InputMaybe<Scalars['IntType']>;
  txtLineColor?: InputMaybe<Scalars['String']>;
  txtPad?: InputMaybe<Scalars['IntType']>;
  txtShad?: InputMaybe<Scalars['FloatType']>;
  txtSize?: InputMaybe<Scalars['IntType']>;
  txtTrack?: InputMaybe<Scalars['IntType']>;
  txtWidth?: InputMaybe<Scalars['IntType']>;
  txtX?: InputMaybe<Scalars['IntType']>;
  txtY?: InputMaybe<Scalars['IntType']>;
  usm?: InputMaybe<Scalars['IntType']>;
  usmrad?: InputMaybe<Scalars['FloatType']>;
  vib?: InputMaybe<Scalars['IntType']>;
  w?: InputMaybe<Scalars['FloatType']>;
}

export enum IImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
}

export enum IImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum IImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum IImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export enum IImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
}

export enum IImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum IImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width',
}

export enum IImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum IImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb',
}

export enum IImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid',
}

export enum IImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum IImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v',
}

export enum IImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp',
}

export enum IImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum IImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum IImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum IImgixParamsMarkTile {
  Grid = 'grid',
}

export enum IImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum IImgixParamsTransparency {
  Grid = 'grid',
}

export enum IImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum IImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum IImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start',
}

export enum IImgixParamsTxtFit {
  Max = 'max',
}

export interface IInUseFilter {
  eq?: InputMaybe<Scalars['BooleanType']>;
}

export interface IIntegerFilter {
  eq?: InputMaybe<Scalars['IntType']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
}

export interface IInternalNameModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IInternalNameModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IInternalNameModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
}

export enum IInternalNameModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export interface IInternalNameRecord extends IRecordInterface {
  __typename?: 'InternalNameRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
}

export interface IInternalNameRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IItemIdFilter {
  eq?: InputMaybe<Scalars['ItemId']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  neq?: InputMaybe<Scalars['ItemId']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
}

export interface IItemRedirectModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IItemRedirectModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IItemRedirectModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  newSlug?: InputMaybe<IStringFilter>;
  originalSlug?: InputMaybe<IStringFilter>;
}

export enum IItemRedirectModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NewSlugAsc = 'newSlug_ASC',
  NewSlugDesc = 'newSlug_DESC',
  OriginalSlugAsc = 'originalSlug_ASC',
  OriginalSlugDesc = 'originalSlug_DESC',
}

export interface IItemRedirectRecord extends IRecordInterface {
  __typename?: 'ItemRedirectRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  newSlug?: Maybe<Scalars['String']>;
  originalSlug?: Maybe<Scalars['String']>;
}

export interface IItemRedirectRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export enum IItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated',
}

export interface IJsonFilter {
  exists?: InputMaybe<Scalars['BooleanType']>;
}

export interface ILatLonField {
  __typename?: 'LatLonField';
  latitude: Scalars['FloatType'];
  longitude: Scalars['FloatType'];
}

export interface ILatLonFilter {
  exists?: InputMaybe<Scalars['BooleanType']>;
  near?: InputMaybe<ILatLonNearFilter>;
}

export interface ILatLonNearFilter {
  latitude: Scalars['FloatType'];
  longitude: Scalars['FloatType'];
  radius: Scalars['FloatType'];
}

export type ILayoutSectionModelComponentField =
  | IComponentAccordionRecord
  | IComponentBentoBoxRecord
  | IComponentCardDeckRecord
  | IComponentCodeTableRecord
  | IComponentComparisonTableRecord
  | IComponentConversionPanelRecord
  | IComponentFeatureListRecord
  | IComponentHeadingRecord
  | IComponentHeroRecord
  | IComponentImageRecord
  | IComponentPricingCardDeckRecord
  | IComponentPricingTableRecord
  | IComponentQuoteRecord
  | IComponentQuoteSliderRecord
  | IComponentSingleInstanceRecord
  | IComponentSlideboxRecord
  | IComponentSwitchbackRecord
  | IComponentTestimonialConversionPanelRecord
  | IComponentTrustBarRecord
  | IComponentVideoRecord;

export interface ILayoutSectionModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ILayoutSectionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ILayoutSectionModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  backgroundColor?: InputMaybe<IStringFilter>;
  component?: InputMaybe<ILinkFilter>;
  id?: InputMaybe<IItemIdFilter>;
  idLink?: InputMaybe<ISlugFilter>;
  internalName?: InputMaybe<IStringFilter>;
  paddingBottomDesktop?: InputMaybe<IStringFilter>;
  paddingBottomMobile?: InputMaybe<IStringFilter>;
  paddingBottomTablet?: InputMaybe<IStringFilter>;
  paddingTopDesktop?: InputMaybe<IStringFilter>;
  paddingTopMobile?: InputMaybe<IStringFilter>;
  paddingTopTablet?: InputMaybe<IStringFilter>;
}

export enum ILayoutSectionModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PaddingBottomDesktopAsc = 'paddingBottomDesktop_ASC',
  PaddingBottomDesktopDesc = 'paddingBottomDesktop_DESC',
  PaddingBottomMobileAsc = 'paddingBottomMobile_ASC',
  PaddingBottomMobileDesc = 'paddingBottomMobile_DESC',
  PaddingBottomTabletAsc = 'paddingBottomTablet_ASC',
  PaddingBottomTabletDesc = 'paddingBottomTablet_DESC',
  PaddingTopDesktopAsc = 'paddingTopDesktop_ASC',
  PaddingTopDesktopDesc = 'paddingTopDesktop_DESC',
  PaddingTopMobileAsc = 'paddingTopMobile_ASC',
  PaddingTopMobileDesc = 'paddingTopMobile_DESC',
  PaddingTopTabletAsc = 'paddingTopTablet_ASC',
  PaddingTopTabletDesc = 'paddingTopTablet_DESC',
}

export interface ILayoutSectionRecord extends IRecordInterface {
  __typename?: 'LayoutSectionRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  backgroundColor?: Maybe<Scalars['String']>;
  component?: Maybe<ILayoutSectionModelComponentField>;
  id: Scalars['ItemId'];
  idLink?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  paddingBottomDesktop?: Maybe<Scalars['String']>;
  paddingBottomMobile?: Maybe<Scalars['String']>;
  paddingBottomTablet?: Maybe<Scalars['String']>;
  paddingTopDesktop?: Maybe<Scalars['String']>;
  paddingTopMobile?: Maybe<Scalars['String']>;
  paddingTopTablet?: Maybe<Scalars['String']>;
}

export interface ILayoutSectionRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ILinkFilter {
  eq?: InputMaybe<Scalars['ItemId']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  neq?: InputMaybe<Scalars['ItemId']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
}

export interface ILinksFilter {
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
}

export interface IMenuAccordionItemModelBodyField {
  __typename?: 'MenuAccordionItemModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IMenuAccordionItemModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IMenuAccordionItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IMenuAccordionItemModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
}

export enum IMenuAccordionItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface IMenuAccordionItemRecord extends IRecordInterface {
  __typename?: 'MenuAccordionItemRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<IMenuAccordionItemModelBodyField>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
}

export interface IMenuAccordionItemRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IMenuFeatureItemModelContentField {
  __typename?: 'MenuFeatureItemModelContentField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IMenuFeatureItemModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IMenuFeatureItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IMenuFeatureItemModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  content?: InputMaybe<IStructuredTextFilter>;
  featureCode?: InputMaybe<IStringFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  isTranslationLayout?: InputMaybe<IBooleanFilter>;
  sideContent?: InputMaybe<IStructuredTextFilter>;
  subhead?: InputMaybe<ITextFilter>;
}

export enum IMenuFeatureItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  FeatureCodeAsc = 'featureCode_ASC',
  FeatureCodeDesc = 'featureCode_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsTranslationLayoutAsc = 'isTranslationLayout_ASC',
  IsTranslationLayoutDesc = 'isTranslationLayout_DESC',
}

export interface IMenuFeatureItemModelSideContentField {
  __typename?: 'MenuFeatureItemModelSideContentField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface IMenuFeatureItemRecord extends IRecordInterface {
  __typename?: 'MenuFeatureItemRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content?: Maybe<IMenuFeatureItemModelContentField>;
  featureCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  isTranslationLayout?: Maybe<Scalars['BooleanType']>;
  sideContent?: Maybe<IMenuFeatureItemModelSideContentField>;
  subhead?: Maybe<Scalars['String']>;
}

export interface IMenuFeatureItemRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IMenuFeatureItemRecordSubheadArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface IMenuIndustryItemModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IMenuIndustryItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IMenuIndustryItemModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  description?: InputMaybe<IStringFilter>;
  heading?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
}

export enum IMenuIndustryItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export interface IMenuIndustryItemRecord extends IRecordInterface {
  __typename?: 'MenuIndustryItemRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
}

export interface IMenuIndustryItemRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IMenuItemModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IMenuItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IMenuItemModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  heading?: InputMaybe<IStringFilter>;
  icon?: InputMaybe<IStringFilter>;
  iconFile?: InputMaybe<IFileFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  menuItem?: InputMaybe<ILinksFilter>;
  subhead?: InputMaybe<IStringFilter>;
  url?: InputMaybe<IStringFilter>;
}

export enum IMenuItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

export interface IMenuItemRecord extends IRecordInterface {
  __typename?: 'MenuItemRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  heading?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  iconFile?: Maybe<IFileField>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  menuItem: Array<IMenuItemRecord>;
  subhead?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface IMenuItemRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IMenuPricingItemModelFilter {
  AND?: InputMaybe<Array<InputMaybe<IMenuPricingItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IMenuPricingItemModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  body?: InputMaybe<IStringFilter>;
  heading?: InputMaybe<IStringFilter>;
  icon?: InputMaybe<IStringFilter>;
  iconColor?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  subhead?: InputMaybe<IStringFilter>;
}

export enum IMenuPricingItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IconColorAsc = 'iconColor_ASC',
  IconColorDesc = 'iconColor_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
}

export interface IMenuPricingItemRecord extends IRecordInterface {
  __typename?: 'MenuPricingItemRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  iconColor?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  subhead?: Maybe<Scalars['String']>;
}

export interface IMenuPricingItemRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export enum IMuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
}

export interface IOrientationFilter {
  eq?: InputMaybe<IUploadOrientation>;
  neq?: InputMaybe<IUploadOrientation>;
}

export interface IPublishedAtFilter {
  eq?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
}

export interface IQuery {
  __typename?: 'Query';
  _allComponentAccordionsMeta: ICollectionMetadata;
  _allComponentAnnouncementBarsMeta: ICollectionMetadata;
  _allComponentBentoBoxesMeta: ICollectionMetadata;
  _allComponentBentoSplitContentsMeta: ICollectionMetadata;
  _allComponentBentoStackedImagesMeta: ICollectionMetadata;
  _allComponentBentoTrustBarsMeta: ICollectionMetadata;
  _allComponentCallToActionsMeta: ICollectionMetadata;
  _allComponentCardDeckAddonsMeta: ICollectionMetadata;
  _allComponentCardDecksMeta: ICollectionMetadata;
  _allComponentCardsMeta: ICollectionMetadata;
  _allComponentCodeTablesMeta: ICollectionMetadata;
  _allComponentComparisonTablesMeta: ICollectionMetadata;
  _allComponentConversionPanelsMeta: ICollectionMetadata;
  _allComponentFeatureListsMeta: ICollectionMetadata;
  _allComponentFootersMeta: ICollectionMetadata;
  _allComponentFormsMeta: ICollectionMetadata;
  _allComponentHeadersMeta: ICollectionMetadata;
  _allComponentHeadingsMeta: ICollectionMetadata;
  _allComponentHerosMeta: ICollectionMetadata;
  _allComponentImagesMeta: ICollectionMetadata;
  _allComponentMapsMeta: ICollectionMetadata;
  _allComponentPricingCardDecksMeta: ICollectionMetadata;
  _allComponentPricingCardsMeta: ICollectionMetadata;
  _allComponentPricingTablesMeta: ICollectionMetadata;
  _allComponentQuoteSlidersMeta: ICollectionMetadata;
  _allComponentQuotesMeta: ICollectionMetadata;
  _allComponentSingleInstancesMeta: ICollectionMetadata;
  _allComponentSlideboxItemsMeta: ICollectionMetadata;
  _allComponentSlideboxesMeta: ICollectionMetadata;
  _allComponentSwitchbacksMeta: ICollectionMetadata;
  _allComponentTestimonialCardsMeta: ICollectionMetadata;
  _allComponentTestimonialConversionPanelsMeta: ICollectionMetadata;
  _allComponentTrustBarsMeta: ICollectionMetadata;
  _allComponentVideosMeta: ICollectionMetadata;
  _allEntityCategoriesMeta: ICollectionMetadata;
  _allEntityCompaniesMeta: ICollectionMetadata;
  _allEntityPeopleMeta: ICollectionMetadata;
  _allEntityTagsMeta: ICollectionMetadata;
  _allInternalNamesMeta: ICollectionMetadata;
  _allItemRedirectsMeta: ICollectionMetadata;
  _allLayoutSectionsMeta: ICollectionMetadata;
  _allMenuAccordionItemsMeta: ICollectionMetadata;
  _allMenuFeatureItemsMeta: ICollectionMetadata;
  _allMenuIndustryItemsMeta: ICollectionMetadata;
  _allMenuItemsMeta: ICollectionMetadata;
  _allMenuPricingItemsMeta: ICollectionMetadata;
  _allTableCellsMeta: ICollectionMetadata;
  _allTableRowGroupsMeta: ICollectionMetadata;
  _allTableRowsMeta: ICollectionMetadata;
  _allTablesMeta: ICollectionMetadata;
  _allTemplateBlogsMeta: ICollectionMetadata;
  _allTemplateBuiltWithDeepgramsMeta: ICollectionMetadata;
  _allTemplateCaseStudiesMeta: ICollectionMetadata;
  _allTemplateChangelogsMeta: ICollectionMetadata;
  _allTemplateEventsDetailsMeta: ICollectionMetadata;
  _allTemplateExternalWebinarsMeta: ICollectionMetadata;
  _allTemplateGlossariesMeta: ICollectionMetadata;
  _allTemplateLegalsMeta: ICollectionMetadata;
  _allTemplateNewsMeta: ICollectionMetadata;
  _allTemplatePagesMeta: ICollectionMetadata;
  _allTemplatePartnersMeta: ICollectionMetadata;
  _allTemplatePodcastsMeta: ICollectionMetadata;
  _allTemplateResourcesExternalsMeta: ICollectionMetadata;
  _allUploadsMeta: ICollectionMetadata;
  _site: ISite;
  allComponentAccordions: Array<IComponentAccordionRecord>;
  allComponentAnnouncementBars: Array<IComponentAnnouncementBarRecord>;
  allComponentBentoBoxes: Array<IComponentBentoBoxRecord>;
  allComponentBentoSplitContents: Array<IComponentBentoSplitContentRecord>;
  allComponentBentoStackedImages: Array<IComponentBentoStackedImageRecord>;
  allComponentBentoTrustBars: Array<IComponentBentoTrustBarRecord>;
  allComponentCallToActions: Array<IComponentCallToActionRecord>;
  allComponentCardDeckAddons: Array<IComponentCardDeckAddonRecord>;
  allComponentCardDecks: Array<IComponentCardDeckRecord>;
  allComponentCards: Array<IComponentCardRecord>;
  allComponentCodeTables: Array<IComponentCodeTableRecord>;
  allComponentComparisonTables: Array<IComponentComparisonTableRecord>;
  allComponentConversionPanels: Array<IComponentConversionPanelRecord>;
  allComponentFeatureLists: Array<IComponentFeatureListRecord>;
  allComponentFooters: Array<IComponentFooterRecord>;
  allComponentForms: Array<IComponentFormRecord>;
  allComponentHeaders: Array<IComponentHeaderRecord>;
  allComponentHeadings: Array<IComponentHeadingRecord>;
  allComponentHeros: Array<IComponentHeroRecord>;
  allComponentImages: Array<IComponentImageRecord>;
  allComponentMaps: Array<IComponentMapRecord>;
  allComponentPricingCardDecks: Array<IComponentPricingCardDeckRecord>;
  allComponentPricingCards: Array<IComponentPricingCardRecord>;
  allComponentPricingTables: Array<IComponentPricingTableRecord>;
  allComponentQuoteSliders: Array<IComponentQuoteSliderRecord>;
  allComponentQuotes: Array<IComponentQuoteRecord>;
  allComponentSingleInstances: Array<IComponentSingleInstanceRecord>;
  allComponentSlideboxItems: Array<IComponentSlideboxItemRecord>;
  allComponentSlideboxes: Array<IComponentSlideboxRecord>;
  allComponentSwitchbacks: Array<IComponentSwitchbackRecord>;
  allComponentTestimonialCards: Array<IComponentTestimonialCardRecord>;
  allComponentTestimonialConversionPanels: Array<IComponentTestimonialConversionPanelRecord>;
  allComponentTrustBars: Array<IComponentTrustBarRecord>;
  allComponentVideos: Array<IComponentVideoRecord>;
  allEntityCategories: Array<IEntityCategoryRecord>;
  allEntityCompanies: Array<IEntityCompanyRecord>;
  allEntityPeople: Array<IEntityPersonRecord>;
  allEntityTags: Array<IEntityTagRecord>;
  allInternalNames: Array<IInternalNameRecord>;
  allItemRedirects: Array<IItemRedirectRecord>;
  allLayoutSections: Array<ILayoutSectionRecord>;
  allMenuAccordionItems: Array<IMenuAccordionItemRecord>;
  allMenuFeatureItems: Array<IMenuFeatureItemRecord>;
  allMenuIndustryItems: Array<IMenuIndustryItemRecord>;
  allMenuItems: Array<IMenuItemRecord>;
  allMenuPricingItems: Array<IMenuPricingItemRecord>;
  allTableCells: Array<ITableCellRecord>;
  allTableRowGroups: Array<ITableRowGroupRecord>;
  allTableRows: Array<ITableRowRecord>;
  allTables: Array<ITableRecord>;
  allTemplateBlogs: Array<ITemplateBlogRecord>;
  allTemplateBuiltWithDeepgrams: Array<ITemplateBuiltWithDeepgramRecord>;
  allTemplateCaseStudies: Array<ITemplateCaseStudyRecord>;
  allTemplateChangelogs: Array<ITemplateChangelogRecord>;
  allTemplateEventsDetails: Array<ITemplateEventsDetailRecord>;
  allTemplateExternalWebinars: Array<ITemplateExternalWebinarRecord>;
  allTemplateGlossaries: Array<ITemplateGlossaryRecord>;
  allTemplateLegals: Array<ITemplateLegalRecord>;
  allTemplateNews: Array<ITemplateNewsRecord>;
  allTemplatePages: Array<ITemplatePageRecord>;
  allTemplatePartners: Array<ITemplatePartnerRecord>;
  allTemplatePodcasts: Array<ITemplatePodcastRecord>;
  allTemplateResourcesExternals: Array<ITemplateResourcesExternalRecord>;
  allUploads: Array<IFileField>;
  componentAccordion?: Maybe<IComponentAccordionRecord>;
  componentAnnouncementBar?: Maybe<IComponentAnnouncementBarRecord>;
  componentBentoBox?: Maybe<IComponentBentoBoxRecord>;
  componentBentoSplitContent?: Maybe<IComponentBentoSplitContentRecord>;
  componentBentoStackedImage?: Maybe<IComponentBentoStackedImageRecord>;
  componentBentoTrustBar?: Maybe<IComponentBentoTrustBarRecord>;
  componentCallToAction?: Maybe<IComponentCallToActionRecord>;
  componentCard?: Maybe<IComponentCardRecord>;
  componentCardDeck?: Maybe<IComponentCardDeckRecord>;
  componentCardDeckAddon?: Maybe<IComponentCardDeckAddonRecord>;
  componentCodeTable?: Maybe<IComponentCodeTableRecord>;
  componentComparisonTable?: Maybe<IComponentComparisonTableRecord>;
  componentConversionPanel?: Maybe<IComponentConversionPanelRecord>;
  componentFeatureList?: Maybe<IComponentFeatureListRecord>;
  componentFooter?: Maybe<IComponentFooterRecord>;
  componentForm?: Maybe<IComponentFormRecord>;
  componentHeader?: Maybe<IComponentHeaderRecord>;
  componentHeading?: Maybe<IComponentHeadingRecord>;
  componentHero?: Maybe<IComponentHeroRecord>;
  componentImage?: Maybe<IComponentImageRecord>;
  componentMap?: Maybe<IComponentMapRecord>;
  componentPricingCard?: Maybe<IComponentPricingCardRecord>;
  componentPricingCardDeck?: Maybe<IComponentPricingCardDeckRecord>;
  componentPricingTable?: Maybe<IComponentPricingTableRecord>;
  componentQuote?: Maybe<IComponentQuoteRecord>;
  componentQuoteSlider?: Maybe<IComponentQuoteSliderRecord>;
  componentSingleInstance?: Maybe<IComponentSingleInstanceRecord>;
  componentSlidebox?: Maybe<IComponentSlideboxRecord>;
  componentSlideboxItem?: Maybe<IComponentSlideboxItemRecord>;
  componentSwitchback?: Maybe<IComponentSwitchbackRecord>;
  componentTestimonialCard?: Maybe<IComponentTestimonialCardRecord>;
  componentTestimonialConversionPanel?: Maybe<IComponentTestimonialConversionPanelRecord>;
  componentTrustBar?: Maybe<IComponentTrustBarRecord>;
  componentVideo?: Maybe<IComponentVideoRecord>;
  customPageSeo?: Maybe<ICustomPageSeoRecord>;
  entityCategory?: Maybe<IEntityCategoryRecord>;
  entityCompany?: Maybe<IEntityCompanyRecord>;
  entityPerson?: Maybe<IEntityPersonRecord>;
  entityTag?: Maybe<IEntityTagRecord>;
  internalName?: Maybe<IInternalNameRecord>;
  itemRedirect?: Maybe<IItemRedirectRecord>;
  layoutSection?: Maybe<ILayoutSectionRecord>;
  menuAccordionItem?: Maybe<IMenuAccordionItemRecord>;
  menuFeatureItem?: Maybe<IMenuFeatureItemRecord>;
  menuIndustryItem?: Maybe<IMenuIndustryItemRecord>;
  menuItem?: Maybe<IMenuItemRecord>;
  menuPricingItem?: Maybe<IMenuPricingItemRecord>;
  slugRedirect?: Maybe<ISlugRedirectRecord>;
  table?: Maybe<ITableRecord>;
  tableCell?: Maybe<ITableCellRecord>;
  tableRow?: Maybe<ITableRowRecord>;
  tableRowGroup?: Maybe<ITableRowGroupRecord>;
  templateBlog?: Maybe<ITemplateBlogRecord>;
  templateBuiltWithDeepgram?: Maybe<ITemplateBuiltWithDeepgramRecord>;
  templateCaseStudy?: Maybe<ITemplateCaseStudyRecord>;
  templateChangelog?: Maybe<ITemplateChangelogRecord>;
  templateEventsDetail?: Maybe<ITemplateEventsDetailRecord>;
  templateExternalWebinar?: Maybe<ITemplateExternalWebinarRecord>;
  templateGlossary?: Maybe<ITemplateGlossaryRecord>;
  templateLegal?: Maybe<ITemplateLegalRecord>;
  templateNews?: Maybe<ITemplateNewsRecord>;
  templatePage?: Maybe<ITemplatePageRecord>;
  templatePartner?: Maybe<ITemplatePartnerRecord>;
  templatePodcast?: Maybe<ITemplatePodcastRecord>;
  templateResourcesExternal?: Maybe<ITemplateResourcesExternalRecord>;
  upload?: Maybe<IFileField>;
}

export interface IQuery_AllComponentAccordionsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentAccordionModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentAnnouncementBarsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentAnnouncementBarModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentBentoBoxesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoBoxModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentBentoSplitContentsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoSplitContentModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentBentoStackedImagesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoStackedImageModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentBentoTrustBarsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoTrustBarModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentCallToActionsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCallToActionModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentCardDeckAddonsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCardDeckAddonModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentCardDecksMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCardDeckModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentCardsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCardModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentCodeTablesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCodeTableModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentComparisonTablesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentComparisonTableModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentConversionPanelsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentConversionPanelModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentFeatureListsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentFeatureListModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentFootersMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentFooterModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentFormsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentFormModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentHeadersMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentHeaderModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentHeadingsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentHeadingModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentHerosMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentHeroModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentImagesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentImageModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentMapsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentMapModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentPricingCardDecksMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentPricingCardDeckModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentPricingCardsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentPricingCardModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentPricingTablesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentPricingTableModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentQuoteSlidersMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentQuoteSliderModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentQuotesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentQuoteModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentSingleInstancesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSingleInstanceModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentSlideboxItemsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSlideboxItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentSlideboxesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSlideboxModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentSwitchbacksMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSwitchbackModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentTestimonialCardsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentTestimonialCardModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentTestimonialConversionPanelsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentTestimonialConversionPanelModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentTrustBarsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentTrustBarModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllComponentVideosMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentVideoModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllEntityCategoriesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityCategoryModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllEntityCompaniesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityCompanyModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllEntityPeopleMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityPersonModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllEntityTagsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityTagModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllInternalNamesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IInternalNameModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllItemRedirectsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IItemRedirectModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllLayoutSectionsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ILayoutSectionModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllMenuAccordionItemsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuAccordionItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllMenuFeatureItemsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuFeatureItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllMenuIndustryItemsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuIndustryItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllMenuItemsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllMenuPricingItemsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuPricingItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTableCellsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableCellModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTableRowGroupsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableRowGroupModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTableRowsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableRowModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTablesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplateBlogsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateBlogModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplateBuiltWithDeepgramsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateBuiltWithDeepgramModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplateCaseStudiesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateCaseStudyModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplateChangelogsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateChangelogModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplateEventsDetailsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateEventsDetailModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplateExternalWebinarsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateExternalWebinarModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplateGlossariesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateGlossaryModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplateLegalsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateLegalModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplateNewsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateNewsModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplatePagesMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplatePageModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplatePartnersMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplatePartnerModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplatePodcastsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplatePodcastModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllTemplateResourcesExternalsMetaArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateResourcesExternalModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_AllUploadsMetaArgs {
  filter?: InputMaybe<IUploadFilter>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQuery_SiteArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQueryAllComponentAccordionsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentAccordionModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentAccordionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentAnnouncementBarsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentAnnouncementBarModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentAnnouncementBarModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentBentoBoxesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoBoxModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentBentoBoxModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentBentoSplitContentsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoSplitContentModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentBentoSplitContentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentBentoStackedImagesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoStackedImageModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentBentoStackedImageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentBentoTrustBarsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoTrustBarModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentBentoTrustBarModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentCallToActionsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCallToActionModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentCallToActionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentCardDeckAddonsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCardDeckAddonModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentCardDeckAddonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentCardDecksArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCardDeckModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentCardDeckModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentCardsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCardModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentCardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentCodeTablesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCodeTableModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentCodeTableModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentComparisonTablesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentComparisonTableModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentComparisonTableModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentConversionPanelsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentConversionPanelModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentConversionPanelModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentFeatureListsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentFeatureListModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentFeatureListModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentFootersArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentFooterModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentFooterModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentFormsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentFormModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentFormModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentHeadersArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentHeaderModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentHeaderModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentHeadingsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentHeadingModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentHeadingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentHerosArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentHeroModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentHeroModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentImagesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentImageModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentImageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentMapsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentMapModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentMapModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentPricingCardDecksArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentPricingCardDeckModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentPricingCardDeckModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentPricingCardsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentPricingCardModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentPricingCardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentPricingTablesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentPricingTableModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentPricingTableModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentQuoteSlidersArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentQuoteSliderModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentQuoteSliderModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentQuotesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentQuoteModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentQuoteModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentSingleInstancesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSingleInstanceModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentSingleInstanceModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentSlideboxItemsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSlideboxItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentSlideboxItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentSlideboxesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSlideboxModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentSlideboxModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentSwitchbacksArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSwitchbackModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentSwitchbackModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentTestimonialCardsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentTestimonialCardModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentTestimonialCardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentTestimonialConversionPanelsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentTestimonialConversionPanelModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentTestimonialConversionPanelModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentTrustBarsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentTrustBarModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentTrustBarModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllComponentVideosArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllEntityCategoriesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IEntityCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllEntityCompaniesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityCompanyModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IEntityCompanyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllEntityPeopleArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityPersonModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IEntityPersonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllEntityTagsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityTagModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IEntityTagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllInternalNamesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IInternalNameModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IInternalNameModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllItemRedirectsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IItemRedirectModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IItemRedirectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllLayoutSectionsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ILayoutSectionModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ILayoutSectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllMenuAccordionItemsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuAccordionItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IMenuAccordionItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllMenuFeatureItemsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuFeatureItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IMenuFeatureItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllMenuIndustryItemsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuIndustryItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IMenuIndustryItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllMenuItemsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IMenuItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllMenuPricingItemsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuPricingItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IMenuPricingItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTableCellsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableCellModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITableCellModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTableRowGroupsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableRowGroupModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITableRowGroupModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTableRowsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableRowModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITableRowModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTablesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITableModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplateBlogsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateBlogModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateBlogModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplateBuiltWithDeepgramsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateBuiltWithDeepgramModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateBuiltWithDeepgramModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplateCaseStudiesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateCaseStudyModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateCaseStudyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplateChangelogsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateChangelogModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateChangelogModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplateEventsDetailsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateEventsDetailModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateEventsDetailModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplateExternalWebinarsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateExternalWebinarModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateExternalWebinarModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplateGlossariesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateGlossaryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateGlossaryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplateLegalsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateLegalModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateLegalModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplateNewsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateNewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateNewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplatePagesArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplatePageModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplatePageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplatePartnersArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplatePartnerModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplatePartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplatePodcastsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplatePodcastModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplatePodcastModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllTemplateResourcesExternalsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateResourcesExternalModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateResourcesExternalModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryAllUploadsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IUploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IUploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
}

export interface IQueryComponentAccordionArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentAccordionModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentAccordionModelOrderBy>>>;
}

export interface IQueryComponentAnnouncementBarArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentAnnouncementBarModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentAnnouncementBarModelOrderBy>>>;
}

export interface IQueryComponentBentoBoxArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoBoxModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentBentoBoxModelOrderBy>>>;
}

export interface IQueryComponentBentoSplitContentArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoSplitContentModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentBentoSplitContentModelOrderBy>>>;
}

export interface IQueryComponentBentoStackedImageArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoStackedImageModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentBentoStackedImageModelOrderBy>>>;
}

export interface IQueryComponentBentoTrustBarArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentBentoTrustBarModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentBentoTrustBarModelOrderBy>>>;
}

export interface IQueryComponentCallToActionArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCallToActionModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentCallToActionModelOrderBy>>>;
}

export interface IQueryComponentCardArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCardModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentCardModelOrderBy>>>;
}

export interface IQueryComponentCardDeckArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCardDeckModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentCardDeckModelOrderBy>>>;
}

export interface IQueryComponentCardDeckAddonArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCardDeckAddonModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentCardDeckAddonModelOrderBy>>>;
}

export interface IQueryComponentCodeTableArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentCodeTableModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentCodeTableModelOrderBy>>>;
}

export interface IQueryComponentComparisonTableArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentComparisonTableModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentComparisonTableModelOrderBy>>>;
}

export interface IQueryComponentConversionPanelArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentConversionPanelModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentConversionPanelModelOrderBy>>>;
}

export interface IQueryComponentFeatureListArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentFeatureListModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentFeatureListModelOrderBy>>>;
}

export interface IQueryComponentFooterArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentFooterModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentFooterModelOrderBy>>>;
}

export interface IQueryComponentFormArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentFormModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentFormModelOrderBy>>>;
}

export interface IQueryComponentHeaderArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentHeaderModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentHeaderModelOrderBy>>>;
}

export interface IQueryComponentHeadingArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentHeadingModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentHeadingModelOrderBy>>>;
}

export interface IQueryComponentHeroArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentHeroModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentHeroModelOrderBy>>>;
}

export interface IQueryComponentImageArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentImageModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentImageModelOrderBy>>>;
}

export interface IQueryComponentMapArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentMapModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentMapModelOrderBy>>>;
}

export interface IQueryComponentPricingCardArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentPricingCardModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentPricingCardModelOrderBy>>>;
}

export interface IQueryComponentPricingCardDeckArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentPricingCardDeckModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentPricingCardDeckModelOrderBy>>>;
}

export interface IQueryComponentPricingTableArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentPricingTableModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentPricingTableModelOrderBy>>>;
}

export interface IQueryComponentQuoteArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentQuoteModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentQuoteModelOrderBy>>>;
}

export interface IQueryComponentQuoteSliderArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentQuoteSliderModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentQuoteSliderModelOrderBy>>>;
}

export interface IQueryComponentSingleInstanceArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSingleInstanceModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentSingleInstanceModelOrderBy>>>;
}

export interface IQueryComponentSlideboxArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSlideboxModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentSlideboxModelOrderBy>>>;
}

export interface IQueryComponentSlideboxItemArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSlideboxItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentSlideboxItemModelOrderBy>>>;
}

export interface IQueryComponentSwitchbackArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentSwitchbackModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentSwitchbackModelOrderBy>>>;
}

export interface IQueryComponentTestimonialCardArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentTestimonialCardModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentTestimonialCardModelOrderBy>>>;
}

export interface IQueryComponentTestimonialConversionPanelArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentTestimonialConversionPanelModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentTestimonialConversionPanelModelOrderBy>>>;
}

export interface IQueryComponentTrustBarArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentTrustBarModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentTrustBarModelOrderBy>>>;
}

export interface IQueryComponentVideoArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IComponentVideoModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IComponentVideoModelOrderBy>>>;
}

export interface IQueryCustomPageSeoArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQueryEntityCategoryArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityCategoryModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IEntityCategoryModelOrderBy>>>;
}

export interface IQueryEntityCompanyArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityCompanyModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IEntityCompanyModelOrderBy>>>;
}

export interface IQueryEntityPersonArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityPersonModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IEntityPersonModelOrderBy>>>;
}

export interface IQueryEntityTagArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IEntityTagModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IEntityTagModelOrderBy>>>;
}

export interface IQueryInternalNameArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IInternalNameModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IInternalNameModelOrderBy>>>;
}

export interface IQueryItemRedirectArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IItemRedirectModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IItemRedirectModelOrderBy>>>;
}

export interface IQueryLayoutSectionArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ILayoutSectionModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ILayoutSectionModelOrderBy>>>;
}

export interface IQueryMenuAccordionItemArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuAccordionItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IMenuAccordionItemModelOrderBy>>>;
}

export interface IQueryMenuFeatureItemArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuFeatureItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IMenuFeatureItemModelOrderBy>>>;
}

export interface IQueryMenuIndustryItemArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuIndustryItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IMenuIndustryItemModelOrderBy>>>;
}

export interface IQueryMenuItemArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IMenuItemModelOrderBy>>>;
}

export interface IQueryMenuPricingItemArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IMenuPricingItemModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IMenuPricingItemModelOrderBy>>>;
}

export interface IQuerySlugRedirectArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export interface IQueryTableArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITableModelOrderBy>>>;
}

export interface IQueryTableCellArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableCellModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITableCellModelOrderBy>>>;
}

export interface IQueryTableRowArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableRowModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITableRowModelOrderBy>>>;
}

export interface IQueryTableRowGroupArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITableRowGroupModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITableRowGroupModelOrderBy>>>;
}

export interface IQueryTemplateBlogArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateBlogModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateBlogModelOrderBy>>>;
}

export interface IQueryTemplateBuiltWithDeepgramArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateBuiltWithDeepgramModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateBuiltWithDeepgramModelOrderBy>>>;
}

export interface IQueryTemplateCaseStudyArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateCaseStudyModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateCaseStudyModelOrderBy>>>;
}

export interface IQueryTemplateChangelogArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateChangelogModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateChangelogModelOrderBy>>>;
}

export interface IQueryTemplateEventsDetailArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateEventsDetailModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateEventsDetailModelOrderBy>>>;
}

export interface IQueryTemplateExternalWebinarArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateExternalWebinarModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateExternalWebinarModelOrderBy>>>;
}

export interface IQueryTemplateGlossaryArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateGlossaryModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateGlossaryModelOrderBy>>>;
}

export interface IQueryTemplateLegalArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateLegalModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateLegalModelOrderBy>>>;
}

export interface IQueryTemplateNewsArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateNewsModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateNewsModelOrderBy>>>;
}

export interface IQueryTemplatePageArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplatePageModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplatePageModelOrderBy>>>;
}

export interface IQueryTemplatePartnerArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplatePartnerModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplatePartnerModelOrderBy>>>;
}

export interface IQueryTemplatePodcastArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplatePodcastModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplatePodcastModelOrderBy>>>;
}

export interface IQueryTemplateResourcesExternalArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<ITemplateResourcesExternalModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ITemplateResourcesExternalModelOrderBy>>>;
}

export interface IQueryUploadArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IUploadFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IUploadOrderBy>>>;
}

export interface IRecordInterface {
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
}

export interface IRecordInterface_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IResolutionFilter {
  eq?: InputMaybe<IResolutionType>;
  in?: InputMaybe<Array<InputMaybe<IResolutionType>>>;
  neq?: InputMaybe<IResolutionType>;
  notIn?: InputMaybe<Array<InputMaybe<IResolutionType>>>;
}

export enum IResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export interface IResponsiveImage {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
}

export interface ISeoField {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<IFileField>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
}

export interface ISeoFilter {
  exists?: InputMaybe<Scalars['BooleanType']>;
}

export interface ISite {
  __typename?: 'Site';
  favicon?: Maybe<IFileField>;
  faviconMetaTags: Array<ITag>;
  globalSeo?: Maybe<IGlobalSeoField>;
  locales: Array<ISiteLocale>;
}

export interface ISiteFaviconMetaTagsArgs {
  variants?: InputMaybe<Array<InputMaybe<IFaviconType>>>;
}

export interface ISiteGlobalSeoArgs {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
}

export enum ISiteLocale {
  En = 'en',
}

export interface ISlugFilter {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ISlugRedirectRecord extends IRecordInterface {
  __typename?: 'SlugRedirectRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  redirects?: Maybe<Scalars['JsonField']>;
}

export interface ISlugRedirectRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IStatisticRecord extends IRecordInterface {
  __typename?: 'StatisticRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  statisticLabel?: Maybe<Scalars['String']>;
  statisticValue?: Maybe<Scalars['String']>;
}

export interface IStatisticRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface IStatusFilter {
  eq?: InputMaybe<IItemStatus>;
  in?: InputMaybe<Array<InputMaybe<IItemStatus>>>;
  neq?: InputMaybe<IItemStatus>;
  notIn?: InputMaybe<Array<InputMaybe<IItemStatus>>>;
}

export interface IStringFilter {
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<IStringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export interface IStringMatchesFilter {
  caseSensitive?: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp?: InputMaybe<Scalars['BooleanType']>;
}

export interface IStructuredTextFilter {
  exists?: InputMaybe<Scalars['BooleanType']>;
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<IStringMatchesFilter>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export interface ITableCellModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITableCellModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITableCellModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  backgroundColor?: InputMaybe<IStringFilter>;
  callToAction?: InputMaybe<ILinkFilter>;
  icon?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IItemIdFilter>;
  rowSpan?: InputMaybe<IIntegerFilter>;
  showTooltip?: InputMaybe<IBooleanFilter>;
  text?: InputMaybe<IStringFilter>;
  textAlignment?: InputMaybe<IStringFilter>;
  textBadge?: InputMaybe<IBooleanFilter>;
  tooltipText?: InputMaybe<ITextFilter>;
}

export enum ITableCellModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RowSpanAsc = 'rowSpan_ASC',
  RowSpanDesc = 'rowSpan_DESC',
  ShowTooltipAsc = 'showTooltip_ASC',
  ShowTooltipDesc = 'showTooltip_DESC',
  TextAlignmentAsc = 'textAlignment_ASC',
  TextAlignmentDesc = 'textAlignment_DESC',
  TextBadgeAsc = 'textBadge_ASC',
  TextBadgeDesc = 'textBadge_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
}

export interface ITableCellRecord extends IRecordInterface {
  __typename?: 'TableCellRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  backgroundColor?: Maybe<Scalars['String']>;
  callToAction?: Maybe<IComponentCallToActionRecord>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  rowSpan?: Maybe<Scalars['IntType']>;
  showTooltip?: Maybe<Scalars['BooleanType']>;
  text?: Maybe<Scalars['String']>;
  textAlignment?: Maybe<Scalars['String']>;
  textBadge?: Maybe<Scalars['BooleanType']>;
  tooltipText?: Maybe<Scalars['String']>;
}

export interface ITableCellRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITableCellRecordTooltipTextArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface ITableModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITableModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITableModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  labelIcon?: InputMaybe<IStringFilter>;
  tabLabel?: InputMaybe<IStringFilter>;
  tableRows?: InputMaybe<ILinksFilter>;
}

export enum ITableModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelIconAsc = 'labelIcon_ASC',
  LabelIconDesc = 'labelIcon_DESC',
  TabLabelAsc = 'tabLabel_ASC',
  TabLabelDesc = 'tabLabel_DESC',
}

export interface ITableRecord extends IRecordInterface {
  __typename?: 'TableRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  labelIcon?: Maybe<Scalars['String']>;
  tabLabel?: Maybe<Scalars['String']>;
  tableRows: Array<ITableRowRecord>;
}

export interface ITableRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITableRowGroupModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITableRowGroupModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITableRowGroupModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  tableCells?: InputMaybe<ILinksFilter>;
}

export enum ITableRowGroupModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface ITableRowGroupRecord extends IRecordInterface {
  __typename?: 'TableRowGroupRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  tableCells: Array<ITableCellRecord>;
}

export interface ITableRowGroupRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITableRowModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITableRowModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITableRowModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  headerRow?: InputMaybe<IBooleanFilter>;
  highlightedRow?: InputMaybe<IBooleanFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  tableRowGroups?: InputMaybe<ILinksFilter>;
}

export enum ITableRowModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeaderRowAsc = 'headerRow_ASC',
  HeaderRowDesc = 'headerRow_DESC',
  HighlightedRowAsc = 'highlightedRow_ASC',
  HighlightedRowDesc = 'highlightedRow_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
}

export interface ITableRowRecord extends IRecordInterface {
  __typename?: 'TableRowRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  headerRow?: Maybe<Scalars['BooleanType']>;
  highlightedRow?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  tableRowGroups: Array<ITableRowGroupRecord>;
}

export interface ITableRowRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITag {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
}

export interface ITemplateBlogModelBodyField {
  __typename?: 'TemplateBlogModelBodyField';
  blocks: Array<IHtmlTableRecord>;
  links: Array<ITemplateBlogModelBodyLinksField>;
  value: Scalars['JsonField'];
}

export type ITemplateBlogModelBodyLinksField = IComponentImageRecord | IComponentVideoRecord;

export interface ITemplateBlogModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplateBlogModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplateBlogModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  author?: InputMaybe<ILinkFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  category?: InputMaybe<IStringFilter>;
  coAuthors?: InputMaybe<ILinksFilter>;
  excerpt?: InputMaybe<ITextFilter>;
  featuredImage?: InputMaybe<IFileFilter>;
  hideFromListing?: InputMaybe<IBooleanFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  publishDate?: InputMaybe<IDateFilter>;
  seo?: InputMaybe<ISeoFilter>;
  slug?: InputMaybe<ISlugFilter>;
  title?: InputMaybe<IStringFilter>;
}

export enum ITemplateBlogModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  HideFromListingAsc = 'hideFromListing_ASC',
  HideFromListingDesc = 'hideFromListing_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface ITemplateBlogRecord extends IRecordInterface {
  __typename?: 'TemplateBlogRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  author?: Maybe<IEntityPersonRecord>;
  body?: Maybe<ITemplateBlogModelBodyField>;
  category?: Maybe<Scalars['String']>;
  coAuthors: Array<IEntityPersonRecord>;
  excerpt?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<IFileField>;
  hideFromListing?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  seo?: Maybe<ISeoField>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface ITemplateBlogRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplateBlogRecordExcerptArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface ITemplateBuiltWithDeepgramModelBodyField {
  __typename?: 'TemplateBuiltWithDeepgramModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<IComponentImageRecord>;
  value: Scalars['JsonField'];
}

export interface ITemplateBuiltWithDeepgramModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplateBuiltWithDeepgramModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplateBuiltWithDeepgramModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  author?: InputMaybe<ILinkFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  caseStudyReference?: InputMaybe<ILinkFilter>;
  excerpt?: InputMaybe<ITextFilter>;
  featuredImage?: InputMaybe<IFileFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  publishDate?: InputMaybe<IDateFilter>;
  seo?: InputMaybe<ISeoFilter>;
  slug?: InputMaybe<ISlugFilter>;
  tags?: InputMaybe<ILinksFilter>;
  title?: InputMaybe<IStringFilter>;
  videoUrl?: InputMaybe<IStringFilter>;
}

export enum ITemplateBuiltWithDeepgramModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VideoUrlAsc = 'videoUrl_ASC',
  VideoUrlDesc = 'videoUrl_DESC',
}

export interface ITemplateBuiltWithDeepgramRecord extends IRecordInterface {
  __typename?: 'TemplateBuiltWithDeepgramRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  author?: Maybe<IEntityPersonRecord>;
  body?: Maybe<ITemplateBuiltWithDeepgramModelBodyField>;
  caseStudyReference?: Maybe<ITemplateCaseStudyRecord>;
  excerpt?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<IFileField>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  seo?: Maybe<ISeoField>;
  slug?: Maybe<Scalars['String']>;
  tags: Array<IEntityTagRecord>;
  title?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
}

export interface ITemplateBuiltWithDeepgramRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplateBuiltWithDeepgramRecordExcerptArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface ITemplateCaseStudyModelBodyField {
  __typename?: 'TemplateCaseStudyModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<IComponentImageRecord>;
  value: Scalars['JsonField'];
}

export interface ITemplateCaseStudyModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplateCaseStudyModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplateCaseStudyModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  category?: InputMaybe<IStringFilter>;
  company?: InputMaybe<ILinkFilter>;
  download?: InputMaybe<IStringFilter>;
  excerpt?: InputMaybe<ITextFilter>;
  featuredImage?: InputMaybe<IFileFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  sections?: InputMaybe<ILinksFilter>;
  seo?: InputMaybe<ISeoFilter>;
  slug?: InputMaybe<ISlugFilter>;
  title?: InputMaybe<IStringFilter>;
}

export enum ITemplateCaseStudyModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  DownloadAsc = 'download_ASC',
  DownloadDesc = 'download_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface ITemplateCaseStudyRecord extends IRecordInterface {
  __typename?: 'TemplateCaseStudyRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<ITemplateCaseStudyModelBodyField>;
  category?: Maybe<Scalars['String']>;
  company?: Maybe<IEntityCompanyRecord>;
  download?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<IFileField>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  sections: Array<ILayoutSectionRecord>;
  seo?: Maybe<ISeoField>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface ITemplateCaseStudyRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplateCaseStudyRecordExcerptArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface ITemplateChangelogModelBodyField {
  __typename?: 'TemplateChangelogModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface ITemplateChangelogModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplateChangelogModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplateChangelogModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  author?: InputMaybe<ILinkFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  category?: InputMaybe<IJsonFilter>;
  description?: InputMaybe<ITextFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  publishDate?: InputMaybe<IDateFilter>;
  seo?: InputMaybe<ISeoFilter>;
  slug?: InputMaybe<ISlugFilter>;
  title?: InputMaybe<IStringFilter>;
}

export enum ITemplateChangelogModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface ITemplateChangelogRecord extends IRecordInterface {
  __typename?: 'TemplateChangelogRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  author?: Maybe<IEntityPersonRecord>;
  body?: Maybe<ITemplateChangelogModelBodyField>;
  category?: Maybe<Scalars['JsonField']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  seo?: Maybe<ISeoField>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface ITemplateChangelogRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplateChangelogRecordDescriptionArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface ITemplateEventsDetailModelDescriptionField {
  __typename?: 'TemplateEventsDetailModelDescriptionField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface ITemplateEventsDetailModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplateEventsDetailModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplateEventsDetailModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  description?: InputMaybe<IStructuredTextFilter>;
  eventDateTime?: InputMaybe<IDateTimeFilter>;
  eventFormId?: InputMaybe<IStringFilter>;
  eventGallery?: InputMaybe<ILinksFilter>;
  eventLocation?: InputMaybe<ILinkFilter>;
  eventType?: InputMaybe<IStringFilter>;
  excerpt?: InputMaybe<ITextFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  slug?: InputMaybe<ISlugFilter>;
  speakers?: InputMaybe<ILinksFilter>;
  title?: InputMaybe<IStringFilter>;
}

export enum ITemplateEventsDetailModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  EventDateTimeAsc = 'eventDateTime_ASC',
  EventDateTimeDesc = 'eventDateTime_DESC',
  EventFormIdAsc = 'eventFormId_ASC',
  EventFormIdDesc = 'eventFormId_DESC',
  EventTypeAsc = 'eventType_ASC',
  EventTypeDesc = 'eventType_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface ITemplateEventsDetailRecord extends IRecordInterface {
  __typename?: 'TemplateEventsDetailRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  description?: Maybe<ITemplateEventsDetailModelDescriptionField>;
  eventDateTime?: Maybe<Scalars['DateTime']>;
  eventFormId?: Maybe<Scalars['String']>;
  eventGallery: Array<IComponentImageRecord>;
  eventLocation?: Maybe<IComponentSwitchbackRecord>;
  eventType?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  speakers: Array<IEntityPersonRecord>;
  title?: Maybe<Scalars['String']>;
}

export interface ITemplateEventsDetailRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplateEventsDetailRecordExcerptArgs {
  markdown?: InputMaybe<Scalars['Boolean']>;
}

export interface ITemplateExternalWebinarModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplateExternalWebinarModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplateExternalWebinarModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  thumbnail?: InputMaybe<IFileFilter>;
  title?: InputMaybe<IStringFilter>;
  url?: InputMaybe<IStringFilter>;
}

export enum ITemplateExternalWebinarModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

export interface ITemplateExternalWebinarRecord extends IRecordInterface {
  __typename?: 'TemplateExternalWebinarRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<IFileField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface ITemplateExternalWebinarRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplateGlossaryModelBodyField {
  __typename?: 'TemplateGlossaryModelBodyField';
  blocks: Array<IHtmlTableRecord>;
  links: Array<ITemplateGlossaryModelBodyLinksField>;
  value: Scalars['JsonField'];
}

export type ITemplateGlossaryModelBodyLinksField = IComponentImageRecord | IComponentVideoRecord;

export interface ITemplateGlossaryModelExcerptField {
  __typename?: 'TemplateGlossaryModelExcerptField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface ITemplateGlossaryModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplateGlossaryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplateGlossaryModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  categoryPage?: InputMaybe<IBooleanFilter>;
  excerpt?: InputMaybe<IStructuredTextFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  seo?: InputMaybe<ISeoFilter>;
  slug?: InputMaybe<IStringFilter>;
  subcategoryPages?: InputMaybe<ILinksFilter>;
  title?: InputMaybe<IStringFilter>;
}

export enum ITemplateGlossaryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CategoryPageAsc = 'categoryPage_ASC',
  CategoryPageDesc = 'categoryPage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface ITemplateGlossaryRecord extends IRecordInterface {
  __typename?: 'TemplateGlossaryRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<ITemplateGlossaryModelBodyField>;
  categoryPage?: Maybe<Scalars['BooleanType']>;
  excerpt?: Maybe<ITemplateGlossaryModelExcerptField>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  seo?: Maybe<ISeoField>;
  slug?: Maybe<Scalars['String']>;
  subcategoryPages: Array<ITemplateGlossaryRecord>;
  title?: Maybe<Scalars['String']>;
}

export interface ITemplateGlossaryRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplateLegalModelBodyField {
  __typename?: 'TemplateLegalModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface ITemplateLegalModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplateLegalModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplateLegalModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  seo?: InputMaybe<ISeoFilter>;
  slug?: InputMaybe<ISlugFilter>;
  title?: InputMaybe<IStringFilter>;
}

export enum ITemplateLegalModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface ITemplateLegalRecord extends IRecordInterface {
  __typename?: 'TemplateLegalRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<ITemplateLegalModelBodyField>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  seo?: Maybe<ISeoField>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface ITemplateLegalRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplateNewsModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplateNewsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplateNewsModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  company?: InputMaybe<ILinkFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  publishDate?: InputMaybe<IDateFilter>;
  title?: InputMaybe<IStringFilter>;
  url?: InputMaybe<IStringFilter>;
}

export enum ITemplateNewsModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

export interface ITemplateNewsRecord extends IRecordInterface {
  __typename?: 'TemplateNewsRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  company?: Maybe<IEntityCompanyRecord>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface ITemplateNewsRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplatePageModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplatePageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplatePageModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  noFooter?: InputMaybe<IBooleanFilter>;
  noHeader?: InputMaybe<IBooleanFilter>;
  noIndex?: InputMaybe<IBooleanFilter>;
  sections?: InputMaybe<ILinksFilter>;
  seo?: InputMaybe<ISeoFilter>;
  slug?: InputMaybe<ISlugFilter>;
}

export enum ITemplatePageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NoFooterAsc = 'noFooter_ASC',
  NoFooterDesc = 'noFooter_DESC',
  NoHeaderAsc = 'noHeader_ASC',
  NoHeaderDesc = 'noHeader_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
}

export interface ITemplatePageRecord extends IRecordInterface {
  __typename?: 'TemplatePageRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  noFooter?: Maybe<Scalars['BooleanType']>;
  noHeader?: Maybe<Scalars['BooleanType']>;
  noIndex?: Maybe<Scalars['BooleanType']>;
  sections: Array<ILayoutSectionRecord>;
  seo?: Maybe<ISeoField>;
  slug?: Maybe<Scalars['String']>;
}

export interface ITemplatePageRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplatePartnerModelExcerptField {
  __typename?: 'TemplatePartnerModelExcerptField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface ITemplatePartnerModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplatePartnerModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplatePartnerModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  caseStudy?: InputMaybe<ILinkFilter>;
  category?: InputMaybe<IStringFilter>;
  excerpt?: InputMaybe<IStructuredTextFilter>;
  featureListHeading?: InputMaybe<ILinkFilter>;
  features?: InputMaybe<ILinksFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  seo?: InputMaybe<ISeoFilter>;
  slug?: InputMaybe<ISlugFilter>;
  thumbnailImage?: InputMaybe<IFileFilter>;
  title?: InputMaybe<IStringFilter>;
  youtubeUrl?: InputMaybe<IStringFilter>;
}

export enum ITemplatePartnerModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  YoutubeUrlAsc = 'youtubeUrl_ASC',
  YoutubeUrlDesc = 'youtubeUrl_DESC',
}

export interface ITemplatePartnerRecord extends IRecordInterface {
  __typename?: 'TemplatePartnerRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  caseStudy?: Maybe<ITemplateCaseStudyRecord>;
  category?: Maybe<Scalars['String']>;
  excerpt?: Maybe<ITemplatePartnerModelExcerptField>;
  featureListHeading?: Maybe<IComponentHeadingRecord>;
  features: Array<IMenuFeatureItemRecord>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  seo?: Maybe<ISeoField>;
  slug?: Maybe<Scalars['String']>;
  thumbnailImage?: Maybe<IFileField>;
  title?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
}

export interface ITemplatePartnerRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplatePodcastModelBodyField {
  __typename?: 'TemplatePodcastModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<ITemplatePodcastModelBodyLinksField>;
  value: Scalars['JsonField'];
}

export type ITemplatePodcastModelBodyLinksField = IComponentImageRecord | IComponentQuoteRecord | IComponentVideoRecord;

export interface ITemplatePodcastModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplatePodcastModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplatePodcastModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  body?: InputMaybe<IStructuredTextFilter>;
  guest?: InputMaybe<ILinksFilter>;
  hostedBy?: InputMaybe<ILinkFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  podcastAudioTitle?: InputMaybe<IStringFilter>;
  podcastAudioUrl?: InputMaybe<IStringFilter>;
  podcastUrl?: InputMaybe<IStringFilter>;
  publishDate?: InputMaybe<IDateFilter>;
  seo?: InputMaybe<ISeoFilter>;
  slug?: InputMaybe<ISlugFilter>;
  title?: InputMaybe<IStringFilter>;
}

export enum ITemplatePodcastModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PodcastAudioTitleAsc = 'podcastAudioTitle_ASC',
  PodcastAudioTitleDesc = 'podcastAudioTitle_DESC',
  PodcastAudioUrlAsc = 'podcastAudioUrl_ASC',
  PodcastAudioUrlDesc = 'podcastAudioUrl_DESC',
  PodcastUrlAsc = 'podcastUrl_ASC',
  PodcastUrlDesc = 'podcastUrl_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface ITemplatePodcastRecord extends IRecordInterface {
  __typename?: 'TemplatePodcastRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<ITemplatePodcastModelBodyField>;
  guest: Array<IEntityPersonRecord>;
  hostedBy?: Maybe<IEntityPersonRecord>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  podcastAudioTitle?: Maybe<Scalars['String']>;
  podcastAudioUrl?: Maybe<Scalars['String']>;
  podcastUrl?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  seo?: Maybe<ISeoField>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface ITemplatePodcastRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITemplateResourcesExternalModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplateResourcesExternalModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplateResourcesExternalModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
  internalName?: InputMaybe<IStringFilter>;
  link?: InputMaybe<IStringFilter>;
  resourceType?: InputMaybe<IStringFilter>;
  thumbnail?: InputMaybe<IFileFilter>;
  title?: InputMaybe<IStringFilter>;
}

export enum ITemplateResourcesExternalModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  ResourceTypeAsc = 'resourceType_ASC',
  ResourceTypeDesc = 'resourceType_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface ITemplateResourcesExternalRecord extends IRecordInterface {
  __typename?: 'TemplateResourcesExternalRecord';
  _createdAt: Scalars['DateTime'];
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<IFileField>;
  title?: Maybe<Scalars['String']>;
}

export interface ITemplateResourcesExternalRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<ISiteLocale>;
}

export interface ITextFilter {
  exists?: InputMaybe<Scalars['BooleanType']>;
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<IStringMatchesFilter>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export interface ITypeFilter {
  eq?: InputMaybe<IUploadType>;
  in?: InputMaybe<Array<InputMaybe<IUploadType>>>;
  neq?: InputMaybe<IUploadType>;
  notIn?: InputMaybe<Array<InputMaybe<IUploadType>>>;
}

export interface IUpdatedAtFilter {
  eq?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
}

export interface IUploadAltFilter {
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matches?: InputMaybe<IStringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export interface IUploadAuthorFilter {
  exists?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<IStringMatchesFilter>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export interface IUploadBasenameFilter {
  matches?: InputMaybe<IStringMatchesFilter>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export interface IUploadColorsFilter {
  allIn?: InputMaybe<Array<InputMaybe<IColorBucketType>>>;
  anyIn?: InputMaybe<Array<InputMaybe<IColorBucketType>>>;
  contains?: InputMaybe<IColorBucketType>;
  eq?: InputMaybe<Array<InputMaybe<IColorBucketType>>>;
  notIn?: InputMaybe<Array<InputMaybe<IColorBucketType>>>;
}

export interface IUploadCopyrightFilter {
  exists?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<IStringMatchesFilter>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export interface IUploadCreatedAtFilter {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
}

export interface IUploadFilenameFilter {
  matches?: InputMaybe<IStringMatchesFilter>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export interface IUploadFilter {
  AND?: InputMaybe<Array<InputMaybe<IUploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IUploadFilter>>>;
  _createdAt?: InputMaybe<IUploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<IUploadUpdatedAtFilter>;
  alt?: InputMaybe<IUploadAltFilter>;
  author?: InputMaybe<IUploadAuthorFilter>;
  basename?: InputMaybe<IUploadBasenameFilter>;
  colors?: InputMaybe<IUploadColorsFilter>;
  copyright?: InputMaybe<IUploadCopyrightFilter>;
  filename?: InputMaybe<IUploadFilenameFilter>;
  format?: InputMaybe<IUploadFormatFilter>;
  height?: InputMaybe<IUploadHeightFilter>;
  id?: InputMaybe<IUploadIdFilter>;
  inUse?: InputMaybe<IInUseFilter>;
  md5?: InputMaybe<IUploadMd5Filter>;
  mimeType?: InputMaybe<IUploadMimeTypeFilter>;
  notes?: InputMaybe<IUploadNotesFilter>;
  orientation?: InputMaybe<IOrientationFilter>;
  resolution?: InputMaybe<IResolutionFilter>;
  size?: InputMaybe<IUploadSizeFilter>;
  smartTags?: InputMaybe<IUploadTagsFilter>;
  tags?: InputMaybe<IUploadTagsFilter>;
  title?: InputMaybe<IUploadTitleFilter>;
  type?: InputMaybe<ITypeFilter>;
  width?: InputMaybe<IUploadWidthFilter>;
}

export interface IUploadFormatFilter {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IUploadHeightFilter {
  eq?: InputMaybe<Scalars['IntType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
}

export interface IUploadIdFilter {
  eq?: InputMaybe<Scalars['UploadId']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  neq?: InputMaybe<Scalars['UploadId']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
}

export interface IUploadMd5Filter {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IUploadMimeTypeFilter {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matches?: InputMaybe<IStringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export interface IUploadNotesFilter {
  exists?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<IStringMatchesFilter>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export enum IUploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
}

export enum IUploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

export interface IUploadSizeFilter {
  eq?: InputMaybe<Scalars['IntType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
}

export interface IUploadTagsFilter {
  allIn?: InputMaybe<Array<Scalars['String']>>;
  anyIn?: InputMaybe<Array<Scalars['String']>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
}

export interface IUploadTitleFilter {
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matches?: InputMaybe<IStringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<IStringMatchesFilter>;
}

export enum IUploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video',
}

export interface IUploadUpdatedAtFilter {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
}

export interface IUploadVideoField {
  __typename?: 'UploadVideoField';
  duration?: Maybe<Scalars['Int']>;
  framerate?: Maybe<Scalars['Int']>;
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
}

export interface IUploadVideoFieldMp4UrlArgs {
  exactRes?: InputMaybe<IVideoMp4Res>;
  res?: InputMaybe<IVideoMp4Res>;
}

export interface IUploadVideoFieldThumbnailUrlArgs {
  format?: InputMaybe<IMuxThumbnailFormatType>;
}

export interface IUploadWidthFilter {
  eq?: InputMaybe<Scalars['IntType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
}

export enum IVideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

export interface IFocalPoint {
  __typename?: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
}

declare global {
  export type FileFragment = {
    __typename?: 'FileField';
    id: any;
    title?: string | null;
    filename: string;
    size: any;
    alt?: string | null;
    url: string;
    width?: any | null;
    height?: any | null;
  };

  export type EntityPersonFragment = {
    __typename: 'EntityPersonRecord';
    id: any;
    name?: string | null;
    slug?: string | null;
    externalLink?: string | null;
    role?: string | null;
    personCategory?: string | null;
    twitch?: string | null;
    twitter?: string | null;
    linkedin?: string | null;
    github?: string | null;
    headshot?: ({ __typename?: 'FileField' } & FileFragment) | null;
    bio?: { __typename?: 'EntityPersonModelBioField'; blocks: Array<string>; links: Array<string>; value: any } | null;
    company?: ({ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment) | null;
  };

  export type LayoutMetaFragment = {
    __typename: 'LayoutSectionRecord';
    id: any;
    idLink?: string | null;
    internalName?: string | null;
    paddingBottomDesktop?: string | null;
    paddingBottomMobile?: string | null;
    paddingBottomTablet?: string | null;
    paddingTopDesktop?: string | null;
    paddingTopMobile?: string | null;
    paddingTopTablet?: string | null;
    backgroundColor?: string | null;
  };

  export type LayoutSectionFragment = {
    __typename?: 'LayoutSectionRecord';
    component?:
      | { __typename: 'ComponentAccordionRecord'; id: any }
      | { __typename?: 'ComponentBentoBoxRecord' }
      | { __typename: 'ComponentCardDeckRecord'; id: any }
      | { __typename: 'ComponentCodeTableRecord'; id: any }
      | { __typename: 'ComponentComparisonTableRecord'; id: any }
      | { __typename: 'ComponentConversionPanelRecord'; id: any }
      | { __typename: 'ComponentFeatureListRecord'; id: any }
      | { __typename: 'ComponentHeadingRecord'; id: any }
      | { __typename: 'ComponentHeroRecord'; id: any }
      | { __typename: 'ComponentImageRecord'; id: any }
      | { __typename: 'ComponentPricingCardDeckRecord'; id: any }
      | { __typename: 'ComponentPricingTableRecord'; id: any }
      | { __typename: 'ComponentQuoteRecord'; id: any }
      | { __typename: 'ComponentQuoteSliderRecord'; id: any }
      | { __typename: 'ComponentSingleInstanceRecord'; id: any }
      | { __typename: 'ComponentSlideboxRecord'; id: any }
      | { __typename: 'ComponentSwitchbackRecord'; id: any }
      | { __typename: 'ComponentTestimonialConversionPanelRecord'; id: any }
      | { __typename: 'ComponentTrustBarRecord'; id: any }
      | { __typename: 'ComponentVideoRecord'; id: any }
      | null;
  } & LayoutMetaFragment;

  export type LayoutComponentsFragment = {
    __typename?: 'LayoutSectionRecord';
    component?:
      | ({ __typename?: 'ComponentAccordionRecord' } & ComponentAccordionFragment)
      | ({ __typename?: 'ComponentBentoBoxRecord' } & ComponentBentoBoxFragment)
      | ({ __typename?: 'ComponentCardDeckRecord' } & ComponentCardDeckFragment)
      | ({ __typename?: 'ComponentCodeTableRecord' } & ComponentCodeTableFragment & ComponentCodeTableFragment)
      | ({ __typename?: 'ComponentComparisonTableRecord' } & ComponentComparisonTableFragment)
      | ({ __typename?: 'ComponentConversionPanelRecord' } & ComponentConversionPanelFragment)
      | ({ __typename?: 'ComponentFeatureListRecord' } & ComponentFeatureListFragment)
      | ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment)
      | ({ __typename?: 'ComponentHeroRecord' } & ComponentHeroFragment)
      | ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment)
      | ({ __typename?: 'ComponentPricingCardDeckRecord' } & ComponentPricingCardDeckFragment)
      | ({ __typename?: 'ComponentPricingTableRecord' } & ComponentPricingTableFragment)
      | ({ __typename?: 'ComponentQuoteRecord' } & ComponentQuoteFragment)
      | ({ __typename?: 'ComponentQuoteSliderRecord' } & ComponentQuoteSliderFragment)
      | ({ __typename?: 'ComponentSingleInstanceRecord' } & ComponentSingleInstanceFragment)
      | ({ __typename?: 'ComponentSlideboxRecord' } & ComponentSlideboxFragment)
      | ({ __typename?: 'ComponentSwitchbackRecord' } & ComponentSwitchbackFragment)
      | ({ __typename?: 'ComponentTestimonialConversionPanelRecord' } & ComponentTestimonialConversionPanelFragment)
      | ({ __typename?: 'ComponentTrustBarRecord' } & ComponentTrustbarFragment & ComponentMultiTrustbarFragment)
      | ({ __typename?: 'ComponentVideoRecord' } & ComponentVideoFragment)
      | null;
  } & LayoutMetaFragment;

  export type SeoFragment = {
    __typename?: 'SeoField';
    description?: string | null;
    title?: string | null;
    twitterCard?: string | null;
    image?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type TemplatePageFragment = {
    __typename: 'TemplatePageRecord';
    id: any;
    internalName?: string | null;
    noIndex?: any | null;
    noHeader?: any | null;
    noFooter?: any | null;
    slug?: string | null;
    seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    sections: Array<{ __typename?: 'LayoutSectionRecord' } & LayoutComponentsFragment>;
  };

  export type TemplatePageFullFragment = {
    __typename: 'TemplatePageRecord';
    id: any;
    internalName?: string | null;
    noIndex?: any | null;
    noHeader?: any | null;
    noFooter?: any | null;
    slug?: string | null;
    seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    sections: Array<{ __typename?: 'LayoutSectionRecord' } & LayoutComponentsFragment>;
  };

  export type ComponentCallToActionFragment = {
    __typename: 'ComponentCallToActionRecord';
    id: any;
    internalName?: string | null;
    buttonType?: string | null;
    color?: string | null;
    label?: string | null;
    link?: string | null;
    openInNewWindow?: any | null;
    startIcon?: string | null;
    endIcon?: string | null;
    popup?:
      | ({ __typename?: 'ComponentFormRecord' } & ComponentFormFragment)
      | ({ __typename?: 'ComponentVideoRecord' } & ComponentVideoFragment)
      | null;
  };

  export type ComponentHeadingFragment = {
    __typename: 'ComponentHeadingRecord';
    id: any;
    internalName?: string | null;
    animate?: any | null;
    eyebrow?: string | null;
    heading?: string | null;
    headingColor?: string | null;
    headingType?: string | null;
    desktopHeadingSize?: string | null;
    mobileHeadingSize?: string | null;
    tabletHeadingSize?: string | null;
    gradientBackgroundColor?: string | null;
    bodyColor?: string | null;
    headingBody?: {
      __typename?: 'ComponentHeadingModelBodyField';
      blocks: Array<string>;
      value: any;
      links: Array<{ __typename?: 'MenuItemRecord' } & MenuItemFragment>;
    } | null;
    callToActions: Array<{ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment>;
  };

  export type ComponentImageFragment = {
    __typename: 'ComponentImageRecord';
    id: any;
    caption?: string | null;
    imageDesktop?: ({ __typename?: 'FileField' } & FileFragment) | null;
    imageMobile?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type ComponentMapFragment = {
    __typename: 'ComponentMapRecord';
    id: any;
    internalName?: string | null;
    isDarkMap?: any | null;
    location?: { __typename?: 'LatLonField'; latitude: any; longitude: any } | null;
  };

  export type EntityCompanyFragment = {
    __typename: 'EntityCompanyRecord';
    id: any;
    company?: string | null;
    siteUrl?: string | null;
    twitch?: string | null;
    twitter?: string | null;
    github?: string | null;
    facebook?: string | null;
    linkedin?: string | null;
    youtube?: string | null;
    dribbble?: string | null;
    bio?: string | null;
    businessNeeds?: string | null;
    companyLogo?: ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment) | null;
    companyDarkLogo?: ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment) | null;
    benefits: Array<{ __typename?: 'MenuPricingItemRecord' } & MenuPricingItemFragment>;
    solution: Array<{ __typename?: 'MenuItemRecord' } & MenuItemFragment>;
    industry: Array<{
      __typename?: 'MenuIndustryItemRecord';
      id: any;
      heading?: string | null;
      description?: string | null;
    }>;
  };

  export type ComponentTrustbarFragment = {
    __typename: 'ComponentTrustBarRecord';
    id: any;
    internalName?: string | null;
    isMarquee?: any | null;
    heading?: string | null;
    desktopHeadingSize?: string | null;
    mobileHeadingSize?: string | null;
    tabletHeadingSize?: string | null;
    logoHeight?: any | null;
    company: Array<{ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment>;
    callToAction?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
  };

  export type ComponentMultiTrustbarFragment = {
    __typename: 'ComponentTrustBarRecord';
    id: any;
    internalName?: string | null;
    heading?: string | null;
    desktopHeadingSize?: string | null;
    mobileHeadingSize?: string | null;
    tabletHeadingSize?: string | null;
    logoHeight?: any | null;
    company: Array<{ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment>;
    callToAction?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
    multiTrustbar: Array<{ __typename?: 'ComponentTrustBarRecord' } & ComponentTrustbarFragment>;
  };

  export type ComponentCardFragment = {
    __typename: 'ComponentCardRecord';
    id: any;
    internalName?: string | null;
    cardIcon?: string | null;
    heading?: string | null;
    noHoverEffect?: any | null;
    cardbody?: {
      __typename?: 'ComponentCardModelBodyField';
      blocks: Array<string>;
      value: any;
      links: Array<{ __typename?: 'MenuItemRecord' } & MenuItemFragment>;
    } | null;
    callToAction?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
    image?: ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment) | null;
  };

  export type ComponentIconCardDeckFragment = {
    __typename: 'ComponentCardDeckRecord';
    id: any;
    internalName?: string | null;
    variant?: string | null;
    optionalHeading?: ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment) | null;
    card: Array<
      | { __typename?: 'ComponentCardDeckRecord' }
      | ({ __typename?: 'ComponentCardRecord' } & ComponentCardFragment)
      | ({ __typename?: 'TemplateBlogRecord' } & RefBlogCardFragment)
      | ({ __typename?: 'TemplateCaseStudyRecord' } & RefTemplateCaseStudyFragment)
      | ({ __typename?: 'TemplatePodcastRecord' } & RefTemplatePodcastFragment)
    >;
    addOns: Array<{
      __typename?: 'ComponentCardDeckAddonRecord';
      id: any;
      icon?: string | null;
      body?: { __typename?: 'ComponentCardDeckAddonModelBodyField'; value: any } | null;
    }>;
  };

  export type ComponentCardDeckFragment = {
    __typename: 'ComponentCardDeckRecord';
    id: any;
    internalName?: string | null;
    variant?: string | null;
    optionalHeading?: ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment) | null;
    card: Array<
      | ({ __typename?: 'ComponentCardDeckRecord' } & ComponentIconCardDeckFragment)
      | ({ __typename?: 'ComponentCardRecord' } & ComponentCardFragment)
      | ({ __typename?: 'TemplateBlogRecord' } & RefBlogCardFragment)
      | ({ __typename?: 'TemplateCaseStudyRecord' } & RefTemplateCaseStudyFragment)
      | ({ __typename?: 'TemplatePodcastRecord' } & RefTemplatePodcastFragment)
    >;
    addOns: Array<{
      __typename?: 'ComponentCardDeckAddonRecord';
      id: any;
      icon?: string | null;
      body?: { __typename?: 'ComponentCardDeckAddonModelBodyField'; value: any } | null;
    }>;
  };

  export type ComponentTestimonialCardFragment = {
    __typename: 'ComponentTestimonialCardRecord';
    id: any;
    internalName?: string | null;
    statistics: Array<{
      __typename?: 'StatisticRecord';
      id: any;
      statisticValue?: string | null;
      statisticLabel?: string | null;
    }>;
    quote?: ({ __typename?: 'ComponentQuoteRecord' } & ComponentQuoteFragment) | null;
  };

  export type ComponentQuoteFragment = {
    __typename: 'ComponentQuoteRecord';
    id: any;
    internalName?: string | null;
    theme?: string | null;
    quoteText?: string | null;
    person?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
    quoteCompany?: ({ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment) | null;
    callToAction?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
  };

  export type ComponentQuoteSliderFragment = {
    __typename: 'ComponentQuoteSliderRecord';
    id: any;
    internalName?: string | null;
    singleRow?: any | null;
    optionalHeading?: ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment) | null;
    callToAction?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
    quotes: Array<{ __typename?: 'ComponentQuoteRecord' } & ComponentQuoteFragment>;
  };

  export type ComponentFormFragment = {
    __typename: 'ComponentFormRecord';
    id: any;
    internalName?: string | null;
    formId?: string | null;
    variant?: string | null;
    inverted?: any | null;
  };

  export type ComponentConversionPanelFragment = {
    __typename: 'ComponentConversionPanelRecord';
    id: any;
    internalName?: string | null;
    heading?: string | null;
    headingType?: string | null;
    desktopHeadingSize?: string | null;
    tabletHeadingSize?: string | null;
    mobileHeadingSize?: string | null;
    hasSocial?: any | null;
    isGrayBorder?: any | null;
    isContained?: any | null;
    body?: {
      __typename?: 'ComponentConversionPanelModelBodyField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    callToActions: Array<{ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment>;
    form?: ({ __typename?: 'ComponentFormRecord' } & ComponentFormFragment) | null;
  };

  export type ComponentTestimonialConversionPanelFragment = {
    __typename: 'ComponentTestimonialConversionPanelRecord';
    id: any;
    internalName?: string | null;
    formHeading?: string | null;
    formBody?: string | null;
    conversionHeading?: ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment) | null;
    conversionTrustBar?: ({ __typename?: 'ComponentTrustBarRecord' } & ComponentTrustbarFragment) | null;
    conversionQuote?: ({ __typename?: 'ComponentQuoteRecord' } & ComponentQuoteFragment) | null;
    conversionForm?: ({ __typename?: 'ComponentFormRecord' } & ComponentFormFragment) | null;
  };

  export type ComponentComparisonTableFragment = {
    __typename: 'ComponentComparisonTableRecord';
    id: any;
    tableTitle?: string | null;
    tableComparisons: Array<{
      __typename?: 'ComparisonTableCompanyRecord';
      id: any;
      companyData?: string | null;
      companyIcon?: ({ __typename?: 'FileField' } & FileFragment) | null;
      company?: ({ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment) | null;
    }>;
    tableSections: Array<{
      __typename?: 'ComparisonTableSectionRecord';
      id: any;
      sectionTitle?: string | null;
      sectionTable?: any | null;
    }>;
  };

  export type ComponentFooterFragment = {
    __typename: 'ComponentFooterRecord';
    id: any;
    internalName?: string | null;
    heading?: string | null;
    subhead?: string | null;
    disclaimerText?: string | null;
    menuItem: Array<
      {
        __typename?: 'MenuItemRecord';
        menuItem: Array<{ __typename?: 'MenuItemRecord' } & MenuItemFragment>;
      } & MenuItemFragment
    >;
    bottomFooter: Array<{ __typename?: 'MenuItemRecord' } & MenuItemFragment>;
    form?: ({ __typename?: 'ComponentFormRecord' } & ComponentFormFragment) | null;
  };

  export type MenuItemFragment = {
    __typename: 'MenuItemRecord';
    id: any;
    internalName?: string | null;
    heading?: string | null;
    url?: string | null;
    icon?: string | null;
    subhead?: string | null;
    iconFile?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type ComponentAccordionFragment = {
    __typename: 'ComponentAccordionRecord';
    id: any;
    internalName?: string | null;
    heading?: string | null;
    accordion: Array<{ __typename?: 'MenuAccordionItemRecord' } & MenuAccordionItemFragment>;
  };

  export type MenuAccordionItemFragment = {
    __typename: 'MenuAccordionItemRecord';
    id: any;
    internalName?: string | null;
    heading?: string | null;
    body?: {
      __typename?: 'MenuAccordionItemModelBodyField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
  };

  export type TemplateBlogFragment = {
    __typename: 'TemplateBlogRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    category?: string | null;
    excerpt?: string | null;
    publishDate?: any | null;
    _publishedAt?: any | null;
    _updatedAt: any;
    hideFromListing?: any | null;
    seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    author?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
    coAuthors: Array<{ __typename?: 'EntityPersonRecord' } & EntityPersonFragment>;
    featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
    body?: {
      __typename?: 'TemplateBlogModelBodyField';
      value: any;
      blocks: Array<{ __typename: 'HtmlTableRecord'; id: any; table?: string | null }>;
      links: Array<
        | ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment)
        | ({ __typename?: 'ComponentVideoRecord' } & ComponentVideoFragment)
      >;
    } | null;
  };

  export type RefBlogCardFragment = {
    __typename: 'TemplateBlogRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    category?: string | null;
    excerpt?: string | null;
    publishDate?: any | null;
    _publishedAt?: any | null;
    _updatedAt: any;
    hideFromListing?: any | null;
    author?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
    coAuthors: Array<{ __typename?: 'EntityPersonRecord' } & EntityPersonFragment>;
    featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type TemplateBlogListFragment = {
    __typename: 'TemplateBlogRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    category?: string | null;
    excerpt?: string | null;
    publishDate?: any | null;
    author?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
    coAuthors: Array<{ __typename?: 'EntityPersonRecord' } & EntityPersonFragment>;
    featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type TemplateSimpleBlogListFragment = {
    __typename: 'TemplateBlogRecord';
    id: any;
    author?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
  };

  export type MenuPricingItemFragment = {
    __typename: 'MenuPricingItemRecord';
    id: any;
    heading?: string | null;
    subhead?: string | null;
    body?: string | null;
    icon?: string | null;
    iconColor?: string | null;
  };

  export type ComponentPricingCardFragment = {
    __typename: 'ComponentPricingCardRecord';
    id: any;
    internalName?: string | null;
    icon?: string | null;
    headingKicker?: string | null;
    heading?: string | null;
    headingBadge?: string | null;
    subhead?: string | null;
    body?: string | null;
    bestFor?: string | null;
    price?: string | null;
    cardColor?: string | null;
    isActive?: any | null;
    models: Array<{ __typename?: 'MenuPricingItemRecord' } & MenuPricingItemFragment>;
    features: Array<{ __typename?: 'MenuPricingItemRecord' } & MenuPricingItemFragment>;
    addOns?: {
      __typename?: 'ComponentPricingCardModelAddOnsField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    support: Array<{ __typename?: 'MenuPricingItemRecord' } & MenuPricingItemFragment>;
    callToAction?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
  };

  export type ComponentPricingCardDeckFragment = {
    __typename: 'ComponentPricingCardDeckRecord';
    id: any;
    internalName?: string | null;
    cards: Array<{ __typename?: 'ComponentPricingCardRecord' } & ComponentPricingCardFragment>;
  };

  export type ComponentSingleInstanceFragment = {
    __typename: 'ComponentSingleInstanceRecord';
    id: any;
    internalName?: string | null;
    component?: string | null;
    json?: any | null;
    layout?: string | null;
    optionalHeading?: ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment) | null;
    leadershipList: Array<{ __typename?: 'EntityPersonRecord' } & EntityPersonFragment>;
    imageList: Array<{ __typename?: 'ComponentImageRecord' } & ComponentImageFragment>;
    callToActions: Array<{ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment>;
  };

  export type ComponentAnnouncementBarFragment = {
    __typename: 'ComponentAnnouncementBarRecord';
    id: any;
    internalName?: string | null;
    icon?: ({ __typename?: 'FileField' } & FileFragment) | null;
    heading?: {
      __typename?: 'ComponentAnnouncementBarModelHeadingField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    callToAction?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
  };

  export type ComponentHeroFragment = {
    __typename: 'ComponentHeroRecord';
    id: any;
    internalName?: string | null;
    layout?: string | null;
    animate?: any | null;
    heading?: string | null;
    headingColor?: string | null;
    headingType?: string | null;
    mobileHeadingSize?: string | null;
    tabletHeadingSize?: string | null;
    desktopHeadingSize?: string | null;
    bodyColor?: string | null;
    isWideMedia?: any | null;
    gradientBackgroundColor?: string | null;
    userReview?: string | null;
    headingIcons: Array<{ __typename?: 'ComponentImageRecord' } & ComponentImageFragment>;
    heroBody?: {
      __typename?: 'ComponentHeroModelBodyField';
      blocks: Array<string>;
      value: any;
      links: Array<{ __typename?: 'ComponentFormRecord' } & ComponentFormFragment>;
    } | null;
    callToActions: Array<{ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment>;
    announcementBar?: ({ __typename?: 'ComponentAnnouncementBarRecord' } & ComponentAnnouncementBarFragment) | null;
    references: Array<
      | ({ __typename?: 'TemplateBlogRecord' } & RefBlogCardFragment)
      | ({ __typename?: 'TemplateCaseStudyRecord' } & RefTemplateCaseStudyFragment)
    >;
    form?:
      | ({ __typename?: 'ComponentFormRecord' } & ComponentFormFragment)
      | ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment)
      | ({ __typename?: 'ComponentTestimonialCardRecord' } & ComponentTestimonialCardFragment)
      | ({ __typename?: 'ComponentVideoRecord' } & ComponentVideoFragment)
      | null;
  };

  export type ComponentSwitchbackFragment = {
    __typename: 'ComponentSwitchbackRecord';
    id: any;
    internalName?: string | null;
    reverse?: any | null;
    optionalHeading?: ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment) | null;
    reference?:
      | ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment)
      | ({ __typename?: 'ComponentMapRecord' } & ComponentMapFragment)
      | ({ __typename?: 'ComponentSlideboxRecord' } & ComponentSlideboxFragment)
      | ({ __typename?: 'ComponentVideoRecord' } & ComponentVideoFragment)
      | null;
  };

  export type ComponentSlideboxItemFragment = {
    __typename: 'ComponentSlideboxItemRecord';
    id: any;
    internalName?: string | null;
    heading?: string | null;
    liveStreamingUrl?: string | null;
    audio?: ({ __typename?: 'FileField' } & FileFragment) | null;
    audioName?: {
      __typename?: 'ComponentSlideboxItemModelAudioNameField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    requestUrl?: {
      __typename?: 'ComponentSlideboxItemModelRequestUrlField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    payload?: {
      __typename?: 'ComponentSlideboxItemModelPayloadField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    response?: {
      __typename?: 'ComponentSlideboxItemModelResponseField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    transcript?: {
      __typename?: 'ComponentSlideboxItemModelTranscriptField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
  };

  export type ComponentSlideboxFragment = {
    __typename: 'ComponentSlideboxRecord';
    id: any;
    internalName?: string | null;
    optionalHeading?: ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment) | null;
    items: Array<
      | ({ __typename?: 'ComponentFeatureListRecord' } & ComponentFeatureListFragment)
      | ({ __typename?: 'ComponentSlideboxItemRecord' } & ComponentSlideboxItemFragment)
    >;
  };

  export type ComponentHeaderFragment = {
    __typename: 'ComponentHeaderRecord';
    id: any;
    internalName?: string | null;
    showGlobalSearch?: any | null;
    logo?: ({ __typename?: 'FileField' } & FileFragment) | null;
    menu: Array<
      {
        __typename?: 'MenuItemRecord';
        menuItem: Array<
          {
            __typename?: 'MenuItemRecord';
            menuItem: Array<{ __typename?: 'MenuItemRecord' } & MenuItemFragment>;
          } & MenuItemFragment
        >;
      } & MenuItemFragment
    >;
    callToActions: Array<{ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment>;
  };

  export type TemplateCaseStudyListFragment = {
    __typename: 'TemplateCaseStudyRecord';
    id: any;
    internalName?: string | null;
    title?: string | null;
    category?: string | null;
    slug?: string | null;
    featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type TemplateCaseStudyFragment = {
    __typename: 'TemplateCaseStudyRecord';
    id: any;
    internalName?: string | null;
    title?: string | null;
    category?: string | null;
    download?: string | null;
    excerpt?: string | null;
    slug?: string | null;
    body?: {
      __typename?: 'TemplateCaseStudyModelBodyField';
      value: any;
      links: Array<{ __typename?: 'ComponentImageRecord' } & ComponentImageFragment>;
    } | null;
    company?: ({ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment) | null;
    featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
    seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    sections: Array<{ __typename?: 'LayoutSectionRecord' } & LayoutComponentsFragment>;
  };

  export type RefTemplateCaseStudyFragment = {
    __typename: 'TemplateCaseStudyRecord';
    id: any;
    internalName?: string | null;
    title?: string | null;
    category?: string | null;
    slug?: string | null;
    excerpt?: string | null;
    download?: string | null;
    featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
    company?: ({ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment) | null;
  };

  export type TemplateGlossaryFragment = {
    __typename?: 'TemplateGlossaryRecord';
    id: any;
    slug?: string | null;
    title?: string | null;
    categoryPage?: any | null;
    _updatedAt: any;
    seo?: { __typename?: 'SeoField'; description?: string | null; title?: string | null } | null;
    excerpt?: { __typename?: 'TemplateGlossaryModelExcerptField'; value: any } | null;
    body?: {
      __typename?: 'TemplateGlossaryModelBodyField';
      value: any;
      blocks: Array<{ __typename: 'HtmlTableRecord'; id: any; table?: string | null }>;
      links: Array<
        | ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment)
        | ({ __typename?: 'ComponentVideoRecord' } & ComponentVideoFragment)
      >;
    } | null;
  };

  export type TemplateWebinarFragment = {
    __typename: 'TemplateExternalWebinarRecord';
    id: any;
    internalName?: string | null;
    title?: string | null;
    url?: string | null;
    thumbnail?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type TemplateResourcesFragment = {
    __typename: 'TemplateResourcesExternalRecord';
    id: any;
    internalName?: string | null;
    title?: string | null;
    resourceType?: string | null;
    link?: string | null;
    thumbnail?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type MenuFeatureItemFragment = {
    __typename: 'MenuFeatureItemRecord';
    id: any;
    internalName?: string | null;
    heading?: string | null;
    subhead?: string | null;
    featureCode?: string | null;
    isTranslationLayout?: any | null;
    content?: {
      __typename?: 'MenuFeatureItemModelContentField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    sideContent?: {
      __typename?: 'MenuFeatureItemModelSideContentField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
  };

  export type ComponentFeatureListFragment = {
    __typename: 'ComponentFeatureListRecord';
    id: any;
    internalName?: string | null;
    layout?: string | null;
    optionalHeading?: ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment) | null;
    audio?: ({ __typename?: 'FileField' } & FileFragment) | null;
    features: Array<{ __typename?: 'MenuFeatureItemRecord' } & MenuFeatureItemFragment>;
  };

  export type TemplateNewsFragment = {
    __typename: 'TemplateNewsRecord';
    id: any;
    internalName?: string | null;
    title?: string | null;
    url?: string | null;
    publishDate?: any | null;
    company?: ({ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment) | null;
  };

  export type TemplateChangelogFragment = {
    __typename: 'TemplateChangelogRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    category?: any | null;
    publishDate?: any | null;
    seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    author?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
    body?: {
      __typename?: 'TemplateChangelogModelBodyField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
  };

  export type EntityTagFragment = {
    __typename: 'EntityTagRecord';
    id: any;
    internalName?: string | null;
    heading?: string | null;
    category?: string | null;
  };

  export type TemplateBuiltWithDeepgramFragment = {
    __typename: 'TemplateBuiltWithDeepgramRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    excerpt?: string | null;
    publishDate?: any | null;
    videoUrl?: string | null;
    seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    author?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
    body?: {
      __typename?: 'TemplateBuiltWithDeepgramModelBodyField';
      blocks: Array<string>;
      value: any;
      links: Array<{ __typename?: 'ComponentImageRecord' } & ComponentImageFragment>;
    } | null;
    caseStudyReference?: {
      __typename: 'TemplateCaseStudyRecord';
      id: any;
      internalName?: string | null;
      slug?: string | null;
    } | null;
    featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type TemplateBuiltWithDeepgramListFragment = {
    __typename: 'TemplateBuiltWithDeepgramRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    excerpt?: string | null;
    publishDate?: any | null;
    featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
    tags: Array<{ __typename?: 'EntityTagRecord' } & EntityTagFragment>;
  };

  export type ComponentVideoFragment = {
    __typename: 'ComponentVideoRecord';
    id: any;
    internalName?: string | null;
    title?: string | null;
    videoUrl?: string | null;
    showOnResourceHub?: any | null;
    autoPlay?: any | null;
    thumbnail?: ({ __typename?: 'FileField' } & FileFragment) | null;
    videoFile?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type ComponentBentoSplitContentFragment = {
    __typename: 'ComponentBentoSplitContentRecord';
    id: any;
    internalName?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    eyebrowIcon?: ({ __typename?: 'FileField' } & FileFragment) | null;
    content?: {
      __typename?: 'ComponentBentoSplitContentModelContentField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    button?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
    reference?: ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment) | null;
  };

  export type ComponentBentoStackedImageFragment = {
    __typename: 'ComponentBentoStackedImageRecord';
    id: any;
    internalName?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    topAsset?: any | null;
    eyebrowIcon?: ({ __typename?: 'FileField' } & FileFragment) | null;
    content?: {
      __typename?: 'ComponentBentoStackedImageModelContentField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    button?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
    reference?: ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment) | null;
  };

  export type ComponentBentoTrustBarFragment = {
    __typename: 'ComponentBentoTrustBarRecord';
    id: any;
    internalName?: string | null;
    heading?: string | null;
    topLogos: Array<{ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment>;
    bottomLogos: Array<{ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment>;
    button?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
  };

  export type ComponentBentoBoxFragment = {
    __typename: 'ComponentBentoBoxRecord';
    id: any;
    internalName?: string | null;
    cards: Array<
      | ({ __typename?: 'ComponentBentoSplitContentRecord' } & ComponentBentoSplitContentFragment)
      | ({ __typename?: 'ComponentBentoStackedImageRecord' } & ComponentBentoStackedImageFragment)
      | ({ __typename?: 'ComponentBentoTrustBarRecord' } & ComponentBentoTrustBarFragment)
    >;
  };

  export type TemplateLegalFragment = {
    __typename: 'TemplateLegalRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    body?: {
      __typename?: 'TemplateLegalModelBodyField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
  };

  export type TemplatePodcastFragment = {
    __typename: 'TemplatePodcastRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    podcastUrl?: string | null;
    podcastAudioUrl?: string | null;
    podcastAudioTitle?: string | null;
    publishDate?: any | null;
    seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    body?: {
      __typename?: 'TemplatePodcastModelBodyField';
      blocks: Array<string>;
      value: any;
      links: Array<
        | ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment)
        | ({ __typename?: 'ComponentQuoteRecord' } & ComponentQuoteFragment)
        | ({ __typename?: 'ComponentVideoRecord' } & ComponentVideoFragment)
      >;
    } | null;
    guest: Array<{ __typename?: 'EntityPersonRecord' } & EntityPersonFragment>;
    hostedBy?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
  };

  export type RefTemplatePodcastFragment = {
    __typename: 'TemplatePodcastRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    podcastUrl?: string | null;
    podcastAudioUrl?: string | null;
    podcastAudioTitle?: string | null;
    publishDate?: any | null;
    seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    guest: Array<{ __typename?: 'EntityPersonRecord' } & EntityPersonFragment>;
    hostedBy?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
  };

  export type TemplatePodcastListFragment = {
    __typename: 'TemplatePodcastRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
  };

  export type TemplatePartnerFragment = {
    __typename: 'TemplatePartnerRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    category?: string | null;
    youtubeUrl?: string | null;
    seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    excerpt?: {
      __typename?: 'TemplatePartnerModelExcerptField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    thumbnailImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
    caseStudy?: ({ __typename?: 'TemplateCaseStudyRecord' } & RefTemplateCaseStudyFragment) | null;
    featureListHeading?: ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment) | null;
    features: Array<{ __typename?: 'MenuFeatureItemRecord' } & MenuFeatureItemFragment>;
  };

  export type TemplatePartnerListFragment = {
    __typename: 'TemplatePartnerRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    category?: string | null;
    caseStudy?: {
      __typename?: 'TemplateCaseStudyRecord';
      featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
    } | null;
    thumbnailImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type EntityCategoryFragment = {
    __typename: 'EntityCategoryRecord';
    id: any;
    categoryName?: string | null;
    title?: string | null;
    description?: {
      __typename?: 'EntityCategoryModelDescriptionField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    image?: ({ __typename?: 'FileField' } & FileFragment) | null;
  };

  export type ComponentCodeTableFragment = {
    __typename: 'ComponentCodeTableRecord';
    id: any;
    tableHeading?: {
      __typename?: 'ComponentHeadingRecord';
      heading?: string | null;
      body?: { __typename?: 'ComponentHeadingModelBodyField'; value: any } | null;
    } | null;
    codeSnippet: Array<{
      __typename?: 'CodeBlockRecord';
      id: any;
      code?: { __typename?: 'CodeBlockModelCodeField'; value: any } | null;
    }>;
  };

  export type TemplateEventsDetailFragment = {
    __typename: 'TemplateEventsDetailRecord';
    id: any;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    excerpt?: string | null;
    eventFormId?: string | null;
    eventType?: string | null;
    eventDateTime?: any | null;
    description?: {
      __typename?: 'TemplateEventsDetailModelDescriptionField';
      blocks: Array<string>;
      links: Array<string>;
      value: any;
    } | null;
    speakers: Array<{ __typename?: 'EntityPersonRecord' } & EntityPersonFragment>;
    eventGallery: Array<{ __typename?: 'ComponentImageRecord' } & ComponentImageFragment>;
    eventLocation?: ({ __typename?: 'ComponentSwitchbackRecord' } & ComponentSwitchbackFragment) | null;
  };

  export type ComponentPricingTableFragment = {
    __typename: 'ComponentPricingTableRecord';
    id: any;
    title?: string | null;
    subheading?: string | null;
    tables: Array<{
      __typename?: 'TableRecord';
      id: any;
      tabLabel?: string | null;
      labelIcon?: string | null;
      tableRows: Array<{
        __typename?: 'TableRowRecord';
        id: any;
        headerRow?: any | null;
        highlightedRow?: any | null;
        tableRowGroups: Array<{
          __typename?: 'TableRowGroupRecord';
          id: any;
          tableCells: Array<{
            __typename?: 'TableCellRecord';
            id: any;
            text?: string | null;
            textAlignment?: string | null;
            showTooltip?: any | null;
            tooltipText?: string | null;
            rowSpan?: any | null;
            textBadge?: any | null;
            icon?: string | null;
            backgroundColor?: string | null;
            callToAction?: ({ __typename?: 'ComponentCallToActionRecord' } & ComponentCallToActionFragment) | null;
          }>;
        }>;
      }>;
    }>;
  };

  export type GetComponentHeadingQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentHeadingQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentHeadingRecord' } & ComponentHeadingFragment) | null;
  };

  export type GetComponentImageQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentImageQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentImageRecord' } & ComponentImageFragment) | null;
  };

  export type GetComponentTrustBarQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentTrustBarQuery = {
    __typename?: 'Query';
    data?:
      | ({
          __typename?: 'ComponentTrustBarRecord';
          multiTrustbar: Array<{ __typename?: 'ComponentTrustBarRecord' } & ComponentTrustbarFragment>;
        } & ComponentTrustbarFragment)
      | null;
  };

  export type GetComponentCardDeckQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentCardDeckQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentCardDeckRecord' } & ComponentIconCardDeckFragment) | null;
  };

  export type GetComponentQuoteQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentQuoteQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentQuoteRecord' } & ComponentQuoteFragment) | null;
  };

  export type GetComponentQuoteSliderQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentQuoteSliderQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentQuoteSliderRecord' } & ComponentQuoteSliderFragment) | null;
  };

  export type GetComponentConversionPanelQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentConversionPanelQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentConversionPanelRecord' } & ComponentConversionPanelFragment) | null;
  };

  export type GetComponentAccordionQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentAccordionQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentAccordionRecord' } & ComponentAccordionFragment) | null;
  };

  export type GetComponentSingleInstanceQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentSingleInstanceQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentSingleInstanceRecord' } & ComponentSingleInstanceFragment) | null;
  };

  export type GetComponentSlideboxQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentSlideboxQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentSlideboxRecord' } & ComponentSlideboxFragment) | null;
  };

  export type GetComponentHeroQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentHeroQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentHeroRecord' } & ComponentHeroFragment) | null;
  };

  export type GetComponentSwitchbackQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentSwitchbackQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentSwitchbackRecord' } & ComponentSwitchbackFragment) | null;
  };

  export type GetComponentTestimonialConversionPanelQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentTestimonialConversionPanelQuery = {
    __typename?: 'Query';
    data?:
      | ({ __typename?: 'ComponentTestimonialConversionPanelRecord' } & ComponentTestimonialConversionPanelFragment)
      | null;
  };

  export type GetComponentPricingCardDeckQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentPricingCardDeckQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentPricingCardDeckRecord' } & ComponentPricingCardDeckFragment) | null;
  };

  export type GetComponentFeatureListQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentFeatureListQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentFeatureListRecord' } & ComponentFeatureListFragment) | null;
  };

  export type GetComponentComparisonTableQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentComparisonTableQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentComparisonTableRecord' } & ComponentComparisonTableFragment) | null;
  };

  export type GetComponentCodeTableQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentCodeTableQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentCodeTableRecord' } & ComponentCodeTableFragment) | null;
  };

  export type GetComponentVideoQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentVideoQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentVideoRecord' } & ComponentVideoFragment) | null;
  };

  export type GetComponentPricingTableQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentPricingTableQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentPricingTableRecord' } & ComponentPricingTableFragment) | null;
  };

  export type GetComponentBentoSplitContentQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentBentoSplitContentQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentBentoSplitContentRecord' } & ComponentBentoSplitContentFragment) | null;
  };

  export type GetComponentBentoStackedImageQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentBentoStackedImageQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentBentoStackedImageRecord' } & ComponentBentoStackedImageFragment) | null;
  };

  export type GetComponentBentoTrustBarQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentBentoTrustBarQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentBentoTrustBarRecord' } & ComponentBentoTrustBarFragment) | null;
  };

  export type GetComponentBentoBoxQueryVariables = Exact<{
    id: Scalars['ItemId'];
  }>;

  export type GetComponentBentoBoxQuery = {
    __typename?: 'Query';
    data?: ({ __typename?: 'ComponentBentoBoxRecord' } & ComponentBentoBoxFragment) | null;
  };

  export type DefaultPagePathsQueryVariables = Exact<{ [key: string]: never }>;

  export type DefaultPagePathsQuery = {
    __typename?: 'Query';
    allTemplatePages: Array<{ __typename?: 'TemplatePageRecord'; id: any; slug?: string | null }>;
    allTemplateLegals: Array<{ __typename?: 'TemplateLegalRecord'; id: any; slug?: string | null }>;
    allHideBlogs: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
  };

  export type AllTemplatePageQueryVariables = Exact<{ [key: string]: never }>;

  export type AllTemplatePageQuery = {
    __typename?: 'Query';
    allTemplatePages: Array<{ __typename?: 'TemplatePageRecord'; id: any; slug?: string | null }>;
  };

  export type TemplatePageDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type TemplatePageDataQuery = {
    __typename?: 'Query';
    templatePage?: ({ __typename?: 'TemplatePageRecord' } & TemplatePageFragment) | null;
  };

  export type TemplatePageFullDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type TemplatePageFullDataQuery = {
    __typename?: 'Query';
    templatePage?: ({ __typename?: 'TemplatePageRecord' } & TemplatePageFullFragment) | null;
  };

  export type GlobalCompanyHeaderFooterQueryVariables = Exact<{ [key: string]: never }>;

  export type GlobalCompanyHeaderFooterQuery = {
    __typename?: 'Query';
    componentHeader?: ({ __typename?: 'ComponentHeaderRecord' } & ComponentHeaderFragment) | null;
    simpleComponentHeader?: ({ __typename?: 'ComponentHeaderRecord' } & ComponentHeaderFragment) | null;
    componentFooter?: ({ __typename?: 'ComponentFooterRecord' } & ComponentFooterFragment) | null;
    simpleComponentFooter?: ({ __typename?: 'ComponentFooterRecord' } & ComponentFooterFragment) | null;
    entityCompany?: ({ __typename?: 'EntityCompanyRecord' } & EntityCompanyFragment) | null;
  };

  export type BlogAllSlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type BlogAllSlugsQuery = {
    __typename?: 'Query';
    blogs1: Array<{ __typename?: 'TemplateBlogRecord'; id: any; slug?: string | null }>;
    blogs2: Array<{ __typename?: 'TemplateBlogRecord'; id: any; slug?: string | null }>;
    blogs3: Array<{ __typename?: 'TemplateBlogRecord'; id: any; slug?: string | null }>;
    blogs4: Array<{ __typename?: 'TemplateBlogRecord'; id: any; slug?: string | null }>;
    blogs5: Array<{ __typename?: 'TemplateBlogRecord'; id: any; slug?: string | null }>;
  };

  export type BlogDetailDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type BlogDetailDataQuery = {
    __typename?: 'Query';
    templateBlog?: ({ __typename?: 'TemplateBlogRecord' } & TemplateBlogFragment) | null;
    componentConversionPanel?:
      | ({ __typename?: 'ComponentConversionPanelRecord' } & ComponentConversionPanelFragment)
      | null;
    related: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
  };

  export type CategoryBlogListingQueryVariables = Exact<{
    category?: InputMaybe<Scalars['String']>;
  }>;

  export type CategoryBlogListingQuery = {
    __typename?: 'Query';
    blogList1: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
    blogList2: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
  };

  export type AllBlogListingQueryVariables = Exact<{ [key: string]: never }>;

  export type AllBlogListingQuery = {
    __typename?: 'Query';
    blogList1: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
    blogList2: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
    blogList3: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
    blogList4: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
    blogList5: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
  };

  export type AllHideBlogListingQueryVariables = Exact<{ [key: string]: never }>;

  export type AllHideBlogListingQuery = {
    __typename?: 'Query';
    allHideblogs: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
  };

  export type AllSimpleBlogListingQueryVariables = Exact<{ [key: string]: never }>;

  export type AllSimpleBlogListingQuery = {
    __typename?: 'Query';
    blogList1: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateSimpleBlogListFragment>;
    blogList2: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateSimpleBlogListFragment>;
    blogList3: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateSimpleBlogListFragment>;
    blogList4: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateSimpleBlogListFragment>;
    blogList5: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateSimpleBlogListFragment>;
  };

  export type AllBlogListingPerPageQueryVariables = Exact<{
    skip?: InputMaybe<Scalars['IntType']>;
  }>;

  export type AllBlogListingPerPageQuery = {
    __typename?: 'Query';
    allTemplateBlogs: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
  };

  export type AllBlogListingPerPageWithSearchFilterQueryVariables = Exact<{
    skip?: InputMaybe<Scalars['IntType']>;
    search: Scalars['String'];
  }>;

  export type AllBlogListingPerPageWithSearchFilterQuery = {
    __typename?: 'Query';
    allTemplateBlogs: Array<{ __typename?: 'TemplateBlogRecord' } & TemplateBlogListFragment>;
  };

  export type AllAuthorQueryVariables = Exact<{ [key: string]: never }>;

  export type AllAuthorQuery = {
    __typename?: 'Query';
    allEntityPeople: Array<{ __typename?: 'EntityPersonRecord' } & EntityPersonFragment>;
  };

  export type AuthorAllSlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type AuthorAllSlugsQuery = {
    __typename?: 'Query';
    allEntityPeople: Array<{
      __typename?: 'EntityPersonRecord';
      id: any;
      name?: string | null;
      slug?: string | null;
      externalLink?: string | null;
    }>;
  };

  export type AuthorDetailDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type AuthorDetailDataQuery = {
    __typename?: 'Query';
    entityPerson?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
  };

  export type GlossarySlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type GlossarySlugsQuery = {
    __typename?: 'Query';
    glossarySlugs: Array<{
      __typename?: 'TemplateGlossaryRecord';
      id: any;
      categoryPage?: any | null;
      slug?: string | null;
      subcategoryPages: Array<{ __typename?: 'TemplateGlossaryRecord'; id: any; slug?: string | null }>;
    }>;
  };

  export type AllGlossaryDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type AllGlossaryDataQuery = {
    __typename?: 'Query';
    templateGlossary?:
      | ({
          __typename?: 'TemplateGlossaryRecord';
          subcategoryPages: Array<{ __typename?: 'TemplateGlossaryRecord' } & TemplateGlossaryFragment>;
        } & TemplateGlossaryFragment)
      | null;
    glossaryNav: Array<{
      __typename?: 'TemplateGlossaryRecord';
      id: any;
      slug?: string | null;
      title?: string | null;
      categoryPage?: any | null;
      subcategoryPages: Array<{
        __typename?: 'TemplateGlossaryRecord';
        id: any;
        slug?: string | null;
        title?: string | null;
      }>;
    }>;
    componentConversionPanel?:
      | ({ __typename?: 'ComponentConversionPanelRecord' } & ComponentConversionPanelFragment)
      | null;
  };

  export type AuthorRelatedDataQueryVariables = Exact<{
    id?: InputMaybe<Scalars['ItemId']>;
  }>;

  export type AuthorRelatedDataQuery = {
    __typename?: 'Query';
    allTemplateBlogs: Array<{ __typename?: 'TemplateBlogRecord' } & RefBlogCardFragment>;
    componentConversionPanel?:
      | ({ __typename?: 'ComponentConversionPanelRecord' } & ComponentConversionPanelFragment)
      | null;
  };

  export type AllTemplateCaseStudyQueryVariables = Exact<{ [key: string]: never }>;

  export type AllTemplateCaseStudyQuery = {
    __typename?: 'Query';
    allTemplateCaseStudies: Array<{ __typename?: 'TemplateCaseStudyRecord'; id: any; slug?: string | null }>;
  };

  export type TemplateCaseStudyDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type TemplateCaseStudyDataQuery = {
    __typename?: 'Query';
    templateCaseStudy?: ({ __typename?: 'TemplateCaseStudyRecord' } & TemplateCaseStudyFragment) | null;
    related: Array<{ __typename?: 'TemplateCaseStudyRecord' } & TemplateCaseStudyListFragment>;
  };

  export type AllCaseStudyListQueryVariables = Exact<{ [key: string]: never }>;

  export type AllCaseStudyListQuery = {
    __typename?: 'Query';
    allTemplateCaseStudies: Array<{ __typename?: 'TemplateCaseStudyRecord' } & TemplateCaseStudyListFragment>;
  };

  export type AllWebinarListQueryVariables = Exact<{ [key: string]: never }>;

  export type AllWebinarListQuery = {
    __typename?: 'Query';
    allTemplateExternalWebinars: Array<{ __typename?: 'TemplateExternalWebinarRecord' } & TemplateWebinarFragment>;
  };

  export type AllResourceListQueryVariables = Exact<{ [key: string]: never }>;

  export type AllResourceListQuery = {
    __typename?: 'Query';
    allTemplateResourcesExternals: Array<
      { __typename?: 'TemplateResourcesExternalRecord' } & TemplateResourcesFragment
    >;
  };

  export type ResourceDataQueryVariables = Exact<{ [key: string]: never }>;

  export type ResourceDataQuery = {
    __typename?: 'Query';
    blogs: Array<{ __typename?: 'TemplateBlogRecord' } & RefBlogCardFragment>;
    tutorials: Array<{ __typename?: 'TemplateBlogRecord' } & RefBlogCardFragment>;
    allTemplateCaseStudies: Array<{ __typename?: 'TemplateCaseStudyRecord' } & RefTemplateCaseStudyFragment>;
    allTemplateResourcesExternals: Array<
      { __typename?: 'TemplateResourcesExternalRecord' } & TemplateResourcesFragment
    >;
    allTemplateExternalWebinars: Array<{ __typename?: 'TemplateExternalWebinarRecord' } & TemplateWebinarFragment>;
  };

  export type ChangelogDataQueryVariables = Exact<{ [key: string]: never }>;

  export type ChangelogDataQuery = {
    __typename?: 'Query';
    allTemplateChangelogs: Array<{ __typename?: 'TemplateChangelogRecord' } & TemplateChangelogFragment>;
  };

  export type ChangelogAllSlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type ChangelogAllSlugsQuery = {
    __typename?: 'Query';
    allTemplateChangelogs: Array<{ __typename?: 'TemplateChangelogRecord'; id: any; slug?: string | null }>;
  };

  export type ChangelogDetailDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type ChangelogDetailDataQuery = {
    __typename?: 'Query';
    templateChangelog?: ({ __typename?: 'TemplateChangelogRecord' } & TemplateChangelogFragment) | null;
    componentConversionPanel?:
      | ({ __typename?: 'ComponentConversionPanelRecord' } & ComponentConversionPanelFragment)
      | null;
  };

  export type AllTemplateNewsQueryVariables = Exact<{ [key: string]: never }>;

  export type AllTemplateNewsQuery = {
    __typename?: 'Query';
    allTemplateNews: Array<{ __typename?: 'TemplateNewsRecord' } & TemplateNewsFragment>;
  };

  export type AllTemplateBuiltWithDeepgramSlugQueryVariables = Exact<{ [key: string]: never }>;

  export type AllTemplateBuiltWithDeepgramSlugQuery = {
    __typename?: 'Query';
    allTemplateBuiltWithDeepgrams: Array<{
      __typename?: 'TemplateBuiltWithDeepgramRecord';
      id: any;
      slug?: string | null;
    }>;
  };

  export type AllTemplateBuiltWithDeepgramQueryVariables = Exact<{ [key: string]: never }>;

  export type AllTemplateBuiltWithDeepgramQuery = {
    __typename?: 'Query';
    allTemplateBuiltWithDeepgrams: Array<
      { __typename?: 'TemplateBuiltWithDeepgramRecord' } & TemplateBuiltWithDeepgramListFragment
    >;
  };

  export type AllTagsQueryVariables = Exact<{ [key: string]: never }>;

  export type AllTagsQuery = {
    __typename?: 'Query';
    allEntityTags: Array<{ __typename?: 'EntityTagRecord' } & EntityTagFragment>;
  };

  export type BuiltWithDeepgramDetailDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type BuiltWithDeepgramDetailDataQuery = {
    __typename?: 'Query';
    templateBuiltWithDeepgram?:
      | ({ __typename?: 'TemplateBuiltWithDeepgramRecord' } & TemplateBuiltWithDeepgramFragment)
      | null;
    componentConversionPanel?:
      | ({ __typename?: 'ComponentConversionPanelRecord' } & ComponentConversionPanelFragment)
      | null;
  };

  export type LegalDetailDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type LegalDetailDataQuery = {
    __typename?: 'Query';
    templateLegal?: ({ __typename?: 'TemplateLegalRecord' } & TemplateLegalFragment) | null;
    componentConversionPanel?:
      | ({ __typename?: 'ComponentConversionPanelRecord' } & ComponentConversionPanelFragment)
      | null;
  };

  export type LegalAllSlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type LegalAllSlugsQuery = {
    __typename?: 'Query';
    allTemplateLegals: Array<{ __typename?: 'TemplateLegalRecord'; id: any; slug?: string | null }>;
  };

  export type PodcastDetailDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type PodcastDetailDataQuery = {
    __typename?: 'Query';
    templatePodcast?: ({ __typename?: 'TemplatePodcastRecord' } & TemplatePodcastFragment) | null;
    componentConversionPanel?:
      | ({ __typename?: 'ComponentConversionPanelRecord' } & ComponentConversionPanelFragment)
      | null;
    related: Array<{ __typename?: 'TemplatePodcastRecord' } & RefTemplatePodcastFragment>;
  };

  export type AllPodcastSlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type AllPodcastSlugsQuery = {
    __typename?: 'Query';
    allTemplatePodcasts: Array<{ __typename?: 'TemplatePodcastRecord'; id: any; slug?: string | null }>;
  };

  export type AllPartnerSlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type AllPartnerSlugsQuery = {
    __typename?: 'Query';
    allTemplatePartners: Array<{ __typename?: 'TemplatePartnerRecord'; id: any; slug?: string | null }>;
  };

  export type AllPartnerListQueryVariables = Exact<{ [key: string]: never }>;

  export type AllPartnerListQuery = {
    __typename?: 'Query';
    allTemplatePartners: Array<{ __typename?: 'TemplatePartnerRecord' } & TemplatePartnerListFragment>;
  };

  export type PartnerDetailDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type PartnerDetailDataQuery = {
    __typename?: 'Query';
    templatePartner?: ({ __typename?: 'TemplatePartnerRecord' } & TemplatePartnerFragment) | null;
    componentConversionPanel?:
      | ({ __typename?: 'ComponentConversionPanelRecord' } & ComponentConversionPanelFragment)
      | null;
    related: Array<{ __typename?: 'TemplatePartnerRecord' } & TemplatePartnerListFragment>;
  };

  export type AllRedirectsQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type AllRedirectsQuery = {
    __typename?: 'Query';
    redirects?: { __typename?: 'ItemRedirectRecord'; newSlug?: string | null; originalSlug?: string | null } | null;
  };

  export type BlogCategoryMetaQueryVariables = Exact<{
    name?: InputMaybe<Scalars['String']>;
  }>;

  export type BlogCategoryMetaQuery = {
    __typename?: 'Query';
    categoryMeta: Array<{ __typename?: 'EntityCategoryRecord' } & EntityCategoryFragment>;
  };

  export type AllCustomPageMetaQueryVariables = Exact<{ [key: string]: never }>;

  export type AllCustomPageMetaQuery = {
    __typename?: 'Query';
    pageMetaData?: { __typename?: 'CustomPageSeoRecord'; metaData?: any | null } | null;
  };

  export type AllEventsQueryVariables = Exact<{ [key: string]: never }>;

  export type AllEventsQuery = {
    __typename?: 'Query';
    allTemplateEventsDetails: Array<{ __typename: 'TemplateEventsDetailRecord'; id: any; slug?: string | null }>;
  };

  export type AllEventDetailsQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type AllEventDetailsQuery = {
    __typename?: 'Query';
    templateEventsDetail?: ({ __typename?: 'TemplateEventsDetailRecord' } & TemplateEventsDetailFragment) | null;
  };

  export type PageMetaSeoQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type PageMetaSeoQuery = {
    __typename?: 'Query';
    templatePage?: {
      __typename?: 'TemplatePageRecord';
      seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
    } | null;
  };

  export type RssChangelogQueryVariables = Exact<{ [key: string]: never }>;

  export type RssChangelogQuery = {
    __typename?: 'Query';
    allTemplateChangelogs: Array<{
      __typename?: 'TemplateChangelogRecord';
      id: any;
      title?: string | null;
      description?: string | null;
      slug?: string | null;
      publishDate?: any | null;
      category?: any | null;
      seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
      author?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
    }>;
  };

  export type RssArticlesQueryVariables = Exact<{ [key: string]: never }>;

  export type RssArticlesQuery = {
    __typename?: 'Query';
    allTemplateBlogs: Array<{
      __typename?: 'TemplateBlogRecord';
      id: any;
      slug?: string | null;
      title?: string | null;
      category?: string | null;
      excerpt?: string | null;
      publishDate?: any | null;
      seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
      author?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
      coAuthors: Array<{ __typename?: 'EntityPersonRecord' } & EntityPersonFragment>;
      featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
    }>;
  };

  export type RssArticlesByCategoryQueryVariables = Exact<{
    category?: InputMaybe<Scalars['String']>;
  }>;

  export type RssArticlesByCategoryQuery = {
    __typename?: 'Query';
    categoryBlogs: Array<{
      __typename?: 'TemplateBlogRecord';
      id: any;
      slug?: string | null;
      title?: string | null;
      category?: string | null;
      excerpt?: string | null;
      publishDate?: any | null;
      seo?: ({ __typename?: 'SeoField' } & SeoFragment) | null;
      author?: ({ __typename?: 'EntityPersonRecord' } & EntityPersonFragment) | null;
      coAuthors: Array<{ __typename?: 'EntityPersonRecord' } & EntityPersonFragment>;
      featuredImage?: ({ __typename?: 'FileField' } & FileFragment) | null;
    }>;
  };
}
