/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppstreamFleetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}
  */
  readonly attributesToDelete?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}
  */
  readonly computeCapacity?: AppstreamFleetComputeCapacity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#description AppstreamFleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}
  */
  readonly disableImdsv1?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}
  */
  readonly disconnectTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}
  */
  readonly domainJoinInfo?: AppstreamFleetDomainJoinInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}
  */
  readonly enableDefaultInternetAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}
  */
  readonly fleetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}
  */
  readonly idleDisconnectTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}
  */
  readonly imageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}
  */
  readonly maxConcurrentSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}
  */
  readonly maxSessionsPerInstance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}
  */
  readonly maxUserDurationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#name AppstreamFleet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}
  */
  readonly rootVolumeConfig?: AppstreamFleetRootVolumeConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}
  */
  readonly sessionScriptS3Location?: AppstreamFleetSessionScriptS3Location;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}
  */
  readonly streamView?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}
  */
  readonly tags?: AppstreamFleetTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}
  */
  readonly usbDeviceFilterStrings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}
  */
  readonly vpcConfig?: AppstreamFleetVpcConfig;
}
export interface AppstreamFleetComputeCapacity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}
  */
  readonly desiredInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}
  */
  readonly desiredSessions?: number;
}

export function appstreamFleetComputeCapacityToTerraform(struct?: AppstreamFleetComputeCapacity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    desired_instances: cdktn.numberToTerraform(struct!.desiredInstances),
    desired_sessions: cdktn.numberToTerraform(struct!.desiredSessions),
  }
}


export function appstreamFleetComputeCapacityToHclTerraform(struct?: AppstreamFleetComputeCapacity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    desired_instances: {
      value: cdktn.numberToHclTerraform(struct!.desiredInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desired_sessions: {
      value: cdktn.numberToHclTerraform(struct!.desiredSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppstreamFleetComputeCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppstreamFleetComputeCapacity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredInstances = this._desiredInstances;
    }
    if (this._desiredSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredSessions = this._desiredSessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppstreamFleetComputeCapacity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredInstances = undefined;
      this._desiredSessions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredInstances = value.desiredInstances;
      this._desiredSessions = value.desiredSessions;
    }
  }

  // desired_instances - computed: true, optional: true, required: false
  private _desiredInstances?: number; 
  public get desiredInstances() {
    return this.getNumberAttribute('desired_instances');
  }
  public set desiredInstances(value: number) {
    this._desiredInstances = value;
  }
  public resetDesiredInstances() {
    this._desiredInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredInstancesInput() {
    return this._desiredInstances;
  }

  // desired_sessions - computed: true, optional: true, required: false
  private _desiredSessions?: number; 
  public get desiredSessions() {
    return this.getNumberAttribute('desired_sessions');
  }
  public set desiredSessions(value: number) {
    this._desiredSessions = value;
  }
  public resetDesiredSessions() {
    this._desiredSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredSessionsInput() {
    return this._desiredSessions;
  }
}
export interface AppstreamFleetDomainJoinInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}
  */
  readonly directoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}
  */
  readonly organizationalUnitDistinguishedName?: string;
}

export function appstreamFleetDomainJoinInfoToTerraform(struct?: AppstreamFleetDomainJoinInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_name: cdktn.stringToTerraform(struct!.directoryName),
    organizational_unit_distinguished_name: cdktn.stringToTerraform(struct!.organizationalUnitDistinguishedName),
  }
}


