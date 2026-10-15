/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StoragegatewayNfsFileShareConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ARN of the CloudWatch log group that receives the share's audit logs. Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}
  */
  readonly auditDestinationArn?: string;
  /**
  * The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}
  */
  readonly bucketRegion?: string;
  /**
  * Refresh cache information for the file share. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#cache_attributes StoragegatewayNfsFileShare#cache_attributes}
  */
  readonly cacheAttributes?: StoragegatewayNfsFileShareCacheAttributes;
  /**
  * The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}
  */
  readonly clientList?: string[];
  /**
  * The S3 storage class for new objects. The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}
  */
  readonly defaultStorageClass?: string;
  /**
  * The server-side encryption the gateway applies to objects it writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#encryption_type StoragegatewayNfsFileShare#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * The name of the file share, which defaults to the bucket name when omitted. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}
  */
  readonly fileShareName?: string;
  /**
  * The ARN of the S3 File Gateway that hosts the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}
  */
  readonly gatewayArn: string;
  /**
  * Whether the gateway infers the MIME type of uploaded objects from their extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}
  */
  readonly guessMimeTypeEnabled?: boolean | cdktn.IResolvable;
  /**
  * Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}
  */
  readonly kmsEncrypted?: boolean | cdktn.IResolvable;
  /**
  * The KMS key used for encryption, when EncryptionType selects KMS. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#kms_key StoragegatewayNfsFileShare#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * The ARN of the S3 bucket, or bucket prefix, the share exposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}
  */
  readonly locationArn: string;
  /**
  * Default values for the file and directory permissions of an NFS share. Removing this property from a template leaves the live values unchanged rather than clearing them, because the service has no reset for it: a create that omits the object leaves it absent, but the update path merges member by member keyed on the same internal sentinel that reports absence, so no request can restore that state. Set the members you want rather than relying on removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}
  */
  readonly nfsFileShareDefaults?: StoragegatewayNfsFileShareNfsFileShareDefaults;
  /**
  * The upload-notification settling period, as a JSON document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}
  */
  readonly notificationPolicy?: string;
  /**
  * The canned S3 ACL applied to objects the gateway writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}
  */
  readonly objectAcl?: string;
  /**
  * Whether clients may write to the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}
  */
  readonly readOnly?: boolean | cdktn.IResolvable;
  /**
  * Whether the bucket is a Requester Pays bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}
  */
  readonly requesterPays?: boolean | cdktn.IResolvable;
  /**
  * The ARN of the IAM role the gateway assumes when it accesses the S3 location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#role StoragegatewayNfsFileShare#role}
  */
  readonly role: string;
  /**
  * How the NFS share maps client user IDs. The service accepts RootSquash, NoSquash and AllSquash; it is a length-bounded string in the API model rather than an enumeration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}
  */
  readonly squash?: string;
  /**
  * Tags assigned to the file share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}
  */
  readonly tags?: StoragegatewayNfsFileShareTags[] | cdktn.IResolvable;
  /**
  * The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}
  */
  readonly vpcEndpointDnsName?: string;
}
export interface StoragegatewayNfsFileShareCacheAttributes {
  /**
  * How long the directory contents cached by the gateway are considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}
  */
  readonly cacheStaleTimeoutInSeconds?: number;
}

export function storagegatewayNfsFileShareCacheAttributesToTerraform(struct?: StoragegatewayNfsFileShareCacheAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cache_stale_timeout_in_seconds: cdktn.numberToTerraform(struct!.cacheStaleTimeoutInSeconds),
  }
}


