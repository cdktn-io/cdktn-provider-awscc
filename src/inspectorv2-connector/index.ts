/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Inspectorv2ConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Optional description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#description Inspectorv2Connector#description}
  */
  readonly description?: string;
  /**
  * Display name for the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#name Inspectorv2Connector#name}
  */
  readonly name: string;
  /**
  * Provider-specific configuration including regions and scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#provider_configuration Inspectorv2Connector#provider_configuration}
  */
  readonly providerConfiguration: Inspectorv2ConnectorProviderConfiguration;
  /**
  * The cloud provider for this connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#provider_name Inspectorv2Connector#provider_name}
  */
  readonly providerName: string;
  /**
  * Tags to apply to the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#tags Inspectorv2Connector#tags}
  */
  readonly tags?: Inspectorv2ConnectorTags[] | cdktn.IResolvable;
}
export interface Inspectorv2ConnectorHealth {
}

export function inspectorv2ConnectorHealthToTerraform(struct?: Inspectorv2ConnectorHealth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function inspectorv2ConnectorHealthToHclTerraform(struct?: Inspectorv2ConnectorHealth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Inspectorv2ConnectorHealthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2ConnectorHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2ConnectorHealth | undefined) {
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
export interface Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#scope_type Inspectorv2Connector#scope_type}
  */
  readonly scopeType?: string;
  /**
  * List of subscription IDs. Empty for TENANT scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#scope_values Inspectorv2Connector#scope_values}
  */
  readonly scopeValues?: string[];
}

export function inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningToTerraform(struct?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scope_type: cdktn.stringToTerraform(struct!.scopeType),
    scope_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeValues),
  }
}


