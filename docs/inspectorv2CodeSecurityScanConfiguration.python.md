# `inspectorv2CodeSecurityScanConfiguration` Submodule <a name="`inspectorv2CodeSecurityScanConfiguration` Submodule" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CodeSecurityScanConfiguration <a name="Inspectorv2CodeSecurityScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration awscc_inspectorv2_code_security_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: Inspectorv2CodeSecurityScanConfigurationConfiguration = None,
  level: str = None,
  name: str = None,
  scope_settings: Inspectorv2CodeSecurityScanConfigurationScopeSettings = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | Code Security Scan Configuration. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.level">level</a></code> | <code>str</code> | Configuration Level. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Code Security Scan Configuration name. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scopeSettings">scope_settings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | Scope Settings. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#tags Inspectorv2CodeSecurityScanConfiguration#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

Code Security Scan Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#configuration Inspectorv2CodeSecurityScanConfiguration#configuration}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.level"></a>

- *Type:* str

Configuration Level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#level Inspectorv2CodeSecurityScanConfiguration#level}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Code Security Scan Configuration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#name Inspectorv2CodeSecurityScanConfiguration#name}

---

##### `scope_settings`<sup>Optional</sup> <a name="scope_settings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scopeSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

Scope Settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#scope_settings Inspectorv2CodeSecurityScanConfiguration#scope_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#tags Inspectorv2CodeSecurityScanConfiguration#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putScopeSettings">put_scope_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetLevel">reset_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetScopeSettings">reset_scope_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration"></a>

```python
def put_configuration(
  continuous_integration_scan_configuration: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration = None,
  periodic_scan_configuration: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration = None,
  rule_set_categories: typing.List[str] = None
) -> None
```

###### `continuous_integration_scan_configuration`<sup>Optional</sup> <a name="continuous_integration_scan_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration.parameter.continuousIntegrationScanConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#continuous_integration_scan_configuration Inspectorv2CodeSecurityScanConfiguration#continuous_integration_scan_configuration}.

---

###### `periodic_scan_configuration`<sup>Optional</sup> <a name="periodic_scan_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration.parameter.periodicScanConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#periodic_scan_configuration Inspectorv2CodeSecurityScanConfiguration#periodic_scan_configuration}.

---

###### `rule_set_categories`<sup>Optional</sup> <a name="rule_set_categories" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration.parameter.ruleSetCategories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#rule_set_categories Inspectorv2CodeSecurityScanConfiguration#rule_set_categories}.

---

##### `put_scope_settings` <a name="put_scope_settings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putScopeSettings"></a>

```python
def put_scope_settings(
  project_selection_scope: str = None
) -> None
```

###### `project_selection_scope`<sup>Optional</sup> <a name="project_selection_scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putScopeSettings.parameter.projectSelectionScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#project_selection_scope Inspectorv2CodeSecurityScanConfiguration#project_selection_scope}.

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetLevel"></a>

```python
def reset_level() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_scope_settings` <a name="reset_scope_settings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetScopeSettings"></a>

```python
def reset_scope_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Inspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Inspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Inspectorv2CodeSecurityScanConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Inspectorv2CodeSecurityScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CodeSecurityScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettings">scope_settings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference">Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettingsInput">scope_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configuration"></a>

```python
configuration: Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scope_settings`<sup>Required</sup> <a name="scope_settings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettings"></a>

```python
scope_settings: Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference">Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configurationInput"></a>

```python
configuration_input: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_settings_input`<sup>Optional</sup> <a name="scope_settings_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettingsInput"></a>

```python
scope_settings_input: IResolvable | Inspectorv2CodeSecurityScanConfigurationScopeSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CodeSecurityScanConfigurationConfig <a name="Inspectorv2CodeSecurityScanConfigurationConfig" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: Inspectorv2CodeSecurityScanConfigurationConfiguration = None,
  level: str = None,
  name: str = None,
  scope_settings: Inspectorv2CodeSecurityScanConfigurationScopeSettings = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | Code Security Scan Configuration. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.level">level</a></code> | <code>str</code> | Configuration Level. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.name">name</a></code> | <code>str</code> | Code Security Scan Configuration name. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.scopeSettings">scope_settings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | Scope Settings. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#tags Inspectorv2CodeSecurityScanConfiguration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.configuration"></a>

```python
configuration: Inspectorv2CodeSecurityScanConfigurationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

