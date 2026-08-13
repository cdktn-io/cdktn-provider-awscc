/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightTopicV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}
  */
  readonly customInstructions?: QuicksightTopicV2CustomInstructions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}
  */
  readonly dataSetRelations?: QuicksightTopicV2DataSetRelations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}
  */
  readonly dataSets?: QuicksightTopicV2DataSets[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}
  */
  readonly folderArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}
  */
  readonly permissions?: QuicksightTopicV2Permissions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}
  */
  readonly tags?: QuicksightTopicV2Tags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}
  */
  readonly topicId?: string;
}
export interface QuicksightTopicV2CustomInstructions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#custom_instructions_string QuicksightTopicV2#custom_instructions_string}
  */
  readonly customInstructionsString?: string;
}

export function quicksightTopicV2CustomInstructionsToTerraform(struct?: QuicksightTopicV2CustomInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_instructions_string: cdktn.stringToTerraform(struct!.customInstructionsString),
  }
}


export function quicksightTopicV2CustomInstructionsToHclTerraform(struct?: QuicksightTopicV2CustomInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_instructions_string: {
      value: cdktn.stringToHclTerraform(struct!.customInstructionsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicV2CustomInstructionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicV2CustomInstructions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customInstructionsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.customInstructionsString = this._customInstructionsString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicV2CustomInstructions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customInstructionsString = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customInstructionsString = value.customInstructionsString;
    }
  }

  // custom_instructions_string - computed: true, optional: true, required: false
  private _customInstructionsString?: string; 
  public get customInstructionsString() {
    return this.getStringAttribute('custom_instructions_string');
  }
  public set customInstructionsString(value: string) {
    this._customInstructionsString = value;
  }
  public resetCustomInstructionsString() {
    this._customInstructionsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstructionsStringInput() {
    return this._customInstructionsString;
  }
}
export interface QuicksightTopicV2DataSetRelationsLeft {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}
  */
  readonly dataSetArn?: string;
}

export function quicksightTopicV2DataSetRelationsLeftToTerraform(struct?: QuicksightTopicV2DataSetRelationsLeft | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
    data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
  }
}


export function quicksightTopicV2DataSetRelationsLeftToHclTerraform(struct?: QuicksightTopicV2DataSetRelationsLeft | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_set_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataSetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicV2DataSetRelationsLeftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicV2DataSetRelationsLeft | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._dataSetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetArn = this._dataSetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicV2DataSetRelationsLeft | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
      this._dataSetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
      this._dataSetArn = value.dataSetArn;
    }
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // data_set_arn - computed: true, optional: true, required: false
  private _dataSetArn?: string; 
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }
  public set dataSetArn(value: string) {
    this._dataSetArn = value;
  }
  public resetDataSetArn() {
    this._dataSetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetArnInput() {
    return this._dataSetArn;
  }
}
export interface QuicksightTopicV2DataSetRelationsRight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}
  */
  readonly dataSetArn?: string;
}

export function quicksightTopicV2DataSetRelationsRightToTerraform(struct?: QuicksightTopicV2DataSetRelationsRight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
    data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
  }
}


export function quicksightTopicV2DataSetRelationsRightToHclTerraform(struct?: QuicksightTopicV2DataSetRelationsRight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_set_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataSetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicV2DataSetRelationsRightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTopicV2DataSetRelationsRight | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._dataSetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetArn = this._dataSetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicV2DataSetRelationsRight | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
      this._dataSetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
      this._dataSetArn = value.dataSetArn;
    }
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // data_set_arn - computed: true, optional: true, required: false
  private _dataSetArn?: string; 
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }
  public set dataSetArn(value: string) {
    this._dataSetArn = value;
  }
  public resetDataSetArn() {
    this._dataSetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetArnInput() {
    return this._dataSetArn;
  }
}
export interface QuicksightTopicV2DataSetRelations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#left QuicksightTopicV2#left}
  */
  readonly left?: QuicksightTopicV2DataSetRelationsLeft;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#right QuicksightTopicV2#right}
  */
  readonly right?: QuicksightTopicV2DataSetRelationsRight;
}

export function quicksightTopicV2DataSetRelationsToTerraform(struct?: QuicksightTopicV2DataSetRelations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    left: quicksightTopicV2DataSetRelationsLeftToTerraform(struct!.left),
    right: quicksightTopicV2DataSetRelationsRightToTerraform(struct!.right),
  }
}


