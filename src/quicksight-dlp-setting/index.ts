/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightDlpSettingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#aws_account_id QuicksightDlpSetting#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#dlp_setting_id QuicksightDlpSetting#dlp_setting_id}
  */
  readonly dlpSettingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#enabled QuicksightDlpSetting#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#name QuicksightDlpSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#provider_config QuicksightDlpSetting#provider_config}
  */
  readonly providerConfig: QuicksightDlpSettingProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#provider_outage_action QuicksightDlpSetting#provider_outage_action}
  */
  readonly providerOutageAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#provider_type QuicksightDlpSetting#provider_type}
  */
  readonly providerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#tags QuicksightDlpSetting#tags}
  */
  readonly tags?: QuicksightDlpSettingTags[] | cdktn.IResolvable;
}
export interface QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#secret_arn QuicksightDlpSetting#secret_arn}
  */
  readonly secretArn?: string;
}

export function quicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsToTerraform(struct?: QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function quicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsToHclTerraform(struct?: QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretArn = value.secretArn;
    }
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#action QuicksightDlpSetting#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#label_id QuicksightDlpSetting#label_id}
  */
  readonly labelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#label_name QuicksightDlpSetting#label_name}
  */
  readonly labelName?: string;
}

export function quicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsToTerraform(struct?: QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    label_id: cdktn.stringToTerraform(struct!.labelId),
    label_name: cdktn.stringToTerraform(struct!.labelName),
  }
}


