/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccInvoicingProcurementPortalPreferenceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference#id DataAwsccInvoicingProcurementPortalPreference#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccInvoicingProcurementPortalPreferenceContacts {
}

export function dataAwsccInvoicingProcurementPortalPreferenceContactsToTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceContacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInvoicingProcurementPortalPreferenceContactsToHclTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceContacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccInvoicingProcurementPortalPreferenceContacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInvoicingProcurementPortalPreferenceContacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccInvoicingProcurementPortalPreferenceContactsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference {
    return new DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources {
}

export function dataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesToTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesToHclTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // einvoice_delivery_document_type - computed: true, optional: false, required: false
  public get einvoiceDeliveryDocumentType() {
    return this.getStringAttribute('einvoice_delivery_document_type');
  }

  // purchase_order_data_source_type - computed: true, optional: false, required: false
  public get purchaseOrderDataSourceType() {
    return this.getStringAttribute('purchase_order_data_source_type');
  }
}

export class DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference {
    return new DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference {
}

export function dataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceToTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceToHclTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_testing_method - computed: true, optional: false, required: false
  public get connectionTestingMethod() {
    return this.getStringAttribute('connection_testing_method');
  }

  // einvoice_delivery_activation_date - computed: true, optional: false, required: false
  public get einvoiceDeliveryActivationDate() {
    return this.getStringAttribute('einvoice_delivery_activation_date');
  }

  // einvoice_delivery_attachment_types - computed: true, optional: false, required: false
  public get einvoiceDeliveryAttachmentTypes() {
    return this.getListAttribute('einvoice_delivery_attachment_types');
  }

  // einvoice_delivery_document_types - computed: true, optional: false, required: false
  public get einvoiceDeliveryDocumentTypes() {
    return this.getListAttribute('einvoice_delivery_document_types');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // purchase_order_data_sources - computed: true, optional: false, required: false
  private _purchaseOrderDataSources = new DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList(this, "purchase_order_data_sources", false);
  public get purchaseOrderDataSources() {
    return this._purchaseOrderDataSources;
  }
}
export interface DataAwsccInvoicingProcurementPortalPreferenceSelector {
}

export function dataAwsccInvoicingProcurementPortalPreferenceSelectorToTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInvoicingProcurementPortalPreferenceSelectorToHclTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInvoicingProcurementPortalPreferenceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInvoicingProcurementPortalPreferenceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invoice_unit_arns - computed: true, optional: false, required: false
  public get invoiceUnitArns() {
    return this.getListAttribute('invoice_unit_arns');
  }
}
export interface DataAwsccInvoicingProcurementPortalPreferenceTags {
}

