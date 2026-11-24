/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerExtensionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the Amazon SageMaker HyperPod cluster to install the extension on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension#cluster_arn SagemakerExtension#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * The configuration settings for the extension, as a JSON string. The settings must match the configuration schema for the extension version. For each setting that you don't specify, SageMaker HyperPod uses its default value. When you update the stack, SageMaker HyperPod applies the settings in the string to the current configuration. Settings that you leave out keep their current values. To restore the default value of a setting, set it to null. To write the settings as YAML or JSON in your template, use the Fn::ToJsonString intrinsic function with the AWS::LanguageExtensions transform. The JSON string can be up to 10,240 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension#configuration_values SagemakerExtension#configuration_values}
  */
  readonly configurationValues?: string;
  /**
  * The name of the extension to install, such as sagemaker-observability. You can't install the same extension twice on a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension#extension_name SagemakerExtension#extension_name}
  */
  readonly extensionName: string;
  /**
  * The version of the extension to install, such as 1.0.0. When you create the extension without a version, SageMaker HyperPod installs the latest generally available version. If the extension doesn't have a generally available version, you must specify one. If you remove this property from your template during a stack update, the installed version doesn't change. You can't downgrade an extension. To install an earlier version, delete the extension and create it again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension#extension_version SagemakerExtension#extension_version}
  */
  readonly extensionVersion?: string;
  /**
  * The tags to add to the extension. You can add up to 50 tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension#tags SagemakerExtension#tags}
  */
  readonly tags?: SagemakerExtensionTags[] | cdktn.IResolvable;
}
export interface SagemakerExtensionNodeSummary {
}

export function sagemakerExtensionNodeSummaryToTerraform(struct?: SagemakerExtensionNodeSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function sagemakerExtensionNodeSummaryToHclTerraform(struct?: SagemakerExtensionNodeSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SagemakerExtensionNodeSummaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerExtensionNodeSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerExtensionNodeSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_count - computed: true, optional: false, required: false
  public get activeCount() {
    return this.getNumberAttribute('active_count');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}
export interface SagemakerExtensionTags {
  /**
  * The tag key. Each key must be unique for the extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension#key SagemakerExtension#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension#value SagemakerExtension#value}
  */
  readonly value?: string;
}

export function sagemakerExtensionTagsToTerraform(struct?: SagemakerExtensionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerExtensionTagsToHclTerraform(struct?: SagemakerExtensionTags | cdktn.IResolvable): any {
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

export class SagemakerExtensionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerExtensionTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerExtensionTags | cdktn.IResolvable | undefined) {
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

export class SagemakerExtensionTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerExtensionTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerExtensionTagsOutputReference {
    return new SagemakerExtensionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension awscc_sagemaker_extension}
*/
export class SagemakerExtension extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerExtension resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerExtension to import
  * @param importFromId The id of the existing SagemakerExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_extension awscc_sagemaker_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_extension',
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
    this._clusterArn = config.clusterArn;
    this._configurationValues = config.configurationValues;
    this._extensionName = config.extensionName;
    this._extensionVersion = config.extensionVersion;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // configuration_values - computed: true, optional: true, required: false
  private _configurationValues?: string; 
  public get configurationValues() {
    return this.getStringAttribute('configuration_values');
  }
  public set configurationValues(value: string) {
    this._configurationValues = value;
  }
  public resetConfigurationValues() {
    this._configurationValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationValuesInput() {
    return this._configurationValues;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // extension_arn - computed: true, optional: false, required: false
  public get extensionArn() {
    return this.getStringAttribute('extension_arn');
  }

  // extension_name - computed: false, optional: false, required: true
  private _extensionName?: string; 
  public get extensionName() {
    return this.getStringAttribute('extension_name');
  }
  public set extensionName(value: string) {
    this._extensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionNameInput() {
    return this._extensionName;
  }

  // extension_version - computed: true, optional: true, required: false
  private _extensionVersion?: string; 
  public get extensionVersion() {
    return this.getStringAttribute('extension_version');
  }
  public set extensionVersion(value: string) {
    this._extensionVersion = value;
  }
  public resetExtensionVersion() {
    this._extensionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionVersionInput() {
    return this._extensionVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // node_summary - computed: true, optional: false, required: false
  private _nodeSummary = new SagemakerExtensionNodeSummaryOutputReference(this, "node_summary");
  public get nodeSummary() {
    return this._nodeSummary;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerExtensionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerExtensionTags[] | cdktn.IResolvable) {
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
      cluster_arn: cdktn.stringToTerraform(this._clusterArn),
      configuration_values: cdktn.stringToTerraform(this._configurationValues),
      extension_name: cdktn.stringToTerraform(this._extensionName),
      extension_version: cdktn.stringToTerraform(this._extensionVersion),
      tags: cdktn.listMapper(sagemakerExtensionTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_arn: {
        value: cdktn.stringToHclTerraform(this._clusterArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_values: {
        value: cdktn.stringToHclTerraform(this._configurationValues),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_name: {
        value: cdktn.stringToHclTerraform(this._extensionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_version: {
        value: cdktn.stringToHclTerraform(this._extensionVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerExtensionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SagemakerExtensionTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
