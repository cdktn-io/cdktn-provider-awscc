# `iotcoredeviceadvisorSuiteDefinition` Submodule <a name="`iotcoredeviceadvisorSuiteDefinition` Submodule" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotcoredeviceadvisorSuiteDefinition <a name="IotcoredeviceadvisorSuiteDefinition" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition awscc_iotcoredeviceadvisor_suite_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  suite_definition_configuration: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration,
  tags: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.suiteDefinitionConfiguration">suite_definition_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `suite_definition_configuration`<sup>Required</sup> <a name="suite_definition_configuration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.suiteDefinitionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#tags IotcoredeviceadvisorSuiteDefinition#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration">put_suite_definition_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_suite_definition_configuration` <a name="put_suite_definition_configuration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration"></a>

```python
def put_suite_definition_configuration(
  device_permission_role_arn: str,
  root_group: str,
  devices: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices] = None,
  intended_for_qualification: bool | IResolvable = None,
  suite_definition_name: str = None
) -> None
```

###### `device_permission_role_arn`<sup>Required</sup> <a name="device_permission_role_arn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration.parameter.devicePermissionRoleArn"></a>

- *Type:* str

The device permission role arn of the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#device_permission_role_arn IotcoredeviceadvisorSuiteDefinition#device_permission_role_arn}

---

###### `root_group`<sup>Required</sup> <a name="root_group" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration.parameter.rootGroup"></a>

- *Type:* str

The root group of the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#root_group IotcoredeviceadvisorSuiteDefinition#root_group}

---

###### `devices`<sup>Optional</sup> <a name="devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration.parameter.devices"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>]

The devices being tested in the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#devices IotcoredeviceadvisorSuiteDefinition#devices}

---

###### `intended_for_qualification`<sup>Optional</sup> <a name="intended_for_qualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration.parameter.intendedForQualification"></a>

- *Type:* bool | cdktn.IResolvable

Whether the tests are intended for qualification in a suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#intended_for_qualification IotcoredeviceadvisorSuiteDefinition#intended_for_qualification}

---

###### `suite_definition_name`<sup>Optional</sup> <a name="suite_definition_name" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration.parameter.suiteDefinitionName"></a>

- *Type:* str

The Name of the suite definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_name IotcoredeviceadvisorSuiteDefinition#suite_definition_name}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotcoredeviceadvisorSuiteDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotcoredeviceadvisorSuiteDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotcoredeviceadvisorSuiteDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn">suite_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration">suite_definition_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId">suite_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion">suite_definition_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList">IotcoredeviceadvisorSuiteDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfigurationInput">suite_definition_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `suite_definition_arn`<sup>Required</sup> <a name="suite_definition_arn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn"></a>

```python
suite_definition_arn: str
```

- *Type:* str

---

##### `suite_definition_configuration`<sup>Required</sup> <a name="suite_definition_configuration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration"></a>

```python
suite_definition_configuration: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a>

---

##### `suite_definition_id`<sup>Required</sup> <a name="suite_definition_id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId"></a>

```python
suite_definition_id: str
```

- *Type:* str

---

##### `suite_definition_version`<sup>Required</sup> <a name="suite_definition_version" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion"></a>

```python
suite_definition_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tags"></a>

```python
tags: IotcoredeviceadvisorSuiteDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList">IotcoredeviceadvisorSuiteDefinitionTagsList</a>

---

##### `suite_definition_configuration_input`<sup>Optional</sup> <a name="suite_definition_configuration_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfigurationInput"></a>

```python
suite_definition_configuration_input: IResolvable | IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotcoredeviceadvisorSuiteDefinitionConfig <a name="IotcoredeviceadvisorSuiteDefinitionConfig" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  suite_definition_configuration: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration,
  tags: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.suiteDefinitionConfiguration">suite_definition_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `suite_definition_configuration`<sup>Required</sup> <a name="suite_definition_configuration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.suiteDefinitionConfiguration"></a>

```python
suite_definition_configuration: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#tags IotcoredeviceadvisorSuiteDefinition#tags}

---

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration(
  device_permission_role_arn: str,
  root_group: str,
  devices: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices] = None,
  intended_for_qualification: bool | IResolvable = None,
  suite_definition_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devicePermissionRoleArn">device_permission_role_arn</a></code> | <code>str</code> | The device permission role arn of the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.rootGroup">root_group</a></code> | <code>str</code> | The root group of the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devices">devices</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>]</code> | The devices being tested in the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.intendedForQualification">intended_for_qualification</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the tests are intended for qualification in a suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.suiteDefinitionName">suite_definition_name</a></code> | <code>str</code> | The Name of the suite definition. |

---

##### `device_permission_role_arn`<sup>Required</sup> <a name="device_permission_role_arn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devicePermissionRoleArn"></a>

```python
device_permission_role_arn: str
```

- *Type:* str

The device permission role arn of the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#device_permission_role_arn IotcoredeviceadvisorSuiteDefinition#device_permission_role_arn}

---

##### `root_group`<sup>Required</sup> <a name="root_group" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.rootGroup"></a>

```python
root_group: str
```

- *Type:* str

The root group of the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#root_group IotcoredeviceadvisorSuiteDefinition#root_group}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devices"></a>

```python
devices: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>]

