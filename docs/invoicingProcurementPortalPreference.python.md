# `invoicingProcurementPortalPreference` Submodule <a name="`invoicingProcurementPortalPreference` Submodule" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InvoicingProcurementPortalPreference <a name="InvoicingProcurementPortalPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  buyer_domain: str,
  buyer_identifier: str,
  contacts: IResolvable | typing.List[InvoicingProcurementPortalPreferenceContacts],
  einvoice_delivery_enabled: bool | IResolvable,
  procurement_portal_name: str,
  purchase_order_retrieval_enabled: bool | IResolvable,
  supplier_domain: str,
  supplier_identifier: str,
  einvoice_delivery_preference: InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference = None,
  procurement_portal_instance_endpoint: str = None,
  procurement_portal_shared_secret: str = None,
  selector: InvoicingProcurementPortalPreferenceSelector = None,
  tags: IResolvable | typing.List[InvoicingProcurementPortalPreferenceTags] = None,
  test_env_preference: InvoicingProcurementPortalPreferenceTestEnvPreference = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.buyerDomain">buyer_domain</a></code> | <code>str</code> | The domain identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.buyerIdentifier">buyer_identifier</a></code> | <code>str</code> | The unique identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.contacts">contacts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>]</code> | List of contact information for portal administrators and technical contacts. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.einvoiceDeliveryEnabled">einvoice_delivery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether e-invoice delivery is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalName">procurement_portal_name</a></code> | <code>str</code> | The name of the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.purchaseOrderRetrievalEnabled">purchase_order_retrieval_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether purchase order retrieval is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.supplierDomain">supplier_domain</a></code> | <code>str</code> | The domain identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.supplierIdentifier">supplier_identifier</a></code> | <code>str</code> | The unique identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.einvoiceDeliveryPreference">einvoice_delivery_preference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | Specifies the preferences for e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalInstanceEndpoint">procurement_portal_instance_endpoint</a></code> | <code>str</code> | The endpoint URL where e-invoices are delivered to the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalSharedSecret">procurement_portal_shared_secret</a></code> | <code>str</code> | The shared secret or authentication credential used for secure communication with the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.selector">selector</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | Specifies criteria for selecting which invoices should be processed. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>]</code> | The tags associated with this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.testEnvPreference">test_env_preference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | Configuration settings for the test environment of the procurement portal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `buyer_domain`<sup>Required</sup> <a name="buyer_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.buyerDomain"></a>

- *Type:* str

The domain identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

##### `buyer_identifier`<sup>Required</sup> <a name="buyer_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.buyerIdentifier"></a>

- *Type:* str

The unique identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.contacts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>]

List of contact information for portal administrators and technical contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#contacts InvoicingProcurementPortalPreference#contacts}

---

##### `einvoice_delivery_enabled`<sup>Required</sup> <a name="einvoice_delivery_enabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.einvoiceDeliveryEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether e-invoice delivery is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_enabled InvoicingProcurementPortalPreference#einvoice_delivery_enabled}

---

##### `procurement_portal_name`<sup>Required</sup> <a name="procurement_portal_name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalName"></a>

- *Type:* str

The name of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_name InvoicingProcurementPortalPreference#procurement_portal_name}

---

##### `purchase_order_retrieval_enabled`<sup>Required</sup> <a name="purchase_order_retrieval_enabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.purchaseOrderRetrievalEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether purchase order retrieval is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_retrieval_enabled InvoicingProcurementPortalPreference#purchase_order_retrieval_enabled}

---

##### `supplier_domain`<sup>Required</sup> <a name="supplier_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.supplierDomain"></a>

- *Type:* str

The domain identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

##### `supplier_identifier`<sup>Required</sup> <a name="supplier_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.supplierIdentifier"></a>

- *Type:* str

The unique identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

##### `einvoice_delivery_preference`<sup>Optional</sup> <a name="einvoice_delivery_preference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.einvoiceDeliveryPreference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

Specifies the preferences for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_preference InvoicingProcurementPortalPreference#einvoice_delivery_preference}

---

##### `procurement_portal_instance_endpoint`<sup>Optional</sup> <a name="procurement_portal_instance_endpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalInstanceEndpoint"></a>

- *Type:* str

The endpoint URL where e-invoices are delivered to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

##### `procurement_portal_shared_secret`<sup>Optional</sup> <a name="procurement_portal_shared_secret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.procurementPortalSharedSecret"></a>

- *Type:* str

The shared secret or authentication credential used for secure communication with the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.selector"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

Specifies criteria for selecting which invoices should be processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#selector InvoicingProcurementPortalPreference#selector}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>]

The tags associated with this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#tags InvoicingProcurementPortalPreference#tags}

---

##### `test_env_preference`<sup>Optional</sup> <a name="test_env_preference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.Initializer.parameter.testEnvPreference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

Configuration settings for the test environment of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#test_env_preference InvoicingProcurementPortalPreference#test_env_preference}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts">put_contacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference">put_einvoice_delivery_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector">put_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference">put_test_env_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetEinvoiceDeliveryPreference">reset_einvoice_delivery_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalInstanceEndpoint">reset_procurement_portal_instance_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalSharedSecret">reset_procurement_portal_shared_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTestEnvPreference">reset_test_env_preference</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_contacts` <a name="put_contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts"></a>