Code Security Scan Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#configuration Inspectorv2CodeSecurityScanConfiguration#configuration}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.level"></a>

```python
level: str
```

- *Type:* str

Configuration Level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#level Inspectorv2CodeSecurityScanConfiguration#level}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Code Security Scan Configuration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#name Inspectorv2CodeSecurityScanConfiguration#name}

---

##### `scope_settings`<sup>Optional</sup> <a name="scope_settings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.scopeSettings"></a>

```python
scope_settings: Inspectorv2CodeSecurityScanConfigurationScopeSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

Scope Settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#scope_settings Inspectorv2CodeSecurityScanConfiguration#scope_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#tags Inspectorv2CodeSecurityScanConfiguration#tags}.

---

### Inspectorv2CodeSecurityScanConfigurationConfiguration <a name="Inspectorv2CodeSecurityScanConfigurationConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration(
  continuous_integration_scan_configuration: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration = None,
  periodic_scan_configuration: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration = None,
  rule_set_categories: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.continuousIntegrationScanConfiguration">continuous_integration_scan_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#continuous_integration_scan_configuration Inspectorv2CodeSecurityScanConfiguration#continuous_integration_scan_configuration}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.periodicScanConfiguration">periodic_scan_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#periodic_scan_configuration Inspectorv2CodeSecurityScanConfiguration#periodic_scan_configuration}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.ruleSetCategories">rule_set_categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#rule_set_categories Inspectorv2CodeSecurityScanConfiguration#rule_set_categories}. |

---

##### `continuous_integration_scan_configuration`<sup>Optional</sup> <a name="continuous_integration_scan_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.continuousIntegrationScanConfiguration"></a>

```python
continuous_integration_scan_configuration: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#continuous_integration_scan_configuration Inspectorv2CodeSecurityScanConfiguration#continuous_integration_scan_configuration}.

---

##### `periodic_scan_configuration`<sup>Optional</sup> <a name="periodic_scan_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.periodicScanConfiguration"></a>

```python
periodic_scan_configuration: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#periodic_scan_configuration Inspectorv2CodeSecurityScanConfiguration#periodic_scan_configuration}.

---

##### `rule_set_categories`<sup>Optional</sup> <a name="rule_set_categories" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.ruleSetCategories"></a>

```python
rule_set_categories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#rule_set_categories Inspectorv2CodeSecurityScanConfiguration#rule_set_categories}.

---

### Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration(
  supported_events: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.property.supportedEvents">supported_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#supported_events Inspectorv2CodeSecurityScanConfiguration#supported_events}. |

---

##### `supported_events`<sup>Optional</sup> <a name="supported_events" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.property.supportedEvents"></a>

```python
supported_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#supported_events Inspectorv2CodeSecurityScanConfiguration#supported_events}.

---

### Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration(
  frequency: str = None,
  frequency_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency Inspectorv2CodeSecurityScanConfiguration#frequency}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequencyExpression">frequency_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency_expression Inspectorv2CodeSecurityScanConfiguration#frequency_expression}. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency Inspectorv2CodeSecurityScanConfiguration#frequency}.

---

##### `frequency_expression`<sup>Optional</sup> <a name="frequency_expression" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequencyExpression"></a>

```python
frequency_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency_expression Inspectorv2CodeSecurityScanConfiguration#frequency_expression}.

---

### Inspectorv2CodeSecurityScanConfigurationScopeSettings <a name="Inspectorv2CodeSecurityScanConfigurationScopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings(
  project_selection_scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings.property.projectSelectionScope">project_selection_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#project_selection_scope Inspectorv2CodeSecurityScanConfiguration#project_selection_scope}. |

---

##### `project_selection_scope`<sup>Optional</sup> <a name="project_selection_scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings.property.projectSelectionScope"></a>

```python
project_selection_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#project_selection_scope Inspectorv2CodeSecurityScanConfiguration#project_selection_scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resetSupportedEvents">reset_supported_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_supported_events` <a name="reset_supported_events" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resetSupportedEvents"></a>

```python
def reset_supported_events() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEventsInput">supported_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEvents">supported_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `supported_events_input`<sup>Optional</sup> <a name="supported_events_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEventsInput"></a>

```python
supported_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_events`<sup>Required</sup> <a name="supported_events" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEvents"></a>

```python
supported_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

