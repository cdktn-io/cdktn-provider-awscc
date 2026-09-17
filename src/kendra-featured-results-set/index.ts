/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KendraFeaturedResultsSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description for the set of featured results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#description KendraFeaturedResultsSet#description}
  */
  readonly description?: string;
  /**
  * A list of document IDs for the documents you want to feature at the top of the search results page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#featured_documents KendraFeaturedResultsSet#featured_documents}
  */
  readonly featuredDocuments?: KendraFeaturedResultsSetFeaturedDocuments[] | cdktn.IResolvable;
  /**
  * A name for the set of featured results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#featured_results_set_name KendraFeaturedResultsSet#featured_results_set_name}
  */
  readonly featuredResultsSetName: string;
  /**
  * The identifier of the index that you want to use for featuring results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#index_id KendraFeaturedResultsSet#index_id}
  */
  readonly indexId: string;
  /**
  * A list of queries for featuring results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#query_texts KendraFeaturedResultsSet#query_texts}
  */
  readonly queryTexts?: string[];
  /**
  * The current status of the set of featured results. When the value is ACTIVE, featured results are ready for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#status KendraFeaturedResultsSet#status}
  */
  readonly status?: string;
  /**
  * A list of key-value pairs that identify or categorize the featured results set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#tags KendraFeaturedResultsSet#tags}
  */
  readonly tags?: KendraFeaturedResultsSetTags[] | cdktn.IResolvable;
}
export interface KendraFeaturedResultsSetFeaturedDocuments {
  /**
  * The identifier of the document to feature in the search results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#id KendraFeaturedResultsSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function kendraFeaturedResultsSetFeaturedDocumentsToTerraform(struct?: KendraFeaturedResultsSetFeaturedDocuments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function kendraFeaturedResultsSetFeaturedDocumentsToHclTerraform(struct?: KendraFeaturedResultsSetFeaturedDocuments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KendraFeaturedResultsSetFeaturedDocumentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraFeaturedResultsSetFeaturedDocuments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraFeaturedResultsSetFeaturedDocuments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class KendraFeaturedResultsSetFeaturedDocumentsList extends cdktn.ComplexList {
  public internalValue? : KendraFeaturedResultsSetFeaturedDocuments[] | cdktn.IResolvable

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
  public get(index: number): KendraFeaturedResultsSetFeaturedDocumentsOutputReference {
    return new KendraFeaturedResultsSetFeaturedDocumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraFeaturedResultsSetTags {
  /**
  * The key for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#key KendraFeaturedResultsSet#key}
  */
  readonly key?: string;
  /**
  * The value associated with the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#value KendraFeaturedResultsSet#value}
  */
  readonly value?: string;
}

export function kendraFeaturedResultsSetTagsToTerraform(struct?: KendraFeaturedResultsSetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function kendraFeaturedResultsSetTagsToHclTerraform(struct?: KendraFeaturedResultsSetTags | cdktn.IResolvable): any {
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

export class KendraFeaturedResultsSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KendraFeaturedResultsSetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: KendraFeaturedResultsSetTags | cdktn.IResolvable | undefined) {
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

export class KendraFeaturedResultsSetTagsList extends cdktn.ComplexList {
  public internalValue? : KendraFeaturedResultsSetTags[] | cdktn.IResolvable

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
  public get(index: number): KendraFeaturedResultsSetTagsOutputReference {
    return new KendraFeaturedResultsSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set awscc_kendra_featured_results_set}
*/
export class KendraFeaturedResultsSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kendra_featured_results_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KendraFeaturedResultsSet to import
  * @param importFromId The id of the existing KendraFeaturedResultsSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KendraFeaturedResultsSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kendra_featured_results_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set awscc_kendra_featured_results_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KendraFeaturedResultsSetConfig
  */
  public constructor(scope: Construct, id: string, config: KendraFeaturedResultsSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kendra_featured_results_set',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.102.0',
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
    this._featuredDocuments.internalValue = config.featuredDocuments;
    this._featuredResultsSetName = config.featuredResultsSetName;
    this._indexId = config.indexId;
    this._queryTexts = config.queryTexts;
    this._status = config.status;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // featured_documents - computed: true, optional: true, required: false
  private _featuredDocuments = new KendraFeaturedResultsSetFeaturedDocumentsList(this, "featured_documents", false);
  public get featuredDocuments() {
    return this._featuredDocuments;
  }
  public putFeaturedDocuments(value: KendraFeaturedResultsSetFeaturedDocuments[] | cdktn.IResolvable) {
    this._featuredDocuments.internalValue = value;
  }
  public resetFeaturedDocuments() {
    this._featuredDocuments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuredDocumentsInput() {
    return this._featuredDocuments.internalValue;
  }

  // featured_results_set_id - computed: true, optional: false, required: false
  public get featuredResultsSetId() {
    return this.getStringAttribute('featured_results_set_id');
  }

  // featured_results_set_name - computed: false, optional: false, required: true
  private _featuredResultsSetName?: string; 
  public get featuredResultsSetName() {
    return this.getStringAttribute('featured_results_set_name');
  }
  public set featuredResultsSetName(value: string) {
    this._featuredResultsSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuredResultsSetNameInput() {
    return this._featuredResultsSetName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // query_texts - computed: true, optional: true, required: false
  private _queryTexts?: string[]; 
  public get queryTexts() {
    return this.getListAttribute('query_texts');
  }
  public set queryTexts(value: string[]) {
    this._queryTexts = value;
  }
  public resetQueryTexts() {
    this._queryTexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTextsInput() {
    return this._queryTexts;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new KendraFeaturedResultsSetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: KendraFeaturedResultsSetTags[] | cdktn.IResolvable) {
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
      featured_documents: cdktn.listMapper(kendraFeaturedResultsSetFeaturedDocumentsToTerraform, false)(this._featuredDocuments.internalValue),
      featured_results_set_name: cdktn.stringToTerraform(this._featuredResultsSetName),
      index_id: cdktn.stringToTerraform(this._indexId),
      query_texts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._queryTexts),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.listMapper(kendraFeaturedResultsSetTagsToTerraform, false)(this._tags.internalValue),
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
      featured_documents: {
        value: cdktn.listMapperHcl(kendraFeaturedResultsSetFeaturedDocumentsToHclTerraform, false)(this._featuredDocuments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KendraFeaturedResultsSetFeaturedDocumentsList",
      },
      featured_results_set_name: {
        value: cdktn.stringToHclTerraform(this._featuredResultsSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_id: {
        value: cdktn.stringToHclTerraform(this._indexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_texts: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._queryTexts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(kendraFeaturedResultsSetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KendraFeaturedResultsSetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
