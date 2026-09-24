# `invoicingProcurementPortalPreference` Submodule <a name="`invoicingProcurementPortalPreference` Submodule" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InvoicingProcurementPortalPreference <a name="InvoicingProcurementPortalPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreference;

InvoicingProcurementPortalPreference.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .buyerDomain(java.lang.String)
    .buyerIdentifier(java.lang.String)
    .contacts(IResolvable|java.util.List<InvoicingProcurementPortalPreferenceContacts>)
    .einvoiceDeliveryEnabled(java.lang.Boolean|IResolvable)
    .procurementPortalName(java.lang.String)
    .purchaseOrderRetrievalEnabled(java.lang.Boolean|IResolvable)
    .supplierDomain(java.lang.String)
    .supplierIdentifier(java.lang.String)
//  .einvoiceDeliveryPreference(InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference)
//  .procurementPortalInstanceEndpoint(java.lang.String)
//  .procurementPortalSharedSecret(java.lang.String)
//  .selector(InvoicingProcurementPortalPreferenceSelector)
//  .tags(IResolvable|java.util.List<InvoicingProcurementPortalPreferenceTags>)
//  .testEnvPreference(InvoicingProcurementPortalPreferenceTestEnvPreference)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.buyerDomain">buyerDomain</a></code> | <code>java.lang.String</code> | The domain identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.buyerIdentifier">buyerIdentifier</a></code> | <code>java.lang.String</code> | The unique identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.contacts">contacts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>></code> | List of contact information for portal administrators and technical contacts. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.einvoiceDeliveryEnabled">einvoiceDeliveryEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether e-invoice delivery is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalName">procurementPortalName</a></code> | <code>java.lang.String</code> | The name of the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.purchaseOrderRetrievalEnabled">purchaseOrderRetrievalEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether purchase order retrieval is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.supplierDomain">supplierDomain</a></code> | <code>java.lang.String</code> | The domain identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.supplierIdentifier">supplierIdentifier</a></code> | <code>java.lang.String</code> | The unique identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.einvoiceDeliveryPreference">einvoiceDeliveryPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | Specifies the preferences for e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>java.lang.String</code> | The endpoint URL where e-invoices are delivered to the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>java.lang.String</code> | The shared secret or authentication credential used for secure communication with the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.selector">selector</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | Specifies criteria for selecting which invoices should be processed. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>></code> | The tags associated with this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.testEnvPreference">testEnvPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | Configuration settings for the test environment of the procurement portal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `buyerDomain`<sup>Required</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.buyerDomain"></a>

- *Type:* java.lang.String

The domain identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

##### `buyerIdentifier`<sup>Required</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.buyerIdentifier"></a>

- *Type:* java.lang.String

The unique identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.contacts"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>>

List of contact information for portal administrators and technical contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#contacts InvoicingProcurementPortalPreference#contacts}

---

##### `einvoiceDeliveryEnabled`<sup>Required</sup> <a name="einvoiceDeliveryEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.einvoiceDeliveryEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether e-invoice delivery is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_enabled InvoicingProcurementPortalPreference#einvoice_delivery_enabled}

---

##### `procurementPortalName`<sup>Required</sup> <a name="procurementPortalName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalName"></a>

- *Type:* java.lang.String

The name of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_name InvoicingProcurementPortalPreference#procurement_portal_name}

---

##### `purchaseOrderRetrievalEnabled`<sup>Required</sup> <a name="purchaseOrderRetrievalEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.purchaseOrderRetrievalEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether purchase order retrieval is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_retrieval_enabled InvoicingProcurementPortalPreference#purchase_order_retrieval_enabled}

---

##### `supplierDomain`<sup>Required</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.supplierDomain"></a>

- *Type:* java.lang.String

The domain identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

##### `supplierIdentifier`<sup>Required</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.supplierIdentifier"></a>

- *Type:* java.lang.String

The unique identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

##### `einvoiceDeliveryPreference`<sup>Optional</sup> <a name="einvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.einvoiceDeliveryPreference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

Specifies the preferences for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_preference InvoicingProcurementPortalPreference#einvoice_delivery_preference}

---

##### `procurementPortalInstanceEndpoint`<sup>Optional</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalInstanceEndpoint"></a>

- *Type:* java.lang.String

The endpoint URL where e-invoices are delivered to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

##### `procurementPortalSharedSecret`<sup>Optional</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalSharedSecret"></a>

- *Type:* java.lang.String

The shared secret or authentication credential used for secure communication with the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.selector"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

Specifies criteria for selecting which invoices should be processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#selector InvoicingProcurementPortalPreference#selector}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>>

The tags associated with this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#tags InvoicingProcurementPortalPreference#tags}

---

##### `testEnvPreference`<sup>Optional</sup> <a name="testEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.testEnvPreference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

Configuration settings for the test environment of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#test_env_preference InvoicingProcurementPortalPreference#test_env_preference}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts">putContacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference">putEinvoiceDeliveryPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference">putTestEnvPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetEinvoiceDeliveryPreference">resetEinvoiceDeliveryPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalInstanceEndpoint">resetProcurementPortalInstanceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalSharedSecret">resetProcurementPortalSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTestEnvPreference">resetTestEnvPreference</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContacts` <a name="putContacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts"></a>

