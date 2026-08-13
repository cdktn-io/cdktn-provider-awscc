# `licensemanagerLicenseAssetRuleSet` Submodule <a name="`licensemanagerLicenseAssetRuleSet` Submodule" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseAssetRuleSet <a name="LicensemanagerLicenseAssetRuleSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set awscc_licensemanager_license_asset_rule_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  rules: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRules],
  description: str = None,
  tags: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.name">name</a></code> | <code>str</code> | License asset ruleset name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>]</code> | License asset rules. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.description">description</a></code> | <code>str</code> | License asset ruleset description. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>]</code> | Tags to add to the license asset ruleset. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.name"></a>

- *Type:* str

License asset ruleset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#name LicensemanagerLicenseAssetRuleSet#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>]

License asset rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#rules LicensemanagerLicenseAssetRuleSet#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.description"></a>

- *Type:* str

License asset ruleset description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#description LicensemanagerLicenseAssetRuleSet#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>]

Tags to add to the license asset ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#tags LicensemanagerLicenseAssetRuleSet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LicensemanagerLicenseAssetRuleSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isConstruct"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LicensemanagerLicenseAssetRuleSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LicensemanagerLicenseAssetRuleSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LicensemanagerLicenseAssetRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicenseAssetRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.licenseAssetRulesetArn">license_asset_ruleset_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList">LicensemanagerLicenseAssetRuleSetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList">LicensemanagerLicenseAssetRuleSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_asset_ruleset_arn`<sup>Required</sup> <a name="license_asset_ruleset_arn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.licenseAssetRulesetArn"></a>

```python
license_asset_ruleset_arn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rules"></a>

```python
rules: LicensemanagerLicenseAssetRuleSetRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList">LicensemanagerLicenseAssetRuleSetRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tags"></a>

```python
tags: LicensemanagerLicenseAssetRuleSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList">LicensemanagerLicenseAssetRuleSetTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseAssetRuleSetConfig <a name="LicensemanagerLicenseAssetRuleSetConfig" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  rules: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRules],
  description: str = None,
  tags: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.name">name</a></code> | <code>str</code> | License asset ruleset name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>]</code> | License asset rules. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.description">description</a></code> | <code>str</code> | License asset ruleset description. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>]</code> | Tags to add to the license asset ruleset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

License asset ruleset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#name LicensemanagerLicenseAssetRuleSet#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>]

License asset rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#rules LicensemanagerLicenseAssetRuleSet#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

License asset ruleset description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#description LicensemanagerLicenseAssetRuleSet#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>]

Tags to add to the license asset ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#tags LicensemanagerLicenseAssetRuleSet#tags}

---

### LicensemanagerLicenseAssetRuleSetRules <a name="LicensemanagerLicenseAssetRuleSetRules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules(
  rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatement
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules.property.ruleStatement">rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a></code> | Rule statement. Specify exactly one of InstanceRuleStatement, LicenseRuleStatement, or LicenseConfigurationRuleStatement. |

---

##### `rule_statement`<sup>Required</sup> <a name="rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules.property.ruleStatement"></a>

```python
rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a>

Rule statement. Specify exactly one of InstanceRuleStatement, LicenseRuleStatement, or LicenseConfigurationRuleStatement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#rule_statement LicensemanagerLicenseAssetRuleSet#rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement(
  instance_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement = None,
  license_configuration_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement = None,
  license_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.instanceRuleStatement">instance_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a></code> | Instance rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseConfigurationRuleStatement">license_configuration_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a></code> | License configuration rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseRuleStatement">license_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a></code> | License rule statement. |

---

##### `instance_rule_statement`<sup>Optional</sup> <a name="instance_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.instanceRuleStatement"></a>

```python
instance_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

Instance rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#instance_rule_statement LicensemanagerLicenseAssetRuleSet#instance_rule_statement}

---

##### `license_configuration_rule_statement`<sup>Optional</sup> <a name="license_configuration_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseConfigurationRuleStatement"></a>

```python
license_configuration_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

License configuration rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#license_configuration_rule_statement LicensemanagerLicenseAssetRuleSet#license_configuration_rule_statement}

---

##### `license_rule_statement`<sup>Optional</sup> <a name="license_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseRuleStatement"></a>