export function quicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsToHclTerraform(struct?: QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_id: {
      value: cdktn.stringToHclTerraform(struct!.labelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_name: {
      value: cdktn.stringToHclTerraform(struct!.labelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._labelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelId = this._labelId;
    }
    if (this._labelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._labelId = undefined;
      this._labelName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._labelId = value.labelId;
      this._labelName = value.labelName;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // label_id - computed: true, optional: true, required: false
  private _labelId?: string; 
  public get labelId() {
    return this.getStringAttribute('label_id');
  }
  public set labelId(value: string) {
    this._labelId = value;
  }
  public resetLabelId() {
    this._labelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelIdInput() {
    return this._labelId;
  }

  // label_name - computed: true, optional: true, required: false
  private _labelName?: string; 
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
  public set labelName(value: string) {
    this._labelName = value;
  }
  public resetLabelName() {
    this._labelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName;
  }
}

export class QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList extends cdktn.ComplexList {
  public internalValue? : QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference {
    return new QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDlpSettingProviderConfigMicrosoftPurview {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#credentials QuicksightDlpSetting#credentials}
  */
  readonly credentials?: QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#label_action_mappings QuicksightDlpSetting#label_action_mappings}
  */
  readonly labelActionMappings?: QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#unmapped_action QuicksightDlpSetting#unmapped_action}
  */
  readonly unmappedAction?: string;
}

export function quicksightDlpSettingProviderConfigMicrosoftPurviewToTerraform(struct?: QuicksightDlpSettingProviderConfigMicrosoftPurview | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials: quicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsToTerraform(struct!.credentials),
    label_action_mappings: cdktn.listMapper(quicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsToTerraform, false)(struct!.labelActionMappings),
    unmapped_action: cdktn.stringToTerraform(struct!.unmappedAction),
  }
}


export function quicksightDlpSettingProviderConfigMicrosoftPurviewToHclTerraform(struct?: QuicksightDlpSettingProviderConfigMicrosoftPurview | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials: {
      value: quicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials",
    },
    label_action_mappings: {
      value: cdktn.listMapperHcl(quicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsToHclTerraform, false)(struct!.labelActionMappings),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList",
    },
    unmapped_action: {
      value: cdktn.stringToHclTerraform(struct!.unmappedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDlpSettingProviderConfigMicrosoftPurview | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._labelActionMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelActionMappings = this._labelActionMappings?.internalValue;
    }
    if (this._unmappedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmappedAction = this._unmappedAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDlpSettingProviderConfigMicrosoftPurview | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._labelActionMappings.internalValue = undefined;
      this._unmappedAction = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._labelActionMappings.internalValue = value.labelActionMappings;
      this._unmappedAction = value.unmappedAction;
    }
  }

  // credentials - computed: true, optional: true, required: false
  private _credentials = new QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // label_action_mappings - computed: true, optional: true, required: false
  private _labelActionMappings = new QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList(this, "label_action_mappings", false);
  public get labelActionMappings() {
    return this._labelActionMappings;
  }
  public putLabelActionMappings(value: QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings[] | cdktn.IResolvable) {
    this._labelActionMappings.internalValue = value;
  }
  public resetLabelActionMappings() {
    this._labelActionMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelActionMappingsInput() {
    return this._labelActionMappings.internalValue;
  }

  // unmapped_action - computed: true, optional: true, required: false
  private _unmappedAction?: string; 
  public get unmappedAction() {
    return this.getStringAttribute('unmapped_action');
  }
  public set unmappedAction(value: string) {
    this._unmappedAction = value;
  }
  public resetUnmappedAction() {
    this._unmappedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmappedActionInput() {
    return this._unmappedAction;
  }
}
export interface QuicksightDlpSettingProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#microsoft_purview QuicksightDlpSetting#microsoft_purview}
  */
  readonly microsoftPurview?: QuicksightDlpSettingProviderConfigMicrosoftPurview;
}

export function quicksightDlpSettingProviderConfigToTerraform(struct?: QuicksightDlpSettingProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    microsoft_purview: quicksightDlpSettingProviderConfigMicrosoftPurviewToTerraform(struct!.microsoftPurview),
  }
}


export function quicksightDlpSettingProviderConfigToHclTerraform(struct?: QuicksightDlpSettingProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    microsoft_purview: {
      value: quicksightDlpSettingProviderConfigMicrosoftPurviewToHclTerraform(struct!.microsoftPurview),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDlpSettingProviderConfigMicrosoftPurview",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDlpSettingProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDlpSettingProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._microsoftPurview?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftPurview = this._microsoftPurview?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDlpSettingProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._microsoftPurview.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._microsoftPurview.internalValue = value.microsoftPurview;
    }
  }

  // microsoft_purview - computed: true, optional: true, required: false
  private _microsoftPurview = new QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference(this, "microsoft_purview");
  public get microsoftPurview() {
    return this._microsoftPurview;
  }
  public putMicrosoftPurview(value: QuicksightDlpSettingProviderConfigMicrosoftPurview) {
    this._microsoftPurview.internalValue = value;
  }
  public resetMicrosoftPurview() {
    this._microsoftPurview.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftPurviewInput() {
    return this._microsoftPurview.internalValue;
  }
}
export interface QuicksightDlpSettingTags {
  /**
  * <p>Tag key.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#key QuicksightDlpSetting#key}
  */
  readonly key?: string;
  /**
  * <p>Tag value.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#value QuicksightDlpSetting#value}
  */
  readonly value?: string;
}

export function quicksightDlpSettingTagsToTerraform(struct?: QuicksightDlpSettingTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function quicksightDlpSettingTagsToHclTerraform(struct?: QuicksightDlpSettingTags | cdktn.IResolvable): any {
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

export class QuicksightDlpSettingTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDlpSettingTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightDlpSettingTags | cdktn.IResolvable | undefined) {
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

export class QuicksightDlpSettingTagsList extends cdktn.ComplexList {
  public internalValue? : QuicksightDlpSettingTags[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDlpSettingTagsOutputReference {
    return new QuicksightDlpSettingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting awscc_quicksight_dlp_setting}
*/
export class QuicksightDlpSetting extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_dlp_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightDlpSetting resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightDlpSetting to import
  * @param importFromId The id of the existing QuicksightDlpSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightDlpSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_dlp_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_dlp_setting awscc_quicksight_dlp_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightDlpSettingConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightDlpSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_dlp_setting',
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
    this._awsAccountId = config.awsAccountId;
    this._dlpSettingId = config.dlpSettingId;
    this._enabled = config.enabled;
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
    this._providerOutageAction = config.providerOutageAction;
    this._providerType = config.providerType;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dlp_setting_id - computed: false, optional: false, required: true
  private _dlpSettingId?: string; 
  public get dlpSettingId() {
    return this.getStringAttribute('dlp_setting_id');
  }
  public set dlpSettingId(value: string) {
    this._dlpSettingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpSettingIdInput() {
    return this._dlpSettingId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // provider_config - computed: false, optional: false, required: true
  private _providerConfig = new QuicksightDlpSettingProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: QuicksightDlpSettingProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // provider_outage_action - computed: false, optional: false, required: true
  private _providerOutageAction?: string; 
  public get providerOutageAction() {
    return this.getStringAttribute('provider_outage_action');
  }
  public set providerOutageAction(value: string) {
    this._providerOutageAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerOutageActionInput() {
    return this._providerOutageAction;
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QuicksightDlpSettingTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightDlpSettingTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      dlp_setting_id: cdktn.stringToTerraform(this._dlpSettingId),
      enabled: cdktn.booleanToTerraform(this._enabled),
      name: cdktn.stringToTerraform(this._name),
      provider_config: quicksightDlpSettingProviderConfigToTerraform(this._providerConfig.internalValue),
      provider_outage_action: cdktn.stringToTerraform(this._providerOutageAction),
      provider_type: cdktn.stringToTerraform(this._providerType),
      tags: cdktn.listMapper(quicksightDlpSettingTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_setting_id: {
        value: cdktn.stringToHclTerraform(this._dlpSettingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: quicksightDlpSettingProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightDlpSettingProviderConfig",
      },
      provider_outage_action: {
        value: cdktn.stringToHclTerraform(this._providerOutageAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_type: {
        value: cdktn.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(quicksightDlpSettingTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightDlpSettingTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
