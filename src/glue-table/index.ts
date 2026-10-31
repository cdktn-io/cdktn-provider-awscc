/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GlueTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the Data Catalog in which to create the Table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#catalog_id GlueTable#catalog_id}
  */
  readonly catalogId: string;
  /**
  * The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#database_name GlueTable#database_name}
  */
  readonly databaseName: string;
  /**
  * The table name. For Hive compatibility, this is folded to lowercase when it is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#name GlueTable#name}
  */
  readonly name?: string;
  /**
  * Specifies an OpenTableFormatInput structure when creating an open format table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#open_table_format_input GlueTable#open_table_format_input}
  */
  readonly openTableFormatInput?: GlueTableOpenTableFormatInput;
  /**
  * A structure used to define a table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#table_input GlueTable#table_input}
  */
  readonly tableInput?: GlueTableTableInput;
}
export interface GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields {
  /**
  * The partition field ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#field_id GlueTable#field_id}
  */
  readonly fieldId?: number;
  /**
  * The partition field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#name GlueTable#name}
  */
  readonly name?: string;
  /**
  * The source field ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#source_id GlueTable#source_id}
  */
  readonly sourceId?: number;
  /**
  * The transform to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#transform GlueTable#transform}
  */
  readonly transform?: string;
}

export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsToTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_id: cdktn.numberToTerraform(struct!.fieldId),
    name: cdktn.stringToTerraform(struct!.name),
    source_id: cdktn.numberToTerraform(struct!.sourceId),
    transform: cdktn.stringToTerraform(struct!.transform),
  }
}


export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsToHclTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_id: {
      value: cdktn.numberToHclTerraform(struct!.fieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktn.numberToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transform: {
      value: cdktn.stringToHclTerraform(struct!.transform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
      this._name = undefined;
      this._sourceId = undefined;
      this._transform = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
      this._name = value.name;
      this._sourceId = value.sourceId;
      this._transform = value.transform;
    }
  }

  // field_id - computed: true, optional: true, required: false
  private _fieldId?: number; 
  public get fieldId() {
    return this.getNumberAttribute('field_id');
  }
  public set fieldId(value: number) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
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

  // source_id - computed: true, optional: true, required: false
  private _sourceId?: number; 
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }
  public set sourceId(value: number) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // transform - computed: true, optional: true, required: false
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }
}

export class GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList extends cdktn.ComplexList {
  public internalValue? : GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields[] | cdktn.IResolvable

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
  public get(index: number): GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference {
    return new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec {
  /**
  * The partition fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#fields GlueTable#fields}
  */
  readonly fields?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields[] | cdktn.IResolvable;
  /**
  * The spec ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#spec_id GlueTable#spec_id}
  */
  readonly specId?: number;
}

export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecToTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(glueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsToTerraform, false)(struct!.fields),
    spec_id: cdktn.numberToTerraform(struct!.specId),
  }
}


