/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdaRuntimeVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The URI of the OCI image to publish as this runtime version. Not returned in Read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#image_uri LambdaRuntimeVersion#image_uri}
  */
  readonly imageUri?: string;
  /**
  * The version identifier (1-128 chars, alphanumeric plus _.-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#name LambdaRuntimeVersion#name}
  */
  readonly name: string;
  /**
  * Optional release notes for this runtime version. Updatable; removing it from the template clears the release notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#release_notes LambdaRuntimeVersion#release_notes}
  */
  readonly releaseNotes?: string;
  /**
  * The name of the parent runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#runtime_name LambdaRuntimeVersion#runtime_name}
  */
  readonly runtimeName: string;
}
export interface LambdaRuntimeVersionCompatibility {
}

export function lambdaRuntimeVersionCompatibilityToTerraform(struct?: LambdaRuntimeVersionCompatibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function lambdaRuntimeVersionCompatibilityToHclTerraform(struct?: LambdaRuntimeVersionCompatibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LambdaRuntimeVersionCompatibilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaRuntimeVersionCompatibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaRuntimeVersionCompatibility | undefined) {
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
export interface LambdaRuntimeVersionPlatforms {
}

export function lambdaRuntimeVersionPlatformsToTerraform(struct?: LambdaRuntimeVersionPlatforms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function lambdaRuntimeVersionPlatformsToHclTerraform(struct?: LambdaRuntimeVersionPlatforms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LambdaRuntimeVersionPlatformsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LambdaRuntimeVersionPlatforms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaRuntimeVersionPlatforms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }
}

export class LambdaRuntimeVersionPlatformsList extends cdktn.ComplexList {

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
  public get(index: number): LambdaRuntimeVersionPlatformsOutputReference {
    return new LambdaRuntimeVersionPlatformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version awscc_lambda_runtime_version}
*/
export class LambdaRuntimeVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lambda_runtime_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdaRuntimeVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaRuntimeVersion to import
  * @param importFromId The id of the existing LambdaRuntimeVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaRuntimeVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_runtime_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version awscc_lambda_runtime_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaRuntimeVersionConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaRuntimeVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lambda_runtime_version',
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
    this._imageUri = config.imageUri;
    this._name = config.name;
    this._releaseNotes = config.releaseNotes;
    this._runtimeName = config.runtimeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compatibility - computed: true, optional: false, required: false
  private _compatibility = new LambdaRuntimeVersionCompatibilityOutputReference(this, "compatibility");
  public get compatibility() {
    return this._compatibility;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
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

  // platforms - computed: true, optional: false, required: false
  private _platforms = new LambdaRuntimeVersionPlatformsList(this, "platforms", true);
  public get platforms() {
    return this._platforms;
  }

  // release_notes - computed: true, optional: true, required: false
  private _releaseNotes?: string; 
  public get releaseNotes() {
    return this.getStringAttribute('release_notes');
  }
  public set releaseNotes(value: string) {
    this._releaseNotes = value;
  }
  public resetReleaseNotes() {
    this._releaseNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNotesInput() {
    return this._releaseNotes;
  }

  // resolved_uri - computed: true, optional: false, required: false
  public get resolvedUri() {
    return this.getStringAttribute('resolved_uri');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_uri: cdktn.stringToTerraform(this._imageUri),
      name: cdktn.stringToTerraform(this._name),
      release_notes: cdktn.stringToTerraform(this._releaseNotes),
      runtime_name: cdktn.stringToTerraform(this._runtimeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      image_uri: {
        value: cdktn.stringToHclTerraform(this._imageUri),
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
      release_notes: {
        value: cdktn.stringToHclTerraform(this._releaseNotes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_name: {
        value: cdktn.stringToHclTerraform(this._runtimeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
