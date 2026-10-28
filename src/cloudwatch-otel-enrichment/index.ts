/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchOtelEnrichmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Removes metrics from the include set. Absent or empty means nothing is removed. Evaluated after IncludeFilters, so ExcludeFilters always wins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#exclude_filters CloudwatchOtelEnrichment#exclude_filters}
  */
  readonly excludeFilters?: CloudwatchOtelEnrichmentExcludeFilters[] | cdktn.IResolvable;
  /**
  * Scopes enrichment to a subset of the account's telemetry. Absent or empty means all namespaces are in scope. Present means only these are. The service enforces a combined cap of 100 selectors across IncludeFilters and ExcludeFilters, and rejects more than one selector for the same namespace within a direction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#include_filters CloudwatchOtelEnrichment#include_filters}
  */
  readonly includeFilters?: CloudwatchOtelEnrichmentIncludeFilters[] | cdktn.IResolvable;
}
export interface CloudwatchOtelEnrichmentExcludeFilters {
  /**
  * Absent or empty means every metric in this namespace, in whichever direction this selector appears. Present means only these metric names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * The CloudWatch namespace this selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}
  */
  readonly namespace?: string;
}

export function cloudwatchOtelEnrichmentExcludeFiltersToTerraform(struct?: CloudwatchOtelEnrichmentExcludeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchOtelEnrichmentExcludeFiltersToHclTerraform(struct?: CloudwatchOtelEnrichmentExcludeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchOtelEnrichmentExcludeFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchOtelEnrichmentExcludeFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchOtelEnrichmentExcludeFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._namespace = value.namespace;
    }
  }

  // metric_names - computed: true, optional: true, required: false
  private _metricNames?: string[]; 
  public get metricNames() {
    return cdktn.Fn.tolist(this.getListAttribute('metric_names'));
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  public resetMetricNames() {
    this._metricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class CloudwatchOtelEnrichmentExcludeFiltersList extends cdktn.ComplexList {
  public internalValue? : CloudwatchOtelEnrichmentExcludeFilters[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchOtelEnrichmentExcludeFiltersOutputReference {
    return new CloudwatchOtelEnrichmentExcludeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchOtelEnrichmentIncludeFilters {
  /**
  * Absent or empty means every metric in this namespace, in whichever direction this selector appears. Present means only these metric names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * The CloudWatch namespace this selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}
  */
  readonly namespace?: string;
}

export function cloudwatchOtelEnrichmentIncludeFiltersToTerraform(struct?: CloudwatchOtelEnrichmentIncludeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchOtelEnrichmentIncludeFiltersToHclTerraform(struct?: CloudwatchOtelEnrichmentIncludeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchOtelEnrichmentIncludeFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchOtelEnrichmentIncludeFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchOtelEnrichmentIncludeFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._namespace = value.namespace;
    }
  }

  // metric_names - computed: true, optional: true, required: false
  private _metricNames?: string[]; 
  public get metricNames() {
    return cdktn.Fn.tolist(this.getListAttribute('metric_names'));
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  public resetMetricNames() {
    this._metricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class CloudwatchOtelEnrichmentIncludeFiltersList extends cdktn.ComplexList {
  public internalValue? : CloudwatchOtelEnrichmentIncludeFilters[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchOtelEnrichmentIncludeFiltersOutputReference {
    return new CloudwatchOtelEnrichmentIncludeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment awscc_cloudwatch_otel_enrichment}
*/
export class CloudwatchOtelEnrichment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudwatch_otel_enrichment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchOtelEnrichment to import
  * @param importFromId The id of the existing CloudwatchOtelEnrichment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchOtelEnrichment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_otel_enrichment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment awscc_cloudwatch_otel_enrichment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchOtelEnrichmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudwatchOtelEnrichmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudwatch_otel_enrichment',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.107.0',
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
    this._excludeFilters.internalValue = config.excludeFilters;
    this._includeFilters.internalValue = config.includeFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // exclude_filters - computed: true, optional: true, required: false
  private _excludeFilters = new CloudwatchOtelEnrichmentExcludeFiltersList(this, "exclude_filters", true);
  public get excludeFilters() {
    return this._excludeFilters;
  }
  public putExcludeFilters(value: CloudwatchOtelEnrichmentExcludeFilters[] | cdktn.IResolvable) {
    this._excludeFilters.internalValue = value;
  }
  public resetExcludeFilters() {
    this._excludeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFiltersInput() {
    return this._excludeFilters.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_filters - computed: true, optional: true, required: false
  private _includeFilters = new CloudwatchOtelEnrichmentIncludeFiltersList(this, "include_filters", true);
  public get includeFilters() {
    return this._includeFilters;
  }
  public putIncludeFilters(value: CloudwatchOtelEnrichmentIncludeFilters[] | cdktn.IResolvable) {
    this._includeFilters.internalValue = value;
  }
  public resetIncludeFilters() {
    this._includeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFiltersInput() {
    return this._includeFilters.internalValue;
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
      exclude_filters: cdktn.listMapper(cloudwatchOtelEnrichmentExcludeFiltersToTerraform, false)(this._excludeFilters.internalValue),
      include_filters: cdktn.listMapper(cloudwatchOtelEnrichmentIncludeFiltersToTerraform, false)(this._includeFilters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_filters: {
        value: cdktn.listMapperHcl(cloudwatchOtelEnrichmentExcludeFiltersToHclTerraform, false)(this._excludeFilters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudwatchOtelEnrichmentExcludeFiltersList",
      },
      include_filters: {
        value: cdktn.listMapperHcl(cloudwatchOtelEnrichmentIncludeFiltersToHclTerraform, false)(this._includeFilters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudwatchOtelEnrichmentIncludeFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