export function storagegatewayNfsFileShareCacheAttributesToHclTerraform(struct?: StoragegatewayNfsFileShareCacheAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cache_stale_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.cacheStaleTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoragegatewayNfsFileShareCacheAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StoragegatewayNfsFileShareCacheAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheStaleTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheStaleTimeoutInSeconds = this._cacheStaleTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoragegatewayNfsFileShareCacheAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheStaleTimeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheStaleTimeoutInSeconds = value.cacheStaleTimeoutInSeconds;
    }
  }

  // cache_stale_timeout_in_seconds - computed: true, optional: true, required: false
  private _cacheStaleTimeoutInSeconds?: number; 
  public get cacheStaleTimeoutInSeconds() {
    return this.getNumberAttribute('cache_stale_timeout_in_seconds');
  }
  public set cacheStaleTimeoutInSeconds(value: number) {
    this._cacheStaleTimeoutInSeconds = value;
  }
  public resetCacheStaleTimeoutInSeconds() {
    this._cacheStaleTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheStaleTimeoutInSecondsInput() {
    return this._cacheStaleTimeoutInSeconds;
  }
}
export interface StoragegatewayNfsFileShareNfsFileShareDefaults {
  /**
  * The Unix directory mode in the form nnnn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#directory_mode StoragegatewayNfsFileShare#directory_mode}
  */
  readonly directoryMode?: string;
  /**
  * The Unix file mode in the form nnnn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#file_mode StoragegatewayNfsFileShare#file_mode}
  */
  readonly fileMode?: string;
  /**
  * The default group ID for files in the file share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#group_id StoragegatewayNfsFileShare#group_id}
  */
  readonly groupId?: number;
  /**
  * The default owner ID for files in the file share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#owner_id StoragegatewayNfsFileShare#owner_id}
  */
  readonly ownerId?: number;
}

export function storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform(struct?: StoragegatewayNfsFileShareNfsFileShareDefaults | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_mode: cdktn.stringToTerraform(struct!.directoryMode),
    file_mode: cdktn.stringToTerraform(struct!.fileMode),
    group_id: cdktn.numberToTerraform(struct!.groupId),
    owner_id: cdktn.numberToTerraform(struct!.ownerId),
  }
}


