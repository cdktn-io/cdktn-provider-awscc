# `licensemanagerLicense` Submodule <a name="`licensemanagerLicense` Submodule" id="@cdktn/provider-awscc.licensemanagerLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicense <a name="LicensemanagerLicense" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license awscc_licensemanager_license}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicense(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  beneficiary: str,
  consumption_configuration: LicensemanagerLicenseConsumptionConfiguration,
  entitlements: IResolvable | typing.List[LicensemanagerLicenseEntitlements],
  home_region: str,
  issuer: LicensemanagerLicenseIssuer,
  license_name: str,
  product_name: str,
  product_sku: str,
  validity: LicensemanagerLicenseValidity,
  license_metadata: IResolvable | typing.List[LicensemanagerLicenseLicenseMetadata] = None,
  status: str = None,
  tags: IResolvable | typing.List[LicensemanagerLicenseTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.beneficiary">beneficiary</a></code> | <code>str</code> | Beneficiary of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.consumptionConfiguration">consumption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.entitlements">entitlements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.homeRegion">home_region</a></code> | <code>str</code> | Home region for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.issuer">issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.licenseName">license_name</a></code> | <code>str</code> | Name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.productName">product_name</a></code> | <code>str</code> | Product name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.productSku">product_sku</a></code> | <code>str</code> | ProductSKU of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.licenseMetadata">license_metadata</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>]</code> | A list of tags to attach. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `beneficiary`<sup>Required</sup> <a name="beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.beneficiary"></a>

- *Type:* str

Beneficiary of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#beneficiary LicensemanagerLicense#beneficiary}

---

##### `consumption_configuration`<sup>Required</sup> <a name="consumption_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.consumptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}.

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.entitlements"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}.

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.homeRegion"></a>

- *Type:* str

Home region for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#home_region LicensemanagerLicense#home_region}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.issuer"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}.

---

##### `license_name`<sup>Required</sup> <a name="license_name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.licenseName"></a>

- *Type:* str

Name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#license_name LicensemanagerLicense#license_name}

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.productName"></a>

- *Type:* str

Product name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#product_name LicensemanagerLicense#product_name}

---

##### `product_sku`<sup>Required</sup> <a name="product_sku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.productSku"></a>

- *Type:* str

ProductSKU of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#product_sku LicensemanagerLicense#product_sku}

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.validity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}.

---

##### `license_metadata`<sup>Optional</sup> <a name="license_metadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.licenseMetadata"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>]

A list of tags to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#tags LicensemanagerLicense#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration">put_consumption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements">put_entitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer">put_issuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata">put_license_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity">put_validity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetLicenseMetadata">reset_license_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_consumption_configuration` <a name="put_consumption_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration"></a>

```python
def put_consumption_configuration(
  borrow_configuration: LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration = None,
  provisional_configuration: LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration = None,
  renew_type: str = None
) -> None
```

###### `borrow_configuration`<sup>Optional</sup> <a name="borrow_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration.parameter.borrowConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}.

---

###### `provisional_configuration`<sup>Optional</sup> <a name="provisional_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration.parameter.provisionalConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}.

---

###### `renew_type`<sup>Optional</sup> <a name="renew_type" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration.parameter.renewType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}.

---

##### `put_entitlements` <a name="put_entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements"></a>

