/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/glue_partition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGluePartitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/glue_partition#id DataAwsccGluePartition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGluePartitionPartitionInputStorageDescriptorColumns {
}

export function dataAwsccGluePartitionPartitionInputStorageDescriptorColumnsToTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGluePartitionPartitionInputStorageDescriptorColumnsToHclTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGluePartitionPartitionInputStorageDescriptorColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGluePartitionPartitionInputStorageDescriptorColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference {
    return new DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId {
}

export function dataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdToHclTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // registry_name - computed: true, optional: false, required: false
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }

  // schema_arn - computed: true, optional: false, required: false
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}
export interface DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference {
}

export function dataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceToTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceToHclTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schema_id - computed: true, optional: false, required: false
  private _schemaId = new DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(this, "schema_id");
  public get schemaId() {
    return this._schemaId;
  }

  // schema_version_id - computed: true, optional: false, required: false
  public get schemaVersionId() {
    return this.getStringAttribute('schema_version_id');
  }

  // schema_version_number - computed: true, optional: false, required: false
  public get schemaVersionNumber() {
    return this.getNumberAttribute('schema_version_number');
  }
}
export interface DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo {
}

export function dataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoToTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoToHclTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo | undefined) {
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

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // serialization_library - computed: true, optional: false, required: false
  public get serializationLibrary() {
    return this.getStringAttribute('serialization_library');
  }
}
export interface DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo {
}

export function dataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoToTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoToHclTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // skewed_column_names - computed: true, optional: false, required: false
  public get skewedColumnNames() {
    return this.getListAttribute('skewed_column_names');
  }

  // skewed_column_value_location_maps - computed: true, optional: false, required: false
  public get skewedColumnValueLocationMaps() {
    return this.getStringAttribute('skewed_column_value_location_maps');
  }

  // skewed_column_values - computed: true, optional: false, required: false
  public get skewedColumnValues() {
    return this.getListAttribute('skewed_column_values');
  }
}
export interface DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns {
}

export function dataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsToTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsToHclTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  public get column() {
    return this.getStringAttribute('column');
  }

  // sort_order - computed: true, optional: false, required: false
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
}

export class DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference {
    return new DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGluePartitionPartitionInputStorageDescriptor {
}

export function dataAwsccGluePartitionPartitionInputStorageDescriptorToTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGluePartitionPartitionInputStorageDescriptorToHclTerraform(struct?: DataAwsccGluePartitionPartitionInputStorageDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGluePartitionPartitionInputStorageDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGluePartitionPartitionInputStorageDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_columns - computed: true, optional: false, required: false
  public get bucketColumns() {
    return this.getListAttribute('bucket_columns');
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // compressed - computed: true, optional: false, required: false
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }

  // input_format - computed: true, optional: false, required: false
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // number_of_buckets - computed: true, optional: false, required: false
  public get numberOfBuckets() {
    return this.getNumberAttribute('number_of_buckets');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // schema_reference - computed: true, optional: false, required: false
  private _schemaReference = new DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference(this, "schema_reference");
  public get schemaReference() {
    return this._schemaReference;
  }

  // serde_info - computed: true, optional: false, required: false
  private _serdeInfo = new DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference(this, "serde_info");
  public get serdeInfo() {
    return this._serdeInfo;
  }

  // skewed_info - computed: true, optional: false, required: false
  private _skewedInfo = new DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference(this, "skewed_info");
  public get skewedInfo() {
    return this._skewedInfo;
  }

  // sort_columns - computed: true, optional: false, required: false
  private _sortColumns = new DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList(this, "sort_columns", false);
  public get sortColumns() {
    return this._sortColumns;
  }

  // stored_as_sub_directories - computed: true, optional: false, required: false
  public get storedAsSubDirectories() {
    return this.getBooleanAttribute('stored_as_sub_directories');
  }
}
export interface DataAwsccGluePartitionPartitionInput {
}

export function dataAwsccGluePartitionPartitionInputToTerraform(struct?: DataAwsccGluePartitionPartitionInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGluePartitionPartitionInputToHclTerraform(struct?: DataAwsccGluePartitionPartitionInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGluePartitionPartitionInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGluePartitionPartitionInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGluePartitionPartitionInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // storage_descriptor - computed: true, optional: false, required: false
  private _storageDescriptor = new DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference(this, "storage_descriptor");
  public get storageDescriptor() {
    return this._storageDescriptor;
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/glue_partition awscc_glue_partition}
*/
export class DataAwsccGluePartition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_partition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGluePartition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGluePartition to import
  * @param importFromId The id of the existing DataAwsccGluePartition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/glue_partition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGluePartition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_partition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/glue_partition awscc_glue_partition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGluePartitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGluePartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_partition',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.103.0',
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

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
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

  // identifier_partition_input_values - computed: true, optional: false, required: false
  public get identifierPartitionInputValues() {
    return this.getStringAttribute('identifier_partition_input_values');
  }

  // partition_input - computed: true, optional: false, required: false
  private _partitionInput = new DataAwsccGluePartitionPartitionInputOutputReference(this, "partition_input");
  public get partitionInput() {
    return this._partitionInput;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
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