export function storagegatewayNfsFileShareNfsFileShareDefaultsToHclTerraform(struct?: StoragegatewayNfsFileShareNfsFileShareDefaults | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_mode: {
      value: cdktn.stringToHclTerraform(struct!.directoryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_mode: {
      value: cdktn.stringToHclTerraform(struct!.fileMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktn.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    owner_id: {
      value: cdktn.numberToHclTerraform(struct!.ownerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StoragegatewayNfsFileShareNfsFileShareDefaults | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryMode = this._directoryMode;
    }
    if (this._fileMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMode = this._fileMode;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._ownerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerId = this._ownerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoragegatewayNfsFileShareNfsFileShareDefaults | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryMode = undefined;
      this._fileMode = undefined;
      this._groupId = undefined;
      this._ownerId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryMode = value.directoryMode;
      this._fileMode = value.fileMode;
      this._groupId = value.groupId;
      this._ownerId = value.ownerId;
    }
  }

  // directory_mode - computed: true, optional: true, required: false
  private _directoryMode?: string; 
  public get directoryMode() {
    return this.getStringAttribute('directory_mode');
  }
  public set directoryMode(value: string) {
    this._directoryMode = value;
  }
  public resetDirectoryMode() {
    this._directoryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryModeInput() {
    return this._directoryMode;
  }

  // file_mode - computed: true, optional: true, required: false
  private _fileMode?: string; 
  public get fileMode() {
    return this.getStringAttribute('file_mode');
  }
  public set fileMode(value: string) {
    this._fileMode = value;
  }
  public resetFileMode() {
    this._fileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileModeInput() {
    return this._fileMode;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // owner_id - computed: true, optional: true, required: false
  private _ownerId?: number; 
  public get ownerId() {
    return this.getNumberAttribute('owner_id');
  }
  public set ownerId(value: number) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }
}
export interface StoragegatewayNfsFileShareTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#key StoragegatewayNfsFileShare#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#value StoragegatewayNfsFileShare#value}
  */
  readonly value?: string;
}

export function storagegatewayNfsFileShareTagsToTerraform(struct?: StoragegatewayNfsFileShareTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function storagegatewayNfsFileShareTagsToHclTerraform(struct?: StoragegatewayNfsFileShareTags | cdktn.IResolvable): any {
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

export class StoragegatewayNfsFileShareTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StoragegatewayNfsFileShareTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StoragegatewayNfsFileShareTags | cdktn.IResolvable | undefined) {
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

export class StoragegatewayNfsFileShareTagsList extends cdktn.ComplexList {
  public internalValue? : StoragegatewayNfsFileShareTags[] | cdktn.IResolvable

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
  public get(index: number): StoragegatewayNfsFileShareTagsOutputReference {
    return new StoragegatewayNfsFileShareTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share awscc_storagegateway_nfs_file_share}
*/
export class StoragegatewayNfsFileShare extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_storagegateway_nfs_file_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StoragegatewayNfsFileShare to import
  * @param importFromId The id of the existing StoragegatewayNfsFileShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StoragegatewayNfsFileShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_storagegateway_nfs_file_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/storagegateway_nfs_file_share awscc_storagegateway_nfs_file_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegatewayNfsFileShareConfig
  */
  public constructor(scope: Construct, id: string, config: StoragegatewayNfsFileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_storagegateway_nfs_file_share',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.106.0',
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
    this._auditDestinationArn = config.auditDestinationArn;
    this._bucketRegion = config.bucketRegion;
    this._cacheAttributes.internalValue = config.cacheAttributes;
    this._clientList = config.clientList;
    this._defaultStorageClass = config.defaultStorageClass;
    this._encryptionType = config.encryptionType;
    this._fileShareName = config.fileShareName;
    this._gatewayArn = config.gatewayArn;
    this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
    this._kmsEncrypted = config.kmsEncrypted;
    this._kmsKey = config.kmsKey;
    this._locationArn = config.locationArn;
    this._nfsFileShareDefaults.internalValue = config.nfsFileShareDefaults;
    this._notificationPolicy = config.notificationPolicy;
    this._objectAcl = config.objectAcl;
    this._readOnly = config.readOnly;
    this._requesterPays = config.requesterPays;
    this._role = config.role;
    this._squash = config.squash;
    this._tags.internalValue = config.tags;
    this._vpcEndpointDnsName = config.vpcEndpointDnsName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_destination_arn - computed: true, optional: true, required: false
  private _auditDestinationArn?: string; 
  public get auditDestinationArn() {
    return this.getStringAttribute('audit_destination_arn');
  }
  public set auditDestinationArn(value: string) {
    this._auditDestinationArn = value;
  }
  public resetAuditDestinationArn() {
    this._auditDestinationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditDestinationArnInput() {
    return this._auditDestinationArn;
  }

  // bucket_region - computed: true, optional: true, required: false
  private _bucketRegion?: string; 
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string) {
    this._bucketRegion = value;
  }
  public resetBucketRegion() {
    this._bucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion;
  }

  // cache_attributes - computed: true, optional: true, required: false
  private _cacheAttributes = new StoragegatewayNfsFileShareCacheAttributesOutputReference(this, "cache_attributes");
  public get cacheAttributes() {
    return this._cacheAttributes;
  }
  public putCacheAttributes(value: StoragegatewayNfsFileShareCacheAttributes) {
    this._cacheAttributes.internalValue = value;
  }
  public resetCacheAttributes() {
    this._cacheAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheAttributesInput() {
    return this._cacheAttributes.internalValue;
  }

  // client_list - computed: true, optional: true, required: false
  private _clientList?: string[]; 
  public get clientList() {
    return cdktn.Fn.tolist(this.getListAttribute('client_list'));
  }
  public set clientList(value: string[]) {
    this._clientList = value;
  }
  public resetClientList() {
    this._clientList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientListInput() {
    return this._clientList;
  }

  // default_storage_class - computed: true, optional: true, required: false
  private _defaultStorageClass?: string; 
  public get defaultStorageClass() {
    return this.getStringAttribute('default_storage_class');
  }
  public set defaultStorageClass(value: string) {
    this._defaultStorageClass = value;
  }
  public resetDefaultStorageClass() {
    this._defaultStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageClassInput() {
    return this._defaultStorageClass;
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // file_share_arn - computed: true, optional: false, required: false
  public get fileShareArn() {
    return this.getStringAttribute('file_share_arn');
  }

  // file_share_id - computed: true, optional: false, required: false
  public get fileShareId() {
    return this.getStringAttribute('file_share_id');
  }

  // file_share_name - computed: true, optional: true, required: false
  private _fileShareName?: string; 
  public get fileShareName() {
    return this.getStringAttribute('file_share_name');
  }
  public set fileShareName(value: string) {
    this._fileShareName = value;
  }
  public resetFileShareName() {
    this._fileShareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileShareNameInput() {
    return this._fileShareName;
  }

  // file_share_status - computed: true, optional: false, required: false
  public get fileShareStatus() {
    return this.getStringAttribute('file_share_status');
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn?: string; 
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayArnInput() {
    return this._gatewayArn;
  }

  // guess_mime_type_enabled - computed: true, optional: true, required: false
  private _guessMimeTypeEnabled?: boolean | cdktn.IResolvable; 
  public get guessMimeTypeEnabled() {
    return this.getBooleanAttribute('guess_mime_type_enabled');
  }
  public set guessMimeTypeEnabled(value: boolean | cdktn.IResolvable) {
    this._guessMimeTypeEnabled = value;
  }
  public resetGuessMimeTypeEnabled() {
    this._guessMimeTypeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guessMimeTypeEnabledInput() {
    return this._guessMimeTypeEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_encrypted - computed: true, optional: true, required: false
  private _kmsEncrypted?: boolean | cdktn.IResolvable; 
  public get kmsEncrypted() {
    return this.getBooleanAttribute('kms_encrypted');
  }
  public set kmsEncrypted(value: boolean | cdktn.IResolvable) {
    this._kmsEncrypted = value;
  }
  public resetKmsEncrypted() {
    this._kmsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedInput() {
    return this._kmsEncrypted;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // location_arn - computed: false, optional: false, required: true
  private _locationArn?: string; 
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }
  public set locationArn(value: string) {
    this._locationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationArnInput() {
    return this._locationArn;
  }

  // nfs_file_share_defaults - computed: true, optional: true, required: false
  private _nfsFileShareDefaults = new StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(this, "nfs_file_share_defaults");
  public get nfsFileShareDefaults() {
    return this._nfsFileShareDefaults;
  }
  public putNfsFileShareDefaults(value: StoragegatewayNfsFileShareNfsFileShareDefaults) {
    this._nfsFileShareDefaults.internalValue = value;
  }
  public resetNfsFileShareDefaults() {
    this._nfsFileShareDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsFileShareDefaultsInput() {
    return this._nfsFileShareDefaults.internalValue;
  }

  // notification_policy - computed: true, optional: true, required: false
  private _notificationPolicy?: string; 
  public get notificationPolicy() {
    return this.getStringAttribute('notification_policy');
  }
  public set notificationPolicy(value: string) {
    this._notificationPolicy = value;
  }
  public resetNotificationPolicy() {
    this._notificationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPolicyInput() {
    return this._notificationPolicy;
  }

  // object_acl - computed: true, optional: true, required: false
  private _objectAcl?: string; 
  public get objectAcl() {
    return this.getStringAttribute('object_acl');
  }
  public set objectAcl(value: string) {
    this._objectAcl = value;
  }
  public resetObjectAcl() {
    this._objectAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectAclInput() {
    return this._objectAcl;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktn.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktn.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // requester_pays - computed: true, optional: true, required: false
  private _requesterPays?: boolean | cdktn.IResolvable; 
  public get requesterPays() {
    return this.getBooleanAttribute('requester_pays');
  }
  public set requesterPays(value: boolean | cdktn.IResolvable) {
    this._requesterPays = value;
  }
  public resetRequesterPays() {
    this._requesterPays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterPaysInput() {
    return this._requesterPays;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // squash - computed: true, optional: true, required: false
  private _squash?: string; 
  public get squash() {
    return this.getStringAttribute('squash');
  }
  public set squash(value: string) {
    this._squash = value;
  }
  public resetSquash() {
    this._squash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashInput() {
    return this._squash;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new StoragegatewayNfsFileShareTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: StoragegatewayNfsFileShareTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_endpoint_dns_name - computed: true, optional: true, required: false
  private _vpcEndpointDnsName?: string; 
  public get vpcEndpointDnsName() {
    return this.getStringAttribute('vpc_endpoint_dns_name');
  }
  public set vpcEndpointDnsName(value: string) {
    this._vpcEndpointDnsName = value;
  }
  public resetVpcEndpointDnsName() {
    this._vpcEndpointDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointDnsNameInput() {
    return this._vpcEndpointDnsName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_destination_arn: cdktn.stringToTerraform(this._auditDestinationArn),
      bucket_region: cdktn.stringToTerraform(this._bucketRegion),
      cache_attributes: storagegatewayNfsFileShareCacheAttributesToTerraform(this._cacheAttributes.internalValue),
      client_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._clientList),
      default_storage_class: cdktn.stringToTerraform(this._defaultStorageClass),
      encryption_type: cdktn.stringToTerraform(this._encryptionType),
      file_share_name: cdktn.stringToTerraform(this._fileShareName),
      gateway_arn: cdktn.stringToTerraform(this._gatewayArn),
      guess_mime_type_enabled: cdktn.booleanToTerraform(this._guessMimeTypeEnabled),
      kms_encrypted: cdktn.booleanToTerraform(this._kmsEncrypted),
      kms_key: cdktn.stringToTerraform(this._kmsKey),
      location_arn: cdktn.stringToTerraform(this._locationArn),
      nfs_file_share_defaults: storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform(this._nfsFileShareDefaults.internalValue),
      notification_policy: cdktn.stringToTerraform(this._notificationPolicy),
      object_acl: cdktn.stringToTerraform(this._objectAcl),
      read_only: cdktn.booleanToTerraform(this._readOnly),
      requester_pays: cdktn.booleanToTerraform(this._requesterPays),
      role: cdktn.stringToTerraform(this._role),
      squash: cdktn.stringToTerraform(this._squash),
      tags: cdktn.listMapper(storagegatewayNfsFileShareTagsToTerraform, false)(this._tags.internalValue),
      vpc_endpoint_dns_name: cdktn.stringToTerraform(this._vpcEndpointDnsName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_destination_arn: {
        value: cdktn.stringToHclTerraform(this._auditDestinationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_region: {
        value: cdktn.stringToHclTerraform(this._bucketRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_attributes: {
        value: storagegatewayNfsFileShareCacheAttributesToHclTerraform(this._cacheAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StoragegatewayNfsFileShareCacheAttributes",
      },
      client_list: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._clientList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_storage_class: {
        value: cdktn.stringToHclTerraform(this._defaultStorageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_type: {
        value: cdktn.stringToHclTerraform(this._encryptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_share_name: {
        value: cdktn.stringToHclTerraform(this._fileShareName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_arn: {
        value: cdktn.stringToHclTerraform(this._gatewayArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guess_mime_type_enabled: {
        value: cdktn.booleanToHclTerraform(this._guessMimeTypeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_encrypted: {
        value: cdktn.booleanToHclTerraform(this._kmsEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key: {
        value: cdktn.stringToHclTerraform(this._kmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_arn: {
        value: cdktn.stringToHclTerraform(this._locationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nfs_file_share_defaults: {
        value: storagegatewayNfsFileShareNfsFileShareDefaultsToHclTerraform(this._nfsFileShareDefaults.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StoragegatewayNfsFileShareNfsFileShareDefaults",
      },
      notification_policy: {
        value: cdktn.stringToHclTerraform(this._notificationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_acl: {
        value: cdktn.stringToHclTerraform(this._objectAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only: {
        value: cdktn.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      requester_pays: {
        value: cdktn.booleanToHclTerraform(this._requesterPays),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      squash: {
        value: cdktn.stringToHclTerraform(this._squash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(storagegatewayNfsFileShareTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StoragegatewayNfsFileShareTagsList",
      },
      vpc_endpoint_dns_name: {
        value: cdktn.stringToHclTerraform(this._vpcEndpointDnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
