/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchResourceMetricsConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The metric selections that define which metrics are enabled for detailed monitoring on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#metric_selections CloudwatchResourceMetricsConfiguration#metric_selections}
  */
  readonly metricSelections?: CloudwatchResourceMetricsConfigurationMetricSelections[] | cdktn.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the resource for which the detailed monitoring metrics configuration is managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}
  */
  readonly resourceArn: string;
}
export interface CloudwatchResourceMetricsConfigurationMetricSelections {
  /**
  * The list of metric names to include in detailed monitoring for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#include_metrics CloudwatchResourceMetricsConfiguration#include_metrics}
  */
  readonly includeMetrics?: string[];
}

export function cloudwatchResourceMetricsConfigurationMetricSelectionsToTerraform(struct?: CloudwatchResourceMetricsConfigurationMetricSelections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_metrics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeMetrics),
  }
}


export function cloudwatchResourceMetricsConfigurationMetricSelectionsToHclTerraform(struct?: CloudwatchResourceMetricsConfigurationMetricSelections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_metrics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeMetrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchResourceMetricsConfigurationMetricSelections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeMetrics = this._includeMetrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchResourceMetricsConfigurationMetricSelections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeMetrics = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeMetrics = value.includeMetrics;
    }
  }

  // include_metrics - computed: true, optional: true, required: false
  private _includeMetrics?: string[]; 
  public get includeMetrics() {
    return this.getListAttribute('include_metrics');
  }
  public set includeMetrics(value: string[]) {
    this._includeMetrics = value;
  }
  public resetIncludeMetrics() {
    this._includeMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMetricsInput() {
    return this._includeMetrics;
  }
}

export class CloudwatchResourceMetricsConfigurationMetricSelectionsList extends cdktn.ComplexList {
  public internalValue? : CloudwatchResourceMetricsConfigurationMetricSelections[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference {
    return new CloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration awscc_cloudwatch_resource_metrics_configuration}
*/
export class CloudwatchResourceMetricsConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudwatch_resource_metrics_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchResourceMetricsConfiguration to import
  * @param importFromId The id of the existing CloudwatchResourceMetricsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchResourceMetricsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_resource_metrics_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_resource_metrics_configuration awscc_cloudwatch_resource_metrics_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchResourceMetricsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchResourceMetricsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudwatch_resource_metrics_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.105.0',
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
    this._metricSelections.internalValue = config.metricSelections;
    this._resourceArn = config.resourceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_selections - computed: true, optional: true, required: false
  private _metricSelections = new CloudwatchResourceMetricsConfigurationMetricSelectionsList(this, "metric_selections", false);
  public get metricSelections() {
    return this._metricSelections;
  }
  public putMetricSelections(value: CloudwatchResourceMetricsConfigurationMetricSelections[] | cdktn.IResolvable) {
    this._metricSelections.internalValue = value;
  }
  public resetMetricSelections() {
    this._metricSelections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectionsInput() {
    return this._metricSelections.internalValue;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metric_selections: cdktn.listMapper(cloudwatchResourceMetricsConfigurationMetricSelectionsToTerraform, false)(this._metricSelections.internalValue),
      resource_arn: cdktn.stringToTerraform(this._resourceArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metric_selections: {
        value: cdktn.listMapperHcl(cloudwatchResourceMetricsConfigurationMetricSelectionsToHclTerraform, false)(this._metricSelections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchResourceMetricsConfigurationMetricSelectionsList",
      },
      resource_arn: {
        value: cdktn.stringToHclTerraform(this._resourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