export function appstreamFleetDomainJoinInfoToHclTerraform(struct?: AppstreamFleetDomainJoinInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_name: {
      value: cdktn.stringToHclTerraform(struct!.directoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit_distinguished_name: {
      value: cdktn.stringToHclTerraform(struct!.organizationalUnitDistinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppstreamFleetDomainJoinInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppstreamFleetDomainJoinInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryName = this._directoryName;
    }
    if (this._organizationalUnitDistinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitDistinguishedName = this._organizationalUnitDistinguishedName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppstreamFleetDomainJoinInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryName = undefined;
      this._organizationalUnitDistinguishedName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryName = value.directoryName;
      this._organizationalUnitDistinguishedName = value.organizationalUnitDistinguishedName;
    }
  }

  // directory_name - computed: true, optional: true, required: false
  private _directoryName?: string; 
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }
  public set directoryName(value: string) {
    this._directoryName = value;
  }
  public resetDirectoryName() {
    this._directoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName;
  }

  // organizational_unit_distinguished_name - computed: true, optional: true, required: false
  private _organizationalUnitDistinguishedName?: string; 
  public get organizationalUnitDistinguishedName() {
    return this.getStringAttribute('organizational_unit_distinguished_name');
  }
  public set organizationalUnitDistinguishedName(value: string) {
    this._organizationalUnitDistinguishedName = value;
  }
  public resetOrganizationalUnitDistinguishedName() {
    this._organizationalUnitDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitDistinguishedNameInput() {
    return this._organizationalUnitDistinguishedName;
  }
}
export interface AppstreamFleetRootVolumeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#volume_size_in_gb AppstreamFleet#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function appstreamFleetRootVolumeConfigToTerraform(struct?: AppstreamFleetRootVolumeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function appstreamFleetRootVolumeConfigToHclTerraform(struct?: AppstreamFleetRootVolumeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppstreamFleetRootVolumeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppstreamFleetRootVolumeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppstreamFleetRootVolumeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // volume_size_in_gb - computed: true, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}
export interface AppstreamFleetSessionScriptS3Location {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#s3_bucket AppstreamFleet#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#s3_key AppstreamFleet#s3_key}
  */
  readonly s3Key?: string;
}

export function appstreamFleetSessionScriptS3LocationToTerraform(struct?: AppstreamFleetSessionScriptS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktn.stringToTerraform(struct!.s3Key),
  }
}


export function appstreamFleetSessionScriptS3LocationToHclTerraform(struct?: AppstreamFleetSessionScriptS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key: {
      value: cdktn.stringToHclTerraform(struct!.s3Key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppstreamFleetSessionScriptS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppstreamFleetSessionScriptS3Location | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppstreamFleetSessionScriptS3Location | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Bucket = undefined;
      this._s3Key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Bucket = value.s3Bucket;
      this._s3Key = value.s3Key;
    }
  }

  // s3_bucket - computed: true, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_key - computed: true, optional: true, required: false
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }
}
export interface AppstreamFleetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#key AppstreamFleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#value AppstreamFleet#value}
  */
  readonly value?: string;
}