export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecToHclTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(glueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList",
    },
    spec_id: {
      value: cdktn.numberToHclTerraform(struct!.specId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._specId !== undefined) {
      hasAnyValues = true;
      internalValueResult.specId = this._specId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._specId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._specId = value.specId;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // spec_id - computed: true, optional: true, required: false
  private _specId?: number; 
  public get specId() {
    return this.getNumberAttribute('spec_id');
  }
  public set specId(value: number) {
    this._specId = value;
  }
  public resetSpecId() {
    this._specId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specIdInput() {
    return this._specId;
  }
}
export interface GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields {
  /**
  * Documentation for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#doc GlueTable#doc}
  */
  readonly doc?: string;
  /**
  * The field ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#id GlueTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#name GlueTable#name}
  */
  readonly name?: string;
  /**
  * Whether the field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#required GlueTable#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * The field type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#type GlueTable#type}
  */
  readonly type?: string;
}

export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsToTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    doc: cdktn.stringToTerraform(struct!.doc),
    id: cdktn.numberToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsToHclTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    doc: {
      value: cdktn.stringToHclTerraform(struct!.doc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doc !== undefined) {
      hasAnyValues = true;
      internalValueResult.doc = this._doc;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doc = undefined;
      this._id = undefined;
      this._name = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doc = value.doc;
      this._id = value.id;
      this._name = value.name;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // doc - computed: true, optional: true, required: false
  private _doc?: string; 
  public get doc() {
    return this.getStringAttribute('doc');
  }
  public set doc(value: string) {
    this._doc = value;
  }
  public resetDoc() {
    this._doc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docInput() {
    return this._doc;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference {
    return new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema {
  /**
  * The fields in the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#fields GlueTable#fields}
  */
  readonly fields?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields[] | cdktn.IResolvable;
  /**
  * The identifier field IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#identifier_field_ids GlueTable#identifier_field_ids}
  */
  readonly identifierFieldIds?: number[];
  /**
  * The schema ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#schema_id GlueTable#schema_id}
  */
  readonly schemaId?: number;
  /**
  * The type of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#type GlueTable#type}
  */
  readonly type?: string;
}

export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaToTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(glueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsToTerraform, false)(struct!.fields),
    identifier_field_ids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.identifierFieldIds),
    schema_id: cdktn.numberToTerraform(struct!.schemaId),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaToHclTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(glueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList",
    },
    identifier_field_ids: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.identifierFieldIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    schema_id: {
      value: cdktn.numberToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._identifierFieldIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierFieldIds = this._identifierFieldIds;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._identifierFieldIds = undefined;
      this._schemaId = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._identifierFieldIds = value.identifierFieldIds;
      this._schemaId = value.schemaId;
      this._type = value.type;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // identifier_field_ids - computed: true, optional: true, required: false
  private _identifierFieldIds?: number[]; 
  public get identifierFieldIds() {
    return this.getNumberListAttribute('identifier_field_ids');
  }
  public set identifierFieldIds(value: number[]) {
    this._identifierFieldIds = value;
  }
  public resetIdentifierFieldIds() {
    this._identifierFieldIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierFieldIdsInput() {
    return this._identifierFieldIds;
  }

  // schema_id - computed: true, optional: true, required: false
  private _schemaId?: number; 
  public get schemaId() {
    return this.getNumberAttribute('schema_id');
  }
  public set schemaId(value: number) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
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
export interface GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields {
  /**
  * The sort direction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#direction GlueTable#direction}
  */
  readonly direction?: string;
  /**
  * The null ordering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#null_order GlueTable#null_order}
  */
  readonly nullOrder?: string;
  /**
  * The source field ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#source_id GlueTable#source_id}
  */
  readonly sourceId?: number;
  /**
  * The transform to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#transform GlueTable#transform}
  */
  readonly transform?: string;
}

export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsToTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    null_order: cdktn.stringToTerraform(struct!.nullOrder),
    source_id: cdktn.numberToTerraform(struct!.sourceId),
    transform: cdktn.stringToTerraform(struct!.transform),
  }
}


export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsToHclTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_order: {
      value: cdktn.stringToHclTerraform(struct!.nullOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktn.numberToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transform: {
      value: cdktn.stringToHclTerraform(struct!.transform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._nullOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullOrder = this._nullOrder;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._nullOrder = undefined;
      this._sourceId = undefined;
      this._transform = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._nullOrder = value.nullOrder;
      this._sourceId = value.sourceId;
      this._transform = value.transform;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // null_order - computed: true, optional: true, required: false
  private _nullOrder?: string; 
  public get nullOrder() {
    return this.getStringAttribute('null_order');
  }
  public set nullOrder(value: string) {
    this._nullOrder = value;
  }
  public resetNullOrder() {
    this._nullOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullOrderInput() {
    return this._nullOrder;
  }

  // source_id - computed: true, optional: true, required: false
  private _sourceId?: number; 
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }
  public set sourceId(value: number) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // transform - computed: true, optional: true, required: false
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }
}

export class GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList extends cdktn.ComplexList {
  public internalValue? : GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields[] | cdktn.IResolvable

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
  public get(index: number): GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference {
    return new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder {
  /**
  * The sort fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#fields GlueTable#fields}
  */
  readonly fields?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields[] | cdktn.IResolvable;
  /**
  * The order ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#order_id GlueTable#order_id}
  */
  readonly orderId?: number;
}

export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderToTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(glueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsToTerraform, false)(struct!.fields),
    order_id: cdktn.numberToTerraform(struct!.orderId),
  }
}


export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderToHclTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(glueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList",
    },
    order_id: {
      value: cdktn.numberToHclTerraform(struct!.orderId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._orderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderId = this._orderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._orderId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._orderId = value.orderId;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // order_id - computed: true, optional: true, required: false
  private _orderId?: number; 
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }
  public set orderId(value: number) {
    this._orderId = value;
  }
  public resetOrderId() {
    this._orderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId;
  }
}
export interface GlueTableOpenTableFormatInputIcebergInputIcebergTableInput {
  /**
  * The location of the Iceberg table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#location GlueTable#location}
  */
  readonly location?: string;
  /**
  * The partition spec for the Iceberg table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#partition_spec GlueTable#partition_spec}
  */
  readonly partitionSpec?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec;
  /**
  * The properties for the Iceberg table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#properties GlueTable#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The schema for the Iceberg table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#schema GlueTable#schema}
  */
  readonly schema?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema;
  /**
  * The write order for the Iceberg table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#write_order GlueTable#write_order}
  */
  readonly writeOrder?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder;
}

export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputToTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: cdktn.stringToTerraform(struct!.location),
    partition_spec: glueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecToTerraform(struct!.partitionSpec),
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
    schema: glueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaToTerraform(struct!.schema),
    write_order: glueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderToTerraform(struct!.writeOrder),
  }
}


export function glueTableOpenTableFormatInputIcebergInputIcebergTableInputToHclTerraform(struct?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_spec: {
      value: glueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecToHclTerraform(struct!.partitionSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec",
    },
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    schema: {
      value: glueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema",
    },
    write_order: {
      value: glueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderToHclTerraform(struct!.writeOrder),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOpenTableFormatInputIcebergInputIcebergTableInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._partitionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionSpec = this._partitionSpec?.internalValue;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._writeOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOrder = this._writeOrder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._partitionSpec.internalValue = undefined;
      this._properties = undefined;
      this._schema.internalValue = undefined;
      this._writeOrder.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._partitionSpec.internalValue = value.partitionSpec;
      this._properties = value.properties;
      this._schema.internalValue = value.schema;
      this._writeOrder.internalValue = value.writeOrder;
    }
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // partition_spec - computed: true, optional: true, required: false
  private _partitionSpec = new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference(this, "partition_spec");
  public get partitionSpec() {
    return this._partitionSpec;
  }
  public putPartitionSpec(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec) {
    this._partitionSpec.internalValue = value;
  }
  public resetPartitionSpec() {
    this._partitionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionSpecInput() {
    return this._partitionSpec.internalValue;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // schema - computed: true, optional: true, required: false
  private _schema = new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // write_order - computed: true, optional: true, required: false
  private _writeOrder = new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference(this, "write_order");
  public get writeOrder() {
    return this._writeOrder;
  }
  public putWriteOrder(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder) {
    this._writeOrder.internalValue = value;
  }
  public resetWriteOrder() {
    this._writeOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOrderInput() {
    return this._writeOrder.internalValue;
  }
}
export interface GlueTableOpenTableFormatInputIcebergInput {
  /**
  * Specifies the Iceberg table configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#iceberg_table_input GlueTable#iceberg_table_input}
  */
  readonly icebergTableInput?: GlueTableOpenTableFormatInputIcebergInputIcebergTableInput;
  /**
  * A required metadata operation. Can only be set to CREATE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#metadata_operation GlueTable#metadata_operation}
  */
  readonly metadataOperation?: string;
  /**
  * The table version of the Iceberg table. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#version GlueTable#version}
  */
  readonly version?: string;
}

export function glueTableOpenTableFormatInputIcebergInputToTerraform(struct?: GlueTableOpenTableFormatInputIcebergInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_table_input: glueTableOpenTableFormatInputIcebergInputIcebergTableInputToTerraform(struct!.icebergTableInput),
    metadata_operation: cdktn.stringToTerraform(struct!.metadataOperation),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function glueTableOpenTableFormatInputIcebergInputToHclTerraform(struct?: GlueTableOpenTableFormatInputIcebergInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_table_input: {
      value: glueTableOpenTableFormatInputIcebergInputIcebergTableInputToHclTerraform(struct!.icebergTableInput),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOpenTableFormatInputIcebergInputIcebergTableInput",
    },
    metadata_operation: {
      value: cdktn.stringToHclTerraform(struct!.metadataOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOpenTableFormatInputIcebergInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOpenTableFormatInputIcebergInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergTableInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergTableInput = this._icebergTableInput?.internalValue;
    }
    if (this._metadataOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataOperation = this._metadataOperation;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOpenTableFormatInputIcebergInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergTableInput.internalValue = undefined;
      this._metadataOperation = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergTableInput.internalValue = value.icebergTableInput;
      this._metadataOperation = value.metadataOperation;
      this._version = value.version;
    }
  }

  // iceberg_table_input - computed: true, optional: true, required: false
  private _icebergTableInput = new GlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference(this, "iceberg_table_input");
  public get icebergTableInput() {
    return this._icebergTableInput;
  }
  public putIcebergTableInput(value: GlueTableOpenTableFormatInputIcebergInputIcebergTableInput) {
    this._icebergTableInput.internalValue = value;
  }
  public resetIcebergTableInput() {
    this._icebergTableInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergTableInputInput() {
    return this._icebergTableInput.internalValue;
  }

  // metadata_operation - computed: true, optional: true, required: false
  private _metadataOperation?: string; 
  public get metadataOperation() {
    return this.getStringAttribute('metadata_operation');
  }
  public set metadataOperation(value: string) {
    this._metadataOperation = value;
  }
  public resetMetadataOperation() {
    this._metadataOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOperationInput() {
    return this._metadataOperation;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GlueTableOpenTableFormatInput {
  /**
  * Specifies an IcebergInput structure that defines an Apache Iceberg metadata table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#iceberg_input GlueTable#iceberg_input}
  */
  readonly icebergInput?: GlueTableOpenTableFormatInputIcebergInput;
}

export function glueTableOpenTableFormatInputToTerraform(struct?: GlueTableOpenTableFormatInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_input: glueTableOpenTableFormatInputIcebergInputToTerraform(struct!.icebergInput),
  }
}


export function glueTableOpenTableFormatInputToHclTerraform(struct?: GlueTableOpenTableFormatInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_input: {
      value: glueTableOpenTableFormatInputIcebergInputToHclTerraform(struct!.icebergInput),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableOpenTableFormatInputIcebergInput",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableOpenTableFormatInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableOpenTableFormatInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergInput = this._icebergInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableOpenTableFormatInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergInput.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergInput.internalValue = value.icebergInput;
    }
  }

  // iceberg_input - computed: true, optional: true, required: false
  private _icebergInput = new GlueTableOpenTableFormatInputIcebergInputOutputReference(this, "iceberg_input");
  public get icebergInput() {
    return this._icebergInput;
  }
  public putIcebergInput(value: GlueTableOpenTableFormatInputIcebergInput) {
    this._icebergInput.internalValue = value;
  }
  public resetIcebergInput() {
    this._icebergInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergInputInput() {
    return this._icebergInput.internalValue;
  }
}
export interface GlueTableTableInputPartitionKeys {
  /**
  * A free-form text comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#comment GlueTable#comment}
  */
  readonly comment?: string;
  /**
  * The name of the Column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#name GlueTable#name}
  */
  readonly name?: string;
  /**
  * The data type of the Column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#type GlueTable#type}
  */
  readonly type?: string;
}

export function glueTableTableInputPartitionKeysToTerraform(struct?: GlueTableTableInputPartitionKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function glueTableTableInputPartitionKeysToHclTerraform(struct?: GlueTableTableInputPartitionKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GlueTableTableInputPartitionKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueTableTableInputPartitionKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputPartitionKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

export class GlueTableTableInputPartitionKeysList extends cdktn.ComplexList {
  public internalValue? : GlueTableTableInputPartitionKeys[] | cdktn.IResolvable

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
  public get(index: number): GlueTableTableInputPartitionKeysOutputReference {
    return new GlueTableTableInputPartitionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueTableTableInputStorageDescriptorColumns {
  /**
  * A free-form text comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#comment GlueTable#comment}
  */
  readonly comment?: string;
  /**
  * The name of the Column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#name GlueTable#name}
  */
  readonly name?: string;
  /**
  * The data type of the Column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#type GlueTable#type}
  */
  readonly type?: string;
}

export function glueTableTableInputStorageDescriptorColumnsToTerraform(struct?: GlueTableTableInputStorageDescriptorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function glueTableTableInputStorageDescriptorColumnsToHclTerraform(struct?: GlueTableTableInputStorageDescriptorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GlueTableTableInputStorageDescriptorColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueTableTableInputStorageDescriptorColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputStorageDescriptorColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

export class GlueTableTableInputStorageDescriptorColumnsList extends cdktn.ComplexList {
  public internalValue? : GlueTableTableInputStorageDescriptorColumns[] | cdktn.IResolvable

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
  public get(index: number): GlueTableTableInputStorageDescriptorColumnsOutputReference {
    return new GlueTableTableInputStorageDescriptorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId {
  /**
  * The name of the schema registry that contains the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#registry_name GlueTable#registry_name}
  */
  readonly registryName?: string;
  /**
  * The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#schema_arn GlueTable#schema_arn}
  */
  readonly schemaArn?: string;
  /**
  * The name of the schema. One of SchemaArn or SchemaName has to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#schema_name GlueTable#schema_name}
  */
  readonly schemaName?: string;
}

export function glueTableTableInputStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct?: GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    registry_name: cdktn.stringToTerraform(struct!.registryName),
    schema_arn: cdktn.stringToTerraform(struct!.schemaArn),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
  }
}


export function glueTableTableInputStorageDescriptorSchemaReferenceSchemaIdToHclTerraform(struct?: GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    registry_name: {
      value: cdktn.stringToHclTerraform(struct!.registryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_arn: {
      value: cdktn.stringToHclTerraform(struct!.schemaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    if (this._schemaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaArn = this._schemaArn;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._registryName = undefined;
      this._schemaArn = undefined;
      this._schemaName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._registryName = value.registryName;
      this._schemaArn = value.schemaArn;
      this._schemaName = value.schemaName;
    }
  }

  // registry_name - computed: true, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // schema_arn - computed: true, optional: true, required: false
  private _schemaArn?: string; 
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
  }
  public set schemaArn(value: string) {
    this._schemaArn = value;
  }
  public resetSchemaArn() {
    this._schemaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaArnInput() {
    return this._schemaArn;
  }

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface GlueTableTableInputStorageDescriptorSchemaReference {
  /**
  * A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#schema_id GlueTable#schema_id}
  */
  readonly schemaId?: GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId;
  /**
  * The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#schema_version_id GlueTable#schema_version_id}
  */
  readonly schemaVersionId?: string;
  /**
  * The version number of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#schema_version_number GlueTable#schema_version_number}
  */
  readonly schemaVersionNumber?: number;
}

export function glueTableTableInputStorageDescriptorSchemaReferenceToTerraform(struct?: GlueTableTableInputStorageDescriptorSchemaReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema_id: glueTableTableInputStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct!.schemaId),
    schema_version_id: cdktn.stringToTerraform(struct!.schemaVersionId),
    schema_version_number: cdktn.numberToTerraform(struct!.schemaVersionNumber),
  }
}


export function glueTableTableInputStorageDescriptorSchemaReferenceToHclTerraform(struct?: GlueTableTableInputStorageDescriptorSchemaReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schema_id: {
      value: glueTableTableInputStorageDescriptorSchemaReferenceSchemaIdToHclTerraform(struct!.schemaId),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId",
    },
    schema_version_id: {
      value: cdktn.stringToHclTerraform(struct!.schemaVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_version_number: {
      value: cdktn.numberToHclTerraform(struct!.schemaVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableTableInputStorageDescriptorSchemaReference | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId?.internalValue;
    }
    if (this._schemaVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaVersionId = this._schemaVersionId;
    }
    if (this._schemaVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaVersionNumber = this._schemaVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputStorageDescriptorSchemaReference | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaId.internalValue = undefined;
      this._schemaVersionId = undefined;
      this._schemaVersionNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaId.internalValue = value.schemaId;
      this._schemaVersionId = value.schemaVersionId;
      this._schemaVersionNumber = value.schemaVersionNumber;
    }
  }

  // schema_id - computed: true, optional: true, required: false
  private _schemaId = new GlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(this, "schema_id");
  public get schemaId() {
    return this._schemaId;
  }
  public putSchemaId(value: GlueTableTableInputStorageDescriptorSchemaReferenceSchemaId) {
    this._schemaId.internalValue = value;
  }
  public resetSchemaId() {
    this._schemaId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId.internalValue;
  }

  // schema_version_id - computed: true, optional: true, required: false
  private _schemaVersionId?: string; 
  public get schemaVersionId() {
    return this.getStringAttribute('schema_version_id');
  }
  public set schemaVersionId(value: string) {
    this._schemaVersionId = value;
  }
  public resetSchemaVersionId() {
    this._schemaVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionIdInput() {
    return this._schemaVersionId;
  }

  // schema_version_number - computed: true, optional: true, required: false
  private _schemaVersionNumber?: number; 
  public get schemaVersionNumber() {
    return this.getNumberAttribute('schema_version_number');
  }
  public set schemaVersionNumber(value: number) {
    this._schemaVersionNumber = value;
  }
  public resetSchemaVersionNumber() {
    this._schemaVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionNumberInput() {
    return this._schemaVersionNumber;
  }
}
export interface GlueTableTableInputStorageDescriptorSerdeInfo {
  /**
  * Name of the SerDe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#name GlueTable#name}
  */
  readonly name?: string;
  /**
  * These key-value pairs define initialization parameters for the SerDe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#parameters GlueTable#parameters}
  */
  readonly parameters?: string;
  /**
  * Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#serialization_library GlueTable#serialization_library}
  */
  readonly serializationLibrary?: string;
}

export function glueTableTableInputStorageDescriptorSerdeInfoToTerraform(struct?: GlueTableTableInputStorageDescriptorSerdeInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    parameters: cdktn.stringToTerraform(struct!.parameters),
    serialization_library: cdktn.stringToTerraform(struct!.serializationLibrary),
  }
}


export function glueTableTableInputStorageDescriptorSerdeInfoToHclTerraform(struct?: GlueTableTableInputStorageDescriptorSerdeInfo | cdktn.IResolvable): any {
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
    parameters: {
      value: cdktn.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serialization_library: {
      value: cdktn.stringToHclTerraform(struct!.serializationLibrary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableTableInputStorageDescriptorSerdeInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableTableInputStorageDescriptorSerdeInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._serializationLibrary !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializationLibrary = this._serializationLibrary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputStorageDescriptorSerdeInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._serializationLibrary = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
      this._serializationLibrary = value.serializationLibrary;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // serialization_library - computed: true, optional: true, required: false
  private _serializationLibrary?: string; 
  public get serializationLibrary() {
    return this.getStringAttribute('serialization_library');
  }
  public set serializationLibrary(value: string) {
    this._serializationLibrary = value;
  }
  public resetSerializationLibrary() {
    this._serializationLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationLibraryInput() {
    return this._serializationLibrary;
  }
}
export interface GlueTableTableInputStorageDescriptorSkewedInfo {
  /**
  * A list of names of columns that contain skewed values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#skewed_column_names GlueTable#skewed_column_names}
  */
  readonly skewedColumnNames?: string[];
  /**
  * A mapping of skewed values to the columns that contain them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#skewed_column_value_location_maps GlueTable#skewed_column_value_location_maps}
  */
  readonly skewedColumnValueLocationMaps?: string;
  /**
  * A list of names of columns that contain skewed values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#skewed_column_values GlueTable#skewed_column_values}
  */
  readonly skewedColumnValues?: string[];
}

export function glueTableTableInputStorageDescriptorSkewedInfoToTerraform(struct?: GlueTableTableInputStorageDescriptorSkewedInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    skewed_column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skewedColumnNames),
    skewed_column_value_location_maps: cdktn.stringToTerraform(struct!.skewedColumnValueLocationMaps),
    skewed_column_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skewedColumnValues),
  }
}


export function glueTableTableInputStorageDescriptorSkewedInfoToHclTerraform(struct?: GlueTableTableInputStorageDescriptorSkewedInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    skewed_column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skewedColumnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skewed_column_value_location_maps: {
      value: cdktn.stringToHclTerraform(struct!.skewedColumnValueLocationMaps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skewed_column_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skewedColumnValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableTableInputStorageDescriptorSkewedInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableTableInputStorageDescriptorSkewedInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skewedColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColumnNames = this._skewedColumnNames;
    }
    if (this._skewedColumnValueLocationMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColumnValueLocationMaps = this._skewedColumnValueLocationMaps;
    }
    if (this._skewedColumnValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColumnValues = this._skewedColumnValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputStorageDescriptorSkewedInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._skewedColumnNames = undefined;
      this._skewedColumnValueLocationMaps = undefined;
      this._skewedColumnValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._skewedColumnNames = value.skewedColumnNames;
      this._skewedColumnValueLocationMaps = value.skewedColumnValueLocationMaps;
      this._skewedColumnValues = value.skewedColumnValues;
    }
  }

  // skewed_column_names - computed: true, optional: true, required: false
  private _skewedColumnNames?: string[]; 
  public get skewedColumnNames() {
    return this.getListAttribute('skewed_column_names');
  }
  public set skewedColumnNames(value: string[]) {
    this._skewedColumnNames = value;
  }
  public resetSkewedColumnNames() {
    this._skewedColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnNamesInput() {
    return this._skewedColumnNames;
  }

  // skewed_column_value_location_maps - computed: true, optional: true, required: false
  private _skewedColumnValueLocationMaps?: string; 
  public get skewedColumnValueLocationMaps() {
    return this.getStringAttribute('skewed_column_value_location_maps');
  }
  public set skewedColumnValueLocationMaps(value: string) {
    this._skewedColumnValueLocationMaps = value;
  }
  public resetSkewedColumnValueLocationMaps() {
    this._skewedColumnValueLocationMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnValueLocationMapsInput() {
    return this._skewedColumnValueLocationMaps;
  }

  // skewed_column_values - computed: true, optional: true, required: false
  private _skewedColumnValues?: string[]; 
  public get skewedColumnValues() {
    return this.getListAttribute('skewed_column_values');
  }
  public set skewedColumnValues(value: string[]) {
    this._skewedColumnValues = value;
  }
  public resetSkewedColumnValues() {
    this._skewedColumnValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnValuesInput() {
    return this._skewedColumnValues;
  }
}
export interface GlueTableTableInputStorageDescriptorSortColumns {
  /**
  * The name of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#column GlueTable#column}
  */
  readonly column?: string;
  /**
  * Indicates that the column is sorted in ascending order (==1), or in descending order (==0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#sort_order GlueTable#sort_order}
  */
  readonly sortOrder?: number;
}

export function glueTableTableInputStorageDescriptorSortColumnsToTerraform(struct?: GlueTableTableInputStorageDescriptorSortColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    sort_order: cdktn.numberToTerraform(struct!.sortOrder),
  }
}


export function glueTableTableInputStorageDescriptorSortColumnsToHclTerraform(struct?: GlueTableTableInputStorageDescriptorSortColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktn.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableTableInputStorageDescriptorSortColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueTableTableInputStorageDescriptorSortColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputStorageDescriptorSortColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._sortOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._sortOrder = value.sortOrder;
    }
  }

  // column - computed: true, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // sort_order - computed: true, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
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

export class GlueTableTableInputStorageDescriptorSortColumnsList extends cdktn.ComplexList {
  public internalValue? : GlueTableTableInputStorageDescriptorSortColumns[] | cdktn.IResolvable

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
  public get(index: number): GlueTableTableInputStorageDescriptorSortColumnsOutputReference {
    return new GlueTableTableInputStorageDescriptorSortColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueTableTableInputStorageDescriptor {
  /**
  * A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#bucket_columns GlueTable#bucket_columns}
  */
  readonly bucketColumns?: string[];
  /**
  * A list of the Columns in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#columns GlueTable#columns}
  */
  readonly columns?: GlueTableTableInputStorageDescriptorColumns[] | cdktn.IResolvable;
  /**
  * True if the data in the table is compressed, or False if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#compressed GlueTable#compressed}
  */
  readonly compressed?: boolean | cdktn.IResolvable;
  /**
  * The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#input_format GlueTable#input_format}
  */
  readonly inputFormat?: string;
  /**
  * The physical location of the table. By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#location GlueTable#location}
  */
  readonly location?: string;
  /**
  * Must be specified if the table contains any dimension columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#number_of_buckets GlueTable#number_of_buckets}
  */
  readonly numberOfBuckets?: number;
  /**
  * The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#output_format GlueTable#output_format}
  */
  readonly outputFormat?: string;
  /**
  * The user-supplied properties in key-value form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#parameters GlueTable#parameters}
  */
  readonly parameters?: string;
  /**
  * An object that references a schema stored in the AWS Glue Schema Registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#schema_reference GlueTable#schema_reference}
  */
  readonly schemaReference?: GlueTableTableInputStorageDescriptorSchemaReference;
  /**
  * The serialization/deserialization (SerDe) information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#serde_info GlueTable#serde_info}
  */
  readonly serdeInfo?: GlueTableTableInputStorageDescriptorSerdeInfo;
  /**
  * The information about values that appear frequently in a column (skewed values).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#skewed_info GlueTable#skewed_info}
  */
  readonly skewedInfo?: GlueTableTableInputStorageDescriptorSkewedInfo;
  /**
  * A list specifying the sort order of each bucket in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#sort_columns GlueTable#sort_columns}
  */
  readonly sortColumns?: GlueTableTableInputStorageDescriptorSortColumns[] | cdktn.IResolvable;
  /**
  * True if the table data is stored in subdirectories, or False if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#stored_as_sub_directories GlueTable#stored_as_sub_directories}
  */
  readonly storedAsSubDirectories?: boolean | cdktn.IResolvable;
}

export function glueTableTableInputStorageDescriptorToTerraform(struct?: GlueTableTableInputStorageDescriptor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bucketColumns),
    columns: cdktn.listMapper(glueTableTableInputStorageDescriptorColumnsToTerraform, false)(struct!.columns),
    compressed: cdktn.booleanToTerraform(struct!.compressed),
    input_format: cdktn.stringToTerraform(struct!.inputFormat),
    location: cdktn.stringToTerraform(struct!.location),
    number_of_buckets: cdktn.numberToTerraform(struct!.numberOfBuckets),
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
    parameters: cdktn.stringToTerraform(struct!.parameters),
    schema_reference: glueTableTableInputStorageDescriptorSchemaReferenceToTerraform(struct!.schemaReference),
    serde_info: glueTableTableInputStorageDescriptorSerdeInfoToTerraform(struct!.serdeInfo),
    skewed_info: glueTableTableInputStorageDescriptorSkewedInfoToTerraform(struct!.skewedInfo),
    sort_columns: cdktn.listMapper(glueTableTableInputStorageDescriptorSortColumnsToTerraform, false)(struct!.sortColumns),
    stored_as_sub_directories: cdktn.booleanToTerraform(struct!.storedAsSubDirectories),
  }
}


export function glueTableTableInputStorageDescriptorToHclTerraform(struct?: GlueTableTableInputStorageDescriptor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.bucketColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    columns: {
      value: cdktn.listMapperHcl(glueTableTableInputStorageDescriptorColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GlueTableTableInputStorageDescriptorColumnsList",
    },
    compressed: {
      value: cdktn.booleanToHclTerraform(struct!.compressed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format: {
      value: cdktn.stringToHclTerraform(struct!.inputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_buckets: {
      value: cdktn.numberToHclTerraform(struct!.numberOfBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_format: {
      value: cdktn.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_reference: {
      value: glueTableTableInputStorageDescriptorSchemaReferenceToHclTerraform(struct!.schemaReference),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableTableInputStorageDescriptorSchemaReference",
    },
    serde_info: {
      value: glueTableTableInputStorageDescriptorSerdeInfoToHclTerraform(struct!.serdeInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableTableInputStorageDescriptorSerdeInfo",
    },
    skewed_info: {
      value: glueTableTableInputStorageDescriptorSkewedInfoToHclTerraform(struct!.skewedInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableTableInputStorageDescriptorSkewedInfo",
    },
    sort_columns: {
      value: cdktn.listMapperHcl(glueTableTableInputStorageDescriptorSortColumnsToHclTerraform, false)(struct!.sortColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GlueTableTableInputStorageDescriptorSortColumnsList",
    },
    stored_as_sub_directories: {
      value: cdktn.booleanToHclTerraform(struct!.storedAsSubDirectories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableTableInputStorageDescriptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableTableInputStorageDescriptor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketColumns = this._bucketColumns;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._compressed !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressed = this._compressed;
    }
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._numberOfBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfBuckets = this._numberOfBuckets;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._schemaReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaReference = this._schemaReference?.internalValue;
    }
    if (this._serdeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serdeInfo = this._serdeInfo?.internalValue;
    }
    if (this._skewedInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedInfo = this._skewedInfo?.internalValue;
    }
    if (this._sortColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortColumns = this._sortColumns?.internalValue;
    }
    if (this._storedAsSubDirectories !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedAsSubDirectories = this._storedAsSubDirectories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputStorageDescriptor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketColumns = undefined;
      this._columns.internalValue = undefined;
      this._compressed = undefined;
      this._inputFormat = undefined;
      this._location = undefined;
      this._numberOfBuckets = undefined;
      this._outputFormat = undefined;
      this._parameters = undefined;
      this._schemaReference.internalValue = undefined;
      this._serdeInfo.internalValue = undefined;
      this._skewedInfo.internalValue = undefined;
      this._sortColumns.internalValue = undefined;
      this._storedAsSubDirectories = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketColumns = value.bucketColumns;
      this._columns.internalValue = value.columns;
      this._compressed = value.compressed;
      this._inputFormat = value.inputFormat;
      this._location = value.location;
      this._numberOfBuckets = value.numberOfBuckets;
      this._outputFormat = value.outputFormat;
      this._parameters = value.parameters;
      this._schemaReference.internalValue = value.schemaReference;
      this._serdeInfo.internalValue = value.serdeInfo;
      this._skewedInfo.internalValue = value.skewedInfo;
      this._sortColumns.internalValue = value.sortColumns;
      this._storedAsSubDirectories = value.storedAsSubDirectories;
    }
  }

  // bucket_columns - computed: true, optional: true, required: false
  private _bucketColumns?: string[]; 
  public get bucketColumns() {
    return this.getListAttribute('bucket_columns');
  }
  public set bucketColumns(value: string[]) {
    this._bucketColumns = value;
  }
  public resetBucketColumns() {
    this._bucketColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketColumnsInput() {
    return this._bucketColumns;
  }

  // columns - computed: true, optional: true, required: false
  private _columns = new GlueTableTableInputStorageDescriptorColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GlueTableTableInputStorageDescriptorColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // compressed - computed: true, optional: true, required: false
  private _compressed?: boolean | cdktn.IResolvable; 
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }
  public set compressed(value: boolean | cdktn.IResolvable) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed;
  }

  // input_format - computed: true, optional: true, required: false
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // number_of_buckets - computed: true, optional: true, required: false
  private _numberOfBuckets?: number; 
  public get numberOfBuckets() {
    return this.getNumberAttribute('number_of_buckets');
  }
  public set numberOfBuckets(value: number) {
    this._numberOfBuckets = value;
  }
  public resetNumberOfBuckets() {
    this._numberOfBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfBucketsInput() {
    return this._numberOfBuckets;
  }

  // output_format - computed: true, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // schema_reference - computed: true, optional: true, required: false
  private _schemaReference = new GlueTableTableInputStorageDescriptorSchemaReferenceOutputReference(this, "schema_reference");
  public get schemaReference() {
    return this._schemaReference;
  }
  public putSchemaReference(value: GlueTableTableInputStorageDescriptorSchemaReference) {
    this._schemaReference.internalValue = value;
  }
  public resetSchemaReference() {
    this._schemaReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaReferenceInput() {
    return this._schemaReference.internalValue;
  }

  // serde_info - computed: true, optional: true, required: false
  private _serdeInfo = new GlueTableTableInputStorageDescriptorSerdeInfoOutputReference(this, "serde_info");
  public get serdeInfo() {
    return this._serdeInfo;
  }
  public putSerdeInfo(value: GlueTableTableInputStorageDescriptorSerdeInfo) {
    this._serdeInfo.internalValue = value;
  }
  public resetSerdeInfo() {
    this._serdeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serdeInfoInput() {
    return this._serdeInfo.internalValue;
  }

  // skewed_info - computed: true, optional: true, required: false
  private _skewedInfo = new GlueTableTableInputStorageDescriptorSkewedInfoOutputReference(this, "skewed_info");
  public get skewedInfo() {
    return this._skewedInfo;
  }
  public putSkewedInfo(value: GlueTableTableInputStorageDescriptorSkewedInfo) {
    this._skewedInfo.internalValue = value;
  }
  public resetSkewedInfo() {
    this._skewedInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedInfoInput() {
    return this._skewedInfo.internalValue;
  }

  // sort_columns - computed: true, optional: true, required: false
  private _sortColumns = new GlueTableTableInputStorageDescriptorSortColumnsList(this, "sort_columns", false);
  public get sortColumns() {
    return this._sortColumns;
  }
  public putSortColumns(value: GlueTableTableInputStorageDescriptorSortColumns[] | cdktn.IResolvable) {
    this._sortColumns.internalValue = value;
  }
  public resetSortColumns() {
    this._sortColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortColumnsInput() {
    return this._sortColumns.internalValue;
  }

  // stored_as_sub_directories - computed: true, optional: true, required: false
  private _storedAsSubDirectories?: boolean | cdktn.IResolvable; 
  public get storedAsSubDirectories() {
    return this.getBooleanAttribute('stored_as_sub_directories');
  }
  public set storedAsSubDirectories(value: boolean | cdktn.IResolvable) {
    this._storedAsSubDirectories = value;
  }
  public resetStoredAsSubDirectories() {
    this._storedAsSubDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedAsSubDirectoriesInput() {
    return this._storedAsSubDirectories;
  }
}
export interface GlueTableTableInputTargetTable {
  /**
  * The ID of the Data Catalog in which the table resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#catalog_id GlueTable#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * The name of the catalog database that contains the target table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#database_name GlueTable#database_name}
  */
  readonly databaseName?: string;
  /**
  * The name of the target table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#name GlueTable#name}
  */
  readonly name?: string;
  /**
  * The Region of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#region GlueTable#region}
  */
  readonly region?: string;
}

export function glueTableTableInputTargetTableToTerraform(struct?: GlueTableTableInputTargetTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    name: cdktn.stringToTerraform(struct!.name),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function glueTableTableInputTargetTableToHclTerraform(struct?: GlueTableTableInputTargetTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableTableInputTargetTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableTableInputTargetTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputTargetTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._region = value.region;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface GlueTableTableInputViewDefinitionRepresentations {
  /**
  * The dialect of the view representation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#dialect GlueTable#dialect}
  */
  readonly dialect?: string;
  /**
  * The version of the dialect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#dialect_version GlueTable#dialect_version}
  */
  readonly dialectVersion?: string;
  /**
  * The connection used for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#validation_connection GlueTable#validation_connection}
  */
  readonly validationConnection?: string;
  /**
  * The expanded text of the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#view_expanded_text GlueTable#view_expanded_text}
  */
  readonly viewExpandedText?: string;
  /**
  * The original text of the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#view_original_text GlueTable#view_original_text}
  */
  readonly viewOriginalText?: string;
}

export function glueTableTableInputViewDefinitionRepresentationsToTerraform(struct?: GlueTableTableInputViewDefinitionRepresentations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dialect: cdktn.stringToTerraform(struct!.dialect),
    dialect_version: cdktn.stringToTerraform(struct!.dialectVersion),
    validation_connection: cdktn.stringToTerraform(struct!.validationConnection),
    view_expanded_text: cdktn.stringToTerraform(struct!.viewExpandedText),
    view_original_text: cdktn.stringToTerraform(struct!.viewOriginalText),
  }
}


export function glueTableTableInputViewDefinitionRepresentationsToHclTerraform(struct?: GlueTableTableInputViewDefinitionRepresentations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dialect: {
      value: cdktn.stringToHclTerraform(struct!.dialect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dialect_version: {
      value: cdktn.stringToHclTerraform(struct!.dialectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_connection: {
      value: cdktn.stringToHclTerraform(struct!.validationConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_expanded_text: {
      value: cdktn.stringToHclTerraform(struct!.viewExpandedText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_original_text: {
      value: cdktn.stringToHclTerraform(struct!.viewOriginalText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableTableInputViewDefinitionRepresentationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueTableTableInputViewDefinitionRepresentations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dialect !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialect = this._dialect;
    }
    if (this._dialectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialectVersion = this._dialectVersion;
    }
    if (this._validationConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationConnection = this._validationConnection;
    }
    if (this._viewExpandedText !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewExpandedText = this._viewExpandedText;
    }
    if (this._viewOriginalText !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewOriginalText = this._viewOriginalText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputViewDefinitionRepresentations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dialect = undefined;
      this._dialectVersion = undefined;
      this._validationConnection = undefined;
      this._viewExpandedText = undefined;
      this._viewOriginalText = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dialect = value.dialect;
      this._dialectVersion = value.dialectVersion;
      this._validationConnection = value.validationConnection;
      this._viewExpandedText = value.viewExpandedText;
      this._viewOriginalText = value.viewOriginalText;
    }
  }

  // dialect - computed: true, optional: true, required: false
  private _dialect?: string; 
  public get dialect() {
    return this.getStringAttribute('dialect');
  }
  public set dialect(value: string) {
    this._dialect = value;
  }
  public resetDialect() {
    this._dialect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialectInput() {
    return this._dialect;
  }

  // dialect_version - computed: true, optional: true, required: false
  private _dialectVersion?: string; 
  public get dialectVersion() {
    return this.getStringAttribute('dialect_version');
  }
  public set dialectVersion(value: string) {
    this._dialectVersion = value;
  }
  public resetDialectVersion() {
    this._dialectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialectVersionInput() {
    return this._dialectVersion;
  }

  // validation_connection - computed: true, optional: true, required: false
  private _validationConnection?: string; 
  public get validationConnection() {
    return this.getStringAttribute('validation_connection');
  }
  public set validationConnection(value: string) {
    this._validationConnection = value;
  }
  public resetValidationConnection() {
    this._validationConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationConnectionInput() {
    return this._validationConnection;
  }

  // view_expanded_text - computed: true, optional: true, required: false
  private _viewExpandedText?: string; 
  public get viewExpandedText() {
    return this.getStringAttribute('view_expanded_text');
  }
  public set viewExpandedText(value: string) {
    this._viewExpandedText = value;
  }
  public resetViewExpandedText() {
    this._viewExpandedText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewExpandedTextInput() {
    return this._viewExpandedText;
  }

  // view_original_text - computed: true, optional: true, required: false
  private _viewOriginalText?: string; 
  public get viewOriginalText() {
    return this.getStringAttribute('view_original_text');
  }
  public set viewOriginalText(value: string) {
    this._viewOriginalText = value;
  }
  public resetViewOriginalText() {
    this._viewOriginalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOriginalTextInput() {
    return this._viewOriginalText;
  }
}

export class GlueTableTableInputViewDefinitionRepresentationsList extends cdktn.ComplexList {
  public internalValue? : GlueTableTableInputViewDefinitionRepresentations[] | cdktn.IResolvable

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
  public get(index: number): GlueTableTableInputViewDefinitionRepresentationsOutputReference {
    return new GlueTableTableInputViewDefinitionRepresentationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueTableTableInputViewDefinition {
  /**
  * The definer of the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#definer GlueTable#definer}
  */
  readonly definer?: string;
  /**
  * Indicates whether the view is protected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#is_protected GlueTable#is_protected}
  */
  readonly isProtected?: boolean | cdktn.IResolvable;
  /**
  * The representations of the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#representations GlueTable#representations}
  */
  readonly representations?: GlueTableTableInputViewDefinitionRepresentations[] | cdktn.IResolvable;
  /**
  * The sub-objects of the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#sub_objects GlueTable#sub_objects}
  */
  readonly subObjects?: string[];
}

export function glueTableTableInputViewDefinitionToTerraform(struct?: GlueTableTableInputViewDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definer: cdktn.stringToTerraform(struct!.definer),
    is_protected: cdktn.booleanToTerraform(struct!.isProtected),
    representations: cdktn.listMapper(glueTableTableInputViewDefinitionRepresentationsToTerraform, false)(struct!.representations),
    sub_objects: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subObjects),
  }
}


export function glueTableTableInputViewDefinitionToHclTerraform(struct?: GlueTableTableInputViewDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definer: {
      value: cdktn.stringToHclTerraform(struct!.definer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_protected: {
      value: cdktn.booleanToHclTerraform(struct!.isProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    representations: {
      value: cdktn.listMapperHcl(glueTableTableInputViewDefinitionRepresentationsToHclTerraform, false)(struct!.representations),
      isBlock: true,
      type: "list",
      storageClassType: "GlueTableTableInputViewDefinitionRepresentationsList",
    },
    sub_objects: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subObjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableTableInputViewDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableTableInputViewDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definer !== undefined) {
      hasAnyValues = true;
      internalValueResult.definer = this._definer;
    }
    if (this._isProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isProtected = this._isProtected;
    }
    if (this._representations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.representations = this._representations?.internalValue;
    }
    if (this._subObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.subObjects = this._subObjects;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInputViewDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definer = undefined;
      this._isProtected = undefined;
      this._representations.internalValue = undefined;
      this._subObjects = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definer = value.definer;
      this._isProtected = value.isProtected;
      this._representations.internalValue = value.representations;
      this._subObjects = value.subObjects;
    }
  }

  // definer - computed: true, optional: true, required: false
  private _definer?: string; 
  public get definer() {
    return this.getStringAttribute('definer');
  }
  public set definer(value: string) {
    this._definer = value;
  }
  public resetDefiner() {
    this._definer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definerInput() {
    return this._definer;
  }

  // is_protected - computed: true, optional: true, required: false
  private _isProtected?: boolean | cdktn.IResolvable; 
  public get isProtected() {
    return this.getBooleanAttribute('is_protected');
  }
  public set isProtected(value: boolean | cdktn.IResolvable) {
    this._isProtected = value;
  }
  public resetIsProtected() {
    this._isProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProtectedInput() {
    return this._isProtected;
  }

  // representations - computed: true, optional: true, required: false
  private _representations = new GlueTableTableInputViewDefinitionRepresentationsList(this, "representations", false);
  public get representations() {
    return this._representations;
  }
  public putRepresentations(value: GlueTableTableInputViewDefinitionRepresentations[] | cdktn.IResolvable) {
    this._representations.internalValue = value;
  }
  public resetRepresentations() {
    this._representations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get representationsInput() {
    return this._representations.internalValue;
  }

  // sub_objects - computed: true, optional: true, required: false
  private _subObjects?: string[]; 
  public get subObjects() {
    return this.getListAttribute('sub_objects');
  }
  public set subObjects(value: string[]) {
    this._subObjects = value;
  }
  public resetSubObjects() {
    this._subObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subObjectsInput() {
    return this._subObjects;
  }
}
export interface GlueTableTableInput {
  /**
  * A description of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#description GlueTable#description}
  */
  readonly description?: string;
  /**
  * The table name. For Hive compatibility, this is folded to lowercase when it is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#name GlueTable#name}
  */
  readonly name?: string;
  /**
  * The table owner. Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#owner GlueTable#owner}
  */
  readonly owner?: string;
  /**
  * These key-value pairs define properties associated with the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#parameters GlueTable#parameters}
  */
  readonly parameters?: string;
  /**
  * A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#partition_keys GlueTable#partition_keys}
  */
  readonly partitionKeys?: GlueTableTableInputPartitionKeys[] | cdktn.IResolvable;
  /**
  * The retention time for this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#retention GlueTable#retention}
  */
  readonly retention?: number;
  /**
  * A storage descriptor containing information about the physical storage of this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#storage_descriptor GlueTable#storage_descriptor}
  */
  readonly storageDescriptor?: GlueTableTableInputStorageDescriptor;
  /**
  * The type of this table. AWS Glue will create tables with the EXTERNAL_TABLE type. Other services, such as Athena, may create tables with additional table types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#table_type GlueTable#table_type}
  */
  readonly tableType?: string;
  /**
  * A TableIdentifier structure that describes a target table for resource linking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#target_table GlueTable#target_table}
  */
  readonly targetTable?: GlueTableTableInputTargetTable;
  /**
  * The view definition for the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#view_definition GlueTable#view_definition}
  */
  readonly viewDefinition?: GlueTableTableInputViewDefinition;
  /**
  * Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#view_expanded_text GlueTable#view_expanded_text}
  */
  readonly viewExpandedText?: string;
  /**
  * Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#view_original_text GlueTable#view_original_text}
  */
  readonly viewOriginalText?: string;
}

export function glueTableTableInputToTerraform(struct?: GlueTableTableInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    owner: cdktn.stringToTerraform(struct!.owner),
    parameters: cdktn.stringToTerraform(struct!.parameters),
    partition_keys: cdktn.listMapper(glueTableTableInputPartitionKeysToTerraform, false)(struct!.partitionKeys),
    retention: cdktn.numberToTerraform(struct!.retention),
    storage_descriptor: glueTableTableInputStorageDescriptorToTerraform(struct!.storageDescriptor),
    table_type: cdktn.stringToTerraform(struct!.tableType),
    target_table: glueTableTableInputTargetTableToTerraform(struct!.targetTable),
    view_definition: glueTableTableInputViewDefinitionToTerraform(struct!.viewDefinition),
    view_expanded_text: cdktn.stringToTerraform(struct!.viewExpandedText),
    view_original_text: cdktn.stringToTerraform(struct!.viewOriginalText),
  }
}


export function glueTableTableInputToHclTerraform(struct?: GlueTableTableInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_keys: {
      value: cdktn.listMapperHcl(glueTableTableInputPartitionKeysToHclTerraform, false)(struct!.partitionKeys),
      isBlock: true,
      type: "list",
      storageClassType: "GlueTableTableInputPartitionKeysList",
    },
    retention: {
      value: cdktn.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_descriptor: {
      value: glueTableTableInputStorageDescriptorToHclTerraform(struct!.storageDescriptor),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableTableInputStorageDescriptor",
    },
    table_type: {
      value: cdktn.stringToHclTerraform(struct!.tableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_table: {
      value: glueTableTableInputTargetTableToHclTerraform(struct!.targetTable),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableTableInputTargetTable",
    },
    view_definition: {
      value: glueTableTableInputViewDefinitionToHclTerraform(struct!.viewDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueTableTableInputViewDefinition",
    },
    view_expanded_text: {
      value: cdktn.stringToHclTerraform(struct!.viewExpandedText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_original_text: {
      value: cdktn.stringToHclTerraform(struct!.viewOriginalText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueTableTableInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueTableTableInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._partitionKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKeys = this._partitionKeys?.internalValue;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._storageDescriptor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDescriptor = this._storageDescriptor?.internalValue;
    }
    if (this._tableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableType = this._tableType;
    }
    if (this._targetTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTable = this._targetTable?.internalValue;
    }
    if (this._viewDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewDefinition = this._viewDefinition?.internalValue;
    }
    if (this._viewExpandedText !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewExpandedText = this._viewExpandedText;
    }
    if (this._viewOriginalText !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewOriginalText = this._viewOriginalText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueTableTableInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._parameters = undefined;
      this._partitionKeys.internalValue = undefined;
      this._retention = undefined;
      this._storageDescriptor.internalValue = undefined;
      this._tableType = undefined;
      this._targetTable.internalValue = undefined;
      this._viewDefinition.internalValue = undefined;
      this._viewExpandedText = undefined;
      this._viewOriginalText = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._owner = value.owner;
      this._parameters = value.parameters;
      this._partitionKeys.internalValue = value.partitionKeys;
      this._retention = value.retention;
      this._storageDescriptor.internalValue = value.storageDescriptor;
      this._tableType = value.tableType;
      this._targetTable.internalValue = value.targetTable;
      this._viewDefinition.internalValue = value.viewDefinition;
      this._viewExpandedText = value.viewExpandedText;
      this._viewOriginalText = value.viewOriginalText;
    }
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

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // partition_keys - computed: true, optional: true, required: false
  private _partitionKeys = new GlueTableTableInputPartitionKeysList(this, "partition_keys", false);
  public get partitionKeys() {
    return this._partitionKeys;
  }
  public putPartitionKeys(value: GlueTableTableInputPartitionKeys[] | cdktn.IResolvable) {
    this._partitionKeys.internalValue = value;
  }
  public resetPartitionKeys() {
    this._partitionKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeysInput() {
    return this._partitionKeys.internalValue;
  }

  // retention - computed: true, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // storage_descriptor - computed: true, optional: true, required: false
  private _storageDescriptor = new GlueTableTableInputStorageDescriptorOutputReference(this, "storage_descriptor");
  public get storageDescriptor() {
    return this._storageDescriptor;
  }
  public putStorageDescriptor(value: GlueTableTableInputStorageDescriptor) {
    this._storageDescriptor.internalValue = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor.internalValue;
  }

  // table_type - computed: true, optional: true, required: false
  private _tableType?: string; 
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
  public set tableType(value: string) {
    this._tableType = value;
  }
  public resetTableType() {
    this._tableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypeInput() {
    return this._tableType;
  }

  // target_table - computed: true, optional: true, required: false
  private _targetTable = new GlueTableTableInputTargetTableOutputReference(this, "target_table");
  public get targetTable() {
    return this._targetTable;
  }
  public putTargetTable(value: GlueTableTableInputTargetTable) {
    this._targetTable.internalValue = value;
  }
  public resetTargetTable() {
    this._targetTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTableInput() {
    return this._targetTable.internalValue;
  }

  // view_definition - computed: true, optional: true, required: false
  private _viewDefinition = new GlueTableTableInputViewDefinitionOutputReference(this, "view_definition");
  public get viewDefinition() {
    return this._viewDefinition;
  }
  public putViewDefinition(value: GlueTableTableInputViewDefinition) {
    this._viewDefinition.internalValue = value;
  }
  public resetViewDefinition() {
    this._viewDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewDefinitionInput() {
    return this._viewDefinition.internalValue;
  }

  // view_expanded_text - computed: true, optional: true, required: false
  private _viewExpandedText?: string; 
  public get viewExpandedText() {
    return this.getStringAttribute('view_expanded_text');
  }
  public set viewExpandedText(value: string) {
    this._viewExpandedText = value;
  }
  public resetViewExpandedText() {
    this._viewExpandedText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewExpandedTextInput() {
    return this._viewExpandedText;
  }

  // view_original_text - computed: true, optional: true, required: false
  private _viewOriginalText?: string; 
  public get viewOriginalText() {
    return this.getStringAttribute('view_original_text');
  }
  public set viewOriginalText(value: string) {
    this._viewOriginalText = value;
  }
  public resetViewOriginalText() {
    this._viewOriginalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOriginalTextInput() {
    return this._viewOriginalText;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table awscc_glue_table}
*/
export class GlueTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GlueTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueTable to import
  * @param importFromId The id of the existing GlueTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/glue_table awscc_glue_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueTableConfig
  */
  public constructor(scope: Construct, id: string, config: GlueTableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_table',
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
    this._catalogId = config.catalogId;
    this._databaseName = config.databaseName;
    this._name = config.name;
    this._openTableFormatInput.internalValue = config.openTableFormatInput;
    this._tableInput.internalValue = config.tableInput;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // open_table_format_input - computed: true, optional: true, required: false
  private _openTableFormatInput = new GlueTableOpenTableFormatInputOutputReference(this, "open_table_format_input");
  public get openTableFormatInput() {
    return this._openTableFormatInput;
  }
  public putOpenTableFormatInput(value: GlueTableOpenTableFormatInput) {
    this._openTableFormatInput.internalValue = value;
  }
  public resetOpenTableFormatInput() {
    this._openTableFormatInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTableFormatInputInput() {
    return this._openTableFormatInput.internalValue;
  }

  // table_input - computed: true, optional: true, required: false
  private _tableInput = new GlueTableTableInputOutputReference(this, "table_input");
  public get tableInput() {
    return this._tableInput;
  }
  public putTableInput(value: GlueTableTableInput) {
    this._tableInput.internalValue = value;
  }
  public resetTableInput() {
    this._tableInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInputInput() {
    return this._tableInput.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktn.stringToTerraform(this._catalogId),
      database_name: cdktn.stringToTerraform(this._databaseName),
      name: cdktn.stringToTerraform(this._name),
      open_table_format_input: glueTableOpenTableFormatInputToTerraform(this._openTableFormatInput.internalValue),
      table_input: glueTableTableInputToTerraform(this._tableInput.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktn.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktn.stringToHclTerraform(this._databaseName),
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
      open_table_format_input: {
        value: glueTableOpenTableFormatInputToHclTerraform(this._openTableFormatInput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueTableOpenTableFormatInput",
      },
      table_input: {
        value: glueTableTableInputToHclTerraform(this._tableInput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueTableTableInput",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
