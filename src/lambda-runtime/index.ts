/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdaRuntimeConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description of the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#description LambdaRuntime#description}
  */
  readonly description?: string;
  /**
  * Licensing information for the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#license_info LambdaRuntime#license_info}
  */
  readonly licenseInfo?: string;
  /**
  * The name of the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#name LambdaRuntime#name}
  */
  readonly name: string;
  /**
  * The publisher's lifecycle declaration for the runtime. Omitting it removes any stored declaration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#release_lifecycle LambdaRuntime#release_lifecycle}
  */
  readonly releaseLifecycle?: LambdaRuntimeReleaseLifecycle;
  /**
  * A list of tags to apply to the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#tags LambdaRuntime#tags}
  */
  readonly tags?: LambdaRuntimeTags[] | cdktn.IResolvable;
}
export interface LambdaRuntimeReleaseLifecycle {
  /**
  * The date on which the runtime becomes deprecated. A UTC calendar date in yyyy-mm-dd format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#deprecation_date LambdaRuntime#deprecation_date}
  */
  readonly deprecationDate?: string;
  /**
  * The date on which creating new functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#function_create_block_date LambdaRuntime#function_create_block_date}
  */
  readonly functionCreateBlockDate?: string;
  /**
  * The date on which updating existing functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#function_update_block_date LambdaRuntime#function_update_block_date}
  */
  readonly functionUpdateBlockDate?: string;
  /**
  * The release state of the runtime. DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later DeprecationDate, or none. Reads report DEPRECATED once DeprecationDate is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#release_state LambdaRuntime#release_state}
  */
  readonly releaseState?: string;
}

export function lambdaRuntimeReleaseLifecycleToTerraform(struct?: LambdaRuntimeReleaseLifecycle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deprecation_date: cdktn.stringToTerraform(struct!.deprecationDate),
    function_create_block_date: cdktn.stringToTerraform(struct!.functionCreateBlockDate),
    function_update_block_date: cdktn.stringToTerraform(struct!.functionUpdateBlockDate),
    release_state: cdktn.stringToTerraform(struct!.releaseState),
  }
}