export function appstreamFleetTagsToTerraform(struct?: AppstreamFleetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function appstreamFleetTagsToHclTerraform(struct?: AppstreamFleetTags | cdktn.IResolvable): any {
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

export class AppstreamFleetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppstreamFleetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AppstreamFleetTags | cdktn.IResolvable | undefined) {
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

export class AppstreamFleetTagsList extends cdktn.ComplexList {
  public internalValue? : AppstreamFleetTags[] | cdktn.IResolvable

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
  public get(index: number): AppstreamFleetTagsOutputReference {
    return new AppstreamFleetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppstreamFleetVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function appstreamFleetVpcConfigToTerraform(struct?: AppstreamFleetVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function appstreamFleetVpcConfigToHclTerraform(struct?: AppstreamFleetVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppstreamFleetVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppstreamFleetVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppstreamFleetVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet awscc_appstream_fleet}
*/
export class AppstreamFleet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appstream_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppstreamFleet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppstreamFleet to import
  * @param importFromId The id of the existing AppstreamFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppstreamFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet awscc_appstream_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppstreamFleetConfig
  */
  public constructor(scope: Construct, id: string, config: AppstreamFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appstream_fleet',
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
    this._attributesToDelete = config.attributesToDelete;
    this._computeCapacity.internalValue = config.computeCapacity;
    this._description = config.description;
    this._disableImdsv1 = config.disableImdsv1;
    this._disconnectTimeoutInSeconds = config.disconnectTimeoutInSeconds;
    this._displayName = config.displayName;
    this._domainJoinInfo.internalValue = config.domainJoinInfo;
    this._enableDefaultInternetAccess = config.enableDefaultInternetAccess;
    this._fleetType = config.fleetType;
    this._iamRoleArn = config.iamRoleArn;
    this._idleDisconnectTimeoutInSeconds = config.idleDisconnectTimeoutInSeconds;
    this._imageArn = config.imageArn;
    this._imageName = config.imageName;
    this._instanceType = config.instanceType;
    this._maxConcurrentSessions = config.maxConcurrentSessions;
    this._maxSessionsPerInstance = config.maxSessionsPerInstance;
    this._maxUserDurationInSeconds = config.maxUserDurationInSeconds;
    this._name = config.name;
    this._platform = config.platform;
    this._rootVolumeConfig.internalValue = config.rootVolumeConfig;
    this._sessionScriptS3Location.internalValue = config.sessionScriptS3Location;
    this._streamView = config.streamView;
    this._tags.internalValue = config.tags;
    this._usbDeviceFilterStrings = config.usbDeviceFilterStrings;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attributes_to_delete - computed: true, optional: true, required: false
  private _attributesToDelete?: string[]; 
  public get attributesToDelete() {
    return cdktn.Fn.tolist(this.getListAttribute('attributes_to_delete'));
  }
  public set attributesToDelete(value: string[]) {
    this._attributesToDelete = value;
  }
  public resetAttributesToDelete() {
    this._attributesToDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesToDeleteInput() {
    return this._attributesToDelete;
  }

  // compute_capacity - computed: true, optional: true, required: false
  private _computeCapacity = new AppstreamFleetComputeCapacityOutputReference(this, "compute_capacity");
  public get computeCapacity() {
    return this._computeCapacity;
  }
  public putComputeCapacity(value: AppstreamFleetComputeCapacity) {
    this._computeCapacity.internalValue = value;
  }
  public resetComputeCapacity() {
    this._computeCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCapacityInput() {
    return this._computeCapacity.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_imdsv1 - computed: true, optional: true, required: false
  private _disableImdsv1?: boolean | cdktn.IResolvable; 
  public get disableImdsv1() {
    return this.getBooleanAttribute('disable_imdsv1');
  }
  public set disableImdsv1(value: boolean | cdktn.IResolvable) {
    this._disableImdsv1 = value;
  }
  public resetDisableImdsv1() {
    this._disableImdsv1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableImdsv1Input() {
    return this._disableImdsv1;
  }

  // disconnect_timeout_in_seconds - computed: true, optional: true, required: false
  private _disconnectTimeoutInSeconds?: number; 
  public get disconnectTimeoutInSeconds() {
    return this.getNumberAttribute('disconnect_timeout_in_seconds');
  }
  public set disconnectTimeoutInSeconds(value: number) {
    this._disconnectTimeoutInSeconds = value;
  }
  public resetDisconnectTimeoutInSeconds() {
    this._disconnectTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectTimeoutInSecondsInput() {
    return this._disconnectTimeoutInSeconds;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain_join_info - computed: true, optional: true, required: false
  private _domainJoinInfo = new AppstreamFleetDomainJoinInfoOutputReference(this, "domain_join_info");
  public get domainJoinInfo() {
    return this._domainJoinInfo;
  }
  public putDomainJoinInfo(value: AppstreamFleetDomainJoinInfo) {
    this._domainJoinInfo.internalValue = value;
  }
  public resetDomainJoinInfo() {
    this._domainJoinInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainJoinInfoInput() {
    return this._domainJoinInfo.internalValue;
  }

  // enable_default_internet_access - computed: true, optional: true, required: false
  private _enableDefaultInternetAccess?: boolean | cdktn.IResolvable; 
  public get enableDefaultInternetAccess() {
    return this.getBooleanAttribute('enable_default_internet_access');
  }
  public set enableDefaultInternetAccess(value: boolean | cdktn.IResolvable) {
    this._enableDefaultInternetAccess = value;
  }
  public resetEnableDefaultInternetAccess() {
    this._enableDefaultInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultInternetAccessInput() {
    return this._enableDefaultInternetAccess;
  }

  // fleet_type - computed: true, optional: true, required: false
  private _fleetType?: string; 
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
  }
  public set fleetType(value: string) {
    this._fleetType = value;
  }
  public resetFleetType() {
    this._fleetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetTypeInput() {
    return this._fleetType;
  }

  // iam_role_arn - computed: true, optional: true, required: false
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_disconnect_timeout_in_seconds - computed: true, optional: true, required: false
  private _idleDisconnectTimeoutInSeconds?: number; 
  public get idleDisconnectTimeoutInSeconds() {
    return this.getNumberAttribute('idle_disconnect_timeout_in_seconds');
  }
  public set idleDisconnectTimeoutInSeconds(value: number) {
    this._idleDisconnectTimeoutInSeconds = value;
  }
  public resetIdleDisconnectTimeoutInSeconds() {
    this._idleDisconnectTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDisconnectTimeoutInSecondsInput() {
    return this._idleDisconnectTimeoutInSeconds;
  }

  // image_arn - computed: true, optional: true, required: false
  private _imageArn?: string; 
  public get imageArn() {
    return this.getStringAttribute('image_arn');
  }
  public set imageArn(value: string) {
    this._imageArn = value;
  }
  public resetImageArn() {
    this._imageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageArnInput() {
    return this._imageArn;
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // max_concurrent_sessions - computed: true, optional: true, required: false
  private _maxConcurrentSessions?: number; 
  public get maxConcurrentSessions() {
    return this.getNumberAttribute('max_concurrent_sessions');
  }
  public set maxConcurrentSessions(value: number) {
    this._maxConcurrentSessions = value;
  }
  public resetMaxConcurrentSessions() {
    this._maxConcurrentSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentSessionsInput() {
    return this._maxConcurrentSessions;
  }

  // max_sessions_per_instance - computed: true, optional: true, required: false
  private _maxSessionsPerInstance?: number; 
  public get maxSessionsPerInstance() {
    return this.getNumberAttribute('max_sessions_per_instance');
  }
  public set maxSessionsPerInstance(value: number) {
    this._maxSessionsPerInstance = value;
  }
  public resetMaxSessionsPerInstance() {
    this._maxSessionsPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionsPerInstanceInput() {
    return this._maxSessionsPerInstance;
  }

  // max_user_duration_in_seconds - computed: true, optional: true, required: false
  private _maxUserDurationInSeconds?: number; 
  public get maxUserDurationInSeconds() {
    return this.getNumberAttribute('max_user_duration_in_seconds');
  }
  public set maxUserDurationInSeconds(value: number) {
    this._maxUserDurationInSeconds = value;
  }
  public resetMaxUserDurationInSeconds() {
    this._maxUserDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserDurationInSecondsInput() {
    return this._maxUserDurationInSeconds;
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

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // root_volume_config - computed: true, optional: true, required: false
  private _rootVolumeConfig = new AppstreamFleetRootVolumeConfigOutputReference(this, "root_volume_config");
  public get rootVolumeConfig() {
    return this._rootVolumeConfig;
  }
  public putRootVolumeConfig(value: AppstreamFleetRootVolumeConfig) {
    this._rootVolumeConfig.internalValue = value;
  }
  public resetRootVolumeConfig() {
    this._rootVolumeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeConfigInput() {
    return this._rootVolumeConfig.internalValue;
  }

  // session_script_s3_location - computed: true, optional: true, required: false
  private _sessionScriptS3Location = new AppstreamFleetSessionScriptS3LocationOutputReference(this, "session_script_s3_location");
  public get sessionScriptS3Location() {
    return this._sessionScriptS3Location;
  }
  public putSessionScriptS3Location(value: AppstreamFleetSessionScriptS3Location) {
    this._sessionScriptS3Location.internalValue = value;
  }
  public resetSessionScriptS3Location() {
    this._sessionScriptS3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionScriptS3LocationInput() {
    return this._sessionScriptS3Location.internalValue;
  }

  // stream_view - computed: true, optional: true, required: false
  private _streamView?: string; 
  public get streamView() {
    return this.getStringAttribute('stream_view');
  }
  public set streamView(value: string) {
    this._streamView = value;
  }
  public resetStreamView() {
    this._streamView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamViewInput() {
    return this._streamView;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AppstreamFleetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AppstreamFleetTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // usb_device_filter_strings - computed: true, optional: true, required: false
  private _usbDeviceFilterStrings?: string[]; 
  public get usbDeviceFilterStrings() {
    return this.getListAttribute('usb_device_filter_strings');
  }
  public set usbDeviceFilterStrings(value: string[]) {
    this._usbDeviceFilterStrings = value;
  }
  public resetUsbDeviceFilterStrings() {
    this._usbDeviceFilterStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbDeviceFilterStringsInput() {
    return this._usbDeviceFilterStrings;
  }

  // vpc_config - computed: true, optional: true, required: false
  private _vpcConfig = new AppstreamFleetVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: AppstreamFleetVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes_to_delete: cdktn.listMapper(cdktn.stringToTerraform, false)(this._attributesToDelete),
      compute_capacity: appstreamFleetComputeCapacityToTerraform(this._computeCapacity.internalValue),
      description: cdktn.stringToTerraform(this._description),
      disable_imdsv1: cdktn.booleanToTerraform(this._disableImdsv1),
      disconnect_timeout_in_seconds: cdktn.numberToTerraform(this._disconnectTimeoutInSeconds),
      display_name: cdktn.stringToTerraform(this._displayName),
      domain_join_info: appstreamFleetDomainJoinInfoToTerraform(this._domainJoinInfo.internalValue),
      enable_default_internet_access: cdktn.booleanToTerraform(this._enableDefaultInternetAccess),
      fleet_type: cdktn.stringToTerraform(this._fleetType),
      iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
      idle_disconnect_timeout_in_seconds: cdktn.numberToTerraform(this._idleDisconnectTimeoutInSeconds),
      image_arn: cdktn.stringToTerraform(this._imageArn),
      image_name: cdktn.stringToTerraform(this._imageName),
      instance_type: cdktn.stringToTerraform(this._instanceType),
      max_concurrent_sessions: cdktn.numberToTerraform(this._maxConcurrentSessions),
      max_sessions_per_instance: cdktn.numberToTerraform(this._maxSessionsPerInstance),
      max_user_duration_in_seconds: cdktn.numberToTerraform(this._maxUserDurationInSeconds),
      name: cdktn.stringToTerraform(this._name),
      platform: cdktn.stringToTerraform(this._platform),
      root_volume_config: appstreamFleetRootVolumeConfigToTerraform(this._rootVolumeConfig.internalValue),
      session_script_s3_location: appstreamFleetSessionScriptS3LocationToTerraform(this._sessionScriptS3Location.internalValue),
      stream_view: cdktn.stringToTerraform(this._streamView),
      tags: cdktn.listMapper(appstreamFleetTagsToTerraform, false)(this._tags.internalValue),
      usb_device_filter_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(this._usbDeviceFilterStrings),
      vpc_config: appstreamFleetVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes_to_delete: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._attributesToDelete),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      compute_capacity: {
        value: appstreamFleetComputeCapacityToHclTerraform(this._computeCapacity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppstreamFleetComputeCapacity",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_imdsv1: {
        value: cdktn.booleanToHclTerraform(this._disableImdsv1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disconnect_timeout_in_seconds: {
        value: cdktn.numberToHclTerraform(this._disconnectTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_join_info: {
        value: appstreamFleetDomainJoinInfoToHclTerraform(this._domainJoinInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppstreamFleetDomainJoinInfo",
      },
      enable_default_internet_access: {
        value: cdktn.booleanToHclTerraform(this._enableDefaultInternetAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fleet_type: {
        value: cdktn.stringToHclTerraform(this._fleetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role_arn: {
        value: cdktn.stringToHclTerraform(this._iamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_disconnect_timeout_in_seconds: {
        value: cdktn.numberToHclTerraform(this._idleDisconnectTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      image_arn: {
        value: cdktn.stringToHclTerraform(this._imageArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktn.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktn.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_sessions: {
        value: cdktn.numberToHclTerraform(this._maxConcurrentSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_sessions_per_instance: {
        value: cdktn.numberToHclTerraform(this._maxSessionsPerInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_user_duration_in_seconds: {
        value: cdktn.numberToHclTerraform(this._maxUserDurationInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktn.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_volume_config: {
        value: appstreamFleetRootVolumeConfigToHclTerraform(this._rootVolumeConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppstreamFleetRootVolumeConfig",
      },
      session_script_s3_location: {
        value: appstreamFleetSessionScriptS3LocationToHclTerraform(this._sessionScriptS3Location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppstreamFleetSessionScriptS3Location",
      },
      stream_view: {
        value: cdktn.stringToHclTerraform(this._streamView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(appstreamFleetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppstreamFleetTagsList",
      },
      usb_device_filter_strings: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._usbDeviceFilterStrings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_config: {
        value: appstreamFleetVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppstreamFleetVpcConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
