/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ScnDataIntegrationFlowConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Web Services Supply Chain instance identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#instance_id ScnDataIntegrationFlow#instance_id}
  */
  readonly instanceId: string;
  /**
  * The name of the DataIntegrationFlow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#name ScnDataIntegrationFlow#name}
  */
  readonly name: string;
  /**
  * The source configurations for the DataIntegrationFlow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#sources ScnDataIntegrationFlow#sources}
  */
  readonly sources: ScnDataIntegrationFlowSources[] | cdktn.IResolvable;
  /**
  * The tags for the DataIntegrationFlow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#tags ScnDataIntegrationFlow#tags}
  */
  readonly tags?: ScnDataIntegrationFlowTags[] | cdktn.IResolvable;
  /**
  * The DataIntegrationFlow target parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#target ScnDataIntegrationFlow#target}
  */
  readonly target: ScnDataIntegrationFlowTarget;
  /**
  * The DataIntegrationFlow transformation parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#transformation ScnDataIntegrationFlow#transformation}
  */
  readonly transformation: ScnDataIntegrationFlowTransformation;
}
export interface ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields {
  /**
  * The name of the deduplication field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#name ScnDataIntegrationFlow#name}
  */
  readonly name?: string;
  /**
  * The sort order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#sort_order ScnDataIntegrationFlow#sort_order}
  */
  readonly sortOrder?: string;
}

export function scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsToTerraform(struct?: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    sort_order: cdktn.stringToTerraform(struct!.sortOrder),
  }
}


export function scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsToHclTerraform(struct?: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktn.stringToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sortOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sortOrder = value.sortOrder;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sort_order - computed: true, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }
}

export class ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList extends cdktn.ComplexList {
  public internalValue? : ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields[] | cdktn.IResolvable

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
  public get(index: number): ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference {
    return new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority {
  /**
  * The list of field names and their sort order for deduplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#fields ScnDataIntegrationFlow#fields}
  */
  readonly fields?: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields[] | cdktn.IResolvable;
}

export function scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityToTerraform(struct?: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsToTerraform, false)(struct!.fields),
  }
}