```python
def put_contacts(
  value: IResolvable | typing.List[InvoicingProcurementPortalPreferenceContacts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putContacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>]

---

##### `put_einvoice_delivery_preference` <a name="put_einvoice_delivery_preference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference"></a>

```python
def put_einvoice_delivery_preference(
  connection_testing_method: str = None,
  einvoice_delivery_activation_date: str = None,
  einvoice_delivery_attachment_types: typing.List[str] = None,
  einvoice_delivery_document_types: typing.List[str] = None,
  protocol: str = None,
  purchase_order_data_sources: IResolvable | typing.List[InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources] = None
) -> None
```

###### `connection_testing_method`<sup>Optional</sup> <a name="connection_testing_method" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference.parameter.connectionTestingMethod"></a>

- *Type:* str

The method to use for testing the connection to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#connection_testing_method InvoicingProcurementPortalPreference#connection_testing_method}

---

###### `einvoice_delivery_activation_date`<sup>Optional</sup> <a name="einvoice_delivery_activation_date" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference.parameter.einvoiceDeliveryActivationDate"></a>

- *Type:* str

The ISO 8601 date-time when e-invoice delivery should be activated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_activation_date InvoicingProcurementPortalPreference#einvoice_delivery_activation_date}

---

###### `einvoice_delivery_attachment_types`<sup>Optional</sup> <a name="einvoice_delivery_attachment_types" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference.parameter.einvoiceDeliveryAttachmentTypes"></a>

- *Type:* typing.List[str]

The types of attachments to include with the e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_attachment_types InvoicingProcurementPortalPreference#einvoice_delivery_attachment_types}

---

###### `einvoice_delivery_document_types`<sup>Optional</sup> <a name="einvoice_delivery_document_types" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference.parameter.einvoiceDeliveryDocumentTypes"></a>

- *Type:* typing.List[str]

The types of e-invoice documents to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_types InvoicingProcurementPortalPreference#einvoice_delivery_document_types}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference.parameter.protocol"></a>

- *Type:* str

The communication protocol to use for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#protocol InvoicingProcurementPortalPreference#protocol}

---

###### `purchase_order_data_sources`<sup>Optional</sup> <a name="purchase_order_data_sources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putEinvoiceDeliveryPreference.parameter.purchaseOrderDataSources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>]

The sources of purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_sources InvoicingProcurementPortalPreference#purchase_order_data_sources}

---

##### `put_selector` <a name="put_selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector"></a>

```python
def put_selector(
  invoice_unit_arns: typing.List[str] = None
) -> None
```

###### `invoice_unit_arns`<sup>Optional</sup> <a name="invoice_unit_arns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putSelector.parameter.invoiceUnitArns"></a>

- *Type:* typing.List[str]

The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#invoice_unit_arns InvoicingProcurementPortalPreference#invoice_unit_arns}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[InvoicingProcurementPortalPreferenceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>]

---

##### `put_test_env_preference` <a name="put_test_env_preference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference"></a>

```python
def put_test_env_preference(
  buyer_domain: str = None,
  buyer_identifier: str = None,
  procurement_portal_instance_endpoint: str = None,
  procurement_portal_shared_secret: str = None,
  supplier_domain: str = None,
  supplier_identifier: str = None
) -> None
```

###### `buyer_domain`<sup>Optional</sup> <a name="buyer_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference.parameter.buyerDomain"></a>

- *Type:* str

The domain identifier for the buyer in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

###### `buyer_identifier`<sup>Optional</sup> <a name="buyer_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference.parameter.buyerIdentifier"></a>

- *Type:* str

The unique identifier for the buyer in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

###### `procurement_portal_instance_endpoint`<sup>Optional</sup> <a name="procurement_portal_instance_endpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference.parameter.procurementPortalInstanceEndpoint"></a>

- *Type:* str

The endpoint URL for e-invoice delivery in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

###### `procurement_portal_shared_secret`<sup>Optional</sup> <a name="procurement_portal_shared_secret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference.parameter.procurementPortalSharedSecret"></a>

- *Type:* str

The shared secret for secure communication in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

###### `supplier_domain`<sup>Optional</sup> <a name="supplier_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference.parameter.supplierDomain"></a>

- *Type:* str

The domain identifier for the supplier in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

###### `supplier_identifier`<sup>Optional</sup> <a name="supplier_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.putTestEnvPreference.parameter.supplierIdentifier"></a>

- *Type:* str

The unique identifier for the supplier in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

##### `reset_einvoice_delivery_preference` <a name="reset_einvoice_delivery_preference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetEinvoiceDeliveryPreference"></a>

```python
def reset_einvoice_delivery_preference() -> None
```

##### `reset_procurement_portal_instance_endpoint` <a name="reset_procurement_portal_instance_endpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalInstanceEndpoint"></a>

```python
def reset_procurement_portal_instance_endpoint() -> None
```

##### `reset_procurement_portal_shared_secret` <a name="reset_procurement_portal_shared_secret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetProcurementPortalSharedSecret"></a>

```python
def reset_procurement_portal_shared_secret() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_test_env_preference` <a name="reset_test_env_preference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.resetTestEnvPreference"></a>

```python
def reset_test_env_preference() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a InvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isConstruct"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a InvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the InvoicingProcurementPortalPreference to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing InvoicingProcurementPortalPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the InvoicingProcurementPortalPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contacts">contacts</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList">InvoicingProcurementPortalPreferenceContactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.createDate">create_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference">einvoice_delivery_preference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus">einvoice_delivery_preference_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lastUpdateDate">last_update_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn">procurement_portal_preference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint">purchase_order_retrieval_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus">purchase_order_retrieval_preference_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selector">selector</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference">InvoicingProcurementPortalPreferenceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList">InvoicingProcurementPortalPreferenceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreference">test_env_preference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomainInput">buyer_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifierInput">buyer_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contactsInput">contacts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabledInput">einvoice_delivery_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceInput">einvoice_delivery_preference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpointInput">procurement_portal_instance_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalNameInput">procurement_portal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecretInput">procurement_portal_shared_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabledInput">purchase_order_retrieval_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selectorInput">selector_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomainInput">supplier_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifierInput">supplier_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreferenceInput">test_env_preference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomain">buyer_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifier">buyer_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled">einvoice_delivery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint">procurement_portal_instance_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalName">procurement_portal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecret">procurement_portal_shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled">purchase_order_retrieval_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomain">supplier_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifier">supplier_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contacts"></a>

