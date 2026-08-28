/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PersonalizeMetricAttributionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ARN of the destination dataset group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#dataset_group_arn PersonalizeMetricAttribution#dataset_group_arn}
  */
  readonly datasetGroupArn: string;
  /**
  * A list of metric attributes for the metric attribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics PersonalizeMetricAttribution#metrics}
  */
  readonly metrics: PersonalizeMetricAttributionMetrics[] | cdktn.IResolvable;
  /**
  * The output configuration details for the metric attribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metrics_output_config PersonalizeMetricAttribution#metrics_output_config}
  */
  readonly metricsOutputConfig: PersonalizeMetricAttributionMetricsOutputConfig;
  /**
  * The name of the metric attribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#name PersonalizeMetricAttribution#name}
  */
  readonly name: string;
}
export interface PersonalizeMetricAttributionMetrics {
  /**
  * The metric's event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#event_type PersonalizeMetricAttribution#event_type}
  */
  readonly eventType: string;
  /**
  * The attribute's expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#expression PersonalizeMetricAttribution#expression}
  */
  readonly expression: string;
  /**
  * The metric's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#metric_name PersonalizeMetricAttribution#metric_name}
  */
  readonly metricName: string;
}

export function personalizeMetricAttributionMetricsToTerraform(struct?: PersonalizeMetricAttributionMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    expression: cdktn.stringToTerraform(struct!.expression),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
  }
}


export function personalizeMetricAttributionMetricsToHclTerraform(struct?: PersonalizeMetricAttributionMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PersonalizeMetricAttributionMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PersonalizeMetricAttributionMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersonalizeMetricAttributionMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._expression = undefined;
      this._metricName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._expression = value.expression;
      this._metricName = value.metricName;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }
}

export class PersonalizeMetricAttributionMetricsList extends cdktn.ComplexList {
  public internalValue? : PersonalizeMetricAttributionMetrics[] | cdktn.IResolvable

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
  public get(index: number): PersonalizeMetricAttributionMetricsOutputReference {
    return new PersonalizeMetricAttributionMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination {
  /**
  * The ARN of the KMS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#kms_key_arn PersonalizeMetricAttribution#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * The file path of the Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#path PersonalizeMetricAttribution#path}
  */
  readonly path?: string;
}

export function personalizeMetricAttributionMetricsOutputConfigS3DataDestinationToTerraform(struct?: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function personalizeMetricAttributionMetricsOutputConfigS3DataDestinationToHclTerraform(struct?: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._path = value.path;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface PersonalizeMetricAttributionMetricsOutputConfig {
  /**
  * The ARN of the IAM role for the metric attribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#role_arn PersonalizeMetricAttribution#role_arn}
  */
  readonly roleArn: string;
  /**
  * The configuration details of an Amazon S3 output bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#s3_data_destination PersonalizeMetricAttribution#s3_data_destination}
  */
  readonly s3DataDestination?: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination;
}

export function personalizeMetricAttributionMetricsOutputConfigToTerraform(struct?: PersonalizeMetricAttributionMetricsOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_data_destination: personalizeMetricAttributionMetricsOutputConfigS3DataDestinationToTerraform(struct!.s3DataDestination),
  }
}


export function personalizeMetricAttributionMetricsOutputConfigToHclTerraform(struct?: PersonalizeMetricAttributionMetricsOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_destination: {
      value: personalizeMetricAttributionMetricsOutputConfigS3DataDestinationToHclTerraform(struct!.s3DataDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PersonalizeMetricAttributionMetricsOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PersonalizeMetricAttributionMetricsOutputConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3DataDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDestination = this._s3DataDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersonalizeMetricAttributionMetricsOutputConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._s3DataDestination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._s3DataDestination.internalValue = value.s3DataDestination;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // s3_data_destination - computed: true, optional: true, required: false
  private _s3DataDestination = new PersonalizeMetricAttributionMetricsOutputConfigS3DataDestinationOutputReference(this, "s3_data_destination");
  public get s3DataDestination() {
    return this._s3DataDestination;
  }
  public putS3DataDestination(value: PersonalizeMetricAttributionMetricsOutputConfigS3DataDestination) {
    this._s3DataDestination.internalValue = value;
  }
  public resetS3DataDestination() {
    this._s3DataDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDestinationInput() {
    return this._s3DataDestination.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution awscc_personalize_metric_attribution}
*/
export class PersonalizeMetricAttribution extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_personalize_metric_attribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PersonalizeMetricAttribution resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PersonalizeMetricAttribution to import
  * @param importFromId The id of the existing PersonalizeMetricAttribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PersonalizeMetricAttribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_personalize_metric_attribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_metric_attribution awscc_personalize_metric_attribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PersonalizeMetricAttributionConfig
  */
  public constructor(scope: Construct, id: string, config: PersonalizeMetricAttributionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_personalize_metric_attribution',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.99.0',
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
    this._datasetGroupArn = config.datasetGroupArn;
    this._metrics.internalValue = config.metrics;
    this._metricsOutputConfig.internalValue = config.metricsOutputConfig;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset_group_arn - computed: false, optional: false, required: true
  private _datasetGroupArn?: string; 
  public get datasetGroupArn() {
    return this.getStringAttribute('dataset_group_arn');
  }
  public set datasetGroupArn(value: string) {
    this._datasetGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetGroupArnInput() {
    return this._datasetGroupArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_attribution_arn - computed: true, optional: false, required: false
  public get metricAttributionArn() {
    return this.getStringAttribute('metric_attribution_arn');
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics = new PersonalizeMetricAttributionMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: PersonalizeMetricAttributionMetrics[] | cdktn.IResolvable) {
    this._metrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // metrics_output_config - computed: false, optional: false, required: true
  private _metricsOutputConfig = new PersonalizeMetricAttributionMetricsOutputConfigOutputReference(this, "metrics_output_config");
  public get metricsOutputConfig() {
    return this._metricsOutputConfig;
  }
  public putMetricsOutputConfig(value: PersonalizeMetricAttributionMetricsOutputConfig) {
    this._metricsOutputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsOutputConfigInput() {
    return this._metricsOutputConfig.internalValue;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_group_arn: cdktn.stringToTerraform(this._datasetGroupArn),
      metrics: cdktn.listMapper(personalizeMetricAttributionMetricsToTerraform, false)(this._metrics.internalValue),
      metrics_output_config: personalizeMetricAttributionMetricsOutputConfigToTerraform(this._metricsOutputConfig.internalValue),
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataset_group_arn: {
        value: cdktn.stringToHclTerraform(this._datasetGroupArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics: {
        value: cdktn.listMapperHcl(personalizeMetricAttributionMetricsToHclTerraform, false)(this._metrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PersonalizeMetricAttributionMetricsList",
      },
      metrics_output_config: {
        value: personalizeMetricAttributionMetricsOutputConfigToHclTerraform(this._metricsOutputConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PersonalizeMetricAttributionMetricsOutputConfig",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