export function scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityToHclTerraform(struct?: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy {
  /**
  * The field priority deduplication strategy configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#field_priority ScnDataIntegrationFlow#field_priority}
  */
  readonly fieldPriority?: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority;
  /**
  * The deduplication strategy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#type ScnDataIntegrationFlow#type}
  */
  readonly type?: string;
}

export function scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyToTerraform(struct?: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_priority: scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityToTerraform(struct!.fieldPriority),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyToHclTerraform(struct?: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_priority: {
      value: scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityToHclTerraform(struct!.fieldPriority),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPriority = this._fieldPriority?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPriority.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPriority.internalValue = value.fieldPriority;
      this._type = value.type;
    }
  }

  // field_priority - computed: true, optional: true, required: false
  private _fieldPriority = new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference(this, "field_priority");
  public get fieldPriority() {
    return this._fieldPriority;
  }
  public putFieldPriority(value: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority) {
    this._fieldPriority.internalValue = value;
  }
  public resetFieldPriority() {
    this._fieldPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPriorityInput() {
    return this._fieldPriority.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ScnDataIntegrationFlowSourcesDatasetSourceOptions {
  /**
  * The option to perform deduplication on data records sharing same primary key values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dedupe_records ScnDataIntegrationFlow#dedupe_records}
  */
  readonly dedupeRecords?: boolean | cdktn.IResolvable;
  /**
  * The deduplication strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dedupe_strategy ScnDataIntegrationFlow#dedupe_strategy}
  */
  readonly dedupeStrategy?: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy;
  /**
  * The load type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#load_type ScnDataIntegrationFlow#load_type}
  */
  readonly loadType?: string;
}

export function scnDataIntegrationFlowSourcesDatasetSourceOptionsToTerraform(struct?: ScnDataIntegrationFlowSourcesDatasetSourceOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dedupe_records: cdktn.booleanToTerraform(struct!.dedupeRecords),
    dedupe_strategy: scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyToTerraform(struct!.dedupeStrategy),
    load_type: cdktn.stringToTerraform(struct!.loadType),
  }
}


export function scnDataIntegrationFlowSourcesDatasetSourceOptionsToHclTerraform(struct?: ScnDataIntegrationFlowSourcesDatasetSourceOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dedupe_records: {
      value: cdktn.booleanToHclTerraform(struct!.dedupeRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dedupe_strategy: {
      value: scnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyToHclTerraform(struct!.dedupeStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy",
    },
    load_type: {
      value: cdktn.stringToHclTerraform(struct!.loadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowSourcesDatasetSourceOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedupeRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupeRecords = this._dedupeRecords;
    }
    if (this._dedupeStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupeStrategy = this._dedupeStrategy?.internalValue;
    }
    if (this._loadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadType = this._loadType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowSourcesDatasetSourceOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dedupeRecords = undefined;
      this._dedupeStrategy.internalValue = undefined;
      this._loadType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dedupeRecords = value.dedupeRecords;
      this._dedupeStrategy.internalValue = value.dedupeStrategy;
      this._loadType = value.loadType;
    }
  }

  // dedupe_records - computed: true, optional: true, required: false
  private _dedupeRecords?: boolean | cdktn.IResolvable; 
  public get dedupeRecords() {
    return this.getBooleanAttribute('dedupe_records');
  }
  public set dedupeRecords(value: boolean | cdktn.IResolvable) {
    this._dedupeRecords = value;
  }
  public resetDedupeRecords() {
    this._dedupeRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeRecordsInput() {
    return this._dedupeRecords;
  }

  // dedupe_strategy - computed: true, optional: true, required: false
  private _dedupeStrategy = new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference(this, "dedupe_strategy");
  public get dedupeStrategy() {
    return this._dedupeStrategy;
  }
  public putDedupeStrategy(value: ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy) {
    this._dedupeStrategy.internalValue = value;
  }
  public resetDedupeStrategy() {
    this._dedupeStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeStrategyInput() {
    return this._dedupeStrategy.internalValue;
  }

  // load_type - computed: true, optional: true, required: false
  private _loadType?: string; 
  public get loadType() {
    return this.getStringAttribute('load_type');
  }
  public set loadType(value: string) {
    this._loadType = value;
  }
  public resetLoadType() {
    this._loadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadTypeInput() {
    return this._loadType;
  }
}
export interface ScnDataIntegrationFlowSourcesDatasetSource {
  /**
  * The ARN of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dataset_identifier ScnDataIntegrationFlow#dataset_identifier}
  */
  readonly datasetIdentifier?: string;
  /**
  * The dataset options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#options ScnDataIntegrationFlow#options}
  */
  readonly options?: ScnDataIntegrationFlowSourcesDatasetSourceOptions;
}

export function scnDataIntegrationFlowSourcesDatasetSourceToTerraform(struct?: ScnDataIntegrationFlowSourcesDatasetSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_identifier: cdktn.stringToTerraform(struct!.datasetIdentifier),
    options: scnDataIntegrationFlowSourcesDatasetSourceOptionsToTerraform(struct!.options),
  }
}


export function scnDataIntegrationFlowSourcesDatasetSourceToHclTerraform(struct?: ScnDataIntegrationFlowSourcesDatasetSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_identifier: {
      value: cdktn.stringToHclTerraform(struct!.datasetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: scnDataIntegrationFlowSourcesDatasetSourceOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowSourcesDatasetSourceOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowSourcesDatasetSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowSourcesDatasetSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetIdentifier = this._datasetIdentifier;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowSourcesDatasetSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetIdentifier = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetIdentifier = value.datasetIdentifier;
      this._options.internalValue = value.options;
    }
  }

  // dataset_identifier - computed: true, optional: true, required: false
  private _datasetIdentifier?: string; 
  public get datasetIdentifier() {
    return this.getStringAttribute('dataset_identifier');
  }
  public set datasetIdentifier(value: string) {
    this._datasetIdentifier = value;
  }
  public resetDatasetIdentifier() {
    this._datasetIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdentifierInput() {
    return this._datasetIdentifier;
  }

  // options - computed: true, optional: true, required: false
  private _options = new ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: ScnDataIntegrationFlowSourcesDatasetSourceOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface ScnDataIntegrationFlowSourcesS3SourceOptions {
  /**
  * The file type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#file_type ScnDataIntegrationFlow#file_type}
  */
  readonly fileType?: string;
}

export function scnDataIntegrationFlowSourcesS3SourceOptionsToTerraform(struct?: ScnDataIntegrationFlowSourcesS3SourceOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_type: cdktn.stringToTerraform(struct!.fileType),
  }
}


export function scnDataIntegrationFlowSourcesS3SourceOptionsToHclTerraform(struct?: ScnDataIntegrationFlowSourcesS3SourceOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_type: {
      value: cdktn.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowSourcesS3SourceOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowSourcesS3SourceOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileType = value.fileType;
    }
  }

  // file_type - computed: true, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }
}
export interface ScnDataIntegrationFlowSourcesS3Source {
  /**
  * The S3 bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#bucket_name ScnDataIntegrationFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * The Amazon S3 options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#options ScnDataIntegrationFlow#options}
  */
  readonly options?: ScnDataIntegrationFlowSourcesS3SourceOptions;
  /**
  * The S3 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#prefix ScnDataIntegrationFlow#prefix}
  */
  readonly prefix?: string;
}

export function scnDataIntegrationFlowSourcesS3SourceToTerraform(struct?: ScnDataIntegrationFlowSourcesS3Source | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    options: scnDataIntegrationFlowSourcesS3SourceOptionsToTerraform(struct!.options),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function scnDataIntegrationFlowSourcesS3SourceToHclTerraform(struct?: ScnDataIntegrationFlowSourcesS3Source | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: scnDataIntegrationFlowSourcesS3SourceOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowSourcesS3SourceOptions",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowSourcesS3SourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowSourcesS3Source | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowSourcesS3Source | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._options.internalValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._options.internalValue = value.options;
      this._prefix = value.prefix;
    }
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // options - computed: true, optional: true, required: false
  private _options = new ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: ScnDataIntegrationFlowSourcesS3SourceOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface ScnDataIntegrationFlowSources {
  /**
  * The dataset source configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dataset_source ScnDataIntegrationFlow#dataset_source}
  */
  readonly datasetSource?: ScnDataIntegrationFlowSourcesDatasetSource;
  /**
  * The S3 source configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#s3_source ScnDataIntegrationFlow#s3_source}
  */
  readonly s3Source?: ScnDataIntegrationFlowSourcesS3Source;
  /**
  * The source name that can be used as table alias in SQL transformation query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#source_name ScnDataIntegrationFlow#source_name}
  */
  readonly sourceName: string;
  /**
  * The source type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#source_type ScnDataIntegrationFlow#source_type}
  */
  readonly sourceType: string;
}

export function scnDataIntegrationFlowSourcesToTerraform(struct?: ScnDataIntegrationFlowSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_source: scnDataIntegrationFlowSourcesDatasetSourceToTerraform(struct!.datasetSource),
    s3_source: scnDataIntegrationFlowSourcesS3SourceToTerraform(struct!.s3Source),
    source_name: cdktn.stringToTerraform(struct!.sourceName),
    source_type: cdktn.stringToTerraform(struct!.sourceType),
  }
}


export function scnDataIntegrationFlowSourcesToHclTerraform(struct?: ScnDataIntegrationFlowSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_source: {
      value: scnDataIntegrationFlowSourcesDatasetSourceToHclTerraform(struct!.datasetSource),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowSourcesDatasetSource",
    },
    s3_source: {
      value: scnDataIntegrationFlowSourcesS3SourceToHclTerraform(struct!.s3Source),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowSourcesS3Source",
    },
    source_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScnDataIntegrationFlowSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetSource = this._datasetSource?.internalValue;
    }
    if (this._s3Source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Source = this._s3Source?.internalValue;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetSource.internalValue = undefined;
      this._s3Source.internalValue = undefined;
      this._sourceName = undefined;
      this._sourceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetSource.internalValue = value.datasetSource;
      this._s3Source.internalValue = value.s3Source;
      this._sourceName = value.sourceName;
      this._sourceType = value.sourceType;
    }
  }

  // dataset_source - computed: true, optional: true, required: false
  private _datasetSource = new ScnDataIntegrationFlowSourcesDatasetSourceOutputReference(this, "dataset_source");
  public get datasetSource() {
    return this._datasetSource;
  }
  public putDatasetSource(value: ScnDataIntegrationFlowSourcesDatasetSource) {
    this._datasetSource.internalValue = value;
  }
  public resetDatasetSource() {
    this._datasetSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetSourceInput() {
    return this._datasetSource.internalValue;
  }

  // s3_source - computed: true, optional: true, required: false
  private _s3Source = new ScnDataIntegrationFlowSourcesS3SourceOutputReference(this, "s3_source");
  public get s3Source() {
    return this._s3Source;
  }
  public putS3Source(value: ScnDataIntegrationFlowSourcesS3Source) {
    this._s3Source.internalValue = value;
  }
  public resetS3Source() {
    this._s3Source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SourceInput() {
    return this._s3Source.internalValue;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}

export class ScnDataIntegrationFlowSourcesList extends cdktn.ComplexList {
  public internalValue? : ScnDataIntegrationFlowSources[] | cdktn.IResolvable

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
  public get(index: number): ScnDataIntegrationFlowSourcesOutputReference {
    return new ScnDataIntegrationFlowSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScnDataIntegrationFlowTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#key ScnDataIntegrationFlow#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#value ScnDataIntegrationFlow#value}
  */
  readonly value?: string;
}

export function scnDataIntegrationFlowTagsToTerraform(struct?: ScnDataIntegrationFlowTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function scnDataIntegrationFlowTagsToHclTerraform(struct?: ScnDataIntegrationFlowTags | cdktn.IResolvable): any {
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

export class ScnDataIntegrationFlowTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScnDataIntegrationFlowTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ScnDataIntegrationFlowTags | cdktn.IResolvable | undefined) {
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

export class ScnDataIntegrationFlowTagsList extends cdktn.ComplexList {
  public internalValue? : ScnDataIntegrationFlowTags[] | cdktn.IResolvable

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
  public get(index: number): ScnDataIntegrationFlowTagsOutputReference {
    return new ScnDataIntegrationFlowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields {
  /**
  * The name of the deduplication field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#name ScnDataIntegrationFlow#name}
  */
  readonly name?: string;
  /**
  * The sort order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#sort_order ScnDataIntegrationFlow#sort_order}
  */
  readonly sortOrder?: string;
}

export function scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsToTerraform(struct?: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    sort_order: cdktn.stringToTerraform(struct!.sortOrder),
  }
}


export function scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsToHclTerraform(struct?: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktn.stringToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sortOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sortOrder = value.sortOrder;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sort_order - computed: true, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }
}

export class ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList extends cdktn.ComplexList {
  public internalValue? : ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields[] | cdktn.IResolvable

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
  public get(index: number): ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference {
    return new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority {
  /**
  * The list of field names and their sort order for deduplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#fields ScnDataIntegrationFlow#fields}
  */
  readonly fields?: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields[] | cdktn.IResolvable;
}

export function scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityToTerraform(struct?: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsToTerraform, false)(struct!.fields),
  }
}


export function scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityToHclTerraform(struct?: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy {
  /**
  * The field priority deduplication strategy configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#field_priority ScnDataIntegrationFlow#field_priority}
  */
  readonly fieldPriority?: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority;
  /**
  * The deduplication strategy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#type ScnDataIntegrationFlow#type}
  */
  readonly type?: string;
}

export function scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyToTerraform(struct?: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_priority: scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityToTerraform(struct!.fieldPriority),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyToHclTerraform(struct?: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_priority: {
      value: scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityToHclTerraform(struct!.fieldPriority),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPriority = this._fieldPriority?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPriority.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPriority.internalValue = value.fieldPriority;
      this._type = value.type;
    }
  }

  // field_priority - computed: true, optional: true, required: false
  private _fieldPriority = new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference(this, "field_priority");
  public get fieldPriority() {
    return this._fieldPriority;
  }
  public putFieldPriority(value: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority) {
    this._fieldPriority.internalValue = value;
  }
  public resetFieldPriority() {
    this._fieldPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPriorityInput() {
    return this._fieldPriority.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ScnDataIntegrationFlowTargetDatasetTargetOptions {
  /**
  * The option to perform deduplication on data records sharing same primary key values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dedupe_records ScnDataIntegrationFlow#dedupe_records}
  */
  readonly dedupeRecords?: boolean | cdktn.IResolvable;
  /**
  * The deduplication strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dedupe_strategy ScnDataIntegrationFlow#dedupe_strategy}
  */
  readonly dedupeStrategy?: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy;
  /**
  * The load type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#load_type ScnDataIntegrationFlow#load_type}
  */
  readonly loadType?: string;
}

export function scnDataIntegrationFlowTargetDatasetTargetOptionsToTerraform(struct?: ScnDataIntegrationFlowTargetDatasetTargetOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dedupe_records: cdktn.booleanToTerraform(struct!.dedupeRecords),
    dedupe_strategy: scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyToTerraform(struct!.dedupeStrategy),
    load_type: cdktn.stringToTerraform(struct!.loadType),
  }
}


export function scnDataIntegrationFlowTargetDatasetTargetOptionsToHclTerraform(struct?: ScnDataIntegrationFlowTargetDatasetTargetOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dedupe_records: {
      value: cdktn.booleanToHclTerraform(struct!.dedupeRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dedupe_strategy: {
      value: scnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyToHclTerraform(struct!.dedupeStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy",
    },
    load_type: {
      value: cdktn.stringToHclTerraform(struct!.loadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowTargetDatasetTargetOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedupeRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupeRecords = this._dedupeRecords;
    }
    if (this._dedupeStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupeStrategy = this._dedupeStrategy?.internalValue;
    }
    if (this._loadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadType = this._loadType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowTargetDatasetTargetOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dedupeRecords = undefined;
      this._dedupeStrategy.internalValue = undefined;
      this._loadType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dedupeRecords = value.dedupeRecords;
      this._dedupeStrategy.internalValue = value.dedupeStrategy;
      this._loadType = value.loadType;
    }
  }

  // dedupe_records - computed: true, optional: true, required: false
  private _dedupeRecords?: boolean | cdktn.IResolvable; 
  public get dedupeRecords() {
    return this.getBooleanAttribute('dedupe_records');
  }
  public set dedupeRecords(value: boolean | cdktn.IResolvable) {
    this._dedupeRecords = value;
  }
  public resetDedupeRecords() {
    this._dedupeRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeRecordsInput() {
    return this._dedupeRecords;
  }

  // dedupe_strategy - computed: true, optional: true, required: false
  private _dedupeStrategy = new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference(this, "dedupe_strategy");
  public get dedupeStrategy() {
    return this._dedupeStrategy;
  }
  public putDedupeStrategy(value: ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy) {
    this._dedupeStrategy.internalValue = value;
  }
  public resetDedupeStrategy() {
    this._dedupeStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeStrategyInput() {
    return this._dedupeStrategy.internalValue;
  }

  // load_type - computed: true, optional: true, required: false
  private _loadType?: string; 
  public get loadType() {
    return this.getStringAttribute('load_type');
  }
  public set loadType(value: string) {
    this._loadType = value;
  }
  public resetLoadType() {
    this._loadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadTypeInput() {
    return this._loadType;
  }
}
export interface ScnDataIntegrationFlowTargetDatasetTarget {
  /**
  * The dataset ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dataset_identifier ScnDataIntegrationFlow#dataset_identifier}
  */
  readonly datasetIdentifier?: string;
  /**
  * The dataset options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#options ScnDataIntegrationFlow#options}
  */
  readonly options?: ScnDataIntegrationFlowTargetDatasetTargetOptions;
}

export function scnDataIntegrationFlowTargetDatasetTargetToTerraform(struct?: ScnDataIntegrationFlowTargetDatasetTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_identifier: cdktn.stringToTerraform(struct!.datasetIdentifier),
    options: scnDataIntegrationFlowTargetDatasetTargetOptionsToTerraform(struct!.options),
  }
}


export function scnDataIntegrationFlowTargetDatasetTargetToHclTerraform(struct?: ScnDataIntegrationFlowTargetDatasetTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_identifier: {
      value: cdktn.stringToHclTerraform(struct!.datasetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: scnDataIntegrationFlowTargetDatasetTargetOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowTargetDatasetTargetOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowTargetDatasetTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowTargetDatasetTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetIdentifier = this._datasetIdentifier;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowTargetDatasetTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetIdentifier = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetIdentifier = value.datasetIdentifier;
      this._options.internalValue = value.options;
    }
  }

  // dataset_identifier - computed: true, optional: true, required: false
  private _datasetIdentifier?: string; 
  public get datasetIdentifier() {
    return this.getStringAttribute('dataset_identifier');
  }
  public set datasetIdentifier(value: string) {
    this._datasetIdentifier = value;
  }
  public resetDatasetIdentifier() {
    this._datasetIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdentifierInput() {
    return this._datasetIdentifier;
  }

  // options - computed: true, optional: true, required: false
  private _options = new ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: ScnDataIntegrationFlowTargetDatasetTargetOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface ScnDataIntegrationFlowTarget {
  /**
  * The dataset target configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dataset_target ScnDataIntegrationFlow#dataset_target}
  */
  readonly datasetTarget?: ScnDataIntegrationFlowTargetDatasetTarget;
  /**
  * The target type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#target_type ScnDataIntegrationFlow#target_type}
  */
  readonly targetType: string;
}

export function scnDataIntegrationFlowTargetToTerraform(struct?: ScnDataIntegrationFlowTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_target: scnDataIntegrationFlowTargetDatasetTargetToTerraform(struct!.datasetTarget),
    target_type: cdktn.stringToTerraform(struct!.targetType),
  }
}


export function scnDataIntegrationFlowTargetToHclTerraform(struct?: ScnDataIntegrationFlowTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_target: {
      value: scnDataIntegrationFlowTargetDatasetTargetToHclTerraform(struct!.datasetTarget),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowTargetDatasetTarget",
    },
    target_type: {
      value: cdktn.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetTarget = this._datasetTarget?.internalValue;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetTarget.internalValue = undefined;
      this._targetType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetTarget.internalValue = value.datasetTarget;
      this._targetType = value.targetType;
    }
  }

  // dataset_target - computed: true, optional: true, required: false
  private _datasetTarget = new ScnDataIntegrationFlowTargetDatasetTargetOutputReference(this, "dataset_target");
  public get datasetTarget() {
    return this._datasetTarget;
  }
  public putDatasetTarget(value: ScnDataIntegrationFlowTargetDatasetTarget) {
    this._datasetTarget.internalValue = value;
  }
  public resetDatasetTarget() {
    this._datasetTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetTargetInput() {
    return this._datasetTarget.internalValue;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface ScnDataIntegrationFlowTransformationSqlTransformation {
  /**
  * The transformation SQL query body based on SparkSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#query ScnDataIntegrationFlow#query}
  */
  readonly query?: string;
}

export function scnDataIntegrationFlowTransformationSqlTransformationToTerraform(struct?: ScnDataIntegrationFlowTransformationSqlTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function scnDataIntegrationFlowTransformationSqlTransformationToHclTerraform(struct?: ScnDataIntegrationFlowTransformationSqlTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowTransformationSqlTransformationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowTransformationSqlTransformation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowTransformationSqlTransformation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface ScnDataIntegrationFlowTransformation {
  /**
  * The SQL transformation configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#sql_transformation ScnDataIntegrationFlow#sql_transformation}
  */
  readonly sqlTransformation?: ScnDataIntegrationFlowTransformationSqlTransformation;
  /**
  * The transformation type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#transformation_type ScnDataIntegrationFlow#transformation_type}
  */
  readonly transformationType: string;
}

export function scnDataIntegrationFlowTransformationToTerraform(struct?: ScnDataIntegrationFlowTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sql_transformation: scnDataIntegrationFlowTransformationSqlTransformationToTerraform(struct!.sqlTransformation),
    transformation_type: cdktn.stringToTerraform(struct!.transformationType),
  }
}


export function scnDataIntegrationFlowTransformationToHclTerraform(struct?: ScnDataIntegrationFlowTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sql_transformation: {
      value: scnDataIntegrationFlowTransformationSqlTransformationToHclTerraform(struct!.sqlTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "ScnDataIntegrationFlowTransformationSqlTransformation",
    },
    transformation_type: {
      value: cdktn.stringToHclTerraform(struct!.transformationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScnDataIntegrationFlowTransformationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScnDataIntegrationFlowTransformation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlTransformation = this._sqlTransformation?.internalValue;
    }
    if (this._transformationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationType = this._transformationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScnDataIntegrationFlowTransformation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sqlTransformation.internalValue = undefined;
      this._transformationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sqlTransformation.internalValue = value.sqlTransformation;
      this._transformationType = value.transformationType;
    }
  }

  // sql_transformation - computed: true, optional: true, required: false
  private _sqlTransformation = new ScnDataIntegrationFlowTransformationSqlTransformationOutputReference(this, "sql_transformation");
  public get sqlTransformation() {
    return this._sqlTransformation;
  }
  public putSqlTransformation(value: ScnDataIntegrationFlowTransformationSqlTransformation) {
    this._sqlTransformation.internalValue = value;
  }
  public resetSqlTransformation() {
    this._sqlTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTransformationInput() {
    return this._sqlTransformation.internalValue;
  }

  // transformation_type - computed: false, optional: false, required: true
  private _transformationType?: string; 
  public get transformationType() {
    return this.getStringAttribute('transformation_type');
  }
  public set transformationType(value: string) {
    this._transformationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationTypeInput() {
    return this._transformationType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow awscc_scn_data_integration_flow}
*/
export class ScnDataIntegrationFlow extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_scn_data_integration_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ScnDataIntegrationFlow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScnDataIntegrationFlow to import
  * @param importFromId The id of the existing ScnDataIntegrationFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScnDataIntegrationFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_scn_data_integration_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow awscc_scn_data_integration_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScnDataIntegrationFlowConfig
  */
  public constructor(scope: Construct, id: string, config: ScnDataIntegrationFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_scn_data_integration_flow',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.104.0',
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
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._sources.internalValue = config.sources;
    this._tags.internalValue = config.tags;
    this._target.internalValue = config.target;
    this._transformation.internalValue = config.transformation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // sources - computed: false, optional: false, required: true
  private _sources = new ScnDataIntegrationFlowSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: ScnDataIntegrationFlowSources[] | cdktn.IResolvable) {
    this._sources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ScnDataIntegrationFlowTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ScnDataIntegrationFlowTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new ScnDataIntegrationFlowTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ScnDataIntegrationFlowTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // transformation - computed: false, optional: false, required: true
  private _transformation = new ScnDataIntegrationFlowTransformationOutputReference(this, "transformation");
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: ScnDataIntegrationFlowTransformation) {
    this._transformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: cdktn.stringToTerraform(this._instanceId),
      name: cdktn.stringToTerraform(this._name),
      sources: cdktn.listMapper(scnDataIntegrationFlowSourcesToTerraform, false)(this._sources.internalValue),
      tags: cdktn.listMapper(scnDataIntegrationFlowTagsToTerraform, false)(this._tags.internalValue),
      target: scnDataIntegrationFlowTargetToTerraform(this._target.internalValue),
      transformation: scnDataIntegrationFlowTransformationToTerraform(this._transformation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_id: {
        value: cdktn.stringToHclTerraform(this._instanceId),
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
      sources: {
        value: cdktn.listMapperHcl(scnDataIntegrationFlowSourcesToHclTerraform, false)(this._sources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScnDataIntegrationFlowSourcesList",
      },
      tags: {
        value: cdktn.listMapperHcl(scnDataIntegrationFlowTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ScnDataIntegrationFlowTagsList",
      },
      target: {
        value: scnDataIntegrationFlowTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScnDataIntegrationFlowTarget",
      },
      transformation: {
        value: scnDataIntegrationFlowTransformationToHclTerraform(this._transformation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScnDataIntegrationFlowTransformation",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