```python
license_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

License rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#license_rule_statement LicensemanagerLicenseAssetRuleSet#license_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement(
  and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement = None,
  matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement = None,
  or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.andRuleStatement">and_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a></code> | AND rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.matchingRuleStatement">matching_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a></code> | Matching rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.orRuleStatement">or_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a></code> | OR rule statement. |

---

##### `and_rule_statement`<sup>Optional</sup> <a name="and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.andRuleStatement"></a>

```python
and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

##### `matching_rule_statement`<sup>Optional</sup> <a name="matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.matchingRuleStatement"></a>

```python
matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

##### `or_rule_statement`<sup>Optional</sup> <a name="or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.orRuleStatement"></a>

```python
or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement.property.matchingRuleStatements">matching_rule_statements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement.property.matchingRuleStatements"></a>

```python
matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>str</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch">key_to_match</a></code> | <code>str</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.constraint">constraint</a></code> | <code>str</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.keyToMatch">key_to_match</a></code> | <code>str</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement.property.matchingRuleStatements">matching_rule_statements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement.property.matchingRuleStatements"></a>

```python
matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>str</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch">key_to_match</a></code> | <code>str</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement(
  and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement = None,
  matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement = None,
  or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.andRuleStatement">and_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a></code> | AND rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.matchingRuleStatement">matching_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a></code> | Matching rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.orRuleStatement">or_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a></code> | OR rule statement. |

---

##### `and_rule_statement`<sup>Optional</sup> <a name="and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.andRuleStatement"></a>

```python
and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

##### `matching_rule_statement`<sup>Optional</sup> <a name="matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.matchingRuleStatement"></a>

```python
matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

##### `or_rule_statement`<sup>Optional</sup> <a name="or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.orRuleStatement"></a>

```python
or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement.property.matchingRuleStatements">matching_rule_statements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement.property.matchingRuleStatements"></a>

```python
matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>str</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch">key_to_match</a></code> | <code>str</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.constraint">constraint</a></code> | <code>str</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.keyToMatch">key_to_match</a></code> | <code>str</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement.property.matchingRuleStatements">matching_rule_statements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement.property.matchingRuleStatements"></a>

```python
matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>str</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch">key_to_match</a></code> | <code>str</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement(
  and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement = None,
  matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement = None,
  or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.andRuleStatement">and_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a></code> | AND rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.matchingRuleStatement">matching_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a></code> | Matching rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.orRuleStatement">or_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a></code> | OR rule statement. |

---

##### `and_rule_statement`<sup>Optional</sup> <a name="and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.andRuleStatement"></a>

```python
and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

##### `matching_rule_statement`<sup>Optional</sup> <a name="matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.matchingRuleStatement"></a>

```python
matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

##### `or_rule_statement`<sup>Optional</sup> <a name="or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.orRuleStatement"></a>

```python
or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement.property.matchingRuleStatements">matching_rule_statements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement.property.matchingRuleStatements"></a>

```python
matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>str</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch">key_to_match</a></code> | <code>str</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.constraint">constraint</a></code> | <code>str</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.keyToMatch">key_to_match</a></code> | <code>str</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement.property.matchingRuleStatements">matching_rule_statements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement.property.matchingRuleStatements"></a>

```python
matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>str</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch">key_to_match</a></code> | <code>str</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetTags <a name="LicensemanagerLicenseAssetRuleSetTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key LicensemanagerLicenseAssetRuleSet#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value LicensemanagerLicenseAssetRuleSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key LicensemanagerLicenseAssetRuleSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value LicensemanagerLicenseAssetRuleSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseAssetRuleSetRulesList <a name="LicensemanagerLicenseAssetRuleSetRulesList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetRuleSetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>]

---


### LicensemanagerLicenseAssetRuleSetRulesOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement">put_rule_statement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule_statement` <a name="put_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement"></a>

```python
def put_rule_statement(
  instance_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement = None,
  license_configuration_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement = None,
  license_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement = None
) -> None
```

###### `instance_rule_statement`<sup>Optional</sup> <a name="instance_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement.parameter.instanceRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

