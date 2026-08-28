/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides#id DataAwsccApigatewayv2ApiGatewayManagedOverrides#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration {
}

export function dataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationToTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationToHclTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // integration_method - computed: true, optional: false, required: false
  public get integrationMethod() {
    return this.getStringAttribute('integration_method');
  }

  // payload_format_version - computed: true, optional: false, required: false
  public get payloadFormatVersion() {
    return this.getStringAttribute('payload_format_version');
  }

  // timeout_in_millis - computed: true, optional: false, required: false
  public get timeoutInMillis() {
    return this.getNumberAttribute('timeout_in_millis');
  }
}
export interface DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute {
}

export function dataAwsccApigatewayv2ApiGatewayManagedOverridesRouteToTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2ApiGatewayManagedOverridesRouteToHclTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2ApiGatewayManagedOverridesRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_scopes - computed: true, optional: false, required: false
  public get authorizationScopes() {
    return this.getListAttribute('authorization_scopes');
  }

  // authorization_type - computed: true, optional: false, required: false
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }

  // authorizer_id - computed: true, optional: false, required: false
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}
export interface DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings {
}

export function dataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsToTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsToHclTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_arn - computed: true, optional: false, required: false
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }
}
export interface DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings {
}

export function dataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsToTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsToHclTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detailed_metrics_enabled - computed: true, optional: false, required: false
  public get detailedMetricsEnabled() {
    return this.getBooleanAttribute('detailed_metrics_enabled');
  }

  // throttling_burst_limit - computed: true, optional: false, required: false
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }

  // throttling_rate_limit - computed: true, optional: false, required: false
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }
}
export interface DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings {
}

export function dataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsToTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsToHclTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detailed_metrics_enabled - computed: true, optional: false, required: false
  public get detailedMetricsEnabled() {
    return this.getBooleanAttribute('detailed_metrics_enabled');
  }

  // throttling_burst_limit - computed: true, optional: false, required: false
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }

  // throttling_rate_limit - computed: true, optional: false, required: false
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }
}

export class DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference {
    return new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccApigatewayv2ApiGatewayManagedOverridesStage {
}

export function dataAwsccApigatewayv2ApiGatewayManagedOverridesStageToTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesStage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2ApiGatewayManagedOverridesStageToHclTerraform(struct?: DataAwsccApigatewayv2ApiGatewayManagedOverridesStage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayv2ApiGatewayManagedOverridesStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2ApiGatewayManagedOverridesStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_log_settings - computed: true, optional: false, required: false
  private _accessLogSettings = new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference(this, "access_log_settings");
  public get accessLogSettings() {
    return this._accessLogSettings;
  }

  // auto_deploy - computed: true, optional: false, required: false
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }

  // default_route_settings - computed: true, optional: false, required: false
  private _defaultRouteSettings = new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference(this, "default_route_settings");
  public get defaultRouteSettings() {
    return this._defaultRouteSettings;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // route_settings - computed: true, optional: false, required: false
  private _routeSettings = new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap(this, "route_settings");
  public get routeSettings() {
    return this._routeSettings;
  }

  // stage_variables - computed: true, optional: false, required: false
  private _stageVariables = new cdktn.StringMap(this, "stage_variables");
  public get stageVariables() {
    return this._stageVariables;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides awscc_apigatewayv2_api_gateway_managed_overrides}
*/
export class DataAwsccApigatewayv2ApiGatewayManagedOverrides extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigatewayv2_api_gateway_managed_overrides";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApigatewayv2ApiGatewayManagedOverrides resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApigatewayv2ApiGatewayManagedOverrides to import
  * @param importFromId The id of the existing DataAwsccApigatewayv2ApiGatewayManagedOverrides that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApigatewayv2ApiGatewayManagedOverrides to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_api_gateway_managed_overrides", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigatewayv2_api_gateway_managed_overrides awscc_apigatewayv2_api_gateway_managed_overrides} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayv2ApiGatewayManagedOverridesConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigatewayv2_api_gateway_managed_overrides',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_gateway_managed_overrides_id - computed: true, optional: false, required: false
  public get apiGatewayManagedOverridesId() {
    return this.getStringAttribute('api_gateway_managed_overrides_id');
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
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

  // integration - computed: true, optional: false, required: false
  private _integration = new DataAwsccApigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }

  // route - computed: true, optional: false, required: false
  private _route = new DataAwsccApigatewayv2ApiGatewayManagedOverridesRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }

  // stage - computed: true, optional: false, required: false
  private _stage = new DataAwsccApigatewayv2ApiGatewayManagedOverridesStageOutputReference(this, "stage");
  public get stage() {
    return this._stage;
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