```python
def put_entitlements(
  value: IResolvable | typing.List[LicensemanagerLicenseEntitlements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>]

---

##### `put_issuer` <a name="put_issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer"></a>

```python
def put_issuer(
  name: str,
  sign_key: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

###### `sign_key`<sup>Optional</sup> <a name="sign_key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer.parameter.signKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}.

---

##### `put_license_metadata` <a name="put_license_metadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata"></a>

```python
def put_license_metadata(
  value: IResolvable | typing.List[LicensemanagerLicenseLicenseMetadata]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LicensemanagerLicenseTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>]

---

##### `put_validity` <a name="put_validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity"></a>

```python
def put_validity(
  begin: str,
  end: str
) -> None
```

###### `begin`<sup>Required</sup> <a name="begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity.parameter.begin"></a>

- *Type:* str

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#begin LicensemanagerLicense#begin}

---

###### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity.parameter.end"></a>

- *Type:* str

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#end LicensemanagerLicense#end}

---

##### `reset_license_metadata` <a name="reset_license_metadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetLicenseMetadata"></a>

```python
def reset_license_metadata() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LicensemanagerLicense resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicense.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicense.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicense.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicense.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LicensemanagerLicense resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LicensemanagerLicense to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LicensemanagerLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfiguration">consumption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlements">entitlements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList">LicensemanagerLicenseEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuer">issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference">LicensemanagerLicenseIssuerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseArn">license_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadata">license_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList">LicensemanagerLicenseLicenseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList">LicensemanagerLicenseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference">LicensemanagerLicenseValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiaryInput">beneficiary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfigurationInput">consumption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlementsInput">entitlements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegionInput">home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuerInput">issuer_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadataInput">license_metadata_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseNameInput">license_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productNameInput">product_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSkuInput">product_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validityInput">validity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiary">beneficiary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseName">license_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productName">product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSku">product_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `consumption_configuration`<sup>Required</sup> <a name="consumption_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfiguration"></a>

```python
consumption_configuration: LicensemanagerLicenseConsumptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationOutputReference</a>

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlements"></a>

```python
entitlements: LicensemanagerLicenseEntitlementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList">LicensemanagerLicenseEntitlementsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuer"></a>

```python
issuer: LicensemanagerLicenseIssuerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference">LicensemanagerLicenseIssuerOutputReference</a>

---

##### `license_arn`<sup>Required</sup> <a name="license_arn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseArn"></a>

```python
license_arn: str
```

- *Type:* str

---

##### `license_metadata`<sup>Required</sup> <a name="license_metadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadata"></a>

```python
license_metadata: LicensemanagerLicenseLicenseMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList">LicensemanagerLicenseLicenseMetadataList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tags"></a>

```python
tags: LicensemanagerLicenseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList">LicensemanagerLicenseTagsList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validity"></a>

```python
validity: LicensemanagerLicenseValidityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference">LicensemanagerLicenseValidityOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `beneficiary_input`<sup>Optional</sup> <a name="beneficiary_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiaryInput"></a>

```python
beneficiary_input: str
```

- *Type:* str

---

##### `consumption_configuration_input`<sup>Optional</sup> <a name="consumption_configuration_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfigurationInput"></a>

```python
consumption_configuration_input: IResolvable | LicensemanagerLicenseConsumptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---

##### `entitlements_input`<sup>Optional</sup> <a name="entitlements_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlementsInput"></a>

```python
entitlements_input: IResolvable | typing.List[LicensemanagerLicenseEntitlements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>]

---

##### `home_region_input`<sup>Optional</sup> <a name="home_region_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegionInput"></a>

```python
home_region_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuerInput"></a>

```python
issuer_input: IResolvable | LicensemanagerLicenseIssuer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---

##### `license_metadata_input`<sup>Optional</sup> <a name="license_metadata_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadataInput"></a>

```python
license_metadata_input: IResolvable | typing.List[LicensemanagerLicenseLicenseMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>]

---

##### `license_name_input`<sup>Optional</sup> <a name="license_name_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseNameInput"></a>

```python
license_name_input: str
```

- *Type:* str

---

##### `product_name_input`<sup>Optional</sup> <a name="product_name_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productNameInput"></a>

```python
product_name_input: str
```

- *Type:* str

---

##### `product_sku_input`<sup>Optional</sup> <a name="product_sku_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSkuInput"></a>

```python
product_sku_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LicensemanagerLicenseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>]

---

##### `validity_input`<sup>Optional</sup> <a name="validity_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validityInput"></a>

