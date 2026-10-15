# `licensemanagerLicenseConfiguration` Submodule <a name="`licensemanagerLicenseConfiguration` Submodule" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseConfiguration <a name="LicensemanagerLicenseConfiguration" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration awscc_licensemanager_license_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  license_counting_type: str,
  name: str,
  description: str = None,
  disassociate_when_not_found: bool | IResolvable = None,
  license_count: typing.Union[int, float] = None,
  license_count_hard_limit: bool | IResolvable = None,
  license_expiry: typing.Union[int, float] = None,
  license_rules: typing.List[str] = None,
  product_information_list: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListStruct] = None,
  tags: IResolvable | typing.List[LicensemanagerLicenseConfigurationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCountingType">license_counting_type</a></code> | <code>str</code> | Dimension used to track the license inventory. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.disassociateWhenNotFound">disassociate_when_not_found</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, disassociates a resource when software is uninstalled. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | Number of licenses managed by the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCountHardLimit">license_count_hard_limit</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseExpiry">license_expiry</a></code> | <code>typing.Union[int, float]</code> | License configuration expiry as an epoch timestamp (seconds since 1970-01-01T00:00:00Z). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseRules">license_rules</a></code> | <code>typing.List[str]</code> | License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.productInformationList">product_information_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>]</code> | Product information. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>]</code> | Tags to add to the license configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `license_counting_type`<sup>Required</sup> <a name="license_counting_type" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCountingType"></a>

- *Type:* str

Dimension used to track the license inventory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Name of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.description"></a>

- *Type:* str

Description of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}

---

##### `disassociate_when_not_found`<sup>Optional</sup> <a name="disassociate_when_not_found" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.disassociateWhenNotFound"></a>

- *Type:* bool | cdktn.IResolvable

When true, disassociates a resource when software is uninstalled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#disassociate_when_not_found LicensemanagerLicenseConfiguration#disassociate_when_not_found}

---

##### `license_count`<sup>Optional</sup> <a name="license_count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCount"></a>

- *Type:* typing.Union[int, float]

Number of licenses managed by the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}

---

##### `license_count_hard_limit`<sup>Optional</sup> <a name="license_count_hard_limit" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCountHardLimit"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}

---

##### `license_expiry`<sup>Optional</sup> <a name="license_expiry" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseExpiry"></a>

- *Type:* typing.Union[int, float]

License configuration expiry as an epoch timestamp (seconds since 1970-01-01T00:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#license_expiry LicensemanagerLicenseConfiguration#license_expiry}

---

##### `license_rules`<sup>Optional</sup> <a name="license_rules" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseRules"></a>

- *Type:* typing.List[str]

License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}

---

##### `product_information_list`<sup>Optional</sup> <a name="product_information_list" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.productInformationList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>]

Product information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#product_information_list LicensemanagerLicenseConfiguration#product_information_list}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>]

Tags to add to the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putProductInformationList">put_product_information_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDisassociateWhenNotFound">reset_disassociate_when_not_found</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount">reset_license_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit">reset_license_count_hard_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseExpiry">reset_license_expiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules">reset_license_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetProductInformationList">reset_product_information_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_product_information_list` <a name="put_product_information_list" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putProductInformationList"></a>

```python
def put_product_information_list(
  value: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putProductInformationList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LicensemanagerLicenseConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disassociate_when_not_found` <a name="reset_disassociate_when_not_found" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDisassociateWhenNotFound"></a>

```python
def reset_disassociate_when_not_found() -> None
```

##### `reset_license_count` <a name="reset_license_count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount"></a>

```python
def reset_license_count() -> None
```

##### `reset_license_count_hard_limit` <a name="reset_license_count_hard_limit" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit"></a>

```python
def reset_license_count_hard_limit() -> None
```

##### `reset_license_expiry` <a name="reset_license_expiry" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseExpiry"></a>

```python
def reset_license_expiry() -> None
```

##### `reset_license_rules` <a name="reset_license_rules" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules"></a>

