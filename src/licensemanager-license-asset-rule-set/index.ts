/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LicensemanagerLicenseAssetRuleSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * License asset ruleset description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#description LicensemanagerLicenseAssetRuleSet#description}
  */
  readonly description?: string;
  /**
  * License asset ruleset name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#name LicensemanagerLicenseAssetRuleSet#name}
  */
  readonly name: string;
  /**
  * License asset rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#rules LicensemanagerLicenseAssetRuleSet#rules}
  */
  readonly rules: LicensemanagerLicenseAssetRuleSetRules[] | cdktn.IResolvable;
  /**
  * Tags to add to the license asset ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#tags LicensemanagerLicenseAssetRuleSet#tags}
  */
  readonly tags?: LicensemanagerLicenseAssetRuleSetTags[] | cdktn.IResolvable;
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements {
  /**
  * Constraint (e.g. Equals, Not_Equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}
  */
  readonly constraint?: string;
  /**
  * Key to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}
  */
  readonly keyToMatch?: string;
  /**
  * Values to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}
  */
  readonly valueToMatch?: string[];
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraint: cdktn.stringToTerraform(struct!.constraint),
    key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
    value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraint: {
      value: cdktn.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_to_match: {
      value: cdktn.stringToHclTerraform(struct!.keyToMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_match: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._keyToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyToMatch = this._keyToMatch;
    }
    if (this._valueToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToMatch = this._valueToMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint = undefined;
      this._keyToMatch = undefined;
      this._valueToMatch = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint = value.constraint;
      this._keyToMatch = value.keyToMatch;
      this._valueToMatch = value.valueToMatch;
    }
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // key_to_match - computed: true, optional: true, required: false
  private _keyToMatch?: string; 
  public get keyToMatch() {
    return this.getStringAttribute('key_to_match');
  }
  public set keyToMatch(value: string) {
    this._keyToMatch = value;
  }
  public resetKeyToMatch() {
    this._keyToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyToMatchInput() {
    return this._keyToMatch;
  }

  // value_to_match - computed: true, optional: true, required: false
  private _valueToMatch?: string[]; 
  public get valueToMatch() {
    return this.getListAttribute('value_to_match');
  }
  public set valueToMatch(value: string[]) {
    this._valueToMatch = value;
  }
  public resetValueToMatch() {
    this._valueToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToMatchInput() {
    return this._valueToMatch;
  }
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList extends cdktn.ComplexList {
  public internalValue? : LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements[] | cdktn.IResolvable

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
  public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference {
    return new LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}
  */
  readonly matchingRuleStatements?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements[] | cdktn.IResolvable;
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    matching_rule_statements: cdktn.listMapper(licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsToTerraform, false)(struct!.matchingRuleStatements),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    matching_rule_statements: {
      value: cdktn.listMapperHcl(licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsToHclTerraform, false)(struct!.matchingRuleStatements),
      isBlock: true,
      type: "list",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingRuleStatements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
    }
  }

  // matching_rule_statements - computed: true, optional: true, required: false
  private _matchingRuleStatements = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList(this, "matching_rule_statements", false);
  public get matchingRuleStatements() {
    return this._matchingRuleStatements;
  }
  public putMatchingRuleStatements(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements[] | cdktn.IResolvable) {
    this._matchingRuleStatements.internalValue = value;
  }
  public resetMatchingRuleStatements() {
    this._matchingRuleStatements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleStatementsInput() {
    return this._matchingRuleStatements.internalValue;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement {
  /**
  * Constraint (e.g. Equals, Not_Equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}
  */
  readonly constraint?: string;
  /**
  * Key to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}
  */
  readonly keyToMatch?: string;
  /**
  * Values to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}
  */
  readonly valueToMatch?: string[];
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraint: cdktn.stringToTerraform(struct!.constraint),
    key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
    value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraint: {
      value: cdktn.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_to_match: {
      value: cdktn.stringToHclTerraform(struct!.keyToMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_match: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._keyToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyToMatch = this._keyToMatch;
    }
    if (this._valueToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToMatch = this._valueToMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint = undefined;
      this._keyToMatch = undefined;
      this._valueToMatch = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint = value.constraint;
      this._keyToMatch = value.keyToMatch;
      this._valueToMatch = value.valueToMatch;
    }
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // key_to_match - computed: true, optional: true, required: false
  private _keyToMatch?: string; 
  public get keyToMatch() {
    return this.getStringAttribute('key_to_match');
  }
  public set keyToMatch(value: string) {
    this._keyToMatch = value;
  }
  public resetKeyToMatch() {
    this._keyToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyToMatchInput() {
    return this._keyToMatch;
  }

  // value_to_match - computed: true, optional: true, required: false
  private _valueToMatch?: string[]; 
  public get valueToMatch() {
    return this.getListAttribute('value_to_match');
  }
  public set valueToMatch(value: string[]) {
    this._valueToMatch = value;
  }
  public resetValueToMatch() {
    this._valueToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToMatchInput() {
    return this._valueToMatch;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements {
  /**
  * Constraint (e.g. Equals, Not_Equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}
  */
  readonly constraint?: string;
  /**
  * Key to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}
  */
  readonly keyToMatch?: string;
  /**
  * Values to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}
  */
  readonly valueToMatch?: string[];
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraint: cdktn.stringToTerraform(struct!.constraint),
    key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
    value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraint: {
      value: cdktn.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_to_match: {
      value: cdktn.stringToHclTerraform(struct!.keyToMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_match: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._keyToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyToMatch = this._keyToMatch;
    }
    if (this._valueToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToMatch = this._valueToMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint = undefined;
      this._keyToMatch = undefined;
      this._valueToMatch = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint = value.constraint;
      this._keyToMatch = value.keyToMatch;
      this._valueToMatch = value.valueToMatch;
    }
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // key_to_match - computed: true, optional: true, required: false
  private _keyToMatch?: string; 
  public get keyToMatch() {
    return this.getStringAttribute('key_to_match');
  }
  public set keyToMatch(value: string) {
    this._keyToMatch = value;
  }
  public resetKeyToMatch() {
    this._keyToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyToMatchInput() {
    return this._keyToMatch;
  }

  // value_to_match - computed: true, optional: true, required: false
  private _valueToMatch?: string[]; 
  public get valueToMatch() {
    return this.getListAttribute('value_to_match');
  }
  public set valueToMatch(value: string[]) {
    this._valueToMatch = value;
  }
  public resetValueToMatch() {
    this._valueToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToMatchInput() {
    return this._valueToMatch;
  }
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList extends cdktn.ComplexList {
  public internalValue? : LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements[] | cdktn.IResolvable

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
  public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference {
    return new LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}
  */
  readonly matchingRuleStatements?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements[] | cdktn.IResolvable;
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    matching_rule_statements: cdktn.listMapper(licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsToTerraform, false)(struct!.matchingRuleStatements),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    matching_rule_statements: {
      value: cdktn.listMapperHcl(licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsToHclTerraform, false)(struct!.matchingRuleStatements),
      isBlock: true,
      type: "list",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingRuleStatements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
    }
  }

  // matching_rule_statements - computed: true, optional: true, required: false
  private _matchingRuleStatements = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList(this, "matching_rule_statements", false);
  public get matchingRuleStatements() {
    return this._matchingRuleStatements;
  }
  public putMatchingRuleStatements(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements[] | cdktn.IResolvable) {
    this._matchingRuleStatements.internalValue = value;
  }
  public resetMatchingRuleStatements() {
    this._matchingRuleStatements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleStatementsInput() {
    return this._matchingRuleStatements.internalValue;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement {
  /**
  * AND rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}
  */
  readonly andRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement;
  /**
  * Matching rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}
  */
  readonly matchingRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement;
  /**
  * OR rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}
  */
  readonly orRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement;
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementToTerraform(struct!.andRuleStatement),
    matching_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementToTerraform(struct!.matchingRuleStatement),
    or_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementToTerraform(struct!.orRuleStatement),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementToHclTerraform(struct!.andRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement",
    },
    matching_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementToHclTerraform(struct!.matchingRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement",
    },
    or_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementToHclTerraform(struct!.orRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andRuleStatement = this._andRuleStatement?.internalValue;
    }
    if (this._matchingRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRuleStatement = this._matchingRuleStatement?.internalValue;
    }
    if (this._orRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orRuleStatement = this._orRuleStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andRuleStatement.internalValue = undefined;
      this._matchingRuleStatement.internalValue = undefined;
      this._orRuleStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andRuleStatement.internalValue = value.andRuleStatement;
      this._matchingRuleStatement.internalValue = value.matchingRuleStatement;
      this._orRuleStatement.internalValue = value.orRuleStatement;
    }
  }

  // and_rule_statement - computed: true, optional: true, required: false
  private _andRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference(this, "and_rule_statement");
  public get andRuleStatement() {
    return this._andRuleStatement;
  }
  public putAndRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement) {
    this._andRuleStatement.internalValue = value;
  }
  public resetAndRuleStatement() {
    this._andRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andRuleStatementInput() {
    return this._andRuleStatement.internalValue;
  }

  // matching_rule_statement - computed: true, optional: true, required: false
  private _matchingRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference(this, "matching_rule_statement");
  public get matchingRuleStatement() {
    return this._matchingRuleStatement;
  }
  public putMatchingRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement) {
    this._matchingRuleStatement.internalValue = value;
  }
  public resetMatchingRuleStatement() {
    this._matchingRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleStatementInput() {
    return this._matchingRuleStatement.internalValue;
  }

  // or_rule_statement - computed: true, optional: true, required: false
  private _orRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference(this, "or_rule_statement");
  public get orRuleStatement() {
    return this._orRuleStatement;
  }
  public putOrRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement) {
    this._orRuleStatement.internalValue = value;
  }
  public resetOrRuleStatement() {
    this._orRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orRuleStatementInput() {
    return this._orRuleStatement.internalValue;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements {
  /**
  * Constraint (e.g. Equals, Not_Equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}
  */
  readonly constraint?: string;
  /**
  * Key to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}
  */
  readonly keyToMatch?: string;
  /**
  * Values to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}
  */
  readonly valueToMatch?: string[];
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraint: cdktn.stringToTerraform(struct!.constraint),
    key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
    value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraint: {
      value: cdktn.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_to_match: {
      value: cdktn.stringToHclTerraform(struct!.keyToMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_match: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._keyToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyToMatch = this._keyToMatch;
    }
    if (this._valueToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToMatch = this._valueToMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint = undefined;
      this._keyToMatch = undefined;
      this._valueToMatch = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint = value.constraint;
      this._keyToMatch = value.keyToMatch;
      this._valueToMatch = value.valueToMatch;
    }
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // key_to_match - computed: true, optional: true, required: false
  private _keyToMatch?: string; 
  public get keyToMatch() {
    return this.getStringAttribute('key_to_match');
  }
  public set keyToMatch(value: string) {
    this._keyToMatch = value;
  }
  public resetKeyToMatch() {
    this._keyToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyToMatchInput() {
    return this._keyToMatch;
  }

  // value_to_match - computed: true, optional: true, required: false
  private _valueToMatch?: string[]; 
  public get valueToMatch() {
    return this.getListAttribute('value_to_match');
  }
  public set valueToMatch(value: string[]) {
    this._valueToMatch = value;
  }
  public resetValueToMatch() {
    this._valueToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToMatchInput() {
    return this._valueToMatch;
  }
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList extends cdktn.ComplexList {
  public internalValue? : LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements[] | cdktn.IResolvable

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
  public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference {
    return new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}
  */
  readonly matchingRuleStatements?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements[] | cdktn.IResolvable;
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    matching_rule_statements: cdktn.listMapper(licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsToTerraform, false)(struct!.matchingRuleStatements),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    matching_rule_statements: {
      value: cdktn.listMapperHcl(licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsToHclTerraform, false)(struct!.matchingRuleStatements),
      isBlock: true,
      type: "list",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingRuleStatements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
    }
  }

  // matching_rule_statements - computed: true, optional: true, required: false
  private _matchingRuleStatements = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList(this, "matching_rule_statements", false);
  public get matchingRuleStatements() {
    return this._matchingRuleStatements;
  }
  public putMatchingRuleStatements(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements[] | cdktn.IResolvable) {
    this._matchingRuleStatements.internalValue = value;
  }
  public resetMatchingRuleStatements() {
    this._matchingRuleStatements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleStatementsInput() {
    return this._matchingRuleStatements.internalValue;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement {
  /**
  * Constraint (e.g. Equals, Not_Equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}
  */
  readonly constraint?: string;
  /**
  * Key to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}
  */
  readonly keyToMatch?: string;
  /**
  * Values to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}
  */
  readonly valueToMatch?: string[];
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraint: cdktn.stringToTerraform(struct!.constraint),
    key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
    value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraint: {
      value: cdktn.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_to_match: {
      value: cdktn.stringToHclTerraform(struct!.keyToMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_match: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._keyToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyToMatch = this._keyToMatch;
    }
    if (this._valueToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToMatch = this._valueToMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint = undefined;
      this._keyToMatch = undefined;
      this._valueToMatch = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint = value.constraint;
      this._keyToMatch = value.keyToMatch;
      this._valueToMatch = value.valueToMatch;
    }
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // key_to_match - computed: true, optional: true, required: false
  private _keyToMatch?: string; 
  public get keyToMatch() {
    return this.getStringAttribute('key_to_match');
  }
  public set keyToMatch(value: string) {
    this._keyToMatch = value;
  }
  public resetKeyToMatch() {
    this._keyToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyToMatchInput() {
    return this._keyToMatch;
  }

  // value_to_match - computed: true, optional: true, required: false
  private _valueToMatch?: string[]; 
  public get valueToMatch() {
    return this.getListAttribute('value_to_match');
  }
  public set valueToMatch(value: string[]) {
    this._valueToMatch = value;
  }
  public resetValueToMatch() {
    this._valueToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToMatchInput() {
    return this._valueToMatch;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements {
  /**
  * Constraint (e.g. Equals, Not_Equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}
  */
  readonly constraint?: string;
  /**
  * Key to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}
  */
  readonly keyToMatch?: string;
  /**
  * Values to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}
  */
  readonly valueToMatch?: string[];
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraint: cdktn.stringToTerraform(struct!.constraint),
    key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
    value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraint: {
      value: cdktn.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_to_match: {
      value: cdktn.stringToHclTerraform(struct!.keyToMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_match: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._keyToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyToMatch = this._keyToMatch;
    }
    if (this._valueToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToMatch = this._valueToMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint = undefined;
      this._keyToMatch = undefined;
      this._valueToMatch = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint = value.constraint;
      this._keyToMatch = value.keyToMatch;
      this._valueToMatch = value.valueToMatch;
    }
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // key_to_match - computed: true, optional: true, required: false
  private _keyToMatch?: string; 
  public get keyToMatch() {
    return this.getStringAttribute('key_to_match');
  }
  public set keyToMatch(value: string) {
    this._keyToMatch = value;
  }
  public resetKeyToMatch() {
    this._keyToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyToMatchInput() {
    return this._keyToMatch;
  }

  // value_to_match - computed: true, optional: true, required: false
  private _valueToMatch?: string[]; 
  public get valueToMatch() {
    return this.getListAttribute('value_to_match');
  }
  public set valueToMatch(value: string[]) {
    this._valueToMatch = value;
  }
  public resetValueToMatch() {
    this._valueToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToMatchInput() {
    return this._valueToMatch;
  }
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList extends cdktn.ComplexList {
  public internalValue? : LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements[] | cdktn.IResolvable

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
  public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference {
    return new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}
  */
  readonly matchingRuleStatements?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements[] | cdktn.IResolvable;
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    matching_rule_statements: cdktn.listMapper(licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsToTerraform, false)(struct!.matchingRuleStatements),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    matching_rule_statements: {
      value: cdktn.listMapperHcl(licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsToHclTerraform, false)(struct!.matchingRuleStatements),
      isBlock: true,
      type: "list",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingRuleStatements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
    }
  }

  // matching_rule_statements - computed: true, optional: true, required: false
  private _matchingRuleStatements = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList(this, "matching_rule_statements", false);
  public get matchingRuleStatements() {
    return this._matchingRuleStatements;
  }
  public putMatchingRuleStatements(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements[] | cdktn.IResolvable) {
    this._matchingRuleStatements.internalValue = value;
  }
  public resetMatchingRuleStatements() {
    this._matchingRuleStatements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleStatementsInput() {
    return this._matchingRuleStatements.internalValue;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement {
  /**
  * AND rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}
  */
  readonly andRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement;
  /**
  * Matching rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}
  */
  readonly matchingRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement;
  /**
  * OR rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}
  */
  readonly orRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement;
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementToTerraform(struct!.andRuleStatement),
    matching_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementToTerraform(struct!.matchingRuleStatement),
    or_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementToTerraform(struct!.orRuleStatement),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementToHclTerraform(struct!.andRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement",
    },
    matching_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementToHclTerraform(struct!.matchingRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement",
    },
    or_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementToHclTerraform(struct!.orRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andRuleStatement = this._andRuleStatement?.internalValue;
    }
    if (this._matchingRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRuleStatement = this._matchingRuleStatement?.internalValue;
    }
    if (this._orRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orRuleStatement = this._orRuleStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andRuleStatement.internalValue = undefined;
      this._matchingRuleStatement.internalValue = undefined;
      this._orRuleStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andRuleStatement.internalValue = value.andRuleStatement;
      this._matchingRuleStatement.internalValue = value.matchingRuleStatement;
      this._orRuleStatement.internalValue = value.orRuleStatement;
    }
  }

  // and_rule_statement - computed: true, optional: true, required: false
  private _andRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference(this, "and_rule_statement");
  public get andRuleStatement() {
    return this._andRuleStatement;
  }
  public putAndRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement) {
    this._andRuleStatement.internalValue = value;
  }
  public resetAndRuleStatement() {
    this._andRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andRuleStatementInput() {
    return this._andRuleStatement.internalValue;
  }

  // matching_rule_statement - computed: true, optional: true, required: false
  private _matchingRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference(this, "matching_rule_statement");
  public get matchingRuleStatement() {
    return this._matchingRuleStatement;
  }
  public putMatchingRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement) {
    this._matchingRuleStatement.internalValue = value;
  }
  public resetMatchingRuleStatement() {
    this._matchingRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleStatementInput() {
    return this._matchingRuleStatement.internalValue;
  }

  // or_rule_statement - computed: true, optional: true, required: false
  private _orRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference(this, "or_rule_statement");
  public get orRuleStatement() {
    return this._orRuleStatement;
  }
  public putOrRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement) {
    this._orRuleStatement.internalValue = value;
  }
  public resetOrRuleStatement() {
    this._orRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orRuleStatementInput() {
    return this._orRuleStatement.internalValue;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements {
  /**
  * Constraint (e.g. Equals, Not_Equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}
  */
  readonly constraint?: string;
  /**
  * Key to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}
  */
  readonly keyToMatch?: string;
  /**
  * Values to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}
  */
  readonly valueToMatch?: string[];
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraint: cdktn.stringToTerraform(struct!.constraint),
    key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
    value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraint: {
      value: cdktn.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_to_match: {
      value: cdktn.stringToHclTerraform(struct!.keyToMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_match: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._keyToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyToMatch = this._keyToMatch;
    }
    if (this._valueToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToMatch = this._valueToMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint = undefined;
      this._keyToMatch = undefined;
      this._valueToMatch = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint = value.constraint;
      this._keyToMatch = value.keyToMatch;
      this._valueToMatch = value.valueToMatch;
    }
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // key_to_match - computed: true, optional: true, required: false
  private _keyToMatch?: string; 
  public get keyToMatch() {
    return this.getStringAttribute('key_to_match');
  }
  public set keyToMatch(value: string) {
    this._keyToMatch = value;
  }
  public resetKeyToMatch() {
    this._keyToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyToMatchInput() {
    return this._keyToMatch;
  }

  // value_to_match - computed: true, optional: true, required: false
  private _valueToMatch?: string[]; 
  public get valueToMatch() {
    return this.getListAttribute('value_to_match');
  }
  public set valueToMatch(value: string[]) {
    this._valueToMatch = value;
  }
  public resetValueToMatch() {
    this._valueToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToMatchInput() {
    return this._valueToMatch;
  }
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList extends cdktn.ComplexList {
  public internalValue? : LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements[] | cdktn.IResolvable

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
  public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference {
    return new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}
  */
  readonly matchingRuleStatements?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements[] | cdktn.IResolvable;
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    matching_rule_statements: cdktn.listMapper(licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsToTerraform, false)(struct!.matchingRuleStatements),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    matching_rule_statements: {
      value: cdktn.listMapperHcl(licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsToHclTerraform, false)(struct!.matchingRuleStatements),
      isBlock: true,
      type: "list",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingRuleStatements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
    }
  }

  // matching_rule_statements - computed: true, optional: true, required: false
  private _matchingRuleStatements = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList(this, "matching_rule_statements", false);
  public get matchingRuleStatements() {
    return this._matchingRuleStatements;
  }
  public putMatchingRuleStatements(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements[] | cdktn.IResolvable) {
    this._matchingRuleStatements.internalValue = value;
  }
  public resetMatchingRuleStatements() {
    this._matchingRuleStatements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleStatementsInput() {
    return this._matchingRuleStatements.internalValue;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement {
  /**
  * Constraint (e.g. Equals, Not_Equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}
  */
  readonly constraint?: string;
  /**
  * Key to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}
  */
  readonly keyToMatch?: string;
  /**
  * Values to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}
  */
  readonly valueToMatch?: string[];
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraint: cdktn.stringToTerraform(struct!.constraint),
    key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
    value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraint: {
      value: cdktn.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_to_match: {
      value: cdktn.stringToHclTerraform(struct!.keyToMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_match: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._keyToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyToMatch = this._keyToMatch;
    }
    if (this._valueToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToMatch = this._valueToMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint = undefined;
      this._keyToMatch = undefined;
      this._valueToMatch = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint = value.constraint;
      this._keyToMatch = value.keyToMatch;
      this._valueToMatch = value.valueToMatch;
    }
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // key_to_match - computed: true, optional: true, required: false
  private _keyToMatch?: string; 
  public get keyToMatch() {
    return this.getStringAttribute('key_to_match');
  }
  public set keyToMatch(value: string) {
    this._keyToMatch = value;
  }
  public resetKeyToMatch() {
    this._keyToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyToMatchInput() {
    return this._keyToMatch;
  }

  // value_to_match - computed: true, optional: true, required: false
  private _valueToMatch?: string[]; 
  public get valueToMatch() {
    return this.getListAttribute('value_to_match');
  }
  public set valueToMatch(value: string[]) {
    this._valueToMatch = value;
  }
  public resetValueToMatch() {
    this._valueToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToMatchInput() {
    return this._valueToMatch;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements {
  /**
  * Constraint (e.g. Equals, Not_Equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}
  */
  readonly constraint?: string;
  /**
  * Key to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}
  */
  readonly keyToMatch?: string;
  /**
  * Values to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}
  */
  readonly valueToMatch?: string[];
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraint: cdktn.stringToTerraform(struct!.constraint),
    key_to_match: cdktn.stringToTerraform(struct!.keyToMatch),
    value_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.valueToMatch),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraint: {
      value: cdktn.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_to_match: {
      value: cdktn.stringToHclTerraform(struct!.keyToMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_match: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.valueToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._keyToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyToMatch = this._keyToMatch;
    }
    if (this._valueToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToMatch = this._valueToMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint = undefined;
      this._keyToMatch = undefined;
      this._valueToMatch = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint = value.constraint;
      this._keyToMatch = value.keyToMatch;
      this._valueToMatch = value.valueToMatch;
    }
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // key_to_match - computed: true, optional: true, required: false
  private _keyToMatch?: string; 
  public get keyToMatch() {
    return this.getStringAttribute('key_to_match');
  }
  public set keyToMatch(value: string) {
    this._keyToMatch = value;
  }
  public resetKeyToMatch() {
    this._keyToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyToMatchInput() {
    return this._keyToMatch;
  }

  // value_to_match - computed: true, optional: true, required: false
  private _valueToMatch?: string[]; 
  public get valueToMatch() {
    return this.getListAttribute('value_to_match');
  }
  public set valueToMatch(value: string[]) {
    this._valueToMatch = value;
  }
  public resetValueToMatch() {
    this._valueToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToMatchInput() {
    return this._valueToMatch;
  }
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList extends cdktn.ComplexList {
  public internalValue? : LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements[] | cdktn.IResolvable

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
  public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference {
    return new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}
  */
  readonly matchingRuleStatements?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements[] | cdktn.IResolvable;
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    matching_rule_statements: cdktn.listMapper(licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsToTerraform, false)(struct!.matchingRuleStatements),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    matching_rule_statements: {
      value: cdktn.listMapperHcl(licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsToHclTerraform, false)(struct!.matchingRuleStatements),
      isBlock: true,
      type: "list",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingRuleStatements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRuleStatements = this._matchingRuleStatements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchingRuleStatements.internalValue = value.matchingRuleStatements;
    }
  }

  // matching_rule_statements - computed: true, optional: true, required: false
  private _matchingRuleStatements = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList(this, "matching_rule_statements", false);
  public get matchingRuleStatements() {
    return this._matchingRuleStatements;
  }
  public putMatchingRuleStatements(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements[] | cdktn.IResolvable) {
    this._matchingRuleStatements.internalValue = value;
  }
  public resetMatchingRuleStatements() {
    this._matchingRuleStatements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleStatementsInput() {
    return this._matchingRuleStatements.internalValue;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement {
  /**
  * AND rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}
  */
  readonly andRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement;
  /**
  * Matching rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}
  */
  readonly matchingRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement;
  /**
  * OR rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}
  */
  readonly orRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement;
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementToTerraform(struct!.andRuleStatement),
    matching_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementToTerraform(struct!.matchingRuleStatement),
    or_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementToTerraform(struct!.orRuleStatement),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementToHclTerraform(struct!.andRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement",
    },
    matching_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementToHclTerraform(struct!.matchingRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement",
    },
    or_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementToHclTerraform(struct!.orRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andRuleStatement = this._andRuleStatement?.internalValue;
    }
    if (this._matchingRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRuleStatement = this._matchingRuleStatement?.internalValue;
    }
    if (this._orRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orRuleStatement = this._orRuleStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andRuleStatement.internalValue = undefined;
      this._matchingRuleStatement.internalValue = undefined;
      this._orRuleStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andRuleStatement.internalValue = value.andRuleStatement;
      this._matchingRuleStatement.internalValue = value.matchingRuleStatement;
      this._orRuleStatement.internalValue = value.orRuleStatement;
    }
  }

  // and_rule_statement - computed: true, optional: true, required: false
  private _andRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference(this, "and_rule_statement");
  public get andRuleStatement() {
    return this._andRuleStatement;
  }
  public putAndRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement) {
    this._andRuleStatement.internalValue = value;
  }
  public resetAndRuleStatement() {
    this._andRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andRuleStatementInput() {
    return this._andRuleStatement.internalValue;
  }

  // matching_rule_statement - computed: true, optional: true, required: false
  private _matchingRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference(this, "matching_rule_statement");
  public get matchingRuleStatement() {
    return this._matchingRuleStatement;
  }
  public putMatchingRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement) {
    this._matchingRuleStatement.internalValue = value;
  }
  public resetMatchingRuleStatement() {
    this._matchingRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleStatementInput() {
    return this._matchingRuleStatement.internalValue;
  }

  // or_rule_statement - computed: true, optional: true, required: false
  private _orRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference(this, "or_rule_statement");
  public get orRuleStatement() {
    return this._orRuleStatement;
  }
  public putOrRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement) {
    this._orRuleStatement.internalValue = value;
  }
  public resetOrRuleStatement() {
    this._orRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orRuleStatementInput() {
    return this._orRuleStatement.internalValue;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRulesRuleStatement {
  /**
  * Instance rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#instance_rule_statement LicensemanagerLicenseAssetRuleSet#instance_rule_statement}
  */
  readonly instanceRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement;
  /**
  * License configuration rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#license_configuration_rule_statement LicensemanagerLicenseAssetRuleSet#license_configuration_rule_statement}
  */
  readonly licenseConfigurationRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement;
  /**
  * License rule statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#license_rule_statement LicensemanagerLicenseAssetRuleSet#license_rule_statement}
  */
  readonly licenseRuleStatement?: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement;
}

export function licensemanagerLicenseAssetRuleSetRulesRuleStatementToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementToTerraform(struct!.instanceRuleStatement),
    license_configuration_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementToTerraform(struct!.licenseConfigurationRuleStatement),
    license_rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementToTerraform(struct!.licenseRuleStatement),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesRuleStatementToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRulesRuleStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementToHclTerraform(struct!.instanceRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement",
    },
    license_configuration_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementToHclTerraform(struct!.licenseConfigurationRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement",
    },
    license_rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementToHclTerraform(struct!.licenseRuleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRulesRuleStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRuleStatement = this._instanceRuleStatement?.internalValue;
    }
    if (this._licenseConfigurationRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseConfigurationRuleStatement = this._licenseConfigurationRuleStatement?.internalValue;
    }
    if (this._licenseRuleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseRuleStatement = this._licenseRuleStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceRuleStatement.internalValue = undefined;
      this._licenseConfigurationRuleStatement.internalValue = undefined;
      this._licenseRuleStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceRuleStatement.internalValue = value.instanceRuleStatement;
      this._licenseConfigurationRuleStatement.internalValue = value.licenseConfigurationRuleStatement;
      this._licenseRuleStatement.internalValue = value.licenseRuleStatement;
    }
  }

  // instance_rule_statement - computed: true, optional: true, required: false
  private _instanceRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference(this, "instance_rule_statement");
  public get instanceRuleStatement() {
    return this._instanceRuleStatement;
  }
  public putInstanceRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement) {
    this._instanceRuleStatement.internalValue = value;
  }
  public resetInstanceRuleStatement() {
    this._instanceRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRuleStatementInput() {
    return this._instanceRuleStatement.internalValue;
  }

  // license_configuration_rule_statement - computed: true, optional: true, required: false
  private _licenseConfigurationRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference(this, "license_configuration_rule_statement");
  public get licenseConfigurationRuleStatement() {
    return this._licenseConfigurationRuleStatement;
  }
  public putLicenseConfigurationRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement) {
    this._licenseConfigurationRuleStatement.internalValue = value;
  }
  public resetLicenseConfigurationRuleStatement() {
    this._licenseConfigurationRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConfigurationRuleStatementInput() {
    return this._licenseConfigurationRuleStatement.internalValue;
  }

  // license_rule_statement - computed: true, optional: true, required: false
  private _licenseRuleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference(this, "license_rule_statement");
  public get licenseRuleStatement() {
    return this._licenseRuleStatement;
  }
  public putLicenseRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement) {
    this._licenseRuleStatement.internalValue = value;
  }
  public resetLicenseRuleStatement() {
    this._licenseRuleStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseRuleStatementInput() {
    return this._licenseRuleStatement.internalValue;
  }
}
export interface LicensemanagerLicenseAssetRuleSetRules {
  /**
  * Rule statement. Specify exactly one of InstanceRuleStatement, LicenseRuleStatement, or LicenseConfigurationRuleStatement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#rule_statement LicensemanagerLicenseAssetRuleSet#rule_statement}
  */
  readonly ruleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatement;
}

export function licensemanagerLicenseAssetRuleSetRulesToTerraform(struct?: LicensemanagerLicenseAssetRuleSetRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_statement: licensemanagerLicenseAssetRuleSetRulesRuleStatementToTerraform(struct!.ruleStatement),
  }
}


export function licensemanagerLicenseAssetRuleSetRulesToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_statement: {
      value: licensemanagerLicenseAssetRuleSetRulesRuleStatementToHclTerraform(struct!.ruleStatement),
      isBlock: true,
      type: "struct",
      storageClassType: "LicensemanagerLicenseAssetRuleSetRulesRuleStatement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicensemanagerLicenseAssetRuleSetRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LicensemanagerLicenseAssetRuleSetRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleStatement = this._ruleStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleStatement.internalValue = value.ruleStatement;
    }
  }

  // rule_statement - computed: false, optional: false, required: true
  private _ruleStatement = new LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference(this, "rule_statement");
  public get ruleStatement() {
    return this._ruleStatement;
  }
  public putRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatement) {
    this._ruleStatement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatementInput() {
    return this._ruleStatement.internalValue;
  }
}

export class LicensemanagerLicenseAssetRuleSetRulesList extends cdktn.ComplexList {
  public internalValue? : LicensemanagerLicenseAssetRuleSetRules[] | cdktn.IResolvable

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
  public get(index: number): LicensemanagerLicenseAssetRuleSetRulesOutputReference {
    return new LicensemanagerLicenseAssetRuleSetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicensemanagerLicenseAssetRuleSetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key LicensemanagerLicenseAssetRuleSet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value LicensemanagerLicenseAssetRuleSet#value}
  */
  readonly value?: string;
}

export function licensemanagerLicenseAssetRuleSetTagsToTerraform(struct?: LicensemanagerLicenseAssetRuleSetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function licensemanagerLicenseAssetRuleSetTagsToHclTerraform(struct?: LicensemanagerLicenseAssetRuleSetTags | cdktn.IResolvable): any {
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

export class LicensemanagerLicenseAssetRuleSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LicensemanagerLicenseAssetRuleSetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LicensemanagerLicenseAssetRuleSetTags | cdktn.IResolvable | undefined) {
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

export class LicensemanagerLicenseAssetRuleSetTagsList extends cdktn.ComplexList {
  public internalValue? : LicensemanagerLicenseAssetRuleSetTags[] | cdktn.IResolvable

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
  public get(index: number): LicensemanagerLicenseAssetRuleSetTagsOutputReference {
    return new LicensemanagerLicenseAssetRuleSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set awscc_licensemanager_license_asset_rule_set}
*/
export class LicensemanagerLicenseAssetRuleSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_licensemanager_license_asset_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LicensemanagerLicenseAssetRuleSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicensemanagerLicenseAssetRuleSet to import
  * @param importFromId The id of the existing LicensemanagerLicenseAssetRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicensemanagerLicenseAssetRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanager_license_asset_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set awscc_licensemanager_license_asset_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensemanagerLicenseAssetRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: LicensemanagerLicenseAssetRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_licensemanager_license_asset_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.97.0',
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
    this._description = config.description;
    this._name = config.name;
    this._rules.internalValue = config.rules;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // license_asset_ruleset_arn - computed: true, optional: false, required: false
  public get licenseAssetRulesetArn() {
    return this.getStringAttribute('license_asset_ruleset_arn');
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

  // rules - computed: false, optional: false, required: true
  private _rules = new LicensemanagerLicenseAssetRuleSetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: LicensemanagerLicenseAssetRuleSetRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new LicensemanagerLicenseAssetRuleSetTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: LicensemanagerLicenseAssetRuleSetTags[] | cdktn.IResolvable) {
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
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      rules: cdktn.listMapper(licensemanagerLicenseAssetRuleSetRulesToTerraform, false)(this._rules.internalValue),
      tags: cdktn.listMapper(licensemanagerLicenseAssetRuleSetTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      rules: {
        value: cdktn.listMapperHcl(licensemanagerLicenseAssetRuleSetRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicensemanagerLicenseAssetRuleSetRulesList",
      },
      tags: {
        value: cdktn.listMapperHcl(licensemanagerLicenseAssetRuleSetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LicensemanagerLicenseAssetRuleSetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