```python
validity_input: IResolvable | LicensemanagerLicenseValidity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---

##### `beneficiary`<sup>Required</sup> <a name="beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiary"></a>

```python
beneficiary: str
```

- *Type:* str

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `license_name`<sup>Required</sup> <a name="license_name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseName"></a>

```python
license_name: str
```

- *Type:* str

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productName"></a>

```python
product_name: str
```

- *Type:* str

---

##### `product_sku`<sup>Required</sup> <a name="product_sku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSku"></a>

```python
product_sku: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfig <a name="LicensemanagerLicenseConfig" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  beneficiary: str,
  consumption_configuration: LicensemanagerLicenseConsumptionConfiguration,
  entitlements: IResolvable | typing.List[LicensemanagerLicenseEntitlements],
  home_region: str,
  issuer: LicensemanagerLicenseIssuer,
  license_name: str,
  product_name: str,
  product_sku: str,
  validity: LicensemanagerLicenseValidity,
  license_metadata: IResolvable | typing.List[LicensemanagerLicenseLicenseMetadata] = None,
  status: str = None,
  tags: IResolvable | typing.List[LicensemanagerLicenseTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.beneficiary">beneficiary</a></code> | <code>str</code> | Beneficiary of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.consumptionConfiguration">consumption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.entitlements">entitlements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.homeRegion">home_region</a></code> | <code>str</code> | Home region for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.issuer">issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseName">license_name</a></code> | <code>str</code> | Name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productName">product_name</a></code> | <code>str</code> | Product name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productSku">product_sku</a></code> | <code>str</code> | ProductSKU of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseMetadata">license_metadata</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>]</code> | A list of tags to attach. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `beneficiary`<sup>Required</sup> <a name="beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.beneficiary"></a>

```python
beneficiary: str
```

- *Type:* str

Beneficiary of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#beneficiary LicensemanagerLicense#beneficiary}

---

##### `consumption_configuration`<sup>Required</sup> <a name="consumption_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.consumptionConfiguration"></a>

```python
consumption_configuration: LicensemanagerLicenseConsumptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}.

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.entitlements"></a>

```python
entitlements: IResolvable | typing.List[LicensemanagerLicenseEntitlements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}.

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

Home region for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#home_region LicensemanagerLicense#home_region}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.issuer"></a>

```python
issuer: LicensemanagerLicenseIssuer
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}.

---

##### `license_name`<sup>Required</sup> <a name="license_name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseName"></a>

```python
license_name: str
```

- *Type:* str

Name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#license_name LicensemanagerLicense#license_name}

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productName"></a>

```python
product_name: str
```

- *Type:* str

Product name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#product_name LicensemanagerLicense#product_name}

---

##### `product_sku`<sup>Required</sup> <a name="product_sku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productSku"></a>

```python
product_sku: str
```

- *Type:* str

ProductSKU of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#product_sku LicensemanagerLicense#product_sku}

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.validity"></a>

```python
validity: LicensemanagerLicenseValidity
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}.

---

##### `license_metadata`<sup>Optional</sup> <a name="license_metadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseMetadata"></a>

```python
license_metadata: IResolvable | typing.List[LicensemanagerLicenseLicenseMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LicensemanagerLicenseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>]

A list of tags to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#tags LicensemanagerLicense#tags}

---

### LicensemanagerLicenseConsumptionConfiguration <a name="LicensemanagerLicenseConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration(
  borrow_configuration: LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration = None,
  provisional_configuration: LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration = None,
  renew_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.borrowConfiguration">borrow_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.provisionalConfiguration">provisional_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.renewType">renew_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}. |

---

##### `borrow_configuration`<sup>Optional</sup> <a name="borrow_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.borrowConfiguration"></a>

```python
borrow_configuration: LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}.

---

##### `provisional_configuration`<sup>Optional</sup> <a name="provisional_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.provisionalConfiguration"></a>

```python
provisional_configuration: LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}.

---

##### `renew_type`<sup>Optional</sup> <a name="renew_type" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.renewType"></a>

```python
renew_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}.

---

### LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration <a name="LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration(
  allow_early_check_in: bool | IResolvable = None,
  max_time_to_live_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.allowEarlyCheckIn">allow_early_check_in</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.maxTimeToLiveInMinutes">max_time_to_live_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}. |

---

##### `allow_early_check_in`<sup>Optional</sup> <a name="allow_early_check_in" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.allowEarlyCheckIn"></a>

```python
allow_early_check_in: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}.

---

##### `max_time_to_live_in_minutes`<sup>Optional</sup> <a name="max_time_to_live_in_minutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.maxTimeToLiveInMinutes"></a>

```python
max_time_to_live_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

### LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration <a name="LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration(
  max_time_to_live_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.property.maxTimeToLiveInMinutes">max_time_to_live_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}. |

---

##### `max_time_to_live_in_minutes`<sup>Optional</sup> <a name="max_time_to_live_in_minutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.property.maxTimeToLiveInMinutes"></a>

```python
max_time_to_live_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

### LicensemanagerLicenseEntitlements <a name="LicensemanagerLicenseEntitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseEntitlements(
  name: str,
  unit: str,
  allow_check_in: bool | IResolvable = None,
  max_count: typing.Union[int, float] = None,
  overage: bool | IResolvable = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#unit LicensemanagerLicense#unit}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.allowCheckIn">allow_check_in</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#allow_check_in LicensemanagerLicense#allow_check_in}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_count LicensemanagerLicense#max_count}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.overage">overage</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#overage LicensemanagerLicense#overage}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#unit LicensemanagerLicense#unit}.

---

##### `allow_check_in`<sup>Optional</sup> <a name="allow_check_in" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.allowCheckIn"></a>

```python
allow_check_in: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#allow_check_in LicensemanagerLicense#allow_check_in}.

