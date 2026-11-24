/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OpensearchmemorySpaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}
  */
  readonly encryptionConfiguration?: OpensearchmemorySpaceEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}
  */
  readonly eventExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}
  */
  readonly extractionModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}
  */
  readonly memoryExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}
  */
  readonly memoryStrategies?: OpensearchmemorySpaceMemoryStrategies[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}
  */
  readonly name: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#tags OpensearchmemorySpace#tags}
  */
  readonly tags?: OpensearchmemorySpaceTags[] | cdktn.IResolvable;
}
export interface OpensearchmemorySpaceEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function opensearchmemorySpaceEncryptionConfigurationToTerraform(struct?: OpensearchmemorySpaceEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function opensearchmemorySpaceEncryptionConfigurationToHclTerraform(struct?: OpensearchmemorySpaceEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchmemorySpaceEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchmemorySpaceEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchmemorySpaceEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface OpensearchmemorySpaceMemoryStrategiesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}
  */
  readonly consolidationEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}
  */
  readonly extractEveryNMessages?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}
  */
  readonly extractEveryNTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}
  */
  readonly extractionPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}
  */
  readonly extractionSeedRecentN?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}
  */
  readonly extractionSeedTopK?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}
  */
  readonly idleTimeoutSeconds?: number;
}

export function opensearchmemorySpaceMemoryStrategiesConfigurationToTerraform(struct?: OpensearchmemorySpaceMemoryStrategiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consolidation_enabled: cdktn.booleanToTerraform(struct!.consolidationEnabled),
    extract_every_n_messages: cdktn.numberToTerraform(struct!.extractEveryNMessages),
    extract_every_n_tokens: cdktn.numberToTerraform(struct!.extractEveryNTokens),
    extraction_prompt: cdktn.stringToTerraform(struct!.extractionPrompt),
    extraction_seed_recent_n: cdktn.numberToTerraform(struct!.extractionSeedRecentN),
    extraction_seed_top_k: cdktn.numberToTerraform(struct!.extractionSeedTopK),
    idle_timeout_seconds: cdktn.numberToTerraform(struct!.idleTimeoutSeconds),
  }
}


