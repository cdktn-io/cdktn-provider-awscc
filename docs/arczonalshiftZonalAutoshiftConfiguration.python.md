# `arczonalshiftZonalAutoshiftConfiguration` Submodule <a name="`arczonalshiftZonalAutoshiftConfiguration` Submodule" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArczonalshiftZonalAutoshiftConfiguration <a name="ArczonalshiftZonalAutoshiftConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration awscc_arczonalshift_zonal_autoshift_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  practice_run_configuration: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration = None,
  resource_identifier: str = None,
  zonal_autoshift_status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.practiceRunConfiguration">practice_run_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#practice_run_configuration ArczonalshiftZonalAutoshiftConfiguration#practice_run_configuration}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_identifier ArczonalshiftZonalAutoshiftConfiguration#resource_identifier}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.zonalAutoshiftStatus">zonal_autoshift_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `practice_run_configuration`<sup>Optional</sup> <a name="practice_run_configuration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.practiceRunConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#practice_run_configuration ArczonalshiftZonalAutoshiftConfiguration#practice_run_configuration}.

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.resourceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_identifier ArczonalshiftZonalAutoshiftConfiguration#resource_identifier}.

---

##### `zonal_autoshift_status`<sup>Optional</sup> <a name="zonal_autoshift_status" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.zonalAutoshiftStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration">put_practice_run_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetPracticeRunConfiguration">reset_practice_run_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetResourceIdentifier">reset_resource_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetZonalAutoshiftStatus">reset_zonal_autoshift_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_practice_run_configuration` <a name="put_practice_run_configuration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration"></a>

```python
def put_practice_run_configuration(
  blocked_dates: typing.List[str] = None,
  blocked_windows: typing.List[str] = None,
  blocking_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms] = None,
  outcome_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms] = None
) -> None
```

###### `blocked_dates`<sup>Optional</sup> <a name="blocked_dates" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration.parameter.blockedDates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}.

---

###### `blocked_windows`<sup>Optional</sup> <a name="blocked_windows" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration.parameter.blockedWindows"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}.

---

###### `blocking_alarms`<sup>Optional</sup> <a name="blocking_alarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration.parameter.blockingAlarms"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}.

---

###### `outcome_alarms`<sup>Optional</sup> <a name="outcome_alarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration.parameter.outcomeAlarms"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}.

---

##### `reset_practice_run_configuration` <a name="reset_practice_run_configuration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetPracticeRunConfiguration"></a>

```python
def reset_practice_run_configuration() -> None
```

##### `reset_resource_identifier` <a name="reset_resource_identifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetResourceIdentifier"></a>

```python
def reset_resource_identifier() -> None
```

##### `reset_zonal_autoshift_status` <a name="reset_zonal_autoshift_status" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetZonalAutoshiftStatus"></a>

```python
def reset_zonal_autoshift_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ArczonalshiftZonalAutoshiftConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ArczonalshiftZonalAutoshiftConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ArczonalshiftZonalAutoshiftConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfiguration">practice_run_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfigurationInput">practice_run_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifierInput">resource_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatusInput">zonal_autoshift_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatus">zonal_autoshift_status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `practice_run_configuration`<sup>Required</sup> <a name="practice_run_configuration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfiguration"></a>

```python
practice_run_configuration: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference</a>

---

##### `practice_run_configuration_input`<sup>Optional</sup> <a name="practice_run_configuration_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfigurationInput"></a>

```python
practice_run_configuration_input: IResolvable | ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

---

##### `resource_identifier_input`<sup>Optional</sup> <a name="resource_identifier_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifierInput"></a>

```python
resource_identifier_input: str
```

- *Type:* str

---

##### `zonal_autoshift_status_input`<sup>Optional</sup> <a name="zonal_autoshift_status_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatusInput"></a>

```python
zonal_autoshift_status_input: str
```

- *Type:* str

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `zonal_autoshift_status`<sup>Required</sup> <a name="zonal_autoshift_status" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatus"></a>

```python
zonal_autoshift_status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ArczonalshiftZonalAutoshiftConfigurationConfig <a name="ArczonalshiftZonalAutoshiftConfigurationConfig" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  practice_run_configuration: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration = None,
  resource_identifier: str = None,
  zonal_autoshift_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.practiceRunConfiguration">practice_run_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#practice_run_configuration ArczonalshiftZonalAutoshiftConfiguration#practice_run_configuration}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_identifier ArczonalshiftZonalAutoshiftConfiguration#resource_identifier}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.zonalAutoshiftStatus">zonal_autoshift_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `practice_run_configuration`<sup>Optional</sup> <a name="practice_run_configuration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.practiceRunConfiguration"></a>

```python
practice_run_configuration: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#practice_run_configuration ArczonalshiftZonalAutoshiftConfiguration#practice_run_configuration}.

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_identifier ArczonalshiftZonalAutoshiftConfiguration#resource_identifier}.

---

##### `zonal_autoshift_status`<sup>Optional</sup> <a name="zonal_autoshift_status" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.zonalAutoshiftStatus"></a>

```python
zonal_autoshift_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}.