```java
public void putContacts(IResolvable|java.util.List<InvoicingProcurementPortalPreferenceContacts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>>

---

##### `putEinvoiceDeliveryPreference` <a name="putEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference"></a>

```java
public void putEinvoiceDeliveryPreference(InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---

##### `putSelector` <a name="putSelector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector"></a>

```java
public void putSelector(InvoicingProcurementPortalPreferenceSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<InvoicingProcurementPortalPreferenceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>>

---

##### `putTestEnvPreference` <a name="putTestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference"></a>

```java
public void putTestEnvPreference(InvoicingProcurementPortalPreferenceTestEnvPreference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---

##### `resetEinvoiceDeliveryPreference` <a name="resetEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetEinvoiceDeliveryPreference"></a>

```java
public void resetEinvoiceDeliveryPreference()
```

##### `resetProcurementPortalInstanceEndpoint` <a name="resetProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalInstanceEndpoint"></a>

```java
public void resetProcurementPortalInstanceEndpoint()
```

##### `resetProcurementPortalSharedSecret` <a name="resetProcurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalSharedSecret"></a>

```java
public void resetProcurementPortalSharedSecret()
```

##### `resetSelector` <a name="resetSelector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetSelector"></a>

```java
public void resetSelector()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTags"></a>

```java
public void resetTags()
```

##### `resetTestEnvPreference` <a name="resetTestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTestEnvPreference"></a>

```java
public void resetTestEnvPreference()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a InvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreference;

InvoicingProcurementPortalPreference.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreference;

InvoicingProcurementPortalPreference.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreference;

InvoicingProcurementPortalPreference.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreference;

InvoicingProcurementPortalPreference.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),InvoicingProcurementPortalPreference.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a InvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the InvoicingProcurementPortalPreference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing InvoicingProcurementPortalPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the InvoicingProcurementPortalPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contacts">contacts</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList">InvoicingProcurementPortalPreferenceContactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.createDate">createDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference">einvoiceDeliveryPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus">einvoiceDeliveryPreferenceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lastUpdateDate">lastUpdateDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn">procurementPortalPreferenceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint">purchaseOrderRetrievalEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus">purchaseOrderRetrievalPreferenceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selector">selector</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference">InvoicingProcurementPortalPreferenceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList">InvoicingProcurementPortalPreferenceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreference">testEnvPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomainInput">buyerDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifierInput">buyerIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contactsInput">contactsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabledInput">einvoiceDeliveryEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceInput">einvoiceDeliveryPreferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpointInput">procurementPortalInstanceEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalNameInput">procurementPortalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecretInput">procurementPortalSharedSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabledInput">purchaseOrderRetrievalEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selectorInput">selectorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomainInput">supplierDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifierInput">supplierIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreferenceInput">testEnvPreferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomain">buyerDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifier">buyerIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled">einvoiceDeliveryEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalName">procurementPortalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled">purchaseOrderRetrievalEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomain">supplierDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifier">supplierIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contacts"></a>

```java
public InvoicingProcurementPortalPreferenceContactsList getContacts();
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList">InvoicingProcurementPortalPreferenceContactsList</a>

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.createDate"></a>

```java
public java.lang.String getCreateDate();
```

- *Type:* java.lang.String

---

##### `einvoiceDeliveryPreference`<sup>Required</sup> <a name="einvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference"></a>

```java
public InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference getEinvoiceDeliveryPreference();
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a>

---

##### `einvoiceDeliveryPreferenceStatus`<sup>Required</sup> <a name="einvoiceDeliveryPreferenceStatus" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus"></a>

```java
public java.lang.String getEinvoiceDeliveryPreferenceStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdateDate`<sup>Required</sup> <a name="lastUpdateDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lastUpdateDate"></a>

```java
public java.lang.String getLastUpdateDate();
```

- *Type:* java.lang.String

---

##### `procurementPortalPreferenceArn`<sup>Required</sup> <a name="procurementPortalPreferenceArn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn"></a>

```java
public java.lang.String getProcurementPortalPreferenceArn();
```

- *Type:* java.lang.String

---

##### `purchaseOrderRetrievalEndpoint`<sup>Required</sup> <a name="purchaseOrderRetrievalEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint"></a>

```java
public java.lang.String getPurchaseOrderRetrievalEndpoint();
```

- *Type:* java.lang.String

---

##### `purchaseOrderRetrievalPreferenceStatus`<sup>Required</sup> <a name="purchaseOrderRetrievalPreferenceStatus" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus"></a>

```java
public java.lang.String getPurchaseOrderRetrievalPreferenceStatus();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selector"></a>

```java
public InvoicingProcurementPortalPreferenceSelectorOutputReference getSelector();
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference">InvoicingProcurementPortalPreferenceSelectorOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tags"></a>

```java
public InvoicingProcurementPortalPreferenceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList">InvoicingProcurementPortalPreferenceTagsList</a>

---

##### `testEnvPreference`<sup>Required</sup> <a name="testEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreference"></a>

```java
public InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference getTestEnvPreference();
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `buyerDomainInput`<sup>Optional</sup> <a name="buyerDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomainInput"></a>

```java
public java.lang.String getBuyerDomainInput();
```

- *Type:* java.lang.String

---

##### `buyerIdentifierInput`<sup>Optional</sup> <a name="buyerIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifierInput"></a>

```java
public java.lang.String getBuyerIdentifierInput();
```

- *Type:* java.lang.String

---

##### `contactsInput`<sup>Optional</sup> <a name="contactsInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contactsInput"></a>

```java
public IResolvable|java.util.List<InvoicingProcurementPortalPreferenceContacts> getContactsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>>

---

##### `einvoiceDeliveryEnabledInput`<sup>Optional</sup> <a name="einvoiceDeliveryEnabledInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEinvoiceDeliveryEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `einvoiceDeliveryPreferenceInput`<sup>Optional</sup> <a name="einvoiceDeliveryPreferenceInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceInput"></a>

```java
public IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference getEinvoiceDeliveryPreferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---

##### `procurementPortalInstanceEndpointInput`<sup>Optional</sup> <a name="procurementPortalInstanceEndpointInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpointInput"></a>

```java
public java.lang.String getProcurementPortalInstanceEndpointInput();
```

- *Type:* java.lang.String

---

##### `procurementPortalNameInput`<sup>Optional</sup> <a name="procurementPortalNameInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalNameInput"></a>

```java
public java.lang.String getProcurementPortalNameInput();
```

- *Type:* java.lang.String

---

##### `procurementPortalSharedSecretInput`<sup>Optional</sup> <a name="procurementPortalSharedSecretInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecretInput"></a>

```java
public java.lang.String getProcurementPortalSharedSecretInput();
```

- *Type:* java.lang.String

---

##### `purchaseOrderRetrievalEnabledInput`<sup>Optional</sup> <a name="purchaseOrderRetrievalEnabledInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPurchaseOrderRetrievalEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selectorInput"></a>

```java
public IResolvable|InvoicingProcurementPortalPreferenceSelector getSelectorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---

##### `supplierDomainInput`<sup>Optional</sup> <a name="supplierDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomainInput"></a>

```java
public java.lang.String getSupplierDomainInput();
```

- *Type:* java.lang.String

---

##### `supplierIdentifierInput`<sup>Optional</sup> <a name="supplierIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifierInput"></a>

```java
public java.lang.String getSupplierIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<InvoicingProcurementPortalPreferenceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>>

---

##### `testEnvPreferenceInput`<sup>Optional</sup> <a name="testEnvPreferenceInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreferenceInput"></a>

```java
public IResolvable|InvoicingProcurementPortalPreferenceTestEnvPreference getTestEnvPreferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---

##### `buyerDomain`<sup>Required</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomain"></a>

```java
public java.lang.String getBuyerDomain();
```

- *Type:* java.lang.String

---

##### `buyerIdentifier`<sup>Required</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifier"></a>

```java
public java.lang.String getBuyerIdentifier();
```

- *Type:* java.lang.String

---

##### `einvoiceDeliveryEnabled`<sup>Required</sup> <a name="einvoiceDeliveryEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEinvoiceDeliveryEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `procurementPortalInstanceEndpoint`<sup>Required</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint"></a>

```java
public java.lang.String getProcurementPortalInstanceEndpoint();
```

- *Type:* java.lang.String

---

##### `procurementPortalName`<sup>Required</sup> <a name="procurementPortalName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalName"></a>

```java
public java.lang.String getProcurementPortalName();
```

- *Type:* java.lang.String

---

##### `procurementPortalSharedSecret`<sup>Required</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecret"></a>

```java
public java.lang.String getProcurementPortalSharedSecret();
```

- *Type:* java.lang.String

---

##### `purchaseOrderRetrievalEnabled`<sup>Required</sup> <a name="purchaseOrderRetrievalEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPurchaseOrderRetrievalEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `supplierDomain`<sup>Required</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomain"></a>

```java
public java.lang.String getSupplierDomain();
```

- *Type:* java.lang.String

---

##### `supplierIdentifier`<sup>Required</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifier"></a>

```java
public java.lang.String getSupplierIdentifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### InvoicingProcurementPortalPreferenceConfig <a name="InvoicingProcurementPortalPreferenceConfig" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceConfig;

InvoicingProcurementPortalPreferenceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .buyerDomain(java.lang.String)
    .buyerIdentifier(java.lang.String)
    .contacts(IResolvable|java.util.List<InvoicingProcurementPortalPreferenceContacts>)
    .einvoiceDeliveryEnabled(java.lang.Boolean|IResolvable)
    .procurementPortalName(java.lang.String)
    .purchaseOrderRetrievalEnabled(java.lang.Boolean|IResolvable)
    .supplierDomain(java.lang.String)
    .supplierIdentifier(java.lang.String)
//  .einvoiceDeliveryPreference(InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference)
//  .procurementPortalInstanceEndpoint(java.lang.String)
//  .procurementPortalSharedSecret(java.lang.String)
//  .selector(InvoicingProcurementPortalPreferenceSelector)
//  .tags(IResolvable|java.util.List<InvoicingProcurementPortalPreferenceTags>)
//  .testEnvPreference(InvoicingProcurementPortalPreferenceTestEnvPreference)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerDomain">buyerDomain</a></code> | <code>java.lang.String</code> | The domain identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerIdentifier">buyerIdentifier</a></code> | <code>java.lang.String</code> | The unique identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.contacts">contacts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>></code> | List of contact information for portal administrators and technical contacts. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryEnabled">einvoiceDeliveryEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether e-invoice delivery is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalName">procurementPortalName</a></code> | <code>java.lang.String</code> | The name of the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.purchaseOrderRetrievalEnabled">purchaseOrderRetrievalEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether purchase order retrieval is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierDomain">supplierDomain</a></code> | <code>java.lang.String</code> | The domain identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierIdentifier">supplierIdentifier</a></code> | <code>java.lang.String</code> | The unique identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryPreference">einvoiceDeliveryPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | Specifies the preferences for e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>java.lang.String</code> | The endpoint URL where e-invoices are delivered to the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>java.lang.String</code> | The shared secret or authentication credential used for secure communication with the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.selector">selector</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | Specifies criteria for selecting which invoices should be processed. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>></code> | The tags associated with this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.testEnvPreference">testEnvPreference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | Configuration settings for the test environment of the procurement portal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `buyerDomain`<sup>Required</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerDomain"></a>

```java
public java.lang.String getBuyerDomain();
```

- *Type:* java.lang.String

The domain identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

##### `buyerIdentifier`<sup>Required</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerIdentifier"></a>

```java
public java.lang.String getBuyerIdentifier();
```

- *Type:* java.lang.String

The unique identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.contacts"></a>

```java
public IResolvable|java.util.List<InvoicingProcurementPortalPreferenceContacts> getContacts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>>

List of contact information for portal administrators and technical contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#contacts InvoicingProcurementPortalPreference#contacts}

---

##### `einvoiceDeliveryEnabled`<sup>Required</sup> <a name="einvoiceDeliveryEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEinvoiceDeliveryEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether e-invoice delivery is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_enabled InvoicingProcurementPortalPreference#einvoice_delivery_enabled}

---

##### `procurementPortalName`<sup>Required</sup> <a name="procurementPortalName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalName"></a>

```java
public java.lang.String getProcurementPortalName();
```

- *Type:* java.lang.String

The name of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_name InvoicingProcurementPortalPreference#procurement_portal_name}

---

##### `purchaseOrderRetrievalEnabled`<sup>Required</sup> <a name="purchaseOrderRetrievalEnabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.purchaseOrderRetrievalEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPurchaseOrderRetrievalEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether purchase order retrieval is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_retrieval_enabled InvoicingProcurementPortalPreference#purchase_order_retrieval_enabled}

---

##### `supplierDomain`<sup>Required</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierDomain"></a>

```java
public java.lang.String getSupplierDomain();
```

- *Type:* java.lang.String

The domain identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

##### `supplierIdentifier`<sup>Required</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierIdentifier"></a>

```java
public java.lang.String getSupplierIdentifier();
```

- *Type:* java.lang.String

The unique identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

##### `einvoiceDeliveryPreference`<sup>Optional</sup> <a name="einvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryPreference"></a>

```java
public InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference getEinvoiceDeliveryPreference();
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

Specifies the preferences for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_preference InvoicingProcurementPortalPreference#einvoice_delivery_preference}

---

##### `procurementPortalInstanceEndpoint`<sup>Optional</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalInstanceEndpoint"></a>

```java
public java.lang.String getProcurementPortalInstanceEndpoint();
```

- *Type:* java.lang.String

The endpoint URL where e-invoices are delivered to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

##### `procurementPortalSharedSecret`<sup>Optional</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalSharedSecret"></a>

```java
public java.lang.String getProcurementPortalSharedSecret();
```

- *Type:* java.lang.String

The shared secret or authentication credential used for secure communication with the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.selector"></a>

```java
public InvoicingProcurementPortalPreferenceSelector getSelector();
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

Specifies criteria for selecting which invoices should be processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#selector InvoicingProcurementPortalPreference#selector}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<InvoicingProcurementPortalPreferenceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>>

The tags associated with this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#tags InvoicingProcurementPortalPreference#tags}

---

##### `testEnvPreference`<sup>Optional</sup> <a name="testEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.testEnvPreference"></a>

```java
public InvoicingProcurementPortalPreferenceTestEnvPreference getTestEnvPreference();
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

Configuration settings for the test environment of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#test_env_preference InvoicingProcurementPortalPreference#test_env_preference}

---

### InvoicingProcurementPortalPreferenceContacts <a name="InvoicingProcurementPortalPreferenceContacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceContacts;

InvoicingProcurementPortalPreferenceContacts.builder()
//  .email(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.email">email</a></code> | <code>java.lang.String</code> | The email address of the contact person or role. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.name">name</a></code> | <code>java.lang.String</code> | The name of the contact person or role. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The email address of the contact person or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#email InvoicingProcurementPortalPreference#email}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the contact person or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#name InvoicingProcurementPortalPreference#name}

---

### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference;

InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.builder()
//  .connectionTestingMethod(java.lang.String)
//  .einvoiceDeliveryActivationDate(java.lang.String)
//  .einvoiceDeliveryAttachmentTypes(java.util.List<java.lang.String>)
//  .einvoiceDeliveryDocumentTypes(java.util.List<java.lang.String>)
//  .protocol(java.lang.String)
//  .purchaseOrderDataSources(IResolvable|java.util.List<InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.connectionTestingMethod">connectionTestingMethod</a></code> | <code>java.lang.String</code> | The method to use for testing the connection to the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryActivationDate">einvoiceDeliveryActivationDate</a></code> | <code>java.lang.String</code> | The ISO 8601 date-time when e-invoice delivery should be activated. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryAttachmentTypes">einvoiceDeliveryAttachmentTypes</a></code> | <code>java.util.List<java.lang.String></code> | The types of attachments to include with the e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryDocumentTypes">einvoiceDeliveryDocumentTypes</a></code> | <code>java.util.List<java.lang.String></code> | The types of e-invoice documents to be delivered. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The communication protocol to use for e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.purchaseOrderDataSources">purchaseOrderDataSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>></code> | The sources of purchase order data. |

---

##### `connectionTestingMethod`<sup>Optional</sup> <a name="connectionTestingMethod" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.connectionTestingMethod"></a>

```java
public java.lang.String getConnectionTestingMethod();
```

- *Type:* java.lang.String

The method to use for testing the connection to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#connection_testing_method InvoicingProcurementPortalPreference#connection_testing_method}

---

##### `einvoiceDeliveryActivationDate`<sup>Optional</sup> <a name="einvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryActivationDate"></a>

```java
public java.lang.String getEinvoiceDeliveryActivationDate();
```

- *Type:* java.lang.String

The ISO 8601 date-time when e-invoice delivery should be activated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_activation_date InvoicingProcurementPortalPreference#einvoice_delivery_activation_date}

---

##### `einvoiceDeliveryAttachmentTypes`<sup>Optional</sup> <a name="einvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryAttachmentTypes"></a>

```java
public java.util.List<java.lang.String> getEinvoiceDeliveryAttachmentTypes();
```

- *Type:* java.util.List<java.lang.String>

The types of attachments to include with the e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_attachment_types InvoicingProcurementPortalPreference#einvoice_delivery_attachment_types}

---

##### `einvoiceDeliveryDocumentTypes`<sup>Optional</sup> <a name="einvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryDocumentTypes"></a>

```java
public java.util.List<java.lang.String> getEinvoiceDeliveryDocumentTypes();
```

- *Type:* java.util.List<java.lang.String>

The types of e-invoice documents to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_types InvoicingProcurementPortalPreference#einvoice_delivery_document_types}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The communication protocol to use for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#protocol InvoicingProcurementPortalPreference#protocol}

---

##### `purchaseOrderDataSources`<sup>Optional</sup> <a name="purchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.purchaseOrderDataSources"></a>

```java
public IResolvable|java.util.List<InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources> getPurchaseOrderDataSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>>

The sources of purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_sources InvoicingProcurementPortalPreference#purchase_order_data_sources}

---

### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources;

InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.builder()
//  .einvoiceDeliveryDocumentType(java.lang.String)
//  .purchaseOrderDataSourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.einvoiceDeliveryDocumentType">einvoiceDeliveryDocumentType</a></code> | <code>java.lang.String</code> | The type of e-invoice document that requires purchase order data. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.purchaseOrderDataSourceType">purchaseOrderDataSourceType</a></code> | <code>java.lang.String</code> | The type of source for purchase order data. |

---

##### `einvoiceDeliveryDocumentType`<sup>Optional</sup> <a name="einvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.einvoiceDeliveryDocumentType"></a>

```java
public java.lang.String getEinvoiceDeliveryDocumentType();
```

- *Type:* java.lang.String

The type of e-invoice document that requires purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_type InvoicingProcurementPortalPreference#einvoice_delivery_document_type}

---

##### `purchaseOrderDataSourceType`<sup>Optional</sup> <a name="purchaseOrderDataSourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.purchaseOrderDataSourceType"></a>

```java
public java.lang.String getPurchaseOrderDataSourceType();
```

- *Type:* java.lang.String

The type of source for purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_source_type InvoicingProcurementPortalPreference#purchase_order_data_source_type}

---

### InvoicingProcurementPortalPreferenceSelector <a name="InvoicingProcurementPortalPreferenceSelector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceSelector;

InvoicingProcurementPortalPreferenceSelector.builder()
//  .invoiceUnitArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.property.invoiceUnitArns">invoiceUnitArns</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies. |

---

##### `invoiceUnitArns`<sup>Optional</sup> <a name="invoiceUnitArns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.property.invoiceUnitArns"></a>

```java
public java.util.List<java.lang.String> getInvoiceUnitArns();
```

- *Type:* java.util.List<java.lang.String>

The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#invoice_unit_arns InvoicingProcurementPortalPreference#invoice_unit_arns}

---

### InvoicingProcurementPortalPreferenceTags <a name="InvoicingProcurementPortalPreferenceTags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceTags;

InvoicingProcurementPortalPreferenceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#key InvoicingProcurementPortalPreference#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#value InvoicingProcurementPortalPreference#value}

---

### InvoicingProcurementPortalPreferenceTestEnvPreference <a name="InvoicingProcurementPortalPreferenceTestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceTestEnvPreference;

InvoicingProcurementPortalPreferenceTestEnvPreference.builder()
//  .buyerDomain(java.lang.String)
//  .buyerIdentifier(java.lang.String)
//  .procurementPortalInstanceEndpoint(java.lang.String)
//  .procurementPortalSharedSecret(java.lang.String)
//  .supplierDomain(java.lang.String)
//  .supplierIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerDomain">buyerDomain</a></code> | <code>java.lang.String</code> | The domain identifier for the buyer in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerIdentifier">buyerIdentifier</a></code> | <code>java.lang.String</code> | The unique identifier for the buyer in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>java.lang.String</code> | The endpoint URL for e-invoice delivery in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>java.lang.String</code> | The shared secret for secure communication in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierDomain">supplierDomain</a></code> | <code>java.lang.String</code> | The domain identifier for the supplier in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierIdentifier">supplierIdentifier</a></code> | <code>java.lang.String</code> | The unique identifier for the supplier in the test environment. |

---

##### `buyerDomain`<sup>Optional</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerDomain"></a>

```java
public java.lang.String getBuyerDomain();
```

- *Type:* java.lang.String

The domain identifier for the buyer in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

##### `buyerIdentifier`<sup>Optional</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerIdentifier"></a>

```java
public java.lang.String getBuyerIdentifier();
```

- *Type:* java.lang.String

The unique identifier for the buyer in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

##### `procurementPortalInstanceEndpoint`<sup>Optional</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalInstanceEndpoint"></a>

```java
public java.lang.String getProcurementPortalInstanceEndpoint();
```

- *Type:* java.lang.String

The endpoint URL for e-invoice delivery in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

##### `procurementPortalSharedSecret`<sup>Optional</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalSharedSecret"></a>

```java
public java.lang.String getProcurementPortalSharedSecret();
```

- *Type:* java.lang.String

The shared secret for secure communication in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

##### `supplierDomain`<sup>Optional</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierDomain"></a>

```java
public java.lang.String getSupplierDomain();
```

- *Type:* java.lang.String

The domain identifier for the supplier in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

##### `supplierIdentifier`<sup>Optional</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierIdentifier"></a>

```java
public java.lang.String getSupplierIdentifier();
```

- *Type:* java.lang.String

The unique identifier for the supplier in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

## Classes <a name="Classes" id="Classes"></a>

### InvoicingProcurementPortalPreferenceContactsList <a name="InvoicingProcurementPortalPreferenceContactsList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceContactsList;

new InvoicingProcurementPortalPreferenceContactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get"></a>

```java
public InvoicingProcurementPortalPreferenceContactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<InvoicingProcurementPortalPreferenceContacts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>>

---


### InvoicingProcurementPortalPreferenceContactsOutputReference <a name="InvoicingProcurementPortalPreferenceContactsOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceContactsOutputReference;

new InvoicingProcurementPortalPreferenceContactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue"></a>

```java
public IResolvable|InvoicingProcurementPortalPreferenceContacts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference;

new InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources">putPurchaseOrderDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetConnectionTestingMethod">resetConnectionTestingMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryActivationDate">resetEinvoiceDeliveryActivationDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryAttachmentTypes">resetEinvoiceDeliveryAttachmentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryDocumentTypes">resetEinvoiceDeliveryDocumentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetPurchaseOrderDataSources">resetPurchaseOrderDataSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPurchaseOrderDataSources` <a name="putPurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources"></a>

```java
public void putPurchaseOrderDataSources(IResolvable|java.util.List<InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>>

---

##### `resetConnectionTestingMethod` <a name="resetConnectionTestingMethod" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetConnectionTestingMethod"></a>

```java
public void resetConnectionTestingMethod()
```

##### `resetEinvoiceDeliveryActivationDate` <a name="resetEinvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryActivationDate"></a>

```java
public void resetEinvoiceDeliveryActivationDate()
```

##### `resetEinvoiceDeliveryAttachmentTypes` <a name="resetEinvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryAttachmentTypes"></a>

```java
public void resetEinvoiceDeliveryAttachmentTypes()
```

##### `resetEinvoiceDeliveryDocumentTypes` <a name="resetEinvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryDocumentTypes"></a>

```java
public void resetEinvoiceDeliveryDocumentTypes()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetPurchaseOrderDataSources` <a name="resetPurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetPurchaseOrderDataSources"></a>

```java
public void resetPurchaseOrderDataSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources">purchaseOrderDataSources</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethodInput">connectionTestingMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDateInput">einvoiceDeliveryActivationDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypesInput">einvoiceDeliveryAttachmentTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypesInput">einvoiceDeliveryDocumentTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSourcesInput">purchaseOrderDataSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod">connectionTestingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate">einvoiceDeliveryActivationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes">einvoiceDeliveryAttachmentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes">einvoiceDeliveryDocumentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `purchaseOrderDataSources`<sup>Required</sup> <a name="purchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources"></a>

```java
public InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList getPurchaseOrderDataSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a>

---

##### `connectionTestingMethodInput`<sup>Optional</sup> <a name="connectionTestingMethodInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethodInput"></a>

```java
public java.lang.String getConnectionTestingMethodInput();
```

- *Type:* java.lang.String

---

##### `einvoiceDeliveryActivationDateInput`<sup>Optional</sup> <a name="einvoiceDeliveryActivationDateInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDateInput"></a>

```java
public java.lang.String getEinvoiceDeliveryActivationDateInput();
```

- *Type:* java.lang.String

---

##### `einvoiceDeliveryAttachmentTypesInput`<sup>Optional</sup> <a name="einvoiceDeliveryAttachmentTypesInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypesInput"></a>

```java
public java.util.List<java.lang.String> getEinvoiceDeliveryAttachmentTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `einvoiceDeliveryDocumentTypesInput`<sup>Optional</sup> <a name="einvoiceDeliveryDocumentTypesInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypesInput"></a>

```java
public java.util.List<java.lang.String> getEinvoiceDeliveryDocumentTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `purchaseOrderDataSourcesInput`<sup>Optional</sup> <a name="purchaseOrderDataSourcesInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSourcesInput"></a>

```java
public IResolvable|java.util.List<InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources> getPurchaseOrderDataSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>>

---

##### `connectionTestingMethod`<sup>Required</sup> <a name="connectionTestingMethod" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod"></a>

```java
public java.lang.String getConnectionTestingMethod();
```

- *Type:* java.lang.String

---

##### `einvoiceDeliveryActivationDate`<sup>Required</sup> <a name="einvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate"></a>

```java
public java.lang.String getEinvoiceDeliveryActivationDate();
```

- *Type:* java.lang.String

---

##### `einvoiceDeliveryAttachmentTypes`<sup>Required</sup> <a name="einvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes"></a>

```java
public java.util.List<java.lang.String> getEinvoiceDeliveryAttachmentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `einvoiceDeliveryDocumentTypes`<sup>Required</sup> <a name="einvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes"></a>

```java
public java.util.List<java.lang.String> getEinvoiceDeliveryDocumentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList;

new InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get"></a>

```java
public InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>>

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference;

new InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetEinvoiceDeliveryDocumentType">resetEinvoiceDeliveryDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetPurchaseOrderDataSourceType">resetPurchaseOrderDataSourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEinvoiceDeliveryDocumentType` <a name="resetEinvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetEinvoiceDeliveryDocumentType"></a>

```java
public void resetEinvoiceDeliveryDocumentType()
```

##### `resetPurchaseOrderDataSourceType` <a name="resetPurchaseOrderDataSourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetPurchaseOrderDataSourceType"></a>

```java
public void resetPurchaseOrderDataSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentTypeInput">einvoiceDeliveryDocumentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceTypeInput">purchaseOrderDataSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType">einvoiceDeliveryDocumentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType">purchaseOrderDataSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `einvoiceDeliveryDocumentTypeInput`<sup>Optional</sup> <a name="einvoiceDeliveryDocumentTypeInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentTypeInput"></a>

```java
public java.lang.String getEinvoiceDeliveryDocumentTypeInput();
```

- *Type:* java.lang.String

---

##### `purchaseOrderDataSourceTypeInput`<sup>Optional</sup> <a name="purchaseOrderDataSourceTypeInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceTypeInput"></a>

```java
public java.lang.String getPurchaseOrderDataSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `einvoiceDeliveryDocumentType`<sup>Required</sup> <a name="einvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType"></a>

```java
public java.lang.String getEinvoiceDeliveryDocumentType();
```

- *Type:* java.lang.String

---

##### `purchaseOrderDataSourceType`<sup>Required</sup> <a name="purchaseOrderDataSourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType"></a>

```java
public java.lang.String getPurchaseOrderDataSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>

---


### InvoicingProcurementPortalPreferenceSelectorOutputReference <a name="InvoicingProcurementPortalPreferenceSelectorOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceSelectorOutputReference;

new InvoicingProcurementPortalPreferenceSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resetInvoiceUnitArns">resetInvoiceUnitArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInvoiceUnitArns` <a name="resetInvoiceUnitArns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resetInvoiceUnitArns"></a>

```java
public void resetInvoiceUnitArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArnsInput">invoiceUnitArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns">invoiceUnitArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invoiceUnitArnsInput`<sup>Optional</sup> <a name="invoiceUnitArnsInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArnsInput"></a>

```java
public java.util.List<java.lang.String> getInvoiceUnitArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `invoiceUnitArns`<sup>Required</sup> <a name="invoiceUnitArns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns"></a>

```java
public java.util.List<java.lang.String> getInvoiceUnitArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue"></a>

```java
public IResolvable|InvoicingProcurementPortalPreferenceSelector getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---


### InvoicingProcurementPortalPreferenceTagsList <a name="InvoicingProcurementPortalPreferenceTagsList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceTagsList;

new InvoicingProcurementPortalPreferenceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get"></a>

```java
public InvoicingProcurementPortalPreferenceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<InvoicingProcurementPortalPreferenceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>>

---


### InvoicingProcurementPortalPreferenceTagsOutputReference <a name="InvoicingProcurementPortalPreferenceTagsOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceTagsOutputReference;

new InvoicingProcurementPortalPreferenceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|InvoicingProcurementPortalPreferenceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>

---


### InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference <a name="InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.invoicing_procurement_portal_preference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference;

new InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerDomain">resetBuyerDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerIdentifier">resetBuyerIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalInstanceEndpoint">resetProcurementPortalInstanceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalSharedSecret">resetProcurementPortalSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierDomain">resetSupplierDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierIdentifier">resetSupplierIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuyerDomain` <a name="resetBuyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerDomain"></a>

```java
public void resetBuyerDomain()
```

##### `resetBuyerIdentifier` <a name="resetBuyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerIdentifier"></a>

```java
public void resetBuyerIdentifier()
```

##### `resetProcurementPortalInstanceEndpoint` <a name="resetProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalInstanceEndpoint"></a>

```java
public void resetProcurementPortalInstanceEndpoint()
```

##### `resetProcurementPortalSharedSecret` <a name="resetProcurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalSharedSecret"></a>

```java
public void resetProcurementPortalSharedSecret()
```

##### `resetSupplierDomain` <a name="resetSupplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierDomain"></a>

```java
public void resetSupplierDomain()
```

##### `resetSupplierIdentifier` <a name="resetSupplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierIdentifier"></a>

```java
public void resetSupplierIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomainInput">buyerDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifierInput">buyerIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpointInput">procurementPortalInstanceEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecretInput">procurementPortalSharedSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomainInput">supplierDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifierInput">supplierIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain">buyerDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier">buyerIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain">supplierDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier">supplierIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buyerDomainInput`<sup>Optional</sup> <a name="buyerDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomainInput"></a>

```java
public java.lang.String getBuyerDomainInput();
```

- *Type:* java.lang.String

---

##### `buyerIdentifierInput`<sup>Optional</sup> <a name="buyerIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifierInput"></a>

```java
public java.lang.String getBuyerIdentifierInput();
```

- *Type:* java.lang.String

---

##### `procurementPortalInstanceEndpointInput`<sup>Optional</sup> <a name="procurementPortalInstanceEndpointInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpointInput"></a>

```java
public java.lang.String getProcurementPortalInstanceEndpointInput();
```

- *Type:* java.lang.String

---

##### `procurementPortalSharedSecretInput`<sup>Optional</sup> <a name="procurementPortalSharedSecretInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecretInput"></a>

```java
public java.lang.String getProcurementPortalSharedSecretInput();
```

- *Type:* java.lang.String

---

##### `supplierDomainInput`<sup>Optional</sup> <a name="supplierDomainInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomainInput"></a>

```java
public java.lang.String getSupplierDomainInput();
```

- *Type:* java.lang.String

---

##### `supplierIdentifierInput`<sup>Optional</sup> <a name="supplierIdentifierInput" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifierInput"></a>

```java
public java.lang.String getSupplierIdentifierInput();
```

- *Type:* java.lang.String

---

##### `buyerDomain`<sup>Required</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain"></a>

```java
public java.lang.String getBuyerDomain();
```

- *Type:* java.lang.String

---

##### `buyerIdentifier`<sup>Required</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier"></a>

```java
public java.lang.String getBuyerIdentifier();
```

- *Type:* java.lang.String

---

##### `procurementPortalInstanceEndpoint`<sup>Required</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint"></a>

```java
public java.lang.String getProcurementPortalInstanceEndpoint();
```

- *Type:* java.lang.String

---

##### `procurementPortalSharedSecret`<sup>Required</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret"></a>

```java
public java.lang.String getProcurementPortalSharedSecret();
```

- *Type:* java.lang.String

---

##### `supplierDomain`<sup>Required</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain"></a>

```java
public java.lang.String getSupplierDomain();
```

- *Type:* java.lang.String

---

##### `supplierIdentifier`<sup>Required</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier"></a>

```java
public java.lang.String getSupplierIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|InvoicingProcurementPortalPreferenceTestEnvPreference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---