```python
contacts: InvoicingProcurementPortalPreferenceContactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList">InvoicingProcurementPortalPreferenceContactsList</a>

---

##### `create_date`<sup>Required</sup> <a name="create_date" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.createDate"></a>

```python
create_date: str
```

- *Type:* str

---

##### `einvoice_delivery_preference`<sup>Required</sup> <a name="einvoice_delivery_preference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference"></a>

```python
einvoice_delivery_preference: InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a>

---

##### `einvoice_delivery_preference_status`<sup>Required</sup> <a name="einvoice_delivery_preference_status" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus"></a>

```python
einvoice_delivery_preference_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update_date`<sup>Required</sup> <a name="last_update_date" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.lastUpdateDate"></a>

```python
last_update_date: str
```

- *Type:* str

---

##### `procurement_portal_preference_arn`<sup>Required</sup> <a name="procurement_portal_preference_arn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn"></a>

```python
procurement_portal_preference_arn: str
```

- *Type:* str

---

##### `purchase_order_retrieval_endpoint`<sup>Required</sup> <a name="purchase_order_retrieval_endpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint"></a>

```python
purchase_order_retrieval_endpoint: str
```

- *Type:* str

---

##### `purchase_order_retrieval_preference_status`<sup>Required</sup> <a name="purchase_order_retrieval_preference_status" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus"></a>

```python
purchase_order_retrieval_preference_status: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selector"></a>

```python
selector: InvoicingProcurementPortalPreferenceSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference">InvoicingProcurementPortalPreferenceSelectorOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tags"></a>

```python
tags: InvoicingProcurementPortalPreferenceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList">InvoicingProcurementPortalPreferenceTagsList</a>

---

##### `test_env_preference`<sup>Required</sup> <a name="test_env_preference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreference"></a>

```python
test_env_preference: InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buyer_domain_input`<sup>Optional</sup> <a name="buyer_domain_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomainInput"></a>

```python
buyer_domain_input: str
```

- *Type:* str

---

##### `buyer_identifier_input`<sup>Optional</sup> <a name="buyer_identifier_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifierInput"></a>

```python
buyer_identifier_input: str
```

- *Type:* str

---

##### `contacts_input`<sup>Optional</sup> <a name="contacts_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.contactsInput"></a>

```python
contacts_input: IResolvable | typing.List[InvoicingProcurementPortalPreferenceContacts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>]

---

##### `einvoice_delivery_enabled_input`<sup>Optional</sup> <a name="einvoice_delivery_enabled_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabledInput"></a>

```python
einvoice_delivery_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `einvoice_delivery_preference_input`<sup>Optional</sup> <a name="einvoice_delivery_preference_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceInput"></a>

```python
einvoice_delivery_preference_input: IResolvable | InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---

##### `procurement_portal_instance_endpoint_input`<sup>Optional</sup> <a name="procurement_portal_instance_endpoint_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpointInput"></a>

```python
procurement_portal_instance_endpoint_input: str
```

- *Type:* str

---

##### `procurement_portal_name_input`<sup>Optional</sup> <a name="procurement_portal_name_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalNameInput"></a>

```python
procurement_portal_name_input: str
```

- *Type:* str

---

##### `procurement_portal_shared_secret_input`<sup>Optional</sup> <a name="procurement_portal_shared_secret_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecretInput"></a>

```python
procurement_portal_shared_secret_input: str
```

- *Type:* str

---

##### `purchase_order_retrieval_enabled_input`<sup>Optional</sup> <a name="purchase_order_retrieval_enabled_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabledInput"></a>

```python
purchase_order_retrieval_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.selectorInput"></a>

```python
selector_input: IResolvable | InvoicingProcurementPortalPreferenceSelector
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---

##### `supplier_domain_input`<sup>Optional</sup> <a name="supplier_domain_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomainInput"></a>

```python
supplier_domain_input: str
```

- *Type:* str

---

##### `supplier_identifier_input`<sup>Optional</sup> <a name="supplier_identifier_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifierInput"></a>

```python
supplier_identifier_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[InvoicingProcurementPortalPreferenceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>]

---

##### `test_env_preference_input`<sup>Optional</sup> <a name="test_env_preference_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.testEnvPreferenceInput"></a>

```python
test_env_preference_input: IResolvable | InvoicingProcurementPortalPreferenceTestEnvPreference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---

