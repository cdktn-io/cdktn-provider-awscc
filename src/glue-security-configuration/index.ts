/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GlueSecurityConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The encryption configuration for the security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#encryption_configuration GlueSecurityConfiguration#encryption_configuration}
  */
  readonly encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration;
  /**
  * The name for the security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#name GlueSecurityConfiguration#name}
  */
  readonly name: string;
}
export interface GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}
  */
  readonly cloudwatchEncryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_encryption_mode: cdktn.stringToTerraform(struct!.cloudwatchEncryptionMode),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToHclTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchEncryptionMode = this._cloudwatchEncryptionMode;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchEncryptionMode = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchEncryptionMode = value.cloudwatchEncryptionMode;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // cloudwatch_encryption_mode - computed: true, optional: true, required: false
  private _cloudwatchEncryptionMode?: string; 
  public get cloudwatchEncryptionMode() {
    return this.getStringAttribute('cloudwatch_encryption_mode');
  }
  public set cloudwatchEncryptionMode(value: string) {
    this._cloudwatchEncryptionMode = value;
  }
  public resetCloudwatchEncryptionMode() {
    this._cloudwatchEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchEncryptionModeInput() {
    return this._cloudwatchEncryptionMode;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}
  */
  readonly jobBookmarksEncryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_bookmarks_encryption_mode: cdktn.stringToTerraform(struct!.jobBookmarksEncryptionMode),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToHclTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_bookmarks_encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.jobBookmarksEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobBookmarksEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobBookmarksEncryptionMode = this._jobBookmarksEncryptionMode;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobBookmarksEncryptionMode = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobBookmarksEncryptionMode = value.jobBookmarksEncryptionMode;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // job_bookmarks_encryption_mode - computed: true, optional: true, required: false
  private _jobBookmarksEncryptionMode?: string; 
  public get jobBookmarksEncryptionMode() {
    return this.getStringAttribute('job_bookmarks_encryption_mode');
  }
  public set jobBookmarksEncryptionMode(value: string) {
    this._jobBookmarksEncryptionMode = value;
  }
  public resetJobBookmarksEncryptionMode() {
    this._jobBookmarksEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobBookmarksEncryptionModeInput() {
    return this._jobBookmarksEncryptionMode;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface GlueSecurityConfigurationEncryptionConfigurationS3Encryptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}
  */
  readonly s3EncryptionMode?: string;
}

export function glueSecurityConfigurationEncryptionConfigurationS3EncryptionsToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationS3Encryptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    s3_encryption_mode: cdktn.stringToTerraform(struct!.s3EncryptionMode),
  }
}


export function glueSecurityConfigurationEncryptionConfigurationS3EncryptionsToHclTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationS3Encryptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3EncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueSecurityConfigurationEncryptionConfigurationS3Encryptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._s3EncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3EncryptionMode = this._s3EncryptionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationS3Encryptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._s3EncryptionMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._s3EncryptionMode = value.s3EncryptionMode;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // s3_encryption_mode - computed: true, optional: true, required: false
  private _s3EncryptionMode?: string; 
  public get s3EncryptionMode() {
    return this.getStringAttribute('s3_encryption_mode');
  }
  public set s3EncryptionMode(value: string) {
    this._s3EncryptionMode = value;
  }
  public resetS3EncryptionMode() {
    this._s3EncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionModeInput() {
    return this._s3EncryptionMode;
  }
}

export class GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList extends cdktn.ComplexList {
  public internalValue? : GlueSecurityConfigurationEncryptionConfigurationS3Encryptions[] | cdktn.IResolvable

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
  public get(index: number): GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference {
    return new GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueSecurityConfigurationEncryptionConfiguration {
  /**
  * The encryption configuration for Amazon CloudWatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}
  */
  readonly cloudwatchEncryption?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption;
  /**
  * The encryption configuration for job bookmarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}
  */
  readonly jobBookmarksEncryption?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption;
  /**
  * The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#s3_encryptions GlueSecurityConfiguration#s3_encryptions}
  */
  readonly s3Encryptions?: GlueSecurityConfigurationEncryptionConfigurationS3Encryptions[] | cdktn.IResolvable;
}

export function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct?: GlueSecurityConfigurationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_encryption: glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct!.cloudwatchEncryption),
    job_bookmarks_encryption: glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct!.jobBookmarksEncryption),
    s3_encryptions: cdktn.listMapper(glueSecurityConfigurationEncryptionConfigurationS3EncryptionsToTerraform, false)(struct!.s3Encryptions),
  }
}