export function opensearchmemorySpaceMemoryStrategiesConfigurationToHclTerraform(struct?: OpensearchmemorySpaceMemoryStrategiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consolidation_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.consolidationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extract_every_n_messages: {
      value: cdktn.numberToHclTerraform(struct!.extractEveryNMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extract_every_n_tokens: {
      value: cdktn.numberToHclTerraform(struct!.extractEveryNTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extraction_prompt: {
      value: cdktn.stringToHclTerraform(struct!.extractionPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extraction_seed_recent_n: {
      value: cdktn.numberToHclTerraform(struct!.extractionSeedRecentN),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extraction_seed_top_k: {
      value: cdktn.numberToHclTerraform(struct!.extractionSeedTopK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.idleTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchmemorySpaceMemoryStrategiesConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consolidationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidationEnabled = this._consolidationEnabled;
    }
    if (this._extractEveryNMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractEveryNMessages = this._extractEveryNMessages;
    }
    if (this._extractEveryNTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractEveryNTokens = this._extractEveryNTokens;
    }
    if (this._extractionPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionPrompt = this._extractionPrompt;
    }
    if (this._extractionSeedRecentN !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionSeedRecentN = this._extractionSeedRecentN;
    }
    if (this._extractionSeedTopK !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionSeedTopK = this._extractionSeedTopK;
    }
    if (this._idleTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutSeconds = this._idleTimeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchmemorySpaceMemoryStrategiesConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consolidationEnabled = undefined;
      this._extractEveryNMessages = undefined;
      this._extractEveryNTokens = undefined;
      this._extractionPrompt = undefined;
      this._extractionSeedRecentN = undefined;
      this._extractionSeedTopK = undefined;
      this._idleTimeoutSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consolidationEnabled = value.consolidationEnabled;
      this._extractEveryNMessages = value.extractEveryNMessages;
      this._extractEveryNTokens = value.extractEveryNTokens;
      this._extractionPrompt = value.extractionPrompt;
      this._extractionSeedRecentN = value.extractionSeedRecentN;
      this._extractionSeedTopK = value.extractionSeedTopK;
      this._idleTimeoutSeconds = value.idleTimeoutSeconds;
    }
  }

  // consolidation_enabled - computed: true, optional: true, required: false
  private _consolidationEnabled?: boolean | cdktn.IResolvable; 
  public get consolidationEnabled() {
    return this.getBooleanAttribute('consolidation_enabled');
  }
  public set consolidationEnabled(value: boolean | cdktn.IResolvable) {
    this._consolidationEnabled = value;
  }
  public resetConsolidationEnabled() {
    this._consolidationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationEnabledInput() {
    return this._consolidationEnabled;
  }

  // extract_every_n_messages - computed: true, optional: true, required: false
  private _extractEveryNMessages?: number; 
  public get extractEveryNMessages() {
    return this.getNumberAttribute('extract_every_n_messages');
  }
  public set extractEveryNMessages(value: number) {
    this._extractEveryNMessages = value;
  }
  public resetExtractEveryNMessages() {
    this._extractEveryNMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractEveryNMessagesInput() {
    return this._extractEveryNMessages;
  }

  // extract_every_n_tokens - computed: true, optional: true, required: false
  private _extractEveryNTokens?: number; 
  public get extractEveryNTokens() {
    return this.getNumberAttribute('extract_every_n_tokens');
  }
  public set extractEveryNTokens(value: number) {
    this._extractEveryNTokens = value;
  }
  public resetExtractEveryNTokens() {
    this._extractEveryNTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractEveryNTokensInput() {
    return this._extractEveryNTokens;
  }

  // extraction_prompt - computed: true, optional: true, required: false
  private _extractionPrompt?: string; 
  public get extractionPrompt() {
    return this.getStringAttribute('extraction_prompt');
  }
  public set extractionPrompt(value: string) {
    this._extractionPrompt = value;
  }
  public resetExtractionPrompt() {
    this._extractionPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionPromptInput() {
    return this._extractionPrompt;
  }

  // extraction_seed_recent_n - computed: true, optional: true, required: false
  private _extractionSeedRecentN?: number; 
  public get extractionSeedRecentN() {
    return this.getNumberAttribute('extraction_seed_recent_n');
  }
  public set extractionSeedRecentN(value: number) {
    this._extractionSeedRecentN = value;
  }
  public resetExtractionSeedRecentN() {
    this._extractionSeedRecentN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionSeedRecentNInput() {
    return this._extractionSeedRecentN;
  }

  // extraction_seed_top_k - computed: true, optional: true, required: false
  private _extractionSeedTopK?: number; 
  public get extractionSeedTopK() {
    return this.getNumberAttribute('extraction_seed_top_k');
  }
  public set extractionSeedTopK(value: number) {
    this._extractionSeedTopK = value;
  }
  public resetExtractionSeedTopK() {
    this._extractionSeedTopK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionSeedTopKInput() {
    return this._extractionSeedTopK;
  }

  // idle_timeout_seconds - computed: true, optional: true, required: false
  private _idleTimeoutSeconds?: number; 
  public get idleTimeoutSeconds() {
    return this.getNumberAttribute('idle_timeout_seconds');
  }
  public set idleTimeoutSeconds(value: number) {
    this._idleTimeoutSeconds = value;
  }
  public resetIdleTimeoutSeconds() {
    this._idleTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutSecondsInput() {
    return this._idleTimeoutSeconds;
  }
}
export interface OpensearchmemorySpaceMemoryStrategies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}
  */
  readonly configuration?: OpensearchmemorySpaceMemoryStrategiesConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}
  */
  readonly type?: string;
}

export function opensearchmemorySpaceMemoryStrategiesToTerraform(struct?: OpensearchmemorySpaceMemoryStrategies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration: opensearchmemorySpaceMemoryStrategiesConfigurationToTerraform(struct!.configuration),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function opensearchmemorySpaceMemoryStrategiesToHclTerraform(struct?: OpensearchmemorySpaceMemoryStrategies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration: {
      value: opensearchmemorySpaceMemoryStrategiesConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchmemorySpaceMemoryStrategiesConfiguration",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchmemorySpaceMemoryStrategiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchmemorySpaceMemoryStrategies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchmemorySpaceMemoryStrategies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._description = value.description;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration = new OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: OpensearchmemorySpaceMemoryStrategiesConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OpensearchmemorySpaceMemoryStrategiesList extends cdktn.ComplexList {
  public internalValue? : OpensearchmemorySpaceMemoryStrategies[] | cdktn.IResolvable

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
  public get(index: number): OpensearchmemorySpaceMemoryStrategiesOutputReference {
    return new OpensearchmemorySpaceMemoryStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchmemorySpaceTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#key OpensearchmemorySpace#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#value OpensearchmemorySpace#value}
  */
  readonly value?: string;
}

export function opensearchmemorySpaceTagsToTerraform(struct?: OpensearchmemorySpaceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function opensearchmemorySpaceTagsToHclTerraform(struct?: OpensearchmemorySpaceTags | cdktn.IResolvable): any {
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

export class OpensearchmemorySpaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchmemorySpaceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OpensearchmemorySpaceTags | cdktn.IResolvable | undefined) {
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

export class OpensearchmemorySpaceTagsList extends cdktn.ComplexList {
  public internalValue? : OpensearchmemorySpaceTags[] | cdktn.IResolvable

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
  public get(index: number): OpensearchmemorySpaceTagsOutputReference {
    return new OpensearchmemorySpaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space awscc_opensearchmemory_space}
*/
export class OpensearchmemorySpace extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_opensearchmemory_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchmemorySpace to import
  * @param importFromId The id of the existing OpensearchmemorySpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchmemorySpace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchmemory_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space awscc_opensearchmemory_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchmemorySpaceConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchmemorySpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_opensearchmemory_space',
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
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._eventExpiryDays = config.eventExpiryDays;
    this._extractionModelId = config.extractionModelId;
    this._memoryExpiryDays = config.memoryExpiryDays;
    this._memoryStrategies.internalValue = config.memoryStrategies;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new OpensearchmemorySpaceEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: OpensearchmemorySpaceEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // event_expiry_days - computed: true, optional: true, required: false
  private _eventExpiryDays?: number; 
  public get eventExpiryDays() {
    return this.getNumberAttribute('event_expiry_days');
  }
  public set eventExpiryDays(value: number) {
    this._eventExpiryDays = value;
  }
  public resetEventExpiryDays() {
    this._eventExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventExpiryDaysInput() {
    return this._eventExpiryDays;
  }

  // extraction_model_id - computed: true, optional: true, required: false
  private _extractionModelId?: string; 
  public get extractionModelId() {
    return this.getStringAttribute('extraction_model_id');
  }
  public set extractionModelId(value: string) {
    this._extractionModelId = value;
  }
  public resetExtractionModelId() {
    this._extractionModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionModelIdInput() {
    return this._extractionModelId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory_expiry_days - computed: true, optional: true, required: false
  private _memoryExpiryDays?: number; 
  public get memoryExpiryDays() {
    return this.getNumberAttribute('memory_expiry_days');
  }
  public set memoryExpiryDays(value: number) {
    this._memoryExpiryDays = value;
  }
  public resetMemoryExpiryDays() {
    this._memoryExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryExpiryDaysInput() {
    return this._memoryExpiryDays;
  }

  // memory_strategies - computed: true, optional: true, required: false
  private _memoryStrategies = new OpensearchmemorySpaceMemoryStrategiesList(this, "memory_strategies", false);
  public get memoryStrategies() {
    return this._memoryStrategies;
  }
  public putMemoryStrategies(value: OpensearchmemorySpaceMemoryStrategies[] | cdktn.IResolvable) {
    this._memoryStrategies.internalValue = value;
  }
  public resetMemoryStrategies() {
    this._memoryStrategies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStrategiesInput() {
    return this._memoryStrategies.internalValue;
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

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new OpensearchmemorySpaceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: OpensearchmemorySpaceTags[] | cdktn.IResolvable) {
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
      encryption_configuration: opensearchmemorySpaceEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      event_expiry_days: cdktn.numberToTerraform(this._eventExpiryDays),
      extraction_model_id: cdktn.stringToTerraform(this._extractionModelId),
      memory_expiry_days: cdktn.numberToTerraform(this._memoryExpiryDays),
      memory_strategies: cdktn.listMapper(opensearchmemorySpaceMemoryStrategiesToTerraform, false)(this._memoryStrategies.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(opensearchmemorySpaceTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption_configuration: {
        value: opensearchmemorySpaceEncryptionConfigurationToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchmemorySpaceEncryptionConfiguration",
      },
      event_expiry_days: {
        value: cdktn.numberToHclTerraform(this._eventExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extraction_model_id: {
        value: cdktn.stringToHclTerraform(this._extractionModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_expiry_days: {
        value: cdktn.numberToHclTerraform(this._memoryExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_strategies: {
        value: cdktn.listMapperHcl(opensearchmemorySpaceMemoryStrategiesToHclTerraform, false)(this._memoryStrategies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchmemorySpaceMemoryStrategiesList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(opensearchmemorySpaceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpensearchmemorySpaceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
