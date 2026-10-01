/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccScnDataIntegrationFlowConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow#id DataAwsccScnDataIntegrationFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields {
}

export function dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsToTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sort_order - computed: true, optional: false, required: false
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
}

export class DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference {
    return new DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority {
}

export function dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityToTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
}
export interface DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy {
}

export function dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyToTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_priority - computed: true, optional: false, required: false
  private _fieldPriority = new DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference(this, "field_priority");
  public get fieldPriority() {
    return this._fieldPriority;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions {
}

export function dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsToTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dedupe_records - computed: true, optional: false, required: false
  public get dedupeRecords() {
    return this.getBooleanAttribute('dedupe_records');
  }

  // dedupe_strategy - computed: true, optional: false, required: false
  private _dedupeStrategy = new DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference(this, "dedupe_strategy");
  public get dedupeStrategy() {
    return this._dedupeStrategy;
  }

  // load_type - computed: true, optional: false, required: false
  public get loadType() {
    return this.getStringAttribute('load_type');
  }
}
export interface DataAwsccScnDataIntegrationFlowSourcesDatasetSource {
}

export function dataAwsccScnDataIntegrationFlowSourcesDatasetSourceToTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesDatasetSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowSourcesDatasetSourceToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesDatasetSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowSourcesDatasetSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowSourcesDatasetSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_identifier - computed: true, optional: false, required: false
  public get datasetIdentifier() {
    return this.getStringAttribute('dataset_identifier');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
}
export interface DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions {
}

export function dataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsToTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
}
export interface DataAwsccScnDataIntegrationFlowSourcesS3Source {
}

export function dataAwsccScnDataIntegrationFlowSourcesS3SourceToTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesS3Source): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowSourcesS3SourceToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowSourcesS3Source): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowSourcesS3Source | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowSourcesS3Source | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccScnDataIntegrationFlowSources {
}

export function dataAwsccScnDataIntegrationFlowSourcesToTerraform(struct?: DataAwsccScnDataIntegrationFlowSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowSourcesToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccScnDataIntegrationFlowSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_source - computed: true, optional: false, required: false
  private _datasetSource = new DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference(this, "dataset_source");
  public get datasetSource() {
    return this._datasetSource;
  }

  // s3_source - computed: true, optional: false, required: false
  private _s3Source = new DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference(this, "s3_source");
  public get s3Source() {
    return this._s3Source;
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataAwsccScnDataIntegrationFlowSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccScnDataIntegrationFlowSourcesOutputReference {
    return new DataAwsccScnDataIntegrationFlowSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccScnDataIntegrationFlowTags {
}

export function dataAwsccScnDataIntegrationFlowTagsToTerraform(struct?: DataAwsccScnDataIntegrationFlowTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowTagsToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccScnDataIntegrationFlowTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowTags | undefined) {
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

export class DataAwsccScnDataIntegrationFlowTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccScnDataIntegrationFlowTagsOutputReference {
    return new DataAwsccScnDataIntegrationFlowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields {
}

export function dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsToTerraform(struct?: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sort_order - computed: true, optional: false, required: false
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
}

export class DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference {
    return new DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority {
}

export function dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityToTerraform(struct?: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
}
export interface DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy {
}

export function dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyToTerraform(struct?: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_priority - computed: true, optional: false, required: false
  private _fieldPriority = new DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference(this, "field_priority");
  public get fieldPriority() {
    return this._fieldPriority;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions {
}

export function dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsToTerraform(struct?: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dedupe_records - computed: true, optional: false, required: false
  public get dedupeRecords() {
    return this.getBooleanAttribute('dedupe_records');
  }

  // dedupe_strategy - computed: true, optional: false, required: false
  private _dedupeStrategy = new DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference(this, "dedupe_strategy");
  public get dedupeStrategy() {
    return this._dedupeStrategy;
  }

  // load_type - computed: true, optional: false, required: false
  public get loadType() {
    return this.getStringAttribute('load_type');
  }
}
export interface DataAwsccScnDataIntegrationFlowTargetDatasetTarget {
}

export function dataAwsccScnDataIntegrationFlowTargetDatasetTargetToTerraform(struct?: DataAwsccScnDataIntegrationFlowTargetDatasetTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowTargetDatasetTargetToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowTargetDatasetTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowTargetDatasetTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowTargetDatasetTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_identifier - computed: true, optional: false, required: false
  public get datasetIdentifier() {
    return this.getStringAttribute('dataset_identifier');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
}
export interface DataAwsccScnDataIntegrationFlowTarget {
}

export function dataAwsccScnDataIntegrationFlowTargetToTerraform(struct?: DataAwsccScnDataIntegrationFlowTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowTargetToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_target - computed: true, optional: false, required: false
  private _datasetTarget = new DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference(this, "dataset_target");
  public get datasetTarget() {
    return this._datasetTarget;
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
}
export interface DataAwsccScnDataIntegrationFlowTransformationSqlTransformation {
}

export function dataAwsccScnDataIntegrationFlowTransformationSqlTransformationToTerraform(struct?: DataAwsccScnDataIntegrationFlowTransformationSqlTransformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowTransformationSqlTransformationToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowTransformationSqlTransformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowTransformationSqlTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowTransformationSqlTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}
export interface DataAwsccScnDataIntegrationFlowTransformation {
}

export function dataAwsccScnDataIntegrationFlowTransformationToTerraform(struct?: DataAwsccScnDataIntegrationFlowTransformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccScnDataIntegrationFlowTransformationToHclTerraform(struct?: DataAwsccScnDataIntegrationFlowTransformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccScnDataIntegrationFlowTransformationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccScnDataIntegrationFlowTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccScnDataIntegrationFlowTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sql_transformation - computed: true, optional: false, required: false
  private _sqlTransformation = new DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference(this, "sql_transformation");
  public get sqlTransformation() {
    return this._sqlTransformation;
  }

  // transformation_type - computed: true, optional: false, required: false
  public get transformationType() {
    return this.getStringAttribute('transformation_type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow awscc_scn_data_integration_flow}
*/
export class DataAwsccScnDataIntegrationFlow extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_scn_data_integration_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccScnDataIntegrationFlow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccScnDataIntegrationFlow to import
  * @param importFromId The id of the existing DataAwsccScnDataIntegrationFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccScnDataIntegrationFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_scn_data_integration_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow awscc_scn_data_integration_flow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccScnDataIntegrationFlowConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccScnDataIntegrationFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_scn_data_integration_flow',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.104.0',
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

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataAwsccScnDataIntegrationFlowSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccScnDataIntegrationFlowTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataAwsccScnDataIntegrationFlowTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }

  // transformation - computed: true, optional: false, required: false
  private _transformation = new DataAwsccScnDataIntegrationFlowTransformationOutputReference(this, "transformation");
  public get transformation() {
    return this._transformation;
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