export function dataAwsccInvoicingProcurementPortalPreferenceTagsToTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInvoicingProcurementPortalPreferenceTagsToHclTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccInvoicingProcurementPortalPreferenceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInvoicingProcurementPortalPreferenceTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccInvoicingProcurementPortalPreferenceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference {
    return new DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference {
}

export function dataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceToTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceToHclTerraform(struct?: DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buyer_domain - computed: true, optional: false, required: false
  public get buyerDomain() {
    return this.getStringAttribute('buyer_domain');
  }

  // buyer_identifier - computed: true, optional: false, required: false
  public get buyerIdentifier() {
    return this.getStringAttribute('buyer_identifier');
  }

  // procurement_portal_instance_endpoint - computed: true, optional: false, required: false
  public get procurementPortalInstanceEndpoint() {
    return this.getStringAttribute('procurement_portal_instance_endpoint');
  }

  // procurement_portal_shared_secret - computed: true, optional: false, required: false
  public get procurementPortalSharedSecret() {
    return this.getStringAttribute('procurement_portal_shared_secret');
  }

  // supplier_domain - computed: true, optional: false, required: false
  public get supplierDomain() {
    return this.getStringAttribute('supplier_domain');
  }

  // supplier_identifier - computed: true, optional: false, required: false
  public get supplierIdentifier() {
    return this.getStringAttribute('supplier_identifier');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference}
*/
export class DataAwsccInvoicingProcurementPortalPreference extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_invoicing_procurement_portal_preference";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccInvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccInvoicingProcurementPortalPreference to import
  * @param importFromId The id of the existing DataAwsccInvoicingProcurementPortalPreference that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccInvoicingProcurementPortalPreference to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_invoicing_procurement_portal_preference", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccInvoicingProcurementPortalPreferenceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccInvoicingProcurementPortalPreferenceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_invoicing_procurement_portal_preference',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.102.0',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // buyer_domain - computed: true, optional: false, required: false
  public get buyerDomain() {
    return this.getStringAttribute('buyer_domain');
  }

  // buyer_identifier - computed: true, optional: false, required: false
  public get buyerIdentifier() {
    return this.getStringAttribute('buyer_identifier');
  }

  // contacts - computed: true, optional: false, required: false
  private _contacts = new DataAwsccInvoicingProcurementPortalPreferenceContactsList(this, "contacts", false);
  public get contacts() {
    return this._contacts;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // einvoice_delivery_enabled - computed: true, optional: false, required: false
  public get einvoiceDeliveryEnabled() {
    return this.getBooleanAttribute('einvoice_delivery_enabled');
  }

  // einvoice_delivery_preference - computed: true, optional: false, required: false
  private _einvoiceDeliveryPreference = new DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference(this, "einvoice_delivery_preference");
  public get einvoiceDeliveryPreference() {
    return this._einvoiceDeliveryPreference;
  }

  // einvoice_delivery_preference_status - computed: true, optional: false, required: false
  public get einvoiceDeliveryPreferenceStatus() {
    return this.getStringAttribute('einvoice_delivery_preference_status');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_update_date - computed: true, optional: false, required: false
  public get lastUpdateDate() {
    return this.getStringAttribute('last_update_date');
  }

  // procurement_portal_instance_endpoint - computed: true, optional: false, required: false
  public get procurementPortalInstanceEndpoint() {
    return this.getStringAttribute('procurement_portal_instance_endpoint');
  }

  // procurement_portal_name - computed: true, optional: false, required: false
  public get procurementPortalName() {
    return this.getStringAttribute('procurement_portal_name');
  }

  // procurement_portal_preference_arn - computed: true, optional: false, required: false
  public get procurementPortalPreferenceArn() {
    return this.getStringAttribute('procurement_portal_preference_arn');
  }

  // procurement_portal_shared_secret - computed: true, optional: false, required: false
  public get procurementPortalSharedSecret() {
    return this.getStringAttribute('procurement_portal_shared_secret');
  }

  // purchase_order_retrieval_enabled - computed: true, optional: false, required: false
  public get purchaseOrderRetrievalEnabled() {
    return this.getBooleanAttribute('purchase_order_retrieval_enabled');
  }

  // purchase_order_retrieval_endpoint - computed: true, optional: false, required: false
  public get purchaseOrderRetrievalEndpoint() {
    return this.getStringAttribute('purchase_order_retrieval_endpoint');
  }

  // purchase_order_retrieval_preference_status - computed: true, optional: false, required: false
  public get purchaseOrderRetrievalPreferenceStatus() {
    return this.getStringAttribute('purchase_order_retrieval_preference_status');
  }

  // selector - computed: true, optional: false, required: false
  private _selector = new DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }

  // supplier_domain - computed: true, optional: false, required: false
  public get supplierDomain() {
    return this.getStringAttribute('supplier_domain');
  }

  // supplier_identifier - computed: true, optional: false, required: false
  public get supplierIdentifier() {
    return this.getStringAttribute('supplier_identifier');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccInvoicingProcurementPortalPreferenceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // test_env_preference - computed: true, optional: false, required: false
  private _testEnvPreference = new DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference(this, "test_env_preference");
  public get testEnvPreference() {
    return this._testEnvPreference;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
