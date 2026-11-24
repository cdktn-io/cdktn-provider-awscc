/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccKinesisanalyticsv2SnapshotConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot#id DataAwsccKinesisanalyticsv2Snapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration {
}

export function dataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}
export interface DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation {
}

export function dataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationToTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
}
export interface DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration {
}

export function dataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // import_role_arn - computed: true, optional: false, required: false
  public get importRoleArn() {
    return this.getStringAttribute('import_role_arn');
  }

  // source_encryption_configuration - computed: true, optional: false, required: false
  private _sourceEncryptionConfiguration = new DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference(this, "source_encryption_configuration");
  public get sourceEncryptionConfiguration() {
    return this._sourceEncryptionConfiguration;
  }

  // source_s3_prefix_location - computed: true, optional: false, required: false
  private _sourceS3PrefixLocation = new DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference(this, "source_s3_prefix_location");
  public get sourceS3PrefixLocation() {
    return this._sourceS3PrefixLocation;
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}
export interface DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription {
}

export function dataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionToTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionToHclTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}
export interface DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation {
}

export function dataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationToTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
}
export interface DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription {
}

export function dataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionToTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionToHclTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_creation_timestamp - computed: true, optional: false, required: false
  public get applicationCreationTimestamp() {
    return this.getStringAttribute('application_creation_timestamp');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // application_version_id - computed: true, optional: false, required: false
  public get applicationVersionId() {
    return this.getNumberAttribute('application_version_id');
  }
}
export interface DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription {
}

export function dataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionToTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionToHclTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_prefix_location - computed: true, optional: false, required: false
  private _s3PrefixLocation = new DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference(this, "s3_prefix_location");
  public get s3PrefixLocation() {
    return this._s3PrefixLocation;
  }

  // source_application_description - computed: true, optional: false, required: false
  private _sourceApplicationDescription = new DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference(this, "source_application_description");
  public get sourceApplicationDescription() {
    return this._sourceApplicationDescription;
  }
}
export interface DataAwsccKinesisanalyticsv2SnapshotTags {
}

export function dataAwsccKinesisanalyticsv2SnapshotTagsToTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2SnapshotTagsToHclTerraform(struct?: DataAwsccKinesisanalyticsv2SnapshotTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisanalyticsv2SnapshotTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2SnapshotTags | undefined) {
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

export class DataAwsccKinesisanalyticsv2SnapshotTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference {
    return new DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot awscc_kinesisanalyticsv2_snapshot}
*/
export class DataAwsccKinesisanalyticsv2Snapshot extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kinesisanalyticsv2_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccKinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccKinesisanalyticsv2Snapshot to import
  * @param importFromId The id of the existing DataAwsccKinesisanalyticsv2Snapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccKinesisanalyticsv2Snapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kinesisanalyticsv2_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot awscc_kinesisanalyticsv2_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccKinesisanalyticsv2SnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccKinesisanalyticsv2SnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kinesisanalyticsv2_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.111.0',
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

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
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

  // import_source_configuration - computed: true, optional: false, required: false
  private _importSourceConfiguration = new DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference(this, "import_source_configuration");
  public get importSourceConfiguration() {
    return this._importSourceConfiguration;
  }

  // runtime_environment - computed: true, optional: false, required: false
  public get runtimeEnvironment() {
    return this.getStringAttribute('runtime_environment');
  }

  // snapshot_arn - computed: true, optional: false, required: false
  public get snapshotArn() {
    return this.getStringAttribute('snapshot_arn');
  }

  // snapshot_creation_timestamp - computed: true, optional: false, required: false
  public get snapshotCreationTimestamp() {
    return this.getStringAttribute('snapshot_creation_timestamp');
  }

  // snapshot_description - computed: true, optional: false, required: false
  public get snapshotDescription() {
    return this.getStringAttribute('snapshot_description');
  }

  // snapshot_encryption_configuration_description - computed: true, optional: false, required: false
  private _snapshotEncryptionConfigurationDescription = new DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference(this, "snapshot_encryption_configuration_description");
  public get snapshotEncryptionConfigurationDescription() {
    return this._snapshotEncryptionConfigurationDescription;
  }

  // snapshot_format - computed: true, optional: false, required: false
  public get snapshotFormat() {
    return this.getStringAttribute('snapshot_format');
  }

  // snapshot_initiator - computed: true, optional: false, required: false
  public get snapshotInitiator() {
    return this.getStringAttribute('snapshot_initiator');
  }

  // snapshot_initiator_operation - computed: true, optional: false, required: false
  public get snapshotInitiatorOperation() {
    return this.getStringAttribute('snapshot_initiator_operation');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }

  // snapshot_size_in_bytes - computed: true, optional: false, required: false
  public get snapshotSizeInBytes() {
    return this.getNumberAttribute('snapshot_size_in_bytes');
  }

  // snapshot_source_description - computed: true, optional: false, required: false
  private _snapshotSourceDescription = new DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference(this, "snapshot_source_description");
  public get snapshotSourceDescription() {
    return this._snapshotSourceDescription;
  }

  // snapshot_status - computed: true, optional: false, required: false
  public get snapshotStatus() {
    return this.getStringAttribute('snapshot_status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccKinesisanalyticsv2SnapshotTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
