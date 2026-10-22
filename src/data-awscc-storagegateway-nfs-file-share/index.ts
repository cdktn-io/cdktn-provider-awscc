/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccStoragegatewayNfsFileShareConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share#id DataAwsccStoragegatewayNfsFileShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccStoragegatewayNfsFileShareCacheAttributes {
}

export function dataAwsccStoragegatewayNfsFileShareCacheAttributesToTerraform(struct?: DataAwsccStoragegatewayNfsFileShareCacheAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStoragegatewayNfsFileShareCacheAttributesToHclTerraform(struct?: DataAwsccStoragegatewayNfsFileShareCacheAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccStoragegatewayNfsFileShareCacheAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStoragegatewayNfsFileShareCacheAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_stale_timeout_in_seconds - computed: true, optional: false, required: false
  public get cacheStaleTimeoutInSeconds() {
    return this.getNumberAttribute('cache_stale_timeout_in_seconds');
  }
}
export interface DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults {
}

export function dataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsToTerraform(struct?: DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsToHclTerraform(struct?: DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory_mode - computed: true, optional: false, required: false
  public get directoryMode() {
    return this.getStringAttribute('directory_mode');
  }

  // file_mode - computed: true, optional: false, required: false
  public get fileMode() {
    return this.getStringAttribute('file_mode');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getNumberAttribute('owner_id');
  }
}
export interface DataAwsccStoragegatewayNfsFileShareTags {
}

export function dataAwsccStoragegatewayNfsFileShareTagsToTerraform(struct?: DataAwsccStoragegatewayNfsFileShareTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStoragegatewayNfsFileShareTagsToHclTerraform(struct?: DataAwsccStoragegatewayNfsFileShareTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStoragegatewayNfsFileShareTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccStoragegatewayNfsFileShareTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStoragegatewayNfsFileShareTags | undefined) {
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

export class DataAwsccStoragegatewayNfsFileShareTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccStoragegatewayNfsFileShareTagsOutputReference {
    return new DataAwsccStoragegatewayNfsFileShareTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share awscc_storagegateway_nfs_file_share}
*/
export class DataAwsccStoragegatewayNfsFileShare extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_storagegateway_nfs_file_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccStoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccStoragegatewayNfsFileShare to import
  * @param importFromId The id of the existing DataAwsccStoragegatewayNfsFileShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccStoragegatewayNfsFileShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_storagegateway_nfs_file_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/storagegateway_nfs_file_share awscc_storagegateway_nfs_file_share} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccStoragegatewayNfsFileShareConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccStoragegatewayNfsFileShareConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_storagegateway_nfs_file_share',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.107.0',
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

  // audit_destination_arn - computed: true, optional: false, required: false
  public get auditDestinationArn() {
    return this.getStringAttribute('audit_destination_arn');
  }

  // bucket_region - computed: true, optional: false, required: false
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }

  // cache_attributes - computed: true, optional: false, required: false
  private _cacheAttributes = new DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference(this, "cache_attributes");
  public get cacheAttributes() {
    return this._cacheAttributes;
  }

  // client_list - computed: true, optional: false, required: false
  public get clientList() {
    return cdktn.Fn.tolist(this.getListAttribute('client_list'));
  }

  // default_storage_class - computed: true, optional: false, required: false
  public get defaultStorageClass() {
    return this.getStringAttribute('default_storage_class');
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // file_share_arn - computed: true, optional: false, required: false
  public get fileShareArn() {
    return this.getStringAttribute('file_share_arn');
  }

  // file_share_id - computed: true, optional: false, required: false
  public get fileShareId() {
    return this.getStringAttribute('file_share_id');
  }

  // file_share_name - computed: true, optional: false, required: false
  public get fileShareName() {
    return this.getStringAttribute('file_share_name');
  }

  // file_share_status - computed: true, optional: false, required: false
  public get fileShareStatus() {
    return this.getStringAttribute('file_share_status');
  }

  // gateway_arn - computed: true, optional: false, required: false
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }

  // guess_mime_type_enabled - computed: true, optional: false, required: false
  public get guessMimeTypeEnabled() {
    return this.getBooleanAttribute('guess_mime_type_enabled');
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

  // kms_encrypted - computed: true, optional: false, required: false
  public get kmsEncrypted() {
    return this.getBooleanAttribute('kms_encrypted');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }

  // location_arn - computed: true, optional: false, required: false
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }

  // nfs_file_share_defaults - computed: true, optional: false, required: false
  private _nfsFileShareDefaults = new DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(this, "nfs_file_share_defaults");
  public get nfsFileShareDefaults() {
    return this._nfsFileShareDefaults;
  }

  // notification_policy - computed: true, optional: false, required: false
  public get notificationPolicy() {
    return this.getStringAttribute('notification_policy');
  }

  // object_acl - computed: true, optional: false, required: false
  public get objectAcl() {
    return this.getStringAttribute('object_acl');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // requester_pays - computed: true, optional: false, required: false
  public get requesterPays() {
    return this.getBooleanAttribute('requester_pays');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // squash - computed: true, optional: false, required: false
  public get squash() {
    return this.getStringAttribute('squash');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccStoragegatewayNfsFileShareTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // vpc_endpoint_dns_name - computed: true, optional: false, required: false
  public get vpcEndpointDnsName() {
    return this.getStringAttribute('vpc_endpoint_dns_name');
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
