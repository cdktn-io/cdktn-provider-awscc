/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WisdomAiPromptConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#api_format WisdomAiPrompt#api_format}
  */
  readonly apiFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#assistant_id WisdomAiPrompt#assistant_id}
  */
  readonly assistantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#description WisdomAiPrompt#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#inference_configuration WisdomAiPrompt#inference_configuration}
  */
  readonly inferenceConfiguration?: WisdomAiPromptInferenceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#model_id WisdomAiPrompt#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#name WisdomAiPrompt#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#tags WisdomAiPrompt#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#template_configuration WisdomAiPrompt#template_configuration}
  */
  readonly templateConfiguration: WisdomAiPromptTemplateConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#template_type WisdomAiPrompt#template_type}
  */
  readonly templateType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#type WisdomAiPrompt#type}
  */
  readonly type: string;
}
export interface WisdomAiPromptInferenceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#max_tokens_to_sample WisdomAiPrompt#max_tokens_to_sample}
  */
  readonly maxTokensToSample?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#temperature WisdomAiPrompt#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#top_k WisdomAiPrompt#top_k}
  */
  readonly topK?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#top_p WisdomAiPrompt#top_p}
  */
  readonly topP?: number;
}

export function wisdomAiPromptInferenceConfigurationToTerraform(struct?: WisdomAiPromptInferenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens_to_sample: cdktn.numberToTerraform(struct!.maxTokensToSample),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_k: cdktn.numberToTerraform(struct!.topK),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function wisdomAiPromptInferenceConfigurationToHclTerraform(struct?: WisdomAiPromptInferenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_tokens_to_sample: {
      value: cdktn.numberToHclTerraform(struct!.maxTokensToSample),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_k: {
      value: cdktn.numberToHclTerraform(struct!.topK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktn.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiPromptInferenceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiPromptInferenceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokensToSample !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokensToSample = this._maxTokensToSample;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topK !== undefined) {
      hasAnyValues = true;
      internalValueResult.topK = this._topK;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiPromptInferenceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokensToSample = undefined;
      this._temperature = undefined;
      this._topK = undefined;
      this._topP = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokensToSample = value.maxTokensToSample;
      this._temperature = value.temperature;
      this._topK = value.topK;
      this._topP = value.topP;
    }
  }

  // max_tokens_to_sample - computed: true, optional: true, required: false
  private _maxTokensToSample?: number; 
  public get maxTokensToSample() {
    return this.getNumberAttribute('max_tokens_to_sample');
  }
  public set maxTokensToSample(value: number) {
    this._maxTokensToSample = value;
  }
  public resetMaxTokensToSample() {
    this._maxTokensToSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensToSampleInput() {
    return this._maxTokensToSample;
  }

  // temperature - computed: true, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_k - computed: true, optional: true, required: false
  private _topK?: number; 
  public get topK() {
    return this.getNumberAttribute('top_k');
  }
  public set topK(value: number) {
    this._topK = value;
  }
  public resetTopK() {
    this._topK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKInput() {
    return this._topK;
  }

  // top_p - computed: true, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}
export interface WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#text WisdomAiPrompt#text}
  */
  readonly text?: string;
}

export function wisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationToTerraform(struct?: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function wisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationToHclTerraform(struct?: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface WisdomAiPromptTemplateConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#text_full_ai_prompt_edit_template_configuration WisdomAiPrompt#text_full_ai_prompt_edit_template_configuration}
  */
  readonly textFullAiPromptEditTemplateConfiguration?: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration;
}

export function wisdomAiPromptTemplateConfigurationToTerraform(struct?: WisdomAiPromptTemplateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text_full_ai_prompt_edit_template_configuration: wisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationToTerraform(struct!.textFullAiPromptEditTemplateConfiguration),
  }
}


export function wisdomAiPromptTemplateConfigurationToHclTerraform(struct?: WisdomAiPromptTemplateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text_full_ai_prompt_edit_template_configuration: {
      value: wisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationToHclTerraform(struct!.textFullAiPromptEditTemplateConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiPromptTemplateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiPromptTemplateConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textFullAiPromptEditTemplateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFullAiPromptEditTemplateConfiguration = this._textFullAiPromptEditTemplateConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiPromptTemplateConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._textFullAiPromptEditTemplateConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._textFullAiPromptEditTemplateConfiguration.internalValue = value.textFullAiPromptEditTemplateConfiguration;
    }
  }

  // text_full_ai_prompt_edit_template_configuration - computed: true, optional: true, required: false
  private _textFullAiPromptEditTemplateConfiguration = new WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference(this, "text_full_ai_prompt_edit_template_configuration");
  public get textFullAiPromptEditTemplateConfiguration() {
    return this._textFullAiPromptEditTemplateConfiguration;
  }
  public putTextFullAiPromptEditTemplateConfiguration(value: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration) {
    this._textFullAiPromptEditTemplateConfiguration.internalValue = value;
  }
  public resetTextFullAiPromptEditTemplateConfiguration() {
    this._textFullAiPromptEditTemplateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFullAiPromptEditTemplateConfigurationInput() {
    return this._textFullAiPromptEditTemplateConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt awscc_wisdom_ai_prompt}
*/
export class WisdomAiPrompt extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_ai_prompt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WisdomAiPrompt resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WisdomAiPrompt to import
  * @param importFromId The id of the existing WisdomAiPrompt that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WisdomAiPrompt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_prompt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/wisdom_ai_prompt awscc_wisdom_ai_prompt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WisdomAiPromptConfig
  */
  public constructor(scope: Construct, id: string, config: WisdomAiPromptConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wisdom_ai_prompt',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.111.0',
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
    this._apiFormat = config.apiFormat;
    this._assistantId = config.assistantId;
    this._description = config.description;
    this._inferenceConfiguration.internalValue = config.inferenceConfiguration;
    this._modelId = config.modelId;
    this._name = config.name;
    this._tags = config.tags;
    this._templateConfiguration.internalValue = config.templateConfiguration;
    this._templateType = config.templateType;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ai_prompt_arn - computed: true, optional: false, required: false
  public get aiPromptArn() {
    return this.getStringAttribute('ai_prompt_arn');
  }

  // ai_prompt_id - computed: true, optional: false, required: false
  public get aiPromptId() {
    return this.getStringAttribute('ai_prompt_id');
  }

  // api_format - computed: false, optional: false, required: true
  private _apiFormat?: string; 
  public get apiFormat() {
    return this.getStringAttribute('api_format');
  }
  public set apiFormat(value: string) {
    this._apiFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiFormatInput() {
    return this._apiFormat;
  }

  // assistant_arn - computed: true, optional: false, required: false
  public get assistantArn() {
    return this.getStringAttribute('assistant_arn');
  }

  // assistant_id - computed: true, optional: true, required: false
  private _assistantId?: string; 
  public get assistantId() {
    return this.getStringAttribute('assistant_id');
  }
  public set assistantId(value: string) {
    this._assistantId = value;
  }
  public resetAssistantId() {
    this._assistantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assistantIdInput() {
    return this._assistantId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inference_configuration - computed: true, optional: true, required: false
  private _inferenceConfiguration = new WisdomAiPromptInferenceConfigurationOutputReference(this, "inference_configuration");
  public get inferenceConfiguration() {
    return this._inferenceConfiguration;
  }
  public putInferenceConfiguration(value: WisdomAiPromptInferenceConfiguration) {
    this._inferenceConfiguration.internalValue = value;
  }
  public resetInferenceConfiguration() {
    this._inferenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceConfigurationInput() {
    return this._inferenceConfiguration.internalValue;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // modified_time_seconds - computed: true, optional: false, required: false
  public get modifiedTimeSeconds() {
    return this.getNumberAttribute('modified_time_seconds');
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template_configuration - computed: false, optional: false, required: true
  private _templateConfiguration = new WisdomAiPromptTemplateConfigurationOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }
  public putTemplateConfiguration(value: WisdomAiPromptTemplateConfiguration) {
    this._templateConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConfigurationInput() {
    return this._templateConfiguration.internalValue;
  }

  // template_type - computed: false, optional: false, required: true
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_format: cdktn.stringToTerraform(this._apiFormat),
      assistant_id: cdktn.stringToTerraform(this._assistantId),
      description: cdktn.stringToTerraform(this._description),
      inference_configuration: wisdomAiPromptInferenceConfigurationToTerraform(this._inferenceConfiguration.internalValue),
      model_id: cdktn.stringToTerraform(this._modelId),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      template_configuration: wisdomAiPromptTemplateConfigurationToTerraform(this._templateConfiguration.internalValue),
      template_type: cdktn.stringToTerraform(this._templateType),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_format: {
        value: cdktn.stringToHclTerraform(this._apiFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assistant_id: {
        value: cdktn.stringToHclTerraform(this._assistantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inference_configuration: {
        value: wisdomAiPromptInferenceConfigurationToHclTerraform(this._inferenceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomAiPromptInferenceConfiguration",
      },
      model_id: {
        value: cdktn.stringToHclTerraform(this._modelId),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      template_configuration: {
        value: wisdomAiPromptTemplateConfigurationToHclTerraform(this._templateConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomAiPromptTemplateConfiguration",
      },
      template_type: {
        value: cdktn.stringToHclTerraform(this._templateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