##### `buyer_domain`<sup>Required</sup> <a name="buyer_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerDomain"></a>

```python
buyer_domain: str
```

- *Type:* str

---

##### `buyer_identifier`<sup>Required</sup> <a name="buyer_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.buyerIdentifier"></a>

```python
buyer_identifier: str
```

- *Type:* str

---

##### `einvoice_delivery_enabled`<sup>Required</sup> <a name="einvoice_delivery_enabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled"></a>

```python
einvoice_delivery_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `procurement_portal_instance_endpoint`<sup>Required</sup> <a name="procurement_portal_instance_endpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint"></a>

```python
procurement_portal_instance_endpoint: str
```

- *Type:* str

---

##### `procurement_portal_name`<sup>Required</sup> <a name="procurement_portal_name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalName"></a>

```python
procurement_portal_name: str
```

- *Type:* str

---

##### `procurement_portal_shared_secret`<sup>Required</sup> <a name="procurement_portal_shared_secret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.procurementPortalSharedSecret"></a>

```python
procurement_portal_shared_secret: str
```

- *Type:* str

---

##### `purchase_order_retrieval_enabled`<sup>Required</sup> <a name="purchase_order_retrieval_enabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled"></a>

```python
purchase_order_retrieval_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `supplier_domain`<sup>Required</sup> <a name="supplier_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierDomain"></a>

```python
supplier_domain: str
```

- *Type:* str

---

##### `supplier_identifier`<sup>Required</sup> <a name="supplier_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.supplierIdentifier"></a>

```python
supplier_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreference.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### InvoicingProcurementPortalPreferenceConfig <a name="InvoicingProcurementPortalPreferenceConfig" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  buyer_domain: str,
  buyer_identifier: str,
  contacts: IResolvable | typing.List[InvoicingProcurementPortalPreferenceContacts],
  einvoice_delivery_enabled: bool | IResolvable,
  procurement_portal_name: str,
  purchase_order_retrieval_enabled: bool | IResolvable,
  supplier_domain: str,
  supplier_identifier: str,
  einvoice_delivery_preference: InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference = None,
  procurement_portal_instance_endpoint: str = None,
  procurement_portal_shared_secret: str = None,
  selector: InvoicingProcurementPortalPreferenceSelector = None,
  tags: IResolvable | typing.List[InvoicingProcurementPortalPreferenceTags] = None,
  test_env_preference: InvoicingProcurementPortalPreferenceTestEnvPreference = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerDomain">buyer_domain</a></code> | <code>str</code> | The domain identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerIdentifier">buyer_identifier</a></code> | <code>str</code> | The unique identifier for the buyer in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.contacts">contacts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>]</code> | List of contact information for portal administrators and technical contacts. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryEnabled">einvoice_delivery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether e-invoice delivery is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalName">procurement_portal_name</a></code> | <code>str</code> | The name of the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.purchaseOrderRetrievalEnabled">purchase_order_retrieval_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether purchase order retrieval is enabled for this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierDomain">supplier_domain</a></code> | <code>str</code> | The domain identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierIdentifier">supplier_identifier</a></code> | <code>str</code> | The unique identifier for the supplier in the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryPreference">einvoice_delivery_preference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | Specifies the preferences for e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalInstanceEndpoint">procurement_portal_instance_endpoint</a></code> | <code>str</code> | The endpoint URL where e-invoices are delivered to the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalSharedSecret">procurement_portal_shared_secret</a></code> | <code>str</code> | The shared secret or authentication credential used for secure communication with the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.selector">selector</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | Specifies criteria for selecting which invoices should be processed. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>]</code> | The tags associated with this procurement portal preference. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.testEnvPreference">test_env_preference</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | Configuration settings for the test environment of the procurement portal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `buyer_domain`<sup>Required</sup> <a name="buyer_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerDomain"></a>

```python
buyer_domain: str
```

- *Type:* str

The domain identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

##### `buyer_identifier`<sup>Required</sup> <a name="buyer_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.buyerIdentifier"></a>

```python
buyer_identifier: str
```

- *Type:* str

The unique identifier for the buyer in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.contacts"></a>

```python
contacts: IResolvable | typing.List[InvoicingProcurementPortalPreferenceContacts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>]

List of contact information for portal administrators and technical contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#contacts InvoicingProcurementPortalPreference#contacts}

---

##### `einvoice_delivery_enabled`<sup>Required</sup> <a name="einvoice_delivery_enabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryEnabled"></a>

```python
einvoice_delivery_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether e-invoice delivery is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_enabled InvoicingProcurementPortalPreference#einvoice_delivery_enabled}

---

##### `procurement_portal_name`<sup>Required</sup> <a name="procurement_portal_name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalName"></a>

```python
procurement_portal_name: str
```

- *Type:* str

The name of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_name InvoicingProcurementPortalPreference#procurement_portal_name}

---

##### `purchase_order_retrieval_enabled`<sup>Required</sup> <a name="purchase_order_retrieval_enabled" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.purchaseOrderRetrievalEnabled"></a>

```python
purchase_order_retrieval_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether purchase order retrieval is enabled for this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_retrieval_enabled InvoicingProcurementPortalPreference#purchase_order_retrieval_enabled}

---

##### `supplier_domain`<sup>Required</sup> <a name="supplier_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierDomain"></a>