```python
def reset_license_rules() -> None
```

##### `reset_product_information_list` <a name="reset_product_information_list" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetProductInformationList"></a>

```python
def reset_product_information_list() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LicensemanagerLicenseConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LicensemanagerLicenseConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LicensemanagerLicenseConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LicensemanagerLicenseConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicenseConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationArn">license_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationId">license_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationList">product_information_list</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList">LicensemanagerLicenseConfigurationProductInformationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList">LicensemanagerLicenseConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFoundInput">disassociate_when_not_found_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput">license_count_hard_limit_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput">license_counting_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput">license_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiryInput">license_expiry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput">license_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationListInput">product_information_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFound">disassociate_when_not_found</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit">license_count_hard_limit</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType">license_counting_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiry">license_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules">license_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_configuration_arn`<sup>Required</sup> <a name="license_configuration_arn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationArn"></a>

```python
license_configuration_arn: str
```

- *Type:* str

---

##### `license_configuration_id`<sup>Required</sup> <a name="license_configuration_id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationId"></a>

```python
license_configuration_id: str
```

- *Type:* str

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `product_information_list`<sup>Required</sup> <a name="product_information_list" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationList"></a>

```python
product_information_list: LicensemanagerLicenseConfigurationProductInformationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList">LicensemanagerLicenseConfigurationProductInformationListStructList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags"></a>

```python
tags: LicensemanagerLicenseConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList">LicensemanagerLicenseConfigurationTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disassociate_when_not_found_input`<sup>Optional</sup> <a name="disassociate_when_not_found_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFoundInput"></a>

```python
disassociate_when_not_found_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `license_count_hard_limit_input`<sup>Optional</sup> <a name="license_count_hard_limit_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput"></a>

```python
license_count_hard_limit_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `license_counting_type_input`<sup>Optional</sup> <a name="license_counting_type_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput"></a>

```python
license_counting_type_input: str
```

- *Type:* str

---

##### `license_count_input`<sup>Optional</sup> <a name="license_count_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput"></a>

```python
license_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_expiry_input`<sup>Optional</sup> <a name="license_expiry_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiryInput"></a>

```python
license_expiry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_rules_input`<sup>Optional</sup> <a name="license_rules_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput"></a>

```python
license_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_information_list_input`<sup>Optional</sup> <a name="product_information_list_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationListInput"></a>

```python
product_information_list_input: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LicensemanagerLicenseConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disassociate_when_not_found`<sup>Required</sup> <a name="disassociate_when_not_found" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFound"></a>

```python
disassociate_when_not_found: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `license_count`<sup>Required</sup> <a name="license_count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount"></a>

```python
license_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_count_hard_limit`<sup>Required</sup> <a name="license_count_hard_limit" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit"></a>

```python
license_count_hard_limit: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `license_counting_type`<sup>Required</sup> <a name="license_counting_type" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType"></a>

```python
license_counting_type: str
```

- *Type:* str

---

##### `license_expiry`<sup>Required</sup> <a name="license_expiry" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiry"></a>

```python
license_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_rules`<sup>Required</sup> <a name="license_rules" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules"></a>

