/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Kinesisanalyticsv2SnapshotConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the Managed Service for Apache Flink application to snapshot. Used only at create time to select the source application; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#application_name Kinesisanalyticsv2Snapshot#application_name}
  */
  readonly applicationName?: string;
  /**
  * The Amazon S3 location and role to import the snapshot from, with ImportSnapshot. Used only at create time; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import_source_configuration Kinesisanalyticsv2Snapshot#import_source_configuration}
  */
  readonly importSourceConfiguration?: Kinesisanalyticsv2SnapshotImportSourceConfiguration;
  /**
  * Optional customer-supplied description of the snapshot. Immutable after create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_description Kinesisanalyticsv2Snapshot#snapshot_description}
  */
  readonly snapshotDescription?: string;
  /**
  * The encryption of the snapshot. Can be set only with ImportSourceConfiguration (sent as the ImportSnapshot DestinationEncryptionConfiguration; the AWS owned key when omitted). A snapshot taken from ApplicationName uses the application's encryption: DescribeSnapshot returns it for such snapshots, but it must not be set with ApplicationName. Immutable after create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_encryption_configuration_description Kinesisanalyticsv2Snapshot#snapshot_encryption_configuration_description}
  */
  readonly snapshotEncryptionConfigurationDescription?: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription;
  /**
  * The format of the snapshot (CANONICAL). Sent to ImportSnapshot with ImportSourceConfiguration; with ApplicationName it may only be CANONICAL, the format CreateSnapshot produces. Returned by DescribeSnapshot. Immutable after create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_format Kinesisanalyticsv2Snapshot#snapshot_format}
  */
  readonly snapshotFormat?: string;
  /**
  * The customer-chosen name of the snapshot, unique within the account. Immutable after create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_name Kinesisanalyticsv2Snapshot#snapshot_name}
  */
  readonly snapshotName: string;
  /**
  * Tags to apply to the snapshot. Applied at create time (with CreateSnapshot, or with TagResource right after ImportSnapshot) and updated in place with TagResource and UntagResource. Tag keys must not start with aws:.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#tags Kinesisanalyticsv2Snapshot#tags}
  */
  readonly tags?: Kinesisanalyticsv2SnapshotTags[] | cdktn.IResolvable;
}
export interface Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration {
  /**
  * The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_id Kinesisanalyticsv2Snapshot#key_id}
  */
  readonly keyId?: string;
  /**
  * The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_type Kinesisanalyticsv2Snapshot#key_type}
  */
  readonly keyType?: string;
}

export function kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationToTerraform(struct?: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
    key_type: cdktn.stringToTerraform(struct!.keyType),
  }
}


export function kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationToHclTerraform(struct?: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktn.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._keyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._keyType = value.keyType;
    }
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}
export interface Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation {
  /**
  * The ARN of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#bucket_arn Kinesisanalyticsv2Snapshot#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * The S3 key prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_prefix Kinesisanalyticsv2Snapshot#key_prefix}
  */
  readonly keyPrefix?: string;
}

export function kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationToTerraform(struct?: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
  }
}


export function kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationToHclTerraform(struct?: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._keyPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._keyPrefix = value.keyPrefix;
    }
  }

  // bucket_arn - computed: true, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // key_prefix - computed: true, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }
}
export interface Kinesisanalyticsv2SnapshotImportSourceConfiguration {
  /**
  * The ARN of the IAM role that the service assumes to read the snapshot files from Amazon S3 (and to decrypt them, if they are encrypted with a customer managed key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import_role_arn Kinesisanalyticsv2Snapshot#import_role_arn}
  */
  readonly importRoleArn?: string;
  /**
  * The encryption of the snapshot files in Amazon S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_encryption_configuration Kinesisanalyticsv2Snapshot#source_encryption_configuration}
  */
  readonly sourceEncryptionConfiguration?: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration;
  /**
  * The Amazon S3 bucket and key prefix that hold the snapshot files, for example the prefix an ExportSnapshot operation wrote them to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_s3_prefix_location Kinesisanalyticsv2Snapshot#source_s3_prefix_location}
  */
  readonly sourceS3PrefixLocation?: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation;
  /**
  * The type of storage the snapshot is imported from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_type Kinesisanalyticsv2Snapshot#source_type}
  */
  readonly sourceType?: string;
}