```python
supplier_domain: str
```

- *Type:* str

The domain identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

##### `supplier_identifier`<sup>Required</sup> <a name="supplier_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.supplierIdentifier"></a>

```python
supplier_identifier: str
```

- *Type:* str

The unique identifier for the supplier in the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

##### `einvoice_delivery_preference`<sup>Optional</sup> <a name="einvoice_delivery_preference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.einvoiceDeliveryPreference"></a>

```python
einvoice_delivery_preference: InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

Specifies the preferences for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_preference InvoicingProcurementPortalPreference#einvoice_delivery_preference}

---

##### `procurement_portal_instance_endpoint`<sup>Optional</sup> <a name="procurement_portal_instance_endpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalInstanceEndpoint"></a>

```python
procurement_portal_instance_endpoint: str
```

- *Type:* str

The endpoint URL where e-invoices are delivered to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

##### `procurement_portal_shared_secret`<sup>Optional</sup> <a name="procurement_portal_shared_secret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.procurementPortalSharedSecret"></a>

```python
procurement_portal_shared_secret: str
```

- *Type:* str

The shared secret or authentication credential used for secure communication with the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.selector"></a>

```python
selector: InvoicingProcurementPortalPreferenceSelector
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

Specifies criteria for selecting which invoices should be processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#selector InvoicingProcurementPortalPreference#selector}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[InvoicingProcurementPortalPreferenceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>]

The tags associated with this procurement portal preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#tags InvoicingProcurementPortalPreference#tags}

---

##### `test_env_preference`<sup>Optional</sup> <a name="test_env_preference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceConfig.property.testEnvPreference"></a>

```python
test_env_preference: InvoicingProcurementPortalPreferenceTestEnvPreference
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

Configuration settings for the test environment of the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#test_env_preference InvoicingProcurementPortalPreference#test_env_preference}

---

### InvoicingProcurementPortalPreferenceContacts <a name="InvoicingProcurementPortalPreferenceContacts" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts(
  email: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.email">email</a></code> | <code>str</code> | The email address of the contact person or role. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.name">name</a></code> | <code>str</code> | The name of the contact person or role. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.email"></a>

```python
email: str
```

- *Type:* str

The email address of the contact person or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#email InvoicingProcurementPortalPreference#email}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the contact person or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#name InvoicingProcurementPortalPreference#name}

---

### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference(
  connection_testing_method: str = None,
  einvoice_delivery_activation_date: str = None,
  einvoice_delivery_attachment_types: typing.List[str] = None,
  einvoice_delivery_document_types: typing.List[str] = None,
  protocol: str = None,
  purchase_order_data_sources: IResolvable | typing.List[InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.connectionTestingMethod">connection_testing_method</a></code> | <code>str</code> | The method to use for testing the connection to the procurement portal. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryActivationDate">einvoice_delivery_activation_date</a></code> | <code>str</code> | The ISO 8601 date-time when e-invoice delivery should be activated. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryAttachmentTypes">einvoice_delivery_attachment_types</a></code> | <code>typing.List[str]</code> | The types of attachments to include with the e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryDocumentTypes">einvoice_delivery_document_types</a></code> | <code>typing.List[str]</code> | The types of e-invoice documents to be delivered. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.protocol">protocol</a></code> | <code>str</code> | The communication protocol to use for e-invoice delivery. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.purchaseOrderDataSources">purchase_order_data_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>]</code> | The sources of purchase order data. |

---

##### `connection_testing_method`<sup>Optional</sup> <a name="connection_testing_method" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.connectionTestingMethod"></a>

```python
connection_testing_method: str
```

- *Type:* str

The method to use for testing the connection to the procurement portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#connection_testing_method InvoicingProcurementPortalPreference#connection_testing_method}

---

##### `einvoice_delivery_activation_date`<sup>Optional</sup> <a name="einvoice_delivery_activation_date" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryActivationDate"></a>

```python
einvoice_delivery_activation_date: str
```

- *Type:* str

The ISO 8601 date-time when e-invoice delivery should be activated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_activation_date InvoicingProcurementPortalPreference#einvoice_delivery_activation_date}

---

##### `einvoice_delivery_attachment_types`<sup>Optional</sup> <a name="einvoice_delivery_attachment_types" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryAttachmentTypes"></a>

```python
einvoice_delivery_attachment_types: typing.List[str]
```

- *Type:* typing.List[str]

The types of attachments to include with the e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_attachment_types InvoicingProcurementPortalPreference#einvoice_delivery_attachment_types}

---

##### `einvoice_delivery_document_types`<sup>Optional</sup> <a name="einvoice_delivery_document_types" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.einvoiceDeliveryDocumentTypes"></a>

```python
einvoice_delivery_document_types: typing.List[str]
```

- *Type:* typing.List[str]

The types of e-invoice documents to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_types InvoicingProcurementPortalPreference#einvoice_delivery_document_types}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The communication protocol to use for e-invoice delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#protocol InvoicingProcurementPortalPreference#protocol}

---

##### `purchase_order_data_sources`<sup>Optional</sup> <a name="purchase_order_data_sources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.property.purchaseOrderDataSources"></a>

```python
purchase_order_data_sources: IResolvable | typing.List[InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>]

The sources of purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_sources InvoicingProcurementPortalPreference#purchase_order_data_sources}

---

### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources(
  einvoice_delivery_document_type: str = None,
  purchase_order_data_source_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.einvoiceDeliveryDocumentType">einvoice_delivery_document_type</a></code> | <code>str</code> | The type of e-invoice document that requires purchase order data. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.purchaseOrderDataSourceType">purchase_order_data_source_type</a></code> | <code>str</code> | The type of source for purchase order data. |

---

##### `einvoice_delivery_document_type`<sup>Optional</sup> <a name="einvoice_delivery_document_type" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.einvoiceDeliveryDocumentType"></a>

```python
einvoice_delivery_document_type: str
```

- *Type:* str

The type of e-invoice document that requires purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#einvoice_delivery_document_type InvoicingProcurementPortalPreference#einvoice_delivery_document_type}

---

##### `purchase_order_data_source_type`<sup>Optional</sup> <a name="purchase_order_data_source_type" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.property.purchaseOrderDataSourceType"></a>

```python
purchase_order_data_source_type: str
```

- *Type:* str

The type of source for purchase order data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#purchase_order_data_source_type InvoicingProcurementPortalPreference#purchase_order_data_source_type}

---

### InvoicingProcurementPortalPreferenceSelector <a name="InvoicingProcurementPortalPreferenceSelector" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector(
  invoice_unit_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.property.invoiceUnitArns">invoice_unit_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies. |

---

##### `invoice_unit_arns`<sup>Optional</sup> <a name="invoice_unit_arns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector.property.invoiceUnitArns"></a>

```python
invoice_unit_arns: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#invoice_unit_arns InvoicingProcurementPortalPreference#invoice_unit_arns}

---

### InvoicingProcurementPortalPreferenceTags <a name="InvoicingProcurementPortalPreferenceTags" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#key InvoicingProcurementPortalPreference#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#value InvoicingProcurementPortalPreference#value}

---

### InvoicingProcurementPortalPreferenceTestEnvPreference <a name="InvoicingProcurementPortalPreferenceTestEnvPreference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference(
  buyer_domain: str = None,
  buyer_identifier: str = None,
  procurement_portal_instance_endpoint: str = None,
  procurement_portal_shared_secret: str = None,
  supplier_domain: str = None,
  supplier_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerDomain">buyer_domain</a></code> | <code>str</code> | The domain identifier for the buyer in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerIdentifier">buyer_identifier</a></code> | <code>str</code> | The unique identifier for the buyer in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalInstanceEndpoint">procurement_portal_instance_endpoint</a></code> | <code>str</code> | The endpoint URL for e-invoice delivery in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalSharedSecret">procurement_portal_shared_secret</a></code> | <code>str</code> | The shared secret for secure communication in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierDomain">supplier_domain</a></code> | <code>str</code> | The domain identifier for the supplier in the test environment. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierIdentifier">supplier_identifier</a></code> | <code>str</code> | The unique identifier for the supplier in the test environment. |

---

##### `buyer_domain`<sup>Optional</sup> <a name="buyer_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerDomain"></a>

```python
buyer_domain: str
```

- *Type:* str

The domain identifier for the buyer in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_domain InvoicingProcurementPortalPreference#buyer_domain}

---

##### `buyer_identifier`<sup>Optional</sup> <a name="buyer_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.buyerIdentifier"></a>

```python
buyer_identifier: str
```

- *Type:* str

The unique identifier for the buyer in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#buyer_identifier InvoicingProcurementPortalPreference#buyer_identifier}

---

##### `procurement_portal_instance_endpoint`<sup>Optional</sup> <a name="procurement_portal_instance_endpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalInstanceEndpoint"></a>

```python
procurement_portal_instance_endpoint: str
```

- *Type:* str

The endpoint URL for e-invoice delivery in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_instance_endpoint InvoicingProcurementPortalPreference#procurement_portal_instance_endpoint}

---

##### `procurement_portal_shared_secret`<sup>Optional</sup> <a name="procurement_portal_shared_secret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.procurementPortalSharedSecret"></a>

```python
procurement_portal_shared_secret: str
```

- *Type:* str

The shared secret for secure communication in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#procurement_portal_shared_secret InvoicingProcurementPortalPreference#procurement_portal_shared_secret}

---

##### `supplier_domain`<sup>Optional</sup> <a name="supplier_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierDomain"></a>

```python
supplier_domain: str
```

- *Type:* str

The domain identifier for the supplier in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_domain InvoicingProcurementPortalPreference#supplier_domain}

---

##### `supplier_identifier`<sup>Optional</sup> <a name="supplier_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference.property.supplierIdentifier"></a>

```python
supplier_identifier: str
```

- *Type:* str

The unique identifier for the supplier in the test environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/invoicing_procurement_portal_preference#supplier_identifier InvoicingProcurementPortalPreference#supplier_identifier}

---

## Classes <a name="Classes" id="Classes"></a>

### InvoicingProcurementPortalPreferenceContactsList <a name="InvoicingProcurementPortalPreferenceContactsList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InvoicingProcurementPortalPreferenceContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[InvoicingProcurementPortalPreferenceContacts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>]

---


### InvoicingProcurementPortalPreferenceContactsOutputReference <a name="InvoicingProcurementPortalPreferenceContactsOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | InvoicingProcurementPortalPreferenceContacts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceContacts">InvoicingProcurementPortalPreferenceContacts</a>

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources">put_purchase_order_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetConnectionTestingMethod">reset_connection_testing_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryActivationDate">reset_einvoice_delivery_activation_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryAttachmentTypes">reset_einvoice_delivery_attachment_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryDocumentTypes">reset_einvoice_delivery_document_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetPurchaseOrderDataSources">reset_purchase_order_data_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_purchase_order_data_sources` <a name="put_purchase_order_data_sources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources"></a>