Instance rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#instance_rule_statement LicensemanagerLicenseAssetRuleSet#instance_rule_statement}

---

###### `license_configuration_rule_statement`<sup>Optional</sup> <a name="license_configuration_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement.parameter.licenseConfigurationRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

License configuration rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#license_configuration_rule_statement LicensemanagerLicenseAssetRuleSet#license_configuration_rule_statement}

---

###### `license_rule_statement`<sup>Optional</sup> <a name="license_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement.parameter.licenseRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

License rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#license_rule_statement LicensemanagerLicenseAssetRuleSet#license_rule_statement}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatement">rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatementInput">rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_statement`<sup>Required</sup> <a name="rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatement"></a>

```python
rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference</a>

---

##### `rule_statement_input`<sup>Optional</sup> <a name="rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatementInput"></a>

```python
rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">reset_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">reset_key_to_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">reset_value_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_constraint` <a name="reset_constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```python
def reset_constraint() -> None
```

##### `reset_key_to_match` <a name="reset_key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```python
def reset_key_to_match() -> None
```

##### `reset_value_to_match` <a name="reset_value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```python
def reset_value_to_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">key_to_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">value_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">key_to_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `key_to_match_input`<sup>Optional</sup> <a name="key_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```python
key_to_match_input: str
```

- *Type:* str

---

##### `value_to_match_input`<sup>Optional</sup> <a name="value_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```python
value_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `key_to_match`<sup>Required</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

---

##### `value_to_match`<sup>Required</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements">put_matching_rule_statements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements">reset_matching_rule_statements</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_matching_rule_statements` <a name="put_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements"></a>

```python
def put_matching_rule_statements(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>]

---

##### `reset_matching_rule_statements` <a name="reset_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```python
def reset_matching_rule_statements() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">matching_rule_statements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput">matching_rule_statements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_rule_statements`<sup>Required</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```python
matching_rule_statements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `matching_rule_statements_input`<sup>Optional</sup> <a name="matching_rule_statements_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```python
matching_rule_statements_input: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetConstraint">reset_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch">reset_key_to_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch">reset_value_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_constraint` <a name="reset_constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetConstraint"></a>

```python
def reset_constraint() -> None
```

##### `reset_key_to_match` <a name="reset_key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch"></a>

```python
def reset_key_to_match() -> None
```

##### `reset_value_to_match` <a name="reset_value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch"></a>

```python
def reset_value_to_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput">key_to_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput">value_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">key_to_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `key_to_match_input`<sup>Optional</sup> <a name="key_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput"></a>

```python
key_to_match_input: str
```

- *Type:* str

---

##### `value_to_match_input`<sup>Optional</sup> <a name="value_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput"></a>

```python
value_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `key_to_match`<sup>Required</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

---

##### `value_to_match`<sup>Required</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">reset_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">reset_key_to_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">reset_value_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_constraint` <a name="reset_constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```python
def reset_constraint() -> None
```

##### `reset_key_to_match` <a name="reset_key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```python
def reset_key_to_match() -> None
```

##### `reset_value_to_match` <a name="reset_value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```python
def reset_value_to_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">key_to_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">value_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">key_to_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `key_to_match_input`<sup>Optional</sup> <a name="key_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```python
key_to_match_input: str
```

- *Type:* str

---

##### `value_to_match_input`<sup>Optional</sup> <a name="value_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```python
value_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `key_to_match`<sup>Required</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

---

##### `value_to_match`<sup>Required</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements">put_matching_rule_statements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements">reset_matching_rule_statements</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_matching_rule_statements` <a name="put_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements"></a>