```python
license_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfigurationConfig <a name="LicensemanagerLicenseConfigurationConfig" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  license_counting_type: str,
  name: str,
  description: str = None,
  disassociate_when_not_found: bool | IResolvable = None,
  license_count: typing.Union[int, float] = None,
  license_count_hard_limit: bool | IResolvable = None,
  license_expiry: typing.Union[int, float] = None,
  license_rules: typing.List[str] = None,
  product_information_list: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListStruct] = None,
  tags: IResolvable | typing.List[LicensemanagerLicenseConfigurationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType">license_counting_type</a></code> | <code>str</code> | Dimension used to track the license inventory. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name">name</a></code> | <code>str</code> | Name of the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description">description</a></code> | <code>str</code> | Description of the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.disassociateWhenNotFound">disassociate_when_not_found</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, disassociates a resource when software is uninstalled. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | Number of licenses managed by the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit">license_count_hard_limit</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseExpiry">license_expiry</a></code> | <code>typing.Union[int, float]</code> | License configuration expiry as an epoch timestamp (seconds since 1970-01-01T00:00:00Z). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules">license_rules</a></code> | <code>typing.List[str]</code> | License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.productInformationList">product_information_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>]</code> | Product information. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>]</code> | Tags to add to the license configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `license_counting_type`<sup>Required</sup> <a name="license_counting_type" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType"></a>

```python
license_counting_type: str
```

- *Type:* str

Dimension used to track the license inventory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}

---

##### `disassociate_when_not_found`<sup>Optional</sup> <a name="disassociate_when_not_found" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.disassociateWhenNotFound"></a>

```python
disassociate_when_not_found: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, disassociates a resource when software is uninstalled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#disassociate_when_not_found LicensemanagerLicenseConfiguration#disassociate_when_not_found}

---

##### `license_count`<sup>Optional</sup> <a name="license_count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount"></a>

```python
license_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of licenses managed by the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}

---

##### `license_count_hard_limit`<sup>Optional</sup> <a name="license_count_hard_limit" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit"></a>

```python
license_count_hard_limit: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}

---

##### `license_expiry`<sup>Optional</sup> <a name="license_expiry" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseExpiry"></a>

```python
license_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

License configuration expiry as an epoch timestamp (seconds since 1970-01-01T00:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#license_expiry LicensemanagerLicenseConfiguration#license_expiry}

---

##### `license_rules`<sup>Optional</sup> <a name="license_rules" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules"></a>

```python
license_rules: typing.List[str]
```

- *Type:* typing.List[str]

License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}

---

##### `product_information_list`<sup>Optional</sup> <a name="product_information_list" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.productInformationList"></a>

```python
product_information_list: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>]

Product information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#product_information_list LicensemanagerLicenseConfiguration#product_information_list}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LicensemanagerLicenseConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>]

Tags to add to the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}

---

### LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct <a name="LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct(
  product_information_filter_comparator: str = None,
  product_information_filter_name: str = None,
  product_information_filter_value: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterComparator">product_information_filter_comparator</a></code> | <code>str</code> | Logical operator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterName">product_information_filter_name</a></code> | <code>str</code> | Filter name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterValue">product_information_filter_value</a></code> | <code>typing.List[str]</code> | Filter value. |

---

##### `product_information_filter_comparator`<sup>Optional</sup> <a name="product_information_filter_comparator" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterComparator"></a>

```python
product_information_filter_comparator: str
```

- *Type:* str

Logical operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#product_information_filter_comparator LicensemanagerLicenseConfiguration#product_information_filter_comparator}

---

##### `product_information_filter_name`<sup>Optional</sup> <a name="product_information_filter_name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterName"></a>

```python
product_information_filter_name: str
```

- *Type:* str

Filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#product_information_filter_name LicensemanagerLicenseConfiguration#product_information_filter_name}

---

##### `product_information_filter_value`<sup>Optional</sup> <a name="product_information_filter_value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterValue"></a>

```python
product_information_filter_value: typing.List[str]
```

- *Type:* typing.List[str]

Filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#product_information_filter_value LicensemanagerLicenseConfiguration#product_information_filter_value}

---

### LicensemanagerLicenseConfigurationProductInformationListStruct <a name="LicensemanagerLicenseConfigurationProductInformationListStruct" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct(
  product_information_filter_list: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct] = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.productInformationFilterList">product_information_filter_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>]</code> | A product information filter list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.resourceType">resource_type</a></code> | <code>str</code> | Resource type. The possible values are SSM_MANAGED \| RDS. |

---

##### `product_information_filter_list`<sup>Optional</sup> <a name="product_information_filter_list" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.productInformationFilterList"></a>