```python
def put_purchase_order_data_sources(
  value: IResolvable | typing.List[InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.putPurchaseOrderDataSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>]

---

##### `reset_connection_testing_method` <a name="reset_connection_testing_method" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetConnectionTestingMethod"></a>

```python
def reset_connection_testing_method() -> None
```

##### `reset_einvoice_delivery_activation_date` <a name="reset_einvoice_delivery_activation_date" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryActivationDate"></a>

```python
def reset_einvoice_delivery_activation_date() -> None
```

##### `reset_einvoice_delivery_attachment_types` <a name="reset_einvoice_delivery_attachment_types" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryAttachmentTypes"></a>

```python
def reset_einvoice_delivery_attachment_types() -> None
```

##### `reset_einvoice_delivery_document_types` <a name="reset_einvoice_delivery_document_types" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetEinvoiceDeliveryDocumentTypes"></a>

```python
def reset_einvoice_delivery_document_types() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_purchase_order_data_sources` <a name="reset_purchase_order_data_sources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resetPurchaseOrderDataSources"></a>

```python
def reset_purchase_order_data_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources">purchase_order_data_sources</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethodInput">connection_testing_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDateInput">einvoice_delivery_activation_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypesInput">einvoice_delivery_attachment_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypesInput">einvoice_delivery_document_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSourcesInput">purchase_order_data_sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod">connection_testing_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate">einvoice_delivery_activation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes">einvoice_delivery_attachment_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes">einvoice_delivery_document_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `purchase_order_data_sources`<sup>Required</sup> <a name="purchase_order_data_sources" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources"></a>

```python
purchase_order_data_sources: InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a>

---

##### `connection_testing_method_input`<sup>Optional</sup> <a name="connection_testing_method_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethodInput"></a>

```python
connection_testing_method_input: str
```

- *Type:* str

---

##### `einvoice_delivery_activation_date_input`<sup>Optional</sup> <a name="einvoice_delivery_activation_date_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDateInput"></a>

```python
einvoice_delivery_activation_date_input: str
```

- *Type:* str

---

##### `einvoice_delivery_attachment_types_input`<sup>Optional</sup> <a name="einvoice_delivery_attachment_types_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypesInput"></a>

```python
einvoice_delivery_attachment_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `einvoice_delivery_document_types_input`<sup>Optional</sup> <a name="einvoice_delivery_document_types_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypesInput"></a>

```python
einvoice_delivery_document_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `purchase_order_data_sources_input`<sup>Optional</sup> <a name="purchase_order_data_sources_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSourcesInput"></a>

```python
purchase_order_data_sources_input: IResolvable | typing.List[InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>]

---

##### `connection_testing_method`<sup>Required</sup> <a name="connection_testing_method" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod"></a>

```python
connection_testing_method: str
```

- *Type:* str

---

##### `einvoice_delivery_activation_date`<sup>Required</sup> <a name="einvoice_delivery_activation_date" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate"></a>

```python
einvoice_delivery_activation_date: str
```

- *Type:* str

---

##### `einvoice_delivery_attachment_types`<sup>Required</sup> <a name="einvoice_delivery_attachment_types" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes"></a>

```python
einvoice_delivery_attachment_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `einvoice_delivery_document_types`<sup>Required</sup> <a name="einvoice_delivery_document_types" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes"></a>

```python
einvoice_delivery_document_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>]

---


### InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference <a name="InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetEinvoiceDeliveryDocumentType">reset_einvoice_delivery_document_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetPurchaseOrderDataSourceType">reset_purchase_order_data_source_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_einvoice_delivery_document_type` <a name="reset_einvoice_delivery_document_type" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetEinvoiceDeliveryDocumentType"></a>

```python
def reset_einvoice_delivery_document_type() -> None
```

##### `reset_purchase_order_data_source_type` <a name="reset_purchase_order_data_source_type" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resetPurchaseOrderDataSourceType"></a>

```python
def reset_purchase_order_data_source_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentTypeInput">einvoice_delivery_document_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceTypeInput">purchase_order_data_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType">einvoice_delivery_document_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType">purchase_order_data_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `einvoice_delivery_document_type_input`<sup>Optional</sup> <a name="einvoice_delivery_document_type_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentTypeInput"></a>

```python
einvoice_delivery_document_type_input: str
```

- *Type:* str

---

##### `purchase_order_data_source_type_input`<sup>Optional</sup> <a name="purchase_order_data_source_type_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceTypeInput"></a>

```python
purchase_order_data_source_type_input: str
```

- *Type:* str

---

##### `einvoice_delivery_document_type`<sup>Required</sup> <a name="einvoice_delivery_document_type" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType"></a>

```python
einvoice_delivery_document_type: str
```

- *Type:* str

---

##### `purchase_order_data_source_type`<sup>Required</sup> <a name="purchase_order_data_source_type" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType"></a>

```python
purchase_order_data_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">InvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>

---