export function lambdaRuntimeReleaseLifecycleToHclTerraform(struct?: LambdaRuntimeReleaseLifecycle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deprecation_date: {
      value: cdktn.stringToHclTerraform(struct!.deprecationDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_create_block_date: {
      value: cdktn.stringToHclTerraform(struct!.functionCreateBlockDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_update_block_date: {
      value: cdktn.stringToHclTerraform(struct!.functionUpdateBlockDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_state: {
      value: cdktn.stringToHclTerraform(struct!.releaseState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaRuntimeReleaseLifecycleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaRuntimeReleaseLifecycle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deprecationDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecationDate = this._deprecationDate;
    }
    if (this._functionCreateBlockDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionCreateBlockDate = this._functionCreateBlockDate;
    }
    if (this._functionUpdateBlockDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionUpdateBlockDate = this._functionUpdateBlockDate;
    }
    if (this._releaseState !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseState = this._releaseState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaRuntimeReleaseLifecycle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deprecationDate = undefined;
      this._functionCreateBlockDate = undefined;
      this._functionUpdateBlockDate = undefined;
      this._releaseState = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deprecationDate = value.deprecationDate;
      this._functionCreateBlockDate = value.functionCreateBlockDate;
      this._functionUpdateBlockDate = value.functionUpdateBlockDate;
      this._releaseState = value.releaseState;
    }
  }

  // deprecation_date - computed: true, optional: true, required: false
  private _deprecationDate?: string; 
  public get deprecationDate() {
    return this.getStringAttribute('deprecation_date');
  }
  public set deprecationDate(value: string) {
    this._deprecationDate = value;
  }
  public resetDeprecationDate() {
    this._deprecationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecationDateInput() {
    return this._deprecationDate;
  }

  // function_create_block_date - computed: true, optional: true, required: false
  private _functionCreateBlockDate?: string; 
  public get functionCreateBlockDate() {
    return this.getStringAttribute('function_create_block_date');
  }
  public set functionCreateBlockDate(value: string) {
    this._functionCreateBlockDate = value;
  }
  public resetFunctionCreateBlockDate() {
    this._functionCreateBlockDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionCreateBlockDateInput() {
    return this._functionCreateBlockDate;
  }

  // function_update_block_date - computed: true, optional: true, required: false
  private _functionUpdateBlockDate?: string; 
  public get functionUpdateBlockDate() {
    return this.getStringAttribute('function_update_block_date');
  }
  public set functionUpdateBlockDate(value: string) {
    this._functionUpdateBlockDate = value;
  }
  public resetFunctionUpdateBlockDate() {
    this._functionUpdateBlockDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionUpdateBlockDateInput() {
    return this._functionUpdateBlockDate;
  }

  // release_state - computed: true, optional: true, required: false
  private _releaseState?: string; 
  public get releaseState() {
    return this.getStringAttribute('release_state');
  }
  public set releaseState(value: string) {
    this._releaseState = value;
  }
  public resetReleaseState() {
    this._releaseState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseStateInput() {
    return this._releaseState;
  }
}
export interface LambdaRuntimeTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#key LambdaRuntime#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#value LambdaRuntime#value}
  */
  readonly value?: string;
}

export function lambdaRuntimeTagsToTerraform(struct?: LambdaRuntimeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lambdaRuntimeTagsToHclTerraform(struct?: LambdaRuntimeTags | cdktn.IResolvable): any {
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

export class LambdaRuntimeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaRuntimeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LambdaRuntimeTags | cdktn.IResolvable | undefined) {
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

export class LambdaRuntimeTagsList extends cdktn.ComplexList {
  public internalValue? : LambdaRuntimeTags[] | cdktn.IResolvable

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
  public get(index: number): LambdaRuntimeTagsOutputReference {
    return new LambdaRuntimeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime awscc_lambda_runtime}
*/
export class LambdaRuntime extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lambda_runtime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdaRuntime resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaRuntime to import
  * @param importFromId The id of the existing LambdaRuntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaRuntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_runtime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime awscc_lambda_runtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaRuntimeConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaRuntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lambda_runtime',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.111.0',
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
    this._licenseInfo = config.licenseInfo;
    this._name = config.name;
    this._releaseLifecycle.internalValue = config.releaseLifecycle;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // license_info - computed: true, optional: true, required: false
  private _licenseInfo?: string; 
  public get licenseInfo() {
    return this.getStringAttribute('license_info');
  }
  public set licenseInfo(value: string) {
    this._licenseInfo = value;
  }
  public resetLicenseInfo() {
    this._licenseInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInfoInput() {
    return this._licenseInfo;
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

  // release_lifecycle - computed: true, optional: true, required: false
  private _releaseLifecycle = new LambdaRuntimeReleaseLifecycleOutputReference(this, "release_lifecycle");
  public get releaseLifecycle() {
    return this._releaseLifecycle;
  }
  public putReleaseLifecycle(value: LambdaRuntimeReleaseLifecycle) {
    this._releaseLifecycle.internalValue = value;
  }
  public resetReleaseLifecycle() {
    this._releaseLifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLifecycleInput() {
    return this._releaseLifecycle.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new LambdaRuntimeTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: LambdaRuntimeTags[] | cdktn.IResolvable) {
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
      license_info: cdktn.stringToTerraform(this._licenseInfo),
      name: cdktn.stringToTerraform(this._name),
      release_lifecycle: lambdaRuntimeReleaseLifecycleToTerraform(this._releaseLifecycle.internalValue),
      tags: cdktn.listMapper(lambdaRuntimeTagsToTerraform, false)(this._tags.internalValue),
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
      license_info: {
        value: cdktn.stringToHclTerraform(this._licenseInfo),
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
      release_lifecycle: {
        value: lambdaRuntimeReleaseLifecycleToHclTerraform(this._releaseLifecycle.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdaRuntimeReleaseLifecycle",
      },
      tags: {
        value: cdktn.listMapperHcl(lambdaRuntimeTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LambdaRuntimeTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