```python
product_information_filter_list: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>]

A product information filter list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#product_information_filter_list LicensemanagerLicenseConfiguration#product_information_filter_list}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Resource type. The possible values are SSM_MANAGED | RDS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#resource_type LicensemanagerLicenseConfiguration#resource_type}

---

### LicensemanagerLicenseConfigurationTags <a name="LicensemanagerLicenseConfigurationTags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#key LicensemanagerLicenseConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#value LicensemanagerLicenseConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#key LicensemanagerLicenseConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanager_license_configuration#value LicensemanagerLicenseConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList <a name="LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>]

---


### LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference <a name="LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterComparator">reset_product_information_filter_comparator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterName">reset_product_information_filter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterValue">reset_product_information_filter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_product_information_filter_comparator` <a name="reset_product_information_filter_comparator" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterComparator"></a>

```python
def reset_product_information_filter_comparator() -> None
```

##### `reset_product_information_filter_name` <a name="reset_product_information_filter_name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterName"></a>

```python
def reset_product_information_filter_name() -> None
```

##### `reset_product_information_filter_value` <a name="reset_product_information_filter_value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterValue"></a>

```python
def reset_product_information_filter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparatorInput">product_information_filter_comparator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterNameInput">product_information_filter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValueInput">product_information_filter_value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparator">product_information_filter_comparator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterName">product_information_filter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValue">product_information_filter_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `product_information_filter_comparator_input`<sup>Optional</sup> <a name="product_information_filter_comparator_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparatorInput"></a>

```python
product_information_filter_comparator_input: str
```

- *Type:* str

---

##### `product_information_filter_name_input`<sup>Optional</sup> <a name="product_information_filter_name_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterNameInput"></a>

```python
product_information_filter_name_input: str
```

- *Type:* str

---

##### `product_information_filter_value_input`<sup>Optional</sup> <a name="product_information_filter_value_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValueInput"></a>

```python
product_information_filter_value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `product_information_filter_comparator`<sup>Required</sup> <a name="product_information_filter_comparator" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparator"></a>

```python
product_information_filter_comparator: str
```

- *Type:* str

---

##### `product_information_filter_name`<sup>Required</sup> <a name="product_information_filter_name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterName"></a>

```python
product_information_filter_name: str
```

- *Type:* str

---

##### `product_information_filter_value`<sup>Required</sup> <a name="product_information_filter_value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValue"></a>

```python
product_information_filter_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>

---


### LicensemanagerLicenseConfigurationProductInformationListStructList <a name="LicensemanagerLicenseConfigurationProductInformationListStructList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseConfigurationProductInformationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>]

---


### LicensemanagerLicenseConfigurationProductInformationListStructOutputReference <a name="LicensemanagerLicenseConfigurationProductInformationListStructOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.putProductInformationFilterList">put_product_information_filter_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetProductInformationFilterList">reset_product_information_filter_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_product_information_filter_list` <a name="put_product_information_filter_list" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.putProductInformationFilterList"></a>

```python
def put_product_information_filter_list(
  value: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.putProductInformationFilterList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>]

---

##### `reset_product_information_filter_list` <a name="reset_product_information_filter_list" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetProductInformationFilterList"></a>

```python
def reset_product_information_filter_list() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterList">product_information_filter_list</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterListInput">product_information_filter_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `product_information_filter_list`<sup>Required</sup> <a name="product_information_filter_list" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterList"></a>

```python
product_information_filter_list: LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList</a>

---

##### `product_information_filter_list_input`<sup>Optional</sup> <a name="product_information_filter_list_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterListInput"></a>

```python
product_information_filter_list_input: IResolvable | typing.List[LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct</a>]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseConfigurationProductInformationListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct">LicensemanagerLicenseConfigurationProductInformationListStruct</a>

---


### LicensemanagerLicenseConfigurationTagsList <a name="LicensemanagerLicenseConfigurationTagsList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>]

---


### LicensemanagerLicenseConfigurationTagsOutputReference <a name="LicensemanagerLicenseConfigurationTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_configuration

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags">LicensemanagerLicenseConfigurationTags</a>

---



