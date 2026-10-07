/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworksecuritymanagerTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of rules associated with this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#associated_rule_list NetworksecuritymanagerTemplate#associated_rule_list}
  */
  readonly associatedRuleList?: NetworksecuritymanagerTemplateAssociatedRuleListStruct[] | cdktn.IResolvable;
  /**
  * The type of firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#firewall_type NetworksecuritymanagerTemplate#firewall_type}
  */
  readonly firewallType?: string;
  /**
  * The tags associated with the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#tags NetworksecuritymanagerTemplate#tags}
  */
  readonly tags?: NetworksecuritymanagerTemplateTags[] | cdktn.IResolvable;
  /**
  * A description of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#template_description NetworksecuritymanagerTemplate#template_description}
  */
  readonly templateDescription?: string;
  /**
  * The name of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#template_name NetworksecuritymanagerTemplate#template_name}
  */
  readonly templateName: string;
}
export interface NetworksecuritymanagerTemplateAssociatedRuleListStruct {
  /**
  * ARN of the associated rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#rule_arn NetworksecuritymanagerTemplate#rule_arn}
  */
  readonly ruleArn?: string;
}

export function networksecuritymanagerTemplateAssociatedRuleListStructToTerraform(struct?: NetworksecuritymanagerTemplateAssociatedRuleListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_arn: cdktn.stringToTerraform(struct!.ruleArn),
  }
}


export function networksecuritymanagerTemplateAssociatedRuleListStructToHclTerraform(struct?: NetworksecuritymanagerTemplateAssociatedRuleListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_arn: {
      value: cdktn.stringToHclTerraform(struct!.ruleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerTemplateAssociatedRuleListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleArn = this._ruleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerTemplateAssociatedRuleListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleArn = value.ruleArn;
    }
  }

  // rule_arn - computed: true, optional: true, required: false
  private _ruleArn?: string; 
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }
  public set ruleArn(value: string) {
    this._ruleArn = value;
  }
  public resetRuleArn() {
    this._ruleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleArnInput() {
    return this._ruleArn;
  }
}

export class NetworksecuritymanagerTemplateAssociatedRuleListStructList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerTemplateAssociatedRuleListStruct[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference {
    return new NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerTemplateTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#key NetworksecuritymanagerTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#value NetworksecuritymanagerTemplate#value}
  */
  readonly value?: string;
}

export function networksecuritymanagerTemplateTagsToTerraform(struct?: NetworksecuritymanagerTemplateTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networksecuritymanagerTemplateTagsToHclTerraform(struct?: NetworksecuritymanagerTemplateTags | cdktn.IResolvable): any {
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

export class NetworksecuritymanagerTemplateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerTemplateTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworksecuritymanagerTemplateTags | cdktn.IResolvable | undefined) {
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

export class NetworksecuritymanagerTemplateTagsList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerTemplateTags[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerTemplateTagsOutputReference {
    return new NetworksecuritymanagerTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template awscc_networksecuritymanager_template}
*/
export class NetworksecuritymanagerTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networksecuritymanager_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworksecuritymanagerTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworksecuritymanagerTemplate to import
  * @param importFromId The id of the existing NetworksecuritymanagerTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworksecuritymanagerTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networksecuritymanager_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template awscc_networksecuritymanager_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworksecuritymanagerTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: NetworksecuritymanagerTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networksecuritymanager_template',
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
    this._associatedRuleList.internalValue = config.associatedRuleList;
    this._firewallType = config.firewallType;
    this._tags.internalValue = config.tags;
    this._templateDescription = config.templateDescription;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_rule_list - computed: true, optional: true, required: false
  private _associatedRuleList = new NetworksecuritymanagerTemplateAssociatedRuleListStructList(this, "associated_rule_list", false);
  public get associatedRuleList() {
    return this._associatedRuleList;
  }
  public putAssociatedRuleList(value: NetworksecuritymanagerTemplateAssociatedRuleListStruct[] | cdktn.IResolvable) {
    this._associatedRuleList.internalValue = value;
  }
  public resetAssociatedRuleList() {
    this._associatedRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedRuleListInput() {
    return this._associatedRuleList.internalValue;
  }

  // firewall_type - computed: true, optional: true, required: false
  private _firewallType?: string; 
  public get firewallType() {
    return this.getStringAttribute('firewall_type');
  }
  public set firewallType(value: string) {
    this._firewallType = value;
  }
  public resetFirewallType() {
    this._firewallType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTypeInput() {
    return this._firewallType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetworksecuritymanagerTemplateTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworksecuritymanagerTemplateTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // template_arn - computed: true, optional: false, required: false
  public get templateArn() {
    return this.getStringAttribute('template_arn');
  }

  // template_description - computed: true, optional: true, required: false
  private _templateDescription?: string; 
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }
  public set templateDescription(value: string) {
    this._templateDescription = value;
  }
  public resetTemplateDescription() {
    this._templateDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDescriptionInput() {
    return this._templateDescription;
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_rule_list: cdktn.listMapper(networksecuritymanagerTemplateAssociatedRuleListStructToTerraform, false)(this._associatedRuleList.internalValue),
      firewall_type: cdktn.stringToTerraform(this._firewallType),
      tags: cdktn.listMapper(networksecuritymanagerTemplateTagsToTerraform, false)(this._tags.internalValue),
      template_description: cdktn.stringToTerraform(this._templateDescription),
      template_name: cdktn.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_rule_list: {
        value: cdktn.listMapperHcl(networksecuritymanagerTemplateAssociatedRuleListStructToHclTerraform, false)(this._associatedRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworksecuritymanagerTemplateAssociatedRuleListStructList",
      },
      firewall_type: {
        value: cdktn.stringToHclTerraform(this._firewallType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(networksecuritymanagerTemplateTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworksecuritymanagerTemplateTagsList",
      },
      template_description: {
        value: cdktn.stringToHclTerraform(this._templateDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktn.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
