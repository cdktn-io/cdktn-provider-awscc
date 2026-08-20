/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearch_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OpensearchDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * The type of data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearch_data_source#data_source_type OpensearchDataSource#data_source_type}
  */
  readonly dataSourceType: OpensearchDataSourceDataSourceType;
  /**
  * A description of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearch_data_source#description OpensearchDataSource#description}
  */
  readonly description?: string;
  /**
  * The name of the OpenSearch Service domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearch_data_source#domain_name OpensearchDataSource#domain_name}
  */
  readonly domainName: string;
  /**
  * The name of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearch_data_source#name OpensearchDataSource#name}
  */
  readonly name: string;
}
export interface OpensearchDataSourceDataSourceTypeS3GlueDataCatalog {
  /**
  * The ARN of the IAM role that grants OpenSearch Service permission to access the Glue Data Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearch_data_source#role_arn OpensearchDataSource#role_arn}
  */
  readonly roleArn?: string;
}

export function opensearchDataSourceDataSourceTypeS3GlueDataCatalogToTerraform(struct?: OpensearchDataSourceDataSourceTypeS3GlueDataCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function opensearchDataSourceDataSourceTypeS3GlueDataCatalogToHclTerraform(struct?: OpensearchDataSourceDataSourceTypeS3GlueDataCatalog | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchDataSourceDataSourceTypeS3GlueDataCatalog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchDataSourceDataSourceTypeS3GlueDataCatalog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface OpensearchDataSourceDataSourceType {
  /**
  * Configuration for an S3 Glue Data Catalog data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearch_data_source#s3_glue_data_catalog OpensearchDataSource#s3_glue_data_catalog}
  */
  readonly s3GlueDataCatalog?: OpensearchDataSourceDataSourceTypeS3GlueDataCatalog;
}

export function opensearchDataSourceDataSourceTypeToTerraform(struct?: OpensearchDataSourceDataSourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_glue_data_catalog: opensearchDataSourceDataSourceTypeS3GlueDataCatalogToTerraform(struct!.s3GlueDataCatalog),
  }
}


export function opensearchDataSourceDataSourceTypeToHclTerraform(struct?: OpensearchDataSourceDataSourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_glue_data_catalog: {
      value: opensearchDataSourceDataSourceTypeS3GlueDataCatalogToHclTerraform(struct!.s3GlueDataCatalog),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchDataSourceDataSourceTypeS3GlueDataCatalog",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchDataSourceDataSourceTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchDataSourceDataSourceType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3GlueDataCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3GlueDataCatalog = this._s3GlueDataCatalog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchDataSourceDataSourceType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3GlueDataCatalog.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3GlueDataCatalog.internalValue = value.s3GlueDataCatalog;
    }
  }

  // s3_glue_data_catalog - computed: true, optional: true, required: false
  private _s3GlueDataCatalog = new OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference(this, "s3_glue_data_catalog");
  public get s3GlueDataCatalog() {
    return this._s3GlueDataCatalog;
  }
  public putS3GlueDataCatalog(value: OpensearchDataSourceDataSourceTypeS3GlueDataCatalog) {
    this._s3GlueDataCatalog.internalValue = value;
  }
  public resetS3GlueDataCatalog() {
    this._s3GlueDataCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3GlueDataCatalogInput() {
    return this._s3GlueDataCatalog.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearch_data_source awscc_opensearch_data_source}
*/
export class OpensearchDataSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_opensearch_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OpensearchDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchDataSource to import
  * @param importFromId The id of the existing OpensearchDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearch_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearch_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearch_data_source awscc_opensearch_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_opensearch_data_source',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.98.0',
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
    this._dataSourceType.internalValue = config.dataSourceType;
    this._description = config.description;
    this._domainName = config.domainName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_source_type - computed: false, optional: false, required: true
  private _dataSourceType = new OpensearchDataSourceDataSourceTypeOutputReference(this, "data_source_type");
  public get dataSourceType() {
    return this._dataSourceType;
  }
  public putDataSourceType(value: OpensearchDataSourceDataSourceType) {
    this._dataSourceType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType.internalValue;
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

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_type: opensearchDataSourceDataSourceTypeToTerraform(this._dataSourceType.internalValue),
      description: cdktn.stringToTerraform(this._description),
      domain_name: cdktn.stringToTerraform(this._domainName),
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source_type: {
        value: opensearchDataSourceDataSourceTypeToHclTerraform(this._dataSourceType.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchDataSourceDataSourceType",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
