/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChimeAppInstanceUserConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_arn ChimeAppInstanceUser#app_instance_arn}
  */
  readonly appInstanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_user_id ChimeAppInstanceUser#app_instance_user_id}
  */
  readonly appInstanceUserId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_settings ChimeAppInstanceUser#expiration_settings}
  */
  readonly expirationSettings?: ChimeAppInstanceUserExpirationSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#metadata ChimeAppInstanceUser#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#name ChimeAppInstanceUser#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#tags ChimeAppInstanceUser#tags}
  */
  readonly tags?: ChimeAppInstanceUserTags[] | cdktn.IResolvable;
}
export interface ChimeAppInstanceUserExpirationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_criterion ChimeAppInstanceUser#expiration_criterion}
  */
  readonly expirationCriterion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_days ChimeAppInstanceUser#expiration_days}
  */
  readonly expirationDays?: number;
}

export function chimeAppInstanceUserExpirationSettingsToTerraform(struct?: ChimeAppInstanceUserExpirationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expiration_criterion: cdktn.stringToTerraform(struct!.expirationCriterion),
    expiration_days: cdktn.numberToTerraform(struct!.expirationDays),
  }
}


export function chimeAppInstanceUserExpirationSettingsToHclTerraform(struct?: ChimeAppInstanceUserExpirationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expiration_criterion: {
      value: cdktn.stringToHclTerraform(struct!.expirationCriterion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_days: {
      value: cdktn.numberToHclTerraform(struct!.expirationDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChimeAppInstanceUserExpirationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChimeAppInstanceUserExpirationSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationCriterion !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationCriterion = this._expirationCriterion;
    }
    if (this._expirationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDays = this._expirationDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimeAppInstanceUserExpirationSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationCriterion = undefined;
      this._expirationDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationCriterion = value.expirationCriterion;
      this._expirationDays = value.expirationDays;
    }
  }

  // expiration_criterion - computed: true, optional: true, required: false
  private _expirationCriterion?: string; 
  public get expirationCriterion() {
    return this.getStringAttribute('expiration_criterion');
  }
  public set expirationCriterion(value: string) {
    this._expirationCriterion = value;
  }
  public resetExpirationCriterion() {
    this._expirationCriterion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationCriterionInput() {
    return this._expirationCriterion;
  }

  // expiration_days - computed: true, optional: true, required: false
  private _expirationDays?: number; 
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number) {
    this._expirationDays = value;
  }
  public resetExpirationDays() {
    this._expirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays;
  }
}
export interface ChimeAppInstanceUserTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#key ChimeAppInstanceUser#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#value ChimeAppInstanceUser#value}
  */
  readonly value?: string;
}

export function chimeAppInstanceUserTagsToTerraform(struct?: ChimeAppInstanceUserTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chimeAppInstanceUserTagsToHclTerraform(struct?: ChimeAppInstanceUserTags | cdktn.IResolvable): any {
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

export class ChimeAppInstanceUserTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChimeAppInstanceUserTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChimeAppInstanceUserTags | cdktn.IResolvable | undefined) {
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

export class ChimeAppInstanceUserTagsList extends cdktn.ComplexList {
  public internalValue? : ChimeAppInstanceUserTags[] | cdktn.IResolvable

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
  public get(index: number): ChimeAppInstanceUserTagsOutputReference {
    return new ChimeAppInstanceUserTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user awscc_chime_app_instance_user}
*/
export class ChimeAppInstanceUser extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_chime_app_instance_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChimeAppInstanceUser resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChimeAppInstanceUser to import
  * @param importFromId The id of the existing ChimeAppInstanceUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChimeAppInstanceUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_chime_app_instance_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user awscc_chime_app_instance_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeAppInstanceUserConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeAppInstanceUserConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_chime_app_instance_user',
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
    this._appInstanceArn = config.appInstanceArn;
    this._appInstanceUserId = config.appInstanceUserId;
    this._expirationSettings.internalValue = config.expirationSettings;
    this._metadata = config.metadata;
    this._name = config.name;
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

  // app_instance_user_arn - computed: true, optional: false, required: false
  public get appInstanceUserArn() {
    return this.getStringAttribute('app_instance_user_arn');
  }

  // app_instance_user_id - computed: false, optional: false, required: true
  private _appInstanceUserId?: string; 
  public get appInstanceUserId() {
    return this.getStringAttribute('app_instance_user_id');
  }
  public set appInstanceUserId(value: string) {
    this._appInstanceUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstanceUserIdInput() {
    return this._appInstanceUserId;
  }

  // expiration_settings - computed: true, optional: true, required: false
  private _expirationSettings = new ChimeAppInstanceUserExpirationSettingsOutputReference(this, "expiration_settings");
  public get expirationSettings() {
    return this._expirationSettings;
  }
  public putExpirationSettings(value: ChimeAppInstanceUserExpirationSettings) {
    this._expirationSettings.internalValue = value;
  }
  public resetExpirationSettings() {
    this._expirationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSettingsInput() {
    return this._expirationSettings.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
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

  // tags - computed: true, optional: true, required: false
  private _tags = new ChimeAppInstanceUserTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ChimeAppInstanceUserTags[] | cdktn.IResolvable) {
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
      app_instance_user_id: cdktn.stringToTerraform(this._appInstanceUserId),
      expiration_settings: chimeAppInstanceUserExpirationSettingsToTerraform(this._expirationSettings.internalValue),
      metadata: cdktn.stringToTerraform(this._metadata),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(chimeAppInstanceUserTagsToTerraform, false)(this._tags.internalValue),
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
      app_instance_user_id: {
        value: cdktn.stringToHclTerraform(this._appInstanceUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_settings: {
        value: chimeAppInstanceUserExpirationSettingsToHclTerraform(this._expirationSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChimeAppInstanceUserExpirationSettings",
      },
      metadata: {
        value: cdktn.stringToHclTerraform(this._metadata),
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
        value: cdktn.listMapperHcl(chimeAppInstanceUserTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChimeAppInstanceUserTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
