/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SesTenantConfig extends cdktn.TerraformMetaArguments {
  /**
  * The reputation configuration for the tenant. Sending status remains managed by SES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#reputation_entity SesTenant#reputation_entity}
  */
  readonly reputationEntity?: SesTenantReputationEntity;
  /**
  * The list of resources to associate with the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#resource_associations SesTenant#resource_associations}
  */
  readonly resourceAssociations?: SesTenantResourceAssociations[] | cdktn.IResolvable;
  /**
  * The suppression attributes for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#suppression_attributes SesTenant#suppression_attributes}
  */
  readonly suppressionAttributes?: SesTenantSuppressionAttributes;
  /**
  * The tags (keys and values) associated with the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#tags SesTenant#tags}
  */
  readonly tags?: SesTenantTags[] | cdktn.IResolvable;
  /**
  * The name of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#tenant_name SesTenant#tenant_name}
  */
  readonly tenantName: string;
}
export interface SesTenantReputationEntityPolicy {
  /**
  * The ARN of an SES-managed reputation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#reputation_entity_policy SesTenant#reputation_entity_policy}
  */
  readonly reputationEntityPolicy?: string;
}

export function sesTenantReputationEntityPolicyToTerraform(struct?: SesTenantReputationEntityPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reputation_entity_policy: cdktn.stringToTerraform(struct!.reputationEntityPolicy),
  }
}


export function sesTenantReputationEntityPolicyToHclTerraform(struct?: SesTenantReputationEntityPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reputation_entity_policy: {
      value: cdktn.stringToHclTerraform(struct!.reputationEntityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesTenantReputationEntityPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesTenantReputationEntityPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reputationEntityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationEntityPolicy = this._reputationEntityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesTenantReputationEntityPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reputationEntityPolicy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reputationEntityPolicy = value.reputationEntityPolicy;
    }
  }

  // reputation_entity_policy - computed: true, optional: true, required: false
  private _reputationEntityPolicy?: string; 
  public get reputationEntityPolicy() {
    return this.getStringAttribute('reputation_entity_policy');
  }
  public set reputationEntityPolicy(value: string) {
    this._reputationEntityPolicy = value;
  }
  public resetReputationEntityPolicy() {
    this._reputationEntityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationEntityPolicyInput() {
    return this._reputationEntityPolicy;
  }
}
export interface SesTenantReputationEntity {
  /**
  * The reputation policy for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#policy SesTenant#policy}
  */
  readonly policy?: SesTenantReputationEntityPolicy;
}

export function sesTenantReputationEntityToTerraform(struct?: SesTenantReputationEntity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy: sesTenantReputationEntityPolicyToTerraform(struct!.policy),
  }
}


export function sesTenantReputationEntityToHclTerraform(struct?: SesTenantReputationEntity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy: {
      value: sesTenantReputationEntityPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "struct",
      storageClassType: "SesTenantReputationEntityPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesTenantReputationEntityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesTenantReputationEntity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesTenantReputationEntity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy.internalValue = value.policy;
    }
  }

  // policy - computed: true, optional: true, required: false
  private _policy = new SesTenantReputationEntityPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: SesTenantReputationEntityPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface SesTenantResourceAssociations {
  /**
  * The ARN of the resource to associate with the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#resource_arn SesTenant#resource_arn}
  */
  readonly resourceArn?: string;
}

export function sesTenantResourceAssociationsToTerraform(struct?: SesTenantResourceAssociations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
  }
}


export function sesTenantResourceAssociationsToHclTerraform(struct?: SesTenantResourceAssociations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class SesTenantResourceAssociationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesTenantResourceAssociations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesTenantResourceAssociations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceArn = value.resourceArn;
    }
  }

  // resource_arn - computed: true, optional: true, required: false
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  public resetResourceArn() {
    this._resourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}

export class SesTenantResourceAssociationsList extends cdktn.ComplexList {
  public internalValue? : SesTenantResourceAssociations[] | cdktn.IResolvable

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
  public get(index: number): SesTenantResourceAssociationsOutputReference {
    return new SesTenantResourceAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesTenantSuppressionAttributes {
  /**
  * The reasons that cause messages to be added to the suppression list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#suppressed_reasons SesTenant#suppressed_reasons}
  */
  readonly suppressedReasons?: string[];
  /**
  * The scope of the suppression list for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#suppression_scope SesTenant#suppression_scope}
  */
  readonly suppressionScope?: string;
}

export function sesTenantSuppressionAttributesToTerraform(struct?: SesTenantSuppressionAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    suppressed_reasons: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.suppressedReasons),
    suppression_scope: cdktn.stringToTerraform(struct!.suppressionScope),
  }
}


