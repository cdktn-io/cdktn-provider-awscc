/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerNotebookInstanceLifecycleConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the lifecycle configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#notebook_instance_lifecycle_config_name SagemakerNotebookInstanceLifecycleConfig#notebook_instance_lifecycle_config_name}
  */
  readonly notebookInstanceLifecycleConfigName?: string;
  /**
  * A shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_create SagemakerNotebookInstanceLifecycleConfig#on_create}
  */
  readonly onCreate?: SagemakerNotebookInstanceLifecycleConfigOnCreate[] | cdktn.IResolvable;
  /**
  * A shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_start SagemakerNotebookInstanceLifecycleConfig#on_start}
  */
  readonly onStart?: SagemakerNotebookInstanceLifecycleConfigOnStart[] | cdktn.IResolvable;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#tags SagemakerNotebookInstanceLifecycleConfig#tags}
  */
  readonly tags?: SagemakerNotebookInstanceLifecycleConfigTags[] | cdktn.IResolvable;
}
export interface SagemakerNotebookInstanceLifecycleConfigOnCreate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}
  */
  readonly content?: string;
}

export function sagemakerNotebookInstanceLifecycleConfigOnCreateToTerraform(struct?: SagemakerNotebookInstanceLifecycleConfigOnCreate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
  }
}


export function sagemakerNotebookInstanceLifecycleConfigOnCreateToHclTerraform(struct?: SagemakerNotebookInstanceLifecycleConfigOnCreate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerNotebookInstanceLifecycleConfigOnCreate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerNotebookInstanceLifecycleConfigOnCreate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}

export class SagemakerNotebookInstanceLifecycleConfigOnCreateList extends cdktn.ComplexList {
  public internalValue? : SagemakerNotebookInstanceLifecycleConfigOnCreate[] | cdktn.IResolvable

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
  public get(index: number): SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference {
    return new SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerNotebookInstanceLifecycleConfigOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}
  */
  readonly content?: string;
}

export function sagemakerNotebookInstanceLifecycleConfigOnStartToTerraform(struct?: SagemakerNotebookInstanceLifecycleConfigOnStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
  }
}


export function sagemakerNotebookInstanceLifecycleConfigOnStartToHclTerraform(struct?: SagemakerNotebookInstanceLifecycleConfigOnStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerNotebookInstanceLifecycleConfigOnStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerNotebookInstanceLifecycleConfigOnStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}

export class SagemakerNotebookInstanceLifecycleConfigOnStartList extends cdktn.ComplexList {
  public internalValue? : SagemakerNotebookInstanceLifecycleConfigOnStart[] | cdktn.IResolvable

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
  public get(index: number): SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference {
    return new SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerNotebookInstanceLifecycleConfigTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#key SagemakerNotebookInstanceLifecycleConfig#key}
  */
  readonly key?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#value SagemakerNotebookInstanceLifecycleConfig#value}
  */
  readonly value?: string;
}

export function sagemakerNotebookInstanceLifecycleConfigTagsToTerraform(struct?: SagemakerNotebookInstanceLifecycleConfigTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerNotebookInstanceLifecycleConfigTagsToHclTerraform(struct?: SagemakerNotebookInstanceLifecycleConfigTags | cdktn.IResolvable): any {
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

export class SagemakerNotebookInstanceLifecycleConfigTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerNotebookInstanceLifecycleConfigTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerNotebookInstanceLifecycleConfigTags | cdktn.IResolvable | undefined) {
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

export class SagemakerNotebookInstanceLifecycleConfigTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerNotebookInstanceLifecycleConfigTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerNotebookInstanceLifecycleConfigTagsOutputReference {
    return new SagemakerNotebookInstanceLifecycleConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config}
*/
export class SagemakerNotebookInstanceLifecycleConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_notebook_instance_lifecycle_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerNotebookInstanceLifecycleConfig to import
  * @param importFromId The id of the existing SagemakerNotebookInstanceLifecycleConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerNotebookInstanceLifecycleConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_notebook_instance_lifecycle_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerNotebookInstanceLifecycleConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceLifecycleConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_notebook_instance_lifecycle_config',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.103.0',
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
    this._notebookInstanceLifecycleConfigName = config.notebookInstanceLifecycleConfigName;
    this._onCreate.internalValue = config.onCreate;
    this._onStart.internalValue = config.onStart;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notebook_instance_lifecycle_config_arn - computed: true, optional: false, required: false
  public get notebookInstanceLifecycleConfigArn() {
    return this.getStringAttribute('notebook_instance_lifecycle_config_arn');
  }

  // notebook_instance_lifecycle_config_name - computed: true, optional: true, required: false
  private _notebookInstanceLifecycleConfigName?: string; 
  public get notebookInstanceLifecycleConfigName() {
    return this.getStringAttribute('notebook_instance_lifecycle_config_name');
  }
  public set notebookInstanceLifecycleConfigName(value: string) {
    this._notebookInstanceLifecycleConfigName = value;
  }
  public resetNotebookInstanceLifecycleConfigName() {
    this._notebookInstanceLifecycleConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookInstanceLifecycleConfigNameInput() {
    return this._notebookInstanceLifecycleConfigName;
  }

  // on_create - computed: true, optional: true, required: false
  private _onCreate = new SagemakerNotebookInstanceLifecycleConfigOnCreateList(this, "on_create", false);
  public get onCreate() {
    return this._onCreate;
  }
  public putOnCreate(value: SagemakerNotebookInstanceLifecycleConfigOnCreate[] | cdktn.IResolvable) {
    this._onCreate.internalValue = value;
  }
  public resetOnCreate() {
    this._onCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCreateInput() {
    return this._onCreate.internalValue;
  }

  // on_start - computed: true, optional: true, required: false
  private _onStart = new SagemakerNotebookInstanceLifecycleConfigOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: SagemakerNotebookInstanceLifecycleConfigOnStart[] | cdktn.IResolvable) {
    this._onStart.internalValue = value;
  }
  public resetOnStart() {
    this._onStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerNotebookInstanceLifecycleConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerNotebookInstanceLifecycleConfigTags[] | cdktn.IResolvable) {
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
      notebook_instance_lifecycle_config_name: cdktn.stringToTerraform(this._notebookInstanceLifecycleConfigName),
      on_create: cdktn.listMapper(sagemakerNotebookInstanceLifecycleConfigOnCreateToTerraform, false)(this._onCreate.internalValue),
      on_start: cdktn.listMapper(sagemakerNotebookInstanceLifecycleConfigOnStartToTerraform, false)(this._onStart.internalValue),
      tags: cdktn.listMapper(sagemakerNotebookInstanceLifecycleConfigTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      notebook_instance_lifecycle_config_name: {
        value: cdktn.stringToHclTerraform(this._notebookInstanceLifecycleConfigName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_create: {
        value: cdktn.listMapperHcl(sagemakerNotebookInstanceLifecycleConfigOnCreateToHclTerraform, false)(this._onCreate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerNotebookInstanceLifecycleConfigOnCreateList",
      },
      on_start: {
        value: cdktn.listMapperHcl(sagemakerNotebookInstanceLifecycleConfigOnStartToHclTerraform, false)(this._onStart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerNotebookInstanceLifecycleConfigOnStartList",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerNotebookInstanceLifecycleConfigTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerNotebookInstanceLifecycleConfigTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