export function quicksightTopicV2DataSetRelationsToHclTerraform(struct?: QuicksightTopicV2DataSetRelations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    left: {
      value: quicksightTopicV2DataSetRelationsLeftToHclTerraform(struct!.left),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicV2DataSetRelationsLeft",
    },
    right: {
      value: quicksightTopicV2DataSetRelationsRightToHclTerraform(struct!.right),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTopicV2DataSetRelationsRight",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicV2DataSetRelationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicV2DataSetRelations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._left?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left?.internalValue;
    }
    if (this._right?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicV2DataSetRelations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._left.internalValue = undefined;
      this._right.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._left.internalValue = value.left;
      this._right.internalValue = value.right;
    }
  }

  // left - computed: true, optional: true, required: false
  private _left = new QuicksightTopicV2DataSetRelationsLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTopicV2DataSetRelationsLeft) {
    this._left.internalValue = value;
  }
  public resetLeft() {
    this._left.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: true, optional: true, required: false
  private _right = new QuicksightTopicV2DataSetRelationsRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTopicV2DataSetRelationsRight) {
    this._right.internalValue = value;
  }
  public resetRight() {
    this._right.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }
}

export class QuicksightTopicV2DataSetRelationsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicV2DataSetRelations[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicV2DataSetRelationsOutputReference {
    return new QuicksightTopicV2DataSetRelationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicV2DataSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}
  */
  readonly dataSetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#data_set_name QuicksightTopicV2#data_set_name}
  */
  readonly dataSetName?: string;
}

export function quicksightTopicV2DataSetsToTerraform(struct?: QuicksightTopicV2DataSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
    data_set_name: cdktn.stringToTerraform(struct!.dataSetName),
  }
}


