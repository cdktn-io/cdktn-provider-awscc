# `licensemanagerLicenseAssetGroup` Submodule <a name="`licensemanagerLicenseAssetGroup` Submodule" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseAssetGroup <a name="LicensemanagerLicenseAssetGroup" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group awscc_licensemanager_license_asset_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  associated_license_asset_ruleset_ar_ns: typing.List[str],
  license_asset_group_configurations: IResolvable | typing.List[LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations],
  name: str,
  description: str = None,
  properties: IResolvable | typing.List[LicensemanagerLicenseAssetGroupProperties] = None,
  tags: IResolvable | typing.List[LicensemanagerLicenseAssetGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.associatedLicenseAssetRulesetArNs">associated_license_asset_ruleset_ar_ns</a></code> | <code>typing.List[str]</code> | ARNs of associated license asset rulesets. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.licenseAssetGroupConfigurations">license_asset_group_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>]</code> | License asset group configurations. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | License asset group name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | License asset group description. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.properties">properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>]</code> | License asset group properties. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>]</code> | Tags to add to the license asset group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_license_asset_ruleset_ar_ns`<sup>Required</sup> <a name="associated_license_asset_ruleset_ar_ns" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.associatedLicenseAssetRulesetArNs"></a>

- *Type:* typing.List[str]

ARNs of associated license asset rulesets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#associated_license_asset_ruleset_ar_ns LicensemanagerLicenseAssetGroup#associated_license_asset_ruleset_ar_ns}

---

##### `license_asset_group_configurations`<sup>Required</sup> <a name="license_asset_group_configurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.licenseAssetGroupConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>]

License asset group configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#license_asset_group_configurations LicensemanagerLicenseAssetGroup#license_asset_group_configurations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.name"></a>

- *Type:* str

License asset group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#name LicensemanagerLicenseAssetGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.description"></a>

- *Type:* str

License asset group description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#description LicensemanagerLicenseAssetGroup#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.properties"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>]

License asset group properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#properties LicensemanagerLicenseAssetGroup#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>]

Tags to add to the license asset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#tags LicensemanagerLicenseAssetGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putLicenseAssetGroupConfigurations">put_license_asset_group_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_license_asset_group_configurations` <a name="put_license_asset_group_configurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putLicenseAssetGroupConfigurations"></a>