---

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration(
  blocked_dates: typing.List[str] = None,
  blocked_windows: typing.List[str] = None,
  blocking_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms] = None,
  outcome_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedDates">blocked_dates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedWindows">blocked_windows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockingAlarms">blocking_alarms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.outcomeAlarms">outcome_alarms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}. |

---

##### `blocked_dates`<sup>Optional</sup> <a name="blocked_dates" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedDates"></a>

```python
blocked_dates: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}.

---

##### `blocked_windows`<sup>Optional</sup> <a name="blocked_windows" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedWindows"></a>

```python
blocked_windows: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}.

---

##### `blocking_alarms`<sup>Optional</sup> <a name="blocking_alarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockingAlarms"></a>

```python
blocking_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}.

---

##### `outcome_alarms`<sup>Optional</sup> <a name="outcome_alarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.outcomeAlarms"></a>

```python
outcome_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}.

---

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.Initializer"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms(
  alarm_identifier: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.alarmIdentifier">alarm_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}. |

---

##### `alarm_identifier`<sup>Optional</sup> <a name="alarm_identifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.alarmIdentifier"></a>

```python
alarm_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}.

---

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.Initializer"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms(
  alarm_identifier: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.alarmIdentifier">alarm_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}. |

---

##### `alarm_identifier`<sup>Optional</sup> <a name="alarm_identifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.alarmIdentifier"></a>

```python
alarm_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>]

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetAlarmIdentifier">reset_alarm_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarm_identifier` <a name="reset_alarm_identifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetAlarmIdentifier"></a>

```python
def reset_alarm_identifier() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifierInput">alarm_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifier">alarm_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_identifier_input`<sup>Optional</sup> <a name="alarm_identifier_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifierInput"></a>

```python
alarm_identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `alarm_identifier`<sup>Required</sup> <a name="alarm_identifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifier"></a>

```python
alarm_identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>]

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetAlarmIdentifier">reset_alarm_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarm_identifier` <a name="reset_alarm_identifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetAlarmIdentifier"></a>

```python
def reset_alarm_identifier() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifierInput">alarm_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifier">alarm_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_identifier_input`<sup>Optional</sup> <a name="alarm_identifier_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifierInput"></a>

```python
alarm_identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `alarm_identifier`<sup>Required</sup> <a name="alarm_identifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifier"></a>

```python
alarm_identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putBlockingAlarms">put_blocking_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putOutcomeAlarms">put_outcome_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedDates">reset_blocked_dates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedWindows">reset_blocked_windows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockingAlarms">reset_blocking_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetOutcomeAlarms">reset_outcome_alarms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_blocking_alarms` <a name="put_blocking_alarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putBlockingAlarms"></a>

```python
def put_blocking_alarms(
  value: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putBlockingAlarms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>]

---

##### `put_outcome_alarms` <a name="put_outcome_alarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putOutcomeAlarms"></a>

```python
def put_outcome_alarms(
  value: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putOutcomeAlarms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>]

---

##### `reset_blocked_dates` <a name="reset_blocked_dates" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedDates"></a>

```python
def reset_blocked_dates() -> None
```

##### `reset_blocked_windows` <a name="reset_blocked_windows" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedWindows"></a>

```python
def reset_blocked_windows() -> None
```

##### `reset_blocking_alarms` <a name="reset_blocking_alarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockingAlarms"></a>

```python
def reset_blocking_alarms() -> None
```

##### `reset_outcome_alarms` <a name="reset_outcome_alarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetOutcomeAlarms"></a>

```python
def reset_outcome_alarms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarms">blocking_alarms</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarms">outcome_alarms</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDatesInput">blocked_dates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindowsInput">blocked_windows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarmsInput">blocking_alarms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarmsInput">outcome_alarms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDates">blocked_dates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindows">blocked_windows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `blocking_alarms`<sup>Required</sup> <a name="blocking_alarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarms"></a>

```python
blocking_alarms: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList</a>

---

##### `outcome_alarms`<sup>Required</sup> <a name="outcome_alarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarms"></a>

```python
outcome_alarms: ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList</a>

---

##### `blocked_dates_input`<sup>Optional</sup> <a name="blocked_dates_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDatesInput"></a>

```python
blocked_dates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_windows_input`<sup>Optional</sup> <a name="blocked_windows_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindowsInput"></a>

```python
blocked_windows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocking_alarms_input`<sup>Optional</sup> <a name="blocking_alarms_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarmsInput"></a>

```python
blocking_alarms_input: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>]

---

##### `outcome_alarms_input`<sup>Optional</sup> <a name="outcome_alarms_input" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarmsInput"></a>

```python
outcome_alarms_input: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>]

---

##### `blocked_dates`<sup>Required</sup> <a name="blocked_dates" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDates"></a>

```python
blocked_dates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_windows`<sup>Required</sup> <a name="blocked_windows" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindows"></a>

```python
blocked_windows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

---