The devices being tested in the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#devices IotcoredeviceadvisorSuiteDefinition#devices}

---

##### `intended_for_qualification`<sup>Optional</sup> <a name="intended_for_qualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.intendedForQualification"></a>

```python
intended_for_qualification: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the tests are intended for qualification in a suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#intended_for_qualification IotcoredeviceadvisorSuiteDefinition#intended_for_qualification}

---

##### `suite_definition_name`<sup>Optional</sup> <a name="suite_definition_name" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.suiteDefinitionName"></a>

```python
suite_definition_name: str
```

- *Type:* str

The Name of the suite definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_name IotcoredeviceadvisorSuiteDefinition#suite_definition_name}

---

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.Initializer"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices(
  certificate_arn: str = None,
  thing_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.thingArn">thing_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}.

---

##### `thing_arn`<sup>Optional</sup> <a name="thing_arn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.thingArn"></a>

```python
thing_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}.

---

### IotcoredeviceadvisorSuiteDefinitionTags <a name="IotcoredeviceadvisorSuiteDefinitionTags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#key IotcoredeviceadvisorSuiteDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotcoredeviceadvisor_suite_definition#value IotcoredeviceadvisorSuiteDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>]

---


### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetThingArn">reset_thing_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_thing_arn` <a name="reset_thing_arn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetThingArn"></a>

```python
def reset_thing_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArnInput">thing_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn">thing_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `thing_arn_input`<sup>Optional</sup> <a name="thing_arn_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArnInput"></a>

```python
thing_arn_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `thing_arn`<sup>Required</sup> <a name="thing_arn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn"></a>

```python
thing_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>

---


### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices">put_devices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetDevices">reset_devices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetIntendedForQualification">reset_intended_for_qualification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetSuiteDefinitionName">reset_suite_definition_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_devices` <a name="put_devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices"></a>

```python
def put_devices(
  value: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>]

---

##### `reset_devices` <a name="reset_devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetDevices"></a>

```python
def reset_devices() -> None
```

##### `reset_intended_for_qualification` <a name="reset_intended_for_qualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetIntendedForQualification"></a>

```python
def reset_intended_for_qualification() -> None
```

##### `reset_suite_definition_name` <a name="reset_suite_definition_name" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetSuiteDefinitionName"></a>

```python
def reset_suite_definition_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArnInput">device_permission_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicesInput">devices_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualificationInput">intended_for_qualification_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroupInput">root_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionNameInput">suite_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn">device_permission_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification">intended_for_qualification</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup">root_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName">suite_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices"></a>

```python
devices: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a>

---

##### `device_permission_role_arn_input`<sup>Optional</sup> <a name="device_permission_role_arn_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArnInput"></a>

```python
device_permission_role_arn_input: str
```

- *Type:* str

---

##### `devices_input`<sup>Optional</sup> <a name="devices_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicesInput"></a>

```python
devices_input: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>]

---

##### `intended_for_qualification_input`<sup>Optional</sup> <a name="intended_for_qualification_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualificationInput"></a>

```python
intended_for_qualification_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `root_group_input`<sup>Optional</sup> <a name="root_group_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroupInput"></a>

```python
root_group_input: str
```

- *Type:* str

---

##### `suite_definition_name_input`<sup>Optional</sup> <a name="suite_definition_name_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionNameInput"></a>

```python
suite_definition_name_input: str
```

- *Type:* str

---

##### `device_permission_role_arn`<sup>Required</sup> <a name="device_permission_role_arn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn"></a>

```python
device_permission_role_arn: str
```

- *Type:* str

---

##### `intended_for_qualification`<sup>Required</sup> <a name="intended_for_qualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification"></a>

```python
intended_for_qualification: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `root_group`<sup>Required</sup> <a name="root_group" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup"></a>

```python
root_group: str
```

- *Type:* str

---

##### `suite_definition_name`<sup>Required</sup> <a name="suite_definition_name" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName"></a>

```python
suite_definition_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---


### IotcoredeviceadvisorSuiteDefinitionTagsList <a name="IotcoredeviceadvisorSuiteDefinitionTagsList" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotcoredeviceadvisorSuiteDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotcoredeviceadvisorSuiteDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>]

---


### IotcoredeviceadvisorSuiteDefinitionTagsOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionTagsOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotcoredeviceadvisor_suite_definition

iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotcoredeviceadvisorSuiteDefinitionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>

---