export function inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningToHclTerraform(struct?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scope_type: {
      value: cdktn.stringToHclTerraform(struct!.scopeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopeValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeType = this._scopeType;
    }
    if (this._scopeValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeValues = this._scopeValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeType = undefined;
      this._scopeValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeType = value.scopeType;
      this._scopeValues = value.scopeValues;
    }
  }

  // scope_type - computed: true, optional: true, required: false
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  public resetScopeType() {
    this._scopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // scope_values - computed: true, optional: true, required: false
  private _scopeValues?: string[]; 
  public get scopeValues() {
    return this.getListAttribute('scope_values');
  }
  public set scopeValues(value: string[]) {
    this._scopeValues = value;
  }
  public resetScopeValues() {
    this._scopeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeValuesInput() {
    return this._scopeValues;
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
export interface Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#scope_type Inspectorv2Connector#scope_type}
  */
  readonly scopeType?: string;
  /**
  * List of subscription IDs. Empty for TENANT scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#scope_values Inspectorv2Connector#scope_values}
  */
  readonly scopeValues?: string[];
}

export function inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningToTerraform(struct?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scope_type: cdktn.stringToTerraform(struct!.scopeType),
    scope_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeValues),
  }
}


export function inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningToHclTerraform(struct?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scope_type: {
      value: cdktn.stringToHclTerraform(struct!.scopeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopeValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeType = this._scopeType;
    }
    if (this._scopeValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeValues = this._scopeValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeType = undefined;
      this._scopeValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeType = value.scopeType;
      this._scopeValues = value.scopeValues;
    }
  }

  // scope_type - computed: true, optional: true, required: false
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  public resetScopeType() {
    this._scopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // scope_values - computed: true, optional: true, required: false
  private _scopeValues?: string[]; 
  public get scopeValues() {
    return this.getListAttribute('scope_values');
  }
  public set scopeValues(value: string[]) {
    this._scopeValues = value;
  }
  public resetScopeValues() {
    this._scopeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeValuesInput() {
    return this._scopeValues;
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
export interface Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#scope_type Inspectorv2Connector#scope_type}
  */
  readonly scopeType?: string;
  /**
  * List of subscription IDs. Empty for TENANT scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#scope_values Inspectorv2Connector#scope_values}
  */
  readonly scopeValues?: string[];
}

export function inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningToTerraform(struct?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scope_type: cdktn.stringToTerraform(struct!.scopeType),
    scope_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeValues),
  }
}


export function inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningToHclTerraform(struct?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scope_type: {
      value: cdktn.stringToHclTerraform(struct!.scopeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopeValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeType = this._scopeType;
    }
    if (this._scopeValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeValues = this._scopeValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeType = undefined;
      this._scopeValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeType = value.scopeType;
      this._scopeValues = value.scopeValues;
    }
  }

  // scope_type - computed: true, optional: true, required: false
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  public resetScopeType() {
    this._scopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // scope_values - computed: true, optional: true, required: false
  private _scopeValues?: string[]; 
  public get scopeValues() {
    return this.getListAttribute('scope_values');
  }
  public set scopeValues(value: string[]) {
    this._scopeValues = value;
  }
  public resetScopeValues() {
    this._scopeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeValuesInput() {
    return this._scopeValues;
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
export interface Inspectorv2ConnectorProviderConfigurationAzureScopeConfiguration {
  /**
  * Defines the scope of Azure resources to monitor for a specific resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#container_image_scanning Inspectorv2Connector#container_image_scanning}
  */
  readonly containerImageScanning?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning;
  /**
  * Defines the scope of Azure resources to monitor for a specific resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#serverless_scanning Inspectorv2Connector#serverless_scanning}
  */
  readonly serverlessScanning?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning;
  /**
  * Defines the scope of Azure resources to monitor for a specific resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#vm_scanning Inspectorv2Connector#vm_scanning}
  */
  readonly vmScanning?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning;
}

export function inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationToTerraform(struct?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_image_scanning: inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningToTerraform(struct!.containerImageScanning),
    serverless_scanning: inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningToTerraform(struct!.serverlessScanning),
    vm_scanning: inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningToTerraform(struct!.vmScanning),
  }
}


export function inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationToHclTerraform(struct?: Inspectorv2ConnectorProviderConfigurationAzureScopeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_image_scanning: {
      value: inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningToHclTerraform(struct!.containerImageScanning),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning",
    },
    serverless_scanning: {
      value: inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningToHclTerraform(struct!.serverlessScanning),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning",
    },
    vm_scanning: {
      value: inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningToHclTerraform(struct!.vmScanning),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2ConnectorProviderConfigurationAzureScopeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerImageScanning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImageScanning = this._containerImageScanning?.internalValue;
    }
    if (this._serverlessScanning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessScanning = this._serverlessScanning?.internalValue;
    }
    if (this._vmScanning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmScanning = this._vmScanning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2ConnectorProviderConfigurationAzureScopeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerImageScanning.internalValue = undefined;
      this._serverlessScanning.internalValue = undefined;
      this._vmScanning.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerImageScanning.internalValue = value.containerImageScanning;
      this._serverlessScanning.internalValue = value.serverlessScanning;
      this._vmScanning.internalValue = value.vmScanning;
    }
  }

  // container_image_scanning - computed: true, optional: true, required: false
  private _containerImageScanning = new Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference(this, "container_image_scanning");
  public get containerImageScanning() {
    return this._containerImageScanning;
  }
  public putContainerImageScanning(value: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning) {
    this._containerImageScanning.internalValue = value;
  }
  public resetContainerImageScanning() {
    this._containerImageScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageScanningInput() {
    return this._containerImageScanning.internalValue;
  }

  // serverless_scanning - computed: true, optional: true, required: false
  private _serverlessScanning = new Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference(this, "serverless_scanning");
  public get serverlessScanning() {
    return this._serverlessScanning;
  }
  public putServerlessScanning(value: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning) {
    this._serverlessScanning.internalValue = value;
  }
  public resetServerlessScanning() {
    this._serverlessScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessScanningInput() {
    return this._serverlessScanning.internalValue;
  }

  // vm_scanning - computed: true, optional: true, required: false
  private _vmScanning = new Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference(this, "vm_scanning");
  public get vmScanning() {
    return this._vmScanning;
  }
  public putVmScanning(value: Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning) {
    this._vmScanning.internalValue = value;
  }
  public resetVmScanning() {
    this._vmScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmScanningInput() {
    return this._vmScanning.internalValue;
  }
}
export interface Inspectorv2ConnectorProviderConfigurationAzure {
  /**
  * Whether to automatically install the VM scanner. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#auto_install_vm_scanner Inspectorv2Connector#auto_install_vm_scanner}
  */
  readonly autoInstallVmScanner?: boolean | cdktn.IResolvable;
  /**
  * The ARN of the AWS Config connector used for Azure resource discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#aws_config_connector_arn Inspectorv2Connector#aws_config_connector_arn}
  */
  readonly awsConfigConnectorArn: string;
  /**
  * List of Azure regions to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#azure_regions Inspectorv2Connector#azure_regions}
  */
  readonly azureRegions: string[];
  /**
  * Defines which resource types to scan and at what scope level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#scope_configuration Inspectorv2Connector#scope_configuration}
  */
  readonly scopeConfiguration: Inspectorv2ConnectorProviderConfigurationAzureScopeConfiguration;
}

export function inspectorv2ConnectorProviderConfigurationAzureToTerraform(struct?: Inspectorv2ConnectorProviderConfigurationAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_install_vm_scanner: cdktn.booleanToTerraform(struct!.autoInstallVmScanner),
    aws_config_connector_arn: cdktn.stringToTerraform(struct!.awsConfigConnectorArn),
    azure_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.azureRegions),
    scope_configuration: inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationToTerraform(struct!.scopeConfiguration),
  }
}


export function inspectorv2ConnectorProviderConfigurationAzureToHclTerraform(struct?: Inspectorv2ConnectorProviderConfigurationAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_install_vm_scanner: {
      value: cdktn.booleanToHclTerraform(struct!.autoInstallVmScanner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_config_connector_arn: {
      value: cdktn.stringToHclTerraform(struct!.awsConfigConnectorArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.azureRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope_configuration: {
      value: inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationToHclTerraform(struct!.scopeConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2ConnectorProviderConfigurationAzureScopeConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2ConnectorProviderConfigurationAzureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2ConnectorProviderConfigurationAzure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoInstallVmScanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoInstallVmScanner = this._autoInstallVmScanner;
    }
    if (this._awsConfigConnectorArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsConfigConnectorArn = this._awsConfigConnectorArn;
    }
    if (this._azureRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureRegions = this._azureRegions;
    }
    if (this._scopeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeConfiguration = this._scopeConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2ConnectorProviderConfigurationAzure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoInstallVmScanner = undefined;
      this._awsConfigConnectorArn = undefined;
      this._azureRegions = undefined;
      this._scopeConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoInstallVmScanner = value.autoInstallVmScanner;
      this._awsConfigConnectorArn = value.awsConfigConnectorArn;
      this._azureRegions = value.azureRegions;
      this._scopeConfiguration.internalValue = value.scopeConfiguration;
    }
  }

  // auto_install_vm_scanner - computed: true, optional: true, required: false
  private _autoInstallVmScanner?: boolean | cdktn.IResolvable; 
  public get autoInstallVmScanner() {
    return this.getBooleanAttribute('auto_install_vm_scanner');
  }
  public set autoInstallVmScanner(value: boolean | cdktn.IResolvable) {
    this._autoInstallVmScanner = value;
  }
  public resetAutoInstallVmScanner() {
    this._autoInstallVmScanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInstallVmScannerInput() {
    return this._autoInstallVmScanner;
  }

  // aws_config_connector_arn - computed: false, optional: false, required: true
  private _awsConfigConnectorArn?: string; 
  public get awsConfigConnectorArn() {
    return this.getStringAttribute('aws_config_connector_arn');
  }
  public set awsConfigConnectorArn(value: string) {
    this._awsConfigConnectorArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigConnectorArnInput() {
    return this._awsConfigConnectorArn;
  }

  // azure_regions - computed: false, optional: false, required: true
  private _azureRegions?: string[]; 
  public get azureRegions() {
    return this.getListAttribute('azure_regions');
  }
  public set azureRegions(value: string[]) {
    this._azureRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionsInput() {
    return this._azureRegions;
  }

  // scope_configuration - computed: false, optional: false, required: true
  private _scopeConfiguration = new Inspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference(this, "scope_configuration");
  public get scopeConfiguration() {
    return this._scopeConfiguration;
  }
  public putScopeConfiguration(value: Inspectorv2ConnectorProviderConfigurationAzureScopeConfiguration) {
    this._scopeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeConfigurationInput() {
    return this._scopeConfiguration.internalValue;
  }
}
export interface Inspectorv2ConnectorProviderConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#azure Inspectorv2Connector#azure}
  */
  readonly azure: Inspectorv2ConnectorProviderConfigurationAzure;
}

export function inspectorv2ConnectorProviderConfigurationToTerraform(struct?: Inspectorv2ConnectorProviderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    azure: inspectorv2ConnectorProviderConfigurationAzureToTerraform(struct!.azure),
  }
}


export function inspectorv2ConnectorProviderConfigurationToHclTerraform(struct?: Inspectorv2ConnectorProviderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    azure: {
      value: inspectorv2ConnectorProviderConfigurationAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2ConnectorProviderConfigurationAzure",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2ConnectorProviderConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2ConnectorProviderConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2ConnectorProviderConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azure.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azure.internalValue = value.azure;
    }
  }

  // azure - computed: false, optional: false, required: true
  private _azure = new Inspectorv2ConnectorProviderConfigurationAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: Inspectorv2ConnectorProviderConfigurationAzure) {
    this._azure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }
}
export interface Inspectorv2ConnectorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#key Inspectorv2Connector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#value Inspectorv2Connector#value}
  */
  readonly value?: string;
}

export function inspectorv2ConnectorTagsToTerraform(struct?: Inspectorv2ConnectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2ConnectorTagsToHclTerraform(struct?: Inspectorv2ConnectorTags | cdktn.IResolvable): any {
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

export class Inspectorv2ConnectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2ConnectorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Inspectorv2ConnectorTags | cdktn.IResolvable | undefined) {
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

export class Inspectorv2ConnectorTagsList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2ConnectorTags[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2ConnectorTagsOutputReference {
    return new Inspectorv2ConnectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector awscc_inspectorv2_connector}
*/
export class Inspectorv2Connector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_inspectorv2_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Inspectorv2Connector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inspectorv2Connector to import
  * @param importFromId The id of the existing Inspectorv2Connector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inspectorv2Connector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_connector awscc_inspectorv2_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Inspectorv2ConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: Inspectorv2ConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_inspectorv2_connector',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.99.0',
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
    this._description = config.description;
    this._name = config.name;
    this._providerConfiguration.internalValue = config.providerConfiguration;
    this._providerName = config.providerName;
    this._tags.internalValue = config.tags;
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

  // enablement_status - computed: true, optional: false, required: false
  public get enablementStatus() {
    return this.getStringAttribute('enablement_status');
  }

  // enablement_status_reason - computed: true, optional: false, required: false
  public get enablementStatusReason() {
    return this.getStringAttribute('enablement_status_reason');
  }

  // health - computed: true, optional: false, required: false
  private _health = new Inspectorv2ConnectorHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
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

  // provider_configuration - computed: false, optional: false, required: true
  private _providerConfiguration = new Inspectorv2ConnectorProviderConfigurationOutputReference(this, "provider_configuration");
  public get providerConfiguration() {
    return this._providerConfiguration;
  }
  public putProviderConfiguration(value: Inspectorv2ConnectorProviderConfiguration) {
    this._providerConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigurationInput() {
    return this._providerConfiguration.internalValue;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Inspectorv2ConnectorTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Inspectorv2ConnectorTags[] | cdktn.IResolvable) {
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
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      provider_configuration: inspectorv2ConnectorProviderConfigurationToTerraform(this._providerConfiguration.internalValue),
      provider_name: cdktn.stringToTerraform(this._providerName),
      tags: cdktn.listMapper(inspectorv2ConnectorTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_configuration: {
        value: inspectorv2ConnectorProviderConfigurationToHclTerraform(this._providerConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Inspectorv2ConnectorProviderConfiguration",
      },
      provider_name: {
        value: cdktn.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(inspectorv2ConnectorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Inspectorv2ConnectorTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