```python
def put_matching_rule_statements(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>]

---

##### `reset_matching_rule_statements` <a name="reset_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```python
def reset_matching_rule_statements() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">matching_rule_statements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput">matching_rule_statements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_rule_statements`<sup>Required</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```python
matching_rule_statements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `matching_rule_statements_input`<sup>Optional</sup> <a name="matching_rule_statements_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```python
matching_rule_statements_input: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putAndRuleStatement">put_and_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement">put_matching_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putOrRuleStatement">put_or_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetAndRuleStatement">reset_and_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetMatchingRuleStatement">reset_matching_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetOrRuleStatement">reset_or_rule_statement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_and_rule_statement` <a name="put_and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putAndRuleStatement"></a>

```python
def put_and_rule_statement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements] = None
) -> None
```

###### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putAndRuleStatement.parameter.matchingRuleStatements"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

##### `put_matching_rule_statement` <a name="put_matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement"></a>

```python
def put_matching_rule_statement(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
) -> None
```

###### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement.parameter.constraint"></a>

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

###### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement.parameter.keyToMatch"></a>

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

###### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement.parameter.valueToMatch"></a>

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

##### `put_or_rule_statement` <a name="put_or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putOrRuleStatement"></a>

```python
def put_or_rule_statement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements] = None
) -> None
```

###### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putOrRuleStatement.parameter.matchingRuleStatements"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

##### `reset_and_rule_statement` <a name="reset_and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetAndRuleStatement"></a>

```python
def reset_and_rule_statement() -> None
```

##### `reset_matching_rule_statement` <a name="reset_matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetMatchingRuleStatement"></a>

```python
def reset_matching_rule_statement() -> None
```

##### `reset_or_rule_statement` <a name="reset_or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetOrRuleStatement"></a>

```python
def reset_or_rule_statement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatement">and_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatement">matching_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatement">or_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatementInput">and_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatementInput">matching_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatementInput">or_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and_rule_statement`<sup>Required</sup> <a name="and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatement"></a>

```python
and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference</a>

---

##### `matching_rule_statement`<sup>Required</sup> <a name="matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatement"></a>

```python
matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `or_rule_statement`<sup>Required</sup> <a name="or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatement"></a>

```python
or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference</a>

---

##### `and_rule_statement_input`<sup>Optional</sup> <a name="and_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatementInput"></a>

```python
and_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

---

##### `matching_rule_statement_input`<sup>Optional</sup> <a name="matching_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatementInput"></a>

```python
matching_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

---

##### `or_rule_statement_input`<sup>Optional</sup> <a name="or_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatementInput"></a>

```python
or_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">reset_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">reset_key_to_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">reset_value_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_constraint` <a name="reset_constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```python
def reset_constraint() -> None
```

##### `reset_key_to_match` <a name="reset_key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```python
def reset_key_to_match() -> None
```

##### `reset_value_to_match` <a name="reset_value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```python
def reset_value_to_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">key_to_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">value_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">key_to_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `key_to_match_input`<sup>Optional</sup> <a name="key_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```python
key_to_match_input: str
```

- *Type:* str

---

##### `value_to_match_input`<sup>Optional</sup> <a name="value_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```python
value_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `key_to_match`<sup>Required</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

---

##### `value_to_match`<sup>Required</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements">put_matching_rule_statements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements">reset_matching_rule_statements</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_matching_rule_statements` <a name="put_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements"></a>

```python
def put_matching_rule_statements(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>]

---

##### `reset_matching_rule_statements` <a name="reset_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```python
def reset_matching_rule_statements() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">matching_rule_statements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput">matching_rule_statements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_rule_statements`<sup>Required</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```python
matching_rule_statements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `matching_rule_statements_input`<sup>Optional</sup> <a name="matching_rule_statements_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```python
matching_rule_statements_input: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetConstraint">reset_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch">reset_key_to_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch">reset_value_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_constraint` <a name="reset_constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetConstraint"></a>

```python
def reset_constraint() -> None
```

##### `reset_key_to_match` <a name="reset_key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch"></a>

```python
def reset_key_to_match() -> None
```

##### `reset_value_to_match` <a name="reset_value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch"></a>

```python
def reset_value_to_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput">key_to_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput">value_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">key_to_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `key_to_match_input`<sup>Optional</sup> <a name="key_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput"></a>

```python
key_to_match_input: str
```

- *Type:* str

---

##### `value_to_match_input`<sup>Optional</sup> <a name="value_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput"></a>

```python
value_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `key_to_match`<sup>Required</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

---

##### `value_to_match`<sup>Required</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">reset_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">reset_key_to_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">reset_value_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_constraint` <a name="reset_constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```python
def reset_constraint() -> None
```

##### `reset_key_to_match` <a name="reset_key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```python
def reset_key_to_match() -> None
```

##### `reset_value_to_match` <a name="reset_value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```python
def reset_value_to_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">key_to_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">value_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">key_to_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `key_to_match_input`<sup>Optional</sup> <a name="key_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```python
key_to_match_input: str
```

