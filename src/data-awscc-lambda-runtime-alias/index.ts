/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLambdaRuntimeAliasConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias#id DataAwsccLambdaRuntimeAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLambdaRuntimeAliasCompatibility {
}

export function dataAwsccLambdaRuntimeAliasCompatibilityToTerraform(struct?: DataAwsccLambdaRuntimeAliasCompatibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaRuntimeAliasCompatibilityToHclTerraform(struct?: DataAwsccLambdaRuntimeAliasCompatibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaRuntimeAliasCompatibilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaRuntimeAliasCompatibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaRuntimeAliasCompatibility | undefined) {
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
export interface DataAwsccLambdaRuntimeAliasReleaseLifecycle {
}

export function dataAwsccLambdaRuntimeAliasReleaseLifecycleToTerraform(struct?: DataAwsccLambdaRuntimeAliasReleaseLifecycle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaRuntimeAliasReleaseLifecycleToHclTerraform(struct?: DataAwsccLambdaRuntimeAliasReleaseLifecycle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaRuntimeAliasReleaseLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaRuntimeAliasReleaseLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deprecation_date - computed: true, optional: false, required: false
  public get deprecationDate() {
    return this.getStringAttribute('deprecation_date');
  }

  // function_create_block_date - computed: true, optional: false, required: false
  public get functionCreateBlockDate() {
    return this.getStringAttribute('function_create_block_date');
  }

  // function_update_block_date - computed: true, optional: false, required: false
  public get functionUpdateBlockDate() {
    return this.getStringAttribute('function_update_block_date');
  }

  // release_state - computed: true, optional: false, required: false
  public get releaseState() {
    return this.getStringAttribute('release_state');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias awscc_lambda_runtime_alias}
*/
export class DataAwsccLambdaRuntimeAlias extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lambda_runtime_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLambdaRuntimeAlias resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLambdaRuntimeAlias to import
  * @param importFromId The id of the existing DataAwsccLambdaRuntimeAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLambdaRuntimeAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_runtime_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias awscc_lambda_runtime_alias} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLambdaRuntimeAliasConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLambdaRuntimeAliasConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compatibility - computed: true, optional: false, required: false
  private _compatibility = new DataAwsccLambdaRuntimeAliasCompatibilityOutputReference(this, "compatibility");
  public get compatibility() {
    return this._compatibility;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // release_lifecycle - computed: true, optional: false, required: false
  private _releaseLifecycle = new DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference(this, "release_lifecycle");
  public get releaseLifecycle() {
    return this._releaseLifecycle;
  }

  // runtime_name - computed: true, optional: false, required: false
  public get runtimeName() {
    return this.getStringAttribute('runtime_name');
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
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
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
