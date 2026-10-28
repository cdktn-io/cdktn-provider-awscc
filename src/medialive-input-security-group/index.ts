/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MedialiveInputSecurityGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * A collection of key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Whitelist rules and their sync status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#whitelist_rules MedialiveInputSecurityGroup#whitelist_rules}
  */
  readonly whitelistRules?: MedialiveInputSecurityGroupWhitelistRules[] | cdktn.IResolvable;
}
export interface MedialiveInputSecurityGroupWhitelistRules {
  /**
  * The IPv4 CIDR that's whitelisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#cidr MedialiveInputSecurityGroup#cidr}
  */
  readonly cidr?: string;
}

export function medialiveInputSecurityGroupWhitelistRulesToTerraform(struct?: MedialiveInputSecurityGroupWhitelistRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function medialiveInputSecurityGroupWhitelistRulesToHclTerraform(struct?: MedialiveInputSecurityGroupWhitelistRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveInputSecurityGroupWhitelistRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MedialiveInputSecurityGroupWhitelistRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveInputSecurityGroupWhitelistRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class MedialiveInputSecurityGroupWhitelistRulesList extends cdktn.ComplexList {
  public internalValue? : MedialiveInputSecurityGroupWhitelistRules[] | cdktn.IResolvable

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
  public get(index: number): MedialiveInputSecurityGroupWhitelistRulesOutputReference {
    return new MedialiveInputSecurityGroupWhitelistRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group awscc_medialive_input_security_group}
*/
export class MedialiveInputSecurityGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_medialive_input_security_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MedialiveInputSecurityGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MedialiveInputSecurityGroup to import
  * @param importFromId The id of the existing MedialiveInputSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MedialiveInputSecurityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_input_security_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group awscc_medialive_input_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MedialiveInputSecurityGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MedialiveInputSecurityGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_medialive_input_security_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.107.0',
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
    this._tags = config.tags;
    this._whitelistRules.internalValue = config.whitelistRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_security_group_id - computed: true, optional: false, required: false
  public get inputSecurityGroupId() {
    return this.getStringAttribute('input_security_group_id');
  }

  // inputs - computed: true, optional: false, required: false
  public get inputs() {
    return this.getListAttribute('inputs');
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

  // whitelist_rules - computed: true, optional: true, required: false
  private _whitelistRules = new MedialiveInputSecurityGroupWhitelistRulesList(this, "whitelist_rules", false);
  public get whitelistRules() {
    return this._whitelistRules;
  }
  public putWhitelistRules(value: MedialiveInputSecurityGroupWhitelistRules[] | cdktn.IResolvable) {
    this._whitelistRules.internalValue = value;
  }
  public resetWhitelistRules() {
    this._whitelistRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistRulesInput() {
    return this._whitelistRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      whitelist_rules: cdktn.listMapper(medialiveInputSecurityGroupWhitelistRulesToTerraform, false)(this._whitelistRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      whitelist_rules: {
        value: cdktn.listMapperHcl(medialiveInputSecurityGroupWhitelistRulesToHclTerraform, false)(this._whitelistRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MedialiveInputSecurityGroupWhitelistRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
