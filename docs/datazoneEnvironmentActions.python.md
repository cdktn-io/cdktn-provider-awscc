# `datazoneEnvironmentActions` Submodule <a name="`datazoneEnvironmentActions` Submodule" id="@cdktn/provider-awscc.datazoneEnvironmentActions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentActions <a name="DatazoneEnvironmentActions" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions awscc_datazone_environment_actions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_actions

datazoneEnvironmentActions.DatazoneEnvironmentActions(
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
  description: str = None,
  domain_identifier: str = None,
  environment_identifier: str = None,
  identifier: str = None,
  parameters: DatazoneEnvironmentActionsParameters = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Amazon DataZone environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | The identifier of the Amazon DataZone environment in which the action is taking place. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | The ID of the Amazon DataZone environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | The parameters of the environment action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.name"></a>

- *Type:* str

The name of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#name DatazoneEnvironmentActions#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.description"></a>

- *Type:* str

The description of the Amazon DataZone environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#description DatazoneEnvironmentActions#description}

---

##### `domain_identifier`<sup>Optional</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#domain_identifier DatazoneEnvironmentActions#domain_identifier}

---

##### `environment_identifier`<sup>Optional</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.environmentIdentifier"></a>

- *Type:* str

The identifier of the Amazon DataZone environment in which the action is taking place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#environment_identifier DatazoneEnvironmentActions#environment_identifier}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.identifier"></a>

- *Type:* str

The ID of the Amazon DataZone environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#identifier DatazoneEnvironmentActions#identifier}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

The parameters of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#parameters DatazoneEnvironmentActions#parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDomainIdentifier">reset_domain_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetEnvironmentIdentifier">reset_environment_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.putParameters"></a>

```python
def put_parameters(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.putParameters.parameter.uri"></a>

- *Type:* str

The URI of the console link specified as part of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#uri DatazoneEnvironmentActions#uri}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_identifier` <a name="reset_domain_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDomainIdentifier"></a>

```python
def reset_domain_identifier() -> None
```

##### `reset_environment_identifier` <a name="reset_environment_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetEnvironmentIdentifier"></a>

```python
def reset_environment_identifier() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetParameters"></a>

```python
def reset_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatazoneEnvironmentActions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isConstruct"></a>

```python
from cdktn_provider_awscc import datazone_environment_actions

datazoneEnvironmentActions.DatazoneEnvironmentActions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datazone_environment_actions

datazoneEnvironmentActions.DatazoneEnvironmentActions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datazone_environment_actions

datazoneEnvironmentActions.DatazoneEnvironmentActions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datazone_environment_actions

datazoneEnvironmentActions.DatazoneEnvironmentActions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatazoneEnvironmentActions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneEnvironmentActions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneEnvironmentActions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentActions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentActionsId">environment_actions_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference">DatazoneEnvironmentActionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifierInput">environment_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `environment_actions_id`<sup>Required</sup> <a name="environment_actions_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentActionsId"></a>

```python
environment_actions_id: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parameters"></a>

```python
parameters: DatazoneEnvironmentActionsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference">DatazoneEnvironmentActionsParametersOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `environment_identifier_input`<sup>Optional</sup> <a name="environment_identifier_input" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifierInput"></a>

```python
environment_identifier_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parametersInput"></a>

```python
parameters_input: IResolvable | DatazoneEnvironmentActionsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentActionsConfig <a name="DatazoneEnvironmentActionsConfig" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_actions

datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  domain_identifier: str = None,
  environment_identifier: str = None,
  identifier: str = None,
  parameters: DatazoneEnvironmentActionsParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.name">name</a></code> | <code>str</code> | The name of the environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.description">description</a></code> | <code>str</code> | The description of the Amazon DataZone environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | The identifier of the Amazon DataZone environment in which the action is taking place. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.identifier">identifier</a></code> | <code>str</code> | The ID of the Amazon DataZone environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | The parameters of the environment action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#name DatazoneEnvironmentActions#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Amazon DataZone environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#description DatazoneEnvironmentActions#description}

---

##### `domain_identifier`<sup>Optional</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#domain_identifier DatazoneEnvironmentActions#domain_identifier}

---

##### `environment_identifier`<sup>Optional</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

The identifier of the Amazon DataZone environment in which the action is taking place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#environment_identifier DatazoneEnvironmentActions#environment_identifier}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The ID of the Amazon DataZone environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#identifier DatazoneEnvironmentActions#identifier}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.parameters"></a>

```python
parameters: DatazoneEnvironmentActionsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

The parameters of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#parameters DatazoneEnvironmentActions#parameters}

---

### DatazoneEnvironmentActionsParameters <a name="DatazoneEnvironmentActionsParameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_actions

datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters.property.uri">uri</a></code> | <code>str</code> | The URI of the console link specified as part of the environment action. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the console link specified as part of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#uri DatazoneEnvironmentActions#uri}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentActionsParametersOutputReference <a name="DatazoneEnvironmentActionsParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment_actions

datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneEnvironmentActionsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

---