```python
def put_license_asset_group_configurations(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putLicenseAssetGroupConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>]

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putProperties"></a>

```python
def put_properties(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetGroupProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LicensemanagerLicenseAssetGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LicensemanagerLicenseAssetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicenseAssetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn">license_asset_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations">license_asset_group_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList">LicensemanagerLicenseAssetGroupPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList">LicensemanagerLicenseAssetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNsInput">associated_license_asset_ruleset_ar_ns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurationsInput">license_asset_group_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.propertiesInput">properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs">associated_license_asset_ruleset_ar_ns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_asset_group_arn`<sup>Required</sup> <a name="license_asset_group_arn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn"></a>

```python
license_asset_group_arn: str
```

- *Type:* str

---

##### `license_asset_group_configurations`<sup>Required</sup> <a name="license_asset_group_configurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations"></a>

```python
license_asset_group_configurations: LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.properties"></a>

```python
properties: LicensemanagerLicenseAssetGroupPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList">LicensemanagerLicenseAssetGroupPropertiesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tags"></a>

```python
tags: LicensemanagerLicenseAssetGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList">LicensemanagerLicenseAssetGroupTagsList</a>

---

##### `associated_license_asset_ruleset_ar_ns_input`<sup>Optional</sup> <a name="associated_license_asset_ruleset_ar_ns_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNsInput"></a>

```python
associated_license_asset_ruleset_ar_ns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `license_asset_group_configurations_input`<sup>Optional</sup> <a name="license_asset_group_configurations_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurationsInput"></a>

```python
license_asset_group_configurations_input: IResolvable | typing.List[LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.propertiesInput"></a>

```python
properties_input: IResolvable | typing.List[LicensemanagerLicenseAssetGroupProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LicensemanagerLicenseAssetGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>]

---

##### `associated_license_asset_ruleset_ar_ns`<sup>Required</sup> <a name="associated_license_asset_ruleset_ar_ns" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs"></a>

```python
associated_license_asset_ruleset_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseAssetGroupConfig <a name="LicensemanagerLicenseAssetGroupConfig" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  associated_license_asset_ruleset_ar_ns: typing.List[str],
  license_asset_group_configurations: IResolvable | typing.List[LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations],
  name: str,
  description: str = None,
  properties: IResolvable | typing.List[LicensemanagerLicenseAssetGroupProperties] = None,
  tags: IResolvable | typing.List[LicensemanagerLicenseAssetGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.associatedLicenseAssetRulesetArNs">associated_license_asset_ruleset_ar_ns</a></code> | <code>typing.List[str]</code> | ARNs of associated license asset rulesets. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.licenseAssetGroupConfigurations">license_asset_group_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>]</code> | License asset group configurations. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.name">name</a></code> | <code>str</code> | License asset group name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.description">description</a></code> | <code>str</code> | License asset group description. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.properties">properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>]</code> | License asset group properties. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>]</code> | Tags to add to the license asset group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_license_asset_ruleset_ar_ns`<sup>Required</sup> <a name="associated_license_asset_ruleset_ar_ns" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.associatedLicenseAssetRulesetArNs"></a>

```python
associated_license_asset_ruleset_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

ARNs of associated license asset rulesets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#associated_license_asset_ruleset_ar_ns LicensemanagerLicenseAssetGroup#associated_license_asset_ruleset_ar_ns}

---

##### `license_asset_group_configurations`<sup>Required</sup> <a name="license_asset_group_configurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.licenseAssetGroupConfigurations"></a>

```python
license_asset_group_configurations: IResolvable | typing.List[LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>]

License asset group configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#license_asset_group_configurations LicensemanagerLicenseAssetGroup#license_asset_group_configurations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

License asset group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#name LicensemanagerLicenseAssetGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

License asset group description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#description LicensemanagerLicenseAssetGroup#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.properties"></a>

```python
properties: IResolvable | typing.List[LicensemanagerLicenseAssetGroupProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>]

License asset group properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#properties LicensemanagerLicenseAssetGroup#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LicensemanagerLicenseAssetGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>]

Tags to add to the license asset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#tags LicensemanagerLicenseAssetGroup#tags}

---

### LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations <a name="LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations(
  usage_dimension: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.property.usageDimension">usage_dimension</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#usage_dimension LicensemanagerLicenseAssetGroup#usage_dimension}. |

---

##### `usage_dimension`<sup>Optional</sup> <a name="usage_dimension" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.property.usageDimension"></a>

```python
usage_dimension: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#usage_dimension LicensemanagerLicenseAssetGroup#usage_dimension}.

---

### LicensemanagerLicenseAssetGroupProperties <a name="LicensemanagerLicenseAssetGroupProperties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}.

---

### LicensemanagerLicenseAssetGroupTags <a name="LicensemanagerLicenseAssetGroupTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList <a name="LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>]

---


### LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference <a name="LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resetUsageDimension">reset_usage_dimension</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_usage_dimension` <a name="reset_usage_dimension" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resetUsageDimension"></a>

```python
def reset_usage_dimension() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimensionInput">usage_dimension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension">usage_dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `usage_dimension_input`<sup>Optional</sup> <a name="usage_dimension_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimensionInput"></a>

```python
usage_dimension_input: str
```

- *Type:* str

---

##### `usage_dimension`<sup>Required</sup> <a name="usage_dimension" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension"></a>

```python
usage_dimension: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>

---


### LicensemanagerLicenseAssetGroupPropertiesList <a name="LicensemanagerLicenseAssetGroupPropertiesList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetGroupPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetGroupProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>]

---


### LicensemanagerLicenseAssetGroupPropertiesOutputReference <a name="LicensemanagerLicenseAssetGroupPropertiesOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetGroupProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>

---


### LicensemanagerLicenseAssetGroupTagsList <a name="LicensemanagerLicenseAssetGroupTagsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>]

---


### LicensemanagerLicenseAssetGroupTagsOutputReference <a name="LicensemanagerLicenseAssetGroupTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_group

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>

---



