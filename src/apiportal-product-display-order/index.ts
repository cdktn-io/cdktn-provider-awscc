/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiportalProductDisplayOrderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Sectioned arrangement of ProductApiPage ARNs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#contents ApiportalProductDisplayOrder#contents}
  */
  readonly contents?: ApiportalProductDisplayOrderContents[] | cdktn.IResolvable;
  /**
  * ARN of the ProductPage rendered as the overview/landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#overview_page_arn ApiportalProductDisplayOrder#overview_page_arn}
  */
  readonly overviewPageArn?: string;
  /**
  * The identifier of the parent Product. Singleton key for this CFN type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_id ApiportalProductDisplayOrder#product_id}
  */
  readonly productId: string;
  /**
  * Top-level ProductPage ARNs in display order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_page_arns ApiportalProductDisplayOrder#product_page_arns}
  */
  readonly productPageArns?: string[];
}
export interface ApiportalProductDisplayOrderContents {
  /**
  * Ordered ProductApiPage ARNs shown under this section. Required; use an empty list for a placeholder section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_api_page_arns ApiportalProductDisplayOrder#product_api_page_arns}
  */
  readonly productApiPageArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#section_name ApiportalProductDisplayOrder#section_name}
  */
  readonly sectionName?: string;
}

export function apiportalProductDisplayOrderContentsToTerraform(struct?: ApiportalProductDisplayOrderContents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    product_api_page_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.productApiPageArns),
    section_name: cdktn.stringToTerraform(struct!.sectionName),
  }
}


export function apiportalProductDisplayOrderContentsToHclTerraform(struct?: ApiportalProductDisplayOrderContents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    product_api_page_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.productApiPageArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktn.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiportalProductDisplayOrderContentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiportalProductDisplayOrderContents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._productApiPageArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.productApiPageArns = this._productApiPageArns;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiportalProductDisplayOrderContents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._productApiPageArns = undefined;
      this._sectionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._productApiPageArns = value.productApiPageArns;
      this._sectionName = value.sectionName;
    }
  }

  // product_api_page_arns - computed: true, optional: true, required: false
  private _productApiPageArns?: string[]; 
  public get productApiPageArns() {
    return this.getListAttribute('product_api_page_arns');
  }
  public set productApiPageArns(value: string[]) {
    this._productApiPageArns = value;
  }
  public resetProductApiPageArns() {
    this._productApiPageArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productApiPageArnsInput() {
    return this._productApiPageArns;
  }

  // section_name - computed: true, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }
}

export class ApiportalProductDisplayOrderContentsList extends cdktn.ComplexList {
  public internalValue? : ApiportalProductDisplayOrderContents[] | cdktn.IResolvable

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
  public get(index: number): ApiportalProductDisplayOrderContentsOutputReference {
    return new ApiportalProductDisplayOrderContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order awscc_apiportal_product_display_order}
*/
export class ApiportalProductDisplayOrder extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apiportal_product_display_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiportalProductDisplayOrder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiportalProductDisplayOrder to import
  * @param importFromId The id of the existing ApiportalProductDisplayOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiportalProductDisplayOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apiportal_product_display_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order awscc_apiportal_product_display_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiportalProductDisplayOrderConfig
  */
  public constructor(scope: Construct, id: string, config: ApiportalProductDisplayOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apiportal_product_display_order',
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
    this._contents.internalValue = config.contents;
    this._overviewPageArn = config.overviewPageArn;
    this._productId = config.productId;
    this._productPageArns = config.productPageArns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: true, required: false
  private _contents = new ApiportalProductDisplayOrderContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: ApiportalProductDisplayOrderContents[] | cdktn.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // overview_page_arn - computed: true, optional: true, required: false
  private _overviewPageArn?: string; 
  public get overviewPageArn() {
    return this.getStringAttribute('overview_page_arn');
  }
  public set overviewPageArn(value: string) {
    this._overviewPageArn = value;
  }
  public resetOverviewPageArn() {
    this._overviewPageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overviewPageArnInput() {
    return this._overviewPageArn;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // product_page_arns - computed: true, optional: true, required: false
  private _productPageArns?: string[]; 
  public get productPageArns() {
    return this.getListAttribute('product_page_arns');
  }
  public set productPageArns(value: string[]) {
    this._productPageArns = value;
  }
  public resetProductPageArns() {
    this._productPageArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productPageArnsInput() {
    return this._productPageArns;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contents: cdktn.listMapper(apiportalProductDisplayOrderContentsToTerraform, false)(this._contents.internalValue),
      overview_page_arn: cdktn.stringToTerraform(this._overviewPageArn),
      product_id: cdktn.stringToTerraform(this._productId),
      product_page_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._productPageArns),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contents: {
        value: cdktn.listMapperHcl(apiportalProductDisplayOrderContentsToHclTerraform, false)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiportalProductDisplayOrderContentsList",
      },
      overview_page_arn: {
        value: cdktn.stringToHclTerraform(this._overviewPageArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktn.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_page_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._productPageArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
