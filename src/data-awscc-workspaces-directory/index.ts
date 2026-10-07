/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWorkspacesDirectoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory#id DataAwsccWorkspacesDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccWorkspacesDirectoryActiveDirectoryConfig {
}

export function dataAwsccWorkspacesDirectoryActiveDirectoryConfigToTerraform(struct?: DataAwsccWorkspacesDirectoryActiveDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryActiveDirectoryConfigToHclTerraform(struct?: DataAwsccWorkspacesDirectoryActiveDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectoryActiveDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryActiveDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // service_account_secret_arn - computed: true, optional: false, required: false
  public get serviceAccountSecretArn() {
    return this.getStringAttribute('service_account_secret_arn');
  }
}
export interface DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties {
}

export function dataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesToTerraform(struct?: DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesToHclTerraform(struct?: DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority_arn - computed: true, optional: false, required: false
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccWorkspacesDirectoryIdcConfig {
}

export function dataAwsccWorkspacesDirectoryIdcConfigToTerraform(struct?: DataAwsccWorkspacesDirectoryIdcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryIdcConfigToHclTerraform(struct?: DataAwsccWorkspacesDirectoryIdcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryIdcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectoryIdcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryIdcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
}
export interface DataAwsccWorkspacesDirectoryMicrosoftEntraConfig {
}

export function dataAwsccWorkspacesDirectoryMicrosoftEntraConfigToTerraform(struct?: DataAwsccWorkspacesDirectoryMicrosoftEntraConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryMicrosoftEntraConfigToHclTerraform(struct?: DataAwsccWorkspacesDirectoryMicrosoftEntraConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectoryMicrosoftEntraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryMicrosoftEntraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_config_secret_arn - computed: true, optional: false, required: false
  public get applicationConfigSecretArn() {
    return this.getStringAttribute('application_config_secret_arn');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export interface DataAwsccWorkspacesDirectorySamlProperties {
}

export function dataAwsccWorkspacesDirectorySamlPropertiesToTerraform(struct?: DataAwsccWorkspacesDirectorySamlProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectorySamlPropertiesToHclTerraform(struct?: DataAwsccWorkspacesDirectorySamlProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectorySamlPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectorySamlProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectorySamlProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // relay_state_parameter_name - computed: true, optional: false, required: false
  public get relayStateParameterName() {
    return this.getStringAttribute('relay_state_parameter_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_access_url - computed: true, optional: false, required: false
  public get userAccessUrl() {
    return this.getStringAttribute('user_access_url');
  }
}
export interface DataAwsccWorkspacesDirectorySelfservicePermissions {
}

export function dataAwsccWorkspacesDirectorySelfservicePermissionsToTerraform(struct?: DataAwsccWorkspacesDirectorySelfservicePermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectorySelfservicePermissionsToHclTerraform(struct?: DataAwsccWorkspacesDirectorySelfservicePermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectorySelfservicePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectorySelfservicePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // change_compute_type - computed: true, optional: false, required: false
  public get changeComputeType() {
    return this.getStringAttribute('change_compute_type');
  }

  // increase_volume_size - computed: true, optional: false, required: false
  public get increaseVolumeSize() {
    return this.getStringAttribute('increase_volume_size');
  }

  // rebuild_workspace - computed: true, optional: false, required: false
  public get rebuildWorkspace() {
    return this.getStringAttribute('rebuild_workspace');
  }

  // restart_workspace - computed: true, optional: false, required: false
  public get restartWorkspace() {
    return this.getStringAttribute('restart_workspace');
  }

  // switch_running_mode - computed: true, optional: false, required: false
  public get switchRunningMode() {
    return this.getStringAttribute('switch_running_mode');
  }
}
export interface DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator {
}

export function dataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorToTerraform(struct?: DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorToHclTerraform(struct?: DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // preferred_protocol - computed: true, optional: false, required: false
  public get preferredProtocol() {
    return this.getStringAttribute('preferred_protocol');
  }
}
export interface DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors {
}

export function dataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsToTerraform(struct?: DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsToHclTerraform(struct?: DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference {
    return new DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings {
}

export function dataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsToTerraform(struct?: DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsToHclTerraform(struct?: DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // maximum_length - computed: true, optional: false, required: false
  public get maximumLength() {
    return this.getNumberAttribute('maximum_length');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }
}

export class DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference {
    return new DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWorkspacesDirectoryStreamingProperties {
}

export function dataAwsccWorkspacesDirectoryStreamingPropertiesToTerraform(struct?: DataAwsccWorkspacesDirectoryStreamingProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryStreamingPropertiesToHclTerraform(struct?: DataAwsccWorkspacesDirectoryStreamingProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectoryStreamingProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryStreamingProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // global_accelerator - computed: true, optional: false, required: false
  private _globalAccelerator = new DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference(this, "global_accelerator");
  public get globalAccelerator() {
    return this._globalAccelerator;
  }

  // storage_connectors - computed: true, optional: false, required: false
  private _storageConnectors = new DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList(this, "storage_connectors", false);
  public get storageConnectors() {
    return this._storageConnectors;
  }

  // streaming_experience_preferred_protocol - computed: true, optional: false, required: false
  public get streamingExperiencePreferredProtocol() {
    return this.getStringAttribute('streaming_experience_preferred_protocol');
  }

  // user_settings - computed: true, optional: false, required: false
  private _userSettings = new DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList(this, "user_settings", false);
  public get userSettings() {
    return this._userSettings;
  }
}
export interface DataAwsccWorkspacesDirectoryTags {
}

export function dataAwsccWorkspacesDirectoryTagsToTerraform(struct?: DataAwsccWorkspacesDirectoryTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryTagsToHclTerraform(struct?: DataAwsccWorkspacesDirectoryTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWorkspacesDirectoryTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryTags | undefined) {
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

export class DataAwsccWorkspacesDirectoryTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWorkspacesDirectoryTagsOutputReference {
    return new DataAwsccWorkspacesDirectoryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints {
}

export function dataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsToTerraform(struct?: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsToHclTerraform(struct?: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_endpoint_type - computed: true, optional: false, required: false
  public get accessEndpointType() {
    return this.getStringAttribute('access_endpoint_type');
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
}

export class DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference {
    return new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig {
}

export function dataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigToTerraform(struct?: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigToHclTerraform(struct?: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_endpoints - computed: true, optional: false, required: false
  private _accessEndpoints = new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList(this, "access_endpoints", false);
  public get accessEndpoints() {
    return this._accessEndpoints;
  }

  // internet_fallback_protocols - computed: true, optional: false, required: false
  public get internetFallbackProtocols() {
    return this.getListAttribute('internet_fallback_protocols');
  }
}
export interface DataAwsccWorkspacesDirectoryWorkspaceAccessProperties {
}

export function dataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct?: DataAwsccWorkspacesDirectoryWorkspaceAccessProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesToHclTerraform(struct?: DataAwsccWorkspacesDirectoryWorkspaceAccessProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectoryWorkspaceAccessProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryWorkspaceAccessProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_endpoint_config - computed: true, optional: false, required: false
  private _accessEndpointConfig = new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference(this, "access_endpoint_config");
  public get accessEndpointConfig() {
    return this._accessEndpointConfig;
  }

  // device_type_android - computed: true, optional: false, required: false
  public get deviceTypeAndroid() {
    return this.getStringAttribute('device_type_android');
  }

  // device_type_chrome_os - computed: true, optional: false, required: false
  public get deviceTypeChromeOs() {
    return this.getStringAttribute('device_type_chrome_os');
  }

  // device_type_ios - computed: true, optional: false, required: false
  public get deviceTypeIos() {
    return this.getStringAttribute('device_type_ios');
  }

  // device_type_linux - computed: true, optional: false, required: false
  public get deviceTypeLinux() {
    return this.getStringAttribute('device_type_linux');
  }

  // device_type_osx - computed: true, optional: false, required: false
  public get deviceTypeOsx() {
    return this.getStringAttribute('device_type_osx');
  }

  // device_type_web - computed: true, optional: false, required: false
  public get deviceTypeWeb() {
    return this.getStringAttribute('device_type_web');
  }

  // device_type_windows - computed: true, optional: false, required: false
  public get deviceTypeWindows() {
    return this.getStringAttribute('device_type_windows');
  }

  // device_type_work_spaces_thin_client - computed: true, optional: false, required: false
  public get deviceTypeWorkSpacesThinClient() {
    return this.getStringAttribute('device_type_work_spaces_thin_client');
  }

  // device_type_zero_client - computed: true, optional: false, required: false
  public get deviceTypeZeroClient() {
    return this.getStringAttribute('device_type_zero_client');
  }
}
export interface DataAwsccWorkspacesDirectoryWorkspaceCreationProperties {
}

export function dataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct?: DataAwsccWorkspacesDirectoryWorkspaceCreationProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesToHclTerraform(struct?: DataAwsccWorkspacesDirectoryWorkspaceCreationProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesDirectoryWorkspaceCreationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesDirectoryWorkspaceCreationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_security_group_id - computed: true, optional: false, required: false
  public get customSecurityGroupId() {
    return this.getStringAttribute('custom_security_group_id');
  }

  // default_ou - computed: true, optional: false, required: false
  public get defaultOu() {
    return this.getStringAttribute('default_ou');
  }

  // enable_internet_access - computed: true, optional: false, required: false
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }

  // enable_maintenance_mode - computed: true, optional: false, required: false
  public get enableMaintenanceMode() {
    return this.getBooleanAttribute('enable_maintenance_mode');
  }

  // instance_iam_role_arn - computed: true, optional: false, required: false
  public get instanceIamRoleArn() {
    return this.getStringAttribute('instance_iam_role_arn');
  }

  // user_enabled_as_local_administrator - computed: true, optional: false, required: false
  public get userEnabledAsLocalAdministrator() {
    return this.getBooleanAttribute('user_enabled_as_local_administrator');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory awscc_workspaces_directory}
*/
export class DataAwsccWorkspacesDirectory extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_workspaces_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWorkspacesDirectory resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWorkspacesDirectory to import
  * @param importFromId The id of the existing DataAwsccWorkspacesDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWorkspacesDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspaces_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory awscc_workspaces_directory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWorkspacesDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWorkspacesDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_workspaces_directory',
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

  // active_directory_config - computed: true, optional: false, required: false
  private _activeDirectoryConfig = new DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference(this, "active_directory_config");
  public get activeDirectoryConfig() {
    return this._activeDirectoryConfig;
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_based_auth_properties - computed: true, optional: false, required: false
  private _certificateBasedAuthProperties = new DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(this, "certificate_based_auth_properties");
  public get certificateBasedAuthProperties() {
    return this._certificateBasedAuthProperties;
  }

  // customer_user_name - computed: true, optional: false, required: false
  public get customerUserName() {
    return this.getStringAttribute('customer_user_name');
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }

  // directory_name - computed: true, optional: false, required: false
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }

  // directory_type - computed: true, optional: false, required: false
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }

  // dns_ip_addresses - computed: true, optional: false, required: false
  public get dnsIpAddresses() {
    return this.getListAttribute('dns_ip_addresses');
  }

  // dns_ipv_6_addresses - computed: true, optional: false, required: false
  public get dnsIpv6Addresses() {
    return this.getListAttribute('dns_ipv_6_addresses');
  }

  // enable_self_service - computed: true, optional: false, required: false
  public get enableSelfService() {
    return this.getBooleanAttribute('enable_self_service');
  }

  // endpoint_encryption_mode - computed: true, optional: false, required: false
  public get endpointEncryptionMode() {
    return this.getStringAttribute('endpoint_encryption_mode');
  }

  // iam_role_id - computed: true, optional: false, required: false
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
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

  // idc_config - computed: true, optional: false, required: false
  private _idcConfig = new DataAwsccWorkspacesDirectoryIdcConfigOutputReference(this, "idc_config");
  public get idcConfig() {
    return this._idcConfig;
  }

  // idc_instance_arn - computed: true, optional: false, required: false
  public get idcInstanceArn() {
    return this.getStringAttribute('idc_instance_arn');
  }

  // ip_group_ids - computed: true, optional: false, required: false
  public get ipGroupIds() {
    return this.getListAttribute('ip_group_ids');
  }

  // microsoft_entra_config - computed: true, optional: false, required: false
  private _microsoftEntraConfig = new DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference(this, "microsoft_entra_config");
  public get microsoftEntraConfig() {
    return this._microsoftEntraConfig;
  }

  // registration_code - computed: true, optional: false, required: false
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }

  // saml_properties - computed: true, optional: false, required: false
  private _samlProperties = new DataAwsccWorkspacesDirectorySamlPropertiesOutputReference(this, "saml_properties");
  public get samlProperties() {
    return this._samlProperties;
  }

  // selfservice_permissions - computed: true, optional: false, required: false
  private _selfservicePermissions = new DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference(this, "selfservice_permissions");
  public get selfservicePermissions() {
    return this._selfservicePermissions;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // streaming_properties - computed: true, optional: false, required: false
  private _streamingProperties = new DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference(this, "streaming_properties");
  public get streamingProperties() {
    return this._streamingProperties;
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccWorkspacesDirectoryTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }

  // user_identity_type - computed: true, optional: false, required: false
  public get userIdentityType() {
    return this.getStringAttribute('user_identity_type');
  }

  // workspace_access_properties - computed: true, optional: false, required: false
  private _workspaceAccessProperties = new DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(this, "workspace_access_properties");
  public get workspaceAccessProperties() {
    return this._workspaceAccessProperties;
  }

  // workspace_creation_properties - computed: true, optional: false, required: false
  private _workspaceCreationProperties = new DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(this, "workspace_creation_properties");
  public get workspaceCreationProperties() {
    return this._workspaceCreationProperties;
  }

  // workspace_directory_description - computed: true, optional: false, required: false
  public get workspaceDirectoryDescription() {
    return this.getStringAttribute('workspace_directory_description');
  }

  // workspace_directory_name - computed: true, optional: false, required: false
  public get workspaceDirectoryName() {
    return this.getStringAttribute('workspace_directory_name');
  }

  // workspace_security_group_id - computed: true, optional: false, required: false
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }

  // workspace_type - computed: true, optional: false, required: false
  public get workspaceType() {
    return this.getStringAttribute('workspace_type');
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
