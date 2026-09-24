/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MgnConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#name MgnConnector#name}
  */
  readonly name: string;
  /**
  * SSM command configuration for the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#ssm_command_config MgnConnector#ssm_command_config}
  */
  readonly ssmCommandConfig?: MgnConnectorSsmCommandConfig;
  /**
  * The SSM instance ID associated with this connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#ssm_instance_id MgnConnector#ssm_instance_id}
  */
  readonly ssmInstanceId: string;
  /**
  * Tags to assign to the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#tags MgnConnector#tags}
  */
  readonly tags?: MgnConnectorTags[] | cdktn.IResolvable;
}
export interface MgnConnectorSsmCommandConfig {
  /**
  * The CloudWatch Logs group name for SSM command output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#cloudwatch_log_group_name MgnConnector#cloudwatch_log_group_name}
  */
  readonly cloudwatchLogGroupName?: string;
  /**
  * Whether SSM command output is sent to CloudWatch Logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#cloudwatch_output_enabled MgnConnector#cloudwatch_output_enabled}
  */
  readonly cloudwatchOutputEnabled?: boolean | cdktn.IResolvable;
  /**
  * The S3 bucket name for SSM command output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#output_s3_bucket_name MgnConnector#output_s3_bucket_name}
  */
  readonly outputS3BucketName?: string;
  /**
  * Whether SSM command output is stored in S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#s3_output_enabled MgnConnector#s3_output_enabled}
  */
  readonly s3OutputEnabled?: boolean | cdktn.IResolvable;
}

export function mgnConnectorSsmCommandConfigToTerraform(struct?: MgnConnectorSsmCommandConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_log_group_name: cdktn.stringToTerraform(struct!.cloudwatchLogGroupName),
    cloudwatch_output_enabled: cdktn.booleanToTerraform(struct!.cloudwatchOutputEnabled),
    output_s3_bucket_name: cdktn.stringToTerraform(struct!.outputS3BucketName),
    s3_output_enabled: cdktn.booleanToTerraform(struct!.s3OutputEnabled),
  }
}


