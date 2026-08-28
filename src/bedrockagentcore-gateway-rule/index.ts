/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreGatewayRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#actions BedrockagentcoreGatewayRule#actions}
  */
  readonly actions: BedrockagentcoreGatewayRuleActions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#conditions BedrockagentcoreGatewayRule#conditions}
  */
  readonly conditions?: BedrockagentcoreGatewayRuleConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}
  */
  readonly gatewayIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}
  */
  readonly priority: number;
}
export interface BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}
  */
  readonly bundleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}
  */
  readonly bundleVersion?: string;
}

export function bedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideToTerraform(struct?: BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bundle_arn: cdktn.stringToTerraform(struct!.bundleArn),
    bundle_version: cdktn.stringToTerraform(struct!.bundleVersion),
  }
}


export function bedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bundle_arn: {
      value: cdktn.stringToHclTerraform(struct!.bundleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktn.stringToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleArn = this._bundleArn;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleArn = undefined;
      this._bundleVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleArn = value.bundleArn;
      this._bundleVersion = value.bundleVersion;
    }
  }

  // bundle_arn - computed: true, optional: true, required: false
  private _bundleArn?: string; 
  public get bundleArn() {
    return this.getStringAttribute('bundle_arn');
  }
  public set bundleArn(value: string) {
    this._bundleArn = value;
  }
  public resetBundleArn() {
    this._bundleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleArnInput() {
    return this._bundleArn;
  }

  // bundle_version - computed: true, optional: true, required: false
  private _bundleVersion?: string; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string) {
    this._bundleVersion = value;
  }
  public resetBundleVersion() {
    this._bundleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }
}
export interface BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}
  */
  readonly bundleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}
  */
  readonly bundleVersion?: string;
}

export function bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleToTerraform(struct?: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bundle_arn: cdktn.stringToTerraform(struct!.bundleArn),
    bundle_version: cdktn.stringToTerraform(struct!.bundleVersion),
  }
}


export function bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bundle_arn: {
      value: cdktn.stringToHclTerraform(struct!.bundleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktn.stringToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleArn = this._bundleArn;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleArn = undefined;
      this._bundleVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleArn = value.bundleArn;
      this._bundleVersion = value.bundleVersion;
    }
  }

  // bundle_arn - computed: true, optional: true, required: false
  private _bundleArn?: string; 
  public get bundleArn() {
    return this.getStringAttribute('bundle_arn');
  }
  public set bundleArn(value: string) {
    this._bundleArn = value;
  }
  public resetBundleArn() {
    this._bundleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleArnInput() {
    return this._bundleArn;
  }

  // bundle_version - computed: true, optional: true, required: false
  private _bundleVersion?: string; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string) {
    this._bundleVersion = value;
  }
  public resetBundleVersion() {
    this._bundleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }
}
export interface BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}
  */
  readonly configurationBundle?: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}
  */
  readonly weight?: number;
}

export function bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitToTerraform(struct?: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_bundle: bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleToTerraform(struct!.configurationBundle),
    description: cdktn.stringToTerraform(struct!.description),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    name: cdktn.stringToTerraform(struct!.name),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_bundle: {
      value: bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleToHclTerraform(struct!.configurationBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationBundle = this._configurationBundle?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationBundle.internalValue = undefined;
      this._description = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationBundle.internalValue = value.configurationBundle;
      this._description = value.description;
      this._metadata = value.metadata;
      this._name = value.name;
      this._weight = value.weight;
    }
  }

  // configuration_bundle - computed: true, optional: true, required: false
  private _configurationBundle = new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference(this, "configuration_bundle");
  public get configurationBundle() {
    return this._configurationBundle;
  }
  public putConfigurationBundle(value: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle) {
    this._configurationBundle.internalValue = value;
  }
  public resetConfigurationBundle() {
    this._configurationBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationBundleInput() {
    return this._configurationBundle.internalValue;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference {
    return new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}
  */
  readonly trafficSplit?: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideToTerraform(struct?: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    traffic_split: cdktn.listMapper(bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitToTerraform, false)(struct!.trafficSplit),
  }
}


export function bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    traffic_split: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitToHclTerraform, false)(struct!.trafficSplit),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplit = this._trafficSplit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = value.trafficSplit;
    }
  }

  // traffic_split - computed: true, optional: true, required: false
  private _trafficSplit = new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList(this, "traffic_split", false);
  public get trafficSplit() {
    return this._trafficSplit;
  }
  public putTrafficSplit(value: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit[] | cdktn.IResolvable) {
    this._trafficSplit.internalValue = value;
  }
  public resetTrafficSplit() {
    this._trafficSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitInput() {
    return this._trafficSplit.internalValue;
  }
}
export interface BedrockagentcoreGatewayRuleActionsConfigurationBundle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#static_override BedrockagentcoreGatewayRule#static_override}
  */
  readonly staticOverride?: BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#weighted_override BedrockagentcoreGatewayRule#weighted_override}
  */
  readonly weightedOverride?: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride;
}