- *Type:* str

---

##### `value_to_match_input`<sup>Optional</sup> <a name="value_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```python
value_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `key_to_match`<sup>Required</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

---

##### `value_to_match`<sup>Required</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements">put_matching_rule_statements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements">reset_matching_rule_statements</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_matching_rule_statements` <a name="put_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements"></a>

```python
def put_matching_rule_statements(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>]

---

##### `reset_matching_rule_statements` <a name="reset_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```python
def reset_matching_rule_statements() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">matching_rule_statements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput">matching_rule_statements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_rule_statements`<sup>Required</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```python
matching_rule_statements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `matching_rule_statements_input`<sup>Optional</sup> <a name="matching_rule_statements_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```python
matching_rule_statements_input: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putAndRuleStatement">put_and_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement">put_matching_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putOrRuleStatement">put_or_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetAndRuleStatement">reset_and_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetMatchingRuleStatement">reset_matching_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetOrRuleStatement">reset_or_rule_statement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_and_rule_statement` <a name="put_and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putAndRuleStatement"></a>

```python
def put_and_rule_statement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements] = None
) -> None
```

###### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putAndRuleStatement.parameter.matchingRuleStatements"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

##### `put_matching_rule_statement` <a name="put_matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement"></a>

```python
def put_matching_rule_statement(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
) -> None
```

###### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement.parameter.constraint"></a>

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

###### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement.parameter.keyToMatch"></a>

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

###### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement.parameter.valueToMatch"></a>

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

##### `put_or_rule_statement` <a name="put_or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putOrRuleStatement"></a>

```python
def put_or_rule_statement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements] = None
) -> None
```

###### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putOrRuleStatement.parameter.matchingRuleStatements"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

##### `reset_and_rule_statement` <a name="reset_and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetAndRuleStatement"></a>

```python
def reset_and_rule_statement() -> None
```

##### `reset_matching_rule_statement` <a name="reset_matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetMatchingRuleStatement"></a>

```python
def reset_matching_rule_statement() -> None
```

##### `reset_or_rule_statement` <a name="reset_or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetOrRuleStatement"></a>

```python
def reset_or_rule_statement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatement">and_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatement">matching_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatement">or_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatementInput">and_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatementInput">matching_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatementInput">or_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and_rule_statement`<sup>Required</sup> <a name="and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatement"></a>

```python
and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference</a>

---

##### `matching_rule_statement`<sup>Required</sup> <a name="matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatement"></a>

```python
matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `or_rule_statement`<sup>Required</sup> <a name="or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatement"></a>

```python
or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference</a>

---

##### `and_rule_statement_input`<sup>Optional</sup> <a name="and_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatementInput"></a>

```python
and_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

---

##### `matching_rule_statement_input`<sup>Optional</sup> <a name="matching_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatementInput"></a>

```python
matching_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

---

##### `or_rule_statement_input`<sup>Optional</sup> <a name="or_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatementInput"></a>

```python
or_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">reset_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">reset_key_to_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">reset_value_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_constraint` <a name="reset_constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```python
def reset_constraint() -> None
```

##### `reset_key_to_match` <a name="reset_key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```python
def reset_key_to_match() -> None
```

##### `reset_value_to_match` <a name="reset_value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```python
def reset_value_to_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">key_to_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">value_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">key_to_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `key_to_match_input`<sup>Optional</sup> <a name="key_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```python
key_to_match_input: str
```

- *Type:* str

---

##### `value_to_match_input`<sup>Optional</sup> <a name="value_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```python
value_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `key_to_match`<sup>Required</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

---

##### `value_to_match`<sup>Required</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements">put_matching_rule_statements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements">reset_matching_rule_statements</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_matching_rule_statements` <a name="put_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements"></a>

```python
def put_matching_rule_statements(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>]

---

##### `reset_matching_rule_statements` <a name="reset_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```python
def reset_matching_rule_statements() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">matching_rule_statements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput">matching_rule_statements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_rule_statements`<sup>Required</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```python
matching_rule_statements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `matching_rule_statements_input`<sup>Optional</sup> <a name="matching_rule_statements_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```python
matching_rule_statements_input: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetConstraint">reset_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch">reset_key_to_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch">reset_value_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_constraint` <a name="reset_constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetConstraint"></a>

