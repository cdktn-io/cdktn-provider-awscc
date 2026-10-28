/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/fsx_storage_virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccFsxStorageVirtualMachineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/fsx_storage_virtual_machine#id DataAwsccFsxStorageVirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
}

export function dataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform(struct?: DataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToHclTerraform(struct?: DataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_ips - computed: true, optional: false, required: false
  public get dnsIps() {
    return this.getListAttribute('dns_ips');
  }

  // domain_join_service_account_secret - computed: true, optional: false, required: false
  public get domainJoinServiceAccountSecret() {
    return this.getStringAttribute('domain_join_service_account_secret');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // file_system_administrators_group - computed: true, optional: false, required: false
  public get fileSystemAdministratorsGroup() {
    return this.getStringAttribute('file_system_administrators_group');
  }

  // organizational_unit_distinguished_name - computed: true, optional: false, required: false
  public get organizationalUnitDistinguishedName() {
    return this.getStringAttribute('organizational_unit_distinguished_name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}
export interface DataAwsccFsxStorageVirtualMachineActiveDirectoryConfiguration {
}

export function dataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationToTerraform(struct?: DataAwsccFsxStorageVirtualMachineActiveDirectoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationToHclTerraform(struct?: DataAwsccFsxStorageVirtualMachineActiveDirectoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccFsxStorageVirtualMachineActiveDirectoryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxStorageVirtualMachineActiveDirectoryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // net_bios_name - computed: true, optional: false, required: false
  public get netBiosName() {
    return this.getStringAttribute('net_bios_name');
  }

  // self_managed_active_directory_configuration - computed: true, optional: false, required: false
  private _selfManagedActiveDirectoryConfiguration = new DataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference(this, "self_managed_active_directory_configuration");
  public get selfManagedActiveDirectoryConfiguration() {
    return this._selfManagedActiveDirectoryConfiguration;
  }
}
export interface DataAwsccFsxStorageVirtualMachineTags {
}

export function dataAwsccFsxStorageVirtualMachineTagsToTerraform(struct?: DataAwsccFsxStorageVirtualMachineTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccFsxStorageVirtualMachineTagsToHclTerraform(struct?: DataAwsccFsxStorageVirtualMachineTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccFsxStorageVirtualMachineTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccFsxStorageVirtualMachineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccFsxStorageVirtualMachineTags | undefined) {
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

export class DataAwsccFsxStorageVirtualMachineTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccFsxStorageVirtualMachineTagsOutputReference {
    return new DataAwsccFsxStorageVirtualMachineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/fsx_storage_virtual_machine awscc_fsx_storage_virtual_machine}
*/
export class DataAwsccFsxStorageVirtualMachine extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_fsx_storage_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccFsxStorageVirtualMachine resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccFsxStorageVirtualMachine to import
  * @param importFromId The id of the existing DataAwsccFsxStorageVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/fsx_storage_virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccFsxStorageVirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fsx_storage_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/fsx_storage_virtual_machine awscc_fsx_storage_virtual_machine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFsxStorageVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFsxStorageVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_fsx_storage_virtual_machine',
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

  // active_directory_configuration - computed: true, optional: false, required: false
  private _activeDirectoryConfiguration = new DataAwsccFsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference(this, "active_directory_configuration");
  public get activeDirectoryConfiguration() {
    return this._activeDirectoryConfiguration;
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // root_volume_security_style - computed: true, optional: false, required: false
  public get rootVolumeSecurityStyle() {
    return this.getStringAttribute('root_volume_security_style');
  }

  // storage_virtual_machine_id - computed: true, optional: false, required: false
  public get storageVirtualMachineId() {
    return this.getStringAttribute('storage_virtual_machine_id');
  }

  // svm_admin_password - computed: true, optional: false, required: false
  public get svmAdminPassword() {
    return this.getStringAttribute('svm_admin_password');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccFsxStorageVirtualMachineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
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