export function bedrockagentcoreGatewayRuleActionsConfigurationBundleToTerraform(struct?: BedrockagentcoreGatewayRuleActionsConfigurationBundle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    static_override: bedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideToTerraform(struct!.staticOverride),
    weighted_override: bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideToTerraform(struct!.weightedOverride),
  }
}


export function bedrockagentcoreGatewayRuleActionsConfigurationBundleToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionsConfigurationBundle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    static_override: {
      value: bedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideToHclTerraform(struct!.staticOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride",
    },
    weighted_override: {
      value: bedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideToHclTerraform(struct!.weightedOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleActionsConfigurationBundle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticOverride = this._staticOverride?.internalValue;
    }
    if (this._weightedOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedOverride = this._weightedOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionsConfigurationBundle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticOverride.internalValue = undefined;
      this._weightedOverride.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticOverride.internalValue = value.staticOverride;
      this._weightedOverride.internalValue = value.weightedOverride;
    }
  }

  // static_override - computed: true, optional: true, required: false
  private _staticOverride = new BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference(this, "static_override");
  public get staticOverride() {
    return this._staticOverride;
  }
  public putStaticOverride(value: BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride) {
    this._staticOverride.internalValue = value;
  }
  public resetStaticOverride() {
    this._staticOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticOverrideInput() {
    return this._staticOverride.internalValue;
  }

  // weighted_override - computed: true, optional: true, required: false
  private _weightedOverride = new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference(this, "weighted_override");
  public get weightedOverride() {
    return this._weightedOverride;
  }
  public putWeightedOverride(value: BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride) {
    this._weightedOverride.internalValue = value;
  }
  public resetWeightedOverride() {
    this._weightedOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedOverrideInput() {
    return this._weightedOverride.internalValue;
  }
}
export interface BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}
  */
  readonly targetName?: string;
}

export function bedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteToTerraform(struct?: BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_name: cdktn.stringToTerraform(struct!.targetName),
  }
}


export function bedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_name: {
      value: cdktn.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetName = value.targetName;
    }
  }

  // target_name - computed: true, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }
}
export interface BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}
  */
  readonly targetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}
  */
  readonly weight?: number;
}

export function bedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitToTerraform(struct?: BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    name: cdktn.stringToTerraform(struct!.name),
    target_name: cdktn.stringToTerraform(struct!.targetName),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function bedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_name: {
      value: cdktn.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._targetName = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._metadata = value.metadata;
      this._name = value.name;
      this._targetName = value.targetName;
      this._weight = value.weight;
    }
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // target_name - computed: true, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference {
    return new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}
  */
  readonly trafficSplit?: BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteToTerraform(struct?: BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    traffic_split: cdktn.listMapper(bedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitToTerraform, false)(struct!.trafficSplit),
  }
}


