/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface XrayTransactionSearchConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Configuration for the CloudWatch Logs log group that X-Ray creates when this resource enables Transaction Search. It is used only at that time and is never returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#cloudwatch_logs_configuration XrayTransactionSearchConfig#cloudwatch_logs_configuration}
  */
  readonly cloudwatchLogsConfiguration?: XrayTransactionSearchConfigCloudwatchLogsConfiguration;
  /**
  * Determines the percentage of traces indexed from CloudWatch Logs to X-Ray
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#indexing_percentage XrayTransactionSearchConfig#indexing_percentage}
  */
  readonly indexingPercentage?: number;
}
export interface XrayTransactionSearchConfigCloudwatchLogsConfiguration {
  /**
  * The ARN of a symmetric customer managed AWS KMS key in the same account and Region, used to encrypt the aws/spans log group. Key IDs and alias ARNs are not supported, so for an AWS::KMS::Key use Fn::GetAtt Arn, not Ref. X-Ray applies the key only when it creates aws/spans while enabling Transaction Search. If aws/spans already exists, for example from an earlier enablement or an earlier create that failed partway, the create fails and X-Ray does not enable Transaction Search or change the log group. Remove this property to use the existing log group with its current encryption, and use the CloudWatch Logs AssociateKmsKey API to change its key. The caller needs kms:DescribeKey on the key, and the key policy must allow CloudWatch Logs to use it. Adding, changing or removing this property replaces the resource, which fails while Transaction Search is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#spans_log_group_kms_key_id XrayTransactionSearchConfig#spans_log_group_kms_key_id}
  */
  readonly spansLogGroupKmsKeyId?: string;
}

export function xrayTransactionSearchConfigCloudwatchLogsConfigurationToTerraform(struct?: XrayTransactionSearchConfigCloudwatchLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    spans_log_group_kms_key_id: cdktn.stringToTerraform(struct!.spansLogGroupKmsKeyId),
  }
}


export function xrayTransactionSearchConfigCloudwatchLogsConfigurationToHclTerraform(struct?: XrayTransactionSearchConfigCloudwatchLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    spans_log_group_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.spansLogGroupKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): XrayTransactionSearchConfigCloudwatchLogsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spansLogGroupKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spansLogGroupKmsKeyId = this._spansLogGroupKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: XrayTransactionSearchConfigCloudwatchLogsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spansLogGroupKmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spansLogGroupKmsKeyId = value.spansLogGroupKmsKeyId;
    }
  }

  // spans_log_group_kms_key_id - computed: true, optional: true, required: false
  private _spansLogGroupKmsKeyId?: string; 
  public get spansLogGroupKmsKeyId() {
    return this.getStringAttribute('spans_log_group_kms_key_id');
  }
  public set spansLogGroupKmsKeyId(value: string) {
    this._spansLogGroupKmsKeyId = value;
  }
  public resetSpansLogGroupKmsKeyId() {
    this._spansLogGroupKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spansLogGroupKmsKeyIdInput() {
    return this._spansLogGroupKmsKeyId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config awscc_xray_transaction_search_config}
*/
export class XrayTransactionSearchConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_xray_transaction_search_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a XrayTransactionSearchConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the XrayTransactionSearchConfig to import
  * @param importFromId The id of the existing XrayTransactionSearchConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the XrayTransactionSearchConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_xray_transaction_search_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config awscc_xray_transaction_search_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options XrayTransactionSearchConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: XrayTransactionSearchConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_xray_transaction_search_config',
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
    this._cloudwatchLogsConfiguration.internalValue = config.cloudwatchLogsConfiguration;
    this._indexingPercentage = config.indexingPercentage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // cloudwatch_logs_configuration - computed: true, optional: true, required: false
  private _cloudwatchLogsConfiguration = new XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference(this, "cloudwatch_logs_configuration");
  public get cloudwatchLogsConfiguration() {
    return this._cloudwatchLogsConfiguration;
  }
  public putCloudwatchLogsConfiguration(value: XrayTransactionSearchConfigCloudwatchLogsConfiguration) {
    this._cloudwatchLogsConfiguration.internalValue = value;
  }
  public resetCloudwatchLogsConfiguration() {
    this._cloudwatchLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsConfigurationInput() {
    return this._cloudwatchLogsConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // indexing_percentage - computed: true, optional: true, required: false
  private _indexingPercentage?: number; 
  public get indexingPercentage() {
    return this.getNumberAttribute('indexing_percentage');
  }
  public set indexingPercentage(value: number) {
    this._indexingPercentage = value;
  }
  public resetIndexingPercentage() {
    this._indexingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingPercentageInput() {
    return this._indexingPercentage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch_logs_configuration: xrayTransactionSearchConfigCloudwatchLogsConfigurationToTerraform(this._cloudwatchLogsConfiguration.internalValue),
      indexing_percentage: cdktn.numberToTerraform(this._indexingPercentage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloudwatch_logs_configuration: {
        value: xrayTransactionSearchConfigCloudwatchLogsConfigurationToHclTerraform(this._cloudwatchLogsConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "XrayTransactionSearchConfigCloudwatchLogsConfiguration",
      },
      indexing_percentage: {
        value: cdktn.numberToHclTerraform(this._indexingPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