```python
def reset_constraint() -> None
```

##### `reset_key_to_match` <a name="reset_key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch"></a>

```python
def reset_key_to_match() -> None
```

##### `reset_value_to_match` <a name="reset_value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch"></a>

```python
def reset_value_to_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput">key_to_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput">value_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">key_to_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `key_to_match_input`<sup>Optional</sup> <a name="key_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput"></a>

```python
key_to_match_input: str
```

- *Type:* str

---

##### `value_to_match_input`<sup>Optional</sup> <a name="value_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput"></a>

```python
value_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `key_to_match`<sup>Required</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

---

##### `value_to_match`<sup>Required</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">reset_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">reset_key_to_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">reset_value_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_constraint` <a name="reset_constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```python
def reset_constraint() -> None
```

##### `reset_key_to_match` <a name="reset_key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```python
def reset_key_to_match() -> None
```

##### `reset_value_to_match` <a name="reset_value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```python
def reset_value_to_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">key_to_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">value_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">key_to_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">value_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `key_to_match_input`<sup>Optional</sup> <a name="key_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```python
key_to_match_input: str
```

- *Type:* str

---

##### `value_to_match_input`<sup>Optional</sup> <a name="value_to_match_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```python
value_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `key_to_match`<sup>Required</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```python
key_to_match: str
```

- *Type:* str

---

##### `value_to_match`<sup>Required</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```python
value_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements">put_matching_rule_statements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements">reset_matching_rule_statements</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_matching_rule_statements` <a name="put_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements"></a>

```python
def put_matching_rule_statements(
  value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>]

---

##### `reset_matching_rule_statements` <a name="reset_matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```python
def reset_matching_rule_statements() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">matching_rule_statements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput">matching_rule_statements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_rule_statements`<sup>Required</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```python
matching_rule_statements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `matching_rule_statements_input`<sup>Optional</sup> <a name="matching_rule_statements_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```python
matching_rule_statements_input: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putAndRuleStatement">put_and_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement">put_matching_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putOrRuleStatement">put_or_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetAndRuleStatement">reset_and_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetMatchingRuleStatement">reset_matching_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetOrRuleStatement">reset_or_rule_statement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_and_rule_statement` <a name="put_and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putAndRuleStatement"></a>

```python
def put_and_rule_statement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements] = None
) -> None
```

###### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putAndRuleStatement.parameter.matchingRuleStatements"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

##### `put_matching_rule_statement` <a name="put_matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement"></a>

```python
def put_matching_rule_statement(
  constraint: str = None,
  key_to_match: str = None,
  value_to_match: typing.List[str] = None
) -> None
```

###### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement.parameter.constraint"></a>

- *Type:* str

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

###### `key_to_match`<sup>Optional</sup> <a name="key_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement.parameter.keyToMatch"></a>

- *Type:* str

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

###### `value_to_match`<sup>Optional</sup> <a name="value_to_match" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement.parameter.valueToMatch"></a>

- *Type:* typing.List[str]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

##### `put_or_rule_statement` <a name="put_or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putOrRuleStatement"></a>

```python
def put_or_rule_statement(
  matching_rule_statements: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements] = None
) -> None
```

###### `matching_rule_statements`<sup>Optional</sup> <a name="matching_rule_statements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putOrRuleStatement.parameter.matchingRuleStatements"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

##### `reset_and_rule_statement` <a name="reset_and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetAndRuleStatement"></a>

```python
def reset_and_rule_statement() -> None
```

##### `reset_matching_rule_statement` <a name="reset_matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetMatchingRuleStatement"></a>

```python
def reset_matching_rule_statement() -> None
```

##### `reset_or_rule_statement` <a name="reset_or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetOrRuleStatement"></a>

```python
def reset_or_rule_statement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatement">and_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatement">matching_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatement">or_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatementInput">and_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatementInput">matching_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatementInput">or_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and_rule_statement`<sup>Required</sup> <a name="and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatement"></a>

```python
and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference</a>

---