export function bedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    traffic_split: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitToHclTerraform, false)(struct!.trafficSplit),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplit = this._trafficSplit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = value.trafficSplit;
    }
  }

  // traffic_split - computed: true, optional: true, required: false
  private _trafficSplit = new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList(this, "traffic_split", false);
  public get trafficSplit() {
    return this._trafficSplit;
  }
  public putTrafficSplit(value: BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit[] | cdktn.IResolvable) {
    this._trafficSplit.internalValue = value;
  }
  public resetTrafficSplit() {
    this._trafficSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitInput() {
    return this._trafficSplit.internalValue;
  }
}
export interface BedrockagentcoreGatewayRuleActionsRouteToTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#static_route BedrockagentcoreGatewayRule#static_route}
  */
  readonly staticRoute?: BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#weighted_route BedrockagentcoreGatewayRule#weighted_route}
  */
  readonly weightedRoute?: BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute;
}

export function bedrockagentcoreGatewayRuleActionsRouteToTargetToTerraform(struct?: BedrockagentcoreGatewayRuleActionsRouteToTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    static_route: bedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteToTerraform(struct!.staticRoute),
    weighted_route: bedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteToTerraform(struct!.weightedRoute),
  }
}


export function bedrockagentcoreGatewayRuleActionsRouteToTargetToHclTerraform(struct?: BedrockagentcoreGatewayRuleActionsRouteToTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    static_route: {
      value: bedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteToHclTerraform(struct!.staticRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute",
    },
    weighted_route: {
      value: bedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteToHclTerraform(struct!.weightedRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleActionsRouteToTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoute = this._staticRoute?.internalValue;
    }
    if (this._weightedRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedRoute = this._weightedRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActionsRouteToTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = undefined;
      this._weightedRoute.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = value.staticRoute;
      this._weightedRoute.internalValue = value.weightedRoute;
    }
  }

  // static_route - computed: true, optional: true, required: false
  private _staticRoute = new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference(this, "static_route");
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }

  // weighted_route - computed: true, optional: true, required: false
  private _weightedRoute = new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference(this, "weighted_route");
  public get weightedRoute() {
    return this._weightedRoute;
  }
  public putWeightedRoute(value: BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute) {
    this._weightedRoute.internalValue = value;
  }
  public resetWeightedRoute() {
    this._weightedRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedRouteInput() {
    return this._weightedRoute.internalValue;
  }
}
export interface BedrockagentcoreGatewayRuleActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}
  */
  readonly configurationBundle?: BedrockagentcoreGatewayRuleActionsConfigurationBundle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#route_to_target BedrockagentcoreGatewayRule#route_to_target}
  */
  readonly routeToTarget?: BedrockagentcoreGatewayRuleActionsRouteToTarget;
}

export function bedrockagentcoreGatewayRuleActionsToTerraform(struct?: BedrockagentcoreGatewayRuleActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_bundle: bedrockagentcoreGatewayRuleActionsConfigurationBundleToTerraform(struct!.configurationBundle),
    route_to_target: bedrockagentcoreGatewayRuleActionsRouteToTargetToTerraform(struct!.routeToTarget),
  }
}


