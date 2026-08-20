/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChimeChannelFlowConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ARN of the app instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#app_instance_arn ChimeChannelFlow#app_instance_arn}
  */
  readonly appInstanceArn: string;
  /**
  * The name of the channel flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#name ChimeChannelFlow#name}
  */
  readonly name: string;
  /**
  * Information about the processor Lambda functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#processors ChimeChannelFlow#processors}
  */
  readonly processors: ChimeChannelFlowProcessors[] | cdktn.IResolvable;
  /**
  * The tags for the channel flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#tags ChimeChannelFlow#tags}
  */
  readonly tags?: ChimeChannelFlowTags[] | cdktn.IResolvable;
}
export interface ChimeChannelFlowProcessorsConfigurationLambda {
  /**
  * Controls how the Lambda function is invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#invocation_type ChimeChannelFlow#invocation_type}
  */
  readonly invocationType: string;
  /**
  * The ARN of the Lambda message processing function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#resource_arn ChimeChannelFlow#resource_arn}
  */
  readonly resourceArn: string;
}

export function chimeChannelFlowProcessorsConfigurationLambdaToTerraform(struct?: ChimeChannelFlowProcessorsConfigurationLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invocation_type: cdktn.stringToTerraform(struct!.invocationType),
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function chimeChannelFlowProcessorsConfigurationLambdaToHclTerraform(struct?: ChimeChannelFlowProcessorsConfigurationLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invocation_type: {
      value: cdktn.stringToHclTerraform(struct!.invocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChimeChannelFlowProcessorsConfigurationLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChimeChannelFlowProcessorsConfigurationLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimeChannelFlowProcessorsConfigurationLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invocationType = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invocationType = value.invocationType;
      this._resourceArn = value.resourceArn;
    }
  }

  // invocation_type - computed: false, optional: false, required: true
  private _invocationType?: string; 
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
  public set invocationType(value: string) {
    this._invocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTypeInput() {
    return this._invocationType;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}
export interface ChimeChannelFlowProcessorsConfiguration {
  /**
  * Stores metadata about a Lambda processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#lambda ChimeChannelFlow#lambda}
  */
  readonly lambda: ChimeChannelFlowProcessorsConfigurationLambda;
}

export function chimeChannelFlowProcessorsConfigurationToTerraform(struct?: ChimeChannelFlowProcessorsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda: chimeChannelFlowProcessorsConfigurationLambdaToTerraform(struct!.lambda),
  }
}


export function chimeChannelFlowProcessorsConfigurationToHclTerraform(struct?: ChimeChannelFlowProcessorsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda: {
      value: chimeChannelFlowProcessorsConfigurationLambdaToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "struct",
      storageClassType: "ChimeChannelFlowProcessorsConfigurationLambda",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChimeChannelFlowProcessorsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChimeChannelFlowProcessorsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimeChannelFlowProcessorsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambda.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambda.internalValue = value.lambda;
    }
  }

  // lambda - computed: false, optional: false, required: true
  private _lambda = new ChimeChannelFlowProcessorsConfigurationLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: ChimeChannelFlowProcessorsConfigurationLambda) {
    this._lambda.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }
}
export interface ChimeChannelFlowProcessors {
  /**
  * A processor's metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#configuration ChimeChannelFlow#configuration}
  */
  readonly configuration: ChimeChannelFlowProcessorsConfiguration;
  /**
  * The sequence in which processors run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#execution_order ChimeChannelFlow#execution_order}
  */
  readonly executionOrder: number;
  /**
  * Determines whether to continue or stop processing when communication with a processor fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#fallback_action ChimeChannelFlow#fallback_action}
  */
  readonly fallbackAction: string;
  /**
  * The name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#name ChimeChannelFlow#name}
  */
  readonly name: string;
}

