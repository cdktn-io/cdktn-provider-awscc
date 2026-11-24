/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdaRuntimeAliasConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description of the runtime alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#description LambdaRuntimeAlias#description}
  */
  readonly description?: string;
  /**
  * The alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#name LambdaRuntimeAlias#name}
  */
  readonly name: string;
  /**
  * The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_lifecycle LambdaRuntimeAlias#release_lifecycle}
  */
  readonly releaseLifecycle?: LambdaRuntimeAliasReleaseLifecycle;
  /**
  * The name of the parent runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_name LambdaRuntimeAlias#runtime_name}
  */
  readonly runtimeName: string;
  /**
  * The runtime version this alias points to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_version LambdaRuntimeAlias#runtime_version}
  */
  readonly runtimeVersion: string;
}
export interface LambdaRuntimeAliasCompatibility {
}

export function lambdaRuntimeAliasCompatibilityToTerraform(struct?: LambdaRuntimeAliasCompatibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function lambdaRuntimeAliasCompatibilityToHclTerraform(struct?: LambdaRuntimeAliasCompatibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LambdaRuntimeAliasCompatibilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaRuntimeAliasCompatibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaRuntimeAliasCompatibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architectures - computed: true, optional: false, required: false
  public get architectures() {
    return cdktn.Fn.tolist(this.getListAttribute('architectures'));
  }

  // integration_models - computed: true, optional: false, required: false
  public get integrationModels() {
    return cdktn.Fn.tolist(this.getListAttribute('integration_models'));
  }

  // managed_instances - computed: true, optional: false, required: false
  public get managedInstances() {
    return this.getStringAttribute('managed_instances');
  }
}
export interface LambdaRuntimeAliasReleaseLifecycle {
  /**
  * The date on which the alias becomes deprecated. A UTC calendar date in yyyy-mm-dd format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#deprecation_date LambdaRuntimeAlias#deprecation_date}
  */
  readonly deprecationDate?: string;
  /**
  * The date on which creating new functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_create_block_date LambdaRuntimeAlias#function_create_block_date}
  */
  readonly functionCreateBlockDate?: string;
  /**
  * The date on which updating existing functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_update_block_date LambdaRuntimeAlias#function_update_block_date}
  */
  readonly functionUpdateBlockDate?: string;
  /**
  * The release state of the alias. DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later DeprecationDate, or none. Reads report DEPRECATED once DeprecationDate is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_state LambdaRuntimeAlias#release_state}
  */
  readonly releaseState?: string;
}

export function lambdaRuntimeAliasReleaseLifecycleToTerraform(struct?: LambdaRuntimeAliasReleaseLifecycle | cdktn.IResolvable): any {
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


export function lambdaRuntimeAliasReleaseLifecycleToHclTerraform(struct?: LambdaRuntimeAliasReleaseLifecycle | cdktn.IResolvable): any {
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

export class LambdaRuntimeAliasReleaseLifecycleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaRuntimeAliasReleaseLifecycle | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LambdaRuntimeAliasReleaseLifecycle | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias awscc_lambda_runtime_alias}
*/
export class LambdaRuntimeAlias extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lambda_runtime_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdaRuntimeAlias resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaRuntimeAlias to import
  * @param importFromId The id of the existing LambdaRuntimeAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaRuntimeAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_runtime_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias awscc_lambda_runtime_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaRuntimeAliasConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaRuntimeAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lambda_runtime_alias',
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
    this._name = config.name;
    this._releaseLifecycle.internalValue = config.releaseLifecycle;
    this._runtimeName = config.runtimeName;
    this._runtimeVersion = config.runtimeVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compatibility - computed: true, optional: false, required: false
  private _compatibility = new LambdaRuntimeAliasCompatibilityOutputReference(this, "compatibility");
  public get compatibility() {
    return this._compatibility;
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
  private _releaseLifecycle = new LambdaRuntimeAliasReleaseLifecycleOutputReference(this, "release_lifecycle");
  public get releaseLifecycle() {
    return this._releaseLifecycle;
  }
  public putReleaseLifecycle(value: LambdaRuntimeAliasReleaseLifecycle) {
    this._releaseLifecycle.internalValue = value;
  }
  public resetReleaseLifecycle() {
    this._releaseLifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLifecycleInput() {
    return this._releaseLifecycle.internalValue;
  }

  // runtime_name - computed: false, optional: false, required: true
  private _runtimeName?: string; 
  public get runtimeName() {
    return this.getStringAttribute('runtime_name');
  }
  public set runtimeName(value: string) {
    this._runtimeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeNameInput() {
    return this._runtimeName;
  }

  // runtime_version - computed: false, optional: false, required: true
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // runtime_version_arn - computed: true, optional: false, required: false
  public get runtimeVersionArn() {
    return this.getStringAttribute('runtime_version_arn');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      release_lifecycle: lambdaRuntimeAliasReleaseLifecycleToTerraform(this._releaseLifecycle.internalValue),
      runtime_name: cdktn.stringToTerraform(this._runtimeName),
      runtime_version: cdktn.stringToTerraform(this._runtimeVersion),
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
      release_lifecycle: {
        value: lambdaRuntimeAliasReleaseLifecycleToHclTerraform(this._releaseLifecycle.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdaRuntimeAliasReleaseLifecycle",
      },
      runtime_name: {
        value: cdktn.stringToHclTerraform(this._runtimeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_version: {
        value: cdktn.stringToHclTerraform(this._runtimeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
