/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AccessanalyzerArchiveRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the analyzer for the archive rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}
  */
  readonly analyzerName: string;
  /**
  * The criteria for the archive rule. A map of filter criteria property names to their criterion values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule#filter AccessanalyzerArchiveRule#filter}
  */
  readonly filter: { [key: string]: AccessanalyzerArchiveRuleFilter } | cdktn.IResolvable;
  /**
  * The name of the archive rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}
  */
  readonly ruleName: string;
}
export interface AccessanalyzerArchiveRuleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}
  */
  readonly contains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}
  */
  readonly eq?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}
  */
  readonly exists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}
  */
  readonly neq?: string[];
}

export function accessanalyzerArchiveRuleFilterToTerraform(struct?: AccessanalyzerArchiveRuleFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.contains),
    eq: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eq),
    exists: cdktn.booleanToTerraform(struct!.exists),
    neq: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.neq),
  }
}


export function accessanalyzerArchiveRuleFilterToHclTerraform(struct?: AccessanalyzerArchiveRuleFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.contains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    eq: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eq),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exists: {
      value: cdktn.booleanToHclTerraform(struct!.exists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neq: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.neq),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessanalyzerArchiveRuleFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): AccessanalyzerArchiveRuleFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._exists !== undefined) {
      hasAnyValues = true;
      internalValueResult.exists = this._exists;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessanalyzerArchiveRuleFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._eq = undefined;
      this._exists = undefined;
      this._neq = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._eq = value.eq;
      this._exists = value.exists;
      this._neq = value.neq;
    }
  }

  // contains - computed: true, optional: true, required: false
  private _contains?: string[]; 
  public get contains() {
    return this.getListAttribute('contains');
  }
  public set contains(value: string[]) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // eq - computed: true, optional: true, required: false
  private _eq?: string[]; 
  public get eq() {
    return this.getListAttribute('eq');
  }
  public set eq(value: string[]) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // exists - computed: true, optional: true, required: false
  private _exists?: boolean | cdktn.IResolvable; 
  public get exists() {
    return this.getBooleanAttribute('exists');
  }
  public set exists(value: boolean | cdktn.IResolvable) {
    this._exists = value;
  }
  public resetExists() {
    this._exists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existsInput() {
    return this._exists;
  }

  // neq - computed: true, optional: true, required: false
  private _neq?: string[]; 
  public get neq() {
    return this.getListAttribute('neq');
  }
  public set neq(value: string[]) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }
}

export class AccessanalyzerArchiveRuleFilterMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: AccessanalyzerArchiveRuleFilter } | cdktn.IResolvable

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
  public get(key: string): AccessanalyzerArchiveRuleFilterOutputReference {
    return new AccessanalyzerArchiveRuleFilterOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule awscc_accessanalyzer_archive_rule}
*/
export class AccessanalyzerArchiveRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_accessanalyzer_archive_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessanalyzerArchiveRule to import
  * @param importFromId The id of the existing AccessanalyzerArchiveRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessanalyzerArchiveRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_accessanalyzer_archive_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/accessanalyzer_archive_rule awscc_accessanalyzer_archive_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessanalyzerArchiveRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AccessanalyzerArchiveRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_accessanalyzer_archive_rule',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.100.0',
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
    this._analyzerName = config.analyzerName;
    this._filter.internalValue = config.filter;
    this._ruleName = config.ruleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyzer_name - computed: false, optional: false, required: true
  private _analyzerName?: string; 
  public get analyzerName() {
    return this.getStringAttribute('analyzer_name');
  }
  public set analyzerName(value: string) {
    this._analyzerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerNameInput() {
    return this._analyzerName;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new AccessanalyzerArchiveRuleFilterMap(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: { [key: string]: AccessanalyzerArchiveRuleFilter } | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
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
      analyzer_name: cdktn.stringToTerraform(this._analyzerName),
      filter: cdktn.hashMapper(accessanalyzerArchiveRuleFilterToTerraform)(this._filter.internalValue),
      rule_name: cdktn.stringToTerraform(this._ruleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analyzer_name: {
        value: cdktn.stringToHclTerraform(this._analyzerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktn.hashMapperHcl(accessanalyzerArchiveRuleFilterToHclTerraform)(this._filter.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "AccessanalyzerArchiveRuleFilterMap",
      },
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