export function bedrockagentcoreGatewayRuleActionsToHclTerraform(struct?: BedrockagentcoreGatewayRuleActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_bundle: {
      value: bedrockagentcoreGatewayRuleActionsConfigurationBundleToHclTerraform(struct!.configurationBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayRuleActionsConfigurationBundle",
    },
    route_to_target: {
      value: bedrockagentcoreGatewayRuleActionsRouteToTargetToHclTerraform(struct!.routeToTarget),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayRuleActionsRouteToTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationBundle = this._configurationBundle?.internalValue;
    }
    if (this._routeToTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeToTarget = this._routeToTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationBundle.internalValue = undefined;
      this._routeToTarget.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationBundle.internalValue = value.configurationBundle;
      this._routeToTarget.internalValue = value.routeToTarget;
    }
  }

  // configuration_bundle - computed: true, optional: true, required: false
  private _configurationBundle = new BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference(this, "configuration_bundle");
  public get configurationBundle() {
    return this._configurationBundle;
  }
  public putConfigurationBundle(value: BedrockagentcoreGatewayRuleActionsConfigurationBundle) {
    this._configurationBundle.internalValue = value;
  }
  public resetConfigurationBundle() {
    this._configurationBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationBundleInput() {
    return this._configurationBundle.internalValue;
  }

  // route_to_target - computed: true, optional: true, required: false
  private _routeToTarget = new BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference(this, "route_to_target");
  public get routeToTarget() {
    return this._routeToTarget;
  }
  public putRouteToTarget(value: BedrockagentcoreGatewayRuleActionsRouteToTarget) {
    this._routeToTarget.internalValue = value;
  }
  public resetRouteToTarget() {
    this._routeToTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeToTargetInput() {
    return this._routeToTarget.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleActionsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleActions[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleActionsOutputReference {
    return new BedrockagentcoreGatewayRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleConditionsMatchPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}
  */
  readonly anyOf?: string[];
}

export function bedrockagentcoreGatewayRuleConditionsMatchPathsToTerraform(struct?: BedrockagentcoreGatewayRuleConditionsMatchPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any_of: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.anyOf),
  }
}


export function bedrockagentcoreGatewayRuleConditionsMatchPathsToHclTerraform(struct?: BedrockagentcoreGatewayRuleConditionsMatchPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any_of: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleConditionsMatchPaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleConditionsMatchPaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: true, optional: true, required: false
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  public resetAnyOf() {
    this._anyOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}
export interface BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#arn BedrockagentcoreGatewayRule#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}
  */
  readonly operator?: string;
}

export function bedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalToTerraform(struct?: BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function bedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalToHclTerraform(struct?: BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._operator = value.operator;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#iam_principal BedrockagentcoreGatewayRule#iam_principal}
  */
  readonly iamPrincipal?: BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal;
}

export function bedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfToTerraform(struct?: BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_principal: bedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalToTerraform(struct!.iamPrincipal),
  }
}


export function bedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfToHclTerraform(struct?: BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_principal: {
      value: bedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalToHclTerraform(struct!.iamPrincipal),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamPrincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamPrincipal = this._iamPrincipal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamPrincipal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamPrincipal.internalValue = value.iamPrincipal;
    }
  }

  // iam_principal - computed: true, optional: true, required: false
  private _iamPrincipal = new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference(this, "iam_principal");
  public get iamPrincipal() {
    return this._iamPrincipal;
  }
  public putIamPrincipal(value: BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal) {
    this._iamPrincipal.internalValue = value;
  }
  public resetIamPrincipal() {
    this._iamPrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamPrincipalInput() {
    return this._iamPrincipal.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference {
    return new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayRuleConditionsMatchPrincipals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}
  */
  readonly anyOf?: BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf[] | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayRuleConditionsMatchPrincipalsToTerraform(struct?: BedrockagentcoreGatewayRuleConditionsMatchPrincipals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any_of: cdktn.listMapper(bedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfToTerraform, false)(struct!.anyOf),
  }
}


export function bedrockagentcoreGatewayRuleConditionsMatchPrincipalsToHclTerraform(struct?: BedrockagentcoreGatewayRuleConditionsMatchPrincipals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any_of: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfToHclTerraform, false)(struct!.anyOf),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayRuleConditionsMatchPrincipals | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleConditionsMatchPrincipals | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf.internalValue = value.anyOf;
    }
  }

  // any_of - computed: true, optional: true, required: false
  private _anyOf = new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList(this, "any_of", false);
  public get anyOf() {
    return this._anyOf;
  }
  public putAnyOf(value: BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf[] | cdktn.IResolvable) {
    this._anyOf.internalValue = value;
  }
  public resetAnyOf() {
    this._anyOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf.internalValue;
  }
}
export interface BedrockagentcoreGatewayRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#match_paths BedrockagentcoreGatewayRule#match_paths}
  */
  readonly matchPaths?: BedrockagentcoreGatewayRuleConditionsMatchPaths;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#match_principals BedrockagentcoreGatewayRule#match_principals}
  */
  readonly matchPrincipals?: BedrockagentcoreGatewayRuleConditionsMatchPrincipals;
}

export function bedrockagentcoreGatewayRuleConditionsToTerraform(struct?: BedrockagentcoreGatewayRuleConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_paths: bedrockagentcoreGatewayRuleConditionsMatchPathsToTerraform(struct!.matchPaths),
    match_principals: bedrockagentcoreGatewayRuleConditionsMatchPrincipalsToTerraform(struct!.matchPrincipals),
  }
}