export function kinesisanalyticsv2SnapshotImportSourceConfigurationToTerraform(struct?: Kinesisanalyticsv2SnapshotImportSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    import_role_arn: cdktn.stringToTerraform(struct!.importRoleArn),
    source_encryption_configuration: kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationToTerraform(struct!.sourceEncryptionConfiguration),
    source_s3_prefix_location: kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationToTerraform(struct!.sourceS3PrefixLocation),
    source_type: cdktn.stringToTerraform(struct!.sourceType),
  }
}


export function kinesisanalyticsv2SnapshotImportSourceConfigurationToHclTerraform(struct?: Kinesisanalyticsv2SnapshotImportSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    import_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.importRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_encryption_configuration: {
      value: kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationToHclTerraform(struct!.sourceEncryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration",
    },
    source_s3_prefix_location: {
      value: kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationToHclTerraform(struct!.sourceS3PrefixLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation",
    },
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2SnapshotImportSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._importRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.importRoleArn = this._importRoleArn;
    }
    if (this._sourceEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEncryptionConfiguration = this._sourceEncryptionConfiguration?.internalValue;
    }
    if (this._sourceS3PrefixLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceS3PrefixLocation = this._sourceS3PrefixLocation?.internalValue;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2SnapshotImportSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._importRoleArn = undefined;
      this._sourceEncryptionConfiguration.internalValue = undefined;
      this._sourceS3PrefixLocation.internalValue = undefined;
      this._sourceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._importRoleArn = value.importRoleArn;
      this._sourceEncryptionConfiguration.internalValue = value.sourceEncryptionConfiguration;
      this._sourceS3PrefixLocation.internalValue = value.sourceS3PrefixLocation;
      this._sourceType = value.sourceType;
    }
  }

  // import_role_arn - computed: true, optional: true, required: false
  private _importRoleArn?: string; 
  public get importRoleArn() {
    return this.getStringAttribute('import_role_arn');
  }
  public set importRoleArn(value: string) {
    this._importRoleArn = value;
  }
  public resetImportRoleArn() {
    this._importRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRoleArnInput() {
    return this._importRoleArn;
  }

  // source_encryption_configuration - computed: true, optional: true, required: false
  private _sourceEncryptionConfiguration = new Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference(this, "source_encryption_configuration");
  public get sourceEncryptionConfiguration() {
    return this._sourceEncryptionConfiguration;
  }
  public putSourceEncryptionConfiguration(value: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration) {
    this._sourceEncryptionConfiguration.internalValue = value;
  }
  public resetSourceEncryptionConfiguration() {
    this._sourceEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEncryptionConfigurationInput() {
    return this._sourceEncryptionConfiguration.internalValue;
  }

  // source_s3_prefix_location - computed: true, optional: true, required: false
  private _sourceS3PrefixLocation = new Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference(this, "source_s3_prefix_location");
  public get sourceS3PrefixLocation() {
    return this._sourceS3PrefixLocation;
  }
  public putSourceS3PrefixLocation(value: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation) {
    this._sourceS3PrefixLocation.internalValue = value;
  }
  public resetSourceS3PrefixLocation() {
    this._sourceS3PrefixLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceS3PrefixLocationInput() {
    return this._sourceS3PrefixLocation.internalValue;
  }

  // source_type - computed: true, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription {
  /**
  * The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_id Kinesisanalyticsv2Snapshot#key_id}
  */
  readonly keyId?: string;
  /**
  * The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_type Kinesisanalyticsv2Snapshot#key_type}
  */
  readonly keyType?: string;
}

export function kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionToTerraform(struct?: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
    key_type: cdktn.stringToTerraform(struct!.keyType),
  }
}


export function kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionToHclTerraform(struct?: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktn.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._keyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._keyType = value.keyType;
    }
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}
export interface Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation {
}

export function kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationToTerraform(struct?: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationToHclTerraform(struct?: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation | undefined) {
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
export interface Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription {
}

export function kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionToTerraform(struct?: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionToHclTerraform(struct?: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription | undefined) {
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
export interface Kinesisanalyticsv2SnapshotSnapshotSourceDescription {
}

export function kinesisanalyticsv2SnapshotSnapshotSourceDescriptionToTerraform(struct?: Kinesisanalyticsv2SnapshotSnapshotSourceDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function kinesisanalyticsv2SnapshotSnapshotSourceDescriptionToHclTerraform(struct?: Kinesisanalyticsv2SnapshotSnapshotSourceDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Kinesisanalyticsv2SnapshotSnapshotSourceDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2SnapshotSnapshotSourceDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_prefix_location - computed: true, optional: false, required: false
  private _s3PrefixLocation = new Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference(this, "s3_prefix_location");
  public get s3PrefixLocation() {
    return this._s3PrefixLocation;
  }

  // source_application_description - computed: true, optional: false, required: false
  private _sourceApplicationDescription = new Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference(this, "source_application_description");
  public get sourceApplicationDescription() {
    return this._sourceApplicationDescription;
  }
}
export interface Kinesisanalyticsv2SnapshotTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key Kinesisanalyticsv2Snapshot#key}
  */
  readonly key?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#value Kinesisanalyticsv2Snapshot#value}
  */
  readonly value?: string;
}

export function kinesisanalyticsv2SnapshotTagsToTerraform(struct?: Kinesisanalyticsv2SnapshotTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function kinesisanalyticsv2SnapshotTagsToHclTerraform(struct?: Kinesisanalyticsv2SnapshotTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Kinesisanalyticsv2SnapshotTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Kinesisanalyticsv2SnapshotTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Kinesisanalyticsv2SnapshotTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Kinesisanalyticsv2SnapshotTagsList extends cdktn.ComplexList {
  public internalValue? : Kinesisanalyticsv2SnapshotTags[] | cdktn.IResolvable

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
  public get(index: number): Kinesisanalyticsv2SnapshotTagsOutputReference {
    return new Kinesisanalyticsv2SnapshotTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot awscc_kinesisanalyticsv2_snapshot}
*/
export class Kinesisanalyticsv2Snapshot extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kinesisanalyticsv2_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Kinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Kinesisanalyticsv2Snapshot to import
  * @param importFromId The id of the existing Kinesisanalyticsv2Snapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Kinesisanalyticsv2Snapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kinesisanalyticsv2_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot awscc_kinesisanalyticsv2_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Kinesisanalyticsv2SnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: Kinesisanalyticsv2SnapshotConfig) {
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
    this._applicationName = config.applicationName;
    this._importSourceConfiguration.internalValue = config.importSourceConfiguration;
    this._snapshotDescription = config.snapshotDescription;
    this._snapshotEncryptionConfigurationDescription.internalValue = config.snapshotEncryptionConfigurationDescription;
    this._snapshotFormat = config.snapshotFormat;
    this._snapshotName = config.snapshotName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_name - computed: true, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_source_configuration - computed: true, optional: true, required: false
  private _importSourceConfiguration = new Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference(this, "import_source_configuration");
  public get importSourceConfiguration() {
    return this._importSourceConfiguration;
  }
  public putImportSourceConfiguration(value: Kinesisanalyticsv2SnapshotImportSourceConfiguration) {
    this._importSourceConfiguration.internalValue = value;
  }
  public resetImportSourceConfiguration() {
    this._importSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importSourceConfigurationInput() {
    return this._importSourceConfiguration.internalValue;
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

  // snapshot_description - computed: true, optional: true, required: false
  private _snapshotDescription?: string; 
  public get snapshotDescription() {
    return this.getStringAttribute('snapshot_description');
  }
  public set snapshotDescription(value: string) {
    this._snapshotDescription = value;
  }
  public resetSnapshotDescription() {
    this._snapshotDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDescriptionInput() {
    return this._snapshotDescription;
  }

  // snapshot_encryption_configuration_description - computed: true, optional: true, required: false
  private _snapshotEncryptionConfigurationDescription = new Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference(this, "snapshot_encryption_configuration_description");
  public get snapshotEncryptionConfigurationDescription() {
    return this._snapshotEncryptionConfigurationDescription;
  }
  public putSnapshotEncryptionConfigurationDescription(value: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription) {
    this._snapshotEncryptionConfigurationDescription.internalValue = value;
  }
  public resetSnapshotEncryptionConfigurationDescription() {
    this._snapshotEncryptionConfigurationDescription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotEncryptionConfigurationDescriptionInput() {
    return this._snapshotEncryptionConfigurationDescription.internalValue;
  }

  // snapshot_format - computed: true, optional: true, required: false
  private _snapshotFormat?: string; 
  public get snapshotFormat() {
    return this.getStringAttribute('snapshot_format');
  }
  public set snapshotFormat(value: string) {
    this._snapshotFormat = value;
  }
  public resetSnapshotFormat() {
    this._snapshotFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotFormatInput() {
    return this._snapshotFormat;
  }

  // snapshot_initiator - computed: true, optional: false, required: false
  public get snapshotInitiator() {
    return this.getStringAttribute('snapshot_initiator');
  }

  // snapshot_initiator_operation - computed: true, optional: false, required: false
  public get snapshotInitiatorOperation() {
    return this.getStringAttribute('snapshot_initiator_operation');
  }

  // snapshot_name - computed: false, optional: false, required: true
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // snapshot_size_in_bytes - computed: true, optional: false, required: false
  public get snapshotSizeInBytes() {
    return this.getNumberAttribute('snapshot_size_in_bytes');
  }

  // snapshot_source_description - computed: true, optional: false, required: false
  private _snapshotSourceDescription = new Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference(this, "snapshot_source_description");
  public get snapshotSourceDescription() {
    return this._snapshotSourceDescription;
  }

  // snapshot_status - computed: true, optional: false, required: false
  public get snapshotStatus() {
    return this.getStringAttribute('snapshot_status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Kinesisanalyticsv2SnapshotTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Kinesisanalyticsv2SnapshotTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_name: cdktn.stringToTerraform(this._applicationName),
      import_source_configuration: kinesisanalyticsv2SnapshotImportSourceConfigurationToTerraform(this._importSourceConfiguration.internalValue),
      snapshot_description: cdktn.stringToTerraform(this._snapshotDescription),
      snapshot_encryption_configuration_description: kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionToTerraform(this._snapshotEncryptionConfigurationDescription.internalValue),
      snapshot_format: cdktn.stringToTerraform(this._snapshotFormat),
      snapshot_name: cdktn.stringToTerraform(this._snapshotName),
      tags: cdktn.listMapper(kinesisanalyticsv2SnapshotTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_name: {
        value: cdktn.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_source_configuration: {
        value: kinesisanalyticsv2SnapshotImportSourceConfigurationToHclTerraform(this._importSourceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Kinesisanalyticsv2SnapshotImportSourceConfiguration",
      },
      snapshot_description: {
        value: cdktn.stringToHclTerraform(this._snapshotDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_encryption_configuration_description: {
        value: kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionToHclTerraform(this._snapshotEncryptionConfigurationDescription.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription",
      },
      snapshot_format: {
        value: cdktn.stringToHclTerraform(this._snapshotFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_name: {
        value: cdktn.stringToHclTerraform(this._snapshotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(kinesisanalyticsv2SnapshotTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Kinesisanalyticsv2SnapshotTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
