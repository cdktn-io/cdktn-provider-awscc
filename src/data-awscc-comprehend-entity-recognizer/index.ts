/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccComprehendEntityRecognizerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer#id DataAwsccComprehendEntityRecognizer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations {
}

export function dataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsToTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsToHclTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }

  // test_s3_uri - computed: true, optional: false, required: false
  public get testS3Uri() {
    return this.getStringAttribute('test_s3_uri');
  }
}
export interface DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests {
}

export function dataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsToTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsToHclTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotation_data_s3_uri - computed: true, optional: false, required: false
  public get annotationDataS3Uri() {
    return this.getStringAttribute('annotation_data_s3_uri');
  }

  // attribute_names - computed: true, optional: false, required: false
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }

  // document_type - computed: true, optional: false, required: false
  public get documentType() {
    return this.getStringAttribute('document_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }

  // source_documents_s3_uri - computed: true, optional: false, required: false
  public get sourceDocumentsS3Uri() {
    return this.getStringAttribute('source_documents_s3_uri');
  }

  // split - computed: true, optional: false, required: false
  public get split() {
    return this.getStringAttribute('split');
  }
}

export class DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference {
    return new DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComprehendEntityRecognizerInputDataConfigDocuments {
}

export function dataAwsccComprehendEntityRecognizerInputDataConfigDocumentsToTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfigDocuments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendEntityRecognizerInputDataConfigDocumentsToHclTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfigDocuments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComprehendEntityRecognizerInputDataConfigDocuments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendEntityRecognizerInputDataConfigDocuments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_format - computed: true, optional: false, required: false
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }

  // test_s3_uri - computed: true, optional: false, required: false
  public get testS3Uri() {
    return this.getStringAttribute('test_s3_uri');
  }
}
export interface DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct {
}

export function dataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructToTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructToHclTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes {
}

export function dataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesToTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesToHclTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference {
    return new DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComprehendEntityRecognizerInputDataConfig {
}

export function dataAwsccComprehendEntityRecognizerInputDataConfigToTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendEntityRecognizerInputDataConfigToHclTerraform(struct?: DataAwsccComprehendEntityRecognizerInputDataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComprehendEntityRecognizerInputDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendEntityRecognizerInputDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // augmented_manifests - computed: true, optional: false, required: false
  private _augmentedManifests = new DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList(this, "augmented_manifests", false);
  public get augmentedManifests() {
    return this._augmentedManifests;
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }

  // documents - computed: true, optional: false, required: false
  private _documents = new DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference(this, "documents");
  public get documents() {
    return this._documents;
  }

  // entity_list - computed: true, optional: false, required: false
  private _entityList = new DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference(this, "entity_list");
  public get entityList() {
    return this._entityList;
  }

  // entity_types - computed: true, optional: false, required: false
  private _entityTypes = new DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList(this, "entity_types", false);
  public get entityTypes() {
    return this._entityTypes;
  }
}
export interface DataAwsccComprehendEntityRecognizerTags {
}

export function dataAwsccComprehendEntityRecognizerTagsToTerraform(struct?: DataAwsccComprehendEntityRecognizerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendEntityRecognizerTagsToHclTerraform(struct?: DataAwsccComprehendEntityRecognizerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendEntityRecognizerTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccComprehendEntityRecognizerTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendEntityRecognizerTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccComprehendEntityRecognizerTagsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccComprehendEntityRecognizerTagsOutputReference {
    return new DataAwsccComprehendEntityRecognizerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccComprehendEntityRecognizerVpcConfig {
}

export function dataAwsccComprehendEntityRecognizerVpcConfigToTerraform(struct?: DataAwsccComprehendEntityRecognizerVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccComprehendEntityRecognizerVpcConfigToHclTerraform(struct?: DataAwsccComprehendEntityRecognizerVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccComprehendEntityRecognizerVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccComprehendEntityRecognizerVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccComprehendEntityRecognizerVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer}
*/
export class DataAwsccComprehendEntityRecognizer extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_comprehend_entity_recognizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccComprehendEntityRecognizer to import
  * @param importFromId The id of the existing DataAwsccComprehendEntityRecognizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccComprehendEntityRecognizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_comprehend_entity_recognizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccComprehendEntityRecognizerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccComprehendEntityRecognizerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_comprehend_entity_recognizer',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.105.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_access_role_arn - computed: true, optional: false, required: false
  public get dataAccessRoleArn() {
    return this.getStringAttribute('data_access_role_arn');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // input_data_config - computed: true, optional: false, required: false
  private _inputDataConfig = new DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference(this, "input_data_config");
  public get inputDataConfig() {
    return this._inputDataConfig;
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // model_kms_key_id - computed: true, optional: false, required: false
  public get modelKmsKeyId() {
    return this.getStringAttribute('model_kms_key_id');
  }

  // model_policy - computed: true, optional: false, required: false
  public get modelPolicy() {
    return this.getStringAttribute('model_policy');
  }

  // recognizer_name - computed: true, optional: false, required: false
  public get recognizerName() {
    return this.getStringAttribute('recognizer_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccComprehendEntityRecognizerTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // version_name - computed: true, optional: false, required: false
  public get versionName() {
    return this.getStringAttribute('version_name');
  }

  // volume_kms_key_id - computed: true, optional: false, required: false
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }

  // vpc_config - computed: true, optional: false, required: false
  private _vpcConfig = new DataAwsccComprehendEntityRecognizerVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