export function glueSecurityConfigurationEncryptionConfigurationToHclTerraform(struct?: GlueSecurityConfigurationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_encryption: {
      value: glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToHclTerraform(struct!.cloudwatchEncryption),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption",
    },
    job_bookmarks_encryption: {
      value: glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToHclTerraform(struct!.jobBookmarksEncryption),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption",
    },
    s3_encryptions: {
      value: cdktn.listMapperHcl(glueSecurityConfigurationEncryptionConfigurationS3EncryptionsToHclTerraform, false)(struct!.s3Encryptions),
      isBlock: true,
      type: "list",
      storageClassType: "GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueSecurityConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueSecurityConfigurationEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchEncryption = this._cloudwatchEncryption?.internalValue;
    }
    if (this._jobBookmarksEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobBookmarksEncryption = this._jobBookmarksEncryption?.internalValue;
    }
    if (this._s3Encryptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Encryptions = this._s3Encryptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueSecurityConfigurationEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchEncryption.internalValue = undefined;
      this._jobBookmarksEncryption.internalValue = undefined;
      this._s3Encryptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchEncryption.internalValue = value.cloudwatchEncryption;
      this._jobBookmarksEncryption.internalValue = value.jobBookmarksEncryption;
      this._s3Encryptions.internalValue = value.s3Encryptions;
    }
  }

  // cloudwatch_encryption - computed: true, optional: true, required: false
  private _cloudwatchEncryption = new GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(this, "cloudwatch_encryption");
  public get cloudwatchEncryption() {
    return this._cloudwatchEncryption;
  }
  public putCloudwatchEncryption(value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption) {
    this._cloudwatchEncryption.internalValue = value;
  }
  public resetCloudwatchEncryption() {
    this._cloudwatchEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchEncryptionInput() {
    return this._cloudwatchEncryption.internalValue;
  }

  // job_bookmarks_encryption - computed: true, optional: true, required: false
  private _jobBookmarksEncryption = new GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(this, "job_bookmarks_encryption");
  public get jobBookmarksEncryption() {
    return this._jobBookmarksEncryption;
  }
  public putJobBookmarksEncryption(value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption) {
    this._jobBookmarksEncryption.internalValue = value;
  }
  public resetJobBookmarksEncryption() {
    this._jobBookmarksEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobBookmarksEncryptionInput() {
    return this._jobBookmarksEncryption.internalValue;
  }

  // s3_encryptions - computed: true, optional: true, required: false
  private _s3Encryptions = new GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList(this, "s3_encryptions", false);
  public get s3Encryptions() {
    return this._s3Encryptions;
  }
  public putS3Encryptions(value: GlueSecurityConfigurationEncryptionConfigurationS3Encryptions[] | cdktn.IResolvable) {
    this._s3Encryptions.internalValue = value;
  }
  public resetS3Encryptions() {
    this._s3Encryptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionsInput() {
    return this._s3Encryptions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration awscc_glue_security_configuration}
*/
export class GlueSecurityConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_security_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GlueSecurityConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueSecurityConfiguration to import
  * @param importFromId The id of the existing GlueSecurityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueSecurityConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_security_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_security_configuration awscc_glue_security_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueSecurityConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: GlueSecurityConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_security_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.98.0',
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
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encryption_configuration - computed: false, optional: false, required: true
  private _encryptionConfiguration = new GlueSecurityConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: GlueSecurityConfigurationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption_configuration: glueSecurityConfigurationEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption_configuration: {
        value: glueSecurityConfigurationEncryptionConfigurationToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueSecurityConfigurationEncryptionConfiguration",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