export function chimeChannelFlowProcessorsToTerraform(struct?: ChimeChannelFlowProcessors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration: chimeChannelFlowProcessorsConfigurationToTerraform(struct!.configuration),
    execution_order: cdktn.numberToTerraform(struct!.executionOrder),
    fallback_action: cdktn.stringToTerraform(struct!.fallbackAction),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function chimeChannelFlowProcessorsToHclTerraform(struct?: ChimeChannelFlowProcessors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration: {
      value: chimeChannelFlowProcessorsConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "ChimeChannelFlowProcessorsConfiguration",
    },
    execution_order: {
      value: cdktn.numberToHclTerraform(struct!.executionOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fallback_action: {
      value: cdktn.stringToHclTerraform(struct!.fallbackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChimeChannelFlowProcessorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChimeChannelFlowProcessors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._executionOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionOrder = this._executionOrder;
    }
    if (this._fallbackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackAction = this._fallbackAction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimeChannelFlowProcessors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._executionOrder = undefined;
      this._fallbackAction = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._executionOrder = value.executionOrder;
      this._fallbackAction = value.fallbackAction;
      this._name = value.name;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new ChimeChannelFlowProcessorsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: ChimeChannelFlowProcessorsConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // execution_order - computed: false, optional: false, required: true
  private _executionOrder?: number; 
  public get executionOrder() {
    return this.getNumberAttribute('execution_order');
  }
  public set executionOrder(value: number) {
    this._executionOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionOrderInput() {
    return this._executionOrder;
  }

  // fallback_action - computed: false, optional: false, required: true
  private _fallbackAction?: string; 
  public get fallbackAction() {
    return this.getStringAttribute('fallback_action');
  }
  public set fallbackAction(value: string) {
    this._fallbackAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackActionInput() {
    return this._fallbackAction;
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
}

export class ChimeChannelFlowProcessorsList extends cdktn.ComplexList {
  public internalValue? : ChimeChannelFlowProcessors[] | cdktn.IResolvable

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
  public get(index: number): ChimeChannelFlowProcessorsOutputReference {
    return new ChimeChannelFlowProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChimeChannelFlowTags {
  /**
  * The key in a tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#key ChimeChannelFlow#key}
  */
  readonly key?: string;
  /**
  * The value in a tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#value ChimeChannelFlow#value}
  */
  readonly value?: string;
}

export function chimeChannelFlowTagsToTerraform(struct?: ChimeChannelFlowTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chimeChannelFlowTagsToHclTerraform(struct?: ChimeChannelFlowTags | cdktn.IResolvable): any {
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

export class ChimeChannelFlowTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChimeChannelFlowTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChimeChannelFlowTags | cdktn.IResolvable | undefined) {
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

export class ChimeChannelFlowTagsList extends cdktn.ComplexList {
  public internalValue? : ChimeChannelFlowTags[] | cdktn.IResolvable

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
  public get(index: number): ChimeChannelFlowTagsOutputReference {
    return new ChimeChannelFlowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow awscc_chime_channel_flow}
*/
export class ChimeChannelFlow extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_chime_channel_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChimeChannelFlow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChimeChannelFlow to import
  * @param importFromId The id of the existing ChimeChannelFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChimeChannelFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_chime_channel_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_channel_flow awscc_chime_channel_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeChannelFlowConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeChannelFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_chime_channel_flow',
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
    this._appInstanceArn = config.appInstanceArn;
    this._name = config.name;
    this._processors.internalValue = config.processors;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_instance_arn - computed: false, optional: false, required: true
  private _appInstanceArn?: string; 
  public get appInstanceArn() {
    return this.getStringAttribute('app_instance_arn');
  }
  public set appInstanceArn(value: string) {
    this._appInstanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstanceArnInput() {
    return this._appInstanceArn;
  }

  // app_instance_id - computed: true, optional: false, required: false
  public get appInstanceId() {
    return this.getStringAttribute('app_instance_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // channel_flow_id - computed: true, optional: false, required: false
  public get channelFlowId() {
    return this.getStringAttribute('channel_flow_id');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_timestamp - computed: true, optional: false, required: false
  public get lastUpdatedTimestamp() {
    return this.getStringAttribute('last_updated_timestamp');
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

  // processors - computed: false, optional: false, required: true
  private _processors = new ChimeChannelFlowProcessorsList(this, "processors", false);
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: ChimeChannelFlowProcessors[] | cdktn.IResolvable) {
    this._processors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ChimeChannelFlowTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ChimeChannelFlowTags[] | cdktn.IResolvable) {
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
      app_instance_arn: cdktn.stringToTerraform(this._appInstanceArn),
      name: cdktn.stringToTerraform(this._name),
      processors: cdktn.listMapper(chimeChannelFlowProcessorsToTerraform, false)(this._processors.internalValue),
      tags: cdktn.listMapper(chimeChannelFlowTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_instance_arn: {
        value: cdktn.stringToHclTerraform(this._appInstanceArn),
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
      processors: {
        value: cdktn.listMapperHcl(chimeChannelFlowProcessorsToHclTerraform, false)(this._processors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChimeChannelFlowProcessorsList",
      },
      tags: {
        value: cdktn.listMapperHcl(chimeChannelFlowTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChimeChannelFlowTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