export function mgnConnectorSsmCommandConfigToHclTerraform(struct?: MgnConnectorSsmCommandConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchLogGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.cloudwatchOutputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_s3_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.outputS3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.s3OutputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MgnConnectorSsmCommandConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MgnConnectorSsmCommandConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogGroupName = this._cloudwatchLogGroupName;
    }
    if (this._cloudwatchOutputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchOutputEnabled = this._cloudwatchOutputEnabled;
    }
    if (this._outputS3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3BucketName = this._outputS3BucketName;
    }
    if (this._s3OutputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputEnabled = this._s3OutputEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MgnConnectorSsmCommandConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogGroupName = undefined;
      this._cloudwatchOutputEnabled = undefined;
      this._outputS3BucketName = undefined;
      this._s3OutputEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogGroupName = value.cloudwatchLogGroupName;
      this._cloudwatchOutputEnabled = value.cloudwatchOutputEnabled;
      this._outputS3BucketName = value.outputS3BucketName;
      this._s3OutputEnabled = value.s3OutputEnabled;
    }
  }

  // cloudwatch_log_group_name - computed: true, optional: true, required: false
  private _cloudwatchLogGroupName?: string; 
  public get cloudwatchLogGroupName() {
    return this.getStringAttribute('cloudwatch_log_group_name');
  }
  public set cloudwatchLogGroupName(value: string) {
    this._cloudwatchLogGroupName = value;
  }
  public resetCloudwatchLogGroupName() {
    this._cloudwatchLogGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupNameInput() {
    return this._cloudwatchLogGroupName;
  }

  // cloudwatch_output_enabled - computed: true, optional: true, required: false
  private _cloudwatchOutputEnabled?: boolean | cdktn.IResolvable; 
  public get cloudwatchOutputEnabled() {
    return this.getBooleanAttribute('cloudwatch_output_enabled');
  }
  public set cloudwatchOutputEnabled(value: boolean | cdktn.IResolvable) {
    this._cloudwatchOutputEnabled = value;
  }
  public resetCloudwatchOutputEnabled() {
    this._cloudwatchOutputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchOutputEnabledInput() {
    return this._cloudwatchOutputEnabled;
  }

  // output_s3_bucket_name - computed: true, optional: true, required: false
  private _outputS3BucketName?: string; 
  public get outputS3BucketName() {
    return this.getStringAttribute('output_s3_bucket_name');
  }
  public set outputS3BucketName(value: string) {
    this._outputS3BucketName = value;
  }
  public resetOutputS3BucketName() {
    this._outputS3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3BucketNameInput() {
    return this._outputS3BucketName;
  }

  // s3_output_enabled - computed: true, optional: true, required: false
  private _s3OutputEnabled?: boolean | cdktn.IResolvable; 
  public get s3OutputEnabled() {
    return this.getBooleanAttribute('s3_output_enabled');
  }
  public set s3OutputEnabled(value: boolean | cdktn.IResolvable) {
    this._s3OutputEnabled = value;
  }
  public resetS3OutputEnabled() {
    this._s3OutputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputEnabledInput() {
    return this._s3OutputEnabled;
  }
}
export interface MgnConnectorTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#key MgnConnector#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#value MgnConnector#value}
  */
  readonly value?: string;
}

export function mgnConnectorTagsToTerraform(struct?: MgnConnectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mgnConnectorTagsToHclTerraform(struct?: MgnConnectorTags | cdktn.IResolvable): any {
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

export class MgnConnectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MgnConnectorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MgnConnectorTags | cdktn.IResolvable | undefined) {
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

export class MgnConnectorTagsList extends cdktn.ComplexList {
  public internalValue? : MgnConnectorTags[] | cdktn.IResolvable

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
  public get(index: number): MgnConnectorTagsOutputReference {
    return new MgnConnectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector awscc_mgn_connector}
*/
export class MgnConnector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mgn_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MgnConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MgnConnector to import
  * @param importFromId The id of the existing MgnConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MgnConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mgn_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector awscc_mgn_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MgnConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: MgnConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mgn_connector',
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
    this._name = config.name;
    this._ssmCommandConfig.internalValue = config.ssmCommandConfig;
    this._ssmInstanceId = config.ssmInstanceId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connector_id - computed: true, optional: false, required: false
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ssm_command_config - computed: true, optional: true, required: false
  private _ssmCommandConfig = new MgnConnectorSsmCommandConfigOutputReference(this, "ssm_command_config");
  public get ssmCommandConfig() {
    return this._ssmCommandConfig;
  }
  public putSsmCommandConfig(value: MgnConnectorSsmCommandConfig) {
    this._ssmCommandConfig.internalValue = value;
  }
  public resetSsmCommandConfig() {
    this._ssmCommandConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmCommandConfigInput() {
    return this._ssmCommandConfig.internalValue;
  }

  // ssm_instance_id - computed: false, optional: false, required: true
  private _ssmInstanceId?: string; 
  public get ssmInstanceId() {
    return this.getStringAttribute('ssm_instance_id');
  }
  public set ssmInstanceId(value: string) {
    this._ssmInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmInstanceIdInput() {
    return this._ssmInstanceId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MgnConnectorTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MgnConnectorTags[] | cdktn.IResolvable) {
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
      name: cdktn.stringToTerraform(this._name),
      ssm_command_config: mgnConnectorSsmCommandConfigToTerraform(this._ssmCommandConfig.internalValue),
      ssm_instance_id: cdktn.stringToTerraform(this._ssmInstanceId),
      tags: cdktn.listMapper(mgnConnectorTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssm_command_config: {
        value: mgnConnectorSsmCommandConfigToHclTerraform(this._ssmCommandConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MgnConnectorSsmCommandConfig",
      },
      ssm_instance_id: {
        value: cdktn.stringToHclTerraform(this._ssmInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(mgnConnectorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MgnConnectorTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