---

##### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_count LicensemanagerLicense#max_count}.

---

##### `overage`<sup>Optional</sup> <a name="overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.overage"></a>

```python
overage: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#overage LicensemanagerLicense#overage}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}.

---

### LicensemanagerLicenseIssuer <a name="LicensemanagerLicenseIssuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseIssuer(
  name: str,
  sign_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.signKey">sign_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `sign_key`<sup>Optional</sup> <a name="sign_key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.signKey"></a>

```python
sign_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}.

---

### LicensemanagerLicenseLicenseMetadata <a name="LicensemanagerLicenseLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseLicenseMetadata(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}.

---

### LicensemanagerLicenseTags <a name="LicensemanagerLicenseTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#key LicensemanagerLicense#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}

---

### LicensemanagerLicenseValidity <a name="LicensemanagerLicenseValidity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseValidity(
  begin: str,
  end: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.begin">begin</a></code> | <code>str</code> | Validity begin date for the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.end">end</a></code> | <code>str</code> | Validity begin date for the license. |

---

##### `begin`<sup>Required</sup> <a name="begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.begin"></a>

```python
begin: str
```

- *Type:* str

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#begin LicensemanagerLicense#begin}

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.end"></a>

```python
end: str
```

- *Type:* str

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#end LicensemanagerLicense#end}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetAllowEarlyCheckIn">reset_allow_early_check_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetMaxTimeToLiveInMinutes">reset_max_time_to_live_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_early_check_in` <a name="reset_allow_early_check_in" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetAllowEarlyCheckIn"></a>

```python
def reset_allow_early_check_in() -> None
```

##### `reset_max_time_to_live_in_minutes` <a name="reset_max_time_to_live_in_minutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetMaxTimeToLiveInMinutes"></a>

```python
def reset_max_time_to_live_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckInInput">allow_early_check_in_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutesInput">max_time_to_live_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn">allow_early_check_in</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes">max_time_to_live_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_early_check_in_input`<sup>Optional</sup> <a name="allow_early_check_in_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckInInput"></a>

```python
allow_early_check_in_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_time_to_live_in_minutes_input`<sup>Optional</sup> <a name="max_time_to_live_in_minutes_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutesInput"></a>

```python
max_time_to_live_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_early_check_in`<sup>Required</sup> <a name="allow_early_check_in" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn"></a>

```python
allow_early_check_in: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_time_to_live_in_minutes`<sup>Required</sup> <a name="max_time_to_live_in_minutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```python
max_time_to_live_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---


### LicensemanagerLicenseConsumptionConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration">put_borrow_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration">put_provisional_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetBorrowConfiguration">reset_borrow_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetProvisionalConfiguration">reset_provisional_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetRenewType">reset_renew_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_borrow_configuration` <a name="put_borrow_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration"></a>

