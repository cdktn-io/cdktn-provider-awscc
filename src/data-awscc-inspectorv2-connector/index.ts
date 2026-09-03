/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/inspectorv2_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccInspectorv2ConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/inspectorv2_connector#id DataAwsccInspectorv2Connector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccInspectorv2ConnectorHealth {
}

export function dataAwsccInspectorv2ConnectorHealthToTerraform(struct?: DataAwsccInspectorv2ConnectorHealth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2ConnectorHealthToHclTerraform(struct?: DataAwsccInspectorv2ConnectorHealth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2ConnectorHealthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2ConnectorHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2ConnectorHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_status - computed: true, optional: false, required: false
  public get connectorStatus() {
    return this.getStringAttribute('connector_status');
  }

  // last_checked_at - computed: true, optional: false, required: false
  public get lastCheckedAt() {
    return this.getStringAttribute('last_checked_at');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}
export interface DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning {
}

export function dataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningToTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningToHclTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scope_type - computed: true, optional: false, required: false
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }

  // scope_values - computed: true, optional: false, required: false
  public get scopeValues() {
    return this.getListAttribute('scope_values');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
}
export interface DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning {
}

export function dataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningToTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningToHclTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scope_type - computed: true, optional: false, required: false
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }

  // scope_values - computed: true, optional: false, required: false
  public get scopeValues() {
    return this.getListAttribute('scope_values');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
}
export interface DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning {
}

export function dataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningToTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningToHclTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scope_type - computed: true, optional: false, required: false
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }

  // scope_values - computed: true, optional: false, required: false
  public get scopeValues() {
    return this.getListAttribute('scope_values');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
}
export interface DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration {
}

export function dataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationToTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationToHclTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_image_scanning - computed: true, optional: false, required: false
  private _containerImageScanning = new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference(this, "container_image_scanning");
  public get containerImageScanning() {
    return this._containerImageScanning;
  }

  // serverless_scanning - computed: true, optional: false, required: false
  private _serverlessScanning = new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference(this, "serverless_scanning");
  public get serverlessScanning() {
    return this._serverlessScanning;
  }

  // vm_scanning - computed: true, optional: false, required: false
  private _vmScanning = new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference(this, "vm_scanning");
  public get vmScanning() {
    return this._vmScanning;
  }
}
export interface DataAwsccInspectorv2ConnectorProviderConfigurationAzure {
}

export function dataAwsccInspectorv2ConnectorProviderConfigurationAzureToTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfigurationAzure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2ConnectorProviderConfigurationAzureToHclTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfigurationAzure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2ConnectorProviderConfigurationAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2ConnectorProviderConfigurationAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_install_vm_scanner - computed: true, optional: false, required: false
  public get autoInstallVmScanner() {
    return this.getBooleanAttribute('auto_install_vm_scanner');
  }

  // aws_config_connector_arn - computed: true, optional: false, required: false
  public get awsConfigConnectorArn() {
    return this.getStringAttribute('aws_config_connector_arn');
  }

  // azure_regions - computed: true, optional: false, required: false
  public get azureRegions() {
    return this.getListAttribute('azure_regions');
  }

  // scope_configuration - computed: true, optional: false, required: false
  private _scopeConfiguration = new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference(this, "scope_configuration");
  public get scopeConfiguration() {
    return this._scopeConfiguration;
  }
}
export interface DataAwsccInspectorv2ConnectorProviderConfiguration {
}

export function dataAwsccInspectorv2ConnectorProviderConfigurationToTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2ConnectorProviderConfigurationToHclTerraform(struct?: DataAwsccInspectorv2ConnectorProviderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2ConnectorProviderConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2ConnectorProviderConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure - computed: true, optional: false, required: false
  private _azure = new DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
}
export interface DataAwsccInspectorv2ConnectorTags {
}

export function dataAwsccInspectorv2ConnectorTagsToTerraform(struct?: DataAwsccInspectorv2ConnectorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2ConnectorTagsToHclTerraform(struct?: DataAwsccInspectorv2ConnectorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2ConnectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccInspectorv2ConnectorTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2ConnectorTags | undefined) {
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

export class DataAwsccInspectorv2ConnectorTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInspectorv2ConnectorTagsOutputReference {
    return new DataAwsccInspectorv2ConnectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/inspectorv2_connector awscc_inspectorv2_connector}
*/
export class DataAwsccInspectorv2Connector extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_inspectorv2_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccInspectorv2Connector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccInspectorv2Connector to import
  * @param importFromId The id of the existing DataAwsccInspectorv2Connector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/inspectorv2_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccInspectorv2Connector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/inspectorv2_connector awscc_inspectorv2_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccInspectorv2ConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccInspectorv2ConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_inspectorv2_connector',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.100.0',
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

  // connector_arn - computed: true, optional: false, required: false
  public get connectorArn() {
    return this.getStringAttribute('connector_arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enablement_status - computed: true, optional: false, required: false
  public get enablementStatus() {
    return this.getStringAttribute('enablement_status');
  }

  // enablement_status_reason - computed: true, optional: false, required: false
  public get enablementStatusReason() {
    return this.getStringAttribute('enablement_status_reason');
  }

  // health - computed: true, optional: false, required: false
  private _health = new DataAwsccInspectorv2ConnectorHealthOutputReference(this, "health");
  public get health() {
    return this._health;
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_configuration - computed: true, optional: false, required: false
  private _providerConfiguration = new DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference(this, "provider_configuration");
  public get providerConfiguration() {
    return this._providerConfiguration;
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccInspectorv2ConnectorTagsList(this, "tags", true);
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