export function bedrockagentcoreGatewayRuleConditionsToHclTerraform(struct?: BedrockagentcoreGatewayRuleConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_paths: {
      value: bedrockagentcoreGatewayRuleConditionsMatchPathsToHclTerraform(struct!.matchPaths),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayRuleConditionsMatchPaths",
    },
    match_principals: {
      value: bedrockagentcoreGatewayRuleConditionsMatchPrincipalsToHclTerraform(struct!.matchPrincipals),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayRuleConditionsMatchPrincipals",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayRuleConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayRuleConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPaths = this._matchPaths?.internalValue;
    }
    if (this._matchPrincipals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPrincipals = this._matchPrincipals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayRuleConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchPaths.internalValue = undefined;
      this._matchPrincipals.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchPaths.internalValue = value.matchPaths;
      this._matchPrincipals.internalValue = value.matchPrincipals;
    }
  }

  // match_paths - computed: true, optional: true, required: false
  private _matchPaths = new BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference(this, "match_paths");
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: BedrockagentcoreGatewayRuleConditionsMatchPaths) {
    this._matchPaths.internalValue = value;
  }
  public resetMatchPaths() {
    this._matchPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPathsInput() {
    return this._matchPaths.internalValue;
  }

  // match_principals - computed: true, optional: true, required: false
  private _matchPrincipals = new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference(this, "match_principals");
  public get matchPrincipals() {
    return this._matchPrincipals;
  }
  public putMatchPrincipals(value: BedrockagentcoreGatewayRuleConditionsMatchPrincipals) {
    this._matchPrincipals.internalValue = value;
  }
  public resetMatchPrincipals() {
    this._matchPrincipals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPrincipalsInput() {
    return this._matchPrincipals.internalValue;
  }
}

export class BedrockagentcoreGatewayRuleConditionsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayRuleConditions[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayRuleConditionsOutputReference {
    return new BedrockagentcoreGatewayRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule awscc_bedrockagentcore_gateway_rule}
*/
export class BedrockagentcoreGatewayRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_gateway_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreGatewayRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreGatewayRule to import
  * @param importFromId The id of the existing BedrockagentcoreGatewayRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreGatewayRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_gateway_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rule awscc_bedrockagentcore_gateway_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreGatewayRuleConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreGatewayRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_gateway_rule',
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
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._description = config.description;
    this._gatewayIdentifier = config.gatewayIdentifier;
    this._priority = config.priority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions = new BedrockagentcoreGatewayRuleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: BedrockagentcoreGatewayRuleActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions = new BedrockagentcoreGatewayRuleConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: BedrockagentcoreGatewayRuleConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
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

  // gateway_arn - computed: true, optional: false, required: false
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }

  // gateway_identifier - computed: true, optional: true, required: false
  private _gatewayIdentifier?: string; 
  public get gatewayIdentifier() {
    return this.getStringAttribute('gateway_identifier');
  }
  public set gatewayIdentifier(value: string) {
    this._gatewayIdentifier = value;
  }
  public resetGatewayIdentifier() {
    this._gatewayIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdentifierInput() {
    return this._gatewayIdentifier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktn.listMapper(bedrockagentcoreGatewayRuleActionsToTerraform, false)(this._actions.internalValue),
      conditions: cdktn.listMapper(bedrockagentcoreGatewayRuleConditionsToTerraform, false)(this._conditions.internalValue),
      description: cdktn.stringToTerraform(this._description),
      gateway_identifier: cdktn.stringToTerraform(this._gatewayIdentifier),
      priority: cdktn.numberToTerraform(this._priority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreGatewayRuleActionsList",
      },
      conditions: {
        value: cdktn.listMapperHcl(bedrockagentcoreGatewayRuleConditionsToHclTerraform, false)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreGatewayRuleConditionsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_identifier: {
        value: cdktn.stringToHclTerraform(this._gatewayIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