---


### Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putContinuousIntegrationScanConfiguration">put_continuous_integration_scan_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putPeriodicScanConfiguration">put_periodic_scan_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetContinuousIntegrationScanConfiguration">reset_continuous_integration_scan_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetPeriodicScanConfiguration">reset_periodic_scan_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetRuleSetCategories">reset_rule_set_categories</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_continuous_integration_scan_configuration` <a name="put_continuous_integration_scan_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putContinuousIntegrationScanConfiguration"></a>

```python
def put_continuous_integration_scan_configuration(
  supported_events: typing.List[str] = None
) -> None
```

###### `supported_events`<sup>Optional</sup> <a name="supported_events" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putContinuousIntegrationScanConfiguration.parameter.supportedEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#supported_events Inspectorv2CodeSecurityScanConfiguration#supported_events}.

---

##### `put_periodic_scan_configuration` <a name="put_periodic_scan_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putPeriodicScanConfiguration"></a>

```python
def put_periodic_scan_configuration(
  frequency: str = None,
  frequency_expression: str = None
) -> None
```

###### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putPeriodicScanConfiguration.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency Inspectorv2CodeSecurityScanConfiguration#frequency}.

---

###### `frequency_expression`<sup>Optional</sup> <a name="frequency_expression" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putPeriodicScanConfiguration.parameter.frequencyExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency_expression Inspectorv2CodeSecurityScanConfiguration#frequency_expression}.

---

##### `reset_continuous_integration_scan_configuration` <a name="reset_continuous_integration_scan_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetContinuousIntegrationScanConfiguration"></a>

```python
def reset_continuous_integration_scan_configuration() -> None
```

##### `reset_periodic_scan_configuration` <a name="reset_periodic_scan_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetPeriodicScanConfiguration"></a>

```python
def reset_periodic_scan_configuration() -> None
```

##### `reset_rule_set_categories` <a name="reset_rule_set_categories" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetRuleSetCategories"></a>

```python
def reset_rule_set_categories() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfiguration">continuous_integration_scan_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfiguration">periodic_scan_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfigurationInput">continuous_integration_scan_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfigurationInput">periodic_scan_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategoriesInput">rule_set_categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategories">rule_set_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continuous_integration_scan_configuration`<sup>Required</sup> <a name="continuous_integration_scan_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfiguration"></a>

```python
continuous_integration_scan_configuration: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference</a>

---

##### `periodic_scan_configuration`<sup>Required</sup> <a name="periodic_scan_configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfiguration"></a>

```python
periodic_scan_configuration: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference</a>

---

##### `continuous_integration_scan_configuration_input`<sup>Optional</sup> <a name="continuous_integration_scan_configuration_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfigurationInput"></a>

```python
continuous_integration_scan_configuration_input: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

---

##### `periodic_scan_configuration_input`<sup>Optional</sup> <a name="periodic_scan_configuration_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfigurationInput"></a>

```python
periodic_scan_configuration_input: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

---

##### `rule_set_categories_input`<sup>Optional</sup> <a name="rule_set_categories_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategoriesInput"></a>

```python
rule_set_categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_set_categories`<sup>Required</sup> <a name="rule_set_categories" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategories"></a>

```python
rule_set_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

---


### Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequencyExpression">reset_frequency_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_frequency` <a name="reset_frequency" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_frequency_expression` <a name="reset_frequency_expression" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequencyExpression"></a>

```python
def reset_frequency_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpressionInput">frequency_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpression">frequency_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_expression_input`<sup>Optional</sup> <a name="frequency_expression_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpressionInput"></a>

```python
frequency_expression_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `frequency_expression`<sup>Required</sup> <a name="frequency_expression" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpression"></a>

```python
frequency_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

---


### Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_scan_configuration

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resetProjectSelectionScope">reset_project_selection_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_selection_scope` <a name="reset_project_selection_scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resetProjectSelectionScope"></a>

```python
def reset_project_selection_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScopeInput">project_selection_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScope">project_selection_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_selection_scope_input`<sup>Optional</sup> <a name="project_selection_scope_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScopeInput"></a>

```python
project_selection_scope_input: str
```

- *Type:* str

---

##### `project_selection_scope`<sup>Required</sup> <a name="project_selection_scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScope"></a>

```python
project_selection_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Inspectorv2CodeSecurityScanConfigurationScopeSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

---