export function quicksightTopicV2DataSetsToHclTerraform(struct?: QuicksightTopicV2DataSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_set_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataSetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_set_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicV2DataSetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicV2DataSets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetArn = this._dataSetArn;
    }
    if (this._dataSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetName = this._dataSetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicV2DataSets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSetArn = undefined;
      this._dataSetName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSetArn = value.dataSetArn;
      this._dataSetName = value.dataSetName;
    }
  }

  // data_set_arn - computed: true, optional: true, required: false
  private _dataSetArn?: string; 
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }
  public set dataSetArn(value: string) {
    this._dataSetArn = value;
  }
  public resetDataSetArn() {
    this._dataSetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetArnInput() {
    return this._dataSetArn;
  }

  // data_set_name - computed: true, optional: true, required: false
  private _dataSetName?: string; 
  public get dataSetName() {
    return this.getStringAttribute('data_set_name');
  }
  public set dataSetName(value: string) {
    this._dataSetName = value;
  }
  public resetDataSetName() {
    this._dataSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetNameInput() {
    return this._dataSetName;
  }
}

export class QuicksightTopicV2DataSetsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicV2DataSets[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicV2DataSetsOutputReference {
    return new QuicksightTopicV2DataSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicV2Permissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#actions QuicksightTopicV2#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#principal QuicksightTopicV2#principal}
  */
  readonly principal?: string;
}

export function quicksightTopicV2PermissionsToTerraform(struct?: QuicksightTopicV2Permissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    principal: cdktn.stringToTerraform(struct!.principal),
  }
}


export function quicksightTopicV2PermissionsToHclTerraform(struct?: QuicksightTopicV2Permissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktn.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTopicV2PermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicV2Permissions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTopicV2Permissions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principal = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principal = value.principal;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // principal - computed: true, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class QuicksightTopicV2PermissionsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicV2Permissions[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicV2PermissionsOutputReference {
    return new QuicksightTopicV2PermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTopicV2Tags {
  /**
  * <p>Tag key.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#key QuicksightTopicV2#key}
  */
  readonly key?: string;
  /**
  * <p>Tag value.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#value QuicksightTopicV2#value}
  */
  readonly value?: string;
}

export function quicksightTopicV2TagsToTerraform(struct?: QuicksightTopicV2Tags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function quicksightTopicV2TagsToHclTerraform(struct?: QuicksightTopicV2Tags | cdktn.IResolvable): any {
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

export class QuicksightTopicV2TagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTopicV2Tags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTopicV2Tags | cdktn.IResolvable | undefined) {
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

export class QuicksightTopicV2TagsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTopicV2Tags[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTopicV2TagsOutputReference {
    return new QuicksightTopicV2TagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2 awscc_quicksight_topic_v2}
*/
export class QuicksightTopicV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_topic_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightTopicV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightTopicV2 to import
  * @param importFromId The id of the existing QuicksightTopicV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightTopicV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_topic_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_topic_v2 awscc_quicksight_topic_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightTopicV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: QuicksightTopicV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_topic_v2',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.97.0',
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
    this._awsAccountId = config.awsAccountId;
    this._customInstructions.internalValue = config.customInstructions;
    this._dataSetRelations.internalValue = config.dataSetRelations;
    this._dataSets.internalValue = config.dataSets;
    this._description = config.description;
    this._folderArns = config.folderArns;
    this._name = config.name;
    this._permissions.internalValue = config.permissions;
    this._tags.internalValue = config.tags;
    this._topicId = config.topicId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // custom_instructions - computed: true, optional: true, required: false
  private _customInstructions = new QuicksightTopicV2CustomInstructionsOutputReference(this, "custom_instructions");
  public get customInstructions() {
    return this._customInstructions;
  }
  public putCustomInstructions(value: QuicksightTopicV2CustomInstructions) {
    this._customInstructions.internalValue = value;
  }
  public resetCustomInstructions() {
    this._customInstructions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstructionsInput() {
    return this._customInstructions.internalValue;
  }

  // data_set_relations - computed: true, optional: true, required: false
  private _dataSetRelations = new QuicksightTopicV2DataSetRelationsList(this, "data_set_relations", false);
  public get dataSetRelations() {
    return this._dataSetRelations;
  }
  public putDataSetRelations(value: QuicksightTopicV2DataSetRelations[] | cdktn.IResolvable) {
    this._dataSetRelations.internalValue = value;
  }
  public resetDataSetRelations() {
    this._dataSetRelations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetRelationsInput() {
    return this._dataSetRelations.internalValue;
  }

  // data_sets - computed: true, optional: true, required: false
  private _dataSets = new QuicksightTopicV2DataSetsList(this, "data_sets", false);
  public get dataSets() {
    return this._dataSets;
  }
  public putDataSets(value: QuicksightTopicV2DataSets[] | cdktn.IResolvable) {
    this._dataSets.internalValue = value;
  }
  public resetDataSets() {
    this._dataSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetsInput() {
    return this._dataSets.internalValue;
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

  // folder_arns - computed: true, optional: true, required: false
  private _folderArns?: string[]; 
  public get folderArns() {
    return this.getListAttribute('folder_arns');
  }
  public set folderArns(value: string[]) {
    this._folderArns = value;
  }
  public resetFolderArns() {
    this._folderArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderArnsInput() {
    return this._folderArns;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // permissions - computed: true, optional: true, required: false
  private _permissions = new QuicksightTopicV2PermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: QuicksightTopicV2Permissions[] | cdktn.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QuicksightTopicV2TagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightTopicV2Tags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // topic_id - computed: true, optional: true, required: false
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  public resetTopicId() {
    this._topicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      custom_instructions: quicksightTopicV2CustomInstructionsToTerraform(this._customInstructions.internalValue),
      data_set_relations: cdktn.listMapper(quicksightTopicV2DataSetRelationsToTerraform, false)(this._dataSetRelations.internalValue),
      data_sets: cdktn.listMapper(quicksightTopicV2DataSetsToTerraform, false)(this._dataSets.internalValue),
      description: cdktn.stringToTerraform(this._description),
      folder_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._folderArns),
      name: cdktn.stringToTerraform(this._name),
      permissions: cdktn.listMapper(quicksightTopicV2PermissionsToTerraform, false)(this._permissions.internalValue),
      tags: cdktn.listMapper(quicksightTopicV2TagsToTerraform, false)(this._tags.internalValue),
      topic_id: cdktn.stringToTerraform(this._topicId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_instructions: {
        value: quicksightTopicV2CustomInstructionsToHclTerraform(this._customInstructions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightTopicV2CustomInstructions",
      },
      data_set_relations: {
        value: cdktn.listMapperHcl(quicksightTopicV2DataSetRelationsToHclTerraform, false)(this._dataSetRelations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightTopicV2DataSetRelationsList",
      },
      data_sets: {
        value: cdktn.listMapperHcl(quicksightTopicV2DataSetsToHclTerraform, false)(this._dataSets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightTopicV2DataSetsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._folderArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktn.listMapperHcl(quicksightTopicV2PermissionsToHclTerraform, false)(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightTopicV2PermissionsList",
      },
      tags: {
        value: cdktn.listMapperHcl(quicksightTopicV2TagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightTopicV2TagsList",
      },
      topic_id: {
        value: cdktn.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
