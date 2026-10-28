/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CustomerprofilesRecommenderFilterConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the recommender filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#description CustomerprofilesRecommenderFilter#description}
  */
  readonly description?: string;
  /**
  * The unique name of the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#domain_name CustomerprofilesRecommenderFilter#domain_name}
  */
  readonly domainName: string;
  /**
  * The filter expression that defines which items to include or exclude from recommendations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_expression CustomerprofilesRecommenderFilter#recommender_filter_expression}
  */
  readonly recommenderFilterExpression: string;
  /**
  * The name of the recommender filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_name CustomerprofilesRecommenderFilter#recommender_filter_name}
  */
  readonly recommenderFilterName: string;
  /**
  * The name of the recommender schema to use for this recommender filter. If not specified, the default schema is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#recommender_schema_name CustomerprofilesRecommenderFilter#recommender_schema_name}
  */
  readonly recommenderSchemaName?: string;
  /**
  * The tags used to organize, track, or control access for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#tags CustomerprofilesRecommenderFilter#tags}
  */
  readonly tags?: CustomerprofilesRecommenderFilterTags[] | cdktn.IResolvable;
}
export interface CustomerprofilesRecommenderFilterTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#key CustomerprofilesRecommenderFilter#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#value CustomerprofilesRecommenderFilter#value}
  */
  readonly value?: string;
}

export function customerprofilesRecommenderFilterTagsToTerraform(struct?: CustomerprofilesRecommenderFilterTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function customerprofilesRecommenderFilterTagsToHclTerraform(struct?: CustomerprofilesRecommenderFilterTags | cdktn.IResolvable): any {
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

export class CustomerprofilesRecommenderFilterTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesRecommenderFilterTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CustomerprofilesRecommenderFilterTags | cdktn.IResolvable | undefined) {
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

export class CustomerprofilesRecommenderFilterTagsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesRecommenderFilterTags[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesRecommenderFilterTagsOutputReference {
    return new CustomerprofilesRecommenderFilterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter awscc_customerprofiles_recommender_filter}
*/
export class CustomerprofilesRecommenderFilter extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_customerprofiles_recommender_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomerprofilesRecommenderFilter to import
  * @param importFromId The id of the existing CustomerprofilesRecommenderFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomerprofilesRecommenderFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_recommender_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter awscc_customerprofiles_recommender_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerprofilesRecommenderFilterConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerprofilesRecommenderFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_recommender_filter',
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
    this._description = config.description;
    this._domainName = config.domainName;
    this._recommenderFilterExpression = config.recommenderFilterExpression;
    this._recommenderFilterName = config.recommenderFilterName;
    this._recommenderSchemaName = config.recommenderSchemaName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recommender_filter_arn - computed: true, optional: false, required: false
  public get recommenderFilterArn() {
    return this.getStringAttribute('recommender_filter_arn');
  }

  // recommender_filter_expression - computed: false, optional: false, required: true
  private _recommenderFilterExpression?: string; 
  public get recommenderFilterExpression() {
    return this.getStringAttribute('recommender_filter_expression');
  }
  public set recommenderFilterExpression(value: string) {
    this._recommenderFilterExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recommenderFilterExpressionInput() {
    return this._recommenderFilterExpression;
  }

  // recommender_filter_name - computed: false, optional: false, required: true
  private _recommenderFilterName?: string; 
  public get recommenderFilterName() {
    return this.getStringAttribute('recommender_filter_name');
  }
  public set recommenderFilterName(value: string) {
    this._recommenderFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recommenderFilterNameInput() {
    return this._recommenderFilterName;
  }

  // recommender_schema_name - computed: true, optional: true, required: false
  private _recommenderSchemaName?: string; 
  public get recommenderSchemaName() {
    return this.getStringAttribute('recommender_schema_name');
  }
  public set recommenderSchemaName(value: string) {
    this._recommenderSchemaName = value;
  }
  public resetRecommenderSchemaName() {
    this._recommenderSchemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommenderSchemaNameInput() {
    return this._recommenderSchemaName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CustomerprofilesRecommenderFilterTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CustomerprofilesRecommenderFilterTags[] | cdktn.IResolvable) {
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
      domain_name: cdktn.stringToTerraform(this._domainName),
      recommender_filter_expression: cdktn.stringToTerraform(this._recommenderFilterExpression),
      recommender_filter_name: cdktn.stringToTerraform(this._recommenderFilterName),
      recommender_schema_name: cdktn.stringToTerraform(this._recommenderSchemaName),
      tags: cdktn.listMapper(customerprofilesRecommenderFilterTagsToTerraform, false)(this._tags.internalValue),
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
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommender_filter_expression: {
        value: cdktn.stringToHclTerraform(this._recommenderFilterExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommender_filter_name: {
        value: cdktn.stringToHclTerraform(this._recommenderFilterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommender_schema_name: {
        value: cdktn.stringToHclTerraform(this._recommenderSchemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(customerprofilesRecommenderFilterTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesRecommenderFilterTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