##### `matching_rule_statement`<sup>Required</sup> <a name="matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatement"></a>

```python
matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `or_rule_statement`<sup>Required</sup> <a name="or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatement"></a>

```python
or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference</a>

---

##### `and_rule_statement_input`<sup>Optional</sup> <a name="and_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatementInput"></a>

```python
and_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

---

##### `matching_rule_statement_input`<sup>Optional</sup> <a name="matching_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatementInput"></a>

```python
matching_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

---

##### `or_rule_statement_input`<sup>Optional</sup> <a name="or_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatementInput"></a>

```python
or_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement">put_instance_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement">put_license_configuration_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement">put_license_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetInstanceRuleStatement">reset_instance_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseConfigurationRuleStatement">reset_license_configuration_rule_statement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseRuleStatement">reset_license_rule_statement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_instance_rule_statement` <a name="put_instance_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement"></a>

```python
def put_instance_rule_statement(
  and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement = None,
  matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement = None,
  or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement = None
) -> None
```

###### `and_rule_statement`<sup>Optional</sup> <a name="and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement.parameter.andRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

###### `matching_rule_statement`<sup>Optional</sup> <a name="matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement.parameter.matchingRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

###### `or_rule_statement`<sup>Optional</sup> <a name="or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement.parameter.orRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

##### `put_license_configuration_rule_statement` <a name="put_license_configuration_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement"></a>

```python
def put_license_configuration_rule_statement(
  and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement = None,
  matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement = None,
  or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement = None
) -> None
```

###### `and_rule_statement`<sup>Optional</sup> <a name="and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement.parameter.andRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

###### `matching_rule_statement`<sup>Optional</sup> <a name="matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement.parameter.matchingRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

###### `or_rule_statement`<sup>Optional</sup> <a name="or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement.parameter.orRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

##### `put_license_rule_statement` <a name="put_license_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement"></a>

```python
def put_license_rule_statement(
  and_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement = None,
  matching_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement = None,
  or_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement = None
) -> None
```

###### `and_rule_statement`<sup>Optional</sup> <a name="and_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement.parameter.andRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

###### `matching_rule_statement`<sup>Optional</sup> <a name="matching_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement.parameter.matchingRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

###### `or_rule_statement`<sup>Optional</sup> <a name="or_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement.parameter.orRuleStatement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

##### `reset_instance_rule_statement` <a name="reset_instance_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetInstanceRuleStatement"></a>

```python
def reset_instance_rule_statement() -> None
```

##### `reset_license_configuration_rule_statement` <a name="reset_license_configuration_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseConfigurationRuleStatement"></a>

```python
def reset_license_configuration_rule_statement() -> None
```

##### `reset_license_rule_statement` <a name="reset_license_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseRuleStatement"></a>

```python
def reset_license_rule_statement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatement">instance_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatement">license_configuration_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatement">license_rule_statement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatementInput">instance_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatementInput">license_configuration_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatementInput">license_rule_statement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_rule_statement`<sup>Required</sup> <a name="instance_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatement"></a>

```python
instance_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference</a>

---

##### `license_configuration_rule_statement`<sup>Required</sup> <a name="license_configuration_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatement"></a>

```python
license_configuration_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference</a>

---

##### `license_rule_statement`<sup>Required</sup> <a name="license_rule_statement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatement"></a>

```python
license_rule_statement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference</a>

---

##### `instance_rule_statement_input`<sup>Optional</sup> <a name="instance_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatementInput"></a>

```python
instance_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

---

##### `license_configuration_rule_statement_input`<sup>Optional</sup> <a name="license_configuration_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatementInput"></a>

```python
license_configuration_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

---

##### `license_rule_statement_input`<sup>Optional</sup> <a name="license_rule_statement_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatementInput"></a>

```python
license_rule_statement_input: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetTagsList <a name="LicensemanagerLicenseAssetRuleSetTagsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerLicenseAssetRuleSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerLicenseAssetRuleSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>]

---


### LicensemanagerLicenseAssetRuleSetTagsOutputReference <a name="LicensemanagerLicenseAssetRuleSetTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanager_license_asset_rule_set

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerLicenseAssetRuleSetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>

---