### InvoicingProcurementPortalPreferenceSelectorOutputReference <a name="InvoicingProcurementPortalPreferenceSelectorOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resetInvoiceUnitArns">reset_invoice_unit_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_invoice_unit_arns` <a name="reset_invoice_unit_arns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.resetInvoiceUnitArns"></a>

```python
def reset_invoice_unit_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArnsInput">invoice_unit_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns">invoice_unit_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoice_unit_arns_input`<sup>Optional</sup> <a name="invoice_unit_arns_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArnsInput"></a>

```python
invoice_unit_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invoice_unit_arns`<sup>Required</sup> <a name="invoice_unit_arns" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns"></a>

```python
invoice_unit_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | InvoicingProcurementPortalPreferenceSelector
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceSelector">InvoicingProcurementPortalPreferenceSelector</a>

---


### InvoicingProcurementPortalPreferenceTagsList <a name="InvoicingProcurementPortalPreferenceTagsList" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InvoicingProcurementPortalPreferenceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[InvoicingProcurementPortalPreferenceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>]

---


### InvoicingProcurementPortalPreferenceTagsOutputReference <a name="InvoicingProcurementPortalPreferenceTagsOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | InvoicingProcurementPortalPreferenceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTags">InvoicingProcurementPortalPreferenceTags</a>

---


### InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference <a name="InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import invoicing_procurement_portal_preference

invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerDomain">reset_buyer_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerIdentifier">reset_buyer_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalInstanceEndpoint">reset_procurement_portal_instance_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalSharedSecret">reset_procurement_portal_shared_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierDomain">reset_supplier_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierIdentifier">reset_supplier_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_buyer_domain` <a name="reset_buyer_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerDomain"></a>

```python
def reset_buyer_domain() -> None
```

##### `reset_buyer_identifier` <a name="reset_buyer_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetBuyerIdentifier"></a>

```python
def reset_buyer_identifier() -> None
```

##### `reset_procurement_portal_instance_endpoint` <a name="reset_procurement_portal_instance_endpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalInstanceEndpoint"></a>

```python
def reset_procurement_portal_instance_endpoint() -> None
```

##### `reset_procurement_portal_shared_secret` <a name="reset_procurement_portal_shared_secret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetProcurementPortalSharedSecret"></a>

```python
def reset_procurement_portal_shared_secret() -> None
```

##### `reset_supplier_domain` <a name="reset_supplier_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierDomain"></a>

```python
def reset_supplier_domain() -> None
```

##### `reset_supplier_identifier` <a name="reset_supplier_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resetSupplierIdentifier"></a>

```python
def reset_supplier_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomainInput">buyer_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifierInput">buyer_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpointInput">procurement_portal_instance_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecretInput">procurement_portal_shared_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomainInput">supplier_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifierInput">supplier_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain">buyer_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier">buyer_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint">procurement_portal_instance_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret">procurement_portal_shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain">supplier_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier">supplier_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `buyer_domain_input`<sup>Optional</sup> <a name="buyer_domain_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomainInput"></a>

```python
buyer_domain_input: str
```

- *Type:* str

---

##### `buyer_identifier_input`<sup>Optional</sup> <a name="buyer_identifier_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifierInput"></a>

```python
buyer_identifier_input: str
```

- *Type:* str

---

##### `procurement_portal_instance_endpoint_input`<sup>Optional</sup> <a name="procurement_portal_instance_endpoint_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpointInput"></a>

```python
procurement_portal_instance_endpoint_input: str
```

- *Type:* str

---

##### `procurement_portal_shared_secret_input`<sup>Optional</sup> <a name="procurement_portal_shared_secret_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecretInput"></a>

```python
procurement_portal_shared_secret_input: str
```

- *Type:* str

---

##### `supplier_domain_input`<sup>Optional</sup> <a name="supplier_domain_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomainInput"></a>

```python
supplier_domain_input: str
```

- *Type:* str

---

##### `supplier_identifier_input`<sup>Optional</sup> <a name="supplier_identifier_input" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifierInput"></a>

```python
supplier_identifier_input: str
```

- *Type:* str

---

##### `buyer_domain`<sup>Required</sup> <a name="buyer_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain"></a>

```python
buyer_domain: str
```

- *Type:* str

---

##### `buyer_identifier`<sup>Required</sup> <a name="buyer_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier"></a>

```python
buyer_identifier: str
```

- *Type:* str

---

##### `procurement_portal_instance_endpoint`<sup>Required</sup> <a name="procurement_portal_instance_endpoint" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint"></a>

```python
procurement_portal_instance_endpoint: str
```

- *Type:* str

---

##### `procurement_portal_shared_secret`<sup>Required</sup> <a name="procurement_portal_shared_secret" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret"></a>

```python
procurement_portal_shared_secret: str
```

- *Type:* str

---

##### `supplier_domain`<sup>Required</sup> <a name="supplier_domain" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain"></a>

```python
supplier_domain: str
```

- *Type:* str

---

##### `supplier_identifier`<sup>Required</sup> <a name="supplier_identifier" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier"></a>

```python
supplier_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | InvoicingProcurementPortalPreferenceTestEnvPreference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.invoicingProcurementPortalPreference.InvoicingProcurementPortalPreferenceTestEnvPreference">InvoicingProcurementPortalPreferenceTestEnvPreference</a>

---