```python
def put_borrow_configuration(
  allow_early_check_in: bool | IResolvable = None,
  max_time_to_live_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `allow_early_check_in`<sup>Optional</sup> <a name="allow_early_check_in" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration.parameter.allowEarlyCheckIn"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}.

---

###### `max_time_to_live_in_minutes`<sup>Optional</sup> <a name="max_time_to_live_in_minutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration.parameter.maxTimeToLiveInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

##### `put_provisional_configuration` <a name="put_provisional_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration"></a>

```python
def put_provisional_configuration(
  max_time_to_live_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `max_time_to_live_in_minutes`<sup>Optional</sup> <a name="max_time_to_live_in_minutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration.parameter.maxTimeToLiveInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

##### `reset_borrow_configuration` <a name="reset_borrow_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetBorrowConfiguration"></a>

```python
def reset_borrow_configuration() -> None
```

##### `reset_provisional_configuration` <a name="reset_provisional_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetProvisionalConfiguration"></a>

```python
def reset_provisional_configuration() -> None
```

##### `reset_renew_type` <a name="reset_renew_type" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetRenewType"></a>

```python
def reset_renew_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration">borrow_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration">provisional_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfigurationInput">borrow_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfigurationInput">provisional_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewTypeInput">renew_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType">renew_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `borrow_configuration`<sup>Required</sup> <a name="borrow_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration"></a>

```python
borrow_configuration: LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a>

---

##### `provisional_configuration`<sup>Required</sup> <a name="provisional_configuration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration"></a>

```python
provisional_configuration: LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a>

---

##### `borrow_configuration_input`<sup>Optional</sup> <a name="borrow_configuration_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfigurationInput"></a>

```python
borrow_configuration_input: IResolvable | LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---

##### `provisional_configuration_input`<sup>Optional</sup> <a name="provisional_configuration_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfigurationInput"></a>

```python
provisional_configuration_input: IResolvable | LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---

##### `renew_type_input`<sup>Optional</sup> <a name="renew_type_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewTypeInput"></a>

```python
renew_type_input: str
```

- *Type:* str

---

##### `renew_type`<sup>Required</sup> <a name="renew_type" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType"></a>

```python
renew_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseConsumptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---


### LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resetMaxTimeToLiveInMinutes">reset_max_time_to_live_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_time_to_live_in_minutes` <a name="reset_max_time_to_live_in_minutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resetMaxTimeToLiveInMinutes"></a>

```python
def reset_max_time_to_live_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutesInput">max_time_to_live_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes">max_time_to_live_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_time_to_live_in_minutes_input`<sup>Optional</sup> <a name="max_time_to_live_in_minutes_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutesInput"></a>

```python
max_time_to_live_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_time_to_live_in_minutes`<sup>Required</sup> <a name="max_time_to_live_in_minutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```python
max_time_to_live_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---


### LicensemanagerLicenseEntitlementsList <a name="LicensemanagerLicenseEntitlementsList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseEntitlementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseEntitlements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>]

---


### LicensemanagerLicenseEntitlementsOutputReference <a name="LicensemanagerLicenseEntitlementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetAllowCheckIn">reset_allow_check_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetMaxCount">reset_max_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetOverage">reset_overage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_check_in` <a name="reset_allow_check_in" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetAllowCheckIn"></a>

```python
def reset_allow_check_in() -> None
```

##### `reset_max_count` <a name="reset_max_count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetMaxCount"></a>

```python
def reset_max_count() -> None
```

##### `reset_overage` <a name="reset_overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetOverage"></a>

```python
def reset_overage() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckInInput">allow_check_in_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCountInput">max_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overageInput">overage_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn">allow_check_in</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overage">overage</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_check_in_input`<sup>Optional</sup> <a name="allow_check_in_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckInInput"></a>

```python
allow_check_in_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_count_input`<sup>Optional</sup> <a name="max_count_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCountInput"></a>

```python
max_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `overage_input`<sup>Optional</sup> <a name="overage_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overageInput"></a>

```python
overage_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `allow_check_in`<sup>Required</sup> <a name="allow_check_in" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn"></a>

```python
allow_check_in: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_count`<sup>Required</sup> <a name="max_count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `overage`<sup>Required</sup> <a name="overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overage"></a>

```python
overage: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseEntitlements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>

---


### LicensemanagerLicenseIssuerOutputReference <a name="LicensemanagerLicenseIssuerOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resetSignKey">reset_sign_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sign_key` <a name="reset_sign_key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resetSignKey"></a>

```python
def reset_sign_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKeyInput">sign_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKey">sign_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sign_key_input`<sup>Optional</sup> <a name="sign_key_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKeyInput"></a>

```python
sign_key_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_key`<sup>Required</sup> <a name="sign_key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKey"></a>

```python
sign_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseIssuer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---


### LicensemanagerLicenseLicenseMetadataList <a name="LicensemanagerLicenseLicenseMetadataList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseLicenseMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseLicenseMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>]

---


### LicensemanagerLicenseLicenseMetadataOutputReference <a name="LicensemanagerLicenseLicenseMetadataOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseLicenseMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>

---


### LicensemanagerLicenseTagsList <a name="LicensemanagerLicenseTagsList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>]

---


### LicensemanagerLicenseTagsOutputReference <a name="LicensemanagerLicenseTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>

---


### LicensemanagerLicenseValidityOutputReference <a name="LicensemanagerLicenseValidityOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license

licensemanagerLicense.LicensemanagerLicenseValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.beginInput">begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.begin">begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `begin_input`<sup>Optional</sup> <a name="begin_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.beginInput"></a>

```python
begin_input: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `begin`<sup>Required</sup> <a name="begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.begin"></a>

```python
begin: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseValidity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---