export function sesTenantSuppressionAttributesToHclTerraform(struct?: SesTenantSuppressionAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    suppressed_reasons: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.suppressedReasons),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    suppression_scope: {
      value: cdktn.stringToHclTerraform(struct!.suppressionScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesTenantSuppressionAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesTenantSuppressionAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suppressedReasons !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressedReasons = this._suppressedReasons;
    }
    if (this._suppressionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressionScope = this._suppressionScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesTenantSuppressionAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suppressedReasons = undefined;
      this._suppressionScope = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suppressedReasons = value.suppressedReasons;
      this._suppressionScope = value.suppressionScope;
    }
  }

  // suppressed_reasons - computed: true, optional: true, required: false
  private _suppressedReasons?: string[]; 
  public get suppressedReasons() {
    return cdktn.Fn.tolist(this.getListAttribute('suppressed_reasons'));
  }
  public set suppressedReasons(value: string[]) {
    this._suppressedReasons = value;
  }
  public resetSuppressedReasons() {
    this._suppressedReasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedReasonsInput() {
    return this._suppressedReasons;
  }

  // suppression_scope - computed: true, optional: true, required: false
  private _suppressionScope?: string; 
  public get suppressionScope() {
    return this.getStringAttribute('suppression_scope');
  }
  public set suppressionScope(value: string) {
    this._suppressionScope = value;
  }
  public resetSuppressionScope() {
    this._suppressionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionScopeInput() {
    return this._suppressionScope;
  }
}
export interface SesTenantTags {
  /**
  * The key of the key-value tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#key SesTenant#key}
  */
  readonly key?: string;
  /**
  * The value of the key-value tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#value SesTenant#value}
  */
  readonly value?: string;
}

export function sesTenantTagsToTerraform(struct?: SesTenantTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sesTenantTagsToHclTerraform(struct?: SesTenantTags | cdktn.IResolvable): any {
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

export class SesTenantTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesTenantTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SesTenantTags | cdktn.IResolvable | undefined) {
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

export class SesTenantTagsList extends cdktn.ComplexList {
  public internalValue? : SesTenantTags[] | cdktn.IResolvable

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
  public get(index: number): SesTenantTagsOutputReference {
    return new SesTenantTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant awscc_ses_tenant}
*/
export class SesTenant extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SesTenant resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesTenant to import
  * @param importFromId The id of the existing SesTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ses_tenant awscc_ses_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesTenantConfig
  */
  public constructor(scope: Construct, id: string, config: SesTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_tenant',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.108.0',
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
    this._reputationEntity.internalValue = config.reputationEntity;
    this._resourceAssociations.internalValue = config.resourceAssociations;
    this._suppressionAttributes.internalValue = config.suppressionAttributes;
    this._tags.internalValue = config.tags;
    this._tenantName = config.tenantName;
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

  // reputation_entity - computed: true, optional: true, required: false
  private _reputationEntity = new SesTenantReputationEntityOutputReference(this, "reputation_entity");
  public get reputationEntity() {
    return this._reputationEntity;
  }
  public putReputationEntity(value: SesTenantReputationEntity) {
    this._reputationEntity.internalValue = value;
  }
  public resetReputationEntity() {
    this._reputationEntity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationEntityInput() {
    return this._reputationEntity.internalValue;
  }

  // resource_associations - computed: true, optional: true, required: false
  private _resourceAssociations = new SesTenantResourceAssociationsList(this, "resource_associations", false);
  public get resourceAssociations() {
    return this._resourceAssociations;
  }
  public putResourceAssociations(value: SesTenantResourceAssociations[] | cdktn.IResolvable) {
    this._resourceAssociations.internalValue = value;
  }
  public resetResourceAssociations() {
    this._resourceAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAssociationsInput() {
    return this._resourceAssociations.internalValue;
  }

  // suppression_attributes - computed: true, optional: true, required: false
  private _suppressionAttributes = new SesTenantSuppressionAttributesOutputReference(this, "suppression_attributes");
  public get suppressionAttributes() {
    return this._suppressionAttributes;
  }
  public putSuppressionAttributes(value: SesTenantSuppressionAttributes) {
    this._suppressionAttributes.internalValue = value;
  }
  public resetSuppressionAttributes() {
    this._suppressionAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionAttributesInput() {
    return this._suppressionAttributes.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SesTenantTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SesTenantTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      reputation_entity: sesTenantReputationEntityToTerraform(this._reputationEntity.internalValue),
      resource_associations: cdktn.listMapper(sesTenantResourceAssociationsToTerraform, false)(this._resourceAssociations.internalValue),
      suppression_attributes: sesTenantSuppressionAttributesToTerraform(this._suppressionAttributes.internalValue),
      tags: cdktn.listMapper(sesTenantTagsToTerraform, false)(this._tags.internalValue),
      tenant_name: cdktn.stringToTerraform(this._tenantName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      reputation_entity: {
        value: sesTenantReputationEntityToHclTerraform(this._reputationEntity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesTenantReputationEntity",
      },
      resource_associations: {
        value: cdktn.listMapperHcl(sesTenantResourceAssociationsToHclTerraform, false)(this._resourceAssociations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesTenantResourceAssociationsList",
      },
      suppression_attributes: {
        value: sesTenantSuppressionAttributesToHclTerraform(this._suppressionAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesTenantSuppressionAttributes",
      },
      tags: {
        value: cdktn.listMapperHcl(sesTenantTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesTenantTagsList",
      },
      tenant_name: {
        value: cdktn.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
